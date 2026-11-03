// Public project assets. The assembled preview and print download stay separate.
window.siteContent = {
  // Display order; the first tab opens by default. Catapult is featured for now.
  competitions: [
    { id: 'catapult', title: 'Catapult' },
    { id: 'trebuchet', title: 'Trebuchet' },
    { id: 'egg-drop', title: 'Egg Drop' }
  ],
  projects: [{
    id: 'chatgpt-catapult',
    competition: 'catapult',
    category: 'CATAPULT COMPETITION / CHATGPT',
    title: 'ChatGPT’s Catapult',
    description: 'ChatGPT’s finger-powered ping pong catapult. Explore the complete assembly in 3D, then download the four-piece print layout to make your own.',
    version: 'Four parts · No screws or glue · STEP / 268 KB',
    imageUrl: 'projects/strike29/assembly.png',
    modelUrl: 'projects/strike29/Strike29-Assembly.glb',
    downloadUrl: 'https://github.com/kjeffriess/kjeffriess.github.io/releases/download/competition-files-v1/Strike29-PrintPlate.step',
    downloadFilename: 'Strike29-PrintPlate.step',
    downloadLabel: 'Download print-ready STEP',
    downloadNote: 'Parts are oriented for printing. Import into your slicer at 100% scale. CAD design; physical print testing is still pending.'
  }, {
    id: 'claude-catapult',
    competition: 'catapult',
    category: 'CATAPULT COMPETITION / CLAUDE',
    title: 'Claude’s Catapult',
    description: 'Claude’s three-part finger-powered catapult. Explore the assembled design in 3D, then download the parts laid out for printing.',
    version: 'Three parts · No hardware · STEP / 181 KB',
    imageUrl: 'projects/claude-catapult/assembly.png',
    modelUrl: 'projects/claude-catapult/catapult_ASSEMBLED.glb',
    downloadUrl: 'https://github.com/kjeffriess/kjeffriess.github.io/releases/download/competition-files-v1/catapult_PRINT_PLATE.step',
    downloadFilename: 'catapult_PRINT_PLATE.step',
    downloadLabel: 'Download print-ready STEP',
    downloadNote: 'Parts are oriented for printing. Import into your slicer at 100% scale. Assemble the base, arm and snap-fit pin by hand.'
  }, {
    id: 'chatgpt-trebuchet',
    competition: 'trebuchet',
    category: 'TREBUCHET COMPETITION / CHATGPT',
    title: 'ChatGPT’s Trebuchet',
    description: 'ChatGPT’s Mantis 35 ping pong trebuchet, with a hanging counterweight and articulated sling. Explore the assembly in 3D, then download the print layout.',
    version: 'Mantis 35 · STEP / 743 KB',
    imageUrl: 'projects/chatgpt-trebuchet/assembly.png',
    modelUrl: 'projects/chatgpt-trebuchet/assembly.glb',
    downloadUrl: 'https://github.com/kjeffriess/kjeffriess.github.io/releases/download/competition-files-v1/Mantis35_PrintPlate.step',
    downloadFilename: 'Mantis35_PrintPlate.step',
    downloadLabel: 'Download print-ready STEP',
    downloadNote: 'Use the supplied print orientations at 100% scale. Counterweight ballast: 40 US quarters. CAD design; physical print testing is still pending.'
  }, {
    id: 'claude-trebuchet',
    competition: 'trebuchet',
    category: 'TREBUCHET COMPETITION / CLAUDE',
    title: 'Claude’s Trebuchet',
    description: 'Claude’s ping pong trebuchet. Explore the assembled counterweight and sling mechanism in 3D, then download the parts arranged for printing.',
    version: 'STEP / 1.06 MB',
    imageUrl: 'projects/claude-trebuchet/assembly.png',
    modelUrl: 'projects/claude-trebuchet/assembly.glb',
    downloadUrl: 'https://github.com/kjeffriess/kjeffriess.github.io/releases/download/competition-files-v1/pingpong_trebuchet_plate.step',
    downloadFilename: 'pingpong_trebuchet_plate.step',
    downloadLabel: 'Download print-ready STEP',
    downloadNote: 'Parts are arranged in the supplied print layout. Import into your slicer at 100% scale.'
  }, {
    id: 'chatgpt-egg-drop',
    competition: 'egg-drop',
    category: 'EGG DROP COMPETITION / CHATGPT',
    title: 'ChatGPT’s Egg Drop',
    description: 'ChatGPT’s Halo R12 Stable egg-drop design. Explore the assembled model in 3D, then download the print layout.',
    version: 'Halo R12 Stable · STEP / 4.61 MB',
    modelUrl: 'projects/chatgpt-egg-drop/assembly.glb',
    downloadUrl: 'https://github.com/kjeffriess/kjeffriess.github.io/releases/download/competition-files-v1/Halo-R12-Stable-PrintPlate.step',
    downloadFilename: 'Halo-R12-Stable-PrintPlate.step',
    downloadLabel: 'Download print-ready STEP',
    downloadNote: 'Use the supplied print layout. Import into your slicer at 100% scale.'
  }, {
    id: 'claude-egg-drop',
    competition: 'egg-drop',
    category: 'EGG DROP COMPETITION / CLAUDE',
    title: 'Claude’s Egg Drop',
    description: 'Claude’s Airbrake egg-drop design. Explore the assembled model in 3D, then download the A1 print layout.',
    version: 'Airbrake v2 · STEP / 1.24 MB',
    modelUrl: 'projects/claude-egg-drop/assembly.glb',
    downloadUrl: 'https://github.com/kjeffriess/kjeffriess.github.io/releases/download/competition-files-v1/Claude_EggDrop_AIRBRAKE_A1_plate_v2.step',
    downloadFilename: 'Claude_EggDrop_AIRBRAKE_A1_plate_v2.step',
    downloadLabel: 'Download print-ready STEP',
    downloadNote: 'Use the supplied print layout. Import into your slicer at 100% scale.'
  }],
  features: []
};
