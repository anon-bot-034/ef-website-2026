# Erin's Farm — Website 2026

Next.js 15 + Tailwind CSS. Deployed on Vercel at erinsfarm.net.

## Dev

```bash
npm install
npm run dev       # http://localhost:3000
npm run build
```

## Environment Variables

Add these in Vercel → Settings → Environment Variables:

| Key | Purpose |
|-----|---------|
| `RESEND_API_KEY` | Sends contact + adoption form emails to connor.yanz@gmail.com |

---

## TODO

### Re-enable when ready
- [ ] **Adopt/Sponsor an Animal page** (`/how-to-help/adopt-sponsor`)
  - Nav link commented out in `src/components/layout/header.jsx`
  - Page exists at `src/app/how-to-help/adopt-sponsor/page.tsx`
  - Needs: correct animal photos assigned to each animal card, review form fields
  - To re-enable: uncomment the nav item in header.jsx

- [ ] **Barn Raising page** (`/how-to-help/barn-raising`)
  - Nav link commented out in `src/components/layout/header.jsx`
  - Page exists at `src/app/how-to-help/barn-raising/page.tsx`
  - To re-enable: uncomment the nav item in header.jsx when campaign is ready to launch

### Email
- [ ] Sign up at resend.com, get API key, add as `RESEND_API_KEY` in Vercel env vars
  - Activates contact form + adoption form emails
  - Both send to connor.yanz@gmail.com

### Photos
- [ ] Assign correct animal photos to each animal on the adopt-sponsor page
  - Current assignments are placeholder/random — swap filenames in `src/app/how-to-help/adopt-sponsor/page.tsx`

### Domain
- [ ] DNS fully propagated to Vercel (Netfirms nameservers updated)
- [ ] Confirm erinsfarm.net loads new site with padlock

### Nice to have
- [ ] Add rate limiting to `/api/contact` and `/api/adopt` to prevent form spam
- [ ] Meta Pixel ID confirmed and tested in Events Manager
- [ ] GA4 real-time view shows traffic after go-live
