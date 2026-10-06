# ImageFetcher

A responsive random-photo browser by Dipan Nama. Landscape, square and portrait crops, optional monochrome, photographer/source links, saved light/dark theme, request timeouts and retryable errors. No API key or account needed.

## Run and check

Node 22: `npm test` (11 deterministic unit tests), then `npm run build`. Serve `dist` with any static server. No packages to install. Browser checks cover live image loading, crops, theme, errors, keyboard controls and narrow-screen overflow.

## Deployment

GitHub Pages uses GitHub Actions. Only a push to `main` triggers Production Pages. No pull-request, feature-branch or manual trigger exists. Test locally on a typed branch, open one PR and squash once into main. The workflow tests and packages `dist`, then deploys once. Keep Pages Source set to GitHub Actions.

## Notes

The previous source.unsplash.com endpoint returned HTTP 503 during migration. The legacy scripts/styles remain in `js` and `css`, with original source in master history. The new app deliberately says random discovery, not keyword search: Picsum does not provide keyword search. Images are third-party network requests, and may fail independently of the site. No image uploads or password/account storage. Theme is the only locally persisted value. Original photo links are restricted to HTTPS unsplash.com; metadata uses textContent, never HTML.

Provider: https://picsum.photos/ (seed info, image IDs and crop API). Review the original source/license before reuse.

UI: native browser controls with button styling adapted from Pines (https://devdojo.com/pines/docs/button), using rounded neutral controls; component discovery checked at https://shoogle.dev/. No client framework or remote script dependency is needed.
