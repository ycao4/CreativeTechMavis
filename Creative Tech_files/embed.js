(function(g){var window=this;var O2=function(a,b){g.lf(a.i,8*b+2);var c=a.i.end();a.u.push(c);a.l+=c.length;c.push(a.l);return c},P2=function(a,b){var c=b.pop();
for(c=a.l+a.i.length()-c;127<c;)b.push(c&127|128),c>>>=7,a.l++;b.push(c);a.l++},FFa=function(a,b,c){null!=c&&(g.lf(a.i,8*b+1),a=a.i,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.wf=b,g.xf=c,g.mf(a,g.wf),g.mf(a,g.xf))},Q2=function(a,b,c){null!=c&&(g.lf(a.i,8*b),a.i.i.push(c?1:0))},R2=function(a,b,c){if(null!=c){b=O2(a,b);
for(var d=a.i,e=0;e<c.length;e++){var f=c.charCodeAt(e);if(128>f)d.i.push(f);else if(2048>f)d.i.push(f>>6|192),d.i.push(f&63|128);else if(65536>f)if(55296<=f&&56319>=f&&e+1<c.length){var h=c.charCodeAt(e+1);56320<=h&&57343>=h&&(f=1024*(f-55296)+h-56320+65536,d.i.push(f>>18|240),d.i.push(f>>12&63|128),d.i.push(f>>6&63|128),d.i.push(f&63|128),e++)}else d.i.push(f>>12|224),d.i.push(f>>6&63|128),d.i.push(f&63|128)}P2(a,b)}},S2=function(a,b,c,d){null!=c&&(b=O2(a,b),d(c,a),P2(a,b))},T2=function(a,b,c,d){if(null!=
c)for(var e=0;e<c.length;e++){var f=O2(a,b);
d(c[e],a);P2(a,f)}},GFa=function(a,b){var c=(b-a.i)/(a.l-a.i);
if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,h=0;8>h;h++){f=g.Cn(a,c);var l=(g.Cn(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(l))break;else f<b?d=c:e=c,c-=(f-b)/l}for(h=0;1E-6<Math.abs(f-b)&&8>h;h++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=g.Cn(a,c);return c},U2=function(a,b,c){a.i||(a.i={});
if(!a.i[c]){var d=g.Gf(a,c);d&&(a.i[c]=new b(d))}return a.i[c]},HFa=function(a,b,c){a.i||(a.i={});
c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=g.Nf(c[e]);a.i[b]=c;g.If(a,b,d)},V2=function(a,b,c,d){(c=g.Ef(a,c))&&c!==b&&void 0!==d&&(a.i&&c in a.i&&(a.i[c]=void 0),g.If(a,c,void 0));
g.If(a,b,d)},W2=function(){return{D:"svg",
R:{height:"100%",version:"1.1",viewBox:"0 0 110 26",width:"100%"},N:[{D:"path",rb:!0,J:"ytp-svg-fill",R:{d:"M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"}}]}},
IFa=function(a){this.CC=a},X2=function(a,b,c){this.l=a;
this.B=b;this.i=c||[];this.oo=new Map},Y2=function(a,b){X2.call(this,a,3,b)},KFa=function(){this.G=new JFa;
this.l=new Map;this.C=new Set;this.u=0;this.B=100;this.flushInterval=3E4;this.i=new g.Km(this.flushInterval);this.i.va("tick",this.NG,!1,this)},LFa=function(a,b){return a.C.has(b)?void 0:a.l.get(b)},MFa=function(a){for(var b=0;b<a.length;b++)a[b].clear()},NFa=function(){if(!Z2){Z2=new KFa;
var a=g.So("client_streamz_web_flush_count",-1);-1!==a&&(Z2.B=a)}this.i=Z2;this.i.uK("/client_streamz/youtube/web/debug/third_party_apisid_cookie_reissue_iframe",{XK:3,WK:"client_name"})},PFa=function(a){g.Ff(this,a,OFa,null)},QFa=function(a){g.Ff(this,a,null,null)},SFa=function(a,b){var c=g.Mf(a,QFa,1);
0<c.length&&T2(b,1,c,RFa)},RFa=function(a,b){var c=g.Gf(a,1);
null!=c&&g.zf(b,1,c);c=g.Gf(a,2);null!=c&&g.yf(b,2,c)},UFa=function(a){g.Ff(this,a,TFa,null)},WFa=function(a){g.Ff(this,a,null,VFa)},XFa=function(a){g.Ff(this,a,null,null)},YFa=function(a){g.Ff(this,a,null,null)},$2=function(a){g.Ff(this,a,ZFa,null)},b3=function(a){g.Ff(this,a,null,a3)},d3=function(a){g.Ff(this,a,null,c3)},bGa=function(a,b){var c=U2(a,XFa,1);
null!=c&&S2(b,1,c,$Fa);c=U2(a,YFa,2);null!=c&&S2(b,2,c,aGa)},$Fa=function(a,b){var c=g.Gf(a,1);
null!=c&&R2(b,1,c);c=g.Gf(a,2);null!=c&&R2(b,2,c);c=g.Gf(a,3);null!=c&&Q2(b,3,c)},aGa=function(a,b){var c=g.Gf(a,1);
null!=c&&R2(b,1,c);c=g.Gf(a,2);null!=c&&R2(b,2,c);c=g.Gf(a,3);null!=c&&g.vf(b,3,c);c=g.Gf(a,4);null!=c&&Q2(b,4,c)},eGa=function(a,b){var c=g.Mf(a,b3,1);
0<c.length&&T2(b,1,c,cGa);c=U2(a,d3,2);null!=c&&S2(b,2,c,dGa)},cGa=function(a,b){var c=g.Gf(a,1);
null!=c&&R2(b,1,c);c=g.Gf(a,2);null!=c&&g.vf(b,2,c);c=g.Gf(a,3);null!=c&&Q2(b,3,c)},dGa=function(a,b){var c=g.Gf(a,1);
null!=c&&g.yf(b,1,c);c=g.Gf(a,2);null!=c&&g.zf(b,2,c);c=U2(a,PFa,3);null!=c&&S2(b,3,c,SFa)},JFa=function(){},e3=function(a){g.C.call(this);
this.callback=a;this.u=new g.Bn(0,0,.4,0,.2,1,1,1);this.delay=new g.gn(this.next,window,this);this.startTime=this.duration=this.l=this.i=NaN;g.D(this,this.delay)},f3=function(a){g.V.call(this,{D:"div",
J:"ytp-related-on-error-overlay"});var b=this;this.api=a;this.I=this.l=0;this.animationDelay=1E3;this.G=new g.cO(this);this.B=[];this.i=[];this.C=0;this.title=new g.V({D:"h2",J:"ytp-related-title",Y:"{{title}}"});this.previous=new g.V({D:"button",ga:["ytp-button","ytp-previous"],R:{"aria-label":"\u663e\u793a\u4e4b\u524d\u7684\u63a8\u8350\u89c6\u9891"},N:[g.aM()]});this.V=new e3(function(f){b.suggestions.element.scrollLeft=-f});
this.tileWidth=this.u=0;this.K=!0;this.next=new g.V({D:"button",ga:["ytp-button","ytp-next"],R:{"aria-label":"\u663e\u793a\u66f4\u591a\u63a8\u8350\u89c6\u9891"},N:[g.bM()]});g.D(this,this.G);a=a.P();this.U=a.l;g.D(this,this.title);this.title.ca(this.element);this.suggestions=new g.V({D:"div",J:"ytp-suggestions"});g.D(this,this.suggestions);this.suggestions.ca(this.element);g.D(this,this.previous);this.previous.ca(this.element);this.previous.va("click",this.lJ,this);g.D(this,this.V);for(var c=0;16>
c;c++){var d=new g.V({D:"a",J:"ytp-suggestion-link",R:{href:"{{link}}",target:a.C,"aria-label":"{{aria_label}}"},N:[{D:"div",J:"ytp-suggestion-image",N:[{D:"div",R:{"data-is-live":"{{is_live}}"},J:"ytp-suggestion-duration",Y:"{{duration}}"}]},{D:"div",J:"ytp-suggestion-title",R:{title:"{{hover_title}}"},Y:"{{title}}"},{D:"div",J:"ytp-suggestion-author",Y:"{{views_or_author}}"}]});g.D(this,d);d.ca(this.suggestions.element);var e=d.ea("ytp-suggestion-link");g.vg(e,"transitionDelay",c/20+"s");this.G.L(e,
"click",g.Pa(this.mJ,c));this.B.push(d)}g.D(this,this.next);this.next.ca(this.element);this.next.va("click",this.kJ,this);this.G.L(this.api,"videodatachange",this.La);this.resize(this.api.Ga().getPlayerSize());this.La();this.show()},g3=function(a){a.next.element.style.bottom=a.I+"px";
a.previous.element.style.bottom=a.I+"px";var b=a.u,c=a.C-a.i.length*(a.tileWidth+a.l);g.L(a.element,"ytp-scroll-min",0<=b);g.L(a.element,"ytp-scroll-max",b<=c)},fGa=function(a){for(var b=0;b<a.i.length;b++){var c=b,d=a.i[b].Ka();
c=a.B[c];var e=d.shortViewCount?d.shortViewCount:d.author,f=d.yl();g.LC(a.api.P())&&(f=g.Id(f,g.hP("emb_rel_err")));c.element.style.display="";var h=c.ea("ytp-suggestion-title");g.zn.test(d.title)?h.dir="rtl":g.BBa.test(d.title)&&(h.dir="ltr");h=c.ea("ytp-suggestion-author");g.zn.test(e)?h.dir="rtl":g.BBa.test(e)&&(h.dir="ltr");h=d.isLivePlayback?"\u76f4\u64ad":d.lengthSeconds?g.CM(d.lengthSeconds):"";c.update({views_or_author:e,duration:h,link:f,hover_title:d.title,title:d.title,aria_label:d.hq||
null,is_live:d.isLivePlayback});c=c.ea("ytp-suggestion-image");d=d.qe();c.style.backgroundImage=d?"url("+d+")":""}for(;b<a.B.length;b++)a.B[b].element.style.display="none";g3(a)},h3=function(a){g.IO.call(this,a);
var b=this,c=a.P();c=new g.V({D:"a",J:"ytp-small-redirect",R:{href:g.xD(c),target:c.C,"aria-label":"\u8bbf\u95ee YouTube \u4ee5\u641c\u7d22\u66f4\u591a\u89c6\u9891"},N:[{D:"svg",R:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},N:[{D:"path",R:{d:"M0 0h24v24H0V0z",fill:"none"}},{D:"path",R:{d:"M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"}}]}]});
c.ca(this.element);g.D(this,c);this.i=new f3(a);this.i.ca(this.element);g.D(this,this.i);this.L(a,"videodatachange",function(){b.show()});
this.resize(this.api.Ga().getPlayerSize())},gGa=function(a,b){a.ea("ytp-error-content").style.paddingTop="0px";
var c=a.ea("ytp-error-content"),d=c.clientHeight;a.i.resize(b,b.height-d);c.style.paddingTop=(b.height-a.i.element.clientHeight)/2-d/2+"px"},hGa=function(a,b){var c;
b.reason&&(i3(b.reason)?c=g.AG(b.reason):c=g.JO(g.T(b.reason)),a.Bc(c,"content"));var d;b.subreason&&(i3(b.subreason)?d=g.AG(b.subreason):d=g.JO(g.T(b.subreason)),a.Bc(d,"subreason"));if(b.proceedButton&&b.proceedButton.buttonRenderer){var e=b.proceedButton.buttonRenderer;c=a.ea("ytp-error-content-wrap-subreason");d=g.Ce("A");if(e.text&&e.text.simpleText){var f=e.text.simpleText;d.textContent=f;a:{for(var h=(c||document).getElementsByTagName("A"),l=0;l<h.length;l++)if(h[l].textContent===f){f=!0;break a}f=
!1}f||(e.navigationEndpoint&&e.navigationEndpoint.urlEndpoint&&((f=e.navigationEndpoint.urlEndpoint.url)&&d.setAttribute("href",f),(e=e.navigationEndpoint.urlEndpoint.target)&&d.setAttribute("target",e)),c.appendChild(d))}}},i3=function(a){if(a.runs)for(var b=0;b<a.runs.length;b++)if(a.runs[b].navigationEndpoint)return!0;
return!1},j3=function(a,b){g.V.call(this,{D:"a",
ga:["ytp-impression-link"],R:{target:"{{target}}",href:"{{url}}","aria-label":"\u5728 YouTube \u4e0a\u89c2\u770b"},N:[{D:"div",J:"ytp-impression-link-content",R:{"aria-hidden":"true"},N:[{D:"div",J:"ytp-impression-link-text",Y:"\u901a\u8fc7\u4ee5\u4e0b\u5e73\u53f0\u89c2\u770b\uff1a"},{D:"div",J:"ytp-impression-link-logo",N:[W2()]}]}]});this.api=a;this.l=b;this.xa("target",a.P().C);this.api.Fb(this.element,this,96714);this.L(this.api,"presentingplayerstatechange",this.vg);this.L(this.api,"videoplayerreset",
this.i);this.L(this.element,"click",this.onClick);this.i()},k3=function(a){g.V.call(this,{D:"div",
J:"ytp-muted-autoplay-endscreen-overlay",N:[{D:"div",J:"ytp-muted-autoplay-end-panel",N:[{D:"div",J:"ytp-muted-autoplay-end-text",Y:"{{text}}"}]}]});this.api=a;this.u=this.ea("ytp-muted-autoplay-end-panel");this.i=new g.BO(this.api);g.D(this,this.i);this.i.ca(this.u,0);this.api.Fb(this.element,this,52428);this.L(this.api,"presentingplayerstatechange",this.l);this.va("click",this.onClick);this.hide()},l3=function(a){g.V.call(this,{D:"div",
J:"ytp-muted-autoplay-overlay",N:[{D:"div",J:"ytp-muted-autoplay-bottom-buttons",N:[{D:"button",ga:["ytp-muted-autoplay-equalizer","ytp-button"],N:[{D:"div",ga:["ytp-muted-autoplay-equalizer-icon"],N:[{D:"svg",R:{height:"100%",version:"1.1",viewBox:"-4 -4 24 24",width:"100%"},N:[{D:"g",R:{fill:"#fff"},N:[{D:"rect",J:"ytp-equalizer-bar-left",R:{height:"9",width:"4",x:"1",y:"7"}},{D:"rect",J:"ytp-equalizer-bar-middle",R:{height:"14",width:"4",x:"6",y:"2"}},{D:"rect",J:"ytp-equalizer-bar-right",R:{height:"12",
width:"4",x:"11",y:"4"}}]}]}]}]}]}]});this.api=a;this.bottomButtons=this.ea("ytp-muted-autoplay-bottom-buttons");this.ea("ytp-muted-autoplay-equalizer");this.u=new g.I(this.l,4E3,this);a.Fb(this.element,this,39306);this.L(a,"presentingplayerstatechange",this.i);this.L(a,"onMutedAutoplayStarts",this.i);this.va("click",this.onClick);this.hide()},m3=function(a,b){g.V.call(this,{D:"div",
J:"ytp-pause-overlay"});var c=this;this.api=a;this.K=b;this.animationDelay=1E3;this.l=new g.cO(this);this.G=new g.JM(this,1E3,!1,100);this.B=[];this.i=[];this.C=0;this.I=!1;this.ba=0;this.title=new g.V({D:"h2",J:"ytp-related-title",Y:"{{title}}"});this.previous=new g.V({D:"button",ga:["ytp-button","ytp-previous"],R:{"aria-label":"\u663e\u793a\u4e4b\u524d\u7684\u63a8\u8350\u89c6\u9891"},N:[g.aM()]});this.V=new e3(function(m){c.suggestions.element.scrollLeft=-m});
this.Z=this.tileWidth=this.u=0;this.next=new g.V({D:"button",ga:["ytp-button","ytp-next"],R:{"aria-label":"\u663e\u793a\u66f4\u591a\u63a8\u8350\u89c6\u9891"},N:[g.bM()]});this.expandButton=new g.V({D:"button",ga:["ytp-button","ytp-expand"],Y:"\u66f4\u591a\u89c6\u9891"});g.D(this,this.l);g.D(this,this.G);var d=a.P();"0"===d.controlsType&&g.K(a.getRootNode(),"ytp-pause-overlay-controls-hidden");this.U=d.l;g.D(this,this.title);this.title.ca(this.element);this.suggestions=new g.V({D:"div",J:"ytp-suggestions"});
g.D(this,this.suggestions);this.suggestions.ca(this.element);g.D(this,this.previous);this.previous.ca(this.element);this.previous.va("click",this.oJ,this);var e=g.DA||g.yg?{style:"will-change: opacity"}:void 0;g.D(this,this.V);for(var f=0;16>f;f++){var h=new g.V({D:"a",J:"ytp-suggestion-link",R:{href:"{{link}}",target:d.C,"aria-label":"{{aria_label}}"},N:[{D:"div",J:"ytp-suggestion-image"},{D:"div",J:"ytp-suggestion-overlay",R:e,N:[{D:"div",J:"ytp-suggestion-title",Y:"{{title}}"},{D:"div",J:"ytp-suggestion-author",
Y:"{{author_and_views}}"},{D:"div",R:{"data-is-live":"{{is_live}}"},J:"ytp-suggestion-duration",Y:"{{duration}}"}]}]});g.D(this,h);h.ca(this.suggestions.element);var l=h.ea("ytp-suggestion-link");g.vg(l,"transitionDelay",f/20+"s");this.l.L(l,"click",g.Pa(this.pJ,f));this.B.push(h)}g.D(this,this.next);this.next.ca(this.element);this.next.va("click",this.nJ,this);d=new g.V({D:"button",ga:["ytp-button","ytp-collapse"],R:{"aria-label":"\u9690\u85cf\u66f4\u591a\u89c6\u9891"},N:[{D:"svg",R:{height:"100%",
viewBox:"0 0 16 16",width:"100%"},N:[{D:"path",R:{d:"M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",fill:"#fff"}}]}]});g.D(this,d);d.ca(this.element);d.va("click",this.mN,this);g.D(this,this.expandButton);this.expandButton.ca(this.element);this.expandButton.va("click",this.nN,this);this.l.L(this.api,"appresize",this.Pa);this.l.L(this.api,"fullscreentoggled",this.uk);this.l.L(this.api,"presentingplayerstatechange",this.Tb);this.l.L(this.api,"videodatachange",this.La);this.Pa(this.api.Ga().getPlayerSize());
this.La()},n3=function(a){var b=a.K.re()?32:16;
b=a.Z/2+b;a.next.element.style.bottom=b+"px";a.previous.element.style.bottom=b+"px";b=a.u;var c=a.C-a.i.length*(a.tileWidth+8);g.L(a.element,"ytp-scroll-min",0<=b);g.L(a.element,"ytp-scroll-max",b<=c)},iGa=function(a){for(var b=0;b<a.i.length;b++){var c=a.i[b].Ka(),d=a.B[b],e=c.shortViewCount?c.author+" \u2022 "+c.shortViewCount:c.author;
d.element.style.display="";g.ABa.test(c.title)&&(d.ea("ytp-suggestion-title").dir="rtl");g.ABa.test(e)&&(d.ea("ytp-suggestion-author").dir="rtl");var f=c.isLivePlayback?"\u76f4\u64ad":c.lengthSeconds?g.CM(c.lengthSeconds):"";var h=c.yl();g.LC(a.api.P())&&(h=g.Id(h,g.hP("emb_rel_pause")));d.update({author_and_views:e,duration:f,link:h,title:c.title,aria_label:c.hq||null,is_live:c.isLivePlayback});d=d.ea("ytp-suggestion-image");c=c.qe();d.style.backgroundImage=c?"url("+c+")":""}for(;b<a.B.length;b++)a.B[b].element.style.display=
"none";n3(a)},o3=function(a){var b=a.P();
g.V.call(this,{D:"a",ga:["ytp-watermark","yt-uix-sessionlink"],R:{target:b.C,href:"{{url}}","aria-label":g.BK("\u5728 $WEBSITE \u4e0a\u89c2\u770b",{WEBSITE:g.iD(b)}),"data-sessionlink":"feature=player-watermark"},N:[W2()]});this.api=a;this.i=null;this.l=!1;this.state=a.Sa();a.Fb(this.element,this,76758);this.L(a,"videodatachange",this.zA);this.L(a,"videodatachange",this.La);this.L(a,"presentingplayerstatechange",this.qJ);this.L(a,"appresize",this.Pa);b=this.state;this.state!==b&&(this.state=b);this.zA();
this.La();this.Pa(a.Ga().getPlayerSize())},p3=function(a){g.kO.call(this,a);
this.F=a;this.l=new g.cO(this);g.D(this,this.l);this.load()};g.k=X2.prototype;g.k.wQ=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.oo.set(this.CD(c),[new IFa(a)])};
g.k.sD=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];b=this.CD(b);return this.oo.has(b)?this.oo.get(b):void 0};
g.k.eL=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return(b=this.sD(b))&&b.length?b[0]:void 0};
g.k.clear=function(){this.oo.clear()};
g.k.CD=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return b?b.join(","):"key"};g.u(Y2,X2);Y2.prototype.u=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=0;var e=this.eL(c);e&&(d=e.CC);this.wQ(d+a,c)};g.k=KFa.prototype;g.k.NG=function(){var a=this.l.values();a=[].concat(g.la(a)).filter(function(b){return b.oo.size});
a.length&&this.G.flush(a);MFa(a);this.u=0;this.i.enabled&&this.i.stop()};
g.k.uK=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.l.has(a)||this.l.set(a,new Y2(a,c))};
g.k.iJ=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.jJ.apply(this,[a,1].concat(g.la(c)))};
g.k.jJ=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];(e=LFa(this,a))&&e instanceof Y2&&(e.u(b,d),this.i.enabled||this.i.start(),this.u++,this.u>=this.B&&this.NG())};
g.k.tG=function(a,b,c){for(var d=2;d<arguments.length;++d);LFa(this,a)};g.Ra(PFa,g.Af);g.Ra(QFa,g.Af);var OFa=[1];g.Ra(UFa,g.Af);g.Ra(WFa,g.Af);g.Ra(XFa,g.Af);g.Ra(YFa,g.Af);g.Ra($2,g.Af);g.Ra(b3,g.Af);g.Ra(d3,g.Af);var TFa=[3,6,4],VFa=[[1,2]],ZFa=[1],a3=[[1,2,3]],c3=[[1,2,3]];JFa.prototype.flush=function(a){a=void 0===a?[]:a;if(g.Ro("enable_client_streamz_web")){a=g.q(a);for(var b=a.next();!b.done;b=a.next()){b=b.value;var c=new UFa;c=g.If(c,1,b.l);for(var d=b,e=[],f=0;f<d.i.length;f++)e.push(d.i[f].WK);c=g.If(c,3,e||[]);d=[];e=[];f=g.q(b.oo.keys());for(var h=f.next();!h.done;h=f.next())e.push(h.value.split(","));for(f=0;f<e.length;f++){h=e[f];var l=b.B;for(var m=b.sD(h)||[],n=[],p=0;p<m.length;p++){var r=m[p];r=r&&r.CC;var t=new d3;switch(l){case 3:V2(t,1,c3[0],Number(r));
break;case 2:V2(t,2,c3[0],Number(r))}n.push(t)}l=n;for(m=0;m<l.length;m++){p=l[m];n=new $2;n.i||(n.i={});r=p?g.Nf(p):p;n.i[2]=p;n=g.If(n,2,r);p=h;r=[];t=b;for(var w=[],x=0;x<t.i.length;x++)w.push(t.i[x].XK);t=w;for(w=0;w<t.length;w++){x=t[w];var y=p[w],F=new b3;switch(x){case 3:V2(F,1,a3[0],String(y));break;case 2:V2(F,2,a3[0],Number(y));break;case 1:V2(F,3,a3[0],"true"==y)}r.push(F)}HFa(n,1,r);d.push(n)}}HFa(c,4,d);d=b=new g.tf;e=g.Gf(c,1);null!=e&&R2(d,1,e);e=g.Gf(c,5);null!=e&&FFa(d,5,e);e=U2(c,
WFa,2);null!=e&&S2(d,2,e,bGa);e=g.Gf(c,3);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)R2(d,3,e[f]);e=g.Gf(c,6);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)FFa(d,6,e[f]);e=g.Mf(c,$2,4);0<e.length&&T2(d,4,e,eGa);b=g.uf(b);b={serializedIncrementBatch:g.pf(b)};g.Tr("streamzIncremented",b)}}};var Z2;g.u(e3,g.C);e3.prototype.start=function(a,b,c){this.i=a;this.l=b;this.duration=c;this.startTime=(0,g.N)();this.next()};
e3.prototype.next=function(){var a=(0,g.N)()-this.startTime;var b=this.u;a=GFa(b,a/this.duration);if(0==a)b=b.C;else if(1==a)b=b.K;else{var c=g.ae(b.C,b.G,a),d=g.ae(b.G,b.I,a);b=g.ae(b.I,b.K,a);c=g.ae(c,d,a);d=g.ae(d,b,a);b=g.ae(c,d,a)}b=g.Zd(b,0,1);this.callback((this.l-this.i)*b+this.i);1>b&&this.delay.start()};g.u(f3,g.V);g.k=f3.prototype;g.k.hide=function(){this.K=!0;g.V.prototype.hide.call(this)};
g.k.show=function(){this.K=!1;g.V.prototype.show.call(this)};
g.k.isHidden=function(){return this.K};
g.k.kJ=function(){this.scrollTo(this.u-this.C)};
g.k.lJ=function(){this.scrollTo(this.u+this.C)};
g.k.mJ=function(a,b){var c=this.i[a],d=c.zd;g.DO(b,this.api,this.U,d||void 0)&&this.api.Fi(c.Ka().videoId,d,c.getPlaylistId())};
g.k.resize=function(a,b){var c=this.api.P(),d=16/9,e=650<=a.width,f=480>a.width||290>a.height,h=Math.min(this.i.length,this.B.length);if(150>=Math.min(a.width,a.height)||0===h||!c.ib)this.hide();else{var l;if(e){var m=l=28;this.l=16}else this.l=m=l=8;if(f){var n=6;e=14;var p=12;f=24;c=12}else n=8,e=18,p=16,f=36,c=16;l=a.width-(48+l+m);m=Math.ceil(l/150);m=Math.min(3,m);m=l/m-this.l;var r=Math.floor(m/d);b&&r+100>b&&50<m&&(r=Math.max(b,50/d),m=Math.ceil(l/(d*(r-100)+this.l)),m=l/m-this.l,r=Math.floor(m/
d));50>m||g.YN(this.api)?this.hide():this.show();for(d=0;d<h;d++){var t=this.B[d],w=t.ea("ytp-suggestion-image");w.style.width=m+"px";w.style.height=r+"px";t.ea("ytp-suggestion-title").style.width=m+"px";t.ea("ytp-suggestion-author").style.width=m+"px";t=t.ea("ytp-suggestion-duration");t.style.display=t&&100>m?"none":""}h=e+n+p+4;this.I=h+c+(r-f)/2;this.suggestions.element.style.height=r+h+"px";this.tileWidth=m;this.C=l;this.u=0;this.suggestions.element.scrollLeft=-0;g3(this)}};
g.k.La=function(){var a=this,b=this.api.getVideoData(),c=this.api.P();this.U=b.C?!1:c.l;if(b.suggestions){var d=g.He(b.suggestions,function(e){return e&&!e.list});
this.i=g.Jc(d,function(e){e=g.$Q(c,e);g.D(a,e);return e})}else this.i.length=0;
fGa(this);b.C?this.title.update({title:g.BK("\u6765\u81ea\u201c$DNI_RELATED_CHANNEL\u201d\u9891\u9053\u7684\u66f4\u591a\u89c6\u9891",{DNI_RELATED_CHANNEL:b.author})}):this.title.update({title:"\u66f4\u591a YouTube \u89c6\u9891"})};
g.k.scrollTo=function(a){a=g.Zd(a,this.C-this.i.length*(this.tileWidth+this.l),0);this.V.start(this.u,a,this.animationDelay);this.u=a;g3(this)};g.u(h3,g.IO);h3.prototype.show=function(){g.IO.prototype.show.call(this);gGa(this,this.api.Ga().getPlayerSize())};
h3.prototype.resize=function(a){g.IO.prototype.resize.call(this,a);gGa(this,a);g.L(this.element,"related-on-error-overlay-visible",!this.i.isHidden())};
h3.prototype.l=function(a){g.IO.prototype.l.call(this,a);var b=this.api.getVideoData();if(g.Q(this.api.P().experiments,"embed_parse_error_renderer_killswitch")||!b.BH&&!b.playerErrorMessageRenderer){var c;a.aj&&(b.em?i3(b.em)?c=g.AG(b.em):c=g.JO(g.T(b.em)):c=g.JO(a.aj),this.Bc(c,"subreason"))}else(a=b.BH)?hGa(this,a):b.playerErrorMessageRenderer&&hGa(this,b.playerErrorMessageRenderer)};g.u(j3,g.V);j3.prototype.vg=function(){this.api.Sa().isCued()||(this.hide(),this.api.Ma(this.element,!1))};
j3.prototype.i=function(){var a=this.api.getVideoData(),b=this.api.P(),c=this.api.getVideoData().C,d=b.Gb;b=!b.ib;var e=this.l.Je();d||e||c||b||!a.videoId?(this.hide(),this.api.Ma(this.element,!1)):(a=g.Id(this.api.getVideoUrl(),g.hP("emb_imp_woyt")),this.xa("url",a),this.show())};
j3.prototype.onClick=function(a){var b=g.Id(this.api.getVideoUrl(),g.hP("emb_imp_woyt"));g.EO(b,this.api,a);this.api.sb(this.element)};
j3.prototype.show=function(){this.api.Sa().isCued()&&(g.V.prototype.show.call(this),this.api.gr(this.element)&&this.api.Ma(this.element,!0))};g.u(k3,g.V);k3.prototype.l=function(){var a=this.api.Sa(),b=this.api.getVideoData();g.Q(this.api.P().experiments,"embeds_enable_muted_autoplay")&&b.mutedAutoplay&&(g.U(a,2)&&!this.Xa?(this.show(),this.i.show(),a=this.api.getVideoData(),this.xa("text",a.PA),g.L(this.element,"ytp-muted-autoplay-show-end-panel",!0),this.api.Ma(this.element,this.Xa),this.api.ra("onMutedAutoplayEnds")):this.hide())};
k3.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;g.BI(a);this.api.loadVideoById(a.videoId,b);this.api.sb(this.element);this.hide()};g.u(l3,g.V);l3.prototype.i=function(){var a=this.api.Sa(),b=this.api.getVideoData();g.Q(this.api.P().experiments,"embeds_enable_muted_autoplay")&&b.mutedAutoplay&&!g.U(a,2)?this.Xa||(g.V.prototype.show.call(this),this.u.start(),this.api.Ma(this.element,this.Xa)):this.hide()};
l3.prototype.l=function(){g.L(this.element,"ytp-muted-autoplay-hide-watermark",!0)};
l3.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;g.BI(a);this.api.loadVideoById(a.videoId,b);this.api.sb(this.element)};g.u(m3,g.V);g.k=m3.prototype;g.k.hide=function(){g.rn(this.api.getRootNode(),"ytp-expand-pause-overlay");g.V.prototype.hide.call(this)};
g.k.mN=function(){this.I=!0;g.rn(this.api.getRootNode(),"ytp-expand-pause-overlay");this.expandButton.focus()};
g.k.nN=function(){this.I=!1;g.K(this.api.getRootNode(),"ytp-expand-pause-overlay")};
g.k.nJ=function(){this.scrollTo(this.u-this.C)};
g.k.oJ=function(){this.scrollTo(this.u+this.C)};
g.k.pJ=function(a,b){if(1E3>(0,g.N)()-this.ba)g.ip(b),document.activeElement.blur();else{var c=this.i[a],d=c.zd;g.DO(b,this.api,this.U,d||void 0)&&this.api.Fi(c.Ka().videoId,d,c.getPlaylistId())}};
g.k.uk=function(){this.Pa(this.api.Ga().getPlayerSize())};
g.k.Tb=function(a){if(!(g.U(a.state,1)||g.U(a.state,16)||g.U(a.state,32))){var b=!g.Q(this.api.P().experiments,"embeds_disable_pauseoverlay_on_autoplay_blocked_killswitch")&&g.U(a.state,2048);!g.U(a.state,4)||g.U(a.state,2)||b?this.G.hide():this.i.length&&(this.I||(g.K(this.api.getRootNode(),"ytp-expand-pause-overlay"),n3(this)),this.G.show(),this.ba=(0,g.N)())}};
g.k.Pa=function(a){var b=16/9,c=this.K.re();a=a.width-(c?112:58);c=Math.ceil(a/(c?320:192));c=(a-8*c)/c;b=Math.floor(c/b);for(var d=0;d<this.B.length;d++){var e=this.B[d].ea("ytp-suggestion-image");e.style.width=c+"px";e.style.height=b+"px"}this.suggestions.element.style.height=b+"px";this.tileWidth=c;this.Z=b;this.C=a;this.u=0;this.suggestions.element.scrollLeft=-0;n3(this)};
g.k.La=function(){var a=this,b=this.api.P(),c=this.api.getVideoData();this.U=c.C?!1:b.l;if(c.suggestions){var d=g.He(c.suggestions,function(e){return e&&!e.list});
this.i=g.Jc(d,function(e){e=g.$Q(b,e);g.D(a,e);return e})}else this.i.length=0;
iGa(this);c.C?this.title.update({title:g.BK("\u6765\u81ea\u201c$DNI_RELATED_CHANNEL\u201d\u9891\u9053\u7684\u66f4\u591a\u89c6\u9891",{DNI_RELATED_CHANNEL:c.author})}):this.title.update({title:"\u66f4\u591a\u89c6\u9891"})};
g.k.scrollTo=function(a){a=g.Zd(a,this.C-this.i.length*(this.tileWidth+8),0);this.V.start(this.u,a,this.animationDelay);this.u=a;n3(this)};g.u(o3,g.V);g.k=o3.prototype;g.k.zA=function(){var a=this.api.getVideoData(),b=this.api.getVideoData(1).C,c=this.api.P();a=(a.mutedAutoplay||c.Gb&&!g.U(this.state,2))&&!(b&&c.pfpChazalUi);g.XL(this,a);this.api.Ma(this.element,a)};
g.k.qJ=function(a){a=a.state;this.state!==a&&(this.state=a);this.zA()};
g.k.La=function(){if(this.api.getVideoData().videoId){var a=this.api.getVideoUrl(!0,!1,!1,!0);this.xa("url",a);this.i||(this.i=this.va("click",this.onClick))}else this.i&&(this.xa("url",null),this.Db(this.i),this.i=null)};
g.k.onClick=function(a){var b=this.api.getVideoUrl(!g.DM(a),!1,!0,!0);g.EO(b,this.api,a);this.api.sb(this.element)};
g.k.Pa=function(a){if((a=480>a.width)&&!this.l||!a&&this.l){var b=new g.V(W2()),c=this.ea("ytp-watermark");g.L(c,"ytp-watermark-small",a);g.Ee(c);b.ca(c);this.l=a}};g.u(p3,g.kO);g.k=p3.prototype;g.k.xi=function(){return!1};
g.k.create=function(){var a=this.F.P(),b=g.RN(this.F);a.ib&&(this.C=new m3(this.F,b),g.D(this,this.C),g.aO(this.F,this.C.element,4));g.Q(a.experiments,"embeds_enable_muted_autoplay")&&(this.i=new l3(this.F),g.D(this,this.i),g.aO(this.F,this.i.element,4),this.B=new k3(this.F),g.D(this,this.B),g.aO(this.F,this.B.element,4));if(a.Gb||this.i)this.watermark=new o3(this.F),g.D(this,this.watermark),g.aO(this.F,this.watermark.element,7);g.Q(a.experiments,"embeds_impression_link")&&(this.u=new j3(this.F,b),
g.D(this,this.u),g.aO(this.F,this.u.element,7));this.l.L(this.F,"appresize",this.Pa);this.l.L(this.F,"presentingplayerstatechange",this.vg);this.l.L(this.F,"videodatachange",this.gR);this.l.L(this.F,"onMutedAutoplayStarts",this.eO);this.qb(this.F.Sa());this.player.cd("embed");g.Q(a.experiments,"enable_cookie_reissue_iframe")&&a.Cf&&!g.Uq("__Secure-3PAPISID")&&(a=a.deviceParams.c,a=void 0===a?"WEB":a,(new NFa).i.iJ("/client_streamz/youtube/web/debug/third_party_apisid_cookie_reissue_iframe",a),a=g.Ce("IFRAME"),
a.src="/signin?go=true",a.style.display="none",document.body.appendChild(a))};
g.k.Pa=function(){var a=this.F.Ga().getPlayerSize();this.Nd&&this.Nd.resize(a)};
g.k.vg=function(a){this.qb(a.state)};
g.k.qb=function(a){g.U(a,128)?(this.Nd||(this.Nd=new h3(this.F),g.D(this,this.Nd),g.aO(this.F,this.Nd.element,4)),this.Nd.l(a.getData()),this.Nd.show(),g.K(this.F.getRootNode(),"ytp-embed-error")):this.Nd&&(this.Nd.dispose(),this.Nd=null,g.rn(this.F.getRootNode(),"ytp-embed-error"))};
g.k.eO=function(){this.F.getVideoData().mutedAutoplay&&this.i&&this.watermark&&this.watermark.ca(this.i.bottomButtons,0)};
g.k.gR=function(){var a=this.F.getVideoData();this.watermark&&this.i&&!a.mutedAutoplay&&g.Je(this.i.element,this.watermark.element)&&g.aO(this.F,this.watermark.element,7)};g.qO.embed=p3;})(_yt_player);
