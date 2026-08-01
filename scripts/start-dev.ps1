
$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
$projectPorts = @(5000, 5173)

Write-Host 'Checking MongoDB...'
$mongoService = Get-Service -Name MongoDB -ErrorAction Stop
if ($mongoService.Status -ne 'Running') {
  throw 'MongoDB service is not running. Start MongoDB, then run this task again.'
}

Write-Host 'Cleaning old ArcadeHub development processes...'
$connections = Get-NetTCPConnection -State Listen -ErrorAction SilentlyContinue |
  Where-Object { $_.LocalPort -in $projectPorts }

foreach ($connection in $connections) {
  $process = Get-Process -Id $connection.OwningProcess -ErrorAction SilentlyContinue
  if ($process -and $process.ProcessName -in @('node', 'python')) {
    Stop-Process -Id $process.Id -Force -ErrorAction SilentlyContinue
  }
}

Start-Sleep -Milliseconds 800
Set-Location $projectRoot
Write-Host 'Starting ArcadeHub...'
Write-Host 'Website: http://localhost:5173'
Write-Host 'API:     http://localhost:5000/api'
& 'C:\Program Files\nodejs\npm.cmd' run dev

