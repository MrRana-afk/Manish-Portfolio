# Manish Rana portfolio

Buildless static portfolio. The existing Cloudflare integration publishes the main branch of MrRana-afk/Manish-Portfolio.

## Editing

- assets/data.js: project content, photo references, credits, and activity timeline.
- assets/app.js: page templates, hash routes, filters, search, and keyboard navigation.
- assets/styles.css: design tokens, responsive layouts, photo treatment, and motion.
- index.html: shared navigation, metadata, and versioned asset references.

Serve the repository root with a static HTTP server; no installation or build is needed. Publish index.html and the complete assets folder together. Hash routes support direct links on static hosting and preserve earlier section links.

The hero uses Manish's original public portrait. The eight project covers are licensed context photographs from Pexels, credited individually in the case studies and on the Photo credits page. They are not project screenshots or photographs of Manish's own equipment. See assets/IMAGE-CREDITS.md.

Project cover images load lazily. Motion uses short opacity/transform transitions, with the native View Transition API where supported. Other browsers use the regular page entrance. Reduced-motion preferences and the footer motion switch are respected. No continuous canvas animation or scroll hijacking is used.

Ctrl/Cmd+K opens quick navigation. The mobile menu moves focus into the menu, prevents background interaction while open, and returns focus when closed with Escape.

Project descriptions for OIPA, operating systems coursework, and Rana Clothing Store were aligned with their public repository content. Keep achievements and course statuses supported by current evidence.
