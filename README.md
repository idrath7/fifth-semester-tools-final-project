
# ArcadeHub

Full-stack gaming arcade and club management system based on the CSE-3532 project proposal.

## Included

- Public home, stations, about, and contact pages
- Firebase-ready email/password, Google, and GitHub authentication
- Admin, worker, and user role-aware dashboard
- Station CRUD and availability tracking
- Live session timer with automatic billing
- Pre-bookings with approve/reject/cancel workflow
- Due-customer and payment tracking
- Daily expense logging
- Station reviews and ratings
- Search and filtering
- Revenue, expense, session, and utilization reports
- MongoDB/Mongoose REST API with JWT/Firebase-token middleware
- Demo mode, so the UI can be explored before cloud credentials are added

## Run locally

1. Copy `server/.env.example` to `server/.env` and `client/.env.example` to `client/.env`.
2. Add MongoDB and Firebase credentials. For a quick UI preview, leave `VITE_DEMO_MODE=true`.
3. Install and start:

   ```bash
   npm install
   npm run dev
   ```

- Client: http://localhost:5173
- API: http://localhost:5000/api

## Demo accounts

In demo mode, choose a role from the login screen. No password or external service is required.

## Proposal coverage notes

- Public station browsing now supports text, type, availability, and maximum-price filters.
- Station detail pages include authenticated star ratings and review comments.
- New bookings can be created from the dashboard and staff can approve or reject them.
- Admin/worker dashboards include a due-customer queue with payment settlement.
- Dashboard URLs are role-guarded, not only hidden in the sidebar.
- When demo mode is disabled, authentication profiles, stations, bookings, dues, and reviews use the REST API.

## Production checklist

- Set `VITE_DEMO_MODE=false`.
- Create Firebase Email/Password, Google, and GitHub providers.
- Put the Firebase service-account JSON in `FIREBASE_SERVICE_ACCOUNT` on the server.
- Replace the development CORS origin and JWT secret.
- Seed the first admin using `npm run seed --workspace server`.
- Deploy `client` to Vercel and `server` to Render.
