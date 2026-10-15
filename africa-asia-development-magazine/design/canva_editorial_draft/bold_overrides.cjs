// The user explicitly requested more colour and less defensive presentation.
// Colour still identifies the six countries; no country colour means success.
const nativeText=text,nativeRect=rect,nativeLine=line;
const darkPages=new Set([1,2,11,18,19,21,22,24,26]);
let headerDrawing=false;
finish=function(){preview.push(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="595.276" height="841.89"><rect width="100%" height="100%" fill="#${current.dark?C.ink:C.paper}"/>${sv.join('')}</svg>`);};
text=function(t,x,y,w,h,sz=10.5,bold=false,col=C.ink,extra={}){
 if(current?.dark&&(col===C.ink||col===C.dark))col=C.paper;
 return nativeText(t,x,y,w,h,sz,bold,col,extra);
};
line=function(x1,y1,x2,y2,col=C.grey,width=.6,dash=false){
 if(current?.dark&&col===C.ink)col=C.paper;
 // Remove the bulky Mauritius under-stroke. A slender outside edge remains.
 if(!headerDrawing&&current&&col===(current.dark?C.paper:C.ink)&&Math.abs(y2-y1)<.0001&&width>=6){
  return nativeRect(Math.min(x1,x2),y1-width/2,Math.abs(x2-x1),width,'D6A23A',C.ink);
 }
 return nativeLine(x1,y1,x2,y2,col,width,dash);
};
function countryRibbon(y=190){
 countries.forEach((c,i)=>{const x=36+i*87.17;nativeRect(x,y,87.17,24,c.c);nativeText(c.name,x+5,y+6,78,15,8,true,i===2?C.ink:C.paper);});
}
page=function(n,section,title,deck='',sources='',limit=''){
 if(s)finish();s=pptx.addSlide();s.background={color:darkPages.has(n)?C.ink:C.paper};sv=[];
 current={page:n,title,elements:[],sources,limit,dark:darkPages.has(n)};manifest.push(current);
 headerDrawing=true;
 const lightHeader=[3,4,5,6,7,9,10,12,14,15,16,17,23,25,27,28].includes(n);
 const countryHeader=n===13?countries[3].c:lightHeader?C.paper:C.ink;
 const headerText=lightHeader?C.ink:C.paper;
 nativeRect(0,0,595.276,228,countryHeader);
 nativeText('AFRICA & ASIA / '+section.toUpperCase(),36,22,523,15,8,true,headerText);
 if(title)nativeText(title,36,57,523,98,title.length>48?31:39,true,headerText,{black:true});
 if(deck)nativeText(deck,36,158,523,48,11,false,headerText);
 if(n!==13)countryRibbon(208);else nativeText('SOUTH KOREA / LEARNING OVER TIME',36,211,523,14,8,true,C.paper);
 headerDrawing=false;
 if(limit){text(limit,36,719,523,36,8.5,false,C.dark);}
 line(36,764,559,764,C.grey,.6);text(sources,36,776,523,40,8,false,C.dark);
 text('AFRICA & ASIA',36,824,430,12,8,true,C.dark);text(String(n).padStart(2,'0'),523,820,36,18,10,true,C.ink,{align:'right'});return s;
};
take=function(body,y=598,h=91){
 const fill=current.dark?C.paper:C.ink,fg=current.dark?C.ink:C.paper;
 nativeRect(36,y,523,h,fill);nativeText('OUR TAKE / GROUP VIEW',50,y+10,495,14,8,true,fg);
 nativeText(body,50,y+31,495,h-37,11.5,true,fg);
};
function dot(x,y,r=4,color=C.ink){
 if(current.dark&&color===C.ink)color=C.paper;
 s.addShape(pptx.ShapeType.ellipse,{x:(x-r)/72,y:(y-r)/72,w:2*r/72,h:2*r/72,fill:{color},line:{color,width:.4}});
 sv.push(`<circle cx="${x}" cy="${y}" r="${r}" fill="#${color}"/>`);
}
function leaderVisual(x,y,w=160,h=130){
 // Original, editable metaphor: a leader hears and responds to others.
 const fg=current.dark?C.paper:C.ink;
 dot(x+w*.5,y+18,13,fg);nativeRect(x+w*.5-17,y+36,34,44,fg);
 [[.08,90],[.3,106],[.7,106],[.92,90]].forEach(([a,b])=>{dot(x+w*a,y+b,7,fg);nativeRect(x+w*a-10,y+b+11,20,24,fg);line(x+w*.5,y+82,x+w*a,y+b-11,fg,1,true);});
}
function bowl(x,y,w=310,h=100){
 const fg=current.dark?C.paper:C.ink,bg=current.dark?C.ink:C.paper;
 s.addShape(pptx.ShapeType.ellipse,{x:x/72,y:y/72,w:w/72,h:h/72,fill:{color:fg},line:{color:fg,width:1}});
 sv.push(`<ellipse cx="${x+w/2}" cy="${y+h/2}" rx="${w/2}" ry="${h/2}" fill="#${fg}"/>`);
 nativeRect(x-2,y-2,w+4,h/2+2,bg);line(x,y+h/2,x+w,y+h/2,fg,3);
}
function ingredient(kind,x,y){
 const fg=C.paper;
 const ellipse=(a,b,w,h,rotation=0)=>{s.addShape(pptx.ShapeType.ellipse,{x:a/72,y:b/72,w:w/72,h:h/72,rotate:rotation,fill:{color:fg},line:{color:fg,width:.5}});sv.push(`<ellipse cx="${a+w/2}" cy="${b+h/2}" rx="${w/2}" ry="${h/2}" fill="#${fg}"/>`);};
 if(kind===0){[[-12,-1],[-2,7],[8,-1]].forEach(([a,b])=>ellipse(x+a,y+b,8,17));}
 if(kind===1){s.addShape(pptx.ShapeType.triangle,{x:(x-8)/72,y:y/72,w:16/72,h:27/72,rotate:180,fill:{color:fg},line:{color:fg}});sv.push(`<path d="M${x-8} ${y}L${x+8} ${y}L${x} ${y+27}Z" fill="#${fg}"/>`);line(x,y,x-7,y-9,fg,2);line(x,y,x+7,y-9,fg,2);}
 if(kind===2){ellipse(x-16,y,32,17);nativeRect(x-5,y+12,10,16,fg);}
 if(kind===3){ellipse(x-14,y,14,24,-35);ellipse(x+1,y+2,14,24,35);line(x,y+12,x,y+31,fg,1.5);}
 if(kind===4){ellipse(x-13,y,26,26);line(x,y,x-5,y-10,fg,2);line(x,y,x+5,y-10,fg,2);nativeRect(x-1,y+6,2,17,C.ink);}
 if(kind===5){[[-9,0],[4,0],[-3,10],[9,13],[-13,16],[0,22]].forEach(([a,b])=>dot(x+a,y+b,3.5,fg));}
}
