# Kevin Jeffries — personal site

Static GitHub Pages site for projects, competition STEP downloads, Instagram, and email contact. No dependencies or build step.

## Publishing

Create a public repository in the intended GitHub account, push these files to `main`, and choose GitHub Actions under Settings → Pages → Source. The included workflow publishes only the public site files. Use `<username>.github.io` as the repository name for an account-level site; any other repository name gives a project URL.

## Adding competition downloads

Upload the provided STEP files as assets on a GitHub Release in the public repository. Add an entry to `content.js` with `id` (a unique lowercase hyphenated slug), `title`, `description`, `version`, and the asset's HTTPS `downloadUrl`. Optional `imageUrl` is an HTTPS project image. Keep existing release assets for stable older download links. A project's direct link is the site URL followed by `#` and its id.

The library is deliberately empty until real files are supplied. No dummy downloads are included. Public release assets must be intended for public distribution.

## Adding featured content

Add entries to the `features` array in `content.js` with `title`, `description`, and an HTTPS `url`. Push changes to `main` to publish automatically.

## Identity

Display name: Kevin Jeffries. Display handle: @kev.jeffriess. Instagram: https://www.instagram.com/kev.jeffries/. Contact: kev.jeffries00@gmail.com. The handle and Instagram differ intentionally per the owner's instructions.
