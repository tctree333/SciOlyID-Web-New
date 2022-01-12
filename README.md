# SciOlyID Web

This is the repo for the updated SciOlyID website. It's built with [SvelteKit](https://kit.svelte.dev/), with [mdsvex](https://mdsvex.pngwn.io/) for markdown and [Tailwind](https://tailwindcss.com/) for styling.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Since we're deploying on Netlify, the Netlify adapter is currently installed.

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
