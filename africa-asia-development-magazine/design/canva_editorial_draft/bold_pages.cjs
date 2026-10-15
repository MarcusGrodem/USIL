// PAGE 1
page(1,'Six countries. One big question.','','','Photographs: JulianGrayscales (2020), Tema port; Svwmal (2012), Busan harbour. Full credits and licences: p. 28.');
nativeRect(0,45,595.276,365,C.ink);
text('Africa & Asia:',36,58,523,65,48,true,C.paper,{serif:true});
text('Why Did Their\nEconomic Paths\nDiverge?',36,142,523,190,47,true,C.paper,{black:true});
text('Testing culture against history, institutions,\npolicy and economic evidence.',36,353,523,52,14,false,C.paper);
nativeRect(36,430,249,242,countries[0].c);nativeRect(310,430,249,242,countries[3].c);
photo(0,44,438,233,155,false);photo(1,318,438,233,155,false);
nativeText('GHANA',50,614,221,26,16,true,C.paper);nativeText('SOUTH KOREA',324,614,221,26,16,true,C.paper);
nativeText('Tema port · 2020',50,649,221,17,9,false,C.paper);nativeText('Busan harbour · 2012',324,649,221,17,9,false,C.paper);
text('SIX COUNTRIES.\nMORE THAN ONE EXPLANATION.',36,695,523,61,23,true,C.paper,{black:true});

// PAGE 8
page(8,'The starting line','What each country inherited.','Different resources, skills and infrastructure shaped what countries could do next.','World Bank (1985, p. 18); Maipose (2008, pp. 3–5); Xenos (1970, p. 1); Svirydzenka and Petri (2014, pp. 5–8); Haggard et al. (1997); Asadullah et al. (2024, pp. 13–15); Dolan (1993), archival recheck pending. Photo credits p. 28.','Contemporary photographs give country context; they are not scenes from independence or proof of a growth mechanism.');
const starts=['Cocoa exports; inherited roads, rail and Tema harbour.','Few inherited public assets and limited skills; mineral income later changed the base.','Sugar dominated export earnings; diversification came later.','Division and war disrupted the colonial inheritance.','Commodity exports came before export manufacturing.','Formal institutions and education coexisted with concentrated power.'];
const pidx=[0,2,3,1,4,5];
countries.forEach((c,i)=>{const y=250+i*72;nativeRect(36,y,523,65,c.c);photo(pidx[i],40,y+3,106,59,false);const fg=i===2?C.ink:C.paper;nativeText(c.name,163,y+7,379,23,14,true,fg);nativeText(starts[i],163,y+33,379,30,10, false,fg);});

// PAGE 9
page(9,'Work','Jobs moved. The mix changed.','Two full-width bars per country show where people worked: 1991 and 2020.','World Bank (2026), WDI / ILO modelled estimates: SL.AGR.EMPL.ZS, SL.IND.EMPL.ZS, SL.SRV.EMPL.ZS. Percent of employment. 1991 proxies 1990; no 1960 series. Release 13 July 2026; retrieved 6 October 2026.','Moving out of farming does not automatically raise productivity. Industry includes mining, construction and utilities. Services are not all high-skill jobs.');
const sectorCols=[C.dark,C.grey,'DED8CC'];
['FARMING','INDUSTRY*','SERVICES'].forEach((t,j)=>{nativeRect(36+j*179,253,13,13,sectorCols[j]);text(t,57+j*179,252,145,19,9,true);});
countries.forEach((c,i)=>{let y=291+i*65;nativeRect(36,y+6,119,40,c.c);nativeText(c.name,43,y+18,105,20,10.5,true,i===2?C.ink:C.paper);[0,1].forEach(j=>{let xx=199;const yy=y+5+j*21;text(j===0?'1991':'2020',162,yy,34,17,8.5,true);empRows[c.name].forEach((pair,k)=>{const ww=360*pair[j]/100;nativeRect(xx,yy,ww,13,sectorCols[k]);xx+=ww;});});text(empRows[c.name].map((pair,k)=>['Farm ','Industry ','Services '][k]+pair.map(v=>v.toFixed(1)).join('→')).join(' / '),199,y+47,360,16,8,true);});
text('Each bar = 100% of employment. Values below each pair are percentages, 1991 → 2020. * Industry includes mining, construction and utilities.',36,688,523,28,8.5);

// PAGE 10
page(10,'Income','Six countries. Three snapshots.','Economic output per person, in constant 2015 US dollars. Read down each year to compare.',sourceData,'GDP per capita is not total national GDP, purchasing power or a typical wage. † Malaysia 1960 is a retrospective territorial series. 2020 is the pandemic year.');
const cols=[225,365,505];
['1960','1990','2020'].forEach((year,j)=>{nativeRect(cols[j]-59,252,118,41,C.ink);nativeText(year,cols[j]-50,260,100,29,20,true,C.paper,{align:'center'});});
countries.forEach((c,i)=>{let y=315+i*59;nativeRect(36,y,120,47,c.c);nativeText(c.name,43,y+16,106,22,10.5,true,i===2?C.ink:C.paper);c.exactGdp.forEach((v,j)=>text(Math.round(v).toLocaleString('en-US')+(i===4&&j===0?' †':''),cols[j]-59,y+11,118,37,23,true,i===2?C.ink:c.c,{align:'center'}));line(172,y+50,559,y+50,C.grey,.6);});
text('US$ per person. The tiny mini-bars are gone: these exact values make the early-year differences readable without changing the scale.',36,686,523,29,9);

// PAGE 15
page(15,'Culture','Meet Hofstede. Then test the idea.','Hofstede grouped survey responses into six dimensions of national culture. They are lenses for questions—not scores that explain growth.',sourceCulture,'National averages are historical, country-level lenses—not individual personalities, timeless truths or causal scores. Missing country scores are not invented.');
const lenses=[['Power distance','How accepted is unequal power?','CONDITIONAL TEST'],['Individualism / collectivism','How strongly are people tied to groups? Not a trust score.','CONDITIONAL TEST'],['Masculinity / femininity','Competition and achievement versus care and quality of life. Historical labels.','CONTEXT ONLY'],['Uncertainty avoidance','Responses to ambiguity—not simply risk-taking.','CONTEXT ONLY'],['Long-term orientation','Future-focused adaptation versus present/past obligations. Not policy duration.','CONDITIONAL TEST'],['Indulgence / restraint','Social regulation of gratification. Not work ethic.','CONTEXT ONLY']];
lenses.forEach((r,i)=>{let y=251+i*54;text(r[0],36,y,249,27,12,true);text(r[1],310,y,249,35,10);text(r[2],36,y+29,249,14,8,true,C.dark);line(36,y+47,559,y+47);});
take('Culture matters. It isn’t destiny. We think shared expectations influence cooperation, while history, resources and institutions shape what people can do.',588,108);

// PAGE 18
page(18,'Leadership','Lead. Listen. Change course.','This is about leadership: long-term direction works better when people can challenge mistakes.',sourceCulture,'National cultural scores cannot replace direct evidence about leadership, policy duration, investment or correction.');
leaderVisual(46,258,184,138);
text('Power needs feedback.',277,265,282,65,25,true,C.paper,{serif:true});text('Hierarchy can coordinate action. It can also silence the people who spot problems. Ask who is allowed to speak up.',277,344,282,80,11.5);
text('A plan is not a promise to repeat failure.',36,446,523,70,27,true,C.paper,{serif:true});text('Look for actual investment, learning and policy correction. A long-term-orientation score is not a measure of how long a policy lasted.',36,522,523,56,12);
text('Evidence still insufficient: uncertainty avoidance, masculinity/femininity and indulgence/restraint as growth explanations. Reopening needs valid measures, observed mechanisms and matched timing.',36,591,523,45,9.5);
take('Strong government—for whose benefit? We support planning ahead, but leaders must serve the country and face accountability when policies fail.',649,65);

// PAGE 19
page(19,'Our ideas on trial','What explains the different paths?','We test three ideas against all six countries. The point is to find which explanations hold up—and which need changing.','Original group hypotheses and six-country matrix. Sources: World Bank (1993, 2020); Maipose (2008); Svirydzenka and Petri (2014); OECD (2017).','A supporting case may fit several explanations. These qualitative comparisons do not isolate a single cause.');
[['01','Connections','Do skills, suppliers and markets work together?'],['02','Cooperation','Can people work together beyond close networks?'],['03','Direction + correction','Can policy last long enough to learn—and change?']].forEach((r,i)=>{const y=252+i*102;text(r[0],36,y,67,57,37,true,C.paper,{black:true});text(r[1],121,y,438,35,23,true,C.paper);text(r[2],121,y+48,438,38,12);});
text('THE RESULT',36,584,523,18,8,true);text('Connections: supported with exceptions.\nTrust: inconclusive.\nContinuity + adaptation: supported with exceptions.',36,616,523,92,18,true,C.paper);

// PAGE 20
page(20,'Test 1 / Connected Development','Connect more of the economy.','Our idea: infrastructure helps most when it links people, local suppliers, firms and markets.',sourceCases+' World Bank (1993, pp. 20–26). Locator: Natural Earth (n.d.), public domain, p. 28.','Illustrative links, not measured roads or network counts. Connections alone do not establish causality; skills, institutions, resources and market access also matter.');
drawLocator(50,248,495,198);
text('THE CONNECTION IDEA / FICTIONAL LINKS, NOT ROAD MAPS',36,464,523,18,8,true);
[[3,'South Korea','Learning + firms + markets'],[4,'Malaysia','Assembly + local suppliers'],[5,'Philippines','Exports can leave local gaps']].forEach(([ci,name,label],j)=>{const x=36+j*179;nativeRect(x,498,165,29,countries[ci].c);nativeText(name,x+7,505,151,18,10,true,C.paper);const nodes=[[x+15,558],[x+75,541],[x+140,558],[x+45,601],[x+116,601]];const edges=j===2?[[0,1],[1,2],[3,4]]:[[0,1],[1,2],[0,3],[1,3],[1,4],[2,4],[3,4]];edges.forEach(([a,b])=>line(...nodes[a],...nodes[b],countries[ci].c,2));nodes.forEach(([a,b])=>dot(a,b,4,countries[ci].c));text(label,x,625,165,39,10.5,true);});
text('SUPPORTED WITH EXCEPTIONS',36,679,523,25,17,true);text('Botswana challenges strong inherited infrastructure as a prerequisite.',36,706,523,15,8.5);

// PAGE 21
page(21,'Test 2 / Radius of Trust','Trust helps. Can we prove the link?','Our question: does cooperation beyond family help businesses grow? Our answer: plausible—but not established by this comparison.',sourceTrust,'Governance indicators are not direct-trust measures. Comparable surveys, timing and tests of alternative explanations are needed.');
text('WHAT WE EXPECT',36,254,523,20,9,true);text('Reliable contracts help strangers work together.',36,291,523,94,29,true,C.paper,{serif:true});
leaderVisual(49,407,174,127);text('WHAT WE FOUND',277,408,282,20,9,true);text('The six countries do not have a comparable direct-trust evidence base here. Ghana and South Korea remain direct-trust gaps.',277,445,282,111,12);
take('Trust matters to us. But “Asia trusts more” was our initial impression—not a finding this evidence can support.',595,87);
text('VERDICT: INCONCLUSIVE',36,693,523,25,17,true);

// PAGE 22
page(22,'Test 3 / Continuity + Adaptation','How countries can keep improving.','Our proposed lesson: keep a useful direction, check the results, and change what fails.',sourceCases+' World Bank (1993, pp. 127–130, 159–161, 242).','Supported with exceptions—not a universal recipe. State capacity, resources, foreign investment, market access, shocks and prior success remain alternative explanations.');
[['PLAN','Give firms and workers a direction.'],['LISTEN','Check what is actually working.'],['ADAPT','Stop protecting repeated failure.']].forEach((r,i)=>{const x=36+i*179;icon(i===0?'book':i===1?'network':'loop',x,263,46);text(r[0],x,326,165,29,19,true);text(r[1],x,369,165,69,12);if(i<2)arrow(x+133,272);});
text('What the cases suggest',36,464,523,34,23,true,C.paper,{serif:true});text('South Korea, Mauritius, Malaysia and the Philippines fit a story of lasting direction plus learning and correction. Continuity alone can also protect weak firms and failed programmes.',36,513,523,87,13);
text('Botswana’s warning',36,619,523,28,17,true);text('Accumulating wealth is not the same as diversifying production.',36,660,523,35,12);
text('VERDICT: SUPPORTED WITH EXCEPTIONS',36,703,523,17,10,true);

// PAGE 24
page(24,'Putting it together','Different ingredients. Different outcomes.','Our conclusion: development depends on how the ingredients work together—not one fixed regional culture.','Group synthesis: World Bank (1993, pp. 4–7, 20–26, 79–80); World Bank (2020); Maipose (2008); Svirydzenka and Petri (2014); Hofstede (2011).','Conceptual recipe illustration, not measured contributions or a universal recipe. Six countries do not represent two whole continents.');
const ingredients=[['History',66,266],['Institutions',233,253],['Resources',421,266],['Skills',95,327],['Markets',260,316],['Culture',435,327]];
ingredients.forEach(([label,x,y],i)=>{ingredient(i,x+15,y+2);text(label,x-18,y+39,122,27,12,true,C.paper);line(x+15,y+69,298,433,C.paper,1,true);});
bowl(143,391,310,105);text('PRODUCTIVE CAPABILITY',130,514,350,29,19,true,C.paper,{align:'center'});
text('Divergence depended less on fixed regional culture than on whether states, firms, workers and external partners built and disciplined productive capabilities over time. Education, agricultural change, infrastructure, investment coordination, technology access and exports mattered in different sequences. Their effects depended on institutions, resources, distribution, history and international conditions. Culture may influence coordination, legitimacy and organisational practice, but it is not a stand-alone explanation.',36,566,523,142,10.5);

// PAGE 25
page(25,'Our take','Development should feel like a better life.','Our priorities: health, buying power, freedom and living standards. Not just a bigger GDP.','Group values, not a six-country wellbeing ranking. GDP: World Bank (2026), NY.GDP.PCAP.KD. Photographs: Amuzujoe (2020), Accra; Gaël Chardon (2008), Seoul. Full credits and licences: p. 28.');
nativeRect(36,251,249,256,countries[0].c);nativeRect(310,251,249,256,countries[3].c);
photo(6,43,258,235,205,false);photo(7,317,258,235,205,false);
nativeText('GHANA / ACCRA MARKET · 2020',45,477,231,18,8,true,C.paper);nativeText('SOUTH KOREA / SEOUL MARKET · 2008',319,477,231,18,8,true,C.paper);
text('Everyday places. Actual people.',36,532,523,35,23,true,C.ink,{serif:true});
text('For us, higher income matters because of the life it can support: what people can buy, whether they are healthy, and whether they have more freedom.',36,586,523,83,15,true);
text('These market photographs show human-scale context, not measured health, freedom, purchasing power or family life.',36,691,523,28,9);

// PAGE 26
page(26,'Our answer','Different starts. Paths can change.','Culture matters. So do history, resources, institutions and what countries build next.','Group viewpoint informed by the six-country comparison. Inheritance sources: pp. 5–8. Cultural change: Hofstede (2011, pp. 6–8, 16); Beugelsdijk and Welzel (2018, pp. 1469–1475, Figures 7–9).','Schematic starting conditions, not a quantitative ranking or forecast.');
text('DIFFERENT INHERITANCES → NEW CHOICES',36,252,523,18,9,true);
const inherited=['Cocoa exports','Limited public assets','Sugar exports','Division and war','Commodity exports','Concentrated power'];
countries.forEach((c,i)=>{const y=291+i*40;text(c.name,36,y,138,23,11,true);nativeRect(188,y-3,229,29,c.c);nativeText(inherited[i],197,y+5,211,18,10.5,true,i===2?C.ink:C.paper);line(429,y+11,546,y+11,C.paper,1.5);text('→',539,y-1,20,24,16,true);});
text('History shapes the start.\nIt does not fix the finish.',36,552,523,82,28,true,C.paper,{serif:true});
take('We think the original Africa-versus-Asia question is too simple. Culture plays a part, but different starting points and opportunities make the answer much bigger.',642,75);

// PAGE 28
page(28,'Sources + colophon','Sources. Credits. What remains open.','Complete editorial draft — final evidence, rights and physical-print checks pending.','Data: World Bank WDI / ILO modelled employment. Map: Natural Earth 1:110m Admin 0 Countries v5.1.1, public domain. Full image credits: p. 28.');
const essential=['SRC-WDI-001','SRC-WB-EAM93-001','SRC-WB-GHA20-001','SRC-WB-GHA85-001','SRC-MAIPOSE08-001','SRC-IMF-MUS14-001','SRC-JEDWAB-MORADI12-001','SRC-HOFSTEDE11-001','SRC-MCSWEENEY02-001','SRC-OECD-TRUST17-001'];
let refY=250;
essential.forEach(id=>{const r=registry.find(r=>r.source_id===id);const raw=r?.apa7_reference||'[CITATION TO BE COMPLETED FROM APPROVED SOURCE REGISTRY]';const t=raw.replace(/https?:\/\/\S+/g,'').trim();const h=wrap(t,523,8.5).length*10.3+8;text(t,36,refY,523,h,8.5,false,C.ink,{hyperlink:{url:r?.doi||r?.url||''}});refY+=h+4;});
text('Still to check: final citations and rights; A4 print, colour and classroom readability. Historical 1914 map remains withheld pending verified artwork and original legend.',36,650,523,47,9.5);
text('TEAM NAME: [TO BE CONFIRMED]\nComplete source appendix: [LINK / QR PLACEHOLDER]',36,708,523,38,9.5,true);
