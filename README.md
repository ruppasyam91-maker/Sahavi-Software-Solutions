# Sahavi Software Solutions

An Oracle Enterprise Performance Management (EPM) consulting and staffing website, with a Node.js API for contact inquiries.

## Requirements

- Node.js 20.19+ or 22.12+ for the Vite frontend. The backend alone supports Node.js 18+.
- npm, included with Node.js.

## Run Locally

Run the backend and frontend in separate terminals.

Terminal 1, start the contact API:

```powershell
cd C:\website\backend
npm start
```

Terminal 2, install frontend dependencies and start Vite:

```powershell
cd C:\website\frontend
npm install
npm run dev
```

Open the local URL printed by Vite, usually http://localhost:5173. Keep both terminals running while using the contact form.

## Pages

- Home: `/index.html`
- About Us: `/about.html`
- Services: `/services.html`
- Technologies: `/technologies.html`
- Contact Us: `/contact.html`

The shared navigation links directly to each page.

## Contact API

- `GET /api/health` returns the API health status.
- `POST /api/contact` accepts a JSON inquiry with `name`, `email`, optional `company`, and `message` fields.

The API validates required fields, limits the request body to 8 KB, and allows up to five inquiries per IP address in a 15-minute window. Accepted inquiries are appended to `backend/data/inquiries.jsonl`, which is excluded from Git. Inquiries are stored locally and are not emailed.

Configuration:

- `PORT` sets the API port. Defaults to `3000`.
- `INQUIRIES_FILE` sets the inquiry storage path. Defaults to `backend/data/inquiries.jsonl`.

During development, Vite proxies `/api` requests to `http://127.0.0.1:3000`.

## Production Build

```powershell
cd C:\website\frontend
npm run build
```

The static site is generated in `frontend/dist`. To preview that build locally:

```powershell
npm run preview
```

The backend must be deployed and configured separately for production contact submissions.

## GitHub Pages

The website is deployed automatically from the `main` branch with GitHub Actions:

https://ruppasyam91-maker.github.io/Sahavi-Software-Solutions/

The public website is static. The contact form requires the backend to be deployed separately and configured for production.

## Repository

GitHub: https://github.com/ruppasyam91-maker/Sahavi-Software-Solutions