from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor, Color, white, black
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader
from math import sin, cos, pi
import os

OUT = "/workspace/scratch/203ad716578e/output/pdf/Africa_Asia_Magazine_Rough_Structure.pdf"
W, H = A4

NAVY = HexColor("#172A3A")
INK = HexColor("#1E252B")
ORANGE = HexColor("#E66A3A")
GOLD = HexColor("#E8B44A")
TEAL = HexColor("#2A9D8F")
SAND = HexColor("#F3E9D7")
PAPER = HexColor("#FBF8F1")
MUTED = HexColor("#697780")
PALE = HexColor("#E8ECEC")
RED = HexColor("#C84B43")
GREEN = HexColor("#4F8A5B")

REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
pdfmetrics.registerFont(TTFont("DV", REG))
pdfmetrics.registerFont(TTFont("DV-B", BOLD))


def bg(c, color=PAPER):
    c.setFillColor(color)
    c.rect(0, 0, W, H, fill=1, stroke=0)


def txt(c, x, y, text, size=10, color=INK, font="DV", maxw=None, leading=None):
    c.setFillColor(color)
    c.setFont(font, size)
    if maxw is None:
        c.drawString(x, y, text)
        return y
    words = text.split()
    line = ""
    lines = []
    for word in words:
        trial = (line + " " + word).strip()
        if pdfmetrics.stringWidth(trial, font, size) <= maxw:
            line = trial
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)
    leading = leading or size * 1.35
    for i, line in enumerate(lines):
        c.drawString(x, y - i * leading, line)
    return y - len(lines) * leading


def label(c, x, y, text, fill=ORANGE, color=white):
    w = pdfmetrics.stringWidth(text.upper(), "DV-B", 7) + 14
    c.setFillColor(fill)
    c.roundRect(x, y-3, w, 16, 5, fill=1, stroke=0)
    txt(c, x+7, y+1, text.upper(), 7, color, "DV-B")


def footer(c, page, section="ROUGH STORYBOARD"):
    c.setStrokeColor(HexColor("#D8D2C7"))
    c.line(34, 27, W-34, 27)
    txt(c, 34, 14, section, 6.5, MUTED, "DV-B")
    c.setFillColor(ORANGE)
    c.circle(W-48, 16, 11, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("DV-B", 7)
    c.drawCentredString(W-48, 13.5, str(page))


def header(c, page, kicker, title, subtitle="", dark=False):
    if dark:
        bg(c, NAVY)
        base = white
        sub = HexColor("#C9D6DB")
    else:
        bg(c)
        base = NAVY
        sub = MUTED
    label(c, 36, H-54, kicker)
    y = txt(c, 36, H-92, title, 25, base, "DV-B", W-72, 29)
    if subtitle:
        txt(c, 36, y-4, subtitle, 9.5, sub, "DV", W-72, 13)
    footer(c, page)


VISUAL_TIPS = {
    2:"Recurring pull-quote motif: repeat the central question at each section break.",
    3:"Use colored section tabs and small icons so readers can navigate quickly.",
    4:"Split-screen archival photos with one shared timeline running across both pages.",
    5:"Mirrored dashboard: identical icons, scales and years for both regions.",
    6:"Animated line reveal for presentation; small-multiple charts in print.",
    7:"Use a Sankey-style flow: workers move from agriculture into industry or services.",
    8:"Map mosaic: several countries inside each continent shape to show diversity.",
    9:"Circular diagram: Observe → Connect → Predict → Test → Revise.",
    10:"Three large question cards with a class vote and a before/after result bar.",
    12:"Historical map plus independence timeline; never rely on color without labels.",
    13:"Four-box authority chain with arrows; add one real country example below it.",
    14:"Mirror page 13 exactly so readers can compare British and French systems.",
    15:"Four archive-photo cards, one striking fact and one caution per colonial power.",
    16:"Before/after network map: mine-to-port corridor versus connected domestic cities.",
    17:"Layer ethnic territories and state borders with transparent colors.",
    18:"Interactive drag-a-border game; reveal effects on trade, identity and conflict.",
    19:"Suitcase infographic: show what a new state 'inherits' at independence.",
    20:"100-point budget game with tokens readers physically or digitally allocate.",
    22:"Reinforcing loop diagram: skills → firms → exports → learning → upgrading.",
    23:"One product journey: raw cotton → fabric → garment → branded product.",
    24:"Four-frame timeline with one number, one policy and one image per era.",
    25:"Use the same four-frame structure as Korea to make comparison fair.",
    26:"Comparison table plus two 'what this comparison cannot prove' warning tags.",
    28:"Network diagram: trust links expand from family to firms, banks and courts.",
    29:"Anonymous live poll; reveal the concept only after everyone answers.",
    30:"Two-sided balance graphic: possible strength on one side, possible cost on the other.",
    31:"Use a manager-employee comic showing challenge versus silence.",
    32:"Timeline choice: consume today, invest for five years, or invest for twenty.",
    33:"Three compact cards; show weaker relevance with lighter visual weight.",
    34:"Theory test matrix: prediction, supporting case, challenge and revised theory.",
    35:"Horizontal class-result bars with sample size and a limitations box.",
    36:"Counterexample stamp: 'Our first explanation fails here - why?'.",
    37:"Use a different African pathway, not merely another success ranking.",
    38:"Three country trajectories on identical axes to show variation within Asia.",
    39:"Clickable flip cards; every answer needs one sentence and one source.",
    40:"Layered pyramid with the group's three theories crossing several layers.",
    41:"Capability ladder: basic production → quality → design → technology → brand.",
    42:"Adapt-versus-copy split screen with a real example on each side.",
    43:"Five numbered takeaways that double as the presenter's final speaking notes.",
    44:"Numbered endnotes plus image credits; use QR links only as a supplement.",
}


def build_note(c, text):
    page = c.getPageNumber()
    visual = VISUAL_TIPS.get(page, "Turn the main claim into one clear visual rather than decorative imagery.")
    c.setFillColor(HexColor("#FFF3D7"))
    c.roundRect(36, 38, W-72, 54, 7, fill=1, stroke=0)
    txt(c, 47, 76, "BUILD NOTE", 6.3, ORANGE, "DV-B")
    txt(c, 109, 76, "PAGE ACTION", 6.3, NAVY, "DV-B")
    txt(c, 174, 76, text, 6.2, INK, "DV", W-220, 7.5)
    txt(c, 47, 50, "INFOGRAPHIC / INTERACTION TIP", 6.2, TEAL, "DV-B")
    txt(c, 190, 50, visual, 6.1, INK, "DV", W-236, 7.3)


def photo_placeholder(c, x, y, w, h, caption="FULL-BLEED IMAGE", accent=TEAL):
    c.setFillColor(PALE)
    c.roundRect(x, y, w, h, 8, fill=1, stroke=0)
    c.setStrokeColor(Color(accent.red, accent.green, accent.blue, alpha=.35))
    c.setLineWidth(1.3)
    c.line(x+10, y+10, x+w-10, y+h-10)
    c.line(x+10, y+h-10, x+w-10, y+10)
    c.setFillColor(accent)
    c.circle(x+w*.72, y+h*.69, min(w,h)*.08, fill=1, stroke=0)
    txt(c, x+12, y+13, caption, 6.5, MUTED, "DV-B")


def africa_shape(c, x, y, s, color=ORANGE):
    pts = [(0.18,.92),(.53,1),(.82,.82),(.96,.54),(.72,.35),(.59,.05),(.43,0),(.32,.23),(.12,.45),(0,.71)]
    p=c.beginPath(); p.moveTo(x+pts[0][0]*s,y+pts[0][1]*s)
    for px,py in pts[1:]: p.lineTo(x+px*s,y+py*s)
    p.close(); c.setFillColor(color); c.drawPath(p,fill=1,stroke=0)


def asia_shape(c, x, y, s, color=TEAL):
    pts=[(0,.64),(.18,.88),(.48,.95),(.68,.79),(.98,.82),(.78,.61),(.93,.45),(.64,.51),(.55,.22),(.36,.05),(.28,.36),(.08,.29)]
    p=c.beginPath();p.moveTo(x+pts[0][0]*s,y+pts[0][1]*s)
    for px,py in pts[1:]:p.lineTo(x+px*s,y+py*s)
    p.close();c.setFillColor(color);c.drawPath(p,fill=1,stroke=0)


def mini_bar_chart(c, x, y, w, h, values, labels, colors=None, title="ILLUSTRATIVE DATA SHAPE"):
    colors=colors or [ORANGE, TEAL, GOLD, NAVY]
    c.setStrokeColor(HexColor("#BFC8CB")); c.line(x,y,x,y+h); c.line(x,y,x+w,y)
    mx=max(values)
    gap=w/(len(values)*1.7)
    bw=gap*.72
    for i,v in enumerate(values):
        bh=(h-25)*v/mx
        bx=x+gap*(.5+i*1.7)
        c.setFillColor(colors[i%len(colors)]); c.roundRect(bx,y,bw,bh,3,fill=1,stroke=0)
        txt(c,bx,y-11,labels[i],6,MUTED,"DV-B")
    txt(c,x,y+h+7,title,6.5,MUTED,"DV-B")


def line_chart(c,x,y,w,h,series=((12,16,25,38,58,80),(12,14,19,26,32,40)), labels=("ASIA CASE","AFRICA CASE")):
    c.setStrokeColor(HexColor("#C9D1D2")); c.line(x,y,x,y+h);c.line(x,y,x+w,y)
    cols=[TEAL,ORANGE,GOLD,NAVY]
    for k,vals in enumerate(series):
        p=c.beginPath()
        for i,v in enumerate(vals):
            px=x+i*w/(len(vals)-1);py=y+v*h/100
            if i==0:p.moveTo(px,py)
            else:p.lineTo(px,py)
        c.setStrokeColor(cols[k]);c.setLineWidth(3);c.drawPath(p,fill=0,stroke=1)
        txt(c,x+w-86,y+h-14-k*13,labels[k],6.5,cols[k],"DV-B")
    txt(c,x,y-13,"1960",6,MUTED);txt(c,x+w-22,y-13,"NOW",6,MUTED)


def qr_placeholder(c,x,y,s=62):
    c.setFillColor(white);c.setStrokeColor(NAVY);c.rect(x,y,s,s,fill=1,stroke=1)
    cell=s/9
    for r in range(9):
        for col in range(9):
            if ((r*3+col*5+r*col)%7<3) or (r<3 and col<3) or (r>5 and col>5):
                c.setFillColor(NAVY);c.rect(x+col*cell,y+r*cell,cell,cell,fill=1,stroke=0)
    txt(c,x,y-11,"QR PLACEHOLDER",5.7,MUTED,"DV-B")


def choice_cards(c, x, y, cards, cols=2):
    gap=10; w=(W-2*x-gap*(cols-1))/cols; h=66
    for i,(letter,title,desc) in enumerate(cards):
        row=i//cols; col=i%cols; bx=x+col*(w+gap);by=y-row*(h+10)
        c.setFillColor(white);c.setStrokeColor(HexColor("#D6DDDD"));c.roundRect(bx,by-h,w,h,8,fill=1,stroke=1)
        c.setFillColor(ORANGE if i%2==0 else TEAL);c.circle(bx+20,by-20,11,fill=1,stroke=0)
        txt(c,bx+16.5,by-23,letter,7,white,"DV-B")
        txt(c,bx+38,by-18,title,8.2,NAVY,"DV-B",w-48,10)
        txt(c,bx+38,by-38,desc,6.5,MUTED,"DV",w-48,8.5)


def timeline(c, x, y, w, events):
    c.setStrokeColor(NAVY);c.setLineWidth(2);c.line(x,y,x+w,y)
    for i,(year,title) in enumerate(events):
        px=x+i*w/(len(events)-1)
        c.setFillColor(ORANGE if i%2==0 else TEAL);c.circle(px,y,6,fill=1,stroke=0)
        txt(c,px-15,y+12,year,6.5,NAVY,"DV-B")
        txt(c,px-25,y-24,title,6,MUTED,"DV",52,7.5)


def source_strip(c, text="SOURCE PLAN: World Bank / AfDB / academic paper - verify exact figure"):
    c.setFillColor(HexColor("#EEF2F1"));c.roundRect(36,92,W-72,24,5,fill=1,stroke=0)
    txt(c,46,100,text,6.5,MUTED,"DV-B",W-92,8)


def two_col_text(c, y, left_head, left_text, right_head, right_text):
    w=(W-84)/2
    txt(c,36,y,left_head,11,NAVY,"DV-B")
    txt(c,36,y-20,left_text,8,MUTED,"DV",w,11)
    txt(c,48+w,y,right_head,11,NAVY,"DV-B")
    txt(c,48+w,y-20,right_text,8,MUTED,"DV",w,11)


def page_cover(c):
    bg(c,NAVY)
    africa_shape(c,48,310,330,ORANGE)
    asia_shape(c,260,390,280,TEAL)
    c.setFillColor(Color(1,1,1,alpha=.13));c.circle(100,680,95,fill=1,stroke=0)
    label(c,38,H-52,"ROUGH MAGAZINE STORYBOARD",GOLD,NAVY)
    txt(c,38,285,"AFRICA",39,white,"DV-B")
    txt(c,38,241,"& ASIA",39,white,"DV-B")
    txt(c,40,205,"WHY DID THEIR ECONOMIC PATHS DIVERGE?",11,GOLD,"DV-B")
    txt(c,40,178,"A cultural analysis of history, institutions and growth",9,HexColor("#D9E3E5"),"DV",430,13)
    txt(c,40,78,"STRUCTURE DRAFT  •  v0.1",7,white,"DV-B")
    txt(c,40,59,"All data and final images still need research, citation and replacement.",6.5,HexColor("#B9C7CC"),"DV")


def page_inside(c, page):
    bg(c,SAND)
    txt(c,45,H-72,"ONE QUESTION GUIDES THE WHOLE MAGAZINE",7,ORANGE,"DV-B")
    txt(c,45,H-129,"Was slower growth caused by culture...",24,NAVY,"DV-B",470,31)
    txt(c,110,H-282,"or was culture itself shaped by",20,MUTED,"DV",410,27)
    txt(c,110,H-318,"history and institutions?",20,TEAL,"DV-B")
    c.setStrokeColor(ORANGE);c.setLineWidth(4);c.line(45,H-155,45,H-345)
    photo_placeholder(c,45,114,W-90,210,"HISTORICAL IMAGE COLLAGE / TEXTURE",ORANGE)
    build_note(c,"Use this question as a recurring visual device on section openers and in the presentation.")
    footer(c,page)


def contents(c,page):
    header(c,page,"FRONT OF BOOK","CONTENTS","A visual route through the argument")
    sections=[("01","THE GAP + OUR THEORIES","What changed, and what we predict",4),
              ("02","COLONIAL INHERITANCE","Borders, railways, rule",11),
              ("03","THE ASIAN TURN","Industry and exports",21),
              ("04","CULTURE IN CONTEXT","Trust, authority, time",27),
              ("05","TEST OUR THEORIES","Predictions and counterexamples",34),
              ("06","WHAT CAN TRANSFER?","Lessons and limits",40)]
    y=H-155
    for num,title,desc,p in sections:
        c.setFillColor(white);c.roundRect(36,y-58,W-72,50,7,fill=1,stroke=0)
        txt(c,48,y-30,num,15,ORANGE,"DV-B")
        txt(c,88,y-24,title,10,NAVY,"DV-B")
        txt(c,88,y-41,desc,7,MUTED,"DV")
        txt(c,W-62,y-31,str(p),9,TEAL,"DV-B")
        y-=72
    build_note(c,"Add team names, roles and a clickable contents page in the digital version.")


def opening_spread(c,page):
    header(c,page,"THE BIG QUESTION","1960: TWO REGIONS AT A CROSSROADS","A dramatic opener using one image per region")
    photo_placeholder(c,36,330,(W-82)/2,300,"AFRICA / 1960",ORANGE)
    photo_placeholder(c,46+(W-82)/2,330,(W-82)/2,300,"EAST ASIA / 1960",TEAL)
    txt(c,36,285,"Many countries were poor and largely agricultural.",13,NAVY,"DV-B",W-72,18)
    txt(c,36,244,"Over the next six decades, their economic paths often diverged. This magazine investigates why - without treating either region as one culture.",9,MUTED,"DV",W-72,13)
    build_note(c,"Pair this with page 5. Use archival photos with equal dignity and avoid visual stereotypes.")


def baseline_page(c,page):
    header(c,page,"BASELINE","AFRICA AND ASIA IN 1960","A dashboard of comparable starting conditions")
    mini_bar_chart(c,58,420,210,190,[78,72,18,22],["AGR","RURAL","LIT","IND"],title="AFRICA CASE - PLACEHOLDER")
    mini_bar_chart(c,330,420,210,190,[72,69,26,19],["AGR","RURAL","LIT","IND"],[TEAL,GOLD,NAVY,ORANGE],"ASIA CASE - PLACEHOLDER")
    two_col_text(c,375,"WHAT TO COMPARE","Income per person, life expectancy, literacy, urbanisation and export structure.","WHY IT MATTERS","Readers need a fair baseline before seeing later outcomes.")
    source_strip(c,"DATA TODO: World Bank historical indicators; Maddison Project; UNESCO. Values above are placeholders.")
    build_note(c,"Use the same scales and years. Do not cherry-pick regional averages.")


def today_page(c,page):
    header(c,page,"THEN / NOW","THE SAME INDICATORS TODAY","Reveal the divergence with a single clean visual")
    line_chart(c,65,360,W-130,250)
    c.setFillColor(white);c.roundRect(55,188,W-110,105,8,fill=1,stroke=0)
    txt(c,72,267,"THE REVEAL",7,ORANGE,"DV-B")
    txt(c,72,237,"Growth was uneven in both regions.",17,NAVY,"DV-B")
    txt(c,72,207,"Replace the simple lines with sourced regional and country-level data.",8,MUTED,"DV")
    source_strip(c,"SOURCE PLAN: World Development Indicators; AfDB; ADB. Graph is deliberately illustrative.")
    build_note(c,"Animate the two lines during the oral presentation, then immediately show country exceptions.")


def gap_page(c,page):
    header(c,page,"THE GAP","WHAT ACTUALLY DIVERGED?","Break 'development' into mechanisms, not one GDP number")
    cards=[("1","PRODUCTIVITY","Output per worker"),("2","STRUCTURE","Agriculture → industry"),("3","EXPORTS","Raw goods → manufactured goods"),("4","CAPABILITY","Skills, technology and firms")]
    choice_cards(c,50,610,cards,2)
    c.setFillColor(NAVY);c.roundRect(50,240,W-100,150,10,fill=1,stroke=0)
    txt(c,72,355,"CENTRAL CLAIM TO TEST",7,GOLD,"DV-B")
    txt(c,72,319,"The key difference was not only growth speed.",18,white,"DV-B",430,24)
    txt(c,72,277,"It was how economies moved workers and capital into more productive activities.",9,HexColor("#D4DEE2"),"DV",430,13)
    build_note(c,"This page supplies the economic backbone. Culture is introduced later as one influence on these mechanisms.")


def warning_page(c,page):
    header(c,page,"GUARDRAIL","NEITHER REGION IS ONE STORY","Make the warning visual, brief and impossible to miss")
    africa_shape(c,62,360,200,ORANGE);asia_shape(c,330,390,200,TEAL)
    for i in range(9):
        c.setFillColor([GOLD,white,NAVY,TEAL][i%4]);c.circle(85+(i%3)*55,398+(i//3)*54,12,fill=1,stroke=0)
    for i in range(9):
        c.setFillColor([ORANGE,white,NAVY,GOLD][i%4]);c.circle(355+(i%3)*55,420+(i//3)*50,12,fill=1,stroke=0)
    txt(c,55,300,"54 African states. Vastly different histories, institutions and economies.",12,NAVY,"DV-B",220,17)
    txt(c,325,300,"Asia contains both global growth leaders and economies that developed more slowly.",12,NAVY,"DV-B",220,17)
    build_note(c,"Use maps and short country labels. This protects the report from continental stereotypes.")


def drivers_page(c,page):
    header(c,page,"THEORY LAB","HOW WE BUILD OUR OWN THEORY","A theory must explain, predict and risk being wrong")
    steps=[("1","OBSERVE","Find a repeated difference",ORANGE),("2","CONNECT","Combine history, culture and economics",TEAL),("3","PREDICT","Say what else should be true",GOLD),("4","TEST","Use cases and data",RED),("5","REVISE","Explain exceptions",GREEN)]
    y=585
    for i,(num,head,desc,col) in enumerate(steps):
        x=54+i*103
        c.setFillColor(col);c.circle(x+30,y-i%2*70,28,fill=1,stroke=0)
        txt(c,x+24,y-4-i%2*70,num,9,white if col!=GOLD else NAVY,"DV-B")
        txt(c,x-4,y-50-i%2*70,head,7,NAVY,"DV-B")
        txt(c,x-4,y-68-i%2*70,desc,6.2,MUTED,"DV",85,8)
        if i<4:
            c.setStrokeColor(HexColor("#B7C2C3"));c.setLineWidth(2);c.line(x+58,y-i%2*70,x+96,y-(i+1)%2*70)
    c.setFillColor(NAVY);c.roundRect(55,230,W-110,165,10,fill=1,stroke=0)
    txt(c,75,358,"OUR RULE",7,GOLD,"DV-B")
    txt(c,75,325,"Existing theories are ingredients.",18,white,"DV-B")
    txt(c,75,294,"Our contribution is the new connection between them - and a prediction that cases can challenge.",10,HexColor("#D6E0E3"),"DV",420,14)
    txt(c,75,250,"Bad theory: 'Culture made Africa grow slowly.'",7,ORANGE,"DV-B")
    build_note(c,"Every group theory should have: mechanism, prediction, evidence, counterexample and limitation.")


def rank_page(c,page):
    header(c,page,"QUESTIONS TO CARRY","THREE IDEAS - NOT THREE ANSWERS","The reader meets each theory first as a question")
    theories=[
        ("01","CONNECTED DEVELOPMENT","What if the decisive difference was not the amount of infrastructure, but whom it connected?","Colonial export corridors moved resources out. Development may require networks that connect firms, workers and domestic markets.",ORANGE),
        ("02","THE RADIUS OF TRUST","How far beyond family and close networks can economic trust travel?","Our theory: larger firms and formal markets grow more easily when trust extends into contracts, banks, courts and professional managers.",TEAL),
        ("03","CONTINUITY + ADAPTATION","Can a country learn industrially if its direction changes every few years?","Our theory: development needs long-term policy continuity, but also the ability to correct policies that fail.",GOLD),
    ]
    y=620
    for num,head,question,statement,col in theories:
        c.setFillColor(white);c.roundRect(46,y-145,W-92,132,9,fill=1,stroke=0)
        c.setFillColor(col);c.circle(75,y-43,23,fill=1,stroke=0)
        txt(c,65,y-47,num,7,white if col!=GOLD else NAVY,"DV-B")
        txt(c,112,y-30,head,9,NAVY,"DV-B")
        txt(c,112,y-55,question,9,ORANGE if col==ORANGE else NAVY,"DV-B",410,12)
        txt(c,112,y-99,statement,6.7,MUTED,"DV",405,9)
        y-=157
    qr_placeholder(c,W-112,92,52)
    txt(c,46,132,"VOTE NOW - THEN VOTE AGAIN AT THE END",7,ORANGE,"DV-B")
    build_note(c,"Repeat these questions as small sidebars on the railway, trust, country-case and conclusion pages.")


def colonial_opener(c,page):
    header(c,page,"SECTION 02","COLONIALISM CHANGED THE STARTING LINE","Extraction, administration and state-building left different inheritances",True)
    c.setFillColor(ORANGE);c.rect(0,0,W,230,fill=1,stroke=0)
    c.setStrokeColor(white);c.setLineWidth(4)
    c.line(70,200,420,55);c.line(120,210,500,108)
    c.setFillColor(white);c.circle(85,194,13,fill=1,stroke=0);c.circle(440,63,13,fill=1,stroke=0)
    txt(c,52,265,"HISTORY IS NOT A FOOTNOTE.",14,GOLD,"DV-B")
    txt(c,52,246,"It shaped borders, infrastructure, authority and trade patterns.",8,white,"DV")


def colonizer_map(c,page):
    header(c,page,"MAP","WHO COLONISED WHOM?","A color-coded map with a timeline of independence")
    africa_shape(c,145,230,310,HexColor("#D7C3A6"))
    colors=[ORANGE,TEAL,GOLD,RED,NAVY]
    for i in range(18):
        x=190+(i%4)*55+(i%2)*9;y=270+(i//4)*55
        c.setFillColor(colors[i%5]);c.circle(x,y,18+(i%3)*3,fill=1,stroke=0)
    legend=["BRITAIN","FRANCE","BELGIUM","PORTUGAL","OTHERS"]
    for i,l in enumerate(legend):
        c.setFillColor(colors[i]);c.rect(45,545-i*26,12,12,fill=1,stroke=0);txt(c,66,548-i*26,l,7,MUTED,"DV-B")
    timeline(c,60,150,W-120,[("1884","Scramble"),("1914","Colonial map"),("1957","Ghana"),("1960","Independence wave"),("1975","Late empires")])
    build_note(c,"Replace circles with an accurate historical map. Include a clear note that borders and control changed over time.")


def rule_model(c,page,which):
    if which=="British":
        title="BRITISH RULE: GOVERN THROUGH LOCAL AUTHORITIES"; accent=ORANGE
        nodes=["LONDON","GOVERNOR","CHIEF","COMMUNITY"]
        left="Indirect rule often used existing or newly empowered local authorities."
        right="Possible legacy: strong local intermediaries and uneven state reach."
    else:
        title="FRENCH RULE: BUILD A CENTRALISED STATE"; accent=TEAL
        nodes=["PARIS","GOVERNOR","ADMINISTRATION","CITIZEN"]
        left="French rule generally stressed central administration, language and assimilation."
        right="Possible legacy: centralised bureaucracy and authority flowing from the capital."
    header(c,page,"COLONIAL MODELS",title,"Present as tendencies, not universal rules")
    y=520
    for i,n in enumerate(nodes):
        x=78+i*138
        c.setFillColor(accent if i in (0,3) else NAVY);c.roundRect(x-34,y-25,92,50,8,fill=1,stroke=0)
        c.setFillColor(white);c.setFont("DV-B",6.5);c.drawCentredString(x+12,y-2,n)
        if i<len(nodes)-1:
            c.setStrokeColor(GOLD);c.setLineWidth(3);c.line(x+58,y,x+101,y)
            c.setFillColor(GOLD);p=c.beginPath();p.moveTo(x+101,y);p.lineTo(x+92,y+5);p.lineTo(x+92,y-5);p.close();c.drawPath(p,fill=1,stroke=0)
    two_col_text(c,395,"HOW IT WORKED",left,"QUESTION FOR TODAY",right)
    c.setFillColor(SAND);c.roundRect(55,195,W-110,95,8,fill=1,stroke=0)
    txt(c,72,258,"CULTURAL LINK - FRAME AS A HYPOTHESIS",7,ORANGE,"DV-B")
    txt(c,72,229,"How might repeated experience of local or distant authority shape trust, identity and power distance?",11,NAVY,"DV-B",430,15)
    source_strip(c,"SOURCE PLAN: comparative colonial administration research; country histories; avoid blanket claims.")
    build_note(c,"Add one country example that supports the model and one that complicates it.")


def other_empires(c,page):
    header(c,page,"COLONIAL MODELS","THE EMPIRES THAT DO NOT FIT THE BINARY","Belgian, Portuguese, German and Italian cases")
    cards=[("BE","BELGIAN CONGO","Extreme extraction and thin local administration"),("PT","PORTUGUESE AFRICA","Late decolonisation and forced labour systems"),("DE","GERMAN COLONIES","Shorter rule, major violence in some territories"),("IT","ITALIAN RULE","Settler ambitions and uneven institutional legacies")]
    choice_cards(c,48,610,cards,2)
    photo_placeholder(c,48,165,W-96,210,"FOUR-IMAGE ARCHIVE STRIP",RED)
    build_note(c,"Each box needs one verified example and one academic source. Keep claims short.")


def railway_page(c,page):
    header(c,page,"INFRASTRUCTURE","THE RAILWAY PROBLEM","Were networks built to connect people - or extract goods?")
    c.setFillColor(HexColor("#DDE7E3"));c.roundRect(45,255,W-90,360,10,fill=1,stroke=0)
    # coast and mine
    c.setFillColor(ORANGE);c.circle(135,480,38,fill=1,stroke=0);txt(c,108,477,"MINE",9,white,"DV-B")
    c.setFillColor(TEAL);c.rect(430,420,82,100,fill=1,stroke=0);txt(c,450,463,"PORT",9,white,"DV-B")
    c.setStrokeColor(NAVY);c.setLineWidth(7);c.line(170,480,430,470)
    for i in range(10):
        xx=184+i*24;c.setStrokeColor(white);c.setLineWidth(2);c.line(xx,462,xx,491)
    for x,y in [(230,345),(335,335),(435,315)]:
        c.setFillColor(GOLD);c.circle(x,y,25,fill=1,stroke=0);txt(c,x-14,y-2,"CITY",6,NAVY,"DV-B")
    c.setStrokeColor(RED);c.setDash(5,5);c.setLineWidth(2);c.line(230,345,335,335);c.line(335,335,435,315);c.setDash()
    txt(c,70,220,"Solid line: inherited export corridor",8,NAVY,"DV-B")
    txt(c,70,199,"Dotted line: missing domestic network",8,RED,"DV-B")
    build_note(c,"Replace the fictional map with two real railway examples and explain what changed after independence.")


def borders_page(c,page):
    header(c,page,"BORDERS","LINES DRAWN FROM OUTSIDE","Use one striking map to show partition and forced combination")
    c.setFillColor(SAND);c.roundRect(50,230,W-100,380,10,fill=1,stroke=0)
    cols=[ORANGE,TEAL,GOLD]
    for i,col in enumerate(cols):
        c.setFillColor(Color(col.red,col.green,col.blue,alpha=.72))
        c.circle(165+i*115,420+(i%2)*80,92,fill=1,stroke=0)
        txt(c,138+i*115,418+(i%2)*80,f"GROUP {chr(65+i)}",7,white,"DV-B")
    c.setStrokeColor(NAVY);c.setLineWidth(5);c.line(300,250,300,600)
    txt(c,310,570,"COLONIAL BORDER",7,NAVY,"DV-B")
    txt(c,70,195,"One group divided. Different groups placed inside one new state.",13,NAVY,"DV-B")
    source_strip(c,"SOURCE PLAN: partitioned ethnic groups research + one accurate country example.")
    build_note(c,"Do not suggest all borders were arbitrary in the same way. Use precise examples.")


def border_game(c,page):
    header(c,page,"INTERACTIVE 02","YOU ARE DESIGNING A COUNTRY","There is no clean line - every border creates trade-offs")
    c.setFillColor(white);c.roundRect(45,260,W-90,350,10,fill=1,stroke=0)
    cols=[ORANGE,TEAL,GOLD,RED]
    for i in range(14):
        x=95+(i%5)*90+(i%2)*16;y=310+(i//5)*100
        c.setFillColor(cols[i%4]);c.circle(x,y,25+(i%3)*7,fill=1,stroke=0)
    c.setStrokeColor(NAVY);c.setLineWidth(3);c.setDash(8,6);c.rect(70,290,430,270,fill=0,stroke=1);c.setDash()
    qr_placeholder(c,65,142,70)
    txt(c,160,190,"DRAW YOUR BORDER",14,NAVY,"DV-B")
    txt(c,160,163,"Then reveal the effects on identity, trade and political competition.",8,MUTED,"DV",350,11)
    build_note(c,"Genially version: drag a border line, then receive three consequences based on the chosen route.")


def independence_page(c,page):
    header(c,page,"1960","INDEPENDENCE: WHAT WAS INHERITED?","A visual inventory, not a paragraph")
    items=[("1","EXPORT RAILWAY","Mine → port"),("2","COMMODITY RISK","One crop or mineral"),("3","THIN INDUSTRY","Few local factories"),("4","BORDERS","Competing identities"),("5","BUREAUCRACY","Built to govern"),("6","SKILL GAPS","Limited mass education")]
    choice_cards(c,45,620,items,2)
    build_note(c,"This page becomes the starting screen for the president game on page 20.")


def president_game(c,page):
    header(c,page,"INTERACTIVE 03","YOU ARE PRESIDENT IN 1960","Spend 100 points. Every choice has an opportunity cost.")
    choices=[("A","SCHOOLS","Long-term skills; slow payoff"),("B","FACTORIES","Jobs; costly and risky"),("C","ROADS","Connect the domestic market"),("D","HEALTH","Lives and productivity"),("E","MILITARY","Security; less development cash"),("F","GOVERNMENT","Build state capacity")]
    choice_cards(c,45,625,choices,2)
    c.setFillColor(NAVY);c.roundRect(45,130,W-90,55,8,fill=1,stroke=0)
    txt(c,62,158,"YOUR BUDGET",7,GOLD,"DV-B");txt(c,165,150,"$ 100",20,white,"DV-B")
    qr_placeholder(c,W-118,120,60)
    build_note(c,"No perfect answer. Final screen should show growth, inequality, trust, stability and debt.")


def asia_opener(c,page):
    header(c,page,"SECTION 03","WHY DID PARTS OF ASIA INDUSTRIALISE FASTER?","Factories, exports, learning and coordinated state action",True)
    c.setFillColor(TEAL);c.rect(0,0,W,245,fill=1,stroke=0)
    # skyline/factory illustration
    for i,h in enumerate([75,120,92,150,105,132]):
        c.setFillColor(NAVY if i%2 else HexColor("#214D59"));c.rect(45+i*85,38,60,h,fill=1,stroke=0)
        for r in range(int(h//25)):
            c.setFillColor(GOLD);c.rect(56+i*85,55+r*23,10,10,fill=1,stroke=0);c.rect(78+i*85,55+r*23,10,10,fill=1,stroke=0)
    txt(c,45,270,"THE DEVELOPMENTAL-STATE STORY",7,GOLD,"DV-B")


def east_asia_model(c,page):
    header(c,page,"MODEL","THE EAST ASIAN GROWTH ENGINE","Show the reinforcing loop")
    steps=[("EDUCATE",80,500,ORANGE),("BUILD FIRMS",230,570,TEAL),("EXPORT",390,500,GOLD),("LEARN",390,350,NAVY),("REINVEST",230,285,RED),("UPGRADE",80,350,GREEN)]
    for i,(name,x,y,col) in enumerate(steps):
        c.setFillColor(col);c.circle(x+55,y,40,fill=1,stroke=0);c.setFillColor(white);c.setFont("DV-B",7);c.drawCentredString(x+55,y-2,name)
        nx,ny=steps[(i+1)%len(steps)][1]+55,steps[(i+1)%len(steps)][2]
        c.setStrokeColor(HexColor("#AEBABC"));c.setLineWidth(2);c.line(x+55,y,nx,ny)
    c.setFillColor(SAND);c.roundRect(55,150,W-110,85,8,fill=1,stroke=0)
    txt(c,72,205,"DO NOT PRESENT THIS AS A SINGLE ASIAN FORMULA",7,ORANGE,"DV-B")
    txt(c,72,178,"Japan, Korea, Taiwan, Singapore, China and Vietnam used different mixes of markets, state direction and global trade.",8.5,NAVY,"DV",430,12)
    build_note(c,"Add a small timeline showing when each economy entered export manufacturing.")


def manuf_page(c,page):
    header(c,page,"TRADE","MANUFACTURED EXPORTS VS RAW COMMODITIES","Compare where value is created and who learns")
    mini_bar_chart(c,65,380,205,230,[26,38,62,88],["1960","1980","2000","NOW"],[ORANGE,ORANGE,ORANGE,ORANGE],"MANUFACTURING SHARE - PLACEHOLDER")
    mini_bar_chart(c,330,380,205,230,[78,72,66,58],["1960","1980","2000","NOW"],[TEAL,TEAL,TEAL,TEAL],"COMMODITY RELIANCE - PLACEHOLDER")
    c.setFillColor(NAVY);c.roundRect(58,205,W-116,105,8,fill=1,stroke=0)
    txt(c,78,273,"VALUE-CHAIN QUESTION",7,GOLD,"DV-B")
    txt(c,78,240,"Who captures design, processing, logistics and brand value?",14,white,"DV-B",430,19)
    source_strip(c,"DATA TODO: UNCTAD / World Bank export composition. All bar heights are placeholders.")
    build_note(c,"Use the same product as a visual thread: raw cotton → fabric → clothing brand.")


def country_case(c,page,country,accent,subtitle,icons):
    header(c,page,"COUNTRY CASE",country,subtitle)
    photo_placeholder(c,36,360,W-72,260,f"ARCHIVAL + MODERN {country.upper()} PHOTO",accent)
    x=45
    for i,(yr,lab) in enumerate(icons):
        c.setFillColor(accent);c.circle(x+35+i*125,280,28,fill=1,stroke=0)
        txt(c,x+22+i*125,277,yr,6.3,white,"DV-B")
        txt(c,x+i*125,238,lab,7,NAVY,"DV-B",95,9)
    source_strip(c,"CASE SOURCES: national history + World Bank data + peer-reviewed development research.")
    build_note(c,"Write this as a 4-step story: starting position, policy choice, constraint, result.")


def compare_case(c,page):
    header(c,page,"COMPARISON","SOUTH KOREA VS GHANA","Similar-era comparison, very different paths - but not a laboratory experiment")
    rows=[("STARTING POINT","Low income","Low income"),("EXPORT BASE","Primary goods","Cocoa / primary goods"),("STATE STRATEGY","Export industry","Mixed / shifting"),("GEOPOLITICS","High Cold War support","Different external setting"),("OUTCOME","Industrial upgrading","Slower structural change")]
    x=50;y=585
    txt(c,250,y+25,"KOREA",8,TEAL,"DV-B");txt(c,415,y+25,"GHANA",8,ORANGE,"DV-B")
    for i,(lab,a,b) in enumerate(rows):
        yy=y-i*72;c.setFillColor(white if i%2==0 else HexColor("#F0EEE8"));c.roundRect(x,yy-48,W-100,56,5,fill=1,stroke=0)
        txt(c,x+12,yy-17,lab,7,NAVY,"DV-B");txt(c,220,yy-17,a,7,MUTED,"DV",125,9);txt(c,390,yy-17,b,7,MUTED,"DV",130,9)
    build_note(c,"Add precise figures and explain why the comparison is useful but imperfect.")


def culture_opener(c,page):
    header(c,page,"SECTION 04","HOFSTEDE'S SIX DIMENSIONS","A comparison lens - not a verdict on a country or a direct cause of growth",True)
    dims=[("POWER\nDISTANCE",ORANGE),("INDIVIDUALISM /\nCOLLECTIVISM",TEAL),("UNCERTAINTY\nAVOIDANCE",GOLD),("MASCULINITY /\nFEMININITY",RED),("LONG / SHORT\nTERM",GREEN),("INDULGENCE /\nRESTRAINT",HexColor("#7A5AA6"))]
    cx,cy=W/2,220
    for i,(name,col) in enumerate(dims):
        a=2*pi*i/len(dims)+pi/6;x=cx+185*cos(a);y=cy+120*sin(a)
        c.setFillColor(col);c.circle(x,y,50,fill=1,stroke=0)
        lines=name.split("\n");c.setFillColor(white if col!=GOLD else NAVY);c.setFont("DV-B",6.2)
        for j,line in enumerate(lines):c.drawCentredString(x,y+3-j*10,line)
    c.setFillColor(white);c.circle(cx,cy,58,fill=1,stroke=0)
    c.setFillColor(NAVY);c.setFont("DV-B",8);c.drawCentredString(cx,cy+4,"CULTURAL");c.drawCentredString(cx,cy-9,"DIMENSIONS")
    txt(c,48,64,"Use country scores carefully: they describe average survey patterns, not every individual.",7,HexColor("#C9D6DB"),"DV-B",480,9)


def trust_page(c,page):
    header(c,page,"CULTURAL LENS 01","TRUST: PERSONAL OR INSTITUTIONAL?","What makes people willing to transact with strangers?")
    cx,cy=W/2,430
    people=[("FAMILY",ORANGE,0),("FRIEND",GOLD,1),("BANK",TEAL,2),("COURT",NAVY,3),("STRANGER",RED,4)]
    for name,col,i in people:
        a=2*pi*i/len(people)-pi/2;x=cx+175*cos(a);y=cy+175*sin(a)
        c.setStrokeColor(HexColor("#BAC4C6"));c.line(cx,cy,x,y)
        c.setFillColor(col);c.circle(x,y,35,fill=1,stroke=0);c.setFillColor(white);c.setFont("DV-B",6.5);c.drawCentredString(x,y-2,name)
    c.setFillColor(NAVY);c.circle(cx,cy,55,fill=1,stroke=0);c.setFillColor(white);c.setFont("DV-B",8);c.drawCentredString(cx,cy+3,"START A");c.drawCentredString(cx,cy-9,"BUSINESS")
    txt(c,55,166,"Trust affects contracts, firm size, tax compliance, delegation and investment.",13,NAVY,"DV-B",470,18)
    build_note(c,"Connect historical shocks to trust carefully. Correlation and long-run mechanisms need proper sourcing.")


def trust_interactive(c,page):
    header(c,page,"INTERACTIVE 04","WHO WOULD YOU TRUST WITH THE MONEY?","Vote first. Reveal the cultural lens after.")
    cards=[("A","FAMILY MEMBER","Known and loyal"),("B","CLOSE FRIEND","Personal relationship"),("C","PRO MANAGER","Qualified stranger"),("D","BANK","Formal institution"),("E","GOVERNMENT","Public guarantee")]
    choice_cards(c,50,620,cards,2)
    qr_placeholder(c,W-135,140,72)
    txt(c,55,190,"HIDDEN QUESTION",7,ORANGE,"DV-B")
    txt(c,55,163,"When do relationships substitute for institutions?",12,NAVY,"DV-B")
    build_note(c,"Use anonymous class results and avoid assigning national stereotypes to individual answers.")


def dimension_page(c,page,num,title,subtitle,left,right,accent):
    header(c,page,f"CULTURAL LENS {num}",title,subtitle)
    c.setFillColor(accent);c.roundRect(45,285,220,330,10,fill=1,stroke=0)
    txt(c,67,566,"POSSIBLE STRENGTH",7,white,"DV-B")
    txt(c,67,526,left,15,white,"DV-B",175,21)
    c.setFillColor(NAVY);c.roundRect(330,285,220,330,10,fill=1,stroke=0)
    txt(c,352,566,"POSSIBLE COST",7,GOLD,"DV-B")
    txt(c,352,526,right,15,white,"DV-B",175,21)
    c.setStrokeColor(GOLD);c.setLineWidth(5);c.line(265,448,330,448)
    txt(c,65,232,"The effect depends on institutions, incentives and context.",12,NAVY,"DV-B")
    build_note(c,"Add one economic example on each side. Avoid labelling either cultural orientation as good or bad.")


def remaining_hofstede(c,page):
    header(c,page,"CULTURAL LENSES 04-06","THE OTHER THREE HOFSTEDE DIMENSIONS","Include all six, but spend space in proportion to their relevance")
    items=[
        ("04","UNCERTAINTY AVOIDANCE","Comfort with ambiguity, risk and unfamiliar rules.",GOLD,"Possible link: entrepreneurship, regulation and reactions to rapid reform."),
        ("05","MASCULINITY / FEMININITY","Competition and achievement versus care and quality of life.",RED,"Possible link: work incentives, status and social-policy choices."),
        ("06","INDULGENCE / RESTRAINT","How freely people expect to satisfy wants and enjoy life.",HexColor("#7A5AA6"),"Possible link: consumption, saving and social control - likely indirect."),
    ]
    y=605
    for num,title,desc,col,link in items:
        c.setFillColor(col);c.circle(72,y-23,26,fill=1,stroke=0)
        txt(c,62,y-27,num,8,white if col!=GOLD else NAVY,"DV-B")
        txt(c,112,y-10,title,10,NAVY,"DV-B")
        txt(c,112,y-31,desc,7.5,MUTED,"DV",415,10)
        c.setFillColor(white);c.roundRect(112,y-84,415,35,6,fill=1,stroke=0)
        txt(c,124,y-65,link,6.8,NAVY,"DV",390,9)
        y-=145
    c.setFillColor(SAND);c.roundRect(50,125,W-100,55,8,fill=1,stroke=0)
    txt(c,65,154,"CAUTION",7,ORANGE,"DV-B")
    txt(c,120,151,"Do not force a growth claim where the evidence is weak.",9,NAVY,"DV-B")
    build_note(c,"Use Hofstede's own definitions, add critique, and compare selected countries rather than continents.")


def causality_page(c,page):
    header(c,page,"THEORY CHECKPOINT","CAN OUR THREE IDEAS SURVIVE THE EVIDENCE?","A theory becomes useful only when we state what could challenge it")
    rows=[
        ("CONNECTED DEVELOPMENT","Prediction: countries with stronger internal and regional networks diversify faster.","Challenge: a disconnected country industrialises rapidly.",ORANGE),
        ("RADIUS OF TRUST","Prediction: broader institutional trust supports larger formal firms and delegation.","Challenge: low-trust settings repeatedly scale firms without substitutes.",TEAL),
        ("CONTINUITY + ADAPTATION","Prediction: sustained industrial direction supports learning and upgrading.","Challenge: frequent policy reversal has no effect on capability building.",GOLD),
    ]
    y=610
    for head,pred,challenge,col in rows:
        c.setFillColor(white);c.roundRect(45,y-118,W-90,108,8,fill=1,stroke=0)
        c.setFillColor(col);c.rect(45,y-118,8,108,fill=1,stroke=0)
        txt(c,68,y-34,head,8.5,NAVY,"DV-B")
        txt(c,68,y-58,pred,7.2,MUTED,"DV",455,9.5)
        txt(c,68,y-89,challenge,7.2,RED,"DV-B",455,9.5)
        y-=135
    c.setFillColor(NAVY);c.roundRect(62,150,W-124,64,8,fill=1,stroke=0)
    txt(c,80,187,"QUESTION FOR THE READER",7,GOLD,"DV-B")
    txt(c,80,164,"Which case would make you abandon or revise one of these theories?",10,white,"DV-B")
    build_note(c,"Separate what the evidence shows from the group's interpretation and from what remains uncertain.")


def class_experiment(c,page):
    header(c,page,"ORIGINAL RESEARCH","OUR CLASS HAS A CULTURE TOO","Five questions, anonymous answers, careful interpretation")
    questions=["Hire family or the best-qualified stranger?","Challenge a manager who is wrong?","Trust a signed contract with a stranger?","Save now for a payoff in ten years?","Should one rule apply equally to everyone?"]
    y=610
    for i,q in enumerate(questions):
        txt(c,52,y,f"0{i+1}",10,ORANGE,"DV-B");txt(c,92,y,q,9,NAVY,"DV-B",340,12)
        c.setFillColor(PALE);c.roundRect(440,y-10,95,16,5,fill=1,stroke=0)
        c.setFillColor(TEAL);c.roundRect(440,y-10,20+i*13,16,5,fill=1,stroke=0)
        y-=72
    qr_placeholder(c,52,145,70)
    txt(c,150,195,"RESULTS PAGE",12,NAVY,"DV-B")
    txt(c,150,168,"Replace bars with your own class data.",8,MUTED,"DV")
    build_note(c,"State the sample size and limitations. This is a discussion prompt, not proof about whole societies.")


def counter_case(c,page,country,accent,claim):
    header(c,page,"COUNTEREXAMPLE",country,claim)
    photo_placeholder(c,40,330,W-80,290,f"FULL-PAGE {country.upper()} VISUAL",accent)
    c.setFillColor(NAVY);c.roundRect(65,165,W-130,120,9,fill=1,stroke=0)
    txt(c,85,245,"WHY THIS CASE MATTERS",7,GOLD,"DV-B")
    txt(c,85,211,"If one simple cultural explanation cannot explain this case, the theory needs revision.",14,white,"DV-B",390,20)
    build_note(c,"Choose indicators that match the claim: governance, diversification, education, exports or productivity.")


def asia_not_one(c,page):
    header(c,page,"COUNTERWEIGHT","ASIA IS NOT ONE SUCCESS STORY EITHER","Compare fast growth, middle paths and persistent poverty")
    line_chart(c,65,385,W-130,220,series=((10,20,36,58,81,94),(12,18,29,41,52,61),(11,13,17,22,26,31)),labels=("FAST CASE","MIDDLE CASE","SLOW CASE"))
    cards=[("A","FAST CASE","Industrial upgrading"),("B","MIDDLE CASE","Growth with constraints"),("C","SLOW CASE","Conflict / weak capacity")]
    choice_cards(c,65,300,cards,3)
    source_strip(c,"COUNTRY SELECTION TODO: choose defensible cases and use consistent indicators.")
    build_note(c,"This page prevents the report from becoming 'Asia good, Africa bad'.")


def myths_page(c,page):
    header(c,page,"INTERACTIVE 05","MYTH OR FACT?","Tap or scan to flip each card")
    cards=[("?","CULTURE EXPLAINS EVERYTHING","MYTH"),("?","COLONIALISM EXPLAINS EVERYTHING","MYTH"),("?","RESOURCES GUARANTEE WEALTH","MYTH"),("?","INSTITUTIONS CAN CHANGE NORMS","FACT"),("?","ASIA USED ONE MODEL","MYTH"),("?","CONTEXT CHANGES POLICY RESULTS","FACT")]
    choice_cards(c,45,620,cards,2)
    qr_placeholder(c,W-122,125,62)
    build_note(c,"Each reveal should include one sentence of explanation and one source link.")


def synthesis_page(c,page):
    header(c,page,"OUR SYNTHESIS","WHAT IF DEVELOPMENT NEEDS ALL THREE?","The group's combined theory - presented as a model to debate")
    # Three intersecting routes into industrial capability
    cx,cy=W/2,430
    c.setFillColor(Color(ORANGE.red,ORANGE.green,ORANGE.blue,alpha=.68));c.circle(cx-100,cy+35,120,fill=1,stroke=0)
    c.setFillColor(Color(TEAL.red,TEAL.green,TEAL.blue,alpha=.68));c.circle(cx+100,cy+35,120,fill=1,stroke=0)
    c.setFillColor(Color(GOLD.red,GOLD.green,GOLD.blue,alpha=.70));c.circle(cx,cy-95,120,fill=1,stroke=0)
    txt(c,cx-176,cy+62,"CONNECTED",9,white,"DV-B");txt(c,cx-174,cy+47,"MARKETS",9,white,"DV-B")
    txt(c,cx+105,cy+62,"WIDER",9,white,"DV-B");txt(c,cx+105,cy+47,"TRUST",9,white,"DV-B")
    txt(c,cx-42,cy-133,"CONTINUITY +",9,NAVY,"DV-B");txt(c,cx-35,cy-148,"ADAPTATION",9,NAVY,"DV-B")
    c.setFillColor(NAVY);c.circle(cx,cy,62,fill=1,stroke=0)
    c.setFillColor(white);c.setFont("DV-B",7.5);c.drawCentredString(cx,cy+6,"INDUSTRIAL");c.drawCentredString(cx,cy-8,"CAPABILITY")
    c.setFillColor(SAND);c.roundRect(55,155,W-110,90,8,fill=1,stroke=0)
    txt(c,72,216,"OUR PROPOSED THEORY",7,ORANGE,"DV-B")
    txt(c,72,187,"Countries upgrade faster when people and firms are connected, trust can scale beyond close networks, and policy remains stable long enough to learn - while still correcting failure.",9,NAVY,"DV-B",430,13)
    build_note(c,"Present this as the group's best current explanation, then immediately state its limitations and exceptions.")


def learn_page(c,page):
    header(c,page,"TRANSFER","WHAT COULD AFRICAN COUNTRIES LEARN FROM ASIA?","Focus on capabilities, not copying national cultures")
    cards=[("1","EXPORT CAPABILITY","Help firms meet global standards"),("2","TECHNICAL SKILLS","Link education to industry"),("3","RELIABLE POWER","Reduce the cost of production"),("4","STATE DELIVERY","Implement policy consistently"),("5","REGIONAL MARKETS","Create scale across borders"),("6","FIRM LEARNING","Upgrade from simple to complex")]
    choice_cards(c,45,620,cards,2)
    build_note(c,"Each lesson needs an African example already applying it. Avoid a one-way 'Asia teaches Africa' tone.")


def limits_page(c,page):
    header(c,page,"TRANSFER","WHAT CANNOT SIMPLY BE COPIED?","Policies travel; starting conditions do not")
    left=["Cold War geopolitics","Population density","Land and transport geography","Colonial borders"]
    right=["Political systems","Resource endowments","Regional market size","Historical state capacity"]
    c.setFillColor(ORANGE);c.roundRect(45,255,230,360,10,fill=1,stroke=0)
    c.setFillColor(TEAL);c.roundRect(320,255,230,360,10,fill=1,stroke=0)
    txt(c,68,575,"HISTORICAL CONDITIONS",8,white,"DV-B");txt(c,343,575,"INSTITUTIONAL CONDITIONS",8,white,"DV-B")
    for i,t in enumerate(left):txt(c,68,530-i*62,"•  "+t,9,white,"DV-B",175,12)
    for i,t in enumerate(right):txt(c,343,530-i*62,"•  "+t,9,white,"DV-B",175,12)
    txt(c,65,210,"ADAPT THE MECHANISM. DO NOT COPY THE SURFACE.",12,NAVY,"DV-B")
    build_note(c,"End with two short examples of adaptation rather than imitation.")


def conclusion_page(c,page):
    header(c,page,"CONCLUSION","FIVE THINGS THE READER SHOULD REMEMBER","Short statements designed for the oral presentation")
    points=["Development paths diverged through structural change, not one cultural trait.",
            "Colonial systems shaped what states inherited at independence.",
            "East Asian growth relied on learning, exports, firms and capable states.",
            "Trust, authority and networks matter through the institutions around them.",
            "Both culture and institutions can change."]
    y=610
    for i,p in enumerate(points):
        c.setFillColor([ORANGE,TEAL,GOLD,RED,NAVY][i]);c.circle(76,y-10,24,fill=1,stroke=0)
        txt(c,69,y-14,str(i+1),11,white if i!=2 else NAVY,"DV-B")
        txt(c,120,y,p,12,NAVY,"DV-B",410,17)
        y-=92
    build_note(c,"Turn these five statements into the final five spoken sentences of the presentation.")


def sources_page(c,page):
    header(c,page,"BACK MATTER","SOURCE PLAN / WORKING BIBLIOGRAPHY","Replace with the exact editions, URLs, page numbers and access dates used")
    refs=[
        "World Bank. World Development Indicators and reports on structural transformation.",
        "African Development Bank. African Economic Outlook, recent edition.",
        "Nunn, N. Research on the long-term effects of Africa's slave trades and colonialism.",
        "Nunn, N. & Wantchekon, L. Research on historical shocks and trust.",
        "Michalopoulos, S. & Papaioannou, E. Research on partitioned ethnic groups and pre-colonial institutions.",
        "Acemoglu, D., Johnson, S. & Robinson, J. Research on colonial institutions and development.",
        "UNCTAD. Trade and export composition data.",
        "Maddison Project Database. Long-run income estimates.",
        "Country histories for Ghana, South Korea, Botswana and selected second African case.",
        "Hofstede / Trompenaars / Hall only where their concepts fit, with critique of national averages."
    ]
    y=610
    for i,r in enumerate(refs):
        txt(c,48,y,f"{i+1:02d}",7,ORANGE,"DV-B");txt(c,82,y,r,7.7,NAVY,"DV",455,10.5);y-=48
    build_note(c,"Use footnotes or numbered endnotes on every research page. Images also need credits.")


def back_cover(c,page):
    bg(c,NAVY)
    txt(c,48,H-75,"FINAL QUESTION",7,GOLD,"DV-B")
    txt(c,48,H-145,"IF CULTURE MATTERS,",27,white,"DV-B")
    txt(c,48,H-184,"CAN CULTURE CHANGE?",27,ORANGE,"DV-B")
    c.setStrokeColor(TEAL);c.setLineWidth(7);c.line(48,H-220,W-48,H-220)
    africa_shape(c,75,175,200,ORANGE);asia_shape(c,300,205,210,TEAL)
    qr_placeholder(c,48,66,68)
    txt(c,142,102,"Scan for the interactive magazine",8,white,"DV-B")
    txt(c,142,81,"Final link added after the Genially build.",6.5,HexColor("#B8C7CD"),"DV")
    c.setFillColor(white);c.setFont("DV-B",7);c.drawRightString(W-40,35,str(page))


def build():
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    c=canvas.Canvas(OUT,pagesize=A4,pageCompression=1)
    c.setTitle("Africa and Asia - Rough Magazine Structure")
    c.setAuthor("Project storyboard")
    pages=[]
    pages.append(lambda:page_cover(c))
    pages.append(lambda:page_inside(c,2))
    pages.append(lambda:contents(c,3))
    pages.append(lambda:opening_spread(c,4))
    pages.append(lambda:baseline_page(c,5))
    pages.append(lambda:today_page(c,6))
    pages.append(lambda:gap_page(c,7))
    pages.append(lambda:warning_page(c,8))
    pages.append(lambda:drivers_page(c,9))
    pages.append(lambda:rank_page(c,10))
    pages.append(lambda:colonial_opener(c,11))
    pages.append(lambda:colonizer_map(c,12))
    pages.append(lambda:rule_model(c,13,"British"))
    pages.append(lambda:rule_model(c,14,"French"))
    pages.append(lambda:other_empires(c,15))
    pages.append(lambda:railway_page(c,16))
    pages.append(lambda:borders_page(c,17))
    pages.append(lambda:border_game(c,18))
    pages.append(lambda:independence_page(c,19))
    pages.append(lambda:president_game(c,20))
    pages.append(lambda:asia_opener(c,21))
    pages.append(lambda:east_asia_model(c,22))
    pages.append(lambda:manuf_page(c,23))
    pages.append(lambda:country_case(c,24,"SOUTH KOREA",TEAL,"From agrarian economy to industrial exporter",[("1953","War recovery"),("1960s","Export push"),("1980s","Upgrade"),("Today","High-tech")]))
    pages.append(lambda:country_case(c,25,"GHANA",ORANGE,"Commodity wealth, political change and a different industrial path",[("1957","Independence"),("1960s","State projects"),("1980s","Reforms"),("Today","New sectors")]))
    pages.append(lambda:compare_case(c,26))
    pages.append(lambda:culture_opener(c,27))
    pages.append(lambda:trust_page(c,28))
    pages.append(lambda:trust_interactive(c,29))
    pages.append(lambda:dimension_page(c,30,"02","INDIVIDUALISM VS COLLECTIVISM","Family networks can support survival and enterprise","Strong support, loyalty and informal finance","Obligations may limit delegation or merit-based hiring",ORANGE))
    pages.append(lambda:dimension_page(c,31,"03","POWER DISTANCE","How easily can authority be questioned?","Fast coordination and respect for leadership","Weak challenge can protect bad decisions",TEAL))
    pages.append(lambda:dimension_page(c,32,"04","LONG-TERM ORIENTATION","Saving, education and delayed rewards","Investment in skills and future capability","Present needs can make delay costly or impossible",GOLD))
    pages.append(lambda:remaining_hofstede(c,33))
    pages.append(lambda:causality_page(c,34))
    pages.append(lambda:class_experiment(c,35))
    pages.append(lambda:counter_case(c,36,"BOTSWANA",TEAL,"A challenge to simple culture-first explanations"))
    pages.append(lambda:counter_case(c,37,"SECOND AFRICAN CASE",ORANGE,"Choose Mauritius, Morocco, Kenya, Rwanda or another defensible case"))
    pages.append(lambda:asia_not_one(c,38))
    pages.append(lambda:myths_page(c,39))
    pages.append(lambda:synthesis_page(c,40))
    pages.append(lambda:learn_page(c,41))
    pages.append(lambda:limits_page(c,42))
    pages.append(lambda:conclusion_page(c,43))
    pages.append(lambda:sources_page(c,44))
    pages.append(lambda:back_cover(c,45))
    for fn in pages:
        fn();c.showPage()
    c.save()
    print(OUT)


if __name__=="__main__":
    build()
