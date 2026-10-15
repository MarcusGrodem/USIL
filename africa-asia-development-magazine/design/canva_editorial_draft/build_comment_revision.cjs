/* Preserve previous editions and their comments. */
const fs=require('fs'),path=require('path');
let src=fs.readFileSync(path.join(__dirname,'build_bold_revision.cjs'),'utf8');
src=src.replace("const replacements=fs.readFileSync(path.join(__dirname,'bold_pages.cjs'),'utf8');","let replacements=fs.readFileSync(path.join(__dirname,'bold_pages.cjs'),'utf8');\nconst extra=fs.readFileSync(path.join(__dirname,'comment_pages.cjs'),'utf8');\nfor(const block of extra.split(/^\\/\\/ PAGE /m).slice(1)){const n=block.slice(0,block.indexOf('\\n')).trim();const re=new RegExp('^// PAGE '+n+'\\\\n[\\\\s\\\\S]*?(?=^// PAGE |$(?![\\\\s\\\\S]))','m');if(re.test(replacements))replacements=replacements.replace(re,'// PAGE '+block);else replacements+='\\n// PAGE '+block;}");
src=src.replace("const overrides=fs.readFileSync(path.join(__dirname,'bold_overrides.cjs'),'utf8');","const overrides=fs.readFileSync(path.join(__dirname,'bold_overrides.cjs'),'utf8').replace('if(n!==13)countryRibbon(208);', 'if(n!==13 && ![18,22].includes(n))countryRibbon(208);')+fs.readFileSync(path.join(__dirname,'comment_helpers.cjs'),'utf8');");
src=src.replace("replacements.replace(re,'// PAGE '+block)","replacements.replace(re,()=> '// PAGE '+block)");
src=src.replace("')+fs.readFileSync(path.join(__dirname,'comment_helpers.cjs')", "').replace(\"else nativeText('SOUTH KOREA\",\"else if(n===13)nativeText('SOUTH KOREA\")+fs.readFileSync(path.join(__dirname,'comment_helpers.cjs')");
src=src.replace('![18,22].includes(n)','![18,22].includes(n)');
src=src.replace('n!==13 && ![18,22].includes(n)','[1,2,3,4,9,11,12,25].includes(n)');
src=src.replace("const extra=fs.readFileSync(path.join(__dirname,'comment_pages.cjs'),'utf8');","const extra=fs.readFileSync(path.join(__dirname,'comment_pages.cjs'),'utf8')+'\\n'+fs.readFileSync(path.join(__dirname,'why_pages.cjs'),'utf8');");
src=src.replaceAll('africa_asia_bold_revision_editable.pptx','africa_asia_why_revision_editable.pptx').replaceAll('bold_revision_manifest.json','why_revision_manifest.json').replaceAll('bold-revision-proofs','why-revision-proofs');
new Function('require','__dirname',src)(require,__dirname);
