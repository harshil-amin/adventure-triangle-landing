## ADVENTURE TRIANGLE (NEXT.JS)

# DESCRIPTION
Adventure Triangle is a Next.js App Router landing page with Tailwind CSS styling and client-side forms (Partner, Launch Event, Beta). The root HTML structure is defined in app/layout.tsx, and the main page UI + form handlers live in app/page.tsx.
​
# REQUIREMENTS
Node.js and npm installed
Dependencies installed via npm
Tailwind configured through PostCSS.
​
# GETTING STARTED (LOCAL)
Install dependencies:
npm install

Start the dev server:
npm run dev

Then open: http://localhost:3000

# PRODUCTION BUILD

Build:
npm run build

Start:
npm run start

# PROJECT FILES (COMMON)
app/layout.tsx: Root layout, metadata, imports app/globals.css.​
app/page.tsx: Landing page content, form handlers, in-memory debug storage.
app/globals.css: Global CSS + Tailwind import and custom styles.
postcss.config.mjs: PostCSS plugins for Tailwind.​

# DUMMY DATA / DEBUG STORAGE
If you added an in-memory ref store (storageRef) and exposed a global debug function, you can inspect saved submissions in the browser:
Open the site in your browser

Open DevTools Console

Run:
DEBUG_STORAGE()

# Note: 
In-memory dummy storage resets on page refresh and redeploys.
