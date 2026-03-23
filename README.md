# Sai Santhosh — Portfolio

Brutalist-style personal portfolio for Chode Sai Santhosh.

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:5173
```

## Deploy (Netlify / Vercel)

```bash
npm run build      # generates dist/
```
- **Netlify Drop**: drag the `dist/` folder to netlify.com/drop
- **Vercel**: `npx vercel` in the project root

## CV Download
`FinalCV_main_.pdf` is in the `public/` folder — it gets served at `/FinalCV_main_.pdf`.

## EmailJS (Contact Form)
Credentials are already configured in `src/components/sections/Contact.jsx`.
The form sends to santhoshchode8469@gmail.com on deployment.
