
$projectPorts = @(5000, 5173)
$connections = Get-NetTCPConnection -State Listen -ErrorAction SilentlyContinue |
  Where-Object { $_.LocalPort -in $projectPorts }

foreach ($connection in $connections) {
  $process = Get-Process -Id $connection.OwningProcess -ErrorAction SilentlyContinue
  if ($process -and $process.ProcessName -in @('node', 'python')) {
    Stop-Process -Id $process.Id -Force -ErrorAction SilentlyContinue
    Write-Host "Stopped $($process.ProcessName) on port $($connection.LocalPort)."
  }
}

Write-Host 'ArcadeHub development servers are stopped.'
