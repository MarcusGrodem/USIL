// PAGE 9
page(9,'Work','Jobs moved. The mix changed.','Two full-width bars per country show where people worked: 1991 and 2020.','World Bank (2026), WDI / ILO modelled estimates: SL.AGR.EMPL.ZS, SL.IND.EMPL.ZS, SL.SRV.EMPL.ZS. Percent of employment. 1991 proxies 1990; no 1960 series. Release 13 July 2026; retrieved 6 October 2026.','Moving out of farming does not automatically raise productivity. Industry includes mining, construction and utilities. Services are not all high-skill jobs.');
const sectorCols=['252525','888278','E8E1D4'];
['FARMING','INDUSTRY*','SERVICES'].forEach((t,j)=>{nativeRect(36+j*179,253,13,13,sectorCols[j],C.dark);text(t,57+j*179,252,145,19,9,true);});
countries.forEach((c,i)=>{let y=291+i*65;text(c.name,36,y+15,119,25,10.5,true,C.ink);[0,1].forEach(j=>{let xx=199;const yy=y+5+j*21;text(j===0?'1991':'2020',162,yy,34,17,8.5,true);empRows[c.name].forEach((pair,k)=>{const ww=360*pair[j]/100;nativeRect(xx,yy,ww,13,sectorCols[k],C.dark);xx+=ww;});});text(empRows[c.name].map((pair,k)=>['Farm ','Industry ','Services '][k]+pair.map(v=>v.toFixed(1)).join('→')).join(' / '),199,y+47,360,16,8,true);});
text('Each bar = 100% of employment. Values below each pair are percentages, 1991 → 2020. * Industry includes mining, construction and utilities.',36,688,523,28,8.5);

// PAGE 10
page(10,'Income','Six countries. Three snapshots.','Economic output per person, in constant 2015 US dollars. Read down each year to compare.',sourceData,'GDP per capita is not total national GDP, purchasing power or a typical wage. † Malaysia 1960 is a retrospective territorial series. 2020 is the pandemic year.');
const cols=[225,365,505];
['1960','1990','2020'].forEach((year,j)=>{nativeRect(cols[j]-59,252,118,41,C.ink);nativeText(year,cols[j]-50,260,100,29,20,true,C.paper,{align:'center'});});
countries.forEach((c,i)=>{let y=315+i*59;nativeRect(36,y,120,47,c.c);nativeText(c.name,43,y+16,106,22,10.5,true,i===2?C.ink:C.paper);c.exactGdp.forEach((v,j)=>text('US$'+Math.round(v).toLocaleString('en-US')+(i===4&&j===0?' †':''),cols[j]-59,y+11,118,37,18,true,i===2?C.ink:c.c,{align:'center'}));line(172,y+50,559,y+50,C.grey,.6);});
text('Every value is US dollars per person, adjusted to constant 2015 prices. Compare countries within a column; compare years across a row.',36,686,523,29,9);

// PAGE 11
page(11,'Learning','Build. Learn. Improve. Repeat.','Capability grows through repeated practice—not one factory or one policy.',sourceIndustry,'This is a possible learning sequence, not an automatic cycle. Institutions, resources, distribution and access to technology and markets shape every link.');
const learning=['Skills','Infrastructure','Firms + suppliers','Production','Exports + learning','Reinvestment'];
const wheel=[[298,282],[453,365],[453,518],[298,599],[142,518],[142,365]];
wheel.forEach(([x,y],i)=>{const [a,b]=wheel[(i+1)%6];line(x,y,a,b,C.paper,12);});
ellipseNative(224,369,147,147,C.paper);ellipseNative(234,379,127,127,C.ink);text('LEARN\nAGAIN',245,413,105,61,22,true,C.paper,{align:'center'});
wheel.forEach(([x,y],i)=>{dot(x,y,21,C.paper);nativeText(String(i+1),x-15,y-10,30,25,16,true,C.ink,{align:'center'});const left=x<200?36:x>400?397:210;const yy=i===0?244:i===3?634:y-48;text(learning[i],left,yy,162,35,11,true,C.paper,{align:'center'});});
text('A workshop wheel: turning effort into learning.',36,685,523,25,11,true); 

// PAGE 16
page(16,'Trust','Trust whom—with what?','Trust in a relative, a bank and “most people” are not the same thing.',sourceTrust,'Governance indicators are not trust measures. Different questions, years and survey samples cannot be turned into one six-country trust ranking.');
trustPair(96,287);
[['A PERSON','Knowing someone is different from trusting a stranger.'],['A NETWORK','Family and contacts can support cooperation.'],['AN INSTITUTION','Name it: a court, bank or government.'],['A SURVEY ANSWER','Wording, timing and who was asked all matter.']].forEach((r,i)=>{const y=250+i*77;text(r[0],277,y,282,22,11,true);text(r[1],277,y+27,282,42,11);});
text('Trust is not one common scale.',36,579,523,49,27,true,C.ink,{serif:true});
text('“Asia trusts more” was our initial impression—not a finding supported by comparable evidence across these six countries.',36,648,523,52,12);

// PAGE 17
page(17,'Close networks','Family first. Doors open—or closed?','Close ties can help people cooperate. They can also shut outsiders out.',sourceTrust,'This is a conditional explanation and a discussion prompt—not a measure of any country’s culture, corruption or trust.');
door(91,269);text('WHO GETS IN?',36,407,208,28,16,true);
statement('The strength','Credit, labour and mutual help can keep people and businesses going.',277,250,282);
statement('The boundary','Hiring outsiders or sharing control may be harder without reliable organisations and contracts.',277,389,282);
text('Who would you trust with money?',36,534,523,37,23,true,C.ink,{serif:true});text('Family? A friend? A bank? An unfamiliar partner backed by a reliable contract?',36,578,523,34,11);
take('We see family networks mainly as a strength. But conflict, exclusion and closed-minded decisions can turn that strength into a limit.',625,73);

// PAGE 18
page(18,'Leadership','Lead. Listen. Change course.','Long-term direction works better when people can challenge mistakes.',sourceCulture,'National cultural scores cannot replace direct evidence about leadership, policy duration, investment or correction.');
poly([[36,367],[357,367],[403,360],[450,338],[503,301],[542,301],[542,327],[511,327],[464,363],[411,387],[363,395],[36,395]],C.paper);
poly([[542,289],[559,314],[542,339]],C.paper);
[['01','LEAD','Set a useful direction.'],['02','LISTEN','Let people challenge mistakes.'],['03','CHANGE COURSE','Fix what is not working.']].forEach((r,i)=>{const x=36+i*179;text(r[0],x,267,151,44,30,true,C.paper,{black:true});text(r[1],x,438,165,34,16,true);text(r[2],x,486,165,57,12);});
text('A steady direction. Room to turn.',36,566,523,29,20,true,C.paper,{serif:true});
text('Hierarchy can coordinate action—or silence feedback. Look at actual decisions and results, not just cultural scores.',36,602,523,43,11);
take('Strong government—for whose benefit? We support planning ahead, but leaders must serve the country and face accountability when policies fail.',654,63);

// PAGE 19
page(19,'Our ideas on trial','Three roads into the question.','Connections. Cooperation. Direction + correction. We test each idea against the six countries.','Original group hypotheses and six-country matrix. Sources: World Bank (1993, 2020); Maipose (2008); Svirydzenka and Petri (2014); OECD (2017).','A supporting case may fit several explanations. These qualitative comparisons do not isolate a single cause.');
perspectiveRoad();
text('Connections',36,309,178,27,15,true);text('Cooperation',218,224,180,25,15,true,C.paper,{align:'center'});text('Direction +\ncorrection',408,300,151,43,15,true);
text('THREE IDEAS. NOT THREE CERTAINTIES.',36,568,523,24,12,true);text('Connections: supported with exceptions.\nTrust: inconclusive.\nContinuity + adaptation: supported with exceptions.',36,615,523,96,17,true,C.paper);

// PAGE 20
page(20,'Test 1 / Connected Development','Connections must reach further.','Illustrative networks—not actual routes or measured infrastructure. Line weight is visual hierarchy, not traffic or capacity.',sourceCases+' World Bank (1993, pp. 20–26). Outlines: Natural Earth (n.d.), 1:110m, public domain.','Country outlines are generalized and independently fitted, not a common map scale. Networks are fictional—not road/rail inventories or an infrastructure ranking. Connections alone do not establish causality.');
const mapsCopy=[['South Korea','Build deeper links','Skills, firms and markets developed together. Several causes contributed.'],['Malaysia','Deepen local supply','Global production can create opportunities; local supplier capability still matters.'],['Philippines','Connection is not enough','Exports and global links can coexist with gaps in domestic production networks.']];
mapsCopy.forEach((r,j)=>{const x=36+j*179;text(r[0],x,251,165,25,15,true,countries[j+3].c);conceptMap(j,x,293,165,204);text(r[1],x,522,165,43,15,true);text(r[2],x,575,165,88,10.5);});
text('SUPPORTED WITH EXCEPTIONS',36,677,523,25,17,true);text('Botswana challenges inherited infrastructure as a prerequisite for income growth.',36,706,523,15,8.5);

// PAGE 22
page(22,'Test 3 / Continuity + Adaptation','Keep direction. Correct mistakes.','Lasting policy helps only if a country learns and adapts.',sourceCases+' World Bank (1993, pp. 127–130, 159–161, 242).','Supported with exceptions—not a universal recipe. State capacity, resources, FDI, market access, shocks and prior success remain alternative explanations.');
[['South Korea','Coordinated investment and export pressure; later correction and upgrading.'],['Mauritius','A sugar base followed by diversification and adaptation.'],['Malaysia','Commodity exports followed by export manufacturing and supplier challenges.'],['Philippines','Global links and formal institutions did not remove weak domestic linkages.'],['Botswana','Mineral-led accumulation shows that wealth and diversification differ.']].forEach((r,i)=>{const y=254+i*76;text(r[0],36,y,159,29,14,true);text(r[1],210,y,349,46,11.5);line(36,y+61,559,y+61);});
text('The lesson: keep what works. Change what fails.',36,662,523,49,20,true,C.paper,{serif:true});

// PAGE 23
page(23,'Four different stories','Same region. Different paths.','These four cases show why “Africa versus Asia” is too simple.',sourceCases,'Symbols summarise these stories; they are not a complete list of each country’s resources. No example proves one universal route to growth.');
const simpleCases=[['Botswana','Mineral income helped build wealth.','But more wealth does not mean a wider range of industries.','box',1],['Mauritius','From sugar to new kinds of business.','A small country can adapt. Its story challenges fixed cultural destiny.','loop',2],['Malaysia','Exports opened opportunities.','The next challenge: help more local firms learn and supply those industries.','factory',4],['Philippines','Global trade is not enough.','Selling abroad does not automatically create strong links between local firms.','ship',5]];
simpleCases.forEach((r,i)=>{const y=249+i*88;if(i===0){poly([[38,y+22],[48,y+10],[68,y+10],[79,y+22],[59,y+48]],C.ink);poly([[42,y+22],[50,y+14],[66,y+14],[75,y+22],[59,y+42]],C.paper);line(42,y+22,75,y+22,C.ink,1);line(50,y+14,59,y+42,C.ink,1);line(66,y+14,59,y+42,C.ink,1);}else icon(r[3],36,y+8,39);text(r[0],99,y,336,22,13,true,r[4]===2?C.ink:countries[r[4]].c);text(r[1],99,y+26,460,27,15,true);text(r[2],99,y+56,460,29,10.5);if(i<3)line(99,y+82,559,y+82);});
take('Mauritius surprised us. Its small size challenged our assumptions about what a country needs to develop—and about one single African development story.',625,73);

// PAGE 24
page(24,'Putting it together','Different ingredients. Different outcomes.','Development depends on how the ingredients work together—not one fixed regional culture.','Group synthesis: World Bank (1993, pp. 4–7, 20–26, 79–80); World Bank (2020); Maipose (2008); Svirydzenka and Petri (2014); Hofstede (2011).','Conceptual recipe illustration, not measured contributions or a universal recipe. Six countries do not represent two whole continents.');
[['History',69],['Institutions',257],['Resources',444]].forEach(([label,x],i)=>{ingredient(i,x+16,266);text(label,x-20,309,133,25,12,true,C.paper,{align:'center'});});
[['Skills',69],['Markets',257],['Culture',444]].forEach(([label,x],i)=>{ingredient(i+3,x+16,346);text(label,x-20,383,133,25,12,true,C.paper,{align:'center'});});
recipeBowl();
text('Divergence depended less on fixed regional culture than on whether states, firms, workers and external partners built and disciplined productive capabilities over time. Education, agricultural change, infrastructure, investment coordination, technology access and exports mattered in different sequences. Their effects depended on institutions, resources, distribution, history and international conditions. Culture may influence coordination, legitimacy and organisational practice, but it is not a stand-alone explanation.',36,566,523,142,10.5);
