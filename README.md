# J H Gutter LLC — Website

A fast, mobile-friendly website with three pages: Home, Services and Contact. Plain HTML, CSS and JavaScript, so it works on any web host with no setup or build step.

## Files

```
index.html       Home page
services.html    Services page (installation, cleaning, repairs, FAQ)
contact.html     Contact page with the quote form
css/style.css    All styles (colors are at the top)
js/main.js       Mobile menu and quote form
images/          Photos, logo and site icons
robots.txt       Lets search engines index the site
```

## Before going live: update these

Search the HTML files for each item and replace it. Each one appears on all three pages.

| What | Currently | Where |
|---|---|---|
| Business hours | Mon–Sat 8am–6pm | Top bar on every page, hours table in contact.html |
| Email | info@jhgutterllc.com | Footer on every page, contact.html |
| Licensed & insured | Shown in the hero | index.html (delete the line if it isn't true) |
| Facebook link | https://www.facebook.com/ | Top bar and footer |
| Instagram link | https://www.instagram.com/ | Top bar and footer |
| Google reviews link | https://www.google.com/maps | Top bar and footer (use your Google Business Profile review link) |
| Nextdoor link | https://nextdoor.com/ | Footer |
| Service area towns | Fayetteville, Peachtree City, Tyrone, Brooks, Riverdale, Fayette County | index.html, contact.html, and the `areaServed` list in index.html |
| Reviews | 3 SAMPLE reviews | index.html, "What Our Customers Say". Replace with real reviews before launch |

Remove a social platform you don't use by deleting its `<a ...>...</a>` line.

## Turn on the quote form (free, about 5 minutes)

The form needs a service to email the requests to you. Formspree is free for up to 50 requests a month.

1. Go to https://formspree.io and create a free account with the email where you want the requests.
2. Click **New Form**, name it "Website quotes", and copy the form URL (it looks like `https://formspree.io/f/abcdwxyz`).
3. Open `js/main.js` and paste it between the quotes on this line:
   `const FORM_ENDPOINT = "";`
4. Upload the site again. Send yourself a test request and confirm it in Formspree the first time.

Until this is set, the form asks visitors to call 404-804-6559 instead.

## Put the website online

Any of these work. Upload the whole folder, keeping the folder structure.

- **Netlify (free):** go to https://app.netlify.com/drop and drag the folder onto the page. You can connect your own domain in Site settings → Domain management.
- **Your existing web host (GoDaddy, Hostinger, Bluehost…):** upload everything into the `public_html` folder with the host's File Manager.

After it's live:

1. Add your domain to the `og:image` line in each page's `<head>` (for example `https://www.yourdomain.com/images/logo.jpg`) so links shared on Facebook show your logo.
2. Set up a free Google Business Profile at https://business.google.com and add the website link. This matters more than anything else for showing up in "gutter cleaning near me" searches.

## Changing colors

All colors are named at the top of `css/style.css` (`--gold`, `--ink` and so on). Change a value there and it updates everywhere.
