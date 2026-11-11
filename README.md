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
- Contact Us: `/contact.html`
- Privacy: `/privacy.html`

The shared navigation links directly to each page.

## Contact API

- `GET /api/health` returns the API health status.
- `POST /api/contact` accepts a JSON inquiry with `name`, `email`, optional `company`, and `message` fields.

The API validates required fields, limits the request body to 8 KB, allows up to five inquiries per IP address in a 15-minute window, and restricts browser requests to configured origins. It supports Resend email delivery. In local development without Resend credentials, accepted inquiries are appended to `backend/data/inquiries.jsonl`; in production, missing delivery configuration returns an error instead of reporting a false success.

Run the backend unit tests with:

```powershell
cd C:\website\backend
npm test
```

Configuration:

- `PORT` sets the API port. Defaults to `3000`.
- `INQUIRIES_FILE` sets the inquiry storage path. Defaults to `backend/data/inquiries.jsonl`.
- `ALLOWED_ORIGIN` (or comma-separated `ALLOWED_ORIGINS`) sets permitted browser origins.
- `RESEND_API_KEY`, `CONTACT_EMAIL`, and `RESEND_FROM_EMAIL` enable email delivery. The sender address must be verified with Resend.

During development, Vite proxies `/api` requests to `http://127.0.0.1:3000`. The API tests cover validation, HTTP responses, CORS, rate limits, and email delivery failures.

## Production Build

```powershell
cd C:\website\frontend
npm run build
```

The static site is generated in `frontend/dist`. To preview that build locally:

```powershell
npm run preview
```

## Production Contact Setup

GitHub Pages only hosts the static frontend. The backend must be deployed separately before the production contact form can send inquiries. A Render blueprint is included in `render.yaml`.

1. Create a Resend account, verify a sender domain, and create an API key.
2. In Render, create a new Blueprint from this repository and set `RESEND_API_KEY`, `RESEND_FROM_EMAIL` (your verified sender), and `CONTACT_EMAIL` (the mailbox that should receive inquiries). The blueprint sets the GitHub Pages origin for `ALLOWED_ORIGIN`.
3. After the Render service is deployed, copy its HTTPS service URL.
4. In GitHub, open **Settings → Secrets and variables → Actions → Variables** and add:
   - `VITE_CONTACT_API_URL`: the Render service origin, with no trailing slash (for example, `https://sahavi-contact-api.onrender.com`).
   - `VITE_CONTACT_EMAIL`: the confirmed public contact email address. Until set, the site does not display an unverified email address.
5. Rerun the Pages workflow, then submit a test inquiry and confirm it arrives in the configured mailbox.

Do not put the Resend API key in GitHub frontend variables or source files. Render's free web-service plan may sleep while idle, so the first request after inactivity can be delayed. The contact form is disabled on the published frontend until `VITE_CONTACT_API_URL` is set.

## Search and Privacy

The site includes page-specific titles and descriptions, canonical and social-sharing metadata, Organization structured data, `robots.txt`, and a sitemap at `/sitemap.xml`. To verify the site in Google Search Console, create a URL-prefix property, choose the HTML-tag method, and add the tag's content value as the GitHub Actions variable `VITE_GOOGLE_SITE_VERIFICATION`. Rerun the Pages workflow, complete verification in Search Console, and submit:

`https://ruppasyam91-maker.github.io/Sahavi-Software-Solutions/sitemap.xml`

Google Search Console verification must be completed from the account that manages the site; no verification token has been provided or added. The Privacy page explains contact-form processing. Review it against the company's actual legal and retention requirements before relying on it as a formal legal notice.

No client testimonials, case studies, or named team profiles have been added because verified, publishable details were not provided.

## GitHub Pages

To publish the website, first select **Settings → Pages → Build and deployment → Source → GitHub Actions** in the repository:

https://github.com/ruppasyam91-maker/Sahavi-Software-Solutions/settings/pages

After Pages is enabled, the website deploys automatically when frontend files are pushed to `main`:

https://ruppasyam91-maker.github.io/Sahavi-Software-Solutions/

The public website is static. The contact form requires the backend to be deployed separately and configured for production. After enabling Pages, rerun the latest failed workflow from the repository's Actions tab if it does not start automatically.

## Repository

GitHub: https://github.com/ruppasyam91-maker/Sahavi-Software-Solutions