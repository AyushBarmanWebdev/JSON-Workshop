import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = path.join(__dirname, '../node_modules/monaco-editor/min/vs');
const dest = path.join(__dirname, '../public/monaco/vs');

try {
  if (fs.existsSync(src)) {
    // Ensure public/monaco directory exists
    fs.mkdirSync(path.join(__dirname, '../public/monaco'), { recursive: true });
    
    // Copy the minified editor source files recursively
    fs.cpSync(src, dest, { recursive: true });
    console.log('Successfully copied Monaco Editor files to public/monaco/vs');
  } else {
    console.error('Error: monaco-editor min directory not found at:', src);
    console.error('Please make sure monaco-editor is installed in node_modules.');
    process.exit(1);
  }
} catch (error) {
  console.error('Error copying Monaco files:', error);
  process.exit(1);
}
