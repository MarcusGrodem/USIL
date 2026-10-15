// Convert marked placeholder shapes into native OOXML freeform geometry.
const fs=require('fs');
const JSZip=require('jszip');
async function main(){
 const file=process.argv[2],zip=await JSZip.loadAsync(fs.readFileSync(file));let count=0;
 for(const name of Object.keys(zip.files).filter(n=>/^ppt\/slides\/slide\d+\.xml$/.test(n))){
  let xml=await zip.file(name).async('string');
  xml=xml.replace(/<p:sp>[^]*?<\/p:sp>/g,sp=>{
   const match=sp.match(/name="EDITABLEPOLY_([\d,;|]+)"/);if(!match)return sp;
   const d=match[1].split('|').map(path=>path.split(';').map(p=>p.split(',')).map(([x,y],i)=>`<a:${i?'lnTo':'moveTo'}><a:pt x="${x}" y="${y}"/></a:${i?'lnTo':'moveTo'}>`).join('')+'<a:close/>').join('');
   const geom=`<a:custGeom><a:avLst/><a:gdLst/><a:ahLst/><a:cxnLst/><a:rect l="0" t="0" r="r" b="b"/><a:pathLst><a:path w="10000" h="10000">${d}<a:close/></a:path></a:pathLst></a:custGeom>`;
   count++;return sp.replace(/<a:prstGeom[^]*?<\/a:prstGeom>/,geom).replace(/name="EDITABLEPOLY_[\d,;|]+"/,'name="Editable road path '+count+'"');
  });zip.file(name,xml);
 }
 fs.writeFileSync(file,await zip.generateAsync({type:'nodebuffer',compression:'DEFLATE'}));console.log({nativePaths:count,file});
}
main().catch(e=>{console.error(e);process.exit(1)});
