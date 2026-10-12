/* Editable A4 production master. Evidence is frozen in the project CSVs.
 * Run: NODE_PATH=/tmp/canva-magazine-production/node_modules node design/canva_editorial_draft/build.cjs
 * No source registry, approved figure or control-board file is modified. */
const fs = require('fs');
const path = require('path');
const pptxgen = require('pptxgenjs');
const sharp = require('sharp');
const ROOT = process.cwd(), OUT = __dirname;
const pptx = new pptxgen();
pptx.defineLayout({name:'A4Portrait',width:595.276/72,height:841.89/72});
pptx.layout='A4Portrait'; pptx.author='University project team — editorial draft';
pptx.subject='Six-country evidence-led comparison';
pptx.title='Africa & Asia: Why Did Their Economic Paths Diverge?';
pptx.company='Editorial research magazine'; pptx.lang='en-GB';
pptx.theme={headFontFace:'Alegreya',bodyFontFace:'Montserrat',lang:'en-GB'};
const C={paper:'F4F0E7',ink:'252525',dark:'514E48',grey:'B7B0A4'};
const countries=[
 {name:'Ghana',c:'B95332',shape:'ellipse',gdp:[1101,856,1970],emp:[71.8,37.4],mva:[9.8,11.0]},
 {name:'Botswana',c:'3F684E',shape:'rect',gdp:[394,4039,6254],emp:[12.6,19.5],mva:[4.8,5.7]},
 {name:'Mauritius',c:'D6A23A',shape:'triangle',gdp:[1419,3846,9534],emp:[19.6,5.3],mva:[20.4,10.7]},
 {name:'South Korea',c:'315A78',shape:'diamond',gdp:[1038,9673,33216],emp:[15.5,5.4],mva:[25.2,25.7]},
 {name:'Malaysia',c:'3E7568',shape:'hexagon',gdp:[1266,4185,10171],emp:[18.9,10.5],mva:[24.2,22.2]},
 {name:'Philippines',c:'A63A3A',shape:'cross',gdp:[1124,1704,3199],emp:[44.1,24.5],mva:[null,17.7]}
];
const empRows={
 'Ghana':[[71.8,37.4],[9.0,15.2],[19.2,47.4]], 'Botswana':[[12.6,19.5],[21.3,15.0],[66.1,65.5]],
 'Mauritius':[[19.6,5.3],[35.0,23.4],[45.4,71.3]], 'South Korea':[[15.5,5.4],[37.1,24.6],[47.4,70.0]],
 'Malaysia':[[18.9,10.5],[32.8,26.2],[48.3,63.3]], 'Philippines':[[44.1,24.5],[16.6,18.7],[39.3,56.8]]};
const mvaRows={
 'Ghana':[{year:'1965†',value:9.8},{year:'1990',value:9.8},{year:'2020',value:11.0}],
 'Botswana':[{year:'1965†',value:11.6},{year:'1990',value:4.8},{year:'2020',value:5.7}],
 'Mauritius':[{year:'1960',value:null},{year:'1990',value:20.4},{year:'2020',value:10.7}],
 'South Korea':[{year:'1960',value:11.4},{year:'1990',value:25.2},{year:'2020',value:25.7}],
 'Malaysia':[{year:'1960†',value:10.3},{year:'1990',value:24.2},{year:'2020',value:22.2}],
 'Philippines':[{year:'1960',value:null},{year:'1990',value:null},{year:'2020',value:17.7}]};
function csv(file){const str=fs.readFileSync(file,'utf8');let rows=[],row=[],v='',q=false;for(let i=0;i<str.length;i++){let c=str[i];if(c==='"'){if(q&&str[i+1]==='"'){v+='"';i++;}else q=!q;}else if(c===','&&!q){row.push(v);v='';}else if(c==='\n'&&!q){row.push(v.replace(/\r$/,''));rows.push(row);row=[];v='';}else v+=c;}if(v||row.length){row.push(v);rows.push(row);}return rows.slice(1).filter(r=>r.length>1).map(r=>Object.fromEntries(rows[0].map((k,i)=>[k,r[i]||''])));}
const registry=csv(path.join(ROOT,'research/source_registry.csv'));
const gdpRaw=csv(path.join(ROOT,'data/charts/ghana_korea_gdp_per_capita.csv'));
for(const c of countries)c.exactGdp=[1960,1990,2020].map(y=>Number(gdpRaw.find(r=>r.country===c.name&&Number(r.year)===y)?.value)||c.gdp[[1960,1990,2020].indexOf(y)]);
const rights=csv(path.join(ROOT,'research/asset_rights_register.csv'));
const photoSpecs=[['GHA-TEMA','ghana_tema.jpg'],['KOR-BUSAN','korea_busan.jpg'],['BWA-GABORONE','botswana_gaborone.jpg'],['MUS-MARKET','mauritius_market.jpg'],['MYS-PERAI','malaysia_perai.jpg'],['PHL-MANILAPORT','philippines_manila.jpg'],['GHA-ACCRA','ghana_accra.jpg'],['KOR-GYEONGDONG','korea_market.jpg'],['BWA-MOCHUDI','botswana_mochudi.jpg'],['MUS-SUGAR','mauritius_sugar.jpg'],['MYS-PORTKLANG','malaysia_port_klang.jpg'],['PHL-DAMPA','philippines_dampa.jpg']];
const photos=photoSpecs.map(([id,file])=>({...rights.find(r=>r.asset_id===`ASSET-PH-${id}-001`),file}));
// Source-file aspect ratios; contain without cropping or stretching.
const photoRatios=[3385/2248,3072/2304,4896/3672,4016/6016,7344/5508,2800/1860,3024/4032,3072/2304,960/640,2444/1833,1600/1064,4144/2784];
pptx.imageSizingContain=(file,x,y,w,h)=>{const i=photos.findIndex(p=>file.endsWith(p.file)),r=photoRatios[i];const iw=Math.min(w,h*r),ih=iw/r;return {x:x+(w-iw)/2,y:y+(h-ih)/2,w:iw,h:ih};};
let s, preview=[], manifest=[], current, sv=[];
const esc=t=>String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
function wrap(t,w,fsz){const cap=Math.max(8,Math.floor(w/(fsz*.53)));return String(t).split('\n').flatMap(p=>{let a=[],line='';for(const word of p.split(' ')){if(line.length+word.length+1>cap&&line){a.push(line);line=word;}else line+=(line?' ':'')+word;}a.push(line);return a;});}
function text(t,x,y,w,h,sz=10.5,bold=false,col=C.ink,extra={}){
 const face=extra.serif?'Alegreya':extra.black?'Montserrat Black':'Montserrat';
 s.addText(t,{x:x/72,y:y/72,w:w/72,h:h/72,fontFace:face,fontSize:sz,bold,color:col,margin:0,breakLine:false,paraSpaceAfterPt:0,lineSpacingMultiple:1.12,valign:'top',...extra});
 const lines=wrap(t,w,sz), lh=sz*1.18; sv.push(`<text x="${x}" y="${y+sz}" fill="#${col}" font-family="${extra.serif?'Alegreya,Georgia,serif':'Montserrat,Arial'}" font-size="${sz}" font-weight="${bold?700:400}">${lines.map((a,i)=>`<tspan x="${x}" dy="${i?lh:0}">${esc(a)}</tspan>`).join('')}</text>`);
 current.elements.push({type:'text',text:t,x,y,w,h,fontSize:sz});
}
function rect(x,y,w,h,fill=C.paper,line=null){s.addShape(pptx.ShapeType.rect,{x:x/72,y:y/72,w:w/72,h:h/72,fill:{color:fill},line:{color:line||fill,width:line?.6:0}});sv.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#${fill}" stroke="#${line||fill}"/>`);}
function line(x1,y1,x2,y2,col=C.grey,width=.6,dash=false){s.addShape(pptx.ShapeType.line,{x:Math.min(x1,x2)/72,y:Math.min(y1,y2)/72,w:Math.abs(x2-x1)/72,h:Math.abs(y2-y1)/72,flipV:(y2<y1),line:{color:col,width,...(dash?{dashType:'dash'}:{})}});sv.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#${col}" stroke-width="${width}" ${dash?'stroke-dasharray="5 4"':''}/>`);}
function marker(i,x,y,size=7){const c=countries[i];if(c.shape==='cross'){line(x-size/2,y,x+size/2,y,C.ink,3.2);line(x,y-size/2,x,y+size/2,C.ink,3.2);line(x-size/2,y,x+size/2,y,c.c,1.8);line(x,y-size/2,x,y+size/2,c.c,1.8);return;}
 s.addShape(pptx.ShapeType[c.shape],{x:(x-size/2)/72,y:(y-size/2)/72,w:size/72,h:size/72,fill:{color:c.c},line:{color:C.ink,width:.6}});
 sv.push(c.shape==='ellipse'?`<circle cx="${x}" cy="${y}" r="${size/2}" fill="#${c.c}" stroke="#${C.ink}"/>`:`<rect x="${x-size/2}" y="${y-size/2}" width="${size}" height="${size}" fill="#${c.c}" stroke="#${C.ink}" ${c.shape==='diamond'?`transform="rotate(45 ${x} ${y})"`:''}/>`);
}
function country(i,x,y,w=210){marker(i,x+5,y+9,10);text(countries[i].name,x+20,y,w-20,24,12,true,C.ink);}
function rule(y){line(36,y,559,y);}
function page(n,section,title,deck='',sources='',limit=''){
 if(s)finish();s=pptx.addSlide();s.background={color:C.paper};sv=[];current={page:n,title,elements:[],sources,limit};manifest.push(current);
 text(`AFRICA & ASIA  /  ${section.toUpperCase()}`,36,23,490,14,8,true,C.dark);line(36,45,559,45,C.ink,1);
 if(title)text(title,36,64,523,100,title.length>64?29:36,true,C.ink,{serif:true});
 if(deck)text(deck,36,168,505,55,11,false,C.dark);
 rule(754);text(sources,36,763,523,47,8,false,C.dark);
 text('EVIDENCE LEDGER  ·  EDITORIAL DRAFT',36,818,430,12,8,true,C.dark);text(String(n).padStart(2,'0'),523,814,36,19,11,true,C.ink,{align:'right'});
 if(limit){text('WHAT THIS CANNOT PROVE',36,698,523,15,8,true);text(limit,36,715,523,34,9,false,C.dark);}
 return s;
}
function finish(){preview.push(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="595.276" height="841.89"><rect width="100%" height="100%" fill="#${C.paper}"/>${sv.join('')}</svg>`);}
function paragraph(head,body,x,y,w,h=110){text(head,x,y,w,29,14,true);text(body,x,y+35,w,h-35,10.5);}
function band(label,body,y,h=92){line(36,y,559,y,C.ink,.8);text(label,36,y+12,140,h-18,11,true);text(body,191,y+11,368,h-17,10.5);}
function photo(k,x,y,w,h,caption=true){const p=photos[k],file=path.join(OUT,'assets','print',p.file);if(fs.existsSync(file)&&fs.statSync(file).size>10000){s.addImage({path:file,...pptx.imageSizingContain(file,x/72,y/72,w/72,h/72)});const data=fs.readFileSync(file).toString('base64');sv.push(`<image x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid meet" xlink:href="data:image/jpeg;base64,${data}"/>`);current.elements.push({type:'photo',asset:p.asset_id,x,y,w,h});if(caption)text(`${p.creator} · ${p.date} · ${p.rights_or_licence.split(':')[0]}\nUncropped; resized only. Full credit: p. 30.`,x,y+h+6,w,40,8,false,C.dark);}else{rect(x,y,w,h,C.paper,C.grey);text(`EDITORIAL PLACEHOLDER — VERIFIED ASSET OR APPROVED COPY REQUIRED\n${p.asset_id}\n${p.title}\nCreator/date: ${p.creator}, ${p.date}\nLicence: ${p.rights_or_licence}\nContext only; cannot establish productivity, culture or causality.`,x+12,y+12,w-24,h-24,9);}}
const ne=JSON.parse(fs.readFileSync(path.join(OUT,'assets/maps/ne_110m_admin_0_countries.geojson'),'utf8'));
const mapW=1100,mapH=440,latMin=-60,latMax=85;
const mapLonX=lon=>(lon+180)/360*mapW,mapLatY=lat=>(latMax-lat)/(latMax-latMin)*mapH;
const projectRing=ring=>ring.map(([lon,lat],i)=>`${i?'L':'M'}${mapLonX(lon).toFixed(1)},${mapLatY(Math.max(latMin,Math.min(latMax,lat))).toFixed(1)}`).join(' ')+' Z';
const featurePath=f=>{const g=f.geometry;if(!g)return'';const polys=g.type==='Polygon'?[g.coordinates]:g.coordinates;return polys.map(poly=>poly.map(projectRing).join(' ')).join(' ');};
const highlighted={GHA:countries[0].c,BWA:countries[1].c,MUS:countries[2].c,KOR:countries[3].c,MYS:countries[4].c,PHL:countries[5].c};
const mapShapes=ne.features.filter(f=>f.properties.ADMIN!=='Antarctica').map(f=>{const fill=highlighted[f.properties.ADM0_A3]||'DED8CC';return `<path d="${featurePath(f)}" fill="#${fill}" fill-opacity="${highlighted[f.properties.ADM0_A3]?'.92':'.82'}" stroke="#F4F0E7" stroke-width="1.2" stroke-linejoin="round"/>`;}).join('');
const mapFile=path.join(OUT,'assets/maps/world_locator.svg');
fs.writeFileSync(mapFile,`<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="440" viewBox="0 0 1100 440"><rect width="1100" height="440" fill="#F4F0E7"/>${mapShapes}<path d="M0 0H1100M0 440H1100" stroke="#B7B0A4" stroke-width="1" fill="none"/></svg>`);
const locatorPins=[[-1.036941,7.717639],[24.179216,-22.102634],[57.5,-20.2],[128.129504,36.384924],[113.83708,2.528667],[122.465,11.198]];
function drawLocator(x,y,w,h){
 s.addImage({path:mapFile,x:x/72,y:y/72,w:w/72,h:h/72});const m=fs.readFileSync(mapFile).toString('base64');sv.push(`<image x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="none" xlink:href="data:image/svg+xml;base64,${m}"/>`);current.elements.push({type:'map',source:'Natural Earth 1:110m Admin 0 Countries v5.1.1',x,y,w,h});
 locatorPins.forEach(([lon,lat],i)=>marker(i,x+mapLonX(lon)/mapW*w,y+mapLatY(lat)/mapH*h,13));
}
const mapCitation='Map geometry: Natural Earth (n.d.), 1:110m Cultural Vectors, Admin 0 – Countries, v5.1.1; present-day generalized de facto boundaries; public-domain data. https://www.naturalearthdata.com/downloads/110m-cultural-vectors/. Mauritius is located by point marker at this global scale; its island outline is too small to render.';
const WDI='World Bank (2026), World Development Indicators (SRC-WDI-001). Frozen release: 13 July 2026; retrieved 6 October 2026. Data and locators: project CSVs; reference p. 28.';

// 01 — equal documentary fields, not a visual development ranking.
page(1,'An investigation in six countries','','','Photographs: JulianGrayscales (2020), Tema port; Svwmal (2012), Busan harbour; Amuzujoe (2020), Accra market; Gaël Chardon (2008), Gyeongdong Market, Seoul. Present-day context only. Full credits and licences: p. 30.');
text('Africa & Asia:',36,70,523,59,45,true,C.ink,{serif:true});
text('Why Did Their\nEconomic Paths\nDiverge?',36,139,520,175,44,true,C.ink,{serif:true});
text('Testing culture against history, institutions,\npolicy and economic evidence.',36,332,515,54,15,false,C.dark);
photo(0,36,405,120,176,false);photo(6,165,405,120,176,false);photo(1,310,405,120,176,false);photo(7,439,405,120,176,false);
country(0,36,600);country(3,310,600);text('Tema port · 2020 / Accra market · 2020',54,626,231,18,8.3);text('Busan harbour · 2012 / Seoul market · 2008',328,626,231,18,8.1);
text('Different places and livelihoods—not images of a whole region.',36,652,523,20,9,false,C.dark);
text('SIX CASES. THREE ANCHORS.\nNO SINGLE CONTINENTAL STORY.',36,682,523,50,16,true);

// 02
page(2,'01 / The question','Was slower growth caused by culture—or was culture also shaped by history and institutions?','Six country pathways test the question. Their differences also test the explanations.','Hofstede (2011, pp. 6–8); McSweeney (2002, pp. 93–107); approved project theory matrix.');
const verbs=['OBSERVE','PREDICT','TEST','REVISE'];verbs.forEach((v,i)=>{text(`0${i+1}`,36+i*132,253,110,31,25,true,C.dark);text(v,36+i*132,294,120,25,15,true);if(i<3)text('→',145+i*132,289,24,30,20);});
text('Start with a pattern. Make the mechanism explicit.\nLook for a challenging case. Change the explanation.',36,342,510,52,13);
[['01','The question','02–04'],['02','The starting line','05–09'],['03','Building capability','10–15'],['04','Culture under examination','16–19'],['05','Three ideas on trial','20–24'],['06','What survives','25–29']].forEach((r,i)=>{let y=422+i*42;line(36,y,559,y);text(r[0],36,y+10,38,22,10,true);text(r[1],90,y+10,370,24,12);text(r[2],482,y+10,77,22,10,true,C.ink,{align:'right'});});
text('Not Africa versus Asia as two uniform blocs. Not a ranking of people.\nA bounded comparison of histories, mechanisms and outcomes.',36,701,520,42,10.5,true);

// 03 — one shared-scale baseline graph for all six countries.
page(3,'01 / Observe','1960: close in income, different in history','GDP per capita · constant 2015 US dollars per person · all six cases on one shared scale',WDI+' Indicator: NY.GDP.PCAP.KD. Source values are rounded to nearest US dollar for display.','Similar income levels do not mean identical starting conditions. This comparison describes income per person, not distribution or causality.');
text('GHANA',36,239,109,22,9,true,C.dark);text('SOUTH KOREA',310,239,249,22,9,true,C.dark);
text('US$1,101',36,269,235,52,32,true,countries[0].c);text('US$1,038',310,269,249,52,32,true,countries[3].c);
text('Only US$63 apart at this anchor',36,324,523,23,13,true);
const baseX=208,baseW=335,baseY=397,baseStep=48,baseMax=1500;
[0,500,1000,1500].forEach(v=>{let x=baseX+baseW*v/baseMax;line(x,366,x,baseY+5*baseStep+18,C.grey,.55);text(v===0?'$0':`$${v.toLocaleString('en-US')}`,x-33,345,66,15,8,false,C.dark,{align:'center'});});
countries.forEach((c,i)=>{let y=baseY+i*baseStep;country(i,36,y+3,158);line(baseX,y+13,baseX+baseW,y+13,C.grey,1);let xEnd=baseX+baseW*c.gdp[0]/baseMax;if(i===2)line(baseX,y+13,xEnd,y+13,C.ink,10);line(baseX,y+13,xEnd,y+13,c.c,7);marker(i,xEnd,y+13,13);text(`$${c.gdp[0].toLocaleString('en-US')}${i===4?' †':''}`,xEnd+10,y+1,100,22,11,true,C.ink);});
text('† Malaysia: retrospective territorial series. The 1960 value predates the federation’s 1963 formation and Singapore’s 1965 exit.',36,666,523,27,8.5,false,C.dark);

// 04 — six matched income trajectories, each using the same axis geometry.
page(4,'01 / Observe','Six paths. One income scale.','GDP per capita · constant 2015 US dollars per person · observed anchors only: 1960, 1990, 2020',WDI+' Indicator: NY.GDP.PCAP.KD. Exact frozen country/year values are shown below each small multiple.','These lines connect three observed anchors only. They do not show annual values or explain why paths diverged. 2020 is the COVID-19 year.');
const tx=[183,359,518],plotW=378,plotMax=35000,trendTop=295,rowH=62;
[0,10000,20000,30000,35000].forEach(v=>{let x=tx[0]+plotW*v/plotMax;line(x,278,x,trendTop+5*rowH+49,C.grey,.48);text(v===0?'$0':`$${v/1000}k`,x-19,258,40,14,7.5,false,C.dark,{align:'center'});});
['1960','1990','2020'].forEach((y,j)=>text(y,tx[j]-28,279,57,14,8,true,C.dark,{align:'center'}));
countries.forEach((c,i)=>{const y=trendTop+i*rowH;country(i,36,y+9,135);const yy=v=>y+39-34*v/plotMax;c.gdp.forEach((v,j)=>{if(j<2)line(tx[j],yy(v),tx[j+1],yy(c.gdp[j+1]),c.c,3.1,i===3);marker(i,tx[j],yy(v),11);text(`$${v.toLocaleString('en-US')}`,tx[j]-33,y+42,67,17,8.5,true,C.ink,{align:'center'});});line(155,y+48,550,y+48,C.grey,.45);});
text('Read the value labels as well as the line: the shared vertical scale preserves the income gaps across cases.',36,672,523,20,9,true);

// 05
page(5,'02 / The starting line','Colonialism changed the starting line','Political transitions happened at different times—and did not erase inherited economic structures.', 'World Bank (1985, p. 18); Maipose (2008, pp. 3–5); National Archives Department (n.d., “Independence”); Haggard et al. (1997, pp. 867–870); Asadullah et al. (2024, pp. 13–15); Dolan (1993), archival recheck pending. '+mapCitation,'The locator uses generalized present-day boundaries and country markers, not a 1914 map or a development score. A political date is not a comparable measure of state capacity.');
text('PRESENT-DAY COUNTRY LOCATOR',36,225,523,16,8.5,true,C.dark);
drawLocator(62,236,470,188);
const pinLegend=[[0,36,430],[1,213,430],[2,390,430],[3,36,452],[4,213,452],[5,390,452]];
pinLegend.forEach(([i,x,y])=>country(i,x,y,155));
text('Historical 1914 map: still withheld pending verified artwork and original legend.',36,479,523,17,8,false,C.dark);
const transitions=[['South Korea','1945 / 1948','Japanese rule ends / Republic of Korea established'],['Philippines','1946','Independence; preceding Spanish and US rule'],['Ghana','1957','Independence'],['Malaysia','1957 / 1963','Malaya independence / federation formed'],['Botswana','1966','Independence from British protectorate'],['Mauritius','1968','Independence; earlier French and British rule']];
transitions.forEach((r,i)=>{let y=505+i*31;line(36,y,559,y);text(r[1],36,y+6,92,22,10.5,true);text(r[0],140,y+6,124,25,10,true);text(r[2],277,y+6,282,26,8.7);});

// 06
page(6,'02 / Mechanisms','Different systems of rule','The useful comparison is what rule organised, extracted and left behind—not an empire label treated as destiny.','Bolt et al. (2025, pp. 1–6, 18–20); Cogneau et al. (2018, pp. 5–7, 17–20); Huillery (2009, pp. 176–180, 203–208); Kohli (1994, pp. 1277–1284); Haggard et al. (1997, pp. 867–881); Dolan (1993), source caveat below.','Different mechanisms may coexist. None of these studies supplies a causal ranking of the six cases or demonstrates that colonial rule was beneficial overall.');
[['CLAIM','Administrative labels hide variation.','Evidence: British African councils differed in composition and operation; French West African investments also varied within an empire.\nLimit: councils are not synonymous with democracy (Bolt et al., 2025; Huillery, 2009).'],['EVIDENCE','Korea is a disputed inheritance.','Kohli (1994) stresses organisational lineage under Japanese rule. Haggard et al. (1997) stress coercion, unequal ownership, division, war and post-1961 change.\nLimit: continuity is not an uncontested causal finding.'],['LIMIT','Institutions on paper are not inclusion.','The Philippines’ Spanish and US legacies combine formal institutions and education with concentrated power (Dolan, 1993). Exact archival passages still need a clean-file recheck.\nA British–French contrast cannot explain these experiences.']].forEach((r,i)=>{let y=229+i*149;line(36,y,559,y,C.ink,.7);text(r[0],36,y+15,103,22,9,true);text(r[1],156,y+13,403,32,15,true);text(r[2],156,y+55,403,89,10.5);});

// 07
page(7,'02 / Connected development','What did infrastructure connect?','Ghana’s railway case shifts the question from “How much track?” to “Which people, firms and markets became connected?”','Jedwab and Moradi (2012, pp. 1–4, 6–10; SRC-JEDWAB-MORADI12-001). Original editorial schematic based on cited facts. No source map is reproduced or traced.','A railway case cannot prove an Africa-wide mechanism, the net benefit of colonial rule, or that infrastructure alone caused subsequent growth.');
text('1898–1918  /  COLONIAL RAILWAY EXPANSION',36,230,523,23,10,true);
[['Coast / ports',51,283],['Mining areas',334,283],['Kumasi / interior',334,383],['Cocoa producers\nand urban markets',51,383]].forEach(([t,x,y])=>{rect(x,y,199,58,C.paper,C.ink);text(t,x+12,y+12,175,42,12,true);});
line(250,312,334,312,C.ink,1.5);line(433,341,433,383,C.ink,1.5);line(334,412,250,412,C.ink,1.5,true);line(151,383,151,341,C.ink,1.5,true);
text('SCHEMATIC, NOT SURVEY GEOMETRY\nSolid: stated connection purpose. Dashed: later economic linkages, not a mapped railway route.',36,465,523,41,8.5,true,C.dark);
paragraph('Original purpose','Connect the coast with mining areas and Kumasi; transport priorities were not designed as a universal social network.',36,527,245,132);
paragraph('Later uses and effects','Lower transport costs supported cocoa production and urbanisation. The later users and effects were not identical to the original purpose.',310,527,249,132);

// 08 — country-by-country photography and evidence, one shared roster.
page(8,'02 / Inheritance','Six starting points. Six country settings.','The photographs add place and human scale. The captions connect each setting to the historical evidence.',
'World Bank (1985, p. 18); Maipose (2008, pp. 3–5); Xenos (1970, p. 1); National Archives Department (n.d.); Svirydzenka and Petri (2014, pp. 5–8); Kohli (1994); Haggard et al. (1997); Asadullah et al. (2024, pp. 13–15); Dolan (1993), archival recheck pending.',
'These are contemporary photographs, not images from independence. They cannot show living conditions at independence or prove an economic cause. See creator, date, licence and source on p. 30.');
const inv=[
'Ghana · cocoa dependence; public assets included roads, rail and Tema harbour (1957).','Botswana · very limited inherited infrastructure and skills; later mineral income changed the base (1966).','Mauritius · sugar dominated export earnings near independence; diversification came later (1968).','South Korea · colonial inheritance was disrupted by division and war; postwar development followed a distinct sequence.','Malaysia · commodity inheritance preceded export manufacturing; the federation formed in 1963.','Philippines · independence in 1946; formal institutions and education coexisted with concentrated power.'];
inv.forEach((caption,i)=>{let y=230+i*72;photo(i,36,y,100,58,false);country(i,153,y+2,394);text(caption,153,y+29,394,39,9.5);line(36,y+66,559,y+66,C.grey,.45);});

// 09
page(9,'02 / Trade-offs','Where would you invest 100 points?','Schools and skills · factories and firms · roads · health · security · state capacity. Every choice has an opportunity cost.','Compare priorities with the six distinct starting conditions on p. 8. Around 1960, the six cases were at different political stages; their timelines are not a common sovereignty date. World Bank (1993, pp. 4–7, 159–161).','There is no single correct allocation. A budget thought experiment exposes trade-offs; it cannot predict growth, recreate actual budgets or isolate a cause.');
['Schools & skills','Factories & firms','Roads','Health','Security','State capacity'].forEach((t,i)=>{let y=237+i*47;text(t,36,y,260,28,16,true);line(366,y+28,457,y+28,C.ink,1);text('____ / 100',468,y+7,91,21,10);});
text('TOTAL',36,526,220,30,13,true);line(366,551,457,551,C.ink,1.5);text('100 points',468,532,91,21,11,true);
text('Choose a starting condition',36,578,523,32,17,true);
text('Ghana: export dependence. Botswana: few inherited public assets. Mauritius: concentrated sugar economy. South Korea: recovery, land and security. Malaysia: uneven regional development. Philippines: concentrated ownership and institutions.',36,614,523,55,10.5);

// 10 — matched six-country employment comparison.
page(10,'02 / Compare the pathways','Where did work move?','Structural transformation: workers move between sectors, productivity changes within sectors, and the economy’s production mix changes. Employment shares · 1991 proxy to 2020.',WDI+' ILO modelled estimates: SL.AGR.EMPL.ZS, SL.IND.EMPL.ZS, SL.SRV.EMPL.ZS. 1991 proxies 1990; values are percentages of employment.','Employment movement is not productivity. Industry includes mining, construction and utilities. Service growth alone does not establish industrial upgrading; 2020 is the pandemic year.');
text('AGRICULTURE',166,233,117,19,8.5,true);text('INDUSTRY*',300,233,116,19,8.5,true);text('SERVICES',434,233,116,19,8.5,true);
text('1991† → 2020 · % of employment',166,253,384,16,8,false,C.dark);
const empX=[166,300,434],empW=106,empTop=300,empStep=62;
countries.forEach((c,i)=>{let y=empTop+i*empStep;country(i,36,y+8,120);empRows[c.name].forEach((pair,k)=>{const x=empX[k],max=100,px=v=>x+5+v/max*(empW-10),y1=y+17,y2=y+23;line(x+5,y+20,x+empW-5,y+20,C.grey,.45);line(px(pair[0]),y1,px(pair[1]),y2,c.c,2.8);marker(i,px(pair[0]),y1,11);marker(i,px(pair[1]),y2,13);text(`${pair[0].toFixed(1)} → ${pair[1].toFixed(1)}`,x,y+34,empW,17,8.3,true,C.ink,{align:'center'});});line(36,y+53,559,y+53,C.grey,.45);});
text('† 1991 explicitly proxies 1990; no 1960 ILO-modelled series. Open marker = 1991; filled country marker = 2020. * Industry includes mining, construction and utilities. Values are percentages of employment.',36,667,523,28,8.2);

// 11 — manufacturing share with actual gaps and proxy years visible.
page(11,'02 / Compare the pathways','Manufacturing share: gaps shown, not filled','Manufacturing value added · current-price share of GDP · observed country anchors',WDI+' Indicator: NV.IND.MANF.ZS; values are current-price percentages of GDP. Source file: data/charts/manufacturing_share.csv.','Shares describe a current-price production mix; they cannot identify causes or technology. Ghana/Botswana use 1965 proxies; Mauritius has no 1960 observation; Malaysia 1960 is retrospective territory; historical Philippine series are not comparable.');
text('Shared vertical scale: 0–30% of GDP',36,229,523,20,9,true);
const mx=[220,358,496],mTop=275,mStep=67,mPlotH=26,mMax=30;
['1960 (or visible proxy)','1990','2020'].forEach((t,j)=>text(t,mx[j]-54,250,j===0?111:95,30,8,true,C.dark,{align:'center'}));
countries.forEach((c,i)=>{let y=mTop+i*mStep;country(i,36,y+5,151);const vals=mvaRows[c.name];[0,10,20,30].forEach(v=>{let yy=y+35-mPlotH*v/mMax;line(170,yy,544,yy,C.grey,.35);});
 vals.forEach((d,j)=>{let px=mx[j],py=y+35-mPlotH*(d.value||0)/mMax;if(d.value!==null){if(j>0&&vals[j-1].value!==null)line(mx[j-1],y+35-mPlotH*vals[j-1].value/mMax,px,py,c.c,2.8,i===3);marker(i,px,py,12);text(`${d.year}\n${d.value.toFixed(1)}%`,px-35,y+41,70,23,8,true,C.ink,{align:'center'});}else{text('NO DATA',px-34,y+45,68,15,8,false,C.dark,{align:'center'});}});line(36,y+66,559,y+66,C.grey,.4);});
text('NARRATIVE-ONLY historical Philippines values are intentionally excluded. Connectors stop at missing anchors. These shares do not identify technology, ownership or causes.',36,671,523,24,8.2,true);

// 10
page(12,'03 / Capability','How industrial capability compounds','A conditional learning sequence—not an automatic cycle and not a recipe that travels unchanged.','World Bank (1993, pp. 4–7, 20–26, 79–80, 127–130, 159–161); World Bank (2020, pp. 32–33, Box 2 pp. 44–47). Original editorial synthesis of approved mechanisms.','These links do not isolate a single cause. External access, distribution, resources, institutions and political choices change the sequence and its effects.');
const steps=[['01','Education and skills','People learn to absorb and improve production.'],['02','Infrastructure','Reliable connections reduce practical bottlenecks.'],['03','Firms and suppliers','Capabilities need organisations and domestic links.'],['04','Production','Standards, routines and coordination are tested.'],['05','Exports and learning','Markets can bring scale, technology and feedback.'],['06','Reinvestment and upgrading','Returns must build new skills—not just protect rents.']];
steps.forEach((r,i)=>{let y=231+i*68;text(r[0],36,y,45,31,20,true,C.dark);text(r[1],101,y,458,25,15,true);text(r[2],101,y+30,450,26,10.5);if(i<5)text('↓',48,y+36,24,27,16);});
line(552,629,552,226,C.dark,.8,true);text('↑',544,219,17,19,12);text('Learning feeds back; links can break.',101,638,435,16,8,false,C.dark);
text('BREAK POINTS: unreliable services · weak feedback · imported inputs without local learning · protected failure. External conditions shape every link.',36,654,523,38,9,true);

// 11
page(13,'03 / Follow the product','A product label does not reveal value added','“Made here”, “exported from here” and “capability retained here” answer different questions.','World Bank (2020, Box 2, pp. 44–47); Nasution (2000, pp. 19–20, Table 9); World Bank (1993, pp. 20–26). Journey is a conceptual diagram, not measured product shares or a six-country export series.','A photograph or gross export total cannot identify domestic value captured, supplier depth, ownership, wages, technological capability or causality.');
const journey=[['Imported inputs','Value may originate abroad.'],['Assembly','Domestic activity, but not the whole product value.'],['Logistics and services','Transport, design and business services also matter.'],['Local suppliers','Domestic linkages can deepen—or remain thin.'],['Retained value and learning','Ask what remains, who receives it and what improves.']];
journey.forEach((r,i)=>{let y=237+i*66;line(36,y,349,y);text(String(i+1),36,y+12,30,28,18,true);text(r[0],78,y+8,270,25,12,true);text(r[1],78,y+34,270,32,10);});
photo(10,380,237,179,134,false);text('Port Klang, Malaysia · 2009\nContainers show movement, not local value captured. jgmorard; CC BY 2.0.',380,379,179,67,8);
photo(11,380,453,179,119,false);text('Dampa Seaside Market, Metro Manila · 2013\nEveryday exchange, not a national productivity measure. george ruiz; CC BY 2.0.',380,580,179,60,8);
text('Manufactured exports ≠\nmanufacturing value added ≠\ndomestic technological capability.',36,590,321,73,16,true);
text('Malaysia and the Philippines show why assembly connections must be examined alongside imported inputs and domestic suppliers.',36,666,523,28,9.5);

// 12
page(14,'03 / South Korea','Capability built over time','South Korea’s sequence combined recovery, coordinated investment, performance pressure and learning. It also contained costly mistakes.','World Bank (1993, pp. 20–26, 127–130, 159–161, 242). Interpretive dispute: Rodrik (1995), investment-coordination argument (registered working-paper abstract, not a page-specific causal estimate).','The sequence is multi-causal. It does not establish culture as the cause or mean that another country can copy the same national model or international setting.');
const korea=[['1950s','Recovery and foundations','Recovery, agricultural change, education and infrastructure shaped the capacity to industrialise.'],['1960s','Coordination and discipline','Credit and investment coordination accompanied export incentives and performance pressure.'],['1970s','Heavy industry—and costs','Heavy and chemical industry expanded; policy also generated pressures, debt and bottlenecks.'],['1980s','Correction and upgrading','Adjustment and liberalisation accompanied deeper firm learning and technological upgrading.']];
korea.forEach((r,i)=>{let y=232+i*104;line(72,y+12,72,y+101,countries[3].c,1.6);marker(3,72,y+12,10);text(r[0],99,y,140,28,21,true);text(r[1],250,y,309,25,14,true);text(r[2],250,y+35,309,65,10.5);});
text('Durable direction mattered only if institutions could\nlearn from failure and change what was not working.',36,661,523,37,12,true);

// 13 — exact frozen values; native shapes and text.
page(15,'03 / The central comparison','Ghana and South Korea: comparison, not experiment','GDP per capita · constant 2015 US dollars per person · three observed anchors',WDI+' NY.GDP.PCAP.KD; pair CSV retrieved 4 October 2026. Straight connectors guide the eye only; no annual values are estimated. 2020 is the COVID-19 year.','A two-country trajectory cannot isolate culture, colonial rule, policy, institutions or any single cause.');
const gx=[87,294,501], gy=v=>572-v/35000*306;
[0,10000,20000,30000,35000].forEach(v=>{line(83,gy(v),506,gy(v),C.grey,.6);text(v.toLocaleString('en-US'),36,gy(v)-5,41,15,8,false,C.dark,{align:'right'});});
[0,3].forEach(ci=>{const c=countries[ci];for(let j=0;j<2;j++)line(gx[j],gy(c.exactGdp[j]),gx[j+1],gy(c.exactGdp[j+1]),c.c,2,ci===3);c.exactGdp.forEach((v,j)=>marker(ci,gx[j],gy(v),8));});
['1960','1990','2020'].forEach((y,i)=>text(y,gx[i]-24,588,48,21,10,true,C.ink,{align:'center'}));
text('Ghana\nUS$1,101',87,485,117,45,10,true);text('South Korea\nUS$1,038',87,614,144,43,10,true);
text('US$9,673',282,gy(9673)-34,132,24,11,true);text('US$856',263,gy(856)-30,108,22,10,true);
text('South Korea\nUS$33,216',375,225,183,41,12,true);text('Ghana\nUS$1,970',414,512,143,43,11,true);
text('16.9 : 1',294,611,265,55,41,true,C.ink,{black:true});text('Approximate 2020 ratio—not a causal estimate.',294,666,265,23,8.5);

// 14
page(16,'04 / Culture under examination','Six dimensions, one warning label','National averages are historical, country-level lenses—not individual personalities, timeless truths or causal scores.','Hofstede (2011, pp. 6–8 and 9–16); McSweeney (2002, pp. 93–107). Definitions paraphrased, not reproduced. No country scores invented; missing country rows are not replaced with regional averages.','Country-level averages cannot describe every individual. Associations between national indices and income do not establish cultural causation.');
const dims=[['Power distance','Acceptance of unequal power. Tested only as a conditional mechanism.'],['Individualism / collectivism','Integration into groups and obligations to them. Not a trust score. Conditional lens.'],['Masculinity / femininity','Achievement and competition versus care and quality of life; historically gendered labels. Context only.'],['Uncertainty avoidance','Responses to ambiguity and uncertainty—not simply willingness to take risks. Context only.'],['Long-term orientation','Future-oriented adaptation and perseverance versus present/past obligations. Not policy duration. Conditional lens.'],['Indulgence / restraint','Social regulation of gratification. Not a measure of work ethic. Context only.']];
dims.forEach((r,i)=>{let y=238+i*72;line(36,y,559,y);text(String(i+1).padStart(2,'0'),36,y+12,35,25,14,true,C.dark);text(r[0],91,y+10,215,53,13,true);text(r[1],321,y+10,238,58,10);});

// 15
page(17,'04 / Measure before comparing','How far can trust travel?','The target matters. A response about a bank, a neighbour or “most people” is not the same observation.','Organisation for Economic Co-operation and Development [OECD] (2017, pp. 41–44, 62–79); World Bank (2026), WGI methodological distinction; approved trust evidence pack and Radius of Trust matrix.','There is no approved common six-country trust scale here. Contemporary responses cannot be back-cast to 1960 or used alone to explain national growth.');
[['Personal / generalized','A judgement about other people; a familiar person and “most people” are different targets.'],['Family / close network','Cooperation with known ties; not automatically the opposite of wider cooperation.'],['Named institutions','Trust in courts, banks or government must name the institution and the question.'],['Governance perceptions','Institutional-performance indicators are not measures of interpersonal trust.'],['Survey responses','Question wording, year, population, weights and context shape the reported measure.']].forEach((r,i)=>band(r[0],r[1],235+i*84,83));
text('Radius of Trust asks about cooperation beyond close ties.\nThe present evidence cannot establish its strong causal form.',36,664,523,34,10.5,true);

// 16
page(18,'04 / A conditional mechanism','Close networks: strength, boundary—or both?','A network can be a source of resilience and a boundary on cooperation. Neither outcome follows automatically from “collectivism”.','Hofstede (2011, p. 11); OECD (2017, pp. 41–44); Svirydzenka and Petri (2014, pp. 5–8, 12). Approved theory matrix: Radius of Trust. The discussion question is not national evidence.','The diagram is a conditional hypothesis. It does not rank national cultures, equate family loyalty with corruption, or measure trust in any country.');
paragraph('What close ties can provide','Credit, labour, mutual help, survival and resilience when formal systems are absent or costly.',36,235,240,130);
paragraph('Where a boundary may appear','Delegation to unfamiliar people and impersonal scaling may become harder—depending on organisations and enforcement.',312,235,247,130);
rule(398);text('Who would you trust\nwith money?',36,421,520,89,31,true);
text('Family · a friend · a bank · a court-enforced contract\nor an unfamiliar business partner?',36,535,520,55,15);
text('DISCUSS, THEN CHANGE ONE CONDITION',36,616,523,19,8,true);
text('Would your answer change with a reliable court, a guarantee, a long trading relationship or a different amount at risk?',36,644,523,47,11);

// 17
page(19,'04 / The evidence boundary','Authority, time horizons and missing evidence','Test power distance and long-term orientation as conditional mechanisms. Keep unsupported growth stories closed.','Hofstede (2011, pp. 9–16); McSweeney (2002, pp. 101–107); approved Hofstede critique pack and THEORY_EVIDENCE_MATRIX.md. No dimension is treated as a causal score.','National cultural measures cannot substitute for observed organisational behaviour, policy duration, investment or feedback. Mechanisms need their own evidence.');
paragraph('Authority: coordination or silence?','Hierarchy may organise action, but it may also weaken feedback. Test who can challenge decisions and whether errors are corrected.',36,231,246,139);
paragraph('Time horizons: whose horizon?','Long-term orientation is not a policy-duration measure. Test observed investment, learning and correction over time.',313,231,246,139);
[['Uncertainty avoidance','EVIDENCE INSUFFICIENT','Reopen with a specified direction, observed behaviour and matched timing—not a generic risk-taking story.'],['Masculinity / femininity','EVIDENCE INSUFFICIENT','Reopen with a valid contemporary measure, a clear mechanism and tests against institutional and economic alternatives.'],['Indulgence / restraint','EVIDENCE INSUFFICIENT','Reopen with a direct, timed link to saving or investment. Do not infer work ethic from income outcomes.']].forEach((r,i)=>{let y=394+i*93;line(36,y,559,y);text(r[0],36,y+12,232,30,12,true);text(r[1],306,y+14,253,20,8,true,C.dark);text(r[2],36,y+47,523,40,10);});

// 18
page(20,'05 / Three ideas on trial','Can our three ideas survive the evidence?','Original group hypotheses—not established academic theories, national scores or causal estimates.','Approved research/THEORY_EVIDENCE_MATRIX.md; data/charts/theory_evidence_matrix.csv; claim and source registries. Evidence includes World Bank (1993, 2020), Maipose (2008), Svirydzenka and Petri (2014), and OECD (2017).','Qualitative consistency is not causal identification. A supporting case can fit several competing explanations; an unresolved cell must remain unresolved.');
text('THE TEST STANDARD',36,232,523,20,9,true);text('Mechanism → prediction → supporting evidence →\nchallenging case → alternative explanation →\nlimitation → revision condition',36,267,523,85,18,true);
const matrix=[['Ghana','Consistent; not causal','Unresolved','Unresolved'],['Botswana','Strong exception','Plausible mechanism','Accumulation warning'],['Mauritius','Conditional support','Substitutes qualified','Strong qualified support'],['South Korea','Multi-causal support','Unresolved channel','Duration + correction'],['Malaysia','Qualified support','Plausible substitutes','Qualified support'],['Philippines','Not sufficient','Challenges strong form','Support with warning']];
text('COUNTRY',36,393,109,25,8,true);text('CONNECTED',158,393,121,25,8,true);text('TRUST',297,393,122,25,8,true);text('CONTINUITY',435,393,124,25,8,true);
matrix.forEach((r,i)=>{let y=428+i*38;line(36,y-7,559,y-7);country(i,36,y,118);text(r[1],158,y,123,32,8.5);text(r[2],297,y,123,32,8.5);text(r[3],435,y,124,32,8.5);});
text('Next: inspect the strongest challenge—not only the best fit.',36,671,523,22,10.5,true);

// 19
page(21,'05 / Test 1','Connected Development','What if the decisive difference was not how much infrastructure existed, but whom it connected?','World Bank (1993, pp. 20–26); World Bank (2020, Box 2, pp. 44–47); Svirydzenka and Petri (2014, pp. 5–8); Maipose (2008, pp. 3–5, 8–11); Nasution (2000, pp. 19–20). Original group hypothesis.','Connection alone neither establishes causality nor guarantees diversification. Investment, skills, institutions, resources and market access are bundled alternatives.');
text('SUPPORTED\nWITH EXCEPTIONS',36,232,523,81,29,true);
band('Consistent evidence','South Korea, Malaysia and Mauritius fit a productive-network account: skills, firms, infrastructure and market access worked together.',344,88);
band('Challenging case','Botswana’s income gains challenge inherited infrastructure as a prerequisite. Mineral rents and institutions complicate the network story.',437,88);
band('Sufficiency fails','The Philippines shows that global connection can coexist with shallow domestic linkages. Export access is not the same as domestic learning.',530,88);
text('REVISE / REJECT IF',36,644,523,18,8,true);text('Revise to the measured channel. Reject the causal ordering if deeper networks followed upgrading rather than preceding it.',36,668,523,27,10);

// 20
page(22,'05 / Test 2','Radius of Trust','How far beyond family and close networks can economic cooperation scale?','OECD (2017, pp. 41–44, 62–79); Svirydzenka and Petri (2014, pp. 5–8, 12); approved trust evidence pack and six-country theory matrix. WGI is retained only as governance context.','This evidence cannot show that generalized trust caused firm scale or national growth. Governance indicators cannot close direct-trust gaps.');
text('INCONCLUSIVE',36,237,523,65,38,true);
paragraph('What remains plausible','Institutions and organisations may extend cooperation beyond close networks. Contracts, firms and other arrangements may substitute for personal familiarity.',36,337,245,179);
paragraph('What remains missing','Direct trust measures differ by target, question and year. Ghana and South Korea remain direct-trust gaps. There is no harmonised historical six-country test.',310,337,249,179);
rule(535);text('Do not turn an evidence gap\ninto a cultural verdict.',36,560,523,78,27,true);
text('REOPEN ONLY WITH comparable, weighted trust measures linked in time to firm-scale outcomes—and tests net of institutional substitutes.',36,655,523,40,10);

// 21
page(23,'05 / Test 3','Continuity + Adaptation','Can a country learn industrially if direction changes every few years—and can continuity correct failure?','World Bank (1993, pp. 127–130, 159–161, 242); Svirydzenka and Petri (2014, pp. 5–8, 17); World Bank (2020, Box 2); approved theory matrix for Malaysia and the Philippines. Maipose (2008, pp. 8–11).','Cases cannot isolate duration from state capacity, mineral rents, FDI, market access, shocks or prior success. Hofstede long-term orientation is not a duration measure.');
text('SUPPORTED\nWITH EXCEPTIONS',36,232,523,81,29,true);
band('Duration + correction','South Korea, Mauritius, Malaysia and the Philippines are consistent with durable direction plus feedback, learning and adaptation.',343,88);
band('Continuity can fail','Stable policy may protect weak firms or ineffective programmes. Continuing the same failure is not industrial learning.',440,83);
band('Botswana’s warning','Accumulation without broad diversification is a warning—not a direct policy-duration test. Resources and institutional choices remain central.',533,88);
text('REVISE / REJECT IF',36,645,523,18,8,true);text('Revise if continuity yields accumulation without variety; reject a strong claim when durable direction repeatedly preserves failure.',36,668,523,27,10);

// 22 — four deliberately different editorial treatments.
page(24,'05 / The exceptions matter','The counterexamples change the answer','Four cases make a uniform continental story untenable. Each challenges a different shortcut.','Maipose (2008, pp. 3–5, 8–11); Svirydzenka and Petri (2014, pp. 5–8); World Bank (2020, Box 2, pp. 44–47); Nasution (2000, pp. 19–20); approved theory matrix. Photographs: credits p. 30.','These cases do not isolate culture or a universal growth formula. An exception changes the scope of a claim; it does not automatically establish its rival.');
country(1,36,230);photo(8,36,267,163,100,false);text('Mochudi solar pumping · 2018\nSmall-scale infrastructure context; outcomes unmeasured.',36,371,176,23,8);text('Supports: resource management and investment.\nChallenges: inherited infrastructure as a prerequisite.\nCannot prove: broad diversification or a cultural cause.',219,264,340,100,10.5);
line(36,396,559,396);country(2,36,410);text('Supports: adaptation and diversification.\nChallenges: fixed cultural destiny.\nCannot prove: continuity alone caused growth.',36,448,311,93,10.5);photo(9,397,411,162,112,false);text('Port Louis sugar terminal · 2025\nTrade infrastructure; not a history series.',397,528,162,23,8);
line(36,553,559,553);country(4,36,568,246);country(5,313,568,246);
text('Supports: coordinated productive links.\nChallenges: exports = local capability.\nCannot prove: FDI guarantees upgrading.',36,608,246,76,9.5);
text('Supports: the need for deeper linkages.\nChallenges: one successful “Asia” model.\nCannot prove: culture caused interruption.',313,608,246,76,9.5);

// 23
page(25,'06 / Synthesis','What the combined evidence says','The strongest bounded explanation centres on productive capability—not fixed regional culture.','Original group synthesis of approved theory matrix and evidence packs. World Bank (1993, pp. 4–7, 20–26, 79–80); World Bank (2020); Maipose (2008); Svirydzenka and Petri (2014); Hofstede (2011).','This is a bounded comparative interpretation, not an estimated causal decomposition. The six cases cannot represent every African or Asian economy.');
text('PRODUCTIVE\nCAPABILITY',36,237,523,92,38,true);
text('History · institutions · resources · markets · policy\nexternal conditions · culture',36,346,523,47,14,true);
text('Divergence depended less on fixed regional culture than on whether states, firms, workers and external partners built and disciplined productive capabilities over time. Education, agricultural change, infrastructure, investment coordination, technology access and exports mattered in different sequences. Their effects depended on institutions, resources, distribution, history and international conditions. Culture may influence coordination, legitimacy and organisational practice, but it is not a stand-alone explanation.',36,424,523,153,12);
[['Connected Development','Supported with exceptions'],['Radius of Trust','Inconclusive'],['Continuity + Adaptation','Supported with exceptions']].forEach((r,i)=>{let y=600+i*30;line(36,y-6,559,y-6);text(r[0],36,y,262,22,10.5,true);text(r[1],310,y,249,22,10.5);});

// 24
page(26,'06 / Transfer mechanisms','What can travel—and what must adapt?','Lessons are conditional mechanisms to examine, not national models to transplant.','Original group conclusions grounded in the approved theory matrix: World Bank (1993, 2020); Maipose (2008); Svirydzenka and Petri (2014); OECD (2017). These are reasoned implications, not independently identified causal effects.');
const lessons=[['Build productive capabilities','Not only visible infrastructure. Ask whether people and firms can use it reliably and learn.'],['Connect the domestic economy','Link suppliers, workers, skills and markets—not just a port to the world.'],['Combine continuity with correction','Keep a direction long enough to learn; change policies that protect failure.'],['Support cooperation beyond close ties','Use institutions and organisations; do not assume national trust scores explain growth.'],['Adapt to the starting conditions','Resources, history, scale and international conditions shape what is feasible.']];
lessons.forEach((r,i)=>{let y=229+i*84;text(String(i+1).padStart(2,'0'),36,y,51,35,24,true,C.dark);text(r[0],104,y,455,29,15,true);text(r[1],104,y+37,455,41,10.5);});
text('Transfer mechanisms, not myths.\nAdapt lessons, not entire national models.',36,680,523,61,21,true);

// 25
page(27,'06 / The open question','If culture matters, can culture change?','Culture may shape economic organisation and also change with institutions, opportunities and experience.','Hofstede (2011, pp. 6–8, 16); Beugelsdijk and Welzel (2018, pp. 1469–1475, Figures 7–9). Essential references continue on p. 28; image credits on p. 30.');
text('Do not confuse a\nhistorical pattern\nwith a permanent\nnational personality.',36,239,523,163,31,true);
text('Culture is neither irrelevant nor sufficient. Cohort and historical change challenge a timeless reading of national averages (Beugelsdijk & Welzel, 2018). Our next question should name a mechanism, a context and evidence that could change our minds.',36,433,523,89,12);
band('Draft status','Complete editorial draft — final evidence, rights and physical-print checks pending.',554,75);
text('TEAM NAME: [TO BE CONFIRMED]',36,651,523,22,11,true);
text('Complete source appendix: [LINK / QR PLACEHOLDER]\nNo live appendix address is approved. The local source registry, claim registry and chart CSVs remain the traceable master records.',36,690,523,55,9);

// 26 — essential registered references, no fabricated bibliography.
page(28,'Source appendix','Essential references','APA references for the evidence spine. Exact locators are in page source bands and the approved source registry.','Reference text is copied from research/source_registry.csv, not generated by Canva. Additional supporting sources and verification status remain in the complete local registry.');
const refIds=['SRC-WDI-001','SRC-WB-EAM93-001','SRC-WB-GHA20-001','SRC-WB-GHA85-001','SRC-MAIPOSE08-001','SRC-IMF-MUS14-001','SRC-JEDWAB-MORADI12-001','SRC-HOFSTEDE11-001','SRC-MCSWEENEY02-001','SRC-OECD-TRUST17-001'];
let yy=233;
for(const id of refIds){const r=registry.find(r=>r.source_id===id);let t=r?r.apa7_reference:'[CITATION TO BE COMPLETED FROM APPROVED SOURCE REGISTRY]';// Preserve source wording, use a clickable short locator when URLs would dominate print.
 let url=r?.doi||r?.url||'';t=t.replace(/https?:\/\/\S+/g,'').trim();
 const rows=wrap(t,523,9),h=rows.length*11+16;text(t,36,yy,523,h,9);if(url)text('SOURCE ↗',36,yy+h-12,85,12,8,true,C.dark,{hyperlink:{url}});yy+=h+3;
}
text('Further cited works: Bolt et al. (2025); Cogneau et al. (2018); Huillery (2009); Kohli (1994); Haggard et al. (1997); Dolan (1993); Asadullah et al. (2024); Xenos (1970); Nasution (2000); McMillan et al. (2014); Beugelsdijk and Welzel (2018); National Archives Department (n.d.). Full registered APA entries accompany the production master; appendix placeholder p. 27.',36,665,523,79,8.5);

// 27
page(29,'Credits / Colophon','Data, method and open gates','The figures use the registered World Bank and ILO series; the locator map is contextual, not a development score.','Data and figure credits: World Bank WDI / ILO modelled employment. Editable charts recreate approved frozen CSV values; no annual interpolation or composite trust score. Map geometry is Natural Earth 1:110m, Admin 0, v5.1.1. Photographic attributions continue on p. 30.');
text('Complete editorial draft — final evidence, rights and physical-print checks pending.',36,238,523,58,24,true,C.ink,{serif:true});
line(36,352,559,352,C.ink,1);
text('OPEN GATES',36,375,155,24,10,true,C.dark);text('1914 historical map raster and original legend; final source and rights review; physical A4 print, colour and classroom-screen checks. Team name and complete source-appendix link remain placeholders.',196,375,363,96,12);
text('Photographs are credited separately on p. 30. They add place and human scale; they cannot prove culture, trust, productivity or causality.',36,517,523,56,11);
text('MAP NOTE',36,610,90,20,9,true,C.dark);text('Natural Earth boundaries are generalized and present-day; they are not historical borders. At this scale Mauritius is represented by a location marker, not a visible island outline.',135,610,424,54,9.5);

// 28 — full readable credits for all twelve approved country photographs.
page(30,'Credits / Colophon','Photographs and map source','Two country-specific photographs for each case. Each image remains contextual, not evidence of a national characteristic.','Rights audit and asset IDs: research/asset_rights_register.csv; country short-list and limits: research/country_photography_audit.md.','The map locates cases only. Photography cannot establish development outcomes or causality.');
const photoPairs=[[0,6],[2,8],[3,9],[1,7],[4,10],[5,11]];
countries.forEach((c,i)=>{const y=230+i*68;const [aIndex,bIndex]=photoPairs[i],a=photos[aIndex],b=photos[bIndex];country(i,36,y,205);const credit=p=>`${p.creator} (${p.date}). ${p.title} · ${p.rights_or_licence.match(/CC BY(?:-SA)? [\d.]+/)?.[0]||p.rights_or_licence}.`;text(credit(a),218,y+1,341,19,8.5);text(credit(b),218,y+22,341,19,8.5);text('Image A ↗',218,y+43,66,14,8,true,C.dark,{hyperlink:{url:a.source_page_url}});text('Licence ↗',286,y+43,59,14,8,true,C.dark,{hyperlink:{url:a.rights_statement_url}});text('Image B ↗',358,y+43,66,14,8,true,C.dark,{hyperlink:{url:b.source_page_url}});text('Licence ↗',428,y+43,59,14,8,true,C.dark,{hyperlink:{url:b.rights_statement_url}});line(36,y+62,559,y+62,C.grey,.45);});
text('Map source: Natural Earth. (n.d.). Admin 0 – Countries, 1:110m Cultural Vectors (v5.1.1). https://www.naturalearthdata.com/downloads/110m-cultural-vectors/. Generalized present-day boundaries; public-domain data.',36,650,523,37,8.5);
text('All photographs were resized and recompressed only; no content was removed or added. Check licence attribution and any future changes before redistribution.',36,705,523,30,8.5);

finish();
async function main(){
 await pptx.writeFile({fileName:path.join(OUT,'africa_asia_evidence_ledger_editable.pptx')});
 fs.writeFileSync(path.join(OUT,'page_manifest.json'),JSON.stringify(manifest,null,2));
 fs.writeFileSync(path.join(OUT,'full_registered_references.md'),'# Registered references used in the editorial draft\n\n'+registry.filter(r=>!r.source_id.includes('PHOTO')).map(r=>`- ${r.apa7_reference}\n  - ${r.source_id}: ${r.verification_status}. Locator: ${r.exact_locator}`).join('\n\n'));
 await Promise.all(preview.map((svg,i)=>sharp(Buffer.from(svg)).resize({width:595}).png().toFile(`/tmp/canva-magazine-production/previews/page-${String(i+1).padStart(2,'0')}.png`)));
 console.log(JSON.stringify({pages:manifest.length,textElements:manifest.reduce((a,p)=>a+p.elements.filter(e=>e.type==='text').length,0),photos:photos.map(p=>({id:p.asset_id,file:p.file})),file:path.join(OUT,'africa_asia_evidence_ledger_editable.pptx')}));
}
main().catch(e=>{console.error(e);process.exit(1)});
