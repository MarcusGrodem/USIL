
function person(x,y,color=C.paper){dot(x,y,12,color);nativeRect(x-15,y+17,30,42,color);line(x-8,y+59,x-14,y+84,color,5);line(x+8,y+59,x+14,y+84,color,5);}
function poly(points,fill){
 const xs=points.map(p=>p[0]),ys=points.map(p=>p[1]),x=Math.min(...xs),y=Math.min(...ys),w=Math.max(...xs)-x,h=Math.max(...ys)-y;
 const normalized=points.map(([a,b])=>[Math.round((a-x)/w*10000),Math.round((b-y)/h*10000)]);
 s.addShape(pptx.ShapeType.rect,{x:x/72,y:y/72,w:w/72,h:h/72,objectName:'EDITABLEPOLY_'+normalized.map(p=>p.join(',')).join(';'),fill:{color:fill},line:{color:fill,width:0}});
 sv.push(`<polygon points="${points.map(p=>p.join(',')).join(' ')}" fill="#${fill}"/>`);
}
function compoundPoly(paths,fill){
 const all=paths.flat(),xs=all.map(p=>p[0]),ys=all.map(p=>p[1]),x=Math.min(...xs),y=Math.min(...ys),w=Math.max(...xs)-x,h=Math.max(...ys)-y;
 const encoded=paths.map(points=>points.map(([a,b])=>Math.round((a-x)/w*10000)+','+Math.round((b-y)/h*10000)).join(';')).join('|');
 s.addShape(pptx.ShapeType.rect,{x:x/72,y:y/72,w:w/72,h:h/72,objectName:'EDITABLEPOLY_'+encoded,fill:{color:fill},line:{color:fill,width:0}});
 paths.forEach(points=>sv.push(`<polygon points="${points.map(p=>p.join(',')).join(' ')}" fill="#${fill}"/>`));
}
function perspectiveRoad(){
 const edge='B7B0A4',surface='514E48';
 poly([[206,548],[389,548],[322,344],[273,344]],edge);
 poly([[215,548],[380,548],[317,344],[278,344]],surface);
 poly([[36,431],[36,367],[260,322],[287,311],[308,343],[277,367]],edge);
 poly([[36,422],[36,375],[263,330],[286,319],[301,339],[274,359]],surface);
 poly([[559,431],[559,367],[335,322],[308,311],[287,343],[318,367]],edge);
 poly([[559,422],[559,375],[332,330],[309,319],[294,339],[321,359]],surface);
 poly([[273,345],[322,345],[307,254],[288,254]],edge);
 poly([[279,345],[316,345],[304,254],[291,254]],surface);
 // Lane markers taper towards the junction and vanishing point.
 [[519,11,22],[481,9,17],[449,7,13],[423,5,10],[402,4,8],[384,3,6],[369,2,5],[293,2,5],[279,1.5,4],[268,1,3]].forEach(([y,w,h])=>nativeRect(297-w/2,y,w,h,C.paper));
 [[69,391],[114,382],[157,374],[197,365],[235,352]].forEach(([x,y],i)=>poly([[x,y],[x+18-i*2,y-4],[x+19-i*2,y],[x+1,y+4]],C.paper));
 [[526,391],[481,382],[438,374],[398,365],[360,352]].forEach(([x,y],i)=>poly([[x,y],[x-18+i*2,y-4],[x-19+i*2,y],[x-1,y+4]],C.paper));
}
function trustPair(x,y){const fg=current.dark?C.paper:C.ink;person(x,y,fg);person(x+99,y,fg);line(x+15,y+35,x+48,y+50,fg,5);line(x+84,y+35,x+48,y+50,fg,5);text('COOPERATE',x-15,y+104,139,20,10,true,fg,{align:'center'});}
function door(x,y){const fg=current.dark?C.paper:C.ink;nativeRect(x,y,54,96,fg);nativeRect(x+6,y+6,42,90,current.dark?C.ink:C.paper);nativeRect(x+39,y+9,9,84,fg);line(x+39,y+9,x+71,y+24,fg,3);line(x+71,y+24,x+71,y+108,fg,3);line(x+71,y+108,x+39,y+93,fg,3);dot(x+63,y+65,2,fg);}
function ellipseNative(x,y,w,h,fill,stroke=fill){s.addShape(pptx.ShapeType.ellipse,{x:x/72,y:y/72,w:w/72,h:h/72,fill:{color:fill},line:{color:stroke,width:1}});sv.push(`<ellipse cx="${x+w/2}" cy="${y+h/2}" rx="${w/2}" ry="${h/2}" fill="#${fill}" stroke="#${stroke}"/>`);}
function recipeBowl(){
 const fg=C.paper;ellipseNative(145,403,305,92,fg);nativeRect(143,401,309,45,C.ink);ellipseNative(145,426,305,39,fg);ellipseNative(157,431,281,25,C.ink);nativeRect(252,490,91,7,fg);line(172,475,422,475,C.ink,1);text('PRODUCTIVE CAPABILITY',126,517,352,27,18,true,fg,{align:'center'});
}
function conceptMap(j,x,y,w,h){
 const col=countries[j+3].c;
 // Deliberately abstract editable land tiles, not geographic or network data.
 const geo=JSON.parse(fs.readFileSync(path.join(OUT,'assets/maps/ne_110m_admin_0_countries.geojson'),'utf8'));
 const f=geo.features.find(f=>f.properties.ADMIN===['South Korea','Malaysia','Philippines'][j]);
 const rings=f.geometry.type==='Polygon'?f.geometry.coordinates:f.geometry.coordinates.flat();
 const points=rings.flat(),xs=points.map(p=>p[0]),ys=points.map(p=>p[1]);
 const minX=Math.min(...xs),maxX=Math.max(...xs),minY=Math.min(...ys),maxY=Math.max(...ys),scale=Math.min((w-18)/(maxX-minX),(h-18)/(maxY-minY));
 const px=a=>x+(w-(maxX-minX)*scale)/2+(a-minX)*scale,py=b=>y+(h-(maxY-minY)*scale)/2+(maxY-b)*scale;
 const shape=rings.map(r=>'<path d="'+r.map((p,i)=>(i?'L':'M')+px(p[0]).toFixed(2)+' '+py(p[1]).toFixed(2)).join(' ')+'Z" fill="#DED8CC" stroke="#514E48" stroke-width="0.7"/>').join('');
 const svg='<svg xmlns="http://www.w3.org/2000/svg" width="595.276" height="841.89">'+shape+'</svg>';
 s.addImage({data:'image/svg+xml;base64,'+Buffer.from(svg).toString('base64'),x:0,y:0,w:595.276/72,h:841.89/72});sv.push(shape);
 // Invented transport-map-style mesh, constrained to the genuine country outline.
 // Neither spacing, widths nor route placement encode measured infrastructure.
 const projected=rings.map(r=>r.map(([a,b])=>[px(a),py(b)]));
 const inside=(a,b)=>projected.some(r=>{let hit=false;for(let i=0,k=r.length-1;i<r.length;k=i++){const [xi,yi]=r[i],[xk,yk]=r[k];if(((yi>b)!==(yk>b))&&(a<(xk-xi)*(b-yi)/(yk-yi)+xi))hit=!hit;}return hit;});
 const gap=[12,8,10][j],nodes=[];
 for(let row=0,yy=y+10;yy<y+h-8;row++,yy+=gap){for(let column=0,xx=x+9;xx<x+w-8;column++,xx+=gap){const a=xx+Math.sin(row*2.7+column)*gap*.22,b=yy+Math.cos(column*1.9+row)*gap*.18;if(inside(a,b))nodes.push([a,b,row,column]);}}
 const networks={};
 const stroke=(a,b,width,color)=>{const dx=b[0]-a[0],dy=b[1]-a[1],len=Math.hypot(dx,dy);if(!len)return;const nx=-dy/len*width/2,ny=dx/len*width/2;(networks[color]??=[]).push([[a[0]+nx,a[1]+ny],[b[0]+nx,b[1]+ny],[b[0]-nx,b[1]-ny],[a[0]-nx,a[1]-ny]]);};
 const valid=(a,b)=>Array.from({length:9},(_,m)=>inside(a[0]+(b[0]-a[0])*m/8,a[1]+(b[1]-a[1])*m/8)).every(Boolean);
 nodes.forEach((a,i)=>{const nearest=nodes.map((b,k)=>({b,k,d:Math.hypot(a[0]-b[0],a[1]-b[1])})).filter(o=>o.k>i&&o.d<gap*1.9).sort((a,b)=>a.d-b.d).slice(0,2);nearest.forEach(({b})=>{if(valid(a,b))stroke(a,b,.55,C.dark);});});
 [2,3].forEach(axis=>{const groups=[...new Set(nodes.map(p=>p[axis]))].filter(k=>k%(axis===2?5:3)===(axis===2?2:1));groups.forEach(k=>{const pts=nodes.filter(p=>p[axis]===k).sort((a,b)=>a[axis===2?0:1]-b[axis===2?0:1]);pts.slice(1).forEach((b,i)=>{const a=pts[i];if(Math.hypot(a[0]-b[0],a[1]-b[1])<gap*2.2&&valid(a,b))stroke(a,b,2.1,col);});});});
 Object.entries(networks).forEach(([color,paths])=>compoundPoly(paths,color));
}
