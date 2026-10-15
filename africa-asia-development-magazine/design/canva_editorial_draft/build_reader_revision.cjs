/* Preserve the original master and the commented Canva. Reuse its drawing,
 * photography, palette and registry helpers, then build a separate revision.
 * Run with the same NODE_PATH as build.cjs. */
const fs = require('fs');
const path = require('path');
const original = fs.readFileSync(path.join(__dirname, 'build.cjs'), 'utf8');
const boundary = original.indexOf('// 01 — equal documentary fields');
if (boundary < 0) throw new Error('Production helper boundary not found');
const pages = fs.readFileSync(path.join(__dirname, 'reader_revision_pages.cjs'), 'utf8');
new Function('require', '__dirname', original.slice(0, boundary) + pages)(require, __dirname);
