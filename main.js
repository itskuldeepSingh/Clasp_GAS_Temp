const fs = require('fs');
const path = require('path');

// File paths
const projectFolder = path.join(__dirname, 'appsScript');
const cssFile = path.join(__dirname, 'public', 'style.css');
const jsFile = path.join(__dirname, 'public', 'script.js');
const indexFile = path.join(__dirname, 'public', 'index.html');

// Read the files
const cssContent = fs.readFileSync(cssFile, 'utf-8');
const jsContent = fs.readFileSync(jsFile, 'utf-8');
let indexContent = fs.readFileSync(indexFile, 'utf-8');

// Wrap the CSS and JS content
const wrappedCss = `<style>\n${cssContent}\n</style>`;
const wrappedJs = `<script>\n${jsContent}\n</script>`;

// Replace references in index.html
indexContent = indexContent
  .replace('<link rel="stylesheet" href="style.css">', '<?!= include(\'style\') ?>')
  .replace('<script src="script.js"></script>', '<?!= include(\'script\') ?>');

// Write to the respective files in the second folder
fs.writeFileSync(path.join(projectFolder, 'style.html'), wrappedCss);
fs.writeFileSync(path.join(projectFolder, 'script.html'), wrappedJs);
fs.writeFileSync(path.join(projectFolder, 'index.html'), indexContent);

console.log('Files processed successfully.');
