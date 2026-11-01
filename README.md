# Kevin Jeffries - personal site

GitHub Pages publishes main, root directory, at https://kjeffriess.github.io/ . No build step.

## Competition files

Place public project files in projects/<project-id>/ and add an entry in content.js. downloadUrl points to the original print-ready STEP; modelUrl points to a GLB converted from the assembled STEP; imageUrl is the assembly poster. These are separate assets intentionally. Optional downloadFilename, downloadLabel, downloadNote, category and version control the card text. HTTPS external links and same-site relative paths are accepted.

Convert an assembled STEP using cadgen 0.7.26: cadgen glb build Assembly.step Assembly.glb. Verify the preview orientation and that the downloadable STEP matches the supplied print layout. Future updates can be made by asking Codex to add the files. Uploading requires authorized repository access; visitors cannot upload through this site.

STRIKE 2.9 comes from D:/Content/Competitions/Catapult/ChatGPT. Its preview uses Strike29-Assembly.step, and its download is the unchanged Strike29-PrintPlate.step. Physical print testing is pending according to the source README.

## Viewer

The viewer and model load automatically within 300 pixels of the viewport, with no activation click. Offscreen models wait until approached. Loading and 3D stages use the original soft sage background (#f0f1e9); existing image assets remain available but are not shown ahead of interactive models. Google model-viewer 4.1.0 is loaded from jsDelivr with a pinned SHA-384 integrity check and anonymous CORS. A retry button and the STEP download remain available if 3D fails. Automatic loading never moves keyboard focus. The library is Apache-2.0 licensed: https://github.com/google/model-viewer . Files are hosted on GitHub Pages. The viewer supports rotation, zoom, pan, keyboard navigation and reset. No accounts, analytics, upload endpoint or paid service.

Bump the stylesheet and script query versions in index.html when changing them. Test desktop and narrow phone widths, loading, interaction, reset and the download URL before finishing an update.

## Identity

Kevin Jeffries / @kev.jeffriess. Instagram: https://www.instagram.com/kev.jeffriess/ . TikTok: https://www.tiktok.com/@kevjeffriesx . YouTube: https://www.youtube.com/@kevjeffriess . Email: kev.jeffries00@gmail.com.

Claude's Finger Catapult comes from D:/Content/Competitions/Catapult/Claude. Its preview is converted from catapult_ASSEMBLED.step; the download is the unchanged catapult_PRINT_PLATE.step. Its three parts are the base, arm and snap-fit pin.

Trebuchet entries: ChatGPT uses Mantis35_exports/Mantis35_Assembly.step for its preview and Mantis35_PrintPlate.step for download. Claude uses pingpong_trebuchet_ASSEMBLED.step for its preview and pingpong_trebuchet_plate.step for download. Sources are under D:/Content/Competitions/Trebuchet. Downloads are unchanged source files; previews are GLB conversions.

All interactive previews use the same neutral gray material, applied before revealing the model. This changes preview appearance only; source CAD files and STEP downloads retain their original materials.

Competition tabs: list competitions in the desired display order in content.js (Catapult is first for now), and give every project its competition ID. The first competition opens on a normal visit. Only the selected competition is shown, and its cards are created on first selection. Existing project links still open their owning competition. Competition links use #competition-ID. Tabs support arrow keys, Home/End and browser Back/Forward.
