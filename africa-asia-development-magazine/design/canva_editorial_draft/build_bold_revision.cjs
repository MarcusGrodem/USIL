/* Separate user-directed revision. The commented Canva and earlier masters stay intact. */
const fs=require('fs'),path=require('path');
const original=fs.readFileSync(path.join(__dirname,'build.cjs'),'utf8');
let pages=fs.readFileSync(path.join(__dirname,'reader_revision_pages.cjs'),'utf8');
const overrides=fs.readFileSync(path.join(__dirname,'bold_overrides.cjs'),'utf8');
const replacements=fs.readFileSync(path.join(__dirname,'bold_pages.cjs'),'utf8');
for(const block of replacements.split(/^\/\/ PAGE /m).slice(1)){
 const n=Number(block.slice(0,block.indexOf('\n')).trim());
 const start=pages.indexOf(`page(${n},`),next=pages.indexOf('\n// ',start);
 if(start<0||next<0)throw new Error('Missing replacement boundary '+n);
 pages=pages.slice(0,start)+block.slice(block.indexOf('\n')+1).trim()+'\n'+pages.slice(next);
}
// The user removed the separate references page. Integrate essentials with the colophon.
const refStart=pages.indexOf('page(27,'),refEnd=pages.indexOf('\n// ',refStart);
pages=pages.slice(0,refStart)+pages.slice(refEnd);
pages=pages.replace('page(28,','page(27,').replace('page(29,','page(28,');
pages=pages.replaceAll('p. 29','p. 28');
pages=pages.replace('1960: almost level. Not identical.','1960: Ghana and Korea start close.').replace('Track is not the whole story.','Ghana’s railway reached new users.').replace('A huge gap. Not a controlled test.','Two paths. A 16.9-to-1 gap.').replace('The cases that break the shortcut.','Four cases change the story.');
pages=pages.replace('Not one Africa.\\nNot one Asia.','Six countries.\\nSix different paths.');
pages=pages.replace("'africa_asia_reader_revision_editable.pptx'","'africa_asia_bold_revision_editable.pptx'");
pages=pages.replaceAll('reader_revision_manifest.json','bold_revision_manifest.json').replaceAll('reader-revision-proofs','bold-revision-proofs');
const boundary=pages.indexOf('// 01 —');
pages=pages.slice(0,boundary)+overrides+'\n'+pages.slice(boundary);
new Function('require','__dirname',original.slice(0,original.indexOf('// 01 — equal documentary fields'))+pages)(require,__dirname);
