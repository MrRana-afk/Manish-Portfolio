# Manish Rana portfolio

Buildless static website, published from the main branch of MrRana-afk/Manish-Portfolio through the existing Cloudflare integration.

## Edit
- assets/data.js: projects, source links, and activity timeline.
- assets/app.js: page templates, routing, interactions, and the canvas map.
- assets/styles.css: design tokens, layouts, responsive rules, and motion.
- index.html: shared navigation, metadata, and script/style references.

Home, Work, About, Contact, and project case studies use hash routes so direct links work on static hosting. Project filters and search are reflected in the URL. Earlier section links are mapped to their new pages.

Serve the folder with any static HTTP server for a local preview. No installation or build is needed. Upload index.html and the complete assets folder together.

Motion follows the visitor's reduced-motion preference and can be paused in the footer. Quick navigation opens with Ctrl/Cmd+K. The interactive map also supports arrow keys.

Reports without a public source deliberately have no download button. Update course statuses and achievements only when supported by current evidence.
