// User-approved direction: plain language, visual impact, explicit group views.
// Original comments remain on DAHX1YAS2iE. The deleted allocation page stays out.
const allGdp = csv(path.join(ROOT,'data/charts/six_country_gdp_anchor_years.csv'));
countries.forEach(c=>c.exactGdp=[1960,1990,2020].map(y=>Number(allGdp.find(r=>r.country===c.name&&Number(r.actual_year)===y).value)));
const money=v=>'US$'+Math.round(v).toLocaleString('en-US');
const sourceData='World Bank (2026), World Development Indicators, NY.GDP.PCAP.KD; release 13 July 2026, retrieved 6 October 2026. GDP per capita, constant 2015 US dollars per person. Full reference: p. 27.';
const sourceCulture='Hofstede (2011, pp. 6–8, 9–16); McSweeney (2002, pp. 93–107). National averages are not individual traits or causal scores. Full references: p. 27.';
const sourceTrust='OECD (2017, pp. 41–44, 62–79); Svirydzenka and Petri (2014, pp. 5–8, 12). No comparable six-country direct-trust series is available for this comparison. Full references: p. 27.';
const sourceIndustry='World Bank (1993, pp. 4–7, 20–26, 79–80, 127–130, 159–161); World Bank (2020, pp. 32–33, Box 2 pp. 44–47). Full references: p. 27.';
const sourceCases='Maipose (2008, pp. 3–5, 8–11); Svirydzenka and Petri (2014, pp. 5–8); World Bank (2020, Box 2, pp. 44–47); Nasution (2000, pp. 19–20). Full references: p. 27.';
// Canva distorts zero-height PPTX line shapes. Encode horizontal/vertical
// strokes as native thin rectangles so quantitative bar lengths stay exact.
const diagonalLine=line;
line=function(x1,y1,x2,y2,col=C.grey,width=.6,dash=false){
 const horizontal=Math.abs(y2-y1)<.00001,vertical=Math.abs(x2-x1)<.00001;
 if(!horizontal&&!vertical)return diagonalLine(x1,y1,x2,y2,col,width,dash);
 const start=horizontal?Math.min(x1,x2):Math.min(y1,y2),length=horizontal?Math.abs(x2-x1):Math.abs(y2-y1);
 if(length<.00001)return;
 const draw=(a,b)=>horizontal?rect(a,y1-width/2,b-a,width,col):rect(x1-width/2,a,width,b-a,col);
 if(!dash)return draw(start,start+length);
 for(let pos=start;pos<start+length;pos+=9)draw(pos,Math.min(pos+5,start+length));
};
// Override page furniture, not evidence. All major comparisons retain caveats.
page=function(n,section,title,deck='',sources='',limit=''){
 if(s)finish();s=pptx.addSlide();s.background={color:C.paper};sv=[];current={page:n,title,elements:[],sources,limit};manifest.push(current);
 text(`AFRICA & ASIA / ${section.toUpperCase()}`,36,23,490,15,8,true,C.dark);line(36,45,559,45,C.ink,1);
 if(title)text(title,36,65,523,99,title.length>53?32:42,true,C.ink,{serif:true});
 if(deck)text(deck,36,175,523,47,11.5,false,C.dark);
 if(limit){text('KEEP IN MIND',36,701,523,15,8,true);text(limit,36,721,523,32,9,false,C.dark);}
 line(36,761,559,761,C.ink,.7);text(sources,36,772,523,41,8,false,C.dark);
 text('AFRICA & ASIA',36,824,430,12,8,true,C.dark);text(String(n).padStart(2,'0'),523,820,36,18,10,true,C.ink,{align:'right'});return s;
};
function take(body,y=598,h=91){
 rect(36,y,523,h,C.ink);text('OUR TAKE / GROUP VIEW',50,y+12,495,15,8,true,C.paper);
 text(body,50,y+34,495,h-42,11.5,true,C.paper);
}
function statement(head,body,x,y,w=245){text(head,x,y,w,53,21,true,C.ink,{serif:true});text(body,x,y+59,w,80,11);}
function cap(t,x,y,w){text(t,x,y,w,37,8,false,C.dark);}
function arrow(x,y,w=30){text('→',x,y,w,33,23,true);}
// Simple original native pictograms. These denote topics, never countries.
function icon(kind,x,y,size=35){
 const a=size/35;
 const ln=(x1,y1,x2,y2)=>line(x+x1*a,y+y1*a,x+x2*a,y+y2*a,C.ink,1.6);
 if(kind==='book'){ln(2,5,16,8);ln(16,8,32,5);ln(2,5,2,29);ln(32,5,32,29);ln(2,29,16,32);ln(16,32,32,29);ln(16,8,16,32);}
 if(kind==='road'){ln(8,2,4,33);ln(26,2,30,33);ln(17,3,17,9);ln(17,14,17,21);ln(17,26,17,32);}
 if(kind==='factory'){ln(2,32,32,32);ln(2,32,2,15);ln(2,15,12,9);ln(12,9,12,15);ln(12,15,23,9);ln(23,9,23,32);ln(27,19,27,3);ln(32,32,32,3);ln(27,3,32,3);ln(7,23,10,23);ln(16,23,19,23);}
 if(kind==='box'){rect(x+4*a,y+7*a,27*a,25*a,C.paper,C.ink);ln(4,15,31,15);ln(17,7,17,15);}
 if(kind==='ship'){ln(2,23,33,23);ln(2,23,10,32);ln(10,32,27,32);ln(27,32,33,23);ln(8,23,8,12);ln(8,12,25,12);ln(25,12,25,23);ln(17,12,17,3);}
 if(kind==='loop'){ln(5,5,29,5);ln(29,5,29,26);ln(29,26,24,21);ln(29,26,34,21);ln(29,32,5,32);ln(5,32,5,11);ln(5,11,0,16);ln(5,11,10,16);}
 if(kind==='network'){[[3,17,17,3],[17,3,31,17],[31,17,17,31],[17,31,3,17],[3,17,31,17]].forEach(z=>ln(...z));[[3,17],[17,3],[31,17],[17,31]].forEach(([u,v])=>s.addShape(pptx.ShapeType.ellipse,{x:(x+(u-2)*a)/72,y:(y+(v-2)*a)/72,w:4*a/72,h:4*a/72,fill:{color:C.ink},line:{color:C.ink}}));}
}

// 01 — equal photographic fields, no regional hierarchy.
page(1,'Six countries. One big question.','','','Photographs: JulianGrayscales (2020), Tema port; Svwmal (2012), Busan harbour. Context, not a regional ranking. Full credits and licences: p. 29.');
text('Africa & Asia:',36,69,523,62,47,true,C.ink,{serif:true});
text('Why Did Their\nEconomic Paths\nDiverge?',36,148,523,183,47,true,C.ink,{serif:true});
text('Testing culture against history, institutions,\npolicy and economic evidence.',36,350,523,51,14);
photo(0,36,425,249,166,false);photo(1,310,425,249,166,false);
country(0,36,606,249);country(3,310,606,249);
cap('Tema port · 2020\nTrade and work in Ghana.',36,640,249);cap('Busan harbour · 2012\nTrade and work in South Korea.',310,640,249);
text('DIFFERENT PATHS.\nNO EASY ANSWER.',36,691,523,59,24,true);

// 02 — reader-facing opening and short route; no formal method lecture.
page(2,'Start here','Culture—or a much bigger story?','We started with a question. Six countries made the answer more complicated.',sourceCulture);
text('Not one Africa.\nNot one Asia.',36,244,523,106,43,true,C.ink,{serif:true});
text('Ghana and South Korea give us a striking comparison. Botswana, Mauritius, Malaysia and the Philippines challenge the easy explanations.',36,368,500,71,13);
[['01','The gap','03–04'],['02','The starting line','05–08'],['03','Work, income and learning','09–14'],['04','Culture and trust','15–18'],['05','Our ideas on trial','19–23'],['06','What we think','24–26']].forEach((r,i)=>{const y=456+i*27;text(r[0],36,y,30,20,9,true);text(r[1],82,y,370,22,11,true);text(r[2],490,y,69,20,9,true,C.dark,{align:'right'});});
take('We think culture matters. But different histories, resources and starting points make “Africa versus Asia” the wrong shortcut.',633,105);

// 03 — baseline bars, smaller markers, generous row separation.
page(3,'The gap','1960: almost level. Not identical.','Ghana and South Korea were close in income per person—not in every starting condition.',sourceData,'Income per person is an average, not a typical wage or a measure of inequality. Similar income does not mean the same history.');
text('US$1,101',36,239,249,54,34,true,countries[0].c);text('US$1,038',310,239,249,54,34,true,countries[3].c);
country(0,36,302,249);country(3,310,302,249);text('Just US$63 apart.',36,347,523,35,21,true);
const bx=213,bw=245;
countries.forEach((c,i)=>{let y=410+i*39;country(i,36,y-2,165);const w=bw*c.exactGdp[0]/1500;if(i===2)line(bx,y+10,bx+w,y+10,C.ink,9);line(bx,y+10,bx+w,y+10,c.c,6);marker(i,bx+w,y+10,6);text(money(c.exactGdp[0])+(i===4?' †':''),469,y-1,90,21,9.5,true);});
text('Bar scale: US$0–1,500. † Malaysia: retrospective territorial series; 1960 predates the 1963 federation and Singapore’s 1965 exit.',36,661,523,33,8.5);

// 04 — clear 2020 snapshot, not the old compressed/scrambled small multiples.
page(4,'The gap','2020: the paths have split.','The same income measure. Six very different outcomes.',sourceData,'This is the COVID-19 year. The comparison does not measure purchasing power, freedom, health or the causes of growth.');
const outX=204,outW=240;
countries.forEach((c,i)=>{let y=255+i*59;country(i,36,y,161);const w=outW*c.exactGdp[2]/35000;if(i===2)line(outX,y+14,outX+w,y+14,C.ink,12);line(outX,y+14,outX+w,y+14,c.c,9);marker(i,outX+w,y+14,6);text(money(c.exactGdp[2]),457,y+2,102,25,12,true);});
text('0',outX,625,45,17,8);text('US$35,000',outX+outW-65,625,85,17,8,false,C.dark,{align:'right'});
text('Different outcomes inside\nboth continents.',36,643,523,55,22,true,C.ink,{serif:true});

// 05 — present-day map plus clearly labelled colonial-power text badges.
page(5,'The starting line','Find the countries. Then rewind.','These are present-day locations. Their political starting points came at different times.', 'World Bank (1985, p. 18); Maipose (2008, pp. 3–5); National Archives Department (n.d.); Haggard et al. (1997, pp. 867–870); Asadullah et al. (2024, pp. 13–15); Dolan (1993), archival recheck pending. Map: Natural Earth (n.d.), v5.1.1; full credit p. 29.','The map is generalized and present-day—not a 1914 colonial map. Mauritius is located by a point. Independence dates do not measure state capacity.');
drawLocator(45,242,505,202);
[[0,36,450],[1,213,450],[2,390,450],[3,36,477],[4,213,477],[5,390,477]].forEach(([i,x,y])=>country(i,x,y,158));
const dates=[['South Korea','1945 / 1948','Japan → end of rule / Republic established'],['Philippines','1946','Spain, then United States → independence'],['Ghana','1957','Britain → independence'],['Malaysia','1957 / 1963','Britain → Malaya independence / federation'],['Botswana','1966','British protectorate → independence'],['Mauritius','1968','France, then Britain → independence']];
dates.forEach((r,i)=>{let y=521+i*27;line(36,y-4,559,y-4);text(r[1],36,y,95,21,10,true);text(r[0],140,y,112,21,9.5,true);text(r[2],270,y,289,23,8.3);});
text('Historical 1914 map withheld: verified artwork and original legend still required.',36,684,523,13,8);

// 06 — mechanisms, plain language, visual question and group view.
page(6,'The starting line','Same empire. Different inheritance.','Ask what colonial rule built, extracted and left behind—not just which flag it flew.', 'Bolt et al. (2025, pp. 1–6, 18–20); Huillery (2009, pp. 176–180, 203–208); Kohli (1994, pp. 1277–1284); Haggard et al. (1997, pp. 867–881); Dolan (1993), archival passage recheck pending.','These studies do not show that colonial rule was beneficial overall, or that one empire explains the six countries’ later paths.');
[['road','Built for whom?','British African councils varied. Investment also varied within French West Africa. An empire label hides important differences (Bolt et al., 2025; Huillery, 2009).'],['factory','What survived?','Researchers disagree about Korea’s colonial inheritance. Organisation mattered, but so did coercion, unequal ownership, division, war and later policy change (Kohli, 1994; Haggard et al., 1997).'],['book','Who had access?','The Philippines combined formal institutions and education with concentrated power. Spanish and US rule cannot be explained by a British–French contrast (Dolan, 1993; recheck pending).']].forEach((r,i)=>{let y=240+i*113;icon(r[0],36,y+5,38);text(r[1],98,y,461,31,23,true,C.ink,{serif:true});text(r[2],98,y+40,461,66,10.5);});
take('Independence did not reset the economy. We think what countries inherited—and what they could build on afterwards—mattered more than the colonial flag alone.',589,106);

// 07 — original railway schematic, now visually explained with native symbols.
page(7,'The starting line','Track is not the whole story.','Ghana: the useful question is who the railway connected.', 'Jedwab and Moradi (2012, pp. 1–4, 6–10). Original schematic based on cited facts, not traced map geometry. Full reference: p. 27.','One railway case cannot explain all of Africa or show that infrastructure alone caused growth. It does not establish the net benefit of colonial rule.');
text('1898–1918 / GHANA',36,239,523,20,10,true);
icon('ship',62,292,48);text('Coast and ports',36,356,211,32,17,true);
icon('factory',416,292,48);text('Mining areas',354,356,205,32,17,true);
line(123,314,398,314,C.ink,2);arrow(260,286);
icon('box',62,427,48);text('Cocoa producers',36,491,211,32,17,true);
icon('network',416,427,48);text('Kumasi and markets',329,491,230,32,17,true);
line(123,450,398,450,C.ink,1.5,true);arrow(260,422);line(440,393,440,421,C.ink,1.5);line(85,393,85,421,C.ink,1.5,true);
text('SCHEMATIC, NOT SURVEY GEOMETRY',36,535,523,17,8,true);
text('Solid: original connections to mines and Kumasi.\nDashed: later economic links—not a mapped railway route.',36,561,523,36,10);
text('Built to extract.\nUsed for more.',36,612,249,69,25,true,C.ink,{serif:true});
text('Lower transport costs also supported cocoa production and urban growth. Original purpose and later effects were not the same (Jedwab & Moradi, 2012).',310,612,249,80,10.5);

// 08 — all six country photographs at equal dignity; contemporary caveat.
page(8,'The starting line','Six countries. Six starting points.','What could each country build on—and what held it back?', 'World Bank (1985, p. 18); Maipose (2008, pp. 3–5); Xenos (1970, p. 1); Svirydzenka and Petri (2014, pp. 5–8); Haggard et al. (1997); Asadullah et al. (2024, pp. 13–15); Dolan (1993), archival recheck pending. Photo credits p. 29.','These are contemporary photographs, not scenes from independence. They give context, not proof of historical living conditions or causes.');
const starts=['Cocoa exports; inherited roads, rail and Tema harbour.','Few inherited public assets and limited skills; mineral income later changed the base.','Sugar dominated export earnings; diversification came later.','Colonial inheritance was disrupted by division and war.','Commodity exports came before export manufacturing; federation formed in 1963.','Formal institutions and education coexisted with concentrated power.'];
const pidx=[0,2,3,1,4,5];
countries.forEach((c,i)=>{let y=237+i*75;photo(pidx[i],36,y,120,66,false);country(i,177,y,382);text(starts[i],177,y+31,382,39,10.5);line(36,y+70,559,y+70);});

// 09 — calmer employment bars: no oversized endpoint symbols, no false legend.
page(9,'Work','Fewer farm jobs. What came next?','Share of workers in agriculture, industry and services. Actual comparison: 1991 → 2020.', 'World Bank (2026), WDI / ILO modelled estimates: SL.AGR.EMPL.ZS, SL.IND.EMPL.ZS, SL.SRV.EMPL.ZS. 1991 proxies 1990; no approved 1960 series. Percent of employment. Release 13 July 2026; retrieved 6 October 2026.','Moving out of farming does not automatically raise productivity. Industry includes mining, construction and utilities; services are not all high-skill jobs.');
const ex=[174,307,440],ew=112;
['FARMING','INDUSTRY*','SERVICES'].forEach((t,j)=>text(t,ex[j],239,ew,21,9,true));
text('Upper thin bar: 1991. Lower thick bar: 2020. All bars use 0–100%.',36,270,523,24,9);
countries.forEach((c,i)=>{let y=312+i*59;country(i,36,y+4,128);empRows[c.name].forEach((pair,k)=>{const x=ex[k];line(x,y+7,x+ew,y+7,C.grey,.5);line(x,y+21,x+ew,y+21,C.grey,.5);line(x,y+7,x+ew*pair[0]/100,y+7,C.dark,2);if(i===2)line(x,y+21,x+ew*pair[1]/100,y+21,C.ink,7);line(x,y+21,x+ew*pair[1]/100,y+21,c.c,4);text(pair.map(v=>v.toFixed(1)).join(' → ')+'%',x,y+33,ew,17,8.5,true);});});
text('* Industry includes mining, construction and utilities. 1991 is the visible proxy for 1990. 2020 is the pandemic year.',36,675,523,24,8.5);

// 10 — requested clear country-by-year income comparison, not GDP shares.
page(10,'Income','The numbers. Country by country.','GDP per capita means economic output per person—not total national GDP or a share of GDP.',sourceData,'Not a purchasing-power comparison or a measure of inequality. † Malaysia 1960 is a retrospective territorial series. 2020 is the pandemic year.');
const cols=[209,351,493];
['1960','1990','2020'].forEach((y,j)=>text(y,cols[j]-48,244,100,45,24,true,C.ink,{serif:true,align:'center'}));
countries.forEach((c,i)=>{let y=310+i*58;country(i,36,y+6,154);c.exactGdp.forEach((v,j)=>{text(Math.round(v).toLocaleString('en-US')+(i===4&&j===0?' †':''),cols[j]-48,y+4,100,34,19,true,i===2?C.ink:c.c,{align:'center'});const w=100*v/35000;if(i===2)line(cols[j]-48,y+43,cols[j]-48+w,y+43,C.ink,6);line(cols[j]-48,y+43,cols[j]-48+w,y+43,c.c,3);});line(36,y+54,559,y+54,C.grey,.5);});
text('US dollars per person, at constant 2015 prices. Mini-bars all run from 0 to US$35,000; use the printed values for the small early-year differences.',36,669,523,29,8.5);

// 11 — six original symbols explain the learning sequence in plain language.
page(11,'Learning','Build. Learn. Improve. Repeat.','A country needs more than factories. People and firms need the ability to make better things.',sourceIndustry,'This is a possible learning sequence, not an automatic cycle. Institutions, resources, distribution and access to technology and markets shape every link.');
const chain=[['book','Learn the skills','Education helps people use and improve technology.'],['road','Make the connections','Reliable power and transport help work get done.'],['network','Build firms and suppliers','Local businesses need links, skills and organisations.'],['factory','Make and improve','Production tests quality, routines and coordination.'],['ship','Sell and learn','Export markets can bring scale and feedback.'],['loop','Invest again','Use returns to upgrade—not just protect failure.']];
chain.forEach((r,i)=>{let y=237+i*69;icon(r[0],38,y+4,32);text(r[1],99,y,460,27,17,true);text(r[2],99,y+34,460,29,10.5);if(i<5)text('↓',47,y+39,20,22,12);});
text('The chain breaks when power fails, feedback is ignored, or firms are protected from learning.',36,658,523,37,11,true);

// 12 — real product context, no fabricated export-composition data.
page(12,'Follow the product','“Made here” is not the whole story.','A country can export a product without keeping all its value—or learning how to make its most complex parts.', 'World Bank (2020, Box 2, pp. 44–47); Nasution (2000, pp. 19–20, Table 9); World Bank (1993, pp. 20–26). Conceptual journey, not measured product shares. Photographs: jgmorard (2009), Port Klang; george ruiz (2013), Metro Manila; CC BY 2.0. Full credits p. 29.','Export totals and photographs cannot reveal who keeps the value, how much is local, or which skills firms have learned.');
photo(10,36,239,249,166,false);photo(11,310,239,249,166,false);
cap('Port Klang, Malaysia · 2009\nContainers show movement—not local value kept.',36,415,249);cap('Metro Manila, Philippines · 2013\nMarket exchange—not a national productivity measure.',310,415,249);
const product=[['INPUTS','Parts can come from abroad.'],['ASSEMBLY','Local work is one part of the value.'],['SUPPLIERS','Local links may deepen—or stay thin.']];
product.forEach((r,i)=>{const x=36+i*179;icon(i===0?'box':i===1?'factory':'network',x,474,32);text(r[0],x,521,165,21,10,true);text(r[1],x,552,165,60,10.5);if(i<2)arrow(x+140,477);});
text('Exports ≠ local value ≠ local skills.',36,635,523,40,24,true,C.ink,{serif:true});
text('Manufacturing share measures production mix, not technological capability. More assembly does not automatically mean deeper domestic learning.',36,675,523,23,9);

// 13 — dated sequence plus group view, no triumphalist cultural explanation.
page(13,'South Korea','Not an overnight miracle.','South Korea built skills and firms over time. It also made costly policy mistakes.', 'World Bank (1993, pp. 20–26, 127–130, 159–161, 242). Rodrik (1995): competing investment-coordination argument; registered working-paper abstract, not a page-specific causal estimate.','The sequence cannot isolate culture as the cause. Other countries cannot copy its history, security setting or international opportunities.');
const stages=[['1950s','Recover','Education, agricultural change and infrastructure helped build foundations.'],['1960s','Coordinate','Credit and investment worked alongside export incentives and performance pressure.'],['1970s','Push—and pay','Heavy industry expanded, but brought debt, bottlenecks and other costs.'],['1980s','Correct and upgrade','Policy adjustment accompanied deeper firm learning and technological upgrading.']];
stages.forEach((r,i)=>{let y=240+i*84;text(r[0],36,y,138,35,27,true,countries[3].c);text(r[1],190,y,369,29,20,true);text(r[2],190,y+38,369,45,10.5);});
take('Learn from South Korea. Don’t photocopy it. We value cooperation and long-term effort, but these are lessons to adapt—not proof of a superior culture.',593,102);

// 14 — exact paired trajectory, direct labels, stronger hierarchy.
page(14,'Ghana + South Korea','A huge gap. Not a controlled test.','GDP per capita · constant 2015 US dollars per person · 1960, 1990, 2020',sourceData,'A two-country trajectory cannot isolate culture, colonial rule, policy, institutions or any single cause. Straight lines connect anchors, not annual estimates.');
const px=[105,305,505],py=v=>563-v/35000*292;
[0,10000,20000,30000,35000].forEach(v=>{line(99,py(v),510,py(v),C.grey,.55);text(v===0?'0':v/1000+'k',36,py(v)-5,53,18,8.5,false,C.dark,{align:'right'});});
[0,3].forEach(ci=>{const c=countries[ci];c.exactGdp.forEach((v,j)=>{if(j<2)line(px[j],py(v),px[j+1],py(c.exactGdp[j+1]),c.c,2,ci===3);marker(ci,px[j],py(v),7);});});
['1960','1990','2020'].forEach((v,j)=>text(v,px[j]-25,578,50,23,10,true,C.ink,{align:'center'}));
text('South Korea\nUS$33,216',370,235,189,44,12,true,countries[3].c);text('Ghana\nUS$1,970',399,502,160,43,11,true,countries[0].c);
text('Ghana 1,101 / Korea 1,038',36,611,249,23,9.5,true);text('1990: Ghana 856 / Korea 9,673',36,642,249,34,9.5,true);
text('16.9 : 1',310,615,249,51,36,true,C.ink,{black:true});text('Approximate income ratio in 2020.\nNot a causal estimate.',310,667,249,29,9);

// 15 — all Hofstede dimensions, definitions plain but bounded.
page(15,'Culture','A lens. Not a national personality.','Hofstede’s six dimensions ask about patterns in societies—not what every person is like.',sourceCulture,'National averages are historical, country-level lenses—not individual personalities, timeless truths or causal scores. Missing country scores are not invented.');
const lenses=[['Power distance','How accepted is unequal power?','TEST CONDITIONALLY'],['Individualism / collectivism','How strongly are people tied to groups? Not a trust score.','TEST CONDITIONALLY'],['Masculinity / femininity','Competition and achievement versus care and quality of life. Historical labels.','CONTEXT ONLY'],['Uncertainty avoidance','How do people respond to ambiguity? Not simply risk-taking.','CONTEXT ONLY'],['Long-term orientation','Future-focused adaptation versus present and past obligations. Not policy duration.','TEST CONDITIONALLY'],['Indulgence / restraint','How strongly does society regulate gratification? Not work ethic.','CONTEXT ONLY']];
lenses.forEach((r,i)=>{let y=237+i*56;text(r[0],36,y,249,30,12,true);text(r[1],310,y,249,37,10);text(r[2],36,y+32,249,14,7.8,true,C.dark);line(36,y+51,559,y+51);});
take('Culture matters. It isn’t destiny. We think habits and shared expectations influence cooperation—but history, resources and institutions also shape what people can do.',588,107);

// 16 — clearly distinguished trust targets with typographic symbols and photo.
page(16,'Trust','Trust whom—with what?','Trust in a relative, a bank and “most people” are not the same thing.',sourceTrust,'Governance indicators are not trust measures. Different questions, years and survey samples cannot be turned into one six-country trust ranking.');
photo(6,36,239,180,239,false);cap('Accra market, Ghana · 2020\nAmuzujoe; CC BY-SA 4.0. Everyday trade—not a trust score. Full credit p. 29.',36,487,180);
[['A PERSON','Someone you know is different from a stranger.'],['A NETWORK','Family and close contacts can support cooperation.'],['AN INSTITUTION','Name it: a court, a bank or a government.'],['A SURVEY ANSWER','Wording, timing and who was asked all matter.']].forEach((r,i)=>{let y=241+i*78;text(r[0],250,y,309,24,11,true);text(r[1],250,y+31,309,39,11);});
text('We cannot conclude that\n“Asia trusts more”.',36,588,523,68,29,true,C.ink,{serif:true});
text('That was our initial impression—not a finding supported by comparable evidence across these six countries.',36,664,523,33,10.5);

// 17 — networks: real context, simple benefit/boundary composition.
page(17,'Close networks','Family first. Doors open—or closed?','Close ties can make cooperation easier. They can also make it harder for outsiders to join.',sourceTrust,'This is a conditional explanation and a discussion prompt—not a measure of any country’s culture, corruption or trust.');
photo(7,36,239,249,171,false);cap('Gyeongdong Market, Seoul · 2008\nGaël Chardon; CC BY-SA 2.0. Market context, not measured trust. Full credit p. 29.',36,420,249);
statement('The strength','Credit, labour and mutual help can keep people and businesses going.',310,239,249);
statement('The boundary','Hiring outsiders or sharing control may be harder without reliable organisations and contracts.',310,396,249);
text('Who would you trust with money?',36,534,523,37,23,true,C.ink,{serif:true});text('Family? A friend? A bank? An unfamiliar partner backed by a reliable contract?',36,578,523,34,11);
take('We see family networks mainly as a strength. But conflict, exclusion and closed-minded decisions can turn that strength into a limit.',625,73);

// 18 — conditional culture mechanisms and group government opinion.
page(18,'Power + time','Strong leadership. Honest feedback.','Planning ahead helps only if people can challenge mistakes.',sourceCulture,'Cultural scores cannot replace direct evidence about decisions, investment, policy duration or whether leaders actually correct failure.');
icon('network',36,243,41);statement('Who can speak up?','Hierarchy may coordinate action—or silence the people who notice a problem.',101,239,458);
icon('loop',36,392,41);statement('Who changes course?','Long-term plans need feedback. A long-term-orientation score does not measure policy continuity.',101,388,458);
text('NOT ENOUGH EVIDENCE FOR A GROWTH CLAIM',36,531,523,19,8,true);
text('Uncertainty avoidance: need observed behaviour and matched timing.\nMasculinity / femininity: need a clear mechanism and valid measures.\nIndulgence / restraint: need a direct, timed link—not guessed work ethic.',36,560,523,43,10);
take('Strong government—for whose benefit? We support long-term planning, but leaders must serve the country, face accountability and change policies that fail.',614,84);

// 19 — original theory matrix, readable language and no invented scores.
page(19,'Our ideas on trial','Three ideas. Six reality checks.','These are our hypotheses—not established laws or national scores.', 'Original group hypotheses tested against the six cases. Sources: World Bank (1993, 2020); Maipose (2008); Svirydzenka and Petri (2014); OECD (2017).','A case can fit more than one explanation. Support does not isolate a cause; missing evidence must stay missing.');
text('Ask how it works.\nLook for the case that breaks it.',36,239,523,92,29,true,C.ink,{serif:true});
const matrixRows=[['Ghana','Fits, not causal','Unresolved','Unresolved'],['Botswana','Strong exception','Plausible channel','Diversification warning'],['Mauritius','Conditional support','Qualified substitutes','Strong qualified support'],['South Korea','Several causes','Unresolved channel','Duration + correction'],['Malaysia','Qualified support','Plausible substitutes','Qualified support'],['Philippines','Not enough alone','Challenges strong form','Support with warning']];
['COUNTRY','CONNECTIONS','TRUST','CONTINUITY'].forEach((v,j)=>text(v,[36,174,310,443][j],365,[132,128,125,116][j],22,8,true));
matrixRows.forEach((r,i)=>{let y=410+i*41;country(i,36,y,131);r.slice(1).forEach((v,j)=>text(v,[174,310,443][j],y,[128,125,116][j],36,9));line(36,y+36,559,y+36);});
text('What would change our minds? Better measurements, a clear sequence in time, and evidence against competing explanations.',36,670,523,29,10.5,true);

// 20 — productive connections, now with photographic anchor.
page(20,'Test 1 / Connected Development','More roads—or better connections?','What if the important difference is whom infrastructure connects?',sourceCases+' World Bank (1993, pp. 20–26). Original group hypothesis.','Connections alone do not guarantee diversification. Skills, investment, resources, institutions and market access remain competing explanations.');
text('SUPPORTED\nWITH EXCEPTIONS',36,239,523,76,28,true);
photo(4,36,345,249,172,false);cap('Perai Industrial Zone, Malaysia · 2024\nHundenvonPenang; CC BY-SA 4.0. Industrial context, not proof of linkages. Full credit p. 29.',36,527,249);
text('The fit',310,343,249,28,17,true);text('South Korea, Malaysia and Mauritius fit a story of skills, firms, infrastructure and markets working together.',310,380,249,83,11);
text('The challenge',310,479,249,28,17,true);text('Botswana grew despite few inherited public assets. The Philippines shows that export access can coexist with thin domestic links.',310,516,249,102,11);
text('Roads matter when people\nand firms can use them.',36,625,523,63,27,true,C.ink,{serif:true});
text('Revise the claim if stronger connections followed growth rather than helped produce it.',36,686,523,13,8.5);

// 21 — trust inconclusive, with clearly separated group impression.
page(21,'Test 2 / Radius of Trust','Can cooperation reach strangers?', 'Contracts, courts and organisations may let people work together without knowing each other first.',sourceTrust+' Original group hypothesis.','We cannot show that generalized trust caused larger firms or national growth. Institutional substitutes and other causes remain unresolved.');
text('INCONCLUSIVE',36,239,523,58,37,true);
icon('network',36,337,62);text('A plausible idea',136,335,423,31,21,true);text('Reliable institutions may help cooperation extend beyond family and close contacts.',136,379,423,65,12);
icon('book',36,470,62);text('A missing test',136,469,423,31,21,true);text('We lack comparable direct-trust evidence across all six cases. Ghana and South Korea remain direct-trust gaps.',136,513,423,73,12);
text('Trust matters to us.\nThe regional claim is unproven.',36,604,523,69,28,true,C.ink,{serif:true});
text('Reopen with comparable, weighted trust surveys linked in time to firm outcomes, while testing institutional alternatives.',36,676,523,23,9);

// 22 — continuity versus correction, visual sequence not wall of prose.
page(22,'Test 3 / Continuity + Adaptation','Keep the direction. Fix the mistakes.','A stable policy is useful only if it can learn.',sourceCases+' World Bank (1993, pp. 127–130, 159–161, 242). Original group hypothesis.','Policy duration cannot be separated here from state capacity, resources, foreign investment, market access, shocks or prior success.');
text('SUPPORTED\nWITH EXCEPTIONS',36,239,523,76,28,true);
[['PLAN','Give firms and workers a direction.'],['LISTEN','Check what is actually working.'],['CHANGE','Stop protecting repeated failure.']].forEach((r,i)=>{let x=36+i*179;icon(i===0?'book':i===1?'network':'loop',x,354,42);text(r[0],x,415,165,25,15,true);text(r[1],x,452,165,67,11);if(i<2)arrow(x+131,362);});
text('The fit',36,547,245,27,17,true);text('South Korea, Mauritius, Malaysia and the Philippines are consistent with durable direction plus correction.',36,585,245,84,11);
text('The warning',310,547,249,27,17,true);text('Continuity can preserve failure. Botswana warns that accumulating wealth is not the same as diversifying production.',310,585,249,84,11);
text('Revise if lasting policy repeatedly protects failure rather than learning.',36,681,523,17,9,true);

// 23 — Mauritius opinion, preserved counterexamples with varied composition.
page(23,'The exceptions matter','The cases that break the shortcut.','Four countries stop us telling one simple continental story.',sourceCases+' Photos: Paul tk (2018), Mochudi; Richard N Horne (2025), Port Louis. Full credits p. 29.','No case proves a universal formula. An exception challenges a claim; it does not automatically prove a rival explanation.');
country(1,36,238,249);photo(8,36,276,163,103,false);text('Supports resource management and investment. Challenges the need for strong inherited infrastructure. Does not prove broad diversification.',219,278,340,83,11);
cap('Mochudi solar pumping · 2018\nInfrastructure context, not a growth estimate.',36,385,177);
country(2,36,426,249);text('Supports adaptation and diversification. Challenges fixed cultural destiny. Does not prove continuity alone caused growth.',36,465,311,80,11);photo(9,397,425,162,100,false);text('Port Louis sugar terminal · 2025\nTrade context, not a history series.',397,532,162,21,8);
country(4,36,552,249);country(5,310,552,249);text('Malaysia: exports can help, but do not prove local capability.',36,589,249,30,10.5);text('Philippines: global links alone are not enough. There is no single “Asia” path.',310,589,249,30,10.5);
take('Mauritius surprised us. Its small size challenged our assumptions about what a country needs to develop—and about one single African development story.',625,73);

// 24 — approved bounded synthesis verbatim, visibly supported by a plain lead.
page(24,'Putting it together','Build the ability to do more.', 'Skills. Reliable connections. Firms that learn. Institutions that make cooperation possible.', 'Group synthesis: World Bank (1993, pp. 4–7, 20–26, 79–80); World Bank (2020); Maipose (2008); Svirydzenka and Petri (2014); Hofstede (2011).','This is a bounded interpretation, not a calculation of each cause’s contribution. Six countries do not represent two whole continents.');
icon('book',36,244,42);icon('road',167,244,42);icon('factory',298,244,42);icon('network',429,244,42);
text('Different ingredients.\nDifferent sequences.',36,310,523,83,32,true,C.ink,{serif:true});
text('Divergence depended less on fixed regional culture than on whether states, firms, workers and external partners built and disciplined productive capabilities over time. Education, agricultural change, infrastructure, investment coordination, technology access and exports mattered in different sequences. Their effects depended on institutions, resources, distribution, history and international conditions. Culture may influence coordination, legitimacy and organisational practice, but it is not a stand-alone explanation.',36,410,523,170,11.5);
[['Connected Development','Supported with exceptions'],['Radius of Trust','Inconclusive'],['Continuity + Adaptation','Supported with exceptions']].forEach((r,i)=>{let y=609+i*29;line(36,y-5,559,y-5);text(r[0],36,y,260,22,10.5,true);text(r[1],310,y,249,22,10.5);});

// 25 — the user's definition of development, clearly opinion not new dataset.
page(25,'Our take','A bigger economy. A better life?', 'For us, development is about what people can actually do and afford—not just a bigger GDP number.', 'Group values and interpretation, not a measured six-country wellbeing comparison. GDP charts: World Bank (2026), NY.GDP.PCAP.KD. Policy implications: World Bank (1993, 2020); Maipose (2008); Svirydzenka and Petri (2014); OECD (2017).');
text('Health.\nBuying power.\nFreedom.\nLiving standards.',36,239,523,221,42,true,C.ink,{serif:true});
text('OUR TAKE / GROUP VIEW',36,480,523,17,8,true);text('Higher income matters. But we also care about what that income buys, whether people are healthy, and whether they have more freedom. GDP alone cannot answer those questions.',36,515,523,85,14);
text('What should travel?',36,631,523,33,23,true);text('Build skills and useful connections. Keep a direction, but correct failure. Help people cooperate beyond close ties. Adapt each lesson to the place.',36,675,523,63,11.5);

// 26 — group conclusion + open question. Production status moved to colophon.
page(26,'Our answer','Different starts.\nNo fixed destiny.', 'Culture matters—but the question is bigger than culture.', 'Group viewpoint informed by the six-country comparison. On cultural change: Hofstede (2011, pp. 6–8, 16); Beugelsdijk and Welzel (2018, pp. 1469–1475, Figures 7–9).');
take('We think “Why couldn’t Africa grow like Asia?” is misleading. Neither continent followed one path. Countries had different histories, resources, infrastructure and opportunities.',239,128);
text('Our view changed.',36,408,523,48,31,true,C.ink,{serif:true});text('We still think culture can shape trust and cooperation. But the evidence pushes us to ask what governments, firms and people could build—and what helped or blocked them.',36,477,523,92,14);
text('If culture matters,\ncan culture change?',36,616,523,115,36,true,C.ink,{serif:true});

// 27 — essential registered references, readable and unaltered.
page(27,'Sources','Where the evidence comes from.','Essential references. Exact page, table and indicator details sit beside the evidence.','Complete source appendix: [LINK / QR PLACEHOLDER]. The full bibliography accompanies this edition; the online appendix link remains pending.');
const refIds=['SRC-WDI-001','SRC-WB-EAM93-001','SRC-WB-GHA20-001','SRC-WB-GHA85-001','SRC-MAIPOSE08-001','SRC-IMF-MUS14-001','SRC-JEDWAB-MORADI12-001','SRC-HOFSTEDE11-001','SRC-MCSWEENEY02-001','SRC-OECD-TRUST17-001'];
let yy=237;
for(const id of refIds){const r=registry.find(r=>r.source_id===id);let t=r?r.apa7_reference:'[CITATION TO BE COMPLETED FROM APPROVED SOURCE REGISTRY]';const url=r?.doi||r?.url||'';t=t.replace(/https?:\/\/\S+/g,'').trim();const h=wrap(t,523,9).length*11+17;text(t,36,yy,523,h,9);if(url)text('SOURCE ↗',36,yy+h-12,85,12,8,true,C.dark,{hyperlink:{url}});yy+=h+3;}
text('Also cited: Bolt et al. (2025); Huillery (2009); Kohli (1994); Haggard et al. (1997); Dolan (1993); Asadullah et al. (2024); Xenos (1970); Nasution (2000); Beugelsdijk and Welzel (2018); National Archives Department (n.d.). Full registered entries accompany the production master. The online appendix link remains pending.',36,687,523,60,8.5);

// 28 — unobtrusive draft status and open gates, not task language on story pages.
page(28,'Colophon','About this edition.','Six cases. Three anchor years. Evidence, interpretation and group views kept separate.','Chart credits: World Bank WDI and ILO modelled employment. Charts use recorded observations, not invented annual values. Map: Natural Earth 1:110m Admin 0 Countries, v5.1.1; public-domain generalized present-day boundaries. Photo credits: p. 29.');
text('Complete editorial draft — final evidence, rights and physical-print checks pending.',36,239,523,95,27,true,C.ink,{serif:true});
statement('What is measured','Income uses constant 2015 US dollars per person—not purchasing power. Employment uses a visible 1991 proxy for 1990. No annual values or trust scores are invented.',36,374,249);
statement('What is our view','“Our take” passages reflect the group’s answers. They are opinions and interpretations—not additional research findings.',310,374,249);
text('Still to check',36,562,523,30,19,true);text('Final citations and rights; actual-size A4 print; colour and classroom-screen readability. The historical 1914 map remains unavailable pending verified artwork and original legend.',36,605,523,71,11);
text('TEAM NAME: [TO BE CONFIRMED]\nComplete source appendix: [LINK / QR PLACEHOLDER]',36,699,523,43,10.5,true);

// 29 — exact shortlisted image attributions and licence links.
page(29,'Credits','The people behind the pictures.','Twelve country-specific photographs. Images give context—not proof of culture, trust or growth.','All photographs resized only, without cropping or content changes. Source-page and licence links are attached below. Check the licence terms before reusing or changing an image.');
const photoPairs=[[0,6],[2,8],[3,9],[1,7],[4,10],[5,11]];
countries.forEach((c,i)=>{const y=238+i*68;const [a,b]=photoPairs[i].map(j=>photos[j]);country(i,36,y,175);const credit=p=>`${p.creator} (${p.date}). ${p.title} · ${p.rights_or_licence.match(/CC BY(?:-SA)? [\d.]+/)?.[0]||p.rights_or_licence}.`;text(credit(a),218,y+1,341,21,8.5);text(credit(b),218,y+24,341,21,8.5);[['Image A ↗',218,a.source_page_url],['Licence ↗',286,a.rights_statement_url],['Image B ↗',358,b.source_page_url],['Licence ↗',428,b.rights_statement_url]].forEach(([t,x,url])=>text(t,x,y+47,66,13,8,true,C.dark,{hyperlink:{url}}));line(36,y+64,559,y+64);});
text('Map: Natural Earth. (n.d.). Admin 0 – Countries, 1:110m Cultural Vectors (v5.1.1). Public-domain data; generalized present-day boundaries, not historical geometry. Mauritius is located by point at this scale.',36,660,523,43,8.5);
text('MAP SOURCE ↗',36,714,160,17,8,true,C.dark,{hyperlink:{url:'https://www.naturalearthdata.com/downloads/110m-cultural-vectors/'}});

finish();
async function main(){
 const name='africa_asia_reader_revision_editable.pptx';
 await pptx.writeFile({fileName:path.join(OUT,name)});
 fs.writeFileSync(path.join(OUT,'reader_revision_manifest.json'),JSON.stringify(manifest,null,2));
 fs.mkdirSync('/tmp/canva-magazine-production/reader-revision-proofs',{recursive:true});
 await Promise.all(preview.map((svg,i)=>sharp(Buffer.from(svg)).resize({width:595}).png().toFile(`/tmp/canva-magazine-production/reader-revision-proofs/page-${String(i+1).padStart(2,'0')}.png`)));
 console.log(JSON.stringify({pages:manifest.length,textElements:manifest.reduce((a,p)=>a+p.elements.filter(e=>e.type==='text').length,0),file:path.join(OUT,name)}));
}
main().catch(e=>{console.error(e);process.exit(1)});
