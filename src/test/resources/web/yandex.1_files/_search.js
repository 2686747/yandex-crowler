function logAction(t,e){for(var i,n,s=t[0]?t[0]:t.domElem?t.domElem[0]:t,o=[];s&&"#document"!==s.nodeName;){
i=s.getAttribute("data-log-node"),i&&(i=JSON.parse(i),i.attrs&&i.attrs.behaviour&&i.attrs.behaviour.click&&(i.attrs.behaviour.click.url=i.attrs.behaviour.click.url||s.href),
o.unshift(i));var r=s.getAttribute("data-log-tree-portal-bottom");if(r){var a=document.querySelector(".log-tree-portal-top-"+r);
if(!a)throw Error("invalid data-log-tree-portal-top id");s=a}else s=s.parentNode}o.length&&(n={event:e,
path:o},sendTreeToLog(t,n))}function sendTreeToLog(t,e){if(e){var i=window.BEM&&BEM.blocks["i-global"].param("clck")||(document.body.onclick||document.body.ondblclick)()["i-global"].clck;
document.createElement("IMG").src=i+"/events="+encodeURIComponent(JSON.stringify([e]))+"/cts="+(new Date).getTime()+"/*";
}}if(_borschik("b39XLLeCoGEmKKAZydlkF6zwuU0")){var BEMHTML;!function(t){var e=function(t,e){var i=function(){
function t(t){return t._mode=n,t.block=s,t.elem=o,t.elemMods=r,t.mods=a,t}function i(t,e){var i=n;n=e._mode;
var c=s;s=e.block;var h=o;o=e.elem;var u=r;r=e.elemMods;var l=a;a=e.mods;var d=t(e);return n=i,s=c,o=h,
r=u,a=l,d}var n,s,o,r,a,c,h={},u=function(h){function u(t){var e=n;if(""===e)return l(t);if("mix"===e)return pt(t);
if("js"===e)return _t(t);if("content"===e)return bt(t);if("bem"===e)return wt(t);if("default"===e)return O(t);
if("format-value"===e)return"notice"===s&&"value"===o?Pt(t):Rt(t);if("getLive"===e)return"input"===s&&!!o==!1?It(t):Rt(t);
if("live"===e)return"input"===s&&!!o==!1?Tt(t):Rt(t);if("public-params"===e){if("i-global"===s){var e=o;
return"areScriptsAsync"===e||"geoanswer"===e||"isCounterHeights"===e||"serpRequestExtraParams"===e||"pid"===e||"isPageLoadCounter"===e||"ajaxUrl"===e||"framebuster"===e||"shownResult"===e||"pg"===e||"nahodki"===e||"isCounterSerpview"===e||"tld"===e||"pref-ajax"===e||"reqid"===e||"maxAjaxUrlLength"===e||"query"===e||"lr"===e?!0:!o==!1?{
id:1,lang:1,tld:1,"content-region":1,"user-region":1,login:1,displayName:1,index:1,yandexuid:1,"passport-host":1,
"pass-host":1,"passport-msg":1,"static-host":1,"lego-static-host":1,"social-host":1,clck:1,"click-host":1,
"export-host":1,"i-host":1,"social-retpath":1,"lego-path":1,sid:1,retpath:1,uid:1}[o]||!1:Rt(t)}return Rt(t);
}if("env"===e)return"i-global"===s?Ot(t):Rt(t);if("tag"===e)return P(t);if("jsAttr"===e)return At(t);if("attrs"===e)return _(t);
if("cls"===e)return jt(t);if("value"===e){var e=s;return"tumbler"===e?"option"===o?Bt(t):Rt(t):"input"===e?St(t):Rt(t);
}return Rt(t)}function l(t){if(!(t.__$anflg67!==!0)==!1){if(!!t.require==!1){var i,n,s,o;return i=t.__$anflg67,
t.__$anflg67=!0,s=t.require,t.require=function(t){return e[t]},o=l(t),t.require=s,n=o,t.__$anflg67=i,
n}return d(t)}return d(t)}function d(t){if(!!t.hasOwnProperty("ctx")==!1)throw Error("Seems like you have no base templates from i-bem__html.bemhtml");
return"popup"===s&&!t._popupDefaults==!1&&!!o==!1?(delete t._popupDefaults,void Wt(t)):p(t)}function p(t){
return!(t.__$anflg36!==!0)==!1&&!!t["i-global"]==!1?f(t):Rt(t)}function f(t){for(var e,i,r,a,c,h,u,d,p={},f=["lang","tld","content-region","click-host","passport-host","pass-host","social-host","export-host","login","lego-static-host"];d=f.shift();)p[d]=(e=n,
n="default",i=s,s="i-global",r=o,o=d,a=lt(t),n=e,s=i,o=r,a);var _=(c=n,n="env",h=s,s="i-global",u=Ot(t),
n=c,s=h,u),m=t.__$anflg36;t.__$anflg36=!0;var g=t["i-global"];t["i-global"]=t.extend(p,_),l(t),t["i-global"]=g,
t.__$anflg36=m}function _(t){var e=s;if("b-icon"===e){if(!!o==!1){var i,n=t.ctx,c={src:"//yastatic.net/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif",
alt:""},h=["alt","width","height"];for(n.url&&(c.src=n.url);i=h.shift();)n[i]&&(c[i]=n[i]);return c}return D(t);
}if("select"===e){var e=o;return"group"===e?{role:"group","aria-labelledby":t._labelId}:"item"===e?m(t):"list"===e?g(t):D(t);
}if("suggest2-item"===e){var e=o;return"link"===e?{href:t.ctx.url,target:t.ctx.target}:"bullet"===e?{
"aria-hidden":!0}:D(t)}if("tumbler"===e){var e=o;if("sticker"===e)return b(t);if("text"===e)return v(t);
if("input"===e){var u,l=r.side;return u="left"===l?t._checked?void 0:"checked":t._checked,{type:"radio",
name:t.ctx.name,value:t.ctx.value,checked:u,disabled:t.ctx.disabled,"aria-labelledby":"left"===l?t._leftId:t._rightId
}}return"button"===e?y(t):D(t)}if("link"===e)return k(t);if("notice"===e)return"count"===o&&!t.ctx.url==!1?{
href:t.ctx.url}:w(t);if("button"===e)return x(t);if("input"===e){var e=o;if("hint"===e)return{id:t._hintId,
"for":t._inputId,"aria-hidden":!0};if("control"===e){var d=t.extend({id:t._inputId,name:t._name,placeholder:t._placeholder
},t.ctx.controlAttrs);return(t._value||0===t._value)&&(d.value=t._value),a.disabled&&(d.disabled="disabled"),
t._live&&(d.autocomplete="off"),d["aria-labelledby"]=t._labelId+" "+t._hintId,d}return D(t)}return D(t);
}function m(t){if(!(t.__$anflg65!==!0)==!1){var e,i,n=(e=t.__$anflg65,t.__$anflg65=!0,i=m(t),t.__$anflg65=e,
i||{});return n.role="option",n}return{id:t.generateId()}}function g(t){if(!(t.__$anflg64!==!0)==!1){
var e,i,n=(e=t.__$anflg64,t.__$anflg64=!0,i=g(t),t.__$anflg64=e,i||{});return n.role="select",n}return D(t);
}function b(t){if(!(t.__$anflg54!==!0)==!1){var e,i,n=(e=t.__$anflg54,t.__$anflg54=!0,i=b(t),t.__$anflg54=e,
i||{});return n["aria-hidden"]=!0,n}return D(t)}function v(t){if(!(t.__$anflg53!==!0)==!1){var e,i,n=(e=t.__$anflg53,
t.__$anflg53=!0,i=v(t),t.__$anflg53=e,i||{});return side=r.side,n.id="left"===side?t._leftId:t._rightId,
n["aria-hidden"]=!0,n}return D(t)}function y(t){if(!(t.__$anflg50!==!0)==!1){if(!t._sideId==!1){var e,i,n=(e=t.__$anflg50,
t.__$anflg50=!0,i=y(t),t.__$anflg50=e,i||{});return n["aria-labelledby"]=t._sideId,n}return D(t)}return D(t);
}function k(t){if(!(t.__$anflg45!==!0)==!1){if(!!o==!1){var e,i,n=(e=t.__$anflg45,t.__$anflg45=!0,i=k(t),
t.__$anflg45=e,i||{}),s=t.ctx;return s.counter&&(n.onmousedown=s.counter),n}return E(t)}return E(t)}function E(t){
return!!o==!1?M(t):D(t)}function M(t){var e=t.ctx,i=e.url,s={};if(["title","target","id","tabindex"].forEach(function(t){
e[t]&&(s[t]=e[t])}),i)if(t.isSimple(i))s.href=i;else{var o=[],r=n;n="";var a=t._buf;t._buf=o;var c=t.ctx;
t.ctx=i,l(t),n=r,t._buf=a,t.ctx=c,s.href=o.join("")}else s.role="button",s.tabindex||(s.tabindex=0);return s;
}function w(t){return!!o==!1?{role:"alert","aria-live":"assertive","aria-atomic":!0}:D(t)}function x(t){
if(!(t.__$anflg44!==!0)==!1){if(!t.ctx.counter==!1){if(!!o==!1){var e,i;return t.extend((e=t.__$anflg44,
t.__$anflg44=!0,i=x(t),t.__$anflg44=e,i),{onmousedown:t.ctx.counter})}return B(t)}return B(t)}return B(t);
}function B(t){if(!(t.__$anflg43!==!0)==!1){if(!!o==!1){if(!!t.ctx.url==!1){var e,i,n=t.ctx,s=(e=t.__$anflg43,
t.__$anflg43=!0,i=x(t),t.__$anflg43=e,i),r={type:n.type||"button",name:n.name,value:n.value};return t.extend(s,r);
}return S(t)}return S(t)}return S(t)}function S(t){if(!(t.__$anflg42!==!0)==!1){if(!t.ctx.url==!1){if(!!o==!1){
var e,i,n=t.ctx,s=(e=t.__$anflg42,t.__$anflg42=!0,i=x(t),t.__$anflg42=e,i),r={href:n.url,target:n.target
};return t.extend(s,r)}return C(t)}return C(t)}return C(t)}function C(t){if(!!o==!1){var e=t.ctx,i={role:"button"
};return i.tabindex=e.tabindex,i}return D(t)}function D(t){}function P(t){var e=s;if("b-icon"===e)return!!o==!1?"img":T(t);
if("select"===e){var e=o;return"text"===e?"span":"option-group"===e?"optgroup":"option"===e?"option":!!o==!1?"span":T(t);
}if("suggest2-item"===e){var e=o;return"text"===e?!(r&&"green-url"===r.type)==!1?"div":!(r&&"title-url"===r.type)==!1?"div":t.ctx.tag||"span":"thumb-img"===e?"img":"icon"===e?"span":"link"===e?"a":"bullet"===e?"span":"highlight"===e?"b":"fact"===e?"span":!!o==!1?"li":T(t);
}if("suggest2"===e){var e=o;return"a11y"===e?"span":"items"===e?"ul":T(t)}if("tumbler"===e){var e=o;return"input"===e?"input":"label"===e?"label":"box"===e?"span":!!o==!1?"span":T(t);
}if("link"===e)return"inner"===o?"span":!!o==!1?t.ctx.url?"a":"span":T(t);if("notice"===e){var e=o;return"value"===e?"span":"count"===e?!t.ctx.url==!1?"a":"span":!!o==!1?"span":T(t);
}if("button"===e)return!t.ctx.url==!1&&!!o==!1?"a":I(t);if("input"===e){var e=o;return"box"===e?"span":"hint"===e?"label":"control"===e?"input":"ahead-hint"===e||"ahead-filler"===e?"span":!!o==!1?"span":T(t);
}return T(t)}function I(t){return!!o==!1?"button":T(t)}function T(t){}function O(t){var e=s;if("select"===e)return A(t);
if("suggest2-item"===e){var e=o;return"img"===e?$(t):"icon"===e?z(t):"fact"===e?K(t):Rt(t)}return"popup"===e?G(t):"chrome-webstore-popup"===e?!(t.__$anflg55!==!0)==!1&&!!o==!1?Y(t):Rt(t):"tumbler"===e?X(t):"button"===e?ot(t):"input"===e?rt(t):"i-global"===e?lt(t):Rt(t);
}function A(t){return"group"===o?j(t):R(t)}function j(t){if(!(t.__$anflg66!==!0)==!1){var e=t.__$anflg66;
t.__$anflg66=!0;var i=t._labelId;return t._labelId=t.generateId(),j(t),t._labelId=i,void(t.__$anflg66=e);
}return R(t)}function R(t){return!(t.__$anflg62!==!0&&t.__$anflg63!==!0)==!1&&!!o==!1?L(t):N(t)}function L(t){
var e,i,s,o,r,a,c,h=t.ctx,u=(e=n,n="js",i=mt(t),n=e,i||{}).live;if(u){var l=h.content.filter(function(t){
return"control"===t.elem})[0].content;if(l.length){var d=function(t){for(var e,i,n=0;n<t.length&&(e=t[n],
"option"===e.elem&&Object(e.attrs).selected?i=e:"option-group"===e.elem&&(i=d(e.content)),!i);n++);return i;
},p=d(l);return p||(p=l[0],"option-group"===p.elem&&(p=p.content[0])),s=t.__$anflg62,t.__$anflg62=!0,
r=t._initValue,t._initValue=p.attrs.value,a=t._initText,t._initText=p.content,c=A(t),t._initValue=r,t._initText=a,
o=c,t.__$anflg62=s,o}}var f=t.__$anflg63;t.__$anflg63=!0,A(t),t.__$anflg63=f}function N(t){return!(t.__$anflg61!==!0)==!1&&!!o==!1?q(t):Rt(t);
}function q(t){var e=t.ctx,i=e.id||t.generateId(),n=t.__$anflg61;t.__$anflg61=!0;var o=t._controlAttrs;
t._controlAttrs={id:i,name:e.name||i};var r=t._formSelect;t._formSelect={block:s,mods:a,tabindex:e.tabindex
},A(t),t._controlAttrs=o,t._formSelect=r,t.__$anflg61=n}function $(t){return!(t.__$anflg60!==!0)==!1?F(t):Rt(t);
}function F(t){var e=t.ctx.attrs||{};t.ctx.src&&(e.style="background-image: url('"+t.ctx.src+"');"+(e.style||""));
var i=t.__$anflg60;t.__$anflg60=!0;var n=t.ctx,s=n.attrs;n.attrs=e,$(t),n.attrs=s,t.__$anflg60=i}function z(t){
return!(t.__$anflg59!==!0)==!1&&!r.weather==!1?V(t):H(t)}function V(t){var e=r.weather.replace("-","minus-").replace("+","plus-").replace(/_/g,"-"),i=t.__$anflg59;
t.__$anflg59=!0;var n=t.ctx,s=n.autoType;n.autoType="weather."+e+".";var o=r,a=o.weather;o.weather=e,
z(t),n.autoType=s,o.weather=a,t.__$anflg59=i}function H(t){if(!(t.__$anflg58!==!0)==!1){if(!r.traffic==!1){
var e=t.__$anflg58;t.__$anflg58=!0;var i=t.ctx,n=i.autoType;return i.autoType="traffic."+r.traffic+".",
z(t),i.autoType=n,void(t.__$anflg58=e)}return U(t)}return U(t)}function U(t){return!(t.__$anflg57!==!0)==!1?W(t):Rt(t);
}function W(t){var e=BEM.blocks["suggest2-detect"]&&BEM.blocks["suggest2-detect"].isSupportInlineSVG()?"svg":"png";
t.ctx.autoType&&(t.ctx[e]="//yastatic.net/suggest-flag-icons/icon."+t.ctx.autoType+e);var i=t.ctx.png&&t.ctx.svg?t.ctx[e]:t.ctx.svg||t.ctx.png;
i&&(t.ctx.attrs=t.extend(Object(t.ctx.attrs),{style:'background-image:url("'+i+'");'+(Object(t.ctx.attrs).style||"")
}));var n=t.__$anflg57;t.__$anflg57=!0,z(t),t.__$anflg57=n}function K(t){if(!(t.__$anflg56!==!0)==!1){
if(!t.ctx.color==!1){t.ctx.attrs=t.extend(Object(t.ctx.attrs),{style:";color:"+t.ctx.color+";"+(Object(t.ctx.attrs).style||"")
});var e=t.__$anflg56;return t.__$anflg56=!0,K(t),void(t.__$anflg56=e)}return Rt(t)}return Rt(t)}function G(t){
return!!t._popupDefaults==!1&&!!o==!1?Q(t):Rt(t)}function Q(t){var e=t.ctx;if(e.mods=a=t.extend({theme:"ffffff",
autoclosable:"yes",adaptive:"yes",animate:"yes"},a),e.zIndex){var i=e.attrs||(e.attrs={});i.style=(i.style||"")+";z-index:"+e.zIndex+";";
}var n=t._popupDefaults;t._popupDefaults=!0,G(t),t._popupDefaults=n}function Y(t){var e,i,s,o,r;return e=t.__$anflg55,
t.__$anflg55=!0,s=t.ctx,t.ctx={block:"popup",js:{directions:"bottom-left"},mods:{type:"modal",position:"fixed",
animate:"yes",autoclosable:"no",inline:t.ctx.mods&&t.ctx.mods.inline},mix:{block:"chrome-webstore-popup",
mods:t.ctx.mods,js:t.ctx.js},content:[{elem:"content",mix:{block:"chrome-webstore-popup",elem:"content"
},content:t.ctx.content},{elem:"close",content:[{elem:"close-text",content:BEM.I18N("chrome-webstore-popup","Закрыть окно")
},{elem:"close-elem",tag:"i"}]}]},o=n,n="",r=l(t),t.ctx=s,n=o,i=r,t.__$anflg55=e,i}function X(t){if("option"===o){
if("left"===t.ctx.side){if(!(t.__$anflg52!==!0)==!1){var e=t.__$anflg52;t.__$anflg52=!0;var i=t.ctx;t.ctx=[t.ctx,{
elem:"box"}];var s=n;return n="",l(t),t.ctx=i,n=s,void(t.__$anflg52=e)}return J(t)}return J(t)}return tt(t);
}function J(t){return!(t.__$anflg51!==!0)==!1?Z(t):tt(t)}function Z(t){var e,i,s=(e=n,n="value",i=Bt(t),
n=e,i),o=t.__$anflg51;t.__$anflg51=!0;var r=t.ctx;t.ctx={elem:"label",content:[{elem:"input",name:t._name,
value:s,disabled:t._disabled,elemMods:{side:t.ctx.side}},{elem:"text",tag:"span",elemMods:{side:t.ctx.side
},content:t.ctx.content}]};var a=n;n="",l(t),t.ctx=r,n=a,t.__$anflg51=o}function tt(t){if("yes"===(t.ctx.mods||{}).disabled){
if(!(t.__$anflg49!==!0)==!1){if(!!o==!1){var e=t.__$anflg49;t.__$anflg49=!0;var i=t._disabled;return t._disabled="disabled",
X(t),t._disabled=i,void(t.__$anflg49=e)}return et(t)}return et(t)}return et(t)}function et(t){if("yes"===(t.ctx.mods||{}).checked){
if(!(t.__$anflg48!==!0)==!1){if(!!o==!1){var e=t.__$anflg48;t.__$anflg48=!0;var i=t._checked;return t._checked="checked",
X(t),t._checked=i,void(t.__$anflg48=e)}return it(t)}return it(t)}return it(t)}function it(t){if(!(t.__$anflg47!==!0)==!1){
if(!!o==!1){if(!!(t.ctx.mods||{}).theme==!1){var e=t.__$anflg47;t.__$anflg47=!0;var i=t.ctx,n=i.mods;return i.mods=t._.extend(t.ctx.mods||{},{
theme:"normal"}),X(t),i.mods=n,void(t.__$anflg47=e)}return nt(t)}return nt(t)}return nt(t)}function nt(t){
return!(t.__$anflg46!==!0)==!1&&!!o==!1?st(t):Rt(t)}function st(t){var e=t.generateId(),i="left"+e,n="right"+e,s=null,o=t.ctx.content;
o&&o.length>0&&(s="left"===t.ctx.content[0].side?i:n);var r=t.__$anflg46;t.__$anflg46=!0;var a=t._name;
t._name=t.ctx.name||(t.ctx.name=e);var c=t._leftId;t._leftId=i;var h=t._rightId;t._rightId=n;var u=t._sideId;
t._sideId=s,X(t),t._name=a,t._leftId=c,t._rightId=h,t._sideId=u,t.__$anflg46=r}function ot(t){if(!(t.__$anflg41!==!0)==!1){
if(!!o==!1){t.ctx.mods=t.extend({theme:"normal"},t.ctx.mods);var e=t.__$anflg41;return t.__$anflg41=!0,
ot(t),void(t.__$anflg41=e)}return Rt(t)}return Rt(t)}function rt(t){var e=o;return"hint"===e?at(t):"control"===e&&!(t.__$anflg38!==!0)==!1?ct(t):ht(t);
}function at(t){if(!(t.__$anflg39!==!0)==!1){if(!!t._value==!1){if(!(0!==t._value)==!1){var e=t.ctx,i=e.elemMods||(e.elemMods={});
i.visibility="visible";var n=t.__$anflg39;return t.__$anflg39=!0,at(t),void(t.__$anflg39=n)}return ht(t);
}return ht(t)}return ht(t)}function ct(t){var e=t.__$anflg38;t.__$anflg38=!0;var i=t.ctx;t.ctx=[t._placeholder?{
elem:"hint",elemMods:{fallback:"yes"},content:t._placeholder}:"",{elem:"box",content:t.ctx}];var s=n;n="",
l(t),t.ctx=i,n=s,t.__$anflg38=e}function ht(t){return!(t.__$anflg37!==!0)==!1&&!!o==!1?ut(t):Rt(t)}function ut(t){
var e,i,s,o,r,c,h,u,l,d=(e=n,n="value",i=t.ctx,t.ctx=t.ctx.value,s=St(t),n=e,t.ctx=i,s),p=t.ctx.id||t.generateId(),f=t.ctx.mods||{},_=(o=n,
n="getLive",r=It(t),n=o,r);f.theme=f.theme||"normal",t.ctx.hasOwnProperty("placeholder")&&(c=n,n="value",
h=t.ctx,t.ctx=t.ctx.placeholder,u=St(t),n=c,t.ctx=h,l=u);var m=t.__$anflg37;t.__$anflg37=!0;var g=t._inputId;
t._inputId=p;var b=t._labelId;t._labelId="label"+p;var v=t._hintId;t._hintId="hint"+p;var y=t._name;t._name=t.ctx.name||"";
var k=t._value;t._value=d;var E=t._inputLink;t._inputLink=!0;var M=t._disabled;t._disabled=a.disabled;
var w=t._live;t._live=_;var x=t._placeholder;t._placeholder=l;var B=t.ctx,S=B.mods;B.mods=f,rt(t),t._inputId=g,
t._labelId=b,t._hintId=v,t._name=y,t._value=k,t._inputLink=E,t._disabled=M,t._live=w,t._placeholder=x,
B.mods=S,t.__$anflg37=m}function lt(t){var e=o;return"lego-static-host"===e?"//yastatic.net/lego/2.10-142":"export-host"===e?"https://export.yandex.ru":"social-host"===e?"https://social.yandex.ru":"pass-host"===e?"https://pass.yandex.ru":"passport-host"===e?"https://passport.yandex.ru":"click-host"===e?"//clck.yandex.ru":"content-region"===e||"tld"===e||"lang"===e?"ru":!o==!1?"":!!o==!1?dt(t):Rt(t);
}function dt(t){var e,i,n,s=t.ctx.params||{},o=t["i-global"],r=s.tld&&s.tld!==o.tld;r&&(e=s.tld,i="tr"===e?"yandex.com.tr":"yandex."+e,
n=-1!=["ua","by","kz"].indexOf(e)?"yandex.ru":i,o["content-region"]=e,o["click-host"]="//clck."+n,o["passport-host"]="https://passport."+n,
o["pass-host"]="https://pass."+i,o["social-host"]="https://social."+i,o["export-host"]="https://export."+i);
for(var a in s)o[a]=s[a]}function pt(t){var e=s;if("select"===e){if("group"===o){var i=t.isFirst()?t.isLast()?"both":"first":t.isLast()?"last":"middle";
return{mods:{position:i}}}return ft(t)}return"suggest2-item"===e?"text"===o&&!(a&&"link"===a.interact)==!1&&!("nav"===a.type||"icon"===a.type)==!1?{
mods:{type:"url"}}:ft(t):"notice"===e?"count"===o&&!!t.ctx.url==!1?[{elem:"plain"}]:ft(t):"input"===e&&"ahead"===o?[{
block:"input",elem:"input"}]:ft(t)}function ft(t){}function _t(t){var e=s;return"select"===e?!!o==!1?mt(t):gt(t):"suggest2-item"===e?!!o==!1?!0:gt(t):"tumbler"===e?!!o==!1?t.extend({
live:!1},t.ctx.js):gt(t):"link"===e?!t.ctx.tabindex==!1&&!!o==!1?{origTabindex:t.ctx.tabindex}:gt(t):"notice"===e?!!o==!1?!0:!("undefined"!=typeof t.ctx.count)==!1&&!!o==!1?{
count:t.ctx.count}:gt(t):"button"===e?!!o==!1?!0:gt(t):"input"===e&&!!o==!1?{live:t._live}:gt(t)}function mt(t){
return t.extend({live:!1},t.ctx.js)}function gt(t){}function bt(t){var e=s;if("rating"===e)return!!o==!1?[{
elem:"stars",elemMods:{fill:"yes",width:t.ctx.value?10*Math.ceil(2*t.ctx.value):0}},t.ctx.content&&{elem:"text",
content:t.ctx.content}]:Mt(t);if("suggest2-item"===e)return"thumb"===o&&!!t.ctx.content==!1?{elem:"thumb-wrapper",
attrs:{style:t.ctx.bgColor?"background-color: "+t.ctx.bgColor+";border: none;":""},content:{elem:"thumb-img",
attrs:{src:t.ctx.src,alt:t.ctx.alt}}}:vt(t);if("suggest2"===e)return"title"===o?[{elem:"a11y",content:BEM.I18N("suggest2","group")+": "
},t.ctx.content]:Mt(t);if("popup"===e)return!!o==!1?[{elem:"under",mods:t.ctx.underMods},t.ctx.content]:Mt(t);
if("tumbler"===e)return"box"===o?[{elem:"sticker",elemMods:{position:"left"},content:{elem:"sticker-label",
content:BEM.I18N("tumbler","on")}},{elem:"sticker",elemMods:{position:"right"},content:{elem:"sticker-label",
content:BEM.I18N("tumbler","off")}},{elem:"button"}]:!(void 0===t.ctx.content)==!1&&!!o==!1?[{elem:"option",
side:"left"},{elem:"option",side:"right"}]:kt(t);if("notice"===e){var e=o;if("value"===e){var i,r;return i=n,
n="format-value",r=Pt(t),n=i,r}return"count"===e?[{elem:"text"},{elem:"value",maxCount:t.ctx.maxCount,
count:t.ctx.content}]:!("undefined"!=typeof t.ctx.count)==!1&&!!o==!1?{elem:"count",url:t.ctx.url,maxCount:t.ctx.maxCount,
content:t.ctx.count}:Mt(t)}if("button"===e)return!!o==!1?{elem:"text",tag:"span",content:t.ctx.content
}:Mt(t);if("input"===e){var e=o;return"box"===e?Et(t):"ahead"===e?[{elem:"ahead-filler"},{elem:"ahead-hint"
}]:Mt(t)}return Mt(t)}function vt(t){return!(a&&"link"===a.interact)==!1&&!!o==!1?{elem:"link",url:t.ctx.url,
target:t.ctx.target||"_blank",content:t.ctx.content}:yt(t)}function yt(e){var i=o;return"fact"===i?!(a&&"nav"===a.type)==!1?e.xmlEscape(e.ctx.content):[{
block:"suggest2",elem:"a11y",content:BEM.I18N("suggest2-item","quick-answer")+": "},e.escapeContent===!1?e.ctx.content:e.xmlEscape(e.ctx.content)]:"highlight"===i?e.xmlEscape(e.ctx.content):"text"===i?Array.isArray(e.ctx.content)?e.ctx.content.map(function(t){
return"string"==typeof t?this.xmlEscape(t):t},t(e)):e.xmlEscape(e.ctx.content):Mt(e)}function kt(t){if(!(t._.isArray(t.ctx.content)&&1===t.ctx.content.length)==!1){
var e=t.ctx.content;return"left"!==e[0].side?[{elem:"option",side:"left"},e]:[e,{elem:"option",side:"right"
}]}return Mt(t)}function Et(t){if(!(t.__$anflg40!==!0)==!1){if(!!a.clear==!1){var e,i;return[(e=t.__$anflg40,
t.__$anflg40=!0,i=Et(t),t.__$anflg40=e,i),{elem:"clear",elemMods:t._value||0===t._value?{visibility:"visible"
}:void 0}]}return Mt(t)}return Mt(t)}function Mt(t){return t.ctx.content}function wt(t){return"suggest2-item"===s&&"highlight"===o?!1:xt(t);
}function xt(t){}function Bt(t){return t.ctx.value||"left"!==t.ctx.side}function St(t){return!t.isSimple(t.ctx)==!1&&!!o==!1?t.ctx:Ct(t);
}function Ct(t){if(!t.ctx==!1){if(!!o==!1){var e=[],i=t._buf;t._buf=e;var s=n;return n="",l(t),t._buf=i,
n=s,e.join("")}return Dt(t)}return Dt(t)}function Dt(t){return!!o==!1?"":Rt(t)}function Pt(t){var e,i,n=t.ctx;
return e=parseInt(n.count,10),i=n.maxCount?n.maxCount:99,e>i?i+"+":e}function It(t){var e,i,s=(e=n,n="live",
i=Tt(t),n=e,i),o=t.ctx.js,r=t.ctx.mods,a={autofocus:"yes",width:"content","tap-ahead":"yes"};if(o){if(o.autoFocus&&o.live)throw new Error('input block can\'t have both "live" and "autoFocus" enabled');
o.hasOwnProperty("live")&&(s=o.live);var c=Object.keys(a).some(function(t){return r[t]===a[t]});(c||o.autoFocus)&&(s=!1);
}return s}function Tt(t){return!1}function Ot(t){return!!o==!1?{}:Rt(t)}function At(t){}function jt(t){}
function Rt(t){return!t.ctx==!1&&!t.ctx.link==!1&&!!t._.isSimple(t.ctx)==!1?Lt(t):Nt(t)}function Lt(e){
function n(){if("no-follow"!==this.ctx.link){var t=this._links[this.ctx.link];return __r0=this.ctx,this.ctx=t,
__r1=i(Wt,this),this.ctx=__r0,__r1}}if(!c||!e._cacheLog)return n.call(t(e));var s=e._buf.slice(e._cachePos).join("");
e._cachePos=e._buf.length,e._cacheLog.push(s,{log:e._localLog.slice(),link:e.ctx.link});var o=n.call(t(e));
return e._cachePos=e._buf.length,o}function Nt(t){return!c==!1&&!t.ctx==!1&&!t.ctx.cache==!1?qt(t):$t(t);
}function qt(e){function i(t,e,i){if(0!==e.length){if(Array.isArray(i)){for(var n=t,s=0;s<i.length-1;s++)n=n[i[s]];
i=n[i[s]]}for(var o,r=t,s=0;s<e.length-1;s++)r=r[e[s]];return o=r[e[s]],r[e[s]]=i,o}}var n;if(n=c.get(e.ctx.cache)){
var s=e._links;e.ctx.links&&(e._links=e.ctx.links);for(var o=0;o<n.log.length;o++)if("string"!=typeof n.log[o]){
var r,a=n.log[o];r=a.log.map(function(t){return{key:t[0],value:i(this,t[0],t[1])}},t(e)).reverse();var h=e.ctx,l=h.cache;
h.cache=null;var d=e._cacheLog;e._cacheLog=null;var p=e.ctx,f=p.link;p.link=a.link,u(e),h.cache=l,e._cacheLog=d,
p.link=f,r.forEach(function(t){i(this,t.key,t.value)},t(e))}else e._buf.push(n.log[o]);return e._links=s,
n.res}var _,m=[],g=e.ctx,b=g.cache;g.cache=null;var v=e._cachePos;e._cachePos=e._buf.length;var y=e._cacheLog;
e._cacheLog=m;var k=e._localLog;e._localLog=[],_=u(e);var E=e._buf.slice(e._cachePos).join("");return E&&m.push(E),
g.cache=b,e._cachePos=v,e._cacheLog=y,e._localLog=k,c.set(e.ctx.cache,{log:m,res:_}),_}function $t(t){
var e=n;if("default"===e)return Ft(t);if(""===e){if(!t._.isSimple(t.ctx)==!1){t._listLength--;var i=t.ctx;
return void((i&&i!==!0||0===i)&&t._buf.push(i))}return!!t.ctx==!1?void t._listLength--:!t._.isArray(t.ctx)==!1?zt(t):Vt(t);
}return Ht(t)}function Ft(t){function e(t,e){return(t||"")+"__"+(e||"")}var i,c,h,u,d,p,f,m,g,b,v,y,k,E,M,w,x,B,S,C,D,I,T,O=t.BEM,A=t.ctx,j=t._buf;
if(c=n,n="tag",y=P(t),n=c,T=y,"undefined"!=typeof T||(T=A.tag),"undefined"!=typeof T||(T="div"),T){var R,L;
s&&A.js!==!1&&(h=n,n="js",u=_t(t),n=h,L=u,L=L?t._.extend(A.js,L===!0?{}:L):A.js===!0?{}:A.js,L&&((R={})[O.INTERNAL.buildClass(s,A.elem)]=L)),
j.push("<",T);var N=(d=n,n="bem",p=wt(t),n=d,p);"undefined"!=typeof N||(N="undefined"!=typeof A.bem?A.bem:A.block||A.elem);
var q=(f=n,n="cls",m=jt(t),n=f,m);q||(q=A.cls);var $=A.block&&R&&!A.elem;if(N||q){if(j.push(' class="'),
N){O.INTERNAL.buildClasses(s,A.elem,A.elemMods||A.mods,j);var F=(g=n,n="mix",b=pt(t),n=g,b);if(A.mix&&(F=F?[].concat(F,A.mix):A.mix),
F){var z={};z[e(s,o)]=!0,t._.isArray(F)||(F=[F]);for(var V=0;V<F.length;V++){var H=F[V];if(H){var U=H.block||H.elem,W=H.block||H._block||s,K=H.elem||H._elem||o,G=H.mods||a,Q=H.elemMods||{};
if(U&&j.push(" "),O.INTERNAL[U?"buildClasses":"buildModsClasses"](W,H.elem||H._elem||(H.block?void 0:o),H.elemMods||H.mods,j),
H.js&&((R||(R={}))[O.INTERNAL.buildClass(W,H.elem)]=H.js===!0?{}:H.js,$||($=W&&!H.elem)),U&&!z[e(W,K)]){
z[e(W,K)]=!0;var Y=(v=s,s=W,i=o,o=K,k=a,a=G,E=r,r=Q,M=n,n="mix",w=pt(t),s=v,o=i,a=k,r=E,n=M,w);if(Y)for(var X=0;X<Y.length;X++){
var J=Y[X];(J.block||J.elem)&&z[e(J.block,J.elem)]||(J._block=W,J._elem=K,F.splice(V+1,0,J))}}}}}}q&&j.push(N?" ":"",q),
$&&j.push(" i-bem"),j.push('"')}if(R){var Z=(x=n,n="jsAttr",B=At(t),n=x,B);j.push(" ",Z||"data-bem",'="',t._.attrEscape(JSON.stringify(R)),'"');
}var tt=(S=n,n="attrs",C=_(t),n=S,C);if(tt=t._.extend(tt,A.attrs)){var et;for(et in tt)void 0!==tt[et]&&j.push(" ",et,'="',t._.attrEscape(tt[et]),'"');
}}if(t._.isShortTag(T))j.push("/>");else{T&&j.push(">");var it=(D=n,n="content",I=bt(t),n=D,I);if(it||0===it){
var N=s||o,nt=t._notNewList;t._notNewList=!1;var st=t.position;t.position=N?1:t.position;var ot=t._listLength;
t._listLength=N?1:t._listLength;var rt=t.ctx;t.ctx=it;var at=n;n="",l(t),t._notNewList=nt,t.position=st,
t._listLength=ot,t.ctx=rt,n=at}T&&j.push("</",T,">")}}function zt(t){var e=t.ctx,i=e.length,n=0,s=t.position,o=t._notNewList;
for(o?t._listLength+=i-1:(t.position=0,t._listLength=i),t._notNewList=!0;i>n;){var r=e[n++],a=t.ctx;t.ctx=null==r?"":r,
l(t),t.ctx=a}o||(t.position=s)}function Vt(t){var e=t.ctx.block,i=t.ctx.elem,c=t._currBlock||s;t.ctx||(t.ctx={});
var h=n;n="default";var u=t._links;t._links=t.ctx.links||t._links;var l=s;s=e||(i?c:void 0);var d=t._currBlock;
t._currBlock=e||i?void 0:c;var p=o;o=t.ctx.elem;var f=a;a=e?t.ctx.mods||(t.ctx.mods={}):a;var _=r;r=t.ctx.elemMods||{},
s||o?t.position=(t.position||0)+1:t._listLength--,O(t),n=h,t._links=u,s=l,t._currBlock=d,o=p,a=f,r=_}
function Ht(t){throw new Error(this)}function Ut(t){return Wt(t||this)}function Wt(t){return u(t)}return!function(){
function t(t){this.apply=t,this._buf=null,this.ctx=null,this._=this,this._start=!0,this._listLength=0,
this._notNewList=!1,this._inside=!1,this.position=0}var e={},i=Object.prototype.toString,n={area:1,base:1,
br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1};!function(t,e){
function i(t,e,i){i.push(o,t,o,e)}function n(t,e,n,s){s.push(t),n&&i(e,n,s)}function s(t,s,o,a,c){n(t,e,e,c),
c.push(r,s),a&&i(o,a,c)}var o="_",r="__",a="[a-zA-Z0-9-]+";t.INTERNAL={NAME_PATTERN:a,MOD_DELIM:o,ELEM_DELIM:r,
buildModPostfix:function(t,e,n){var s=n||[];return i(t,e,s),n?s:s.join("")},buildClass:function(t,i,o,r,a){
var c=typeof o;if("string"==c?"string"!=typeof r&&(a=r,r=o,o=i,i=e):"undefined"!=c?(a=o,o=e):i&&"string"!=typeof i&&(a=i,
i=e),!(i||o||a))return t;var h=a||[];return i?s(t,i,o,r,h):n(t,o,r,h),a?h:h.join("")},buildModsClasses:function(t,e,i,o){
var r=o||[];if(i){var a;for(a in i)if(i.hasOwnProperty(a)){var c=i[a];null!=c&&(c=i[a]+"",c&&(r.push(" "),
e?s(t,e,a,c,r):n(t,a,c,r)))}}return o?r:r.join("")},buildClasses:function(t,i,o,r){var a=r||[];return i?s(t,i,e,e,a):n(t,e,e,a),
this.buildModsClasses(t,i,o,r),r?a:a.join("")}}}(e),t.prototype.reinit=function(t){this.ctx=null===typeof t?"":t,
this._buf=[],this._start=!0,this._listLength=0,this._notNewList=!1,this.position=0},Array.isArray?t.prototype.isArray=function(t){
return Array.isArray(t)}:t.prototype.isArray=function(t){return"[object Array]"===i.call(t)},t.prototype.isSimple=function(t){
var e=typeof t;return"string"===e||"number"===e||"boolean"===e},t.prototype.isShortTag=function(t){return n.hasOwnProperty(t);
},t.prototype.extend=function(t,e){if(!t||!e)return t||e;var i,n={};for(i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);
for(i in e)e.hasOwnProperty(i)&&(n[i]=e[i]);return n},t.prototype.identify=function(){var t=0,i=e.__id=+new Date,n="__"+i,s=function(){
return"uniq"+i+ ++t};return function(t,e){return t?e||t[n]?t[n]:t[n]=s():s()}}(),t.prototype.xmlEscape=function(t){
return(t+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},t.prototype.attrEscape=function(t){
return(t+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},
t.prototype.BEM=e,t.prototype.isFirst=function(){return 1===this.position},t.prototype.isLast=function(){
return this.position===this._listLength},t.prototype.generateId=function(){return this.identify(this.ctx);
},h.apply=t.apply=function(){var e=new t(Ut);return e.reinit(this),e.apply(),e._buf.join("")}}(),h}("undefined"==typeof h?{}:h);
return function(t){var e=this;return t||(t={}),c=t.cache,function(){return e===this?(e=void 0,n="",s="",
o="",r="",a=""):(n="",s="",o="",r="",a=""),u.apply.call([e])}.call(null)}}();return"undefined"==typeof t||(t.BEMHTML=i),
t.BEMHTML},i=!0;"object"==typeof module&&"object"==typeof module.exports&&(exports.BEMHTML=e({},{}),i=!1),
"object"==typeof modules&&(modules.define("BEMHTML",[],function(t){t(e({},{}))}),i=!1),i&&(BEMHTML=e({},{}),
t.BEMHTML=BEMHTML)}(this),_borschik("vAscd2mB4A4XPDZE8_rLW4IBSF8")&&!function(){var t=Array.prototype.slice;
Function.prototype.bind||(Function.prototype.bind=function(e){var i=this,n=t.call(arguments,1);return function(){
return i.apply(e,n.concat(t.call(arguments)))}})}(),_borschik("WpF6syY5Vk2Lkd8vxSc229H9Qr8")&&!function(t){
function e(e,n,s){var r=!1;if(o){var a=[];t.each(c,function(){s.hasOwnProperty(this)&&(r=!0)&&a.push({
name:this,val:s[this]})}),r&&(t.each(s,function(t){a.push({name:t,val:this})}),s=a)}t.each(s,function(s,o){
if(r&&(s=o.name,o=o.val),t.isFunction(o)&&(!i||o.toString().indexOf(".__base")>-1)){var a=e[s]||function(){};
n[s]=function(){var t=this.__base;this.__base=a;var e=o.apply(this,arguments);return this.__base=t,e};
}else n[s]=o})}var i=function(){"_"}.toString().indexOf("_")>-1,n=function(){},s=Object.create||function(t){
var e=function(){};return e.prototype=t,new e},o=!0,r={toString:""};for(var a in r)r.hasOwnProperty(a)&&(o=!1);
var c=o?["toString","valueOf"]:null;t.inherit=function(){var i=arguments,o=t.isFunction(i[0]),r=o?i[0]:n,a=i[o?1:0]||{},c=i[o?2:1],h=a.__constructor||o&&r.prototype.__constructor?function(){
return this.__constructor.apply(this,arguments)}:function(){};if(!o)return h.prototype=a,h.prototype.__self=h.prototype.constructor=h,
t.extend(h,c);t.extend(h,r);var u=r.prototype,l=h.prototype=s(u);return l.__self=l.constructor=h,e(u,l,a),
c&&e(r,h,c),h},t.inheritSelf=function(t,i,n){var s=t.prototype;return e(s,s,i),n&&e(t,t,n),t}}(jQuery),
_borschik("eim9mbh-HguuX6sdshSBuau-YF8")&&!function(t){var e=0,i="__"+ +new Date,n=function(){return"uniq"+ ++e;
};t.identify=function(t,e){if(!t)return n();var s="uniqueID"in t?"uniqueID":i;return e||s in t?t[s]:t[s]=n();
}}(jQuery),_borschik("gOR9FuNtxxFTRUHpBJCppIiGQD8")&&!function(t){t.isEmptyObject||(t.isEmptyObject=function(t){
for(var e in t)return!1;return!0})}(jQuery),_borschik("AW47RAjsjOlefg_2L_CsT2aXktI")&&!function(t){t.extend({
debounce:function(t,e,i,n){3==arguments.length&&"boolean"!=typeof i&&(n=i,i=!1);var s;return function(){
var o=arguments;n=n||this,i&&!s&&t.apply(n,o),clearTimeout(s),s=setTimeout(function(){i||t.apply(n,o),
s=null},e)}},throttle:function(t,e,i){var n,s,o;return function(){s=arguments,o=!0,i=i||this,n||function(){
o?(t.apply(i,s),o=!1,n=setTimeout(arguments.callee,e)):n=null}()}}})}(jQuery),_borschik("zp1cShcmhQhukkz4jYNgMjVnI7s")&&!function(t){
var e="__"+ +new Date+"storage",i=function(e,i){return t.identify(e)+(i?t.identify(i):"")},n={buildEventName:function(t){
return t},on:function(n,s,o,r,a){if("string"==typeof n){t.isFunction(s)&&(r=o,o=s,s=void 0);for(var c,h=i(o,r),u=this[e]||(this[e]={}),l=n.split(" "),d=0;n=l[d++];)if(n=this.buildEventName(n),
c=u[n]||(u[n]={ids:{},list:{}}),!(h in c.ids)){var p=c.list,f={fn:o,data:s,ctx:r,special:a};p.last?(p.last.next=f,
f.prev=p.last):p.first=f,c.ids[h]=p.last=f}}else{var _=this;t.each(n,function(t,e){_.on(t,e,s,a)})}return this;
},onFirst:function(t,e,i,n){return this.on(t,e,i,n,{one:!0})},un:function(n,s,o){if("string"==typeof n||"undefined"==typeof n){
var r=this[e];if(r)if(n){for(var a,c=n.split(" "),h=0;n=c[h++];)if(n=this.buildEventName(n),a=r[n])if(s){
var u=i(s,o),l=a.ids;if(u in l){var d=a.list,p=l[u],f=p.prev,_=p.next;f?f.next=_:p===d.first&&(d.first=_),
_?_.prev=f:p===d.last&&(d.last=f),delete l[u]}}else delete this[e][n]}else delete this[e]}else{var m=this;
t.each(n,function(t,e){m.un(t,e,o)})}return this},trigger:function(i,n){var s,o=this,r=o[e];if("string"==typeof i?i=t.Event(o.buildEventName(s=i)):i.type=o.buildEventName(s=i.type),
i.target||(i.target=o),r&&(r=r[i.type]))for(var a,c=r.list.first;c;)i.data=c.data,a=c.fn.call(c.ctx||o,i,n),
"undefined"!=typeof a&&(i.result=a,a===!1&&(i.preventDefault(),i.stopPropagation())),c.special&&c.special.one&&o.un(s,c.fn,c.ctx),
c=c.next;return this}};t.observable=t.inherit(n,n)}(jQuery),_borschik("81oks9O2VxdWVgGGq-7t2ceDNsI")&&!function(t,e){
function i(t,e,i){return(t?"__elem_"+t:"")+"__mod"+(e?"_"+e:"")+(i?"_"+i:"")}function n(e,n,s){t.isFunction(e)?n[i(s,"*","*")]=e:t.each(e,function(e,o){
t.isFunction(o)?n[i(s,e,"*")]=o:t.each(o,function(t,o){n[i(s,e,t)]=o})})}function s(t,e){return e?Array.isArray(e)?function(i){
for(var n=0,s=e.length;s>n;)if(i.hasMod(t,e[n++]))return!0;return!1}:function(i){return i.hasMod(t,e);
}:function(e){return e.hasMod(t)}}var o=[],r={},a={};this.BEM=t.inherit(t.observable,{__constructor:function(t,e,i){
var n=this;n._modCache=t||{},n._processingMods={},n._params=e,n.params=null,i!==!1?n._init():n.afterCurrentEvent(function(){
n._init()})},_init:function(){return this._initing||this.hasMod("js","inited")||(this._initing=!0,this.params||(this.params=t.extend(this.getDefaultParams(),this._params),
delete this._params),this.setMod("js","inited"),delete this._initing,this.hasMod("js","inited")&&this.trigger("init")),
this},changeThis:function(t,e){return t.bind(e||this)},afterCurrentEvent:function(t,e){this.__self.afterCurrentEvent(this.changeThis(t,e));
},trigger:function(t,e){return this.__base(t=this.buildEvent(t),e).__self.trigger(t,e),this},buildEvent:function(e){
return"string"==typeof e&&(e=t.Event(e)),e.block=this,e},hasMod:function(t,i,n){var s=arguments.length,o=!1;
1==s?(n="",i=t,t=e,o=!0):2==s&&("string"==typeof t?(n=i,i=t,t=e):(n="",o=!0));var r=this.getMod(t,i)===n;
return o?!r:r},getMod:function(t,e){var i=typeof t;if("string"===i||"undefined"===i){e=t||e;var n=this._modCache;
return e in n?n[e]:n[e]=this._extractModVal(e)}return this._getElemMod(e,t)},_getElemMod:function(t,e,i){
return this._extractModVal(t,e,i)},getMods:function(t){var i=t&&"string"!=typeof t,n=this,s=[].slice.call(arguments,i?1:0),o=n._extractMods(s,i?t:e);
return i||(s.length?s.forEach(function(t){n._modCache[t]=o[t]}):n._modCache=o),o},setMod:function(i,n,s){
"undefined"==typeof s&&(s=n,n=i,i=e);var o=this;if(!i||i[0]){var r=(i&&i[0]?t.identify(i[0]):"")+"_"+n;
if(this._processingMods[r])return o;var a,c=i?o._getElemMod(n,i,a=o.__self._extractElemNameFrom(i)):o.getMod(n);
if(c===s)return o;this._processingMods[r]=!0;var h=!0,u=[n,s,c];i&&u.unshift(i),[["*","*"],[n,"*"],[n,s]].forEach(function(t){
h=o._callModFn(a,t[0],t[1],u)!==!1&&h}),!i&&h&&(o._modCache[n]=s),h&&o._afterSetMod(n,s,c,i,a),delete this._processingMods[r];
}return o},_afterSetMod:function(t,e,i,n,s){},toggleMod:function(t,i,n,s,o){"string"==typeof t&&(o=s,
s=n,n=i,i=t,t=e),"undefined"==typeof s?s="":"boolean"==typeof s&&(o=s,s="");var r=this.getMod(t,i);return(r==n||r==s)&&this.setMod(t,i,"boolean"==typeof o?o?n:s:this.hasMod(t,i,n)?s:n),
this},delMod:function(t,i){return i||(i=t,t=e),this.setMod(t,i,"")},_callModFn:function(t,n,s,o){var r=i(t,n,s);
return this[r]?this[r].apply(this,o):e},_extractModVal:function(t,e){return""},_extractMods:function(t,e){
return{}},channel:function(t,e){return this.__self.channel(t,e)},getDefaultParams:function(){return{};
},del:function(t){var e=[].slice.call(arguments);return"string"==typeof t&&e.unshift(this),this.__self.del.apply(this.__self,e),
this},destruct:function(){}},{_name:"i-bem",blocks:r,decl:function(i,o,a){if("string"==typeof i?i={block:i
}:i.name&&(i.block=i.name),i.baseBlock&&!r[i.baseBlock])throw'baseBlock "'+i.baseBlock+'" for "'+i.block+'" is undefined';
o||(o={}),o.onSetMod&&(n(o.onSetMod,o),delete o.onSetMod),o.onElemSetMod&&(t.each(o.onElemSetMod,function(t,e){
n(e,o,t)}),delete o.onElemSetMod);var c=r[i.baseBlock||i.block]||this;if(i.modName){var h=s(i.modName,i.modVal);
t.each(o,function(i,n){t.isFunction(n)&&(o[i]=function(){var t;if(h(this))t=n;else{var s=c.prototype[i];
s&&s!==o[i]&&(t=this.__base)}return t?t.apply(this,arguments):e})})}if(a&&"boolean"==typeof a.live){var u=a.live;
a.live=function(){return u}}var l;return i.block==c._name?(l=t.inheritSelf(c,o,a))._processLive(!0):((l=r[i.block]=t.inherit(c,o,a))._name=i.block,
delete l._liveInitable),l},_processLive:function(t){return!1},create:function(t,e){return"string"==typeof t&&(t={
block:t}),new r[t.block](t.mods,e)},getName:function(){return this._name},_extractElemNameFrom:function(t){},
afterCurrentEvent:function(t,e){1==o.push({fn:t,ctx:e})&&setTimeout(this._runAfterCurrentEventFns,0)},
_runAfterCurrentEventFns:function(){var t=o.length;if(t)for(var e,i=o.splice(0,t);e=i.shift();)e.fn.call(e.ctx||this);
},changeThis:function(t,e){return t.bind(e||this)},del:function(t){var e="string"==typeof t,i=e?0:1,n=arguments.length;
for(e&&(t=this);n>i;)delete t[arguments[i++]];return this},channel:function(i,n){return"boolean"==typeof i&&(n=i,
i=e),i||(i="default"),n?void(a[i]&&(a[i].un(),delete a[i])):a[i]||(a[i]=new t.observable)}})}(jQuery),
_borschik("jsCjS5rSMjCXvTk4uYxD9E_6410")&&!function(t,e,i){function n(t,e,i){i.push(r,t,r,e)}function s(t,e,i,s){
s.push(t),i&&n(e,i,s)}function o(t,e,o,r,c){s(t,i,i,c),c.push(a,e),r&&n(o,r,c)}var r="_",a="__",c="[a-zA-Z0-9-]+";
t.INTERNAL={NAME_PATTERN:c,MOD_DELIM:r,ELEM_DELIM:a,buildModPostfix:function(t,e,i){var s=i||[];return n(t,e,s),
i?s:s.join("")},buildClass:function(t,e,n,r,a){var c=typeof n;if("string"==c?"string"!=typeof r&&"number"!=typeof r&&(a=r,
r=n,n=e,e=i):"undefined"!=c?(a=n,n=i):e&&"string"!=typeof e&&(a=e,e=i),!(e||n||a))return t;var h=a||[];
return e?o(t,e,n,r,h):s(t,n,r,h),a?h:h.join("")},buildClasses:function(t,n,r,a){n&&"string"!=typeof n&&(a=r,
r=n,n=i);var c=a||[];return n?o(t,n,i,i,c):s(t,i,i,c),r&&e.each(r,function(e,i){i&&(c.push(" "),n?o(t,n,e,i,c):s(t,e,i,c));
}),a?c:c.join("")}}}(BEM,jQuery),_borschik("OCEGLj1BHv7sJmwZcoUhT5tXssk")&&!function(t){t||(t=window.Lego={}),
t.getCookie=function(t){var e=document.cookie;if(e.length<1)return!1;var i=e.indexOf(t+"=");if(-1===i)return!1;
i+=t.length+1;var n=e.indexOf(";",i);return decodeURIComponent(-1===n?e.substring(i):e.substring(i,n));
}}(window.Lego),_borschik("vBkiVqLE6PkAoVMmW_2aVfYRbM0")&&!function(t){t||(t=window.Lego={}),t.isSessionValid=function(){
return!!t.getCookie("yandex_login")}}(window.Lego),_borschik("PY36v6PubMegqTXOq1xs1jvj46I")&&!function(t,e){
e||(e=window.Lego={}),e.init||(e.init=function(i){return(i=e.params=t.extend({id:"",login:e.isSessionValid()?e.getCookie("yandex_login")||"":"",
yandexuid:e.getCookie("yandexuid"),locale:"ru",retpath:window.location.toString(),"passport-host":"https://passport.yandex.ru",
"pass-host":"https://pass.yandex.ru","passport-msg":i.id,"social-host":"https://social.yandex.ru","lego-path":"/lego",
"show-counters-percent":100},i,e.params))["show-counters"]=Math.round(100*Math.random())<=i["show-counters-percent"],
BEM.blocks["i-global"]._params||t.extend(BEM.blocks["i-global"]._params={},i),t(function(){i.oframebust&&e.oframebust(i.oframebust);
}),i}),e.block||(e.block={}),e.blockInit||(e.blockInit=function(i,n){i=i||document,n=n||".g-js",t(i).find(n).each(function(){
var i=t(this),n=this.onclick?this.onclick():{},s=n.name||"",o=e.block[s];o&&!i.data(s)&&(o.call(i,n),
i.data(s,!0).addClass(s+"_js_inited"))})}),e.blockInitBinded||(e.blockInitBinded=!!t(document).ready(function(){
e.blockInit()}))}(jQuery,window.Lego),_borschik("-VFZuzIq5PQdaGcvyKYuVQu_EOA")&&!function(t,e,i){function n(t,e,i){
(t[e]||(t[e]=[])).unshift(i)}function s(t,e){return e.modName?function(i){(i._curBlock.mods||{})[e.modName]===e.modVal&&t(i);
}:t}function o(t,i){var n,s=e.isArray(i);return e.isArray(t)?s?n=t.concat(i):(n=t).push(i):s?(n=i).unshift(t):n=[t,i],
n}function r(t){return t.replace(f,function(t){return p[t]})}var a=t.INTERNAL,c=a.ELEM_DELIM,h={area:1,
base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1},u=a.buildClass,l=a.buildClasses,d={},p={
'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},f=/["&<>]/g;t.HTML={decl:function(t,i){"string"==typeof t&&(t={
block:t}),t.name&&(t.block=t.name);var o=d[t.block]||(d[t.block]={});i.onBlock&&n(o,"_block",s(i.onBlock,t)),
i.onElem&&(e.isFunction(i.onElem)?n(o,"_elem",s(i.onElem,t)):e.each(i.onElem,function(e,i){n(o,"_elem"+("*"===e?"":c+e),s(i,t));
}))},build:function(t){var e=new this.Ctx(t);return e._buildAll(),e._flush()},Ctx:e.inherit({__constructor:function(t){
this._buffer=[],this._params=t,this._tParams=null,this._tParamsChanges=null,this._curBlock=i},pos:function(){
return this._params._pos},isFirst:function(){return 1===this._params._pos},isLast:function(){var t=this._params;
return t._pos===t._siblingsCount},params:function(t){var e=this;return"undefined"==typeof t?e._params:(e._params=t,
e)},param:function(t,i,n,s){var o=this,r=o._params;return"undefined"==typeof i?r[t]:(!n&&t in r?s&&(r[t]=e.extend(i,r[t])):r[t]=i,
o)},attrs:function(t,e){return this.param("attrs",t,e,!0)},attr:function(t,e,i){var n=this;if("undefined"==typeof e)return(n._params.attrs||{})[t];
var s=n._params.attrs;return s?(i||!(t in s))&&(s[t]=e):(n._params.attrs={})[t]=e,n},tag:function(t,e){
return this.param("tag",t,e)},cls:function(t,e){return this.param("cls",t,e)},mods:function(t,e){return this.param("mods",t,e,!0);
},mod:function(t,e,i){var n=this;if("undefined"==typeof e)return(n._params.mods||{})[t];var s=n._params.mods;
return s?(i||!(t in s))&&(s[t]=e):(n._params.mods={})[t]=e,n},mix:function(t,e){var i=this,n=i._params;
return"undefined"==typeof t?n.mix:(!e&&"mix"in n?n.mix=n.mix.concat(t):n.mix=t,i)},js:function(t){return this.param("js",t);
},content:function(t,e){return this.param("content",t,e)},wrapContent:function(t){var e=this,i=e._params;
return t.content=i.content,i.content=t,e},beforeContent:function(t){var e=this,i=e._params;return i.content=o(t,i.content),
e},afterContent:function(t){var e=this,i=e._params;return i.content=o(i.content,t),e},wrap:function(t){
var e=this,i=e._params;return t.block||(t._curBlock=e._curBlock),t.content=i._wrapper?i._wrapper:i,i._wrapper=t,
e},tParam:function(t,e){var i=this,n=i._tParams||(i._tParams={});if("undefined"==typeof e)return n[t];
var s=i._tParamsChanges||(i._tParamsChanges={});return t in s||(s[t]=n[t]),n[t]=e,i},generateId:function(){
return e.identify()},stop:function(){this._params._isStopped=!0},_buildAll:function(){var t=this,i=t._buffer,n=t._params,s=typeof n;
if("string"===s||"number"===s)i.push(n);else if(e.isArray(n))for(var o,r,a=0,c=n.length;c>a;)t._params=o=n[a++],
r=typeof o,"string"===r||"number"===r?i.push(o):o&&(o._pos=a,o._siblingsCount=c,t._buildByDecl());else n&&(t._params._pos=t._params._siblingsCount=1,
t._buildByDecl())},_build:function(){var t,i=this,n=i._buffer,s=i._params,o=s.tag||"div",a=s.block||s.elem,c=a&&(s.block||i._curBlock.block),d=!1;
s.js&&((t={})[u(c,s.elem)]=s.js===!0?{}:s.js,d=!s.elem),n.push("<",o),(a||s.cls)&&(n.push(' class="'),
a&&(l(c,s.elem,s.mods,n),s.mix&&e.each(s.mix,function(e,i){i&&(n.push(" "),l(i.block,i.elem,i.mods,n),
i.js&&((t||(t={}))[u(i.block,i.elem)]=i.js===!0?{}:i.js,d||(d=!i.elem)))})),s.cls&&n.push(a?" ":"",s.cls),
d&&n.push(" i-bem"),n.push('"')),t&&n.push(' onclick="return ',r(JSON.stringify(t)),'"'),s.attrs&&e.each(s.attrs,function(t,e){
"undefined"!=typeof e&&null!==e&&e!==!1&&n.push(" ",t,'="',e.toString().replace(/"/g,"&quot;"),'"')}),
h[o]?n.push("/>"):(n.push(">"),"undefined"!=typeof s.content&&(i._params=s.content,i._buildAll()),n.push("</",o,">"));
},_flush:function(){var t=this._buffer.join("");return delete this._buffer,t},_buildByDecl:function(){
var t=this,i=t._curBlock,n=t._params;if(n._curBlock&&(t._curBlock=n._curBlock),n.block&&(t._curBlock=n),
!n._wrapper){if(n.block||n.elem){var s=d[t._curBlock.block];if(s){var o;if(n.elem?(o=s["_elem"+c+n.elem],
s._elem&&(o=o?o.concat(s._elem):s._elem)):o=s._block,o)for(var r,a=0;(r=o[a++])&&(r(t),!n._isStopped););
}}if(n._wrapper)return n._curBlock=t._curBlock,t._params=n._wrapper,t._buildAll()}var h=t._tParamsChanges;
if(t._tParamsChanges=null,t._build(),t._curBlock=i,h){var u=t._tParams;e.each(h,function(t,e){"undefined"==typeof e?delete u[t]:u[t]=e;
})}}})}}(BEM,jQuery),_borschik("6BUarDp5KKvHUlUGyl_osyOUsqo")&&!function(t,e,i){function n(t,i){var n=t[0];
e.each(a(n),function(r,a){o(a,n,r,i);var c=f[a.uniqId];c?c.domElem.index(n)<0&&(c.domElem=c.domElem.add(t),
e.extend(c._params,a)):s(r,t,a)})}function s(t,n,s,r,c){"boolean"==typeof s&&(c=r,r=s,s=i);var h=n[0];
s=o(s||a(h)[t],h,t);var u=s.uniqId;if(f[u])return f[u]._init();p[u]=p[u]?p[u].add(n):n;var l=h.parentNode;
l&&11!==l.nodeType||e.unique(p[u]);var d=b[t]||S.decl(t,{},{live:!0});if(!(d._liveInitable=!!d._processLive())||r||s.live===!1){
r&&n.addClass("i-bem");var _=new d(p[u],s,!!r);return delete p[u],c&&c.apply(_,x.call(arguments,4)),_;
}}function o(t,i,n,s){(t||(t={})).uniqId||(t.uniqId=(t.id?n+"-id-"+t.id:e.identify())+(s||e.identify()));
var o=e.identify(i),r=_[o]||(_[o]={});return r[n]||(r[n]=t),t}function r(t,e,i){var n=t.find(e);return i?n:n.add(t.filter(e));
}function a(t){var i=e.identify(t);return _[i]||(_[i]=c(t))}function c(t){var i,n,s=t.getAttribute("data-bem");
return s?JSON.parse(s):(i=t.onclick||t.ondblclick,i||"body"!=t.tagName.toLowerCase()||(n=e(t),s=n.attr("onclick")||n.attr("ondblclick"),
s&&(i=Function(s))),i?i():{})}function h(t){delete _[e.identify(t)]}function u(t,e){1===t.domElem.length?t.destruct(!0):t.domElem=t.domElem.not(e);
}var l=e(window),d=e(document),p={},f={},_={},m={},g={},b=t.blocks,v=t.INTERNAL,y=v.NAME_PATTERN,k=v.MOD_DELIM,E=v.ELEM_DELIM,M=v.buildModPostfix,w=v.buildClass,x=Array.prototype.slice,B=Array.prototype.reverse;
e.fn.bem=function(t,e){return s(t,this,e,!0)};var S=t.DOM=t.decl("i-bem__dom",{__constructor:function(t,i,n){
var s=this;s.domElem=t,s._eventNameCache={},s._elemCache={},f[s._uniqId=i.uniqId||e.identify(s)]=s,s._needSpecialUnbind=!1,
s.__base(null,i,n)},findBlocksInside:function(t,e){return this._findBlocks("find",t,e)},findBlockInside:function(t,e){
return this._findBlocks("find",t,e,!0)},findBlocksOutside:function(t,e){return this._findBlocks("parents",t,e);
},findBlockOutside:function(t,e){return this._findBlocks("closest",t,e)[0]||null},findBlocksOn:function(t,e){
return this._findBlocks("",t,e)},findBlockOn:function(t,e){return this._findBlocks("",t,e,!0)},_findBlocks:function(t,n,o,r){
if(!this.domElem)return[];o||(o=n,n=i);var a=n?"string"==typeof n?this.findElem(n):n:this.domElem,c="string"==typeof o,h=c?o:o.block||o.blockName,u="."+(c?w(h):w(h,o.modName,o.modVal))+(r?":first":""),l=a.filter(u);
if(t&&(l=l.add(a[t](u))),r)return l[0]?s(h,l.eq(0),!0):null;var d=[],p={};return e.each(l,function(t,i){
var n=s(h,e(i),!0);p[n._uniqId]||(p[n._uniqId]=!0,d.push(n))}),d},bindToDomElem:function(t,i,n){var s=this;
return n?t.bind(s._buildEventName(i),function(t){return(t.data||(t.data={})).domElem=e(this),n.apply(s,arguments);
}):e.each(i,function(e,i){s.bindToDomElem(t,e,i)}),s},bindToDoc:function(t,e){return this._needSpecialUnbind=!0,
this.bindToDomElem(d,t,e)},bindToWin:function(t,e){var i,n,s=e;return"resize"===t&&(e=function(){var t=l.height(),e=l.width();
(i!==t||n!==e)&&(i=t,n=e,s.apply(this,arguments))}),this._needSpecialUnbind=!0,this.bindToDomElem(l,t,e);
},bindTo:function(t,i,n){return!i||e.isFunction(i)?(n=i,i=t,t=this.domElem):"string"==typeof t&&(t=this.elem(t)),
this.bindToDomElem(t,i,n)},unbindFromDomElem:function(t,e){return t.unbind(this._buildEventName(e)),this;
},unbindFromDoc:function(t){return this.unbindFromDomElem(d,t)},unbindFromWin:function(t){return this.unbindFromDomElem(l,t);
},unbindFrom:function(t,e){return e?"string"==typeof t&&(t=this.elem(t)):(e=t,t=this.domElem),this.unbindFromDomElem(t,e);
},_buildEventName:function(t){var e=this;return t.indexOf(" ")>1?t.split(" ").map(function(t){return e._buildOneEventName(t);
}).join(" "):e._buildOneEventName(t)},_buildOneEventName:function(t){var e=this,i=e._eventNameCache;if(t in i)return i[t];
var n="."+e._uniqId;if(t.indexOf(".")<0)return i[t]=t+n;var s=".bem_"+e.__self._name;return i[t]=t.split(".").map(function(t,e){
return 0==e?t+s:s+"_"+t}).join("")+n},trigger:function(t,e){return this.__base(t=this.buildEvent(t),e).domElem&&this._ctxTrigger(t,e),
this},_ctxTrigger:function(t,i){var n=this,s=m[n.__self._buildCtxEventName(t.type)],o={};s&&n.domElem.each(function(){
for(var r=this,a=s.counter;r&&a;){var c=e.identify(r,!0);if(c){if(o[c])break;var h=s.ctxs[c];h&&(e.each(h,function(e,s){
s.fn.call(s.ctx||n,t,i)}),a--),o[c]=!0}r=r.parentNode}})},setMod:function(t,i,n){if(t&&"undefined"!=typeof n&&t.length>1){
var s=this;return t.each(function(){var o=e(this);o.__bemElemName=t.__bemElemName,s.setMod(o,i,n)}),s;
}return this.__base(t,i,n)},_extractModVal:function(t,e,i){var n,s=(e||this.domElem)[0];return s&&(n=s.className.match(this.__self._buildModValRE(t,i||e))),
n?n[2]:""},_extractMods:function(t,e){var i={},n=!t.length,s=0;return((e||this.domElem)[0].className.match(this.__self._buildModValRE("("+(n?y:t.join("|"))+")",e,"g"))||[]).forEach(function(t){
var e=(t=t.trim()).lastIndexOf(k),n=t.substr(0,e-1).lastIndexOf(k);i[t.substr(n+1,e-n-1)]=t.substr(e+1),
++s}),s<t.length&&t.forEach(function(t){t in i||(i[t]="")}),i},_afterSetMod:function(t,i,n,s,o){if(!this._isDestructing){
var r=this.__self,a=r._buildModClassPrefix(t,o),c=r._buildModValRE(t,o),h=""===i;(s||this.domElem).each(function(){
var t=this.className;t.indexOf(a)>-1?this.className=t.replace(c,h?"":"$1"+a+i):h||e(this).addClass(a+i);
}),o&&this.dropElemCache(o,t,n).dropElemCache(o,t,i)}},findElem:function(t,e,i,n){arguments.length%2?(n=i,
i=e,e=t,t=this.domElem):"string"==typeof t&&(t=this.findElem(t));var s=this.__self,o="."+e.split(" ").map(function(t){
return w(s._name,t,i,n)}).join(",.");return r(t,o)},_elem:function(t,e,i){var n,s=t+M(e,i);return(n=this._elemCache[s])||(n=this._elemCache[s]=this.findElem(t,e,i),
n.__bemElemName=t),n},elem:function(t,i,n){if(i&&"string"!=typeof i)return i.__bemElemName=t,i;if(t.indexOf(" ")<0)return this._elem(t,i,n);
var s=e([]),o=this;return t.split(" ").forEach(function(t){s=s.add(o._elem(t,i,n))}),s},dropElemCache:function(t,e,i){
if(t){var n=this,s=M(e,i);t.indexOf(" ")<0?delete n._elemCache[t+s]:t.split(" ").forEach(function(t){
delete n._elemCache[t+s]})}else this._elemCache={};return this},elemParams:function(t){var e;return"string"==typeof t?(e=t,
t=this.elem(t)):e=this.__self._extractElemNameFrom(t),c(t[0])[w(this.__self.getName(),e)]||{}},elemify:function(t,i){
return(t=e(t)).__bemElemName=i,t},containsDomElem:function(t){var e=!1;return this.domElem.each(function(){
return!(e=t.parents().andSelf().index(this)>-1)}),e},buildSelector:function(t,e,i){return this.__self.buildSelector(t,e,i);
},destruct:function(t){var i=this,n=i.__self;i._isDestructing||(i._isDestructing=!0,i._needSpecialUnbind&&n.doc.add(n.win).unbind("."+i._uniqId),
i.dropElemCache().domElem.each(function(t,i){var n=a(i);e.each(n,function(t,e){var n=f[e.uniqId];n?n._isDestructing||u(n,i):delete p[e.uniqId];
}),h(i)}),t||i.domElem.remove(),delete f[i.un()._uniqId],delete i.domElem,delete i._elemCache,i.__base());
}},{scope:null,doc:d,win:l,_processLive:function(t){var e=this,i=e._liveInitable;if("live"in e){var n="undefined"==typeof i;
if(n^t){i=e.live()!==!1;var s=e.getName(),o=e.live;e.live=function(){return this.getName()===s?i:o.apply(this,arguments);
}}}return i},init:function(t,i,s){(!t||e.isFunction(t))&&(s=i,i=t,t=d);var o=e.identify();return r(t,".i-bem").each(function(){
n(e(this),o)}),i&&this.afterCurrentEvent(function(){i.call(s||this,t)}),this._runAfterCurrentEventFns(),
t},destruct:function(t,n,s){"boolean"!=typeof t&&(s=n,n=t,t=i),B.call(r(n,".i-bem",s)).each(function(t,i){
var n=a(this);e.each(n,function(t,e){if(e.uniqId){var n=f[e.uniqId];n?u(n,i):delete p[e.uniqId]}}),h(this);
}),t||(s?n.empty():n.remove())},update:function(t,e,i,n){return this.destruct(t,!0),this.init(t.html(e),i,n);
},replace:function(t,i){return this.destruct(!0,t),this.init(e(i).replaceAll(t))},append:function(t,i){
return this.init(e(i).appendTo(t))},prepend:function(t,i){return this.init(e(i).prependTo(t))},before:function(t,i){
return this.init(e(i).insertBefore(t))},after:function(t,i){return this.init(e(i).insertAfter(t))},_buildCtxEventName:function(t){
return this._name+":"+t},_liveClassBind:function(t,i,n,s){var o=this;if(i.indexOf(" ")>-1)i.split(" ").forEach(function(e){
o._liveClassBind(t,e,n,s)});else{var r=g[i],a=e.identify(n);r||(r=g[i]={},d.bind(i,o.changeThis(o._liveClassTrigger,o))),
r=r[t]||(r[t]={uniqIds:{},fns:[]}),a in r.uniqIds||(r.fns.push({uniqId:a,fn:o._buildLiveEventFn(n,s)}),
r.uniqIds[a]=r.fns.length-1)}return this},_liveClassUnbind:function(t,i,n){var s=g[i];if(s)if(n){if(s=s[t]){
var o=e.identify(n);if(o in s.uniqIds){var r=s.uniqIds[o],a=s.fns.length-1;for(s.fns.splice(r,1);a>r;)s.uniqIds[s.fns[r++].uniqId]=r-1;
delete s.uniqIds[o]}}}else delete s[t];return this},_liveClassTrigger:function(t){var i=g[t.type];if(i){
var n=t.target,s=[];for(var o in i)i.hasOwnProperty(o)&&s.push(o);do for(var r=" "+n.className+" ",a=0;o=s[a++];)if(r.indexOf(" "+o+" ")>-1){
for(var c,h=0,u=i[o].fns,l=!1;c=u[h++];)c.fn.call(e(n),t)===!1&&(l=!0);if(l&&t.preventDefault(),l||t.isPropagationStopped())return;
s.splice(--a,1)}while(s.length&&(n=n.parentNode))}},_buildLiveEventFn:function(t,i){var n=this;return function(o){
var r=[n._name,((o.data||(o.data={})).domElem=e(this)).closest(n.buildSelector()),!0],a=s.apply(null,i?r.concat([t,o]):r);
return a&&!i&&t?t.apply(a,arguments):void 0}},liveInitOnEvent:function(t,e,i){return this.liveBindTo(t,e,i,!0);
},liveBindTo:function(t,n,s,o){(!n||e.isFunction(n))&&(s=n,n=t,t=i),t&&"string"!=typeof t||(t={elem:t
}),t.elemName&&(t.elem=t.elemName);var r=this;return t.elem&&t.elem.indexOf(" ")>0?(t.elem.split(" ").forEach(function(e){
r._liveClassBind(w(r._name,e,t.modName,t.modVal),n,s,o)}),r):r._liveClassBind(w(r._name,t.elem,t.modName,t.modVal),n,s,o);
},liveUnbindFrom:function(t,n,s){(!n||e.isFunction(n))&&(s=n,n=t,t=i);var o=this;return t&&t.indexOf(" ")>1?(t.split(" ").forEach(function(t){
o._liveClassUnbind(w(o._name,t),n,s)}),o):o._liveClassUnbind(w(o._name,t),n,s)},_liveInitOnBlockEvent:function(t,e,i,n){
var s=this._name;return b[e].on(t,function(t){if(t.block.domElem){var e=arguments,o=t.block[n](s);i&&o.forEach(function(t){
i.apply(t,e)})}}),this},liveInitOnBlockEvent:function(t,e,i){return this._liveInitOnBlockEvent(t,e,i,"findBlocksOn");
},liveInitOnBlockInsideEvent:function(t,e,i){return this._liveInitOnBlockEvent(t,e,i,"findBlocksOutside");
},liveInitOnBlockInit:function(t,e){return this.liveInitOnBlockEvent("init",t,e)},liveInitOnBlockInsideInit:function(t,e){
return this.liveInitOnBlockInsideEvent("init",t,e)},on:function(t,e,i,n,s){return t.jquery?this._liveCtxBind(t,e,i,n,s):this.__base(t,e,i,n);
},un:function(t,e,i,n){return t.jquery?this._liveCtxUnbind(t,e,i,n):this.__base(t,e,i)},liveCtxBind:function(t,e,i,n,s){
return this._liveCtxBind(t,e,i,n,s)},_liveCtxBind:function(t,n,s,o,r){var a=this;if("string"==typeof n)if(e.isFunction(s)&&(r=o,
o=s,s=i),n.indexOf(" ")>-1)n.split(" ").forEach(function(e){a._liveCtxBind(t,e,s,o,r)});else{var c=a._buildCtxEventName(n),h=m[c]||(m[c]={
counter:0,ctxs:{}});t.each(function(){var t=e.identify(this),i=h.ctxs[t];i||(i=h.ctxs[t]={},++h.counter),
i[e.identify(o)+(r?e.identify(r):"")]={fn:o,data:s,ctx:r}})}else e.each(n,function(e,i){a._liveCtxBind(t,e,i,s);
});return a},liveCtxUnbind:function(t,e,i,n){return this._liveCtxUnbind(t,e,i,n)},_liveCtxUnbind:function(t,i,n,s){
var o=this,r=m[i=o._buildCtxEventName(i)];return r&&(t.each(function(){var t,i=e.identify(this,!0);i&&(t=r.ctxs[i])&&(n&&delete t[e.identify(n)+(s?e.identify(s):"")],
(!n||e.isEmptyObject(t))&&(r.counter--,delete r.ctxs[i]))}),r.counter||delete m[i]),o},_extractElemNameFrom:function(t){
if(t.__bemElemName)return t.__bemElemName;var e=t[0].className.match(this._buildElemNameRE());return e?e[1]:i;
},extractParams:c,_buildModClassPrefix:function(t,e){return w(this._name)+(e?E+("string"==typeof e?e:this._extractElemNameFrom(e)):"")+k+t+k;
},_buildModValRE:function(t,e,i){return new RegExp("(\\s|^)"+this._buildModClassPrefix(t,e)+"("+y+")(?=\\s|$)",i);
},_buildElemNameRE:function(){return new RegExp(this._name+E+"("+y+")(?:\\s|$)")},buildSelector:function(t,e,i){
return"."+w(this._name,t,e,i)},getBlockByUniqId:function(t){return f[t]},getWindowSize:function(){return{
width:l.width(),height:l.height()}}});e(function(){t.DOM.scope=e("body")})}(BEM,jQuery),_borschik("iLapcIwwMoWny1t82wYYA6h5Xws")&&BEM.decl("location",{
onSetMod:{js:function(){this._history=BEM.blocks.history.getInstance(),this._syncState(),this._history.on("statechange",this.changeThis(this._onStateChange));
}},_onStateChange:function(){this._syncState(),this._state.referer!==BEM.blocks.uri.normalize(window.location.href)&&this._state.trigger!==!1&&(this.trigger("change",this._state),
this._state.block&&this.channel(this._state.block).trigger("change"))},_syncState:function(){var t=this._history.state,e=BEM.blocks.uri.parse(t.url);
return this._state=$.extend({},t.data,{referer:this._state&&this._state.url,url:e.build(),hostname:e.host(),
path:e.path(),params:e.queryParams}),this},change:function(t){var e=BEM.blocks.uri.parse(t.url);if(t.url&&delete t.params,
t.url=e.build(),t.params){var i=BEM.blocks.uri.parse(),n=t.forceParams?t.params:$.extend({},this._state.params,t.params);
Object.keys(n).forEach(function(t){i.addParam(t,n[t])}),t.url=i.build()}t.trigger===!1||(t.trigger=!0);
try{this._history.changeState(t.history===!1?"replace":"push",{data:t,url:t.url})}catch(s){window.location.assign(t.url);
}},getState:function(){return $.extend(!0,{},this._state)},getUri:function(){return BEM.blocks.uri.parse(this._state.url);
},getReferer:function(){return this._state.referer}},{_instance:null,getInstance:function(){return this._instance||(this._instance=BEM.create("location"));
}}),_borschik("1a0tHsk5Gwa7OO8a8MWLOFdRA2Q")&&BEM.decl("history",{onSetMod:{js:function(){if(!this.hasMod("provider"))throw new Error("Use BEM.blocks['history'].getInstance() instead of BEM.create('history')");
this._resetUrl().bindEvents().syncState()}},destruct:function(){this.unbindEvents(),this.__base.apply(this,arguments);
},pushState:function(t,e,i){return this.changeState("push",this.normalizeState(t,e,i))},replaceState:function(t,e,i){
return this.changeState("replace",this.normalizeState(t,e,i))},bindEvents:function(){return this},_resetUrl:function(){
return this},_removeHashbang:function(t){var e=BEM.blocks.uri,i=e.parse(t);if(""===i.anchor())return t;
var n=e.parse(i.anchor().replace(/^!/,""));return i.anchor(""),i.query(n.query()),i.build()},unbindEvents:function(){
return this},syncState:function(){return this.state=this.normalizeState(void 0,document.title,window.location.href),
this},normalizeState:function(t,e,i){return{data:null===t?void 0:t,title:e,url:i}},changeState:function(t,e){
try{window.location.assign(e.url)}catch(i){}}},{hasNativeAPI:function(){return window.history&&"pushState"in window.history;
},_instance:null,getInstance:function(){return this._instance||(this._instance=BEM.create({block:"history",
mods:{provider:this.hasNativeAPI()?"history-api":"hashchange"}}))}}),_borschik("DTiy5RJjezgFt-ALFvXZcJEhhRQ")&&BEM.decl("uri",{
onSetMod:{js:function(){var t=this;["protocol","host","port","path","anchor"].forEach(function(e){t[e]=function(t){
return"undefined"!=typeof t?(this.uriParts[e]=t,this):this.uriParts[e]}})}},encode:function(t){return encodeURIComponent(t);
},decode:function(t){try{t=decodeURIComponent(t)}catch(e){try{t=decodeURIComponent(this.convert(t))}catch(i){}
}return t},convert:function(t){var e={"%D0":"%D0%A0","%C0":"%D0%90","%C1":"%D0%91","%C2":"%D0%92","%C3":"%D0%93",
"%C4":"%D0%94","%C5":"%D0%95","%A8":"%D0%81","%C6":"%D0%96","%C7":"%D0%97","%C8":"%D0%98","%C9":"%D0%99",
"%CA":"%D0%9A","%CB":"%D0%9B","%CC":"%D0%9C","%CD":"%D0%9D","%CE":"%D0%9E","%CF":"%D0%9F","%D1":"%D0%A1",
"%D2":"%D0%A2","%D3":"%D0%A3","%D4":"%D0%A4","%D5":"%D0%A5","%D6":"%D0%A6","%D7":"%D0%A7","%D8":"%D0%A8",
"%D9":"%D0%A9","%DA":"%D0%AA","%DB":"%D0%AB","%DC":"%D0%AC","%DD":"%D0%AD","%DE":"%D0%AE","%DF":"%D0%AF",
"%E0":"%D0%B0","%E1":"%D0%B1","%E2":"%D0%B2","%E3":"%D0%B3","%E4":"%D0%B4","%E5":"%D0%B5","%B8":"%D1%91",
"%E6":"%D0%B6","%E7":"%D0%B7","%E8":"%D0%B8","%E9":"%D0%B9","%EA":"%D0%BA","%EB":"%D0%BB","%EC":"%D0%BC",
"%ED":"%D0%BD","%EE":"%D0%BE","%EF":"%D0%BF","%F0":"%D1%80","%F1":"%D1%81","%F2":"%D1%82","%F3":"%D1%83",
"%F4":"%D1%84","%F5":"%D1%85","%F6":"%D1%86","%F7":"%D1%87","%F8":"%D1%88","%F9":"%D1%89","%FA":"%D1%8A",
"%FB":"%D1%8B","%FC":"%D1%8C","%FD":"%D1%8D","%FE":"%D1%8E","%FF":"%D1%8F"};return t=t.replace(/%.{2}/g,function(t){
return e[t]||t})},normalize:function(t){return(t||"").replace(/\+/g,"%20")},parseUri:function(t){var e=/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,i=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],n=e.exec(t||""),s={};
return i.forEach(function(t,e){s[t]=n[e]||""}),s},parseQuery:function(t){var e,i,n,s,o,r={};if("string"!=typeof t||""===t)return r;
for(i=t.replace("?","").split("&"),e=0;e<i.length;e++)n=i[e].split("="),n=[n.shift(),void 0!==n[0]?n.join("="):null],
s=this.decode(n[0]),o=n[1]||""===n[1]?this.decode(n[1]):null,r[s]?(o||""===o)&&r[s].push(o):r[s]=null===o?[]:[o];
return r},query:function(t){var e="";"undefined"!=typeof t&&(this.queryParams=this.parseQuery(t));var i=this.queryParams,n=Object.keys(i),s=this;
return n.forEach(function(t,n){n>0&&(e+="&"),"object"!=typeof i[t]||i[t].length?i[t].forEach(function(i,n){
n>0&&(e+="&"),e+=s.encode(t)+"="+s.encode(i)}):e+=t}),e.length>0?"?"+e:e},getParam:function(t){return this.queryParams[t];
},deleteParam:function(t,e){var i=[];return"undefined"!=typeof e&&((this.queryParams[t]||[]).forEach(function(t){
t!==e&&i.push(t)}),this.queryParams[t]=i),("undefined"==typeof e||0===i.length)&&delete this.queryParams[t],
this},addParam:function(t,e){return this.queryParams[t]=(this.queryParams[t]||[]).concat(e),this},replaceParam:function(t,e,i){
return this.deleteParam(t,i).addParam(t,e)},scheme:function(){var t="";return this.protocol()?(t+=this.protocol(),
this.protocol().indexOf(":")!==this.protocol().length-1&&(t+=":"),t+="//"):this.host()&&(t+="//"),t},
origin:function(){var t=this.scheme();return this.host()&&(t+=this.host(),this.port()&&(t+=":"+this.port())),
t},getRoot:function(){var t=this.origin();return this.path()&&(t+=this.path().replace(/\/[^\/]*$/,"")),
t},pathParts:function(){return this.path().split("/")},toString:function(){var t=this.origin();return this.path()?t+=0!==this.path().indexOf("/")&&"/"!==t[t.length-1]?"/"+this.path():this.path():this.host()&&(this.query().toString()||this.anchor())&&(t+="/"),
this.query().toString()&&(0!==this.query().toString().indexOf("?")&&(t+="?"),t+=this.query().toString()),
this.anchor()&&(0!==this.anchor().indexOf("#")&&(t+="#"),t+=this.anchor()),t},build:function(){var t="";
return t+=this.protocol()?this.protocol():window.location.protocol,t+=t.indexOf(":")!==t.length-1?"://":"//",
t+=this.host()?this.host():window.location.hostname,this.port()?t+=":"+this.port():!this.host()&&window.location.hostname&&(t+=":"+window.location.port),
t+=this.path()?this.path():this.host()?"/":window.location.pathname,this.query()&&(0!==this.query().indexOf("?")&&(t+="?"),
t+=this.query()),this.anchor()&&(0!==this.anchor().indexOf("#")&&(t+="#"),t+=this.anchor()),t}},{parse:function(t){
var e=BEM.create({block:"uri"});return e.uriParts=e.parseUri(e.normalize(t)),e.queryParams=e.parseQuery(e.uriParts.query),
e},normalize:function(t){return this.parse(t).toString()}}),_borschik("IK_XO0vfhGpLtw4Srr7I07N2hh0")&&BEM.decl({
block:"history",modName:"provider",modVal:"history-api"},{_onPopState:function(t){var e=t.originalEvent.state;
null!==e&&(this.state=this.normalizeState(e,document.title,window.location.href),this.state.data&&delete this.state.data.trigger,
this.trigger("statechange",this.state))},bindEvents:function(){return this.__base.apply(this,arguments),
BEM.DOM.win.on("popstate",this.changeThis(this._onPopState)),this},unbindEvents:function(){return this.__base.apply(this,arguments),
BEM.DOM.win.off("popstate",this._onPopState),this},_resetUrl:function(){var t=BEM.blocks.uri.parse(window.location.href);
return t.anchor()&&window.history.replaceState(null,document.title,this._removeHashbang(window.location.href)),
this},syncState:function(){return null===window.history.state&&window.history.replaceState(void 0,document.title,window.location.href),
(null===this.state||void 0===this.state)&&(this.state=this.normalizeState(void 0,document.title,window.location.href)),
this},changeState:function(t,e){return window.history[t+"State"](e.data,e.title||document.title,e.url),
this.state=e,this.trigger("statechange",{state:e,nativeApi:!0}),this}}),_borschik("EBtlUlQXmrGKOpyMC2IKXjXXwc0")&&BEM.decl({
block:"history",modName:"provider",modVal:"hashchange"},{_onHashChange:function(){this.state=this.normalizeState(void 0,document.title,this._removeHashbang(window.location.href)),
this.trigger("statechange",{state:this.state,nativeApi:!1})},bindEvents:function(){return this.__base.apply(this,arguments),
BEM.DOM.win.on("hashchange",this.changeThis(this._onHashChange)),this},unbindEvents:function(){return this.__base.apply(this,arguments),
BEM.DOM.win.off("hashchange",this._onHashChange),this},syncState:function(){return this.state=this.normalizeState(void 0,document.title,this._removeHashbang(window.location.href)),
this},_generateHashbang:function(t){var e=BEM.blocks.uri.parse(t),i=e.pathParts();return"!/"+i[i.length-1]+e.query();
},_resetUrl:function(){return this},changeState:function(t,e){var i=BEM.blocks.uri.parse(e.url);if(i.host()&&i.host()!==window.location.hostname||i.port()&&i.port()!==window.location.port||i.protocol()&&i.protocol()!==window.location.protocol.replace(":",""))throw new Error("SECURITY_ERR: DOM Exception 18");
this.state=e,window.location.hash=this._generateHashbang(e.url)}}),_borschik("irbqP6Ggd1noo1nmTI1gPmuX7A4")&&!function(t){
function e(t){return t.replace(/%.{2}/g,function(t){return n[t]||t})}function i(t,i){var n="";try{n=t(i);
}catch(s){try{n=t(e(i))}catch(s){n=i}}return n}var n={"%D0":"%D0%A0","%C0":"%D0%90","%C1":"%D0%91","%C2":"%D0%92",
"%C3":"%D0%93","%C4":"%D0%94","%C5":"%D0%95","%A8":"%D0%81","%C6":"%D0%96","%C7":"%D0%97","%C8":"%D0%98",
"%C9":"%D0%99","%CA":"%D0%9A","%CB":"%D0%9B","%CC":"%D0%9C","%CD":"%D0%9D","%CE":"%D0%9E","%CF":"%D0%9F",
"%D1":"%D0%A1","%D2":"%D0%A2","%D3":"%D0%A3","%D4":"%D0%A4","%D5":"%D0%A5","%D6":"%D0%A6","%D7":"%D0%A7",
"%D8":"%D0%A8","%D9":"%D0%A9","%DA":"%D0%AA","%DB":"%D0%AB","%DC":"%D0%AC","%DD":"%D0%AD","%DE":"%D0%AE",
"%DF":"%D0%AF","%E0":"%D0%B0","%E1":"%D0%B1","%E2":"%D0%B2","%E3":"%D0%B3","%E4":"%D0%B4","%E5":"%D0%B5",
"%B8":"%D1%91","%E6":"%D0%B6","%E7":"%D0%B7","%E8":"%D0%B8","%E9":"%D0%B9","%EA":"%D0%BA","%EB":"%D0%BB",
"%EC":"%D0%BC","%ED":"%D0%BD","%EE":"%D0%BE","%EF":"%D0%BF","%F0":"%D1%80","%F1":"%D1%81","%F2":"%D1%82",
"%F3":"%D1%83","%F4":"%D1%84","%F5":"%D1%85","%F6":"%D1%86","%F7":"%D1%87","%F8":"%D1%88","%F9":"%D1%89",
"%FA":"%D1%8A","%FB":"%D1%8B","%FC":"%D1%8C","%FD":"%D1%8D","%FE":"%D1%8E","%FF":"%D1%8F"};t.extend({
decodeURI:function(t){return i(decodeURI,t)},decodeURIComponent:function(t){return i(decodeURIComponent,t);
}})}(jQuery),_borschik("R7P92msjwaR_v1jKxOuGoHYevkw")&&BEM.DOM.decl("i-global",{onSetMod:{js:function(){
this.del(this.__self._params=$.extend({},this.params),"uniqId","name");var t=this.__self._params;t["passport-msg"]||(t["passport-msg"]=t.id),
void 0===t["show-counters"]&&(t["show-counters"]=Math.round(100*Math.random())<=t["show-counters-percent"]),
t.locale=t.lang,$(function(){t.oframebust&&Lego.oframebust(t.oframebust)})}},getDefaultParams:function(){
return{id:"",login:Lego.isSessionValid()?$.cookie("yandex_login")||"":"",yandexuid:$.cookie("yandexuid"),
lang:"ru",tld:"ru",retpath:encodeURI($.decodeURI(location.href)),"passport-host":"https://passport.yandex.ru",
"pass-host":"https://pass.yandex.ru","social-host":"https://social.yandex.ru","lego-path":"/lego","show-counters-percent":100
}}},{param:function(t,e){return"undefined"==typeof e?(this._params||{})[t]:void(this._params&&(this._params[t]=e));
}}),_borschik("8yWtRkYKqnpkHAY5Nr5yhKOggkA")&&BEM.DOM.decl("i-global",{onSetMod:{js:function(){this.params.framebuster&&BEM.create({
block:"i-framebuster",mods:{type:"yandex"}},{whitelist:this.params.framebuster}),window.history&&"pushState"in window.history&&window.location.href.indexOf("reload=")>-1&&BEM.blocks.location.getInstance().change({
url:BEM.blocks.uri.parse(window.location.href).deleteParam("reload").deleteParam("reqid").toString(),
trigger:!1,history:!1}),this.__base.apply(this,arguments),BEM.blocks.location.getInstance().on("change",function(t,e){
this.__self.setParams({retpath:e.url})},this),this.__self.initialized=!0}}},{initialize:function(){var t=$(".i-global");
t.length>0&&t.bem("i-global")},setParams:function(t){this.initialized||this.initialize(),$.extend(this._params,t);
},param:function(){return this.initialized||this.initialize(),this.__base.apply(this,arguments)}}),_borschik("epuR1jFSK0YH56fxMR6i2j54TDI")&&(!function(t){
function e(t){return t.replace(/^(?:https?:)?\/\//,"")}t||(t=window.Lego={}),!t.params&&(t.params={}),
t.c=function(t,i,n){n=n||{};var s=e(n.host||BEM.blocks["i-global"].param("click-host")||"clck.yandex.ru"),o=function(t,e,i,n){
return e=e.replace("'","%27"),e.indexOf("/dtype=")>-1?e:location.protocol+"//"+s+"/"+i+"/dtype="+t+"/rnd="+((new Date).getTime()+Math.round(100*Math.random()))+(n?"/*"+(e.match(/^http/)?e:location.protocol+"//"+location.host+(e.match("^/")?e:"/"+e)):"/*data="+encodeURIComponent("url="+encodeURIComponent(e.match(/^http/)?e:location.protocol+"//"+location.host+(e.match("^/")?e:"/"+e))));
},r=function(){var e=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0],s=document.createElement("script");
s.setAttribute("src",o(t,n.useLinkHref&&Object(i).href?i.href:location.href,"jclck")),e.insertBefore(s,e.firstChild);
};if(i)if(i.className.match(/b-link_pseudo_yes/)||i.href&&i.href.match(/^mailto:/)||n.noRedirect===!0)r();else if(i.href){
var a=i.href;i.href=o(t,a,"redir"),setTimeout(function(){i.href=a},500)}else if(i.form)if(i.type.match(/submit|button|image/)){
var a=i.form.action;i.form.action=o(t,a,"redir",!0),setTimeout(function(){i.form.action=a},500)}else r();else{
if(!i.action)throw"counter.js: not link and not form!";i.action=o(t,i.action,"redir",!0)}else r()}}(window.Lego),
function(t,e){t||(t=window.Lego={}),t.cp=function(i,n,s,o,r,a){"string"==typeof o||(a=r,r=o,o=e),t.c("stred/pid="+i+"/cid="+n+(s?"/path="+s+(o?"/vars="+o:""):""),r,a);
}}(window.Lego),function(t){t||(t=window.Lego={}),t.ch=function(e,i,n){BEM.blocks["i-global"].param("show-counters")&&t.cp(0,2219,e,i,n);
}}(window.Lego)),_borschik("e4mNX6WSEEnOzzK9_WR5JxLBwHk")&&!function(t,e){var i=1,n=!1;if("deviceXDPI"in screen&&"logicalXDPI"in screen?i=screen.deviceXDPI/screen.logicalXDPI:"devicePixelRatio"in t&&(i=t.devicePixelRatio),
"function"==typeof t.matchMedia){var s="only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 124dpi)";
n=t.matchMedia(s).matches}else n=i>=1.3;var o={};/msie|trident/i.test(e)?o.ie=parseInt(e.split(/msie|rv:/i)[1],10):t.opera&&(o.opera=parseInt(t.opera.version(),10));
var r,a={},c={};(r=e.match(/Android\s+([\d.]+)/))?a.android=r[1]:e.match(/\sHTC[\s_].*AppleWebKit/)?a.android="2.3":(r=e.match(/iPhone\sOS\s([\d_]+)/))?(a.ios=r[1].replace(/_/g,"."),
c.iphone=!0):(r=e.match(/iPad.*OS\s([\d_]+)/))?(a.ios=r[1].replace(/_/g,"."),c.ipad=!0):(r=e.match(/Bada\/([\d.]+)/))?a.bada=r[1]:(r=e.match(/Windows\sPhone[^\d]*\s([\d.]+)/))?a.wp=r[1]:(r=e.match(/MSIE\s9/))?a.wp="7.5":a.other=!0,
BEM.DOM.decl("i-ua",{onSetMod:{js:function(){var t=this.__self,e="other";["ios","android","bada","wp","opera"].some(function(i){
return t[i]&&(e=i)}),this.setMod("platform",e),t.hiDpi&&this.setMod("hi-dpi","yes")}}},{ios:a.ios,iphone:c.iphone,
ipad:c.ipad,android:a.android,bada:a.bada,wp:a.wp,other:a.other,dpr:i,hiDpi:n,ua:e,ie:o.ie,opera:o.opera
})}(window,navigator.userAgent),_borschik("y7kwd8srwWMa7KrW1CgMUftWyAg")&&!function(){var t,e,i;BEM.decl("i-ua",{},{
canUseAjax:function(){return"undefined"==typeof t&&(t=(window.history&&"pushState"in window.history||"onhashchange"in window)&&this.isCookieEnabled()),
t},isCookieEnabled:function(){if("undefined"==typeof e){var t=Math.random().toString(16).slice(2);document.cookie=t+"=1",
e=document.cookie.indexOf(t)>=0,document.cookie=t+"=;expires="+new Date(0).toGMTString()}return e},canUseDataURIAsync:function(t){
if("undefined"==typeof i){var e=new Image;e.onerror=function(){t(i=!1)},e.onload=function(){t(1==e.width&&1==e.height?i=!0:i=!1);
},e.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}else this.afterCurrentEvent(function(){
t(i)})}})}(),_borschik("7NY8E_X8L7PQ0KJooSBACcgRNq0")&&BEM.decl("i-ua",{},{canUseAjax:function(){return this.__base.apply(this,arguments)&&BEM.blocks["i-global"].param("pref-ajax");
}}),_borschik("q2RvIZu37s3fvSJh-Pc1paKpj3o")&&!function(t){t||(t=window.Lego={}),t.messages=t.messages||{},
t.message=function(e,i){return"ru"===t.params.locale?i:t.messages[e]||i}}(window.Lego),_borschik("CXHFnEIepnLwqbAUMdZ55F8crUU")&&BEM.decl("i-framebuster",{
onSetMod:{js:function(){if(window.top.location!==window.location){var t=document.referrer.match(/^https?:\/\/([^:\/\s]+)\/?.*/);
t&&!this.isInWhitelist(t[1])&&(window.top.location=window.location)}}},isInWhitelist:function(t){for(var e=this.defaultWhitelist().concat(this.params.whitelist||[]),i=0;i<e.length;++i){
var n=e[i];if("string"!=typeof n){if(n.test(t))return!0}else if(n===t||-1!=t.indexOf(n,t.length-n.length))return!0;
}},defaultWhitelist:function(){return[]}}),_borschik("MWo6cdv5vS0fVDtEbfzPPFfinew")&&BEM.decl({name:"i-framebuster",
modName:"type",modVal:"yandex"},{defaultWhitelist:function(){return[/^([\w\-]*\.)*yandex\.(ru|kz|by|ua|com|com\.tr|net)\.?$/,/^([\w\-]*\.)*yandex-team\.(ru|kz|by|ua|com|com\.tr)\.?$/,/^([^/]+\.)*webvisor\.com\.?$/];
}}),_borschik("K6rdwYf5DqX6xzq7A_M8mVrNIuw")&&!function(){var t=/([ -#%-*,-/:-;?-@[-\]_{}\u00a0-¡«·»¿;·՚-՟։-֊־׀׃׆׳-״؉-؊،-؍؛؞-؟٪-٭۔܀-܍߷-߹।-॥॰෴๏๚-๛༄-༒༺-༽྅࿐-࿔၊-၏჻፡-፨᙭-᙮\u1680᚛-᚜᛫-᛭᜵-᜶។-៖៘-៚᠀-᠊\u180e᥄-᥅᧞-᧟᨞-᨟᭚-᭠᰻-᰿᱾-᱿\u2000-\u200a‐-\u2029\u202f-⁃⁅-⁑⁓-\u205f⁽-⁾₍-₎〈-〉❨-❵⟅-⟆⟦-⟯⦃-⦘⧘-⧛⧼-⧽⳹-⳼⳾-⳿⸀-⸮⸰\u3000-〃〈-】〔-〟〰〽゠・꘍-꘏꙳꙾꡴-꡷꣎-꣏꤮-꤯꥟꩜-꩟﴾-﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪-﹫！-＃％-＊，-／：-；？-＠［-］＿｛｝｟-･\ud800\udd00-\udd01\udf9f\udfd0\ud802\udd1f\udd3f\ude50-\ude58\ud809\udc70-\udc73]+)/,e={
trimByWord:function(e){var i=e.split(t);return i.splice(-2),i.join("")},xmlEscape:function(t){return t?t.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/`/g,"&#x60;").replace(/'/g,"&#x27;"):"";
}};"function"==typeof BEM&&"function"==typeof BEM.decl&&BEM.decl("i-text",{},e),"object"==typeof blocks&&(blocks["i-text"]=e);
}(),_borschik("k1SW_T7uym9a92egWrrspcHh5yA")&&$(function(){BEM.afterCurrentEvent(function(){BEM.DOM.init();
})}),_borschik("G9yqiyl0uxWHC6lZQToKDd_Zzt8")&&!function(){var t={9:"tab",13:"enter",32:"space",33:"page up",
34:"page down",35:"end",36:"home",37:"left arrow",38:"up arrow",39:"right arrow",40:"down arrow",46:"delete"
},e={27:"escape"};BEM.DOM.decl({block:"i-ua",modName:"interaction",modVal:"yes"},{onSetMod:{js:{inited:function(){
this.bindTo("mousedown",this._onPointer).bindTo("keydown",this._onKeyboard)}}},_onPointer:function(){
this.interaction="pointer",this.domElem.attr("data-interaction","pointer"),this.unbindFrom("mousedown");
},_onKeyboard:function(i){var n=i.keyCode;return e[n]?void this._onPointer():void(t[n]&&"keyboard"!==this.interaction&&(this.domElem.attr("data-interaction","keyboard"),
this.interaction="keyboard",this.bindTo("mousedown",this._onPointer)))}})}(),_borschik("mPDd1HTyxeKNUFR0zVW0F8SWQZA")&&BEM.DOM.decl("b-page",{
onSetMod:{js:function(){this.bindToWin("focus focusin",this._updateWprid)}},_updateWprid:function(){var t=BEM.blocks["i-global"].param("reqid"),e=BEM.blocks["i-cookie"].get();
t!==e.ys("wprid")&&e.ys("wprid",t)}}),_borschik("ugltBS98xAv8t9vAxgr-nyj4uik")&&BEM.DOM.decl("b-page",{
onSetMod:{js:function(){this.__base.apply(this,arguments),this._setYbCookie()}},_setYbCookie:function(){
var t=this.params.yabro;if(t){var e=BEM.blocks["i-cookie"].get(),i=Math.floor(new Date/1e3),n=e.yp("yb"),s=(n||"").split(":"),o=s[0]||t,r=s[1]||0,a=s[2]||i,c=i,h=s[4]||0,u=Number(h)+1,l=s[5]||0;
e.yp("yb",[o,r,a,c,u,l].join(":"),Math.floor(new Date("Tue Jan 1 00:00:00 2038")/1e3))}}}),_borschik("X5VJKG4_xtMfhWBgKJJPEgpxjj4"),
_borschik("ZOlD_vpvY-lz6FnJfD1F07uPDr8")&&BEM.DOM.decl("i-services",{onSetMod:{js:function(){this._searchInput=(this.findBlockInside("search")||this.findBlockInside("search2")).findBlockInside("input");
}},getServicePath:function(t,e){var i=this.params[t];return i?i.search+encodeURIComponent(e||this._searchInput.val())+(i.params||""):"";
},getServiceUrl:function(t){return(this.params[t]||{}).baseUrl}}),_borschik("Czu3BwTZ7aRScOPOGV2qvOHX7jk")&&BEM.DOM.decl("link",{
getDefaultParams:function(){return{origTabindex:"0"}},onSetMod:{disabled:function(t,e){var i="yes"===e;
this.domElem.attr({"aria-disabled":i,tabindex:i?-1:this.params.origTabindex})}}}),_borschik("HrnIPNdInlXK8JcpaZnFf6NZabI")&&!function(){
function t(t){return encodeURIComponent(t).replace(/[!'()*]/g,function(t){return"%"+t.charCodeAt(0).toString(16);
})}function e(t){return decodeURIComponent(t)}var i;BEM.decl("i-cookie",{defaultExpires:Math.round(new Date/1e3)+604800,
getDefaultParams:function(){return{yp:{expires:new Date("Tue Jan 1 00:00:00 2038"),domain:".yandex."+BEM.blocks["i-global"].param("tld"),
path:"/"},ys:{domain:".yandex."+BEM.blocks["i-global"].param("tld"),path:"/"}}},ypRead:function(){for(var t=$.cookie.get("yp"),i=t?t.split("#"):[],n=new Date/1e3,s={},o=0,r=i.length;r>o;o++){
var a=i[o].split("."),c=a[0],h=a[1],u=a.slice(2).join(".");c>n&&(s[h]={value:e(u),expires:c})}return s;
},ypWrite:function(e){for(var i=[],n=0,s=Object.keys(e),o=s.length;o>n;n++)i.push([e[s[n]].expires,s[n],t(e[s[n]].value)].join("."));
$.cookie.set("yp",i.join("#"),this.params.yp)},yp:function(t,e,i){var n=this.ypRead(),s=n[t];return 1===arguments.length?s&&s.value:(s||(s={}),
s.value=e,s.expires=i||s.expires||this.defaultExpires,n[t]=s,this.ypWrite(n))},ysRead:function(){var t=$.cookie.get("ys"),i=t?t.split("#"):[],n={};
return i.forEach(function(t){var i=t.split("."),s=i[0],o=i.slice(1).join(".");n[s]=e(o)}),n},ysWrite:function(e){
for(var i=[],n=0,s=Object.keys(e),o=s.length;o>n;n++)i.push([s[n],t(e[s[n]])].join("."));$.cookie.set("ys",i.join("#"),this.params.ys);
},ys:function(t,e){var i=this.ysRead();return e?(i[t]=e,this.ysWrite(i)):i[t]}},{get:function(){return i||(i=BEM.create("i-cookie"));
}})}(),_borschik("HXORWVUAZwgE-YDcZbII6dgh9yw")&&(jQuery.cookie=function(){var t=function(e,i,n){return void 0===i?decodeURIComponent(t.get(e)):void t.set(e,encodeURIComponent(i),n);
};return $.extend(t,{get:function(t){var e=this.getAll();return e[t]},getAll:function(){for(var t=this.readCookie(),e=t?t.split("; "):[],i={},n=0;n<e.length;n++){
var s=e[n].split("="),o=s[0],r=s.slice(1).join("=");'"'===r.charAt(0)&&(r=r.slice(1,-1)),i[o]=r}return i;
},set:function(t,e,i){var n,s;i||(i={}),n=i.expires,"number"==typeof n&&(n=new Date(Date.now()+24*n*60*60*1e3)),
s=[t,"=",e,n&&"; expires="+n.toUTCString(),i.path&&"; path="+i.path,i.domain&&"; domain="+i.domain,i.secure?"; secure":""].join(""),
this.writeCookie(s)},remove:function(t){this.set(t,"",{expires:-1})},readCookie:function(){return document.cookie;
},writeCookie:function(t){document.cookie=t}}),t}()),_borschik("Y4MkrbXVthpo7UeZdRo-HWUeLZ8")&&(BEM.DOM.decl({
name:"i-flashcookie",modName:"type",modVal:"iframe"},{onSetMod:{js:function(){Lego.block["i-flashcookie"].call(this.domElem,this.params);
}}}),function(){var t=Lego.block["i-flashcookie"],e=function(t){t||(t={});var e=this,i=t.host||"kiks.yandex",n=arguments.callee.load=function(){
e.replaceWith($('<iframe src="//'+i+location.host.match(/.*([.].*?):?\d{0,}$/)[1]+'/su/" tabindex="-1" aria-hidden="true" class="'+e.attr("class")+'"/>'));
};e.hasClass("i-flashcookie_autoload_no")||n()};Lego.block["i-flashcookie"]=function(i){var n=this.hasClass("i-flashcookie_type_iframe")?e:t;
n&&n.call(this,i)}}()),_borschik("TWvGy-UWrKLO34zzKQfxQzUgs-c")&&(BEM.DOM.decl({name:"i-flashcookie",
modName:"type",modVal:"inline"},{onSetMod:{js:function(){Lego.block["i-flashcookie"].call(this.domElem,this.params);
}}}),function(){var t=Lego.block["i-flashcookie"],e=function(t){function e(t,e){return'<param name="'+t+'" value="'+e+'" />';
}function i(t,e){return" "+t+'="'+e+'"'}function n(t,e,i){var n=t.match(e);return n&&n[i+1?i:1]||""}function s(){
return n(d.cookie,new RegExp("fuid"+c+"=([^;]+)"))}function o(){var t=d.domain;return t&&n(t,/[^.]+\.[^.]{2,3}(\.tr)?$/,0);
}t||(t={});var r,a,c,h,u=t.host||"kiks.yandex",l=window,d=document,p=navigator,f=p.userAgent,_=p.mimeTypes,m=9,g=f&&/gecko/i.test(f),b=f&&/MSIE/.test(f)&&/Win/.test(f),v=g?"embed":"object",y="//"+u.split(".").slice(0,-1).join(".")+".%s/system/fc%d.html",k="//"+u+".ru/system/%s%d.swf",E="//"+u+".ru/fu",M="//"+u+".ru/fu",w="application/x-shockwave-flash",x="style",B="position:absolute;margin-left:-999em;top:0;",S=' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"',C="allowScriptAccess",D="always",P="height",I="wmode",T="window",O="width",A="bgcolor",j="#FFFFFF",R="ya_fc",L=i(x,B)+i(O,1)+i(P,1)+i("id",R)+i("tabindex","-1")+i("aria-hidden","true"),N=!1;
l.ya_fc_external=function(t,n,u,l){r=t,a=n,c=u,h=l||"fc";var d,p=_&&_[w]?_[w].enabledPlugin:0,f=N,y=0,x=s()?k.replace("%d",a).replace("%s",h):E.replace("%s",o());
if(p)y=p.description.split("Shockwave Flash ")[1],f=parseInt(y,10)>=m;else if(b){f=N;try{f=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+m);
}catch(P){}}return d=f?g?'<div style="'+B+'"><'+v+L+i("src",x)+i(I,T)+i(A,j)+i(C,D)+i("type",w)+"/></div>":(b?"<"+v+S+L+">"+e("movie",x):"<"+v+L+i("type",w)+i("data",x)+">")+e(I,T)+e(A,j)+e(C,D)+"</"+v+">":'<img src="'+M.replace("%s",o())+'" style="'+B+'" />';
},l.ya_fc_requestData=function(){var t=d.getElementById("ya_fc");try{t.setLocation(o(),s())}catch(e){}
},l.ya_fc_setCookie=function(t){var e=new Date;e.setTime(e.getTime()+31536e7),d.cookie="fuid"+c+"="+t+";expires="+e.toGMTString()+";path=/;domain="+o();
},l.ya_fc_getIFrame=function(t){var e=y.replace("%s",t).replace("%d",r),i=d.createElement("iframe"),n=d.getElementsByTagName("body")[0],s="40px;";
i.src=e,i.style.cssText=O+s+P+s+"border:0;"+B,i.frameBorder=0,i.setAttribute("tabindex","-1"),i.setAttribute("aria-hidden","true"),
n&&n.insertBefore(i,n.firstChild)};var q=this,$=arguments.callee.load=function(t){var e,i;t.mode?(e="00",
i="kfc"):e="07",q.replaceWith(l.ya_fc_external("07_2",e,"01",i))};q.hasClass("i-flashcookie_autoload_no")||$(t);
};Lego.block["i-flashcookie"]=function(i){var n=this.hasClass("i-flashcookie_type_inline")?e:t;n&&n.call(this,i);
}}()),_borschik("DibxeVNzZ1QesQJNlnfJOdWAfuY")&&(window.ya_fc_complete=function(){setTimeout(function(){
var t=document.getElementById("ya_fc");t&&t.parentNode.removeChild(t)},0)}),_borschik("YouJVNR8VEYEfCpiXICo1NMnv_Y")&&BEM.DOM.decl("stat-counter",{
onSetMod:{js:function(){this._iframe=$("iframe#analytics"),this._queue=[],this._uId=$.cookie("yandexuid"),
this.loadIframe()}},loadIframe:function(){var t=this,e="https://external-promo-metrics.yandex.net/",i=document.location.search,n=this._iframe[0],s=BEM.channel("analytics");
n.src=e+(i?i+"&":"?")+"config=serp",this._iframe.load(function(){t._loaded=!0,t.sendConversionPixel("_onload");
}),s.on("count",function(e,i){t.sendConversionPixel(i)})},sendConversionPixel:function(t){if(-1!==["switch","install","_onload"].indexOf(t)){
this._loaded||this._queue.push(t);var e=this._queue;if("_onload"===t){for(var i=0;e>i;i++)this._sendPostMessage(e[i]);
this._queue.length=0}else this._sendPostMessage(t)}},_sendPostMessage:function(t){var e={goal:{name:t,
uid:this._uId}};this._iframe[0].contentWindow.postMessage(JSON.stringify(e),"*")}}),_borschik("P3FYu3D6Ioz5Kt6eF5WseU6VE2o")&&BEM.decl("serp-metrika",{
onSetMod:{js:function(){var t=BEM.blocks.location.getInstance();t.on("change",this.onLocationChange,this);
}},onLocationChange:function(t,e){var i=window["yaCounter"+this.params.counter];i&&i.hit(e.url,document.title);
}}),_borschik("GgH_zk32NO7UHvdDaPWwNogcPgQ")&&BEM.decl("metrika",{onSetMod:{js:function(){this.counters={},
this.loadMetrikaScript()}},loadMetrikaScript:function(){var t=document.createElement("script"),e=document.getElementsByTagName("script")[0];
t.type="text/javascript",t.async=!0,t.src="https://mc.yandex.ru/metrika/watch.js",e.parentNode.insertBefore(t,e);
},isMetrikaScriptLoaded:function(){return Boolean(window.Ya&&Ya.Metrika)},createYaCounter:function(t){
try{window["yaCounter"+t.id]=new Ya.Metrika(t)}catch(e){}},createCounter:function(t){var e="yandex_metrika_callbacks",i=BEM.blocks["serp-request"].getInstance(),n=this.createYaCounter.bind(this,t);
this.isMetrikaScriptLoaded()?n():(window[e]||(window[e]=[]),window[e].push(n)),this.counters[t.id]=!0,
i.setAjaxParameter("metrika",Object.keys(this.counters))}},{getInstance:function(){return this.instance||(this.instance=BEM.create("metrika")),
this.instance}}),_borschik("5NO2qC3NgtpnDtgIztRjyKKG7NQ")&&BEM.DOM.decl("timing",{onSetMod:{js:function(){
this.data={},this.visibilityState={visible:1,hidden:2,prerender:3}[this.getVisibilityState()],this.send();
}},send:function(){this.getData().then(this.changeThis(function(t){this._send(this.buildCounterParams(this.normalizeMetrics(this.buildMetrics(t))));
}))},_send:function(t){t&&(document.createElement("IMG").src=[this.getClickUrl(),this._serializeParams(t),"*"].join("/"));
},getData:function(){var t=this._timing=(window.performance||{}).timing;if(!t||!t.navigationStart||t.navigationStart<+new Date-18e5)return $.Deferred().reject().promise();
var e=this.data;return $.when.apply($,this.getDataList()).pipe(function(){return e})},buildMetrics:function(t){
var e=this._timing,i={1036:[e.domainLookupStart,e.navigationStart],1037:[e.domainLookupEnd,e.domainLookupStart],
1038:[e.connectEnd,e.connectStart],1039:[e.responseStart,e.connectEnd],1040:[e.responseEnd,e.responseStart],
1040.906:[e.responseEnd,e.domainLookupStart],1310.1309:[e.domContentLoadedEventEnd,e.domContentLoadedEventStart],
1310.1007:[e.domContentLoadedEventStart,e.responseStart]},n=this.data.firstPaintTime;n&&n>0&&(i[1041]=[n,e.responseStart],
i[1041.906]=[n,e.domainLookupStart]);var s=e.secureConnectionStart;s&&s>0&&(i[1383]=[e.connectEnd,s]);
var o=window.performance.navigation;return o&&(o.redirectCount&&(i[1384.1385]=o.redirectCount),(1==o.type||2==o.type)&&(i[770.76]=o.type)),
this.visibilityState&&(i[1484]=this.visibilityState),i},normalizeMetrics:function(t){var e=this._timing.navigationStart;
return $.each(t,function(i,n){if($.isArray(n)){if(n[0]<n[1]||n[1]<e)return t=!1;t[i]=n=n[0]-n[1]}return 0>n?t=!1:void 0;
}),t},buildCounterParams:function(t){if(t){var e=this.getCounterParams();return e.vars=$.extend(t,this.params.vars),
e.vars[1042]=encodeURIComponent(navigator.userAgent),e}},getDataList:function(){if(2==this.visibilityState||3==this.visibilityState)return[];
var t,e;this._timing.msFirstPaint&&(t=this._timing,e="msFirstPaint"),this.withLoadTimes(function(i){t=i,
e="firstPaintTime"});var i=this,n=[];return t&&n.push(this.promiseProperty(t,e).then(function(t){"firstPaintTime"===e&&(t*=1e3),
i.data.firstPaintTime=Math.floor(t)})),n},promiseProperty:function(t,e,i){var n=this.channel("sys"),s=$.Deferred(),o=function(){
var n=$.isFunction(t)?t():t;return n&&n[e]?void((i?i(n[e]):n[e]>0)&&s.resolve(n[e],n)):s.reject("Property does not exist");
};return n.on("tick",o),s.always(function(){n.un("tick",o)}),s.promise()},withLoadTimes:function(t){var e=(window.chrome||{}).loadTimes;
return $.isFunction(e)&&t&&t.call(this,e),this},getCounterParams:function(){return{dtype:"stred",pid:1,
cid:72202,path:"690.1033"}},getVisibilityState:function(){return document.visibilityState||document.webkitVisibilityState||document.msVisibilityState;
},getClickUrl:function(){var t=this.params.clckHost;if(!t){var e=location.hostname.match(/^(?:[-\w]+\.)*(yandex(?:.[a-z]+)+)$/i);
t=(e?e[1]:"yandex.ru")+"/clck"}return"//"+t+"/click"},_flatten:function(t,e){var i=[];return e=e||"=",
$.each(t,function(t,n){i.push(t+e+n)}),i},_serializeParams:function(t){var e=this;return $.each(t,function(i,n){
$.isPlainObject(n)&&(t[i]=e._flatten(n).join(","))}),this._flatten(t).join("/")}}),_borschik("N2zmuIYLhfClKKgfzkgobQgNVf0")&&BEM.DOM.decl("timing",{
getCounterParams:function(){var t=this.__base.apply(this,arguments);return this.params.reqid&&(t.reqid=encodeURIComponent(this.params.reqid)),
t}}),_borschik("p3aTW020dg28ZHd8xIgd_T9KerI")&&BEM.DOM.decl("ajax-perf",{errors:{UNKNOWN_ERROR:-1,SERVER_TIMEOUT:1,
CLIENT_TIMEOUT:2,ABORT:3,PARSE_ERROR:4,JS_ERROR:5,HTTP_ERROR:6,HANDLED_ERROR:7},onSetMod:{js:function(){
this._requests={},this._stateChange=0,this._bindEvents()}},_bindEvents:function(){var t=this;BEM.blocks.history.getInstance().on("statechange",function(){
t._stateChange=+new Date}),BEM.channel("main").on("updateStart",function(){t._render=+new Date}).on("updateStop",function(){
t._render&&(t._render=+new Date-t._render)}),this.bindToDoc({ajaxSend:this._onSend,ajaxError:this._onError,
ajaxSuccess:this._onSuccess,ajaxComplete:this._onComplete})},_getRequestData:function(t){return this._requests[$.identify(t)];
},_onSend:function(t,e,i){this.filterRequest(i)&&(this._requests[$.identify(e)]={ajaxSend:+new Date,stateChange:this._stateChange
})},_onSuccess:function(t,e,i,n){if(n&&n.error){var s=this._getRequestData(e);s&&(s.ajaxError=+new Date,
s.ajaxErrorType=this.errors.HANDLED_ERROR)}},_onError:function(t,e,i,n){var s=this._getRequestData(e);
s&&(s.ajaxError=+new Date,s.ajaxErrorType=this._getErrorType(e,n))},_onComplete:function(t,e,i){var n=this._getRequestData(e);
if(n){n.ajaxComplete=+new Date;var s=this._buildMetrics(n),o=i.url;this._hasResourceTiming()&&!n.ajaxError?this.afterCurrentEvent(function(){
s=$.extend(s,this._buildMetricsForUrl(o)),this._send(s,o)}):this._send(s,o),delete this._requests[$.identify(e)];
}},_getErrorType:function(t,e){var i=this.errors;if(0===t.status&&"timeout"===t.statusText)return i.SERVER_TIMEOUT;
switch(e){case"timeout":return i.CLIENT_TIMEOUT;case"canceled":case"abort":return i.ABORT;case"parsererror":
return i.PARSE_ERROR;default:if(e instanceof Error)return i.JS_ERROR}return 200!==t.status&&304!==t.status?i.HTTP_ERROR:i.UNKNOWN_ERROR;
},filterRequest:function(t){var e=BEM.blocks.uri.parse(t.url),i=e.path(),n=e.queryParams;return("/yandsearch"===i||"/search/"===i)&&n.callback&&!(n.rpt||n.filter);
},_hasResourceTiming:function(){return!window.externalHost&&window.performance&&$.isFunction(window.performance.getEntriesByName);
},_buildMetrics:function(t){var e={1201.906:(t.ajaxError||t.ajaxComplete)-t.ajaxSend};return t.ajaxError&&(e["1201.1030"]=t.ajaxErrorType),
t.stateChange&&(e[1201.789]=t.ajaxSend-t.stateChange),this._render&&(e["1201.1310"]=this._render,this._render=0),
e},_buildMetricsForUrl:function(t){t=this._getFullUrl(t);var e,i={},n=performance.getEntriesByName(t);
return n.length&&(n=n[0],e=n.domainLookupStart-n.fetchStart,n.connectEnd===n.fetchStart&&(e=n.requestStart-n.connectEnd),
i={1036:e,1037:n.domainLookupEnd-n.domainLookupStart,1038:n.connectEnd-n.connectStart,1039:n.responseStart-n.connectEnd,
1040:n.responseEnd-n.responseStart,1040.906:n.responseEnd-n.domainLookupStart}),i},_getFullUrl:function(t){
return t.indexOf("//")<0&&(t=location.protocol+"//"+location.host+location.pathname+t),t},getClickUrl:function(){
var t=this.params.clckHost;if(!t){var e=location.hostname.match(/^(?:[-\w]+\.)*(yandex(?:.[a-z]+)+)$/i);
t=(e?e[1]:"yandex.ru")+"/clck"}return"//"+t+"/click"},getCounterParams:function(){return{reqid:encodeURIComponent(BEM.blocks["i-global"].param("reqid")),
dtype:"stred",pid:1,cid:72202,path:"690.1201"}},buildCounterParams:function(t){var e=this.getCounterParams();
return e.vars=$.extend(t,this.params.vars),e.vars[1042]=encodeURIComponent(navigator.userAgent),e},_send:function(t,e){
if(t=this._normalizeMetrics(t)){t=this.buildCounterParams(t);var i=[this.getClickUrl(),this._serializeParams(t),"*"].join("/");
t.vars["1201.1030"]&&(i+=encodeURIComponent(e)),document.createElement("IMG").src=i}},_normalizeMetrics:function(t){
return $.each(t,function(e,i){return isNaN(i)||0>i?t=!1:void(t&&(t[e]=parseInt(i,10)))}),t},_flatten:function(t,e,i){
return e=e||"=",$.map(t,function(t,i){return i+e+t}).join(i||",")},_serializeParams:function(t){t=$.extend({},t);
var e=this;return $.each(t,function(i,n){$.isPlainObject(n)&&(t[i]=e._flatten(n))}),this._flatten(t,"=","/");
}}),_borschik("SyZKvwswG0an9ZSoTuJZ799YJk4")&&BEM.DOM.decl("detect-scripts",{CHECK_TIMEOUT:5e3,onSetMod:{
js:function(){"withCredentials"in new XMLHttpRequest&&this.checkScripts()}},checkScripts:function(){var t=this,e=document.documentElement,i=function(e){
var i=e.target;("SCRIPT"===i.nodeName||"OBJECT"===i.nodeName)&&t.detect(0,i)};$("script[src], object[src]").each(this.changeThis(this.detect)),
e.addEventListener("load",i,!0),setTimeout(function(){e.removeEventListener("load",i,!0)},this.CHECK_TIMEOUT);
},detect:function(t,e){e.checked||(this.filterSrc(e.src)&&this.send(e.src),e.checked=!0)},filterSrc:function(t){
var e=BEM.blocks.uri.parse(t).host(),i="yandex."+BEM.blocks["i-global"].param("tld");return[i,"yastatic.net","yandex.st"].every(function(t){
return t!==e})&&["."+i,".yandex.net",".yandex.ru"].every(function(t){return e.indexOf(t)<0})},send:function(t){
var e=BEM.blocks["i-global"];$.post("//"+this.params.host+"/csp",{from:"web4",path:"690.1893.1894",reqid:e.param("reqid"),
url:t,yandex_login:e.param("login"),yandexuid:e.param("yandexuid")})}}),_borschik("vebvI8wesTpusOfCDq73xLFd2t0")&&BEM.DOM.decl("i-global",{
onSetMod:{js:function(){this.__base.apply(this,arguments),this.__self.rstat=BEM.create({block:"b-statcounter",
elem:"statface",elemMods:{type:"rstat"}});var t={path:"click",keys:["path"]};if(t.customKeys=["vars"],
this.__self.pageLoadCounter=BEM.create("i-statface",t),window.history&&window.history.pushState){var e=BEM.blocks.location.getInstance();
e.getState().params.lr||e.change({params:{lr:this.params.lr},trigger:!1,history:!1})}this.__self.sendCounters(this.__self.viewPortParamsCount());
}}},{sendCounters:function(t){var e={path:"471.143.1007"};t&&$.extend(e,{vars:"-visible-web-cnt="+t.serpTitlesCount+",-visible-direct-cnt="+t.serpAdvTitlesCount+",-visible-banner="+t.bannerInArea+",-viewport-size="+t.winWidth+";"+t.winHeight+",-serp=3"
}),this.param("isCounterHeights")&&(e.vars=(e.vars?e.vars+",":"")+"-res-heights="+this.getBlocksHeights()),
this.rstat.send(this.param("reqid")),(this.param("isPageLoadCounter")||this.param("isCounterHeights"))&&this.pageLoadCounter.set(e).sendCounter();
},getBlocksHeights:function(){var t={};return $("*[data-counter-block-id]").each(function(){var e=$(this).data("counterBlockId");
t[e]=(t[e]||0)+$(this).outerHeight(!0)}),$.map(t,function(t,e){return e+":"+t}).join(";")},viewPortParamsCount:function(){
var t=BEM.DOM.win,e=t.width(),i=t.scrollTop(),n=t.height(),s={t:i+$(".header").outerHeight(),r:e,b:i+n,
l:0},o=function(t,e){if(t&&t.length){var i=t.offset(),n=i.top;return e&&(n+=t.height()),t.length&&i.left<s.r&&n<s.b&&n>s.t;
}},r=function(t){if(t.length){for(var e=0;e<t.length;e++){var i=$(t[e]),n=o(i.find(".serp-item__title"),!0);
if(n||u){if(!n&&u)break;u=!0,i.hasClass("serp-adv__item")?h++:c++}}u=!1}},a=!1,c=0,h=0,u=!1;return r(this.getSerpContent().find(".serp-item")),
o($(".serp-adv__banner"))&&(a=!0),{serpTitlesCount:c,serpAdvTitlesCount:h,bannerInArea:a,winWidth:e,winHeight:n
}}}),_borschik("609TILoTpv4yLQkyaGQqk3vKfFE")&&BEM.DOM.decl("i-global",{},{getSerpContent:function(){
return $(".content__left")}}),_borschik("oCDIhHdBEucNcGni5AOtIX2br9Q")&&!function(){var t=0,e=72043,i=0;
$(document).one("mousemove",function(){i=1}),BEM.decl({block:"b-statcounter",elem:"statface",elemMods:{
type:"rstat"}},{send:function(n,s){n&&setTimeout(function(){Lego.cp(t,e,"M"+i+"/reqid="+n)},s||1e3)}});
}(),_borschik("UbKyfvWL7LNA7gjijRqqQA_Ee7E")&&!function(){var t={};BEM.decl("i-request",{onSetMod:{js:function(){
this._preventCache=!1}},get:function(t,e,i,n){$.isFunction(i)||(n=i,i=this.params.onError),this._get(t,e,i,$.extend({},this.params,n));
},_get:function(e,i,n,s){var o=this._buildCacheKey(e,s),r=t[s.cacheGroup];s.cache&&r&&o in r.data?this.afterCurrentEvent(function(){
i.call(this.params.callbackCtx,r.data[o])},this):this._do(e,i,n,s)},_do:function(t,e,i,n){},_onSuccess:function(t,e,i,n){
n.cache&&!this._preventCache&&this.putToCache(n,t,i),this._preventCache=!1},_buildCacheKey:function(t,e){
return"string"==typeof t?t:$.param(t)},putToCache:function(e,i,n){var s=t[e.cacheGroup]||(t[e.cacheGroup]={
keys:[],data:{}});s.keys.length>=e.cacheSize&&delete s.data[s.keys.shift()];var o=this._buildCacheKey(i,e);
s.data[o]=n,s.keys.push(o)},dropCache:function(){delete t[this.params.cacheGroup]},getDefaultParams:function(){
return{cache:!1,cacheGroup:"default",cacheSize:100,callbackCtx:this}}},{_cache:t})}(),_borschik("rnP4c37vHDI6D89oxQJyecyYhUc")&&!function(t){
t.decl({block:"i-request_type_ajax",baseBlock:"i-request"},{onSetMod:{js:function(){this.__base(),this._requestNumber=this._number=this._preventNumber=this._retryCount=0;
}},_get:function(t,e,i,n){this._number++,this._requestNumber++,this._retryCount=n.retryCount,this.__base.apply(this,arguments);
},_do:function(t,e,i,n){var s=this;if(s._number>s._preventNumber){var o=arguments,r={data:n.data?$.extend({},n.data,t):t
},a=s._wrapCallback(function(i,o,r){s._onSuccess(s._buildCacheKey(t,n),t,i[0],n),s._allowCallback(o,r)&&e.apply(n.callbackCtx,i);
}),c=s._wrapCallback(function(t,e,r){s._allowCallback(e,r)&&(s._retryCount-- >0?setTimeout(function(){
s._do.apply(s,o)},n.retryInterval):i&&i.apply(n.callbackCtx,t))});$.each(["url","dataType","timeout","type","jsonp","jsonpCallback"].concat(n.paramsToSettings||[]),function(t,e){
r[e]=n[e]}),$.ajax(r).done(a).fail(c)}},_wrapCallback:function(t){var e=this._requestNumber,i=this._number;
return function(n){null!==n&&t(arguments,e,i)}},_allowCallback:function(t,e){return e>this._preventNumber&&this._requestNumber===t;
},_buildCacheKey:function(t,e){return"string"==typeof t?t:this.__base(t)+e.url},abort:function(){this._preventNumber=++this._number;
},preventCallbacks:function(){this.abort()},getDefaultParams:function(){return $.extend(this.__base(),{
cache:!0,type:"GET",dataType:"jsonp",timeout:2e4,retryCount:0,retryInterval:2e3})}})}(BEM),_borschik("48vzNHm_v2oqcYFlOqaV9zJ5C7M")&&BEM.decl({
block:"i-request_type_ajax"},{onSetMod:{js:function(){this.__base.apply(this,arguments),this.cacheIrrelevantParams=["skip-banner","redircnt","reqid","csg","session_info","suggest_reqid","app_ajax_rnd"];
var t=BEM.blocks["i-global"].param("serpRequestExtraParams");for(var e in t)t.hasOwnProperty(e)&&this.cacheIrrelevantParams.push(e);
$.ajaxSetup({cache:!0})}},_get:function(t,e,i,n){if(n.data&&(n.data.reqid=BEM.blocks["i-global"].param("reqid"),
n.data.csg=BEM.blocks["i-global"].param("csg"),n.data.suggest_reqid=BEM.blocks["i-global"].param("suggest_reqid")),
this.params.cacheTimeout){var s,o=this._buildCacheKey(t,n),r=this.__self._cache,a=r[n.cacheGroup];n.cache&&a&&o in a.data&&(s=a.timestamps[o],
(new Date).getTime()-s>this.params.cacheTimeout&&(delete a.timestamps[o],delete a.data[o],a.keys.splice(a.keys.indexOf(o),1)));
}this.__base.apply(this,arguments)},_onSuccess:function(t,e,i,n){this.__base.apply(this,arguments),n.hubName&&n.cache&&!this._preventCache&&n.hubCallback(n.hubName,t);
},_buildCacheKey:function(t,e){if("string"==typeof t)return t;for(var i=$.extend(!0,{},t),n=this.cacheIrrelevantParams,s=0,o=n.length;o>s;s++)n[s]in i&&delete i[n[s]];
return $.param(i)+e.url},putToCache:function(t,e){var i=this._buildCacheKey(e,t),n=this.__self._cache,s=n[t.cacheGroup]||(n[t.cacheGroup]={
keys:[],data:{},timestamps:{}});this.__base.apply(this,arguments),s.keys.length>=t.cacheSize&&delete s.timestamps[s.keys[0]],
s.timestamps[i]=(new Date).getTime()},getDefaultParams:function(){return $.extend(this.__base(),{jsonpCallback:function(){
return"c"+$.expando.substr(20)+$.now().toString().substr(7)}})}}),_borschik("cx78Xug3m9kpJD5vUgffPTOxu3M")&&!function(){
BEM.decl("i-mcounter",{},{entropy:0,cellSize:100,previous:"",current:"",moves:{total:0,cells:{}},init:function(){
this.bind()},bind:function(){var t=this;$(window).unbind("mousemove.i-mcounter").bind("mousemove.i-mcounter",function(e){
t.track(e.clientX,e.clientY)})},track:function(t,e){this.current=this.getKey(t,e),this.shouldTrack()&&(this.updateCellCounter(),
this.moves.total++,this.previous=this.current)},shouldTrack:function(){return this.current!==this.previous||!this.previous;
},updateCellCounter:function(){var t=this.moves.cells;this.current in t||(t[this.current]=0),t[this.current]++;
},getKey:function(t,e){return Math.floor(t/100)+"."+Math.floor(e/100)},getCellPosition:function(t){return Math.floor(t/this.cellSize);
},get:function(){return this.calculate(),this.entropy},calculate:function(){var t=0,e=this.moves.cells,i=this;
$.each(e,function(e,n){var s=i.moves.total,o=n/s;t-=o*Math.log(o)/Math.log(2)}),this.entropy=t}}).init();
}(),_borschik("f6eKZk0PhCBFVSlgNXHL-Z0dr2Y")&&BEM.DOM.decl("paranja",{onSetMod:{js:function(){var t=this;
$(t.params.rel).each(function(){$(this.elem||t.domElem).on(this.event,t[this.method].bind(t))}),this.bindTo("leftclick tap",function(){
this.trigger("click")})},state:{open:function(){this.trigger("open")},close:function(){this.trigger("close");
}}},open:function(){this.setMod("state","open")},close:function(){this.setMod("state","close")}},{live:!1
}),_borschik("AnhOOAwNyTYMDg_6KJmNsU6DvhI")&&!function(t){var e=t.event.special.leftclick={setup:function(){
t(this).bind("click",e.handler)},teardown:function(){t(this).unbind("click",e.handler)},handler:function(e){
e.button||(e.type="leftclick",t.event.dispatch.apply(this,arguments),e.type="click")}}}(jQuery),_borschik("54FsKq8H7q3yhQ0UqgzhufAMzYE")&&BEM.decl("suggest2-popup",{
onSetMod:{js:{inited:function(){this._popup=this.params.popup,this.bindSuggestEvents()}}},show:function(t){
throw new Error("Этот метод должен быть переопределен в модификаторе _for")},hide:function(t){throw new Error("Этот метод должен быть переопределен в модификаторе _for");
},setContent:function(t){return this._popup.setContent(t),this},isShown:function(){throw new Error("Этот метод должен быть переопределен в модификаторе _for");
},owner:function(t){return t?(this.params.owner=t,this):this.params.owner},get:function(){return this._popup;
},width:function(t){return void 0===t?this._popup.domElem.outerWidth():(this._popup.domElem.outerWidth(t),
this)},destruct:function(){this._popup&&(this.unbindAllEvents(),this.__base.apply(this,arguments))},bindSuggestEvents:function(){
return this.params.suggest.on({select:this._onSuggestSelect,update:this._onSuggestUpdate},this),this},
_onSuggestSelect:function(t,e){this.hide(e)},_onSuggestUpdate:function(t,e){e.items.length||this.hide({
response:"empty"})},unbindAllEvents:function(){return this.params.suggest.un("select").un("update"),this;
}}),_borschik("K-tWNBTXr1VYgFaCWy__wtJFvto")&&BEM.DOM.decl("suggest2-detect",{onSetMod:{js:{inited:function(){
this.bindToDoc("keydown",function(t){this.__self._pressedKeyCode=t.which},this).bindToDoc("keyup",function(){
this.__self._pressedKeyCode=null},this),this.__self.isSupportInlineSVG()||this.setMod("inlinesvg","no");
}}}},{_pressedKeyCode:null,isPressedEscape:function(){return 27===this._pressedKeyCode},_isSupportInlineSVG:null,
isSupportInlineSVG:function(){if(null!==this._isSupportInlineSVG)return this._isSupportInlineSVG;var t=document.createElement("div");
return t.innerHTML="<svg/>",this._isSupportInlineSVG="http://www.w3.org/2000/svg"===(t.firstChild&&t.firstChild.namespaceURI),
this._isSupportInlineSVG}}),_borschik("k7q-UYlVOGKTX7n1xfyL02rf5ac")&&BEM.DOM.decl("serp-header",{onSetMod:{
js:function(){this.params.advPressed&&this.afterCurrentEvent(this.openAdvancedSearch),this.searchInput=this.findBlockInside("search2").findBlockInside("input","input"),
BEM.channel("header").on("init",function(t,e){this.updateData(e,!0)},this.searchInput).on("hideRightSide",function(){
this.setMod(this.elem("nav"),"hidden","animated")},this).on("showRightSide",function(){this.delMod(this.elem("nav"),"hidden");
},this),BEM.channel("head-stripe").on("show",function(){this.setMod("has-head-stripe","yes")},this).on("hide",function(){
this.delMod("has-head-stripe"),this.domElem.css("margin-top","")},this),this.searchInput.on({focus:function(){
this.setMod(this.elem("main"),"focused","yes")},blur:function(){this.delMod(this.elem("main"),"focused");
}},this),$(window).on("message",this._onMessage.bind(this))}},openAdvancedSearch:function(t){var e=this.findBlockInside({
block:"input",modName:"settings-inside",modVal:"yes"});e&&e.openAdvancedSearch(t)},_onMessage:function(t){
if("tableau.click"===t.originalEvent.data)try{localStorage.setItem("is-clicked-tableau",!0);var e=this.findBlockInside("head-stripe");
e&&($(".serp-header_has-head-stripe_yes").css({"min-height":"-="+$(e.domElem).height()+"px"}),e.setMod("hidden","yes")),
$(window).off("message",this._onMessage)}catch(i){}}}),_borschik("nbREdyZWfHpkebVUQlOCoRIzzA8")&&BEM.DOM.decl("serp-header",{
onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this.popup=this.findBlockInside("popup2"),
this.popup.on({beforeOpen:function(){this.setMod(this.elem("main"),"suggest","open")},beforeClose:function(){
this.delMod(this.elem("main"),"suggest")}},this)}}}}),_borschik("62NPZDhcwDYyzYflMSxgVUejtfY")&&BEM.DOM.decl({
block:"logo",modName:"logotablo",modVal:"yes"},{onSetMod:{js:function(){this.__base.apply(this,arguments);
var t=this.findBlockOutside("b-page"),e=t.findBlockInside("search2").findBlockInside("input");this.channel("serp-request").on("success",function(){
this.tableau.setSearchText(encodeURIComponent(e.val()))}.bind(this)),this.tableauOpenDelay="number"==typeof this.params.tableauOpenDelay?this.params.tableauOpenDelay:300,
this._initTablo(encodeURIComponent(e.val()))}},_initTablo:function(t){var e="/tableau/tableau.html?",i={
"service-id":"serp",device:"desktop",lang:BEM.I18N.lang(),preset:this.params.tabloPreset,target:"blank"
};if(this.params.services&&(i.services=this.params.services),e+=$.param(i),"tr"===this.params.tabloPreset){
var n=$.Tableau.prototype._buildUrl;$.Tableau.prototype._buildUrl=function(t){var e=n(t);return e+"&services=mail+weather+images+translate+maps+video";
}}this.tableau=$.Tableau({serviceId:"serp",headerElem:$(".serp-header"),triggerElem:this.domElem,host:this.params.tabloBeta?"//betastatic.yastatic.net":"//yastatic.net",
toggleDelay:this.tableauOpenDelay,path:e}),this.tableau.setSearchText(t),$(this.tableau.getNode()).on("open",this._openTableau.bind(this)).on("close",this._closeTableau.bind(this));
},_sendCounter:function(t){var e=this.params.counter_data[t];w(null,e[0],e[1])},_openTableau:function(){
this._sendCounter("show")},_closeTableau:function(){this._sendCounter("hide")}}),_borschik("EABDuj0ahbC49sOSZkkKbhJ3EWs")&&!function(t,e){
function i(s){if(!s.serviceId)throw new Error("Parameter 'serviceId' is required");if(this.constructor!==i)return new i(s);
if(b&&this._addStyle(b),!s.device){if(1!==y.length)throw new Error("Parameter 'device' is required");s.device=y[0];
}this._useDeviceSpecificMethods(s.device),this._params=s,this._isOpened=!1,this._isInited=!1,this._handlers=[],
this._bindHandler(e(t),"message",n),this._$iframe=this._buildIframe(this._buildUrl(this._params)),this._$tail=this._buildTail(),
this._$tableau=this._buildAndAppendTableau(this._params,this._$iframe,this._$tail),s.headerElem&&this._bindWiringHandlers();
}function n(t){var e=t.originalEvent.data;if("string"==typeof e&&0===e.indexOf(d)){var i=e.split(":");
switch(i[0]){case p:this._isInited=!0,this._isOpened&&this._open(),this._$tableau.trigger("init");break;
case _:this._params.height||this._$tableau.height(parseInt(i[1],10)+2*m);break;case f:this.close()}}}
var s="https://yastatic.net",o="/tableau/tableau.html",r="tableau",a=r+"_opened",c=r+"_closed",h=r+"_device_",u=r+"__content",l=r+"__tail",d="tableau.",p=d+"ready",f=d+"close",_=d+"height",m=1,g=150,b="",v=!1,y=[],k={};
i.prototype.setSearchText=function(t){return this._postMessage({fnName:"updateUrls",fnArgs:[{text:t,serviceId:this._params.serviceId
}]}),this},i.prototype._postMessage=function(t){function e(){i.postMessage(n,"*")}var i=this._$iframe[0].contentWindow,n=JSON.stringify(t);
this._isInited?e():this._$tableau.on("init",e)},i.prototype.setPos=function(t){return"number"==typeof t.top&&(this._top=t.top),
"number"==typeof t.left&&(this._left=t.left),"number"==typeof t.tail&&(this._tail=t.tail),this._isOpened&&this._reposition(),
this},i.prototype._reposition=function(){"number"==typeof this._top&&this._$tableau.css("top",this._top-m),
"number"==typeof this._left&&this._$tableau.css("left",this._left-m),"number"==typeof this._tail&&this._$tail.css("left",this._tail);
},i.prototype.open=function(){var t=this._isOpened;return this._isOpened=!0,!t&&this._isInited&&this._open(),
this},i.prototype._open=function(){this._reposition(),this._$tableau.removeClass(c).addClass(a),this._postMessage({
fnName:"open"}),this._$tableau.trigger("open")},i.prototype.close=function(){var t=this._isOpened;return this._isOpened=!1,
t&&this._isInited&&this._close(),this},i.prototype._close=function(){this._$tableau.removeClass(a);var t=this;
setTimeout(function(){t._isOpened||t._$tableau.addClass(c)},g),this._$tableau.trigger("close")},i.prototype.isOpened=function(){
return this._isOpened},i.prototype.isInited=function(){return this._isInited},i.prototype.getNode=function(){
return this._$tableau[0]},i.prototype.destruct=function(){var t=this;e.when(this._$tableau.trigger("destruct")).done(function(){
e.each(t._handlers,function(t,e){e.$node.off(e.event,e.callback)}),t._handlers=[],t._$tableau.remove();
})},i.prototype._bindHandler=function(t,i,n){var s=e.proxy(n,this);return t.on(i,s),this._handlers.push({
$node:t,event:i,callback:s}),this},i.prototype._buildUrl=function(t){var i={};return e.each(["preset","lang","domain","device","target","serviceId"],function(e,n){
var s=t[n];if(s){var o=n.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()});i[o]=s}}),(t.host||s)+(t.path||o+"?"+e.param(i));
},i.prototype._buildIframe=function(t){return e("<iframe/>",{"class":u,src:t,frameborder:0,allowtransparency:!0
})},i.prototype._buildTail=function(){return e("<div/>",{"class":l})},i.prototype._buildAndAppendTableau=function(t,i,n){
return e("<div/>",{"class":[r,h+t.device,c].join(" "),css:{width:t.width+2*m,height:t.height&&t.height+2*m,
zIndex:t.zIndex}}).append(n).append(i).appendTo("body")},i.prototype._addStyle=function(t){if(!v){var e=document.createElement("style");
e.type="text/css",document.getElementsByTagName("head")[0].appendChild(e),e.styleSheet?e.styleSheet.cssText=t:"textContent"in e?e.textContent=t:e.innerHTML=t,
v=!0}},i._onDevice=function(t,i){function n(t,n){var s=k[n]||(k[n]={});e.each(i,function(t,e){var i=s[t]||(s[t]=[]);
i.push(e)})}"string"==typeof t?(n(0,t),y.push(t)):e.each(t,n)},i.prototype._useDeviceSpecificMethods=function(t){
var i=this,n=function(){};e.each(k[t],function(t,s){var o=i[t]?e.proxy(i[t],i):n;e.each(s,function(t,n){
o=e.proxy(n,i,o)}),i[t]=o})},e.Tableau=i}(window,jQuery),_borschik("ogwMuQkje6xX6oxQm2mbKQqBY0c")&&!function(t,e){
var i=-2;e._onDevice(["desktop","touch-pad"],{_reposition:function(t){var e=this._params,n=e.headerElem;
if(n){var s=e.triggerElem,o=this._$tableau,r=n.offset().top+n.outerHeight()+i,a=s.offset().left-o.offset().left+(s.outerWidth()-this._$tail.outerWidth())/2;
this._top=Math.round(r),this._tail=Math.round(a)}t()}})}(jQuery,jQuery.Tableau),_borschik("uW6g9UQQAEMKqGorPl_l1vLGFAw")&&!function(t,e){
function i(){var t=this;this._clearToggleTimer(),this.isOpened()||this._mousePressed||(this._toggleTimer=setTimeout(function(){
t.open(),t._toggleTimer=null},this._params.toggleDelay||a))}function n(t){var e=this;this._clearToggleTimer()||s(t,this._params.triggerElem)||(this._toggleTimer=setTimeout(function(){
e.close(),e._toggleTimer=null},this._params.toggleDelay||a))}function s(t,e){var i=e.offset();return t.clientX>0&&t.clientY>0&&t.pageX<e.outerWidth()+i.left&&t.pageY<e.outerHeight()+i.top;
}function o(){this.isOpened()||this._clearToggleTimer(),this._mousePressed=!0}function r(){this._mousePressed=!1;
}var a=300;e._onDevice("desktop",{_bindWiringHandlers:function(e){e(),this._toggleTimer=null,this._mousePressed=!1;
var s=this._params.triggerElem,a=t(document.body);this._bindHandler(s,"mousemove",i)._bindHandler(s,"mouseleave",n)._bindHandler(a,"mousedown",o)._bindHandler(a,"mouseup dragend",r)._bindHandler(this._$tableau,"mouseenter mousemove",i)._bindHandler(this._$tableau,"mouseleave",n);
}}),e.prototype._clearToggleTimer=function(){return this._toggleTimer?(clearTimeout(this._toggleTimer),
this._toggleTimer=null,!0):!1}}(jQuery,jQuery.Tableau),_borschik("nWr9wZQi3vohQ7AfXgX6qbfZqt4")&&BEM.DOM.decl("search2",{
_needSend:function(t){var e="?"+this.serialize()+(t?"&"+t:""),i=this._cleanParams(BEM.blocks.uri.parse(e).queryParams),n=Object.keys(i),s=this._cleanParams(this.location.getState().params),o=Object.keys(s);
return o.length!==n.length?!0:n.some(function(t){return!(i[t]instanceof Array&&s[t]instanceof Array&&i[t].sort().join().trim()===s[t].sort().join().trim());
})},_cleanParams:function(t){return t=$.extend({},t),["msid","tld","rnd"].forEach(function(e){t.hasOwnProperty(e)&&delete t[e];
}),t},serialize:function(t){var e=this.domElem.serializeArray();return $.each(t||{},function(t,i){e.push({
name:t,value:i})}),$.param(e)}}),_borschik("9EZvZG2l5FgCZTu2hbUc6RT8tus")&&BEM.DOM.decl("search2",{onSetMod:{
js:function(){this.__base();var t=this.findBlockOutside("serp-header"),e=BEM.blocks["i-ua"].ie,i=e;this.input=this.findBlockInside("input","input"),
this.inputClear=this.input.elem("clear"),this._header=t,this.bPage=this.findBlockOutside("b-page"),BEM.blocks["i-ua"].canUseAjax()&&(i>9||!e)&&(this.location=BEM.blocks.location.getInstance(),
this.serp=this.input.findBlockOn("serp")),this.inputClear.on("click",this._onClear.bind(this)),this.bindTo("submit",this._onSubmit.bind(this)),
this._rnd=0,this._lastSubmit=new Date,this.input.on("focus change",this.initSuggestCounter.bind(this));
}},initSuggestCounter:function(){this.suggestCounter&&(this.suggestCounter=this.findBlockOn("suggest2-counter"),
this.suggestCounter.on("submit",function(t,e){this.setSuggestCsgParams(e)},this))},onAjaxSuccess:function(t){
var e=t.params;e.advSearchSite&&this._header.openAdvancedSearch({site:e.advSearchSite})},getAdvancedSearch:function(){
return this.advancedSearch||(this.advancedSearch=BEM.DOM.scope.bem("b-page").findBlockInside("advanced-search")),
this.advancedSearch},getAdvancedParams:function(){return this.getAdvancedSearch()?this.getAdvancedSearch().getParams():"";
},setSuggestCsgParams:function(t){this.suggestCsgParams||(this.suggestCsgParams=[t.since_last_change,t.since_first_change,t.user_input.length,t.ratio.actionsCount,t.path.index,"button_by_mouse"===t.path.submit?"1":"0","edit"===t.path.state?"1":"0"].join(","));
},submitIfNeeded:function(){this._lastSubmit=new Date,this.domElem.submit()},_onClear:function(t){w(null,this.input.params.counterClear),
t.preventDefault()},_onSubmit:function(t,e){if(!(e&&e.item&&e.item.hasMod("interact","link"))){BEM.blocks["i-global"]._params.timeSinceSearchSubmit=(new Date).getTime();
var i,n=this.getAdvancedParams(),s={url:this.domElem.attr("action")+"?"+this.serialize()+(n?"&"+n:"")
};this.input.mayShowSuggest(!1);var o=e&&e.item&&e.item.params&&e.item.params.cgi;if(o&&o.forEach(function(t){
s.url+="&"+t.join("=")}),i=!this.serp||location.host.length+s.url.length>BEM.blocks["i-global"].param("maxAjaxUrlLength"))return document.location=s.url,
!1;var r=new Date-this._lastSubmit>5e3,a=this._needSend(n);return a?this._rnd=0:r&&(this._rnd=Math.floor(1e5*Math.random())),
this._rnd&&(s.url+="&rnd="+this._rnd,s.history=!1),(r||a)&&(this._lastSubmit=new Date),this.suggestCsgParams&&(BEM.blocks["i-global"].setParams({
csg:this.suggestCsgParams}),this.suggestCsgParams=null),this.location.change(s),!1}}}),_borschik("Jr5GnIQpBr-is4wfC7x7LXMiMYM")&&!function(){
BEM.DOM.decl("i-ua",{},{placeholder:"placeholder"in document.createElement("input")})}(),_borschik("TY9ZhhqH1cBNpQSZZiUA-5uukms")&&BEM.DOM.decl("input",{
onSetMod:{js:function(){this._val=this.elem("control").val()},disabled:function(t,e){this.elem("control").attr("disabled","yes"===e);
},focused:function(t,e){if(this.hasMod("disabled","yes"))return!1;var i="yes"===e;i?this._focused||this._focus():this._focused&&this._blur(),
this.afterCurrentEvent(function(){this.trigger(i?"focus":"blur")})}},isDisabled:function(){return this.hasMod("disabled","yes");
},val:function(t,e){if("undefined"==typeof t)return this._val;t=null===t?"":t.toString();var i=this.elem("control");
return i.val()!==t&&i.val(t),this._val=t,this.trigger("change",e),this},name:function(t){var e=this.elem("control");
return arguments.length?(e.attr("name",t),this):e.attr("name")},getSelectionEnd:function(){var t=this.elem("control")[0],e=0;
if("number"==typeof t.selectionEnd)e=t.selectionEnd;else{var i=document.selection.createRange();if(i&&i.parentElement()===t){
var n=t.value.length,s=t.createTextRange();s.moveToBookmark(i.getBookmark());var o=t.createTextRange();
o.collapse(!1),e=s.compareEndPoints("EndToEnd",o)>-1?n:-s.moveEnd("character",-n)}}return e},_onFocus:function(){
return this._focused=!0,this.setMod("focused","yes")},_onBlur:function(){return this._returnFocus?(this.afterCurrentEvent(function(){
this._focus()}),this):this.hasMod(this.elem("clear"),"pressed")?this:(this._focused=!1,this.delMod("focused"));
},_focus:function(){return this.hasMod("disabled","yes")?!1:void this.elem("control").focus()},_blur:function(){
this._returnFocus=!1,this.elem("control").blur()},destruct:function(){this._blur(),this.__base.apply(this,arguments);
}},{live:function(){this.liveBindTo("control","focusin focusout",function(t){this["focusin"===t.type?"_onFocus":"_onBlur"](t);
})}}),_borschik("Bqe3B-9IJx4a1-4iZkwhY1j1lgs")&&!function(){var t,e=[],i=function(){e.forEach(function(t){
t.val(t.elem("control").val())})};BEM.DOM.decl("input",{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),
this._instanceIndex=e.push(this)-1;var n=this.elem("control"),s=$.dom.getActiveElement(),o=this.params.autoFocus&&!s.is("input, textarea");
(s[0]===n[0]||o)&&(this.setMod("focused","yes")._focused=!0),t||(t=this.channel("sys").on({tick:i,idle:function(){
t.un("tick",i)},wakeup:function(){t.on("tick",i)}})),this.params.shortcut&&this.bindToDoc("keydown",function(t){
t.ctrlKey&&38===t.which&&!$(t.target).is("input, textarea")&&this.setMod("focused","yes")})}}},val:function(t,e){
var i="undefined"!=typeof t,n=this.elem("control");return t=i?null===t?"":t.toString():n.val(),this._val!==t&&(this._val=t,
n.val()!==t&&n.val(t),this.trigger("change",e)),i?this:t},_focus:function(){var t=this.elem("control")[0];
if(t.createTextRange&&!t.selectionStart){var e=t.createTextRange();e.move("character",t.value.length),
e.select()}else t.focus()},destruct:function(){this.__base.apply(this,arguments),this.params.shortcut&&this.unbindFromDoc("keydown"),
e.splice(this._instanceIndex,1),e.slice(this._instanceIndex).forEach(function(t){t._instanceIndex--});
}},{})}(),_borschik("THWluzA2jP42HExfPHO3sANO1Xc")&&BEM.DOM.decl("input",{_mayShowSuggest:!0,_hasChanged:!1,
onSetMod:{js:function(){this.__base(),this.on("change",function(){this._hasChanged=!0})}},onAjaxPrepare:function(){
this._hasChanged=!1},onAjaxSuccess:function(t){var e=t.params;this._mayShowSuggest=!0,this._hasChanged||(this.updateData(e),
this.delMod("focused"))},updateData:function(t,e){t&&(!e&&this.val(t.value,{noSuggest:!0}),this.findBlockOutside("search2").findElem("hidden-inputs").replaceWith(t.hiddenInputs));
},mayShowSuggest:function(t){return void 0!==t&&(this._mayShowSuggest=t),this._mayShowSuggest}}),_borschik("sqkkdQr0R-IEJ1YCJckrwW_aH-c")&&!function(){
var t,e=0,i=!1,n=0,s=BEM.channel("sys"),o=50;BEM.decl("i-system",{},{start:function(){$(document).bind("mousemove keydown",function(){
n=0,i&&(i=!1,s.trigger("wakeup"))}),this._tick()},_tick:function(){var r=this;s.trigger("tick",{counter:e++
}),!i&&(n+=o)>3e3&&(i=!0,s.trigger("idle")),t=setTimeout(function(){r._tick()},o)}}).start()}(),_borschik("f5KQTTl2sUKhNnE_0r0h1KAPa30")&&BEM.DOM.decl("input",{
onSetMod:{js:function(){this.__base.apply(this,arguments),this.on("change",this._updateClear)._updateClear();
}},_onBoxClear:function(){this.hasMod("clear","visibility","visible")||this.hasMod("disabled","yes")||this.setMod("focused","yes");
},_onClearClick:function(){return this.trigger("clear"),this.removeInsets&&this.removeInsets(),this.clearInput({
source:"clear"})._focus()},clearInput:function(t){return this.val("",t),this},_updateClear:function(){
return this.toggleMod(this.elem("clear"),"visibility","visible","",!!this._val)}},{live:function(){this.__base.apply(this,arguments),
this.liveBindTo("clear","mousedown",function(t){1===t.which&&this.setMod(this.elem("clear"),"pressed","yes");
}).liveBindTo("clear","leftclick tap",function(){this.delMod(this.elem("clear"),"pressed"),this._onClearClick();
}).liveBindTo("box","leftclick tap",function(){this._onBoxClear()})}}),_borschik("LNRXnTKEnnJjIaOxEn1smJIzBHE")&&!function(t){
if(t.dom)throw Error("$.dom namespace is already used");t.dom={getActiveElement:function(){try{return t(document.activeElement);
}catch(e){return t()}}},t.fn.isFocused=function(){return this.is(t.dom.getActiveElement())}}(jQuery),
_borschik("hmdCRyBDDkoQaduLy8Hl3uGGXe8")&&BEM.DOM.decl("input",{onSetMod:{js:function(){this.__base(),
this.elem("requery-input").appendTo(this.elem("control").parent())}},showRequery:function(){this.setMod("requery","yes");
},hideRequery:function(){this.delMod("requery")},updateRequeryHidden:function(t){this.elem("requery-input").val(t?t+" ":""),
this.elem("requery-hidden").html(t?t+"&nbsp;":"")},updateRequeryVisible:function(t){this.elem("requery-visible").html(t);
}}),_borschik("gWelOYrRPjlTN5fLe-kRivhi6zM")&&BEM.DOM.decl("input",{onSetMod:{js:function(){if(this.__base.apply(this,arguments),
this.elem("found").length){var t=this.elem("control");$("<span/>",{"class":this.buildSelector("query-holder").slice(1)
}).css({"font-family":t.css("font-family"),"font-size":t.css("font-size")}).text(this.val()).appendTo(this.domElem),
this._controlQueryLeftOffset=parseInt(t.css("padding-left"),10)+(parseInt(t.css("border-left-width"),10)||0),
this.on("change",this._toggleVisibility).bindToWin("resize",$.throttle(this._onWindowResize,100,this)).setPosition();
}}},_toggleVisibility:function(){var t=this.val()===this.elem("query-holder").text()&&this.textWidth<this.inputWidth&&!!this.elem("found").text();
this.toggleMod(this.elem("found"),"visibility","visible","",t)},setPosition:function(){var t=this.elem("control"),e=this.elem("found"),i=t.offset().left-this.domElem.offset().left+this._controlQueryLeftOffset+this.elem("query-holder").width();
this.inputWidth=t.width(),this.textWidth=e.width()+i,e.css({left:i}),this._toggleVisibility()},_onWindowResize:function(){
this.inputWidth=this.elem("control").width(),this._toggleVisibility()},setFound:function(t,e){this.elem("found").text(t),
this.elem("query-holder").text(e),this.setPosition()}}),_borschik("CPhvoQKaG_bfMOFW0g9rwlyBKB8")&&BEM.DOM.decl("input",{
onSetMod:{js:function(){this.__base.apply(this,arguments),this.bindTo("found","mousedown",function(){
this.setMod("focused","yes")})}}}),_borschik("tbxoh75MGICWeUUSOzFaqBi70s4")&&!function(){var t=function(t){
var e=t.charCode||t.keyCode||t.which||0,i=t.ctrlKey||t.altKey||t.metaKey,n=e>=48&&57>=e,s=e>=96&&105>=e,o=[e>=65&&90>=e,e>=1025&&1071>=e,0===e,231===e].some(Boolean);
return!i&&(n||s||o)};BEM.DOM.decl({name:"input",modName:"autofocus",modVal:"yes"},{onSetMod:{js:function(){
this.__base.apply(this,arguments),this.bindToDoc("keydown",this._autoFocusBind)},autofocus:{yes:function(){
this.bindToDoc("keydown",this._autoFocusBind)},"":function(){this.unbindFromDoc("keydown")}}},_autoFocusBind:function(e){
if(!this.hasMod("focused","yes")){var i;try{i=document.activeElement.tagName.toLowerCase()}catch(n){}
if(t(e)&&"input"!==i&&"textarea"!==i){var s=this.elem("control")[0],o=this.val();if(o.length>0&&" "!==o.slice(-1)&&(o+=" ",
this.val(o)),s.createTextRange){var r=s.createTextRange();r.collapse(!1),r.select()}else s.selectionStart&&s.setSelectionRange(o.length,o.length);
this.setMod("focused","yes")}}}})}(),_borschik("PDpNMG1B0ArssIb8MkHx3i_RsHM")&&BEM.DOM.decl({block:"input",
modName:"autofocus",modVal:"yes"},{onSetMod:{js:function(){this.__base.apply(this,arguments),this.keyboardBlock=this.findBlockOutside("b-page").findBlockOn("keyboard-shortcuts");
}},_autoFocusBind:function(t){var e=this.__self.KEYS,i=this.__self.CHARCODES,n=String.fromCharCode(t.which);
if(n!==i.TILDE)switch(t.keyCode){case e.BACKSPACE:this.deleteLastCharacter(t);break;case e.QUESTION:break;
default:if(!this.isInputTagActive()&&this.keyboardBlock&&this.keyboardBlock.isVimModeEnabled())return;
this.__base.apply(this,arguments)}},getActiveTag:function(){try{return document.activeElement.tagName.toLowerCase();
}catch(t){return""}},isInputTagActive:function(){var t=this.getActiveTag();return this.hasMod("focused","yes")||"input"===t||"textarea"===t;
},deleteLastCharacter:function(t){this.isInputTagActive()||(t.preventDefault(),this.val(this.val().slice(0,-1)),
this.setMod("focused","yes"))}},{KEYS:{BACKSPACE:8,QUESTION:55},CHARCODES:{TILDE:"~"}}),_borschik("xRMEMBTV40ePCPOvNVHmXC0U-3M")&&BEM.decl({
name:"input",modName:"found",modVal:"yes"},{updateData:function(t){this.__base.apply(this,arguments),
t&&this.setFound(t.found,t.value)}}),_borschik("P-W4I8n902MjTzg7YlWSioyjiIo")&&BEM.decl("i-common__string",{},{
cleverSubstring:function(){var t="…";return function(e,i,n){return e.length>i+n?e.substring(0,i-1)+t:e;
}}(),escapeHTML:function(){var t={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"};return function(e){
return String(e).replace(/&(?!\w+;)|[<>"']/g,function(e){return t[e]||e})}}(),escapeRegExp:function(t){
return t.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},highlight:function(t,e){if(!$.isArray(e))return t;var i,n=[],s=0,o=e.sort(function(t,e){
return t[0]-e[0]}),r=[],a="?",c=~t.indexOf(a),h=function(){for(var e,i=/\&#\d+;/gi;e=i.exec(t);)r.push(e[0]),
t=t.replace(e[0],a)},u=function(t){if(c)return t;for(;~t.indexOf(a)&&r.length;)t=t.replace(a,r[0]),r.shift();
return t};return!c&&h(),o.forEach(function(e){i=s>e[0]?s:e[0],n.push({tag:"span",elem:"span",content:u(t.slice(s,i))
}),n.push({tag:"em",elem:"em",content:u(t.slice(i,s=e[1]))})},this),n.push({tag:"span",elem:"span",content:u(t.slice(s))
}),n}}),_borschik("NIf0K07BPvo_jPRvv3Mrsk5xNhg")&&BEM.DOM.decl({name:"input",modName:"settings-inside",
modVal:"yes"},{onSetMod:{js:function(){this._main=BEM.DOM.scope.bem("b-page").findBlockInside("main"),
this.bindTo("settings","mouseover mouseout",function(t){this.toggleMod(this.elem("settings"),"hovered","yes","","mouseover"===t.type);
}),this.__base.apply(this,arguments)}},openAdvancedSearch:function(t){this._main.openAdvancedSearch(t),
this.setMod(this.elem("settings"),"type","active")},closeAdvancedSearch:function(){this._main.closeAdvancedSearch(),
this.delMod(this.elem("settings"),"type")},toggleAdvancedSearch:function(){var t=this.hasMod(this.elem("settings"),"type","active");
t?this.closeAdvancedSearch():this.openAdvancedSearch()}},{live:function(){return this.liveBindTo("settings","leftclick tap",function(t){
t.preventDefault(),this.toggleAdvancedSearch()}),this.__base.apply(this,arguments)}}),_borschik("YehxnykaVRti8o5PgVAxHMLCb8c")&&BEM.DOM.decl({
name:"input",modName:"settings-inside",modVal:"yes"},{onSetMod:{js:function(){this.bindTo("settings","mouseover mouseout",function(t){
this.toggleMod(this.elem("settings"),"hovered","yes","","mouseover"===t.type)}),this.__base.apply(this,arguments);
}},_onBoxClear:function(){this.hasMod(this.elem("settings"),"hovered","yes")||this.__base.apply(this,arguments);
}}),_borschik("Y6qm5zKWO9IlWpstx58QmjWou4M")&&BEM.DOM.decl("suggest2",{onSetMod:{js:{inited:function(){
this.params.form||this.findBlockOutside("suggest2-form"),this._lastSubmitTime=0,this._lastBlurTime=0,
this._clear()}}},_bodyHandler:function(t){if(!this._isDestructing){var e=$(t.target),i=this.containsDomElem(e)||this.params.form.containsDomElem(e);
i||(this._freezeInputFocus=!1)}},getDefaultParams:function(){return{submitBySelect:!1,updateOnEnterByKeyboard:!0,
onFocus:"request",requestOnEmptyInput:!1,abortQueries:!1,sequentialQueriesTimeout:!1}},destruct:function(){
this.unbindAllEvents(),this.__base.apply(this,arguments)},init:function(){var t=this;return t.params.form.on("submit",function(e,i){
t._lastSubmitTime=(new Date).getTime(),t._isActualSearchCGIParams?t._isActualSearchCGIParams=!1:"suggest2-counter"!==i.data.block&&i.data.prevent!==!1&&this.removeHiddenInputs(),
t._clear(),t._popup.hide()}),t._input=t.params["suggest2-input"],t._popup=t.params["suggest2-popup"],
t._inputValue=t._input.val(),t._model=t.initModel(),t._view=t.initView(),t._counter=t.initCounter(),t._model.on({
response:this.setItems,reject:function(e,i){2===i.code&&(t._popup.hide(),t._clear())}},t),t.bindToDoc("click tap leftclick",t._bodyHandler),
t.bindEvents(),this._input.isFocused()&&this._doRequest(),t},initModel:function(){return BEM.create("suggest2-model",this.params);
},getModel:function(){return this._model},initView:function(t,e){var i=this.getMod("type");return t=t||{},
("simple"===i||"all"===i)&&(t.simple="yes"),("advanced"===i||"all"===i)&&(t.advanced="yes"),BEM.create({
block:"suggest2-view",mods:t||{}},e||{})},getView:function(){return this._view},initCounter:function(){
return this.params.counter?this.params.counter.initValues().bindEvents():void 0},getCounter:function(){
return this._counter},setDataConverter:function(t){return this.getModel().getProvider().convert=t,this;
},setRequestData:function(t){return this.getModel().getProvider().getRequestData=t,this},setRequestUrl:function(t){
return this.getModel().getProvider().getRequestUrl=t,this},setOwner:function(t){return this._popup.owner(t),
this},bindEvents:function(){var t=this;return t._input.bindEvents({change:t._onChange,focus:t._onFocus,
blur:t._onBlur},t),t._popup.on({preshow:function(){t.trigger("preshow")},show:function(){t._onShow()},
hide:function(e,i){t._onHide(i)}}),t.params.form&&t.params.form.on("button-press",t._onSearchButtonMousedown,t),
BEM.blocks["suggest2-item"].on(t.domElem,{"link-click":function(e,i){t._counter&&"_self"===$(i.$e.target).attr("target")&&i.$e.preventDefault();
}}),t},_onShow:function(){this.trigger("show")},_onHide:function(t){this.trigger("hide",t)},_onSearchButtonMousedown:function(){
this._input.realVal(this._input.val()),this._popup.hide()},unbindAllEvents:function(){var t=this;return t.unbindFromDoc("click tap leftclick"),
t._input.unbindAllEvents(),t.params.form.un("submit"),t._model.un("response").un("reject"),t._popup.un("preshow").un("show").un("hide"),
t.params.form&&t.params.form.un("button-press",t._onSearchButtonMousedown,t),t},setItems:function(t,e){
var i=this,n=e.data.items||[];return i._isFormSubmitDurinQuery()||!n.length?(i._popup.hide(),i._clear()):this.params.sequentialQueriesTimeout||i._input.val()===e.val?(i._text=e.val,
i._pos=e.pos,i._meta=e.data.meta||{},i._popup.show(i._view.html(n,i._meta)).width(i.getPopupWidth()),
i._items=i.findBlocksInside("suggest2-item"),i._clearItems().trigger("update",{val:i._text,pos:i._pos,
items:i._items}),i):i._clear()},getItems:function(){return this._items||[]},isBlur:function(){return this._isBlur&&!this._isMouseDown;
},getPopupWidth:function(){},getInputWidth:function(){return 0},isNeedSubmitFormOnSelectItem:function(t){
return this.params.submitBySelect&&"link"!==t.getMod("interact")},_isFormSubmitDurinQuery:function(){
return this._lastSubmitTime?(this._model.filterRequestsByVal(this._input.realVal()),this._model.isTimeInRequestInterval(this._lastSubmitTime)):!1;
},_onChange:function(t,e){this._inputValue!==this._input.val()&&(this._inputValue=this._input.val(),this._doRequest(e));
},_doRequest:function(t){this._model.request(this._input.realVal(this._input.val()),this._input.getCaretPosition(),t);
},_onFocus:function(){!this._popup.isShown()&&this._isBlur&&this.params.onFocus&&this._isLastBlurTimeLater(50)&&(this.getItems().length&&this._input.val()===this._text?(this._clearItems(),
this._popup.show()):this._isMouseDown||"request"!==this.params.onFocus||this._doRequest())},_onBlur:function(){
this._isBlur?(this._clear(),this._popup.hide()):this._freezeInputFocus?(this._clear(),this._input.focus()):this._isMouseDown&&this._input.focus(),
this._lastBlurTime=(new Date).getTime(),this._isBlur=!0},_getItemIndex:function(t){return this.getItems().indexOf(t);
},_clear:function(){return this._isBlur=!0,this._freezeInputFocus=!1,this._clearItems()},_clearItems:function(){
return this._isMouseDown=!1,this._enterItemIndex=-1,this._unselectItems()},_isLastBlurTimeLater:function(t){
return(new Date).getTime()-this._lastBlurTime>t},_unselectItems:function(t){var e=t?[].slice.call(arguments):this.getItems();
return e.forEach(function(t){t.onLeave()}),this},_onSelectItem:function(t,e){var i=this,n=i._getItemIndex(t),s=t.onSelect(e),o=t.valOnSelect();
return i._text=i._input.realVal(o),i._isBlur=!0,i._freezeInputFocus=!1,i._setSearchCGIParams(t),i.trigger("select",{
val:i._text,pos:i._pos,item:t,meta:i._meta,itemIndex:n,byKeyboard:e,callbackOnSelect:s}),o!==!1&&(i._items=[],
this.isNeedSubmitFormOnSelectItem(t)&&i.params.form.submit()),n},_isActualSearchCGIParams:!1,_setSearchCGIParams:function(t){
this.params.form.removeHiddenInputs(),t.params.searchCGI&&(this._isActualSearchCGIParams=!0,this.params.form.appendHiddenInputs(t.params.searchCGI.map(function(t){
return{name:t[0],value:t[1]}})))},_onDownItem:function(){this._isBlur=!1,this._isMouseDown=!0}}),_borschik("OrM_4a7wgmCjUA-w2vNIe4-Xg1o")&&BEM.DOM.decl("suggest2",{
getInputLeft:function(){return 0},getInputWidth:function(){return 0},getContainerWidth:function(){return 0;
},getMetrics:function(){var t=this.getInputLeft(),e=this.getInputWidth(),i=this.getContainerWidth()-t;
return{marginLeft:t,minWidth:e>=i?i:e,maxWidth:i}},adjustView:function(){return{}}}),_borschik("mZLwvju1Li_grxjwrCiKH5hio1Q")&&BEM.DOM.decl("suggest2",{
bindEvents:function(){var t=this;return t._input.bindEvents({keydown:t._onKeyDown,keyup:t._onKeyUp,keypress:t._onKeyPress,
mousedown:function(){t._input.isFocused()&&t._onFocus()}},t),BEM.blocks["suggest2-item"].on(t.domElem,{
mouseover:function(e){t._onEnterItem(e.block,!1)},mouseout:function(e,i){var n=e.block.domElem[0];n===i.relatedTarget||$.contains(n,i.relatedTarget)||t._onLeaveItem(e.block,!1);
},mousedown:function(){t._onDownItem()},leftclick:function(e){t._onSelectItem(e.block,!1)}}),t.__base.apply(t,arguments);
},_onKeyDown:function(t){var e=this.__self.keyboard,i=t.which;!this._popup.isShown()||i!==e.up&&i!==e.down||(t.preventDefault(),
this._enterByKeyboard(i))},_onKeyUp:function(t){var e=this.__self.keyboard;if((t.which===e.left||t.which===e.right)&&(this.trigger("change-cursor-pos"),
this._model.request(this._input.realVal(this._input.val()),this._input.getCaretPosition())),t.which===e.right&&~this._enterItemIndex&&this._enterItemByKeyboard){
var i=this._items[this._enterItemIndex];i&&this.trigger("ahead",{item:i,val:"link"===i.getMod("interact")?i.elem("text").text():i.val()
})}},_onKeyPress:function(t){if(t.which===this.__self.keyboard.enter&&~this._enterItemIndex&&this._enterItemByKeyboard){
var e=this._items[this._enterItemIndex];e&&(t.preventDefault(),this._onSelectItem(e,!0))}},_enterByKeyboard:function(t){
var e=t-39,i=this._items.length,n=this._enterItemIndex+e;return-1===n||n===i?(this._enterItemIndex=n,
this._unselectItems(this._items[n]),this.trigger("out",{val:this._text,byKeyboard:!0})):(0>n?n=i-1:n>=i&&(n=0),
void this._onEnterItem(this._items[n],!0))},_onEnterItem:function(t,e){this._enterItemIndex=this._getItemIndex(t),
this._enterItemByKeyboard=e,this._unselectItems(),t.onEnter(e)},_onLeaveItem:function(t,e){this._clearItems()._unselectItems(t);
}},{keyboard:{enter:13,left:37,up:38,right:39,down:40},live:function(){this.liveBindTo("mousedown",function(){
this._onDownItem()})}}),_borschik("G-fPwdXveNI4UFoXn6aOjJtii4E")&&BEM.DOM.decl("suggest2",{setRequestUrl:function(t){
return this.getModel().getProvider().getRequestUrl=t,this},_onChange:function(t,e){e&&e.noSuggest||this.__base.apply(this,arguments);
}}),_borschik("VuKBrLRn-wk1CFqLsXV4moohdIY")&&BEM.decl("suggest2-model",{onSetMod:{js:{inited:function(){
this._requests=[]}}},destruct:function(){this._provider&&this._provider.destruct(),this.__base.apply(this,arguments);
},getProvider:function(){return this._provider?this._provider:(this._provider=this.setProvider(this.params),
this._provider)},setProvider:function(t){return this._provider=BEM.create("suggest2-provider",t),this._provider;
},getCancelRequestConditions:function(){return[{block:"suggest2",show:!1},{block:"suggest2",event:"select"
},{block:"suggest2-item",event:"select"},{block:"suggest2",event:"out"},{block:"suggest2-item",show:!1
},{block:"suggest2-popup",event:"hide"},{suggest:!1},{source:"sample"}]},request:function(t,e,i){var n=this,s={
val:t,caretPosition:e,data:i};n._requests.push(s);var o=n._isNeedRequest(t,i);return o.need?(s.requestTime=(new Date).getTime(),
n.trigger("request",{val:t,pos:e}),n.getProvider().get(t,e,function(t,e,i){s.responseTime=(new Date).getTime(),
n._onResponse(t,e,i);var o=n._requests[n._requests.length-1];n.params.sequentialQueriesTimeout&&o.val!==t&&n.request(o.val,o.caretPosition,o.data);
}),n):n.trigger("reject",{val:t,pos:e,code:o.code,reason:o.reason||{}})},isTimeInRequestInterval:function(t){
for(var e=this._requests.length-1;e>=0;e--)if(t>this._requests[e].requestTime&&t<this._requests[e].responseTime)return!0;
return!1},filterRequestsByVal:function(t){this._requests=this._requests.filter(function(e){return e.val===t;
})},_isNeedRequest:function(t,e){if(""===t&&!this.params.requestOnEmptyInput)return{need:!1,code:2};var i;
if(this.params.sequentialQueriesTimeout)for(i=this._requests.length-1;i>=0;i--){var n=this._requests[i];
if(void 0===n.responseTime&&(new Date).getTime()-n.requestTime<this.params.sequentialQueriesTimeout)return{
need:!1,code:3,reason:{request:n}}}if(!e)return{need:!0};var s,o=this.getCancelRequestConditions();t:for(i=0;i<o.length;i++){
s=o[i];for(var r in s)if(s.hasOwnProperty(r)&&s[r]!==e[r])continue t;return{need:!1,code:1,reason:{condition:s
}}}return{need:!0}},_onResponse:function(t,e,i){var n={val:t,pos:e,data:i};BEM.channel("suggest2").trigger("response",n),
this.trigger("response",n)}}),_borschik("e-CyyczyVItApPP9x2Wn0pn1h9k")&&!function(t){if(t.support.cors||!t.ajaxTransport||!window.XDomainRequest)return t;
var e=/^(https?:)?\/\//i,i=/^get|post$/i,n=new RegExp("^(//|"+location.protocol+")","i");return t.ajaxTransport("* text html json",function(s,o,r){
if(s.crossDomain&&s.async&&i.test(s.type)&&e.test(s.url)&&n.test(s.url)){var a=null;return{send:function(e,i){
var n="",r=(o.dataType||"").toLowerCase();a=new XDomainRequest,/^\d+$/.test(o.timeout)&&(a.timeout=o.timeout),
a.ontimeout=function(){i(500,"timeout")},a.onload=function(){var e="Content-Length: "+a.responseText.length+"\r\nContent-Type: "+a.contentType,n={
code:200,message:"success"},s={text:a.responseText};try{if("html"===r||/text\/html/i.test(a.contentType))s.html=a.responseText;else if("json"===r||"text"!==r&&/\/json/i.test(a.contentType))try{
s.json=t.parseJSON(a.responseText)}catch(o){n.code=500,n.message="parseerror"}}catch(c){throw c}finally{
i(n.code,n.message,s,e)}},a.onprogress=function(){},a.onerror=function(){i(500,"error",{text:a.responseText
})},o.data&&(n="string"===t.type(o.data)?o.data:t.param(o.data)),a.open(s.type,s.url),a.send(n)},abort:function(){
a&&a.abort()}}}}),t}(jQuery),_borschik("8DSkwM_7X5YQUw5u6LeLHSzMBnk")&&BEM.decl("suggest2-provider",{
getDefaultParams:function(){return{cache:!1,type:"GET",dataType:"jsonp",timeout:2e3}},_lastQuery:null,
get:function(t,e,i){var n=this,s=this.params.abortQueries,o=function(){i.call(n,t,e,n.convert(n._lastData));
};return n._lastText===t?this._lastQuery.always(o):(n._lastText=t,s&&null!==this._lastQuery&&this._lastQuery.abort(),
void(this._lastQuery=$.ajax(n._extendParamsData(n.getRequestData(t,e))).done(function(t){n._lastData=t,
s&&o()}).fail(function(){n._lastData=[]}).always(function(){s||o()})))},convert:function(t){return{orig:t[0],
items:t[1],meta:t[2]}},getRequestData:function(t,e){var i={};return BEM.blocks["suggest2-detect"].isSupportInlineSVG()&&(i.svg=1),
$.extend({part:t,pos:e},i)},getRequestUrl:function(){return this.params.url},_extendParamsData:function(t){
return this.params.url=this.getRequestUrl(),this.params.data=$.extend(this.params.data||{},t),this.params;
},_lastText:void 0,_lastData:[]}),_borschik("JRWQrE8GGi85Lai1MemaubDSJWw")&&BEM.decl("suggest2-provider",{
getRequestData:function(t,e){return $.extend(this.__base.apply(this,arguments),{"prev-query":BEM.blocks["i-global"].param("query")
})},getRequestUrl:function(){return this.params.url},_extendParamsData:function(){return this.params.url=this.getRequestUrl(),
this.__base.apply(this,arguments),this.params}}),_borschik("L9pfSry2lj1lFLOQJEhkN3V5Q7I")&&BEM.decl("suggest2-view",{
html:function(t,e){return BEMHTML.apply(this.build(t,e))},build:function(t,e){return{block:"suggest2",
elem:"content",mods:{theme:"normal"},content:this.buildItems(t,e)}},buildItems:function(t,e){return t.reduce(function(t,e){
return t.push(this.buildItem(e)),t}.bind(this),[])},buildItem:function(t){var e=this.__self._getPrefs(t),i=this.__self._getType(t,e),n="html"===i||"bemjson"===i?{}:{
type:i};return this._getItemByType(t,e,i,{text:{elem:"text",content:this.__self._highlight(this.__self._getText(t,e),e)
},mods:n,js:e.js||{},props:{},content:[]})},_getItemByType:function(t,e,i,n){var s=n.text,o=n.mods,r=n.js,a=n.props,c=n.content;
return e.pers&&(o.personal="yes"),e.url&&(o.interact="link",a.url=this.__self._resolveUrl(e.url),e.target&&(a.target=e.target)),
e.search_cgi&&(r.searchCGI=e.search_cgi),0===c.length&&c.push(s),$.extend({block:"suggest2-item",mods:o,
js:r,content:c},a)}},{_getPrefs:function(t){if(!Array.isArray(t))return{};var e=t[t.length-1];return $.isPlainObject(e)?e:{};
},_getType:function(t,e){var i=Array.isArray(t)?t[0]||"text":"text";return"icon"!==i||e.icon?i:"text";
},_getText:function(t){return Array.isArray(t)?t[1]:t},_highlight:function(t,e){if(!e.hl)return t;var i,n=e.hl.sort(function(t,e){
return t[0]-e[0]}).filter(function(t){return t[0]>=0}),s=[],o=0;return n.length?(n.forEach(function(e){
i=o>e[0]?o:e[0],s.push(t.slice(o,i)),s.push({elem:"highlight",content:t.slice(i,o=e[1])})},this),s.push(t.slice(o)),
s.filter(function(t){return!!t})):t},_resolveUrl:function(t){return(/[\/]{2}/.test(t)?"":"http://")+t;
}}),_borschik("mzvMzCFKLCyqeHRynSLxDpHvLXY")&&BEM.decl("suggest2-view",{},{_getGroupType:function(t,e){
return t.pers?"nah":~["nav"].indexOf(e)?e:"text"},_getTextLabel:function(t){return BEM.I18N("suggest2",t);
}}),_borschik("slDPDjzbFvzN3TQxZR7xgvC7bGI")&&BEM.decl("suggest2-input",{onSetMod:{js:{inited:function(){
var t=this;t._input=t.params.input,t.disableBrowserAutocomplete(),t.realVal(t.val()),t.bindEvents({change:function(e,i){
t._onChange(e,i)},clear:$.throttle(function(e,i){t._onClear(e,i)},300)}),t.bindSuggestEvents()}}},_onChange:function(t,e){
this.trigger("change",e)},_onClear:function(t,e){this.trigger("clear",e)},destruct:function(){this.unbindAllEvents(),
this.__base.apply(this,arguments)},get:function(){return this._input},isFocused:function(){return this._input.hasMod("focused");
},focus:function(){return this._input.setMod("focused","yes"),this},blur:function(){return this._input.delMod("focused"),
this},getControl:function(){return this._input.elem("control")},val:function(t,e){return this._input.val.apply(this._input,arguments);
},valWithoutSuggest:function(t,e){return this._input.val.call(this._input,t,$.extend(e,{suggest:!1}));
},realVal:function(t){return void 0===t?this._realVal:("string"==typeof t&&(this._realVal=t),this._realVal);
},width:function(){return this._input.domElem.width()},getCaretPosition:function(){var t,e=this.getControl()[0],i=this.val().length;
return document.selection?(t=document.selection.createRange(),t.moveStart("character",-i),t.text.length):"number"==typeof e.selectionStart?e.selectionStart:i;
},moveCaretToEnd:function(){var t=this.getControl()[0],e=t.value.length;if("undefined"!=typeof t.createTextRange){
var i=t.createTextRange();i.collapse(!1),i.select()}else"number"==typeof t.selectionStart&&(t.scrollLeft=999999,
t.setSelectionRange(e,e));return this},disableBrowserAutocomplete:function(){var t=this._input.hasMod("focused");
t&&this._input.delMod("focused"),this.getControl().attr({autocomplete:"off",autocorrect:"off",autocapitalize:"off",
spellcheck:"false","aria-autocomplete":"list"}),t&&this._input.setMod("focused","yes")},_bindedEventsNames:[],
bindEvents:function(t,e){return Object.keys(t).forEach(function(i){-1===this._bindedEventsNames.indexOf(i)&&this._bindedEventsNames.push(i),
this._eventsFilter(i).on(i,t[i].bind(e||this))},this),this},bindSuggestEvents:function(){var t=this.params.suggest;
return t.on({out:function(t,e){this.a11yDeactive(),this._changeValueByEvent(t,e)}},this),BEM.blocks["suggest2-item"].on(t.domElem,{
tpah:this._onSuggestItemTpah,select:this._onSuggestItemSelect,enter:this._onSuggestItemEnter},this),this;
},_onSuggestItemTpah:function(t,e){this._changeValueByEvent(t,e),this.moveCaretToEnd()},_onSuggestItemSelect:function(t,e){
"link"!==t.block.getMod("interact")&&(this._changeValueByEvent(t,e),this.moveCaretToEnd())},_onSuggestItemEnter:function(t,e){
this.a11yActive(e.id),e.byKeyboard&&this.params.updateOnEnterByKeyboard&&(this._changeValueByEvent(t,e),
this.moveCaretToEnd())},unbindAllEvents:function(){return this._input.domElem&&this._bindedEventsNames.forEach(function(t){
var e=this._eventsFilter(t);e[e instanceof BEM.DOM?"un":"off"](t)},this),this._bindedEventsNames=[],this.params.suggest.un("out"),
this},a11yActive:function(t){this.getControl().attr("aria-activedescendant",t)},a11yDeactive:function(){
this.getControl().removeAttr("aria-activedescendant")},_eventsFilter:function(t){return~["blur","focus","change","clear"].indexOf(t)?this._input:this.getControl();
},_changeValueByEvent:function(t,e){var i=e&&void 0!==e.val?e.val:this.realVal();this.val(i,$.extend({
block:t.block.__self.getName(),event:t.type},e))}}),_borschik("0_lmdv3U7GCuZ2Ga8cBD5LmiPik")&&BEM.decl("suggest2-input",{
onSetMod:{js:{inited:function(){var t=this;t.__base.apply(this,arguments),t.bindEvents({keydown:function(e){
t._onKeyDown(e)}},t)}}},_onKeyDown:function(t){t.which===this.params.suggest.__self.keyboard.enter&&this.trigger("enter");
}}),_borschik("pUcpLzYipUL105EGQbFTjLVrtZ0")&&BEM.DOM.decl("suggest2-item",{val:function(){if(void 0!==this.params.val)return this.params.val;
var t=this.elem("text");return(t.length?t:this.domElem).text()},valOnSelect:function(){return this.val();
},valOnEnter:function(){return this.val()},valOnLeave:function(){return this.val()},onEnter:function(t){
return this.setMod("selected","yes").triggerEvent("enter",{val:this.valOnEnter(),byKeyboard:t})},onLeave:function(t){
return this.delMod("selected").triggerEvent("leave",{val:this.valOnLeave(),byKeyboard:t})},onSelect:function(t){
this.triggerEvent("select",{val:this.valOnSelect(),byKeyboard:t})},triggerEvent:function(t,e){return this.trigger(t,{
val:e.val,id:this.domElem.attr("id"),show:!1,byKeyboard:e.byKeyboard})}}),_borschik("oJAHdRltd9C8QusaALD_1MQl6BE")&&BEM.DOM.decl("suggest2-item",{},{
live:function(){this.__base.apply(this,arguments),this.liveBindTo("mouseover mouseout mousedown leftclick",function(t){
this.trigger(t.type,t)}).liveBindTo("link","leftclick",function(t){this.trigger("link-click",{$e:t})});
}}),_borschik("oQuveh76bg-P9_Tch0ofq_e_tpo")&&BEM.DOM.decl("popup",{getDefaultParams:function(){var t={
left:15,right:15,top:15,bottom:15};return{directions:[{to:"bottom",axis:"center",tail:{axis:"center"}
},{to:"top",axis:"center",tail:{axis:"center"}},{to:"right",axis:"middle",tail:{axis:"middle"}},{to:"left",
axis:"middle",tail:{axis:"middle"}}],tail:{width:24.04,height:12.02,offset:t},duration:150}},onSetMod:{
js:function(){this._cache={},this._viewport=BEM.DOM.win,this._scope=BEM.DOM.scope,this._channel=BEM.channel("popups"),
this._inContainer=!1,this._isParentFixed=!1,this._owner=null,this._userPosition=null,this._parent=null,
this._childs=[],this._isShown=!1,this._isHiding=!1,this._positions={},this._currPos={},this._visibilityFactor=null,
this._direction=!1,this._directions={};var t=this.getDefaultParams(),e=this.params,i=this._repackDirParams(t.directions),n=e.generateDirections?this._generateDirections:e.directions,s=this._repackDirParams(n);
e.tail&&(this.params.tail=this._mergeParams(t.tail,e.tail)),this._order=s.keys.map(function(t){var e=s.directions[t],n=i.directions[t];
return n||(n=i.directions[e.to]),this._directions[t]=this._mergeParams(n,e,{tail:this._tailParamsHook
}),t},this)},visibility:{visible:function(){this._onShown()},"":function(){this._onHidden()}}},show:function(t){
var e;if(t instanceof BEM)e=t.domElem.eq(0);else if(t instanceof $)e=t;else if(!t)return;if(e){this._owner&&e[0]!==this._owner[0]&&this.delMod("visibility"),
this._owner=e;var i=this._findParent(e);i&&this.setParent(i)}else this._userPosition=t;return this.setMod("visibility","outside").repaint();
},hide:function(){if(this._isHiding)return this;if(this._isShown&&(this._isHiding=!0,this._childs.forEach(function(t){
t.hide()}),this.hasMod("animate","yes")&&!this.hasMod("fade-out","no"))){var t=this;return this.beforeHide(function(){
t.domElem&&t.delMod("visibility")}),this}return this.delMod("visibility")},toggle:function(t){return this._isShown&&!this._isHiding?this.hide():this.show(t||this._owner);
},repaint:function(){this._moveToContainer();var t=this._pickDirection();return this.setMod("to",t.to)._show(this._positions[t.key],this._tailPos&&this._tailPos[t.key]),
this},repaintShadowIfNeeded:function(){return this},getCurrPos:function(){return this._currPos},getCurrDirection:function(){
return this._direction},setContent:function(t){return BEM.DOM.update(this.elem("content"),t),this._resetDefault(),
this._isShown&&this.repaint(),this},isShown:function(){return this._isShown},setParent:function(t){return this._parent=t,
this._isParentFixed=t.hasMod("position","fixed"),t.addChild(this),this},addChild:function(t){for(var e=this._childs,i=e.length,n=0;i>n;n++)if(e[n]._uniqId===t._uniqId)return;
t.on("hide",function(){this.removeChild(t)},this),e.push(t)},removeChild:function(t){for(var e=this._childs,i=e.length,n=0;i>n;n++)if(e[n]._uniqId===t._uniqId)return void e.splice(n,1);
},setSize:function(t){return t&&(this._resetDefault(),this.domElem.css(t),this._isShown&&!this._isHiding&&this.repaint()),
this},_show:function(t,e){return this._currPos=t,e&&this.elem("tail").removeAttr("style").css(e),this.domElem.css(t),
(!this._isShown||this._isHiding)&&this.hasMod("animate","yes")&&!this.hasMod("fade-in","no")&&this.afterShow(),
this._isHiding=!1,this.setMod("visibility","visible"),this},_onShown:function(){this.bindToDoc("keydown",function(t){
27===t.which&&0===this._childs.length&&this.hide()}),this._attachRepaintOnResize(),this._bindFocusEvents(),
this._attachUnder(),this._isShown=!0,this.hasMod("autoclosable","yes")&&this.afterCurrentEvent(function(){
this._enableAutoclosable()}),this.hasMod("adaptive","yes")&&this._enableAdaptive(),this._channel.on("hide",this.hide,this),
this.trigger("show")},_onHidden:function(){this.unbindFromDoc("keydown"),this._detachRepaintOnResize(),
this._unbindFocusEvents(),this._detachUnder(),this.hasMod("autoclosable","yes")&&this._disableAutoclosable(),
this.hasMod("adaptive","yes")&&this._disableAdaptive(),this._cache={},this._isShown=!1,this._isHiding=!1,
this._channel.un("hide"),this._returnFocus(),this.trigger("hide")},_attachRepaintOnResize:function(){
window.attachEvent&&this.domElem[0].attachEvent("onresize",this.__self._enforcePageRepaint)},_detachRepaintOnResize:function(){
window.detachEvent&&this.domElem[0].detachEvent("onresize",this.__self._enforcePageRepaint)},_bindFocusEvents:function(){
this._lastFocused=$($.dom.getActiveElement()[0]||this._scope);var t=this.__self._getFocusable(this.elem("content"));
return this._firstFocusable=t.first(),this._lastFocusable=t.last(),this._skipReturnFocus=!1,0===this._firstFocusable.length?void(this._skipReturnFocus=!0):void this.bindTo(this._lastFocused,"keydown",this._onLastFocusedKeyDown).bindTo(this._firstFocusable,"keydown",this._onFirstFocusableKeyDown).bindTo(this._lastFocusable,"keydown",this._onLastFocusableKeyDown);
},_unbindFocusEvents:function(){this.unbindFrom(this._firstFocusable,"keydown"),this.unbindFrom(this._lastFocusable,"keydown"),
this.unbindFrom(this._lastFocused,"keydown")},_onLastFocusedKeyDown:function(t){(!this._lastFocused.is(this._scope)||this._lastFocused.is(t.target))&&(t.ctrlKey||t.altKey||t.metaKey||9===t.which&&(t.preventDefault(),
this[t.shiftKey?"_lastFocusable":"_firstFocusable"].focus()))},_onFirstFocusableKeyDown:function(t){t.ctrlKey||t.altKey||t.metaKey||t.shiftKey&&9===t.which&&(t.preventDefault(),
this._lastFocused.focus())},_onLastFocusableKeyDown:function(t){t.shiftKey||t.ctrlKey||t.altKey||t.metaKey||9===t.which&&(t.preventDefault(),
this._lastFocused.focus())},_returnFocus:function(){var t=(this._parent||{})._skipReturnFocus||this._skipReturnFocus;
t||this._lastFocused.focus()},_mergeParams:function(t,e,i){var n={},s=Object.prototype.hasOwnProperty;
return i||(i={}),t&&"object"==typeof t&&Object.keys(t).forEach(function(e){n[e]=t[e]}),Object.keys(e).forEach(function(o){
var r=s.call(i,o)?i[o].call(this,t[o],e[o]):e[o];!r||"object"!=typeof r||Array.isArray(r)?n[o]=r:t[o]?n[o]=this._mergeParams(t[o],r,i):n[o]=r;
},this),n},_tailParamsHook:function(t,e){return e.offset||(e.offset=this.params.tail.offset),"number"==typeof e.offset?{
offset:{left:e.offset,top:e.offset}}:e},_generateDirections:function(){if(this.__self._generateDirectionsCache)return this.__self._generateDirectionsCache;
for(var t=[["bottom","top"],["left","right"]],e=[["center","left","right"],["middle","top","bottom"]],i=e,n=t.length,s=[],o=0;n>o;o++)for(var r=t[o],a=r.length,c=0;a>c;c++)for(var h=e[o],u=h.length,l=0;u>l;l++)for(var d=i[o],p=d.length,f=0;p>f;f++)s.push({
direction:r[c],axis:h[l],tail:{axis:d[f]}});return this.__self._generateDirectionsCache=s,s},_repackDirParams:function(t){
var e={},i=[];return("string"==typeof t||$.isPlainObject(t))&&(t=[t]),i=t.map(function(t){if("string"==typeof t){
var i=t.split("-");t={to:i[0],tail:{}},i[1]&&(t.axis=i[1]),i[2]&&(t.tail.axis=i[2])}var n=t.to;return e[n]||(e[n]=t),
t.axis&&(n+="-"+t.axis),t.key=n,e[n]=t,n},this),{directions:e,keys:i}},setViewport:function(t){return this._viewport=t,
this},_pickDirection:function(){var t,e=this._order,i=this.hasMod("adaptive","yes")?e.length:1;for(this._visibilityFactor=0,
t=0;i>t;t++){var n=e[t],s=this._directions[n];this._resetPos(n)._pushPos(n,this._calcPos(s))._pushPos(n,this._calcOffsets(s)),
this._hasTail()&&this._resetTailPos(n)._pushTailPos(n,this._calcTailPos(s))._pushTailPos(n,this._calcTailOffset(s))._pushPos(n,this._calcOffsetByTail(s)),
this._pushPos(n,this._getParentOffset());var o=this._calcVisibilityFactor(s);if((o>this._visibilityFactor||!this._direction)&&(this._visibilityFactor=o,
this._direction=this._directions[n],this.size=this.getPlacingSize(),100===o))break}return this._direction;
},_getParentOffset:function(){var t=this.domElem.offsetParent().offset();return t.left*=-1,t.top*=-1,
t},_calcPos:function(t){this._calcPlacingSize(t);var e=this.getOwnerPos(),i=this.getOwnerSize(),n=this.getPlacingSize(),s=t.axis,o=this.params.position||{},r={},a=Object.prototype.hasOwnProperty;
switch(t.to){case"bottom":r={top:a.call(o,"top")?o.top:e.top+i.height,left:a.call(o,"left")?o.left:this._calcLeft(s)
};break;case"top":r={top:a.call(o,"top")?o.top:e.top-n.height,left:a.call(o,"left")?o.left:this._calcLeft(s)
};break;case"left":r={top:a.call(o,"top")?o.top:this._calcTop(s),left:a.call(o,"left")?o.left:e.left-n.width
};break;case"right":r={top:a.call(o,"top")?o.top:this._calcTop(s),left:a.call(o,"left")?o.left:e.left+i.width
}}return r},_calcTop:function(t){var e=0,i=this.getPlacingSize(),n=this.getOwnerPos(),s=this.getOwnerSize();
return"top"===t?e+=n.top:"middle"===t?e+=n.top+s.height/2-i.height/2:"bottom"===t&&(e+=n.top+s.height-i.height),
e},_calcLeft:function(t){var e=0,i=this.getPlacingSize(),n=this.getOwnerPos(),s=this.getOwnerSize();return"left"===t?e+=n.left:"center"===t?e+=n.left+s.width/2-i.width/2:"right"===t&&(e+=n.left+s.width-i.width),
e},getPlacingSize:function(){return this.getPopupSize()},_calcOffsets:function(t){var e,i=this._cache.offset||(this._cache.offset={}),n=t.key,s=t.offset;
if(i[n])return i[n];if(!s)return!1;if(e={left:0,top:0},"number"==typeof s)switch(n){case"left":e.left+=s;
break;case"right":e.left-=s;break;case"top":e.top+=s;break;case"bottom":e.top-=s}else s.left&&(e.left+=s.left),
s.right&&(e.left-=s.right),s.top&&(e.top+=s.top),s.bottom&&(e.top-=s.bottom);return i[n]=e,e},_hasTail:function(){
return 0!==this.elem("tail").length},_moveToContainer:function(t){if(t)this._inContainer=!1;else{if(this._isShown)return;
t=this._parent?this._parent.domElem:this._scope}this.domElem.appendTo(t),this._inContainer=!0},_resetPos:function(t){
return t?this._positions[t]=null:this._positions={},this},_pushPosTo:function(t,e,i){i!==!1&&("string"==typeof e?this._sum(t[e]||(t[e]={}),i):(i=e,
Object.keys(t).forEach(function(e){this._sum(t[e],i)},this)))},_pushPos:function(t,e){return this._pushPosTo(this._positions,t,e),
this},_sum:function(t,e){Object.keys(e).forEach(function(i){t[i]=(t[i]||0)+e[i]})},_getSizeOf:function(t){
return{height:t.outerHeight(),width:t.outerWidth()}},getOwnerSize:function(){return this._owner?this._cache.ownerSize||(this._cache.ownerSize=this._getSizeOf(this._owner)):{
height:0,width:0}},getPopupSize:function(){return this._getSizeOf(this.domElem)},_getPosOf:function(t){
return t.offset()||{left:0,top:0}},getOwnerPos:function(){var t;return this._owner&&(t=this._getPosOf(this._owner),
"pageYOffset"in window&&(t.top-=window.pageYOffset-(document.documentElement.scrollTop||document.body.scrollTop),
t.left-=window.pageXOffset-(document.documentElement.scrollLeft||document.body.scrollLeft))),t||this._userPosition;
},_calcVisibilityFactor:function(t){var e,i,n=this._viewport,s=this._getSizeOf(n),o=this.getPopupSize(),r=this._positions[t.key],a=this._parent&&this._isParentFixed?this._parent.domElem.offset():{
top:0,left:0},c=this.hasMod("position","fixed")?{top:0,left:0}:{top:n.scrollTop(),left:n.scrollLeft()
},h=r.top+a.top-c.top,u=r.left+a.left-c.left,l=u+o.width-s.width,d=h+o.height-s.height,p={height:o.height,
width:o.width},f=100;return d>0&&(p.height-=d),0>h&&(p.height+=h),0>u&&(p.width+=u),l>0&&(p.width-=l),
p.height<0||p.width<0?f=0:(i=Math.abs(p.height*p.width),e=o.height*o.width,e!==i&&(f=i/e*100)),f},_findParent:function(t){
return this.findBlockOutside(t,"popup")},destruct:function(){return this._childs.forEach(function(t){
BEM.DOM.destruct(t.domElem)}),this.setMod("fade-out","no"),this.hide(),this.__base.apply(this,arguments);
},_resetDefault:function(){},_calcPlacingSize:function(){}},{live:function(){this.liveBindTo("close","leftclick tap",function(){
this.hide()})},_getFocusable:function(t){var e=$.data(t,"popup-getFocusable-id");e||(e=$.identify(),$.data(t,"popup-getFocusable-id",e)),
e='*[data-popup-getFocusable-id="'+e+'"]';var i="a[href], link, ";return BEM.blocks["i-ua"].opera<13&&(i=""),
t.find(i+'*[tabindex], button, input:not([type="hidden"]), textarea, select, menuitem').filter(function(){
var t=$(this),i=!0;return parseInt(t.prop("tabindex"),10)<0||"hidden"===t.css("visibility")?!1:($(this).parentsUntil(e).each(function(){
var t=$(this);return"none"===t.css("display")?i=!1:void 0}),i)})},_enforcePageRepaint:function(){document.body.className+="";
},_generateDirectionsCache:null}),_borschik("8WQoowkMYUMdANww8iqmxqme1-s")&&BEM.DOM.decl("popup",{onSetMod:{
js:function(){var t=$.identify();this.domElem.attr("data-log-tree-portal-bottom",t).parent().addClass("log-tree-portal-top-"+t),
this.__base.apply(this,arguments)}}}),_borschik("S_eQb0sDJ-CJ0AjBxwwYc9DJNP8")&&BEM.DOM.decl("popup",{
onSetMod:{autoclosable:{yes:function(){this._enableAutoclosable()},"":function(){this._disableAutoclosable();
}}},_enableAutoclosable:function(){var t=this._under;this.hasMod(t,"type","paranja")&&(t.is("iframe")&&(t=$([t[0].contentWindow,t[0].contentWindow.document])),
this.bindTo(t,"leftclick tap",function(t){t.stopPropagation(),this.hide()}),this.bindTo(t,"mousedown",function(){
this._skipReturnFocus=!0})),this.bindToDoc("leftclick tap",function(t){if(!this._isRelatedNode($(t.target))){
var e=$.Event("outside-click");this.trigger(e,t),e.isDefaultPrevented()||this.hide()}}),this.bindToDoc("mousedown",function(){
this._skipReturnFocus=!0})},_disableAutoclosable:function(){this.hasMod(this._under,"type","paranja")&&this.unbindFrom(this._under,"leftclick tap mousedown"),
this.unbindFromDoc("leftclick tap mousedown")},_isRelatedNode:function(t){var e=this.containsDomElem(t);
if(e||(e=Boolean(this._owner)&&this.containsDomElem.call({domElem:this._owner},t)),e)return!0;var i,n=this._childs.length;
for(i=0;n>i;i++)if(this.containsDomElem.call({domElem:this._childs[i].domElem},t))return!0;return!1}}),
_borschik("qV6sVreEJMz90tIvnMyqvRDOXrA")&&BEM.DOM.decl({block:"popup",modName:"autoclosable",modVal:"yes"
},{_isRelatedNode:function(){return this.domElem?this.__base.apply(this,arguments):!1},show:function(){
return this.domElem?this.__base.apply(this,arguments):!1},hide:function(){return this.domElem?this.__base.apply(this,arguments):!1;
}}),_borschik("OOMSF447k9yLn8jU_-LTWbXEr-A")&&BEM.DOM.decl({block:"popup",modName:"adaptive",modVal:"yes"
},{onSetMod:{adaptive:{yes:function(){this._enableAdaptive()},no:function(){this._disableAdaptive()}},
"watch-scroll":{yes:function(){this._watchScroll()},no:function(){this._unwatchScroll()}}},_enableAdaptive:function(){
this.afterCurrentEvent(function(){this.domElem&&this.bindToWin("resize",this.onResize)}),this._watchScroll();
},_disableAdaptive:function(){this.unbindFromWin("resize")._unwatchScroll()},getScrollEvents:function(){
return["scroll"]},_watchScroll:function(){this._owner&&!this.hasMod("watch-scroll","no")&&this.bindTo(this._owner.parents().add(this._viewport),this.getScrollEvents().join(" "),this.onScroll,this);
},_unwatchScroll:function(){this._owner&&this.unbindFromDomElem(this._owner.parents().add(this._viewport),this.getScrollEvents().join(" "));
},onResize:function(t){this._cache={},this._isShown&&!this._isHiding&&this.repaint()},onScroll:function(t){
this._cache={},this._isShown&&!this._isHiding&&this.repaint()},destruct:function(){this._disableAdaptive(),
this.__base.apply(this,arguments)}}),_borschik("VVHPmyb70tHsCgccGMY-04SIDJ4")&&BEM.DOM.decl({block:"popup",
modName:"animate",modVal:"yes"},{afterShow:function(){var t=this.getCurrDirection();if(t){var e=t.to,i=this.getCurrPos(),n={
opacity:1,top:i.top,left:i.left},s={opacity:0,top:i.top,left:i.left};"bottom"===e?s.top+=10:"top"===e?s.top-=10:"left"===e?s.left-=10:"right"===e&&(s.left+=10),
this.domElem.stop(!0).css(s).animate(n,this.params.duration)}},beforeHide:function(t){var e=this.getCurrDirection();
if(!e)return t();var i=e.to,n=this.getCurrPos(),s=this.domElem,o={top:n.top,left:n.left,opacity:0};return"bottom"===i?o.top+=10:"top"===i?o.top-=10:"left"===i?o.left-=10:"right"===i&&(o.left+=10),
s.stop(!0,!0).animate(o,this.params.duration,function(){t(),s.css("opacity","")})}}),_borschik("4ejk_sRb43uwCiYz37Bg6zDWLns")&&!function(){
var t=[];BEM.DOM.decl("popup",{onSetMod:{js:function(){this.__base.call(this);var t=this.findElem("under").first();
this._underClassAttr=t.attr("class"),this.isDivEnough()?this._under=t:(t.remove(),this._under=null),this._underInPool=!1;
}},isDivEnough:function(){return!1},_createUnder:function(){return $('<iframe frameBorder="0" tabindex="-1" src="about:blank"/>');
},_getUnder:function(){if(this._under)return this._under;var e=t.pop();return e&&(this._underInPool=!1),
this._under=e||this._createUnder()},_attachUnder:function(){var t=this._under=this._getUnder();t.attr("class",this._underClassAttr),
this.hasMod(t,"type","paranja")?t.detach().insertBefore(this.domElem):t.prependTo(this.domElem)},_detachUnder:function(){
var e=this._under;t.push(e.detach()),this._under=null,this._underInPool=!0},destruct:function(){return this._underInPool&&t.pop(),
this._under&&this._under.remove(),this.__base.apply(this,arguments)}})}(),_borschik("fNIkwKgc_vMgpE8IfX5BIfRmmk8")&&BEM.DOM.decl({
block:"suggest2",modName:"theme",modVal:"large"},{init:function(){this.__base.apply(this,arguments),this.adjustView();
},initView:function(t,e){return t=t||{},this.__base($.extend(t,{theme:"large",group:t.group||this.getMod("group")||"type"
}),e)},adjustView:function(){this.__base.apply(this,arguments);var t=this.getMetrics();this._view.setMarginLeft(t.marginLeft),
this._view.setMinWidth(t.minWidth),this._view.setMaxWidth(t.maxWidth)},getInputLeft:function(){var t=this._input.get().findElem("control"),e=t.offset(),i=t[0];
if(!i)return 0;var n=i.currentStyle?i.currentStyle:window.getComputedStyle(i),s=parseInt(n.borderLeftWidth,10)||0,o=parseInt(n.paddingLeft,10)||0;
return e.left+s+o},getInputWidth:function(){return this._input.get().domElem.outerWidth()},getContainerWidth:function(){
return BEM.DOM.scope.width()}}),_borschik("GTDzYSxQpAlJ6oxeH8Au9fmL3-Y")&&BEM.decl({block:"suggest2-view",
modName:"theme",modVal:"large"},{build:function(t,e){var i=this.__base.apply(this,arguments);return i.mods.theme="large",
i}}),_borschik("n3C3Uehw6D9c9ioYsxcO257PxfU")&&BEM.decl({block:"suggest2-view",modName:"theme",modVal:"large"
},{getMinWidth:function(){return this._minWidth||0},getMaxWidth:function(){return this._maxWidth||0},
setMinWidth:function(t){return this._minWidth=t,this},setMaxWidth:function(t){return this._maxWidth=t,
this},getMarginLeft:function(){return this._marginLeft},setMarginLeft:function(t){return this._marginLeft=t,
this},build:function(t,e){var i=this.__base.apply(this,arguments),n=["min-width:"+this.getMinWidth()+"px;"],s=this.getMaxWidth();
s&&n.push("max-width:"+s+"px;");var o=this.getMarginLeft();return o&&n.push("margin-left:"+o+"px;"),i.attrs={
style:n.join(" ")},i}}),_borschik("o9PPHDlMo4o5eJCKE01P4lw5b6o")&&BEM.decl({block:"suggest2-view",modName:"group",
modVal:"type"},{buildItems:function(t,e){var i,n;return t.reduce(function(t,e){var s=this.__self._getPrefs(e),o=this.__self._getType(e,s),r=this.__self._getGroupType(s,o);
return i!==r&&(i=r,n=[],t.push({block:"suggest2",elem:"group",content:[{elem:"title",content:this.__self._getTextLabel(i)
},{elem:"items",content:n}]})),n.push(this.buildItem(e)),t}.bind(this),[])}}),_borschik("6JX3PAdMsSVVqtR5hrbXQd40pm8")&&BEM.DOM.decl({
block:"suggest2",modName:"adaptive",modVal:"yes"},{init:function(){this.__base.apply(this,arguments),
this._boundResizeHandler=this._resizeHandler.bind(this),this.__self._bindToWinResize(this._boundResizeHandler);
},_resizeHandler:function(){this._popup.width(this.getPopupWidth())},destruct:function(){this.__self._unbindFromWinResize(this._boundResizeHandler),
this._boundResizeHandler=null,this.__base.apply(this,arguments)}},{_resizeCallbacks:[],_bindToWinResize:function(t){
return this._resizeCallbacks.push(t),this},_unbindFromWinResize:function(t){for(var e=0;e<this._resizeCallbacks.length;e++)if(this._resizeCallbacks[e]===t)return this._resizeCallbacks.splice(e,1),
this;return this},_getResizeCallback:function(){return $.throttle(function(){var t=arguments;this._resizeCallbacks.forEach(function(e){
e.apply(this,t)},this)},300,this)},live:function(){this.__base.apply(this,arguments),this._resizeCallback=this._getResizeCallback(),
BEM.DOM.win.on("resize",this._resizeCallback)}}),_borschik("Y8xCxdYfG660MHi83pT5Ikrlf4w")&&BEM.DOM.decl({
block:"suggest2",modName:"adaptive",modVal:"yes"},{_minWidth:0,_maxWidth:0,_resizeHandler:function(){
this.__base.apply(this),this.hasMod("theme","large")&&this.adjustView()},_onShow:function(){this.__base.apply(this),
this.hasMod("theme","large")&&this._applyMetricsToContent()},adjustView:function(){this.__base.apply(this,arguments);
var t=this.getMetrics(),e=t.minWidth,i=t.maxWidth,n=!1;return e!==this._minWidth&&(this._minWidth=e,n=!0),
i!==this._maxWidth&&(this._maxWidth=i,n=!0),n&&this._popup.isShown()&&this._applyMetricsToContent(),t;
},_applyMetricsToContent:function(){var t=this.findElem("content");this._minWidth&&t.css("min-width",this._minWidth),
this._maxWidth&&t.css("max-width",this._maxWidth)}}),_borschik("KbZRbUKx7Amyue6mJR2qq6GWLxQ")&&BEM.DOM.decl({
block:"suggest2",modName:"group",modVal:"label"},{initView:function(t,e){return this.__base($.extend(t||{},{
group:"label"}),$.extend(e||{},{label:this.params.label}))}}),_borschik("-QuXxtSeTC8mTAyz1W6QEbQxKiQ")&&BEM.decl({
block:"suggest2-view",modName:"group",modVal:"label"},{buildItems:function(t,e){var i,n;return t.reduce(function(t,e,s){
var o=this.__self._getPrefs(e).label||"";if(i!==o){i=o,n=[];var r;r=o?o:0===s?"":this.params.label||this.__self._getTextLabel("text"),
t.push({block:"suggest2",elem:"group",content:[{elem:"title",content:r},{elem:"items",content:n}]})}return n.push(this.buildItem(e)),
t}.bind(this),[])}}),_borschik("33OM7kY1IZPWpN0BJnAz312TttI")&&BEM.decl({block:"suggest2-view",modName:"advanced",
modVal:"yes"},{_getItemByType:function(t,e,i,n){var s=n.js,o=n.content;switch(i){case"html":s.val=t[1],
o.push(e.body);break;case"bemjson":s.val=t[1],o.push.apply(o,Array.isArray(e.bemjson)?e.bemjson:[e.bemjson]);
}return this.__base.apply(this,arguments)}}),_borschik("UHJS6OmpWxzzolRcRz06lkGsH2Q")&&BEM.DOM.decl({
block:"suggest2-item",modName:"interact",modVal:"link"},{onSelect:function(t){var e=this;e.__base.apply(e,arguments);
var i=e.elem("link");return t||"_self"===i.attr("target")?function(){e._locationChange(i.attr("href"));
}:void 0},_locationChange:function(t){window.location=t},valOnSelect:function(){return!1}}),_borschik("_IwHCiH3dFbSGCoaxAWErKbUYGI")&&BEM.DOM.decl("suggest2-form",{
onSetMod:{js:{inited:function(){this._isReady=!1,this._nodes=this.initNodes()}}},getDefaultParams:function(){
return{inputName:"input",buttonName:"button",popupName:"popup"}},destruct:function(){this._nodes.forEach(function(t){
t.suggest.domElem&&BEM.DOM.destruct(t.suggest.domElem),this.unbindFormEvents(t),t.counter&&t.counter.destruct(),
t.proxies.input.destruct(),t.proxies.popup.destruct()},this),this.__base.apply(this,arguments)},getOwner:function(t){},
isReady:function(){return this._isReady},initNodes:function(){var t=this.getNodes();return t.forEach(function(t){
t.suggest.init()}),this._isReady=!0,this.trigger("ready",{nodes:t}),t},getNodes:function(){return this.getNodeList().map(function(t){
var e=t.suggest,i=e.params;return i.input=t.input,i.button=t.button,i.form=this,t.proxies={},t.proxies.popup=i["suggest2-popup"]=BEM.create({
block:"suggest2-popup",mods:{"for":this.params.popupName}},{suggest:e,popup:e.findBlockOn(this.params.popupName),
owner:this.getOwner(t)||i.input}),t.proxies.input=i["suggest2-input"]=BEM.create("suggest2-input",{suggest:e,
input:i.input,updateOnEnterByKeyboard:i.updateOnEnterByKeyboard}),t.counter&&(t.counter.params.suggest=e,
t.counter.params.form=this,i.counter=t.counter),this.bindFormEvents(t),t},this)},bindFormEvents:function(t){
var e=this;return t.button&&t.button.bindTo("click press",function(t){e._onButtonClick(t)}),e.bindTo("submit",function(t,i){
e.onSubmit(t,i)}),e},_onButtonClick:function(t){this.trigger("button-click",t)},unbindFormEvents:function(t){
var e=this;return t.button&&t.button.un("click press"),e.unbindFrom("submit"),e},submit:function(t){return this.domElem.trigger("submit",t||{}),
this},onSubmit:function(t,e){t.data=e||{},this.trigger("submit",t)},getNodeList:function(){var t=this,e=[];
return t.elem("node").each(function(i,n){var s=$(n),o=t.findBlockInside(s,"suggest2"),r={input:t.findElem(s,"input"),
button:t.findElem(s,"button")};e.push({node:s,suggest:o,counter:t.findBlockOn("suggest2-counter"),input:t.findBlockOn(r.input,t.params.inputName),
button:t.findBlockOn(r.button,t.params.buttonName),popup:o.findBlockOn(t.params.popupName)})}),e},appendHiddenInputs:function(t){
return BEM.DOM.append(this.domElem,BEMHTML.apply(t.map(function(t){return{block:this.__self.getName(),
elem:"hidden-input",tag:"input",attrs:{type:"hidden",name:t.name,value:t.value}}},this))),this},removeHiddenInputs:function(){
return BEM.DOM.destruct(this.findElem(this.domElem,"hidden-input")),this}},{live:function(){this.liveInitOnBlockInsideEvent("click tap change focus","input");
}}),_borschik("UcC42UvVuwFOTHZeyAiPFBi33HU")&&BEM.DOM.decl({block:"suggest2-form",modName:"no-live",modVal:"yes"
},{},{live:!1}),_borschik("5laQrRfOIrrfHspFHKxfjn6AIjg")&&BEM.DOM.decl("suggest2-counter",{onSetMod:{
js:{inited:function(){this.clear()}}},destruct:function(){this.unbindAllEvents()},getDefaultParams:function(){
return{submitBySelect:!1,suggestReqID:!1,preventSubmit:!0,host:"//yandex.ru",path:"clck/jclck",dataUrl:"http://ya.ru",
params:{},timeout:300}},metaProps:{exprt:"exprt",r:"region",log:"log"},clear:function(){var t=this;return t._params={
user_input:"",text:""},t._times=[],t._renderTimes=[],t._requestTime=0,t._renderTime=0,t._path={service:t.params.service,
state:"not_shown",index:0,personal:"nah_not_shown",submit:""},t._ratio={len:0,queryLen:0,actionsCount:0
},t._firstChange=0,t._lastChange=0,t._sinceChange={first:0,last:0},t._selectedText="",t._session=0,t._reqID=0,
t._meta={},t._afterSendAjaxCallback,t},submit:function(t){var e=this,i=e.params.suggest.params["suggest2-input"],n=i.val();
e._params.text=n,e._params.pos=i.getCaretPosition(),e.params.suggestReqID&&e.attachReqID(),e.sendAjax(e.getUrl(),$.extend({
submitForm:!0,afterSendAjaxCallback:function(){}},t)),e.trigger("submit",e._getSubmitEventData()).clear(),
e._params.prev_query=n},_getSubmitEventData:function(){var t=this;return{path:t._path,times:t._times,
render_times:t._renderTimes,prev_query:t._params.prev_query,user_input:t._params.user_input,text:t._params.text,
pos:t._params.pos,ratio:t._ratio,since_first_change:t._sinceChange.first,since_last_change:t._sinceChange.last,
session:t._session,suggest_reqid:t._reqID,meta:t._meta,url:t.getUrl()}},sendAjax:function(t,e){return $.ajax({
type:"GET",url:t,dataType:"script",timeout:this.params.timeout,cache:!0}).always(this._sendAjaxAlways.bind(this,e)),
this},afterSendAjax:function(t){return this._afterSendAjaxCallback=t,this},getUrl:function(){return this.params.host+["/",this.params.path].concat(this._getUrlParams()).join("/").replace(/(\/+)/g,"/");
},_sendAjaxAlways:function(t){this.params.preventSubmit&&t.submitForm&&this.params.form.submit({block:this.__self.getName(),
prevent:!1}),t.afterSendAjaxCallback(),this._afterSendAjaxCallback&&this._afterSendAjaxCallback()},_getUrlParams:function(){
var t=this;return this._getParamsList().concat(t._getData()).reduce(function(e,i){return e.concat(t._getParams(i));
},[]).concat(["/"])},_getParamsList:function(){var t=this;return[t.params.params,t._getPath(),t._params,t._getRatio(),t._getSinceChange(),t._getSession(),{
suggest_reqid:t._reqID}]},initValues:function(){return this._params.prev_query=this.params.suggest.params["suggest2-input"].val(),
this},attachReqID:function(){this._reqID=this.__self._generateReqID(),this.params.form.appendHiddenInputs([{
name:"suggest_reqid",value:this._reqID}])},bindEvents:function(){var t=this,e=t.params,i=e.suggest,n=e.form,s=i.getModel(),o=i.params["suggest2-input"],r=i.params["suggest2-popup"];
return n.on({"button-click":t._onFormButtonClick,submit:t._onFormSubmit},t),s.on({request:t._onModelRequest,
response:t._onModelResponse},t),o.on({change:t._onInputChange,enter:t._onInputEnter},t),r.on({show:t._onPopupShow,
hide:t._onPopupHide},t),BEM.blocks["suggest2-item"].on(i.domElem,"enter",t._onSuggestItemEnter,t),i.on({
update:t._onSuggestUpdate,select:t._onSuggestSelect},t),t},_onFormButtonClick:function(){"keyboard"!==this._path.submit&&(this._path.submit="button_by_mouse");
},_onFormSubmit:function(t,e){e.data.block!==this.__self.getName()&&e.data.prevent!==!1&&(this.params.preventSubmit&&(e.stopImmediatePropagation(),
e.preventDefault()),this.submit())},_onModelRequest:function(){this._requestTime=new Date},_onModelResponse:function(t,e){
e.data.items&&(this._path.personal=this._hasPersonal(e.data.items)?"nah_not_used":"nah_not_shown",this._meta=e.data.meta||{},
this._addTime(new Date-this._requestTime),this._renderTime=new Date,this._setMetaProps(e))},_onInputChange:function(t,e){
e&&"clear"!==e.source||(this._params.user_input=t.block.val(),this[this._firstChange?"_lastChange":"_firstChange"]=new Date),
this._selectedText&&(this._path.state="edit"),this._ratio.actionsCount++},_onInputEnter:function(){this._path.submit="keyboard";
},_onPopupShow:function(){this._path.state="not_used"},_onPopupHide:function(t,e){"empty"===e.response&&(this._path.state="not_shown");
},_onSuggestItemEnter:function(t,e){e.byKeyboard&&this.params.suggest.params.updateOnEnterByKeyboard&&(this._selectedText=e.val,
this._path.state="suggest")},_onSuggestUpdate:function(){this._addRenderTime(new Date-this._renderTime);
},_onSuggestSelect:function(t,e){var i=this;i._path.state=e.byKeyboard?"keyboard":"mouse",i._path.index=e.itemIndex+1,
i._selectedText=e.val,e.item.hasMod("personal")&&(i._path.personal="nah_used"),i.params.submitBySelect&&(i._path.submit=e.byKeyboard?"keyboard":"click_by_mouse",
i._params.pos=e.pos,i._params.text=this._selectedText),i.params.suggest.isNeedSubmitFormOnSelectItem(e.item)||i.submit({
submitForm:!1,afterSendAjaxCallback:e.callbackOnSelect})},unbindAllEvents:function(){var t=this.params,e=t.suggest,i=t.form;
return i.un("button-click").un("submit"),e.getModel().un("request").un("response"),e.params["suggest2-input"].un("change").un("enter"),
e.params["suggest2-popup"].un("show").un("hide"),e.un("select"),this},_hasPersonal:function(t){return t.some(function(t){
return 1===BEM.blocks["suggest2-view"]._getPrefs(t).pers})},_setMetaProps:function(t){t.data.meta&&Object.keys(this.metaProps).forEach(function(e){
this._params[this.metaProps[e]]=t.data.meta[e]||""},this)},_getParams:function(t){return Object.keys(t).reduce(function(e,i){
return""===t[i]?e:(e.push(i+"="+encodeURIComponent(t[i]).replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/%2C/g,",")),
e)},[])},_getPath:function(){return{path:[this._path.service,this._path.state,"p"+this._path.index,this._path.personal,this._path.submit].join(".")
}},_getSession:function(){return this._session=(new Date).getTime()+Math.round(1e4*Math.random()),{session:this._session
}},_getSinceChange:function(){return{since_first_change:this._getSinceTime("first"),since_last_change:this._getSinceTime("last")
}},_getSinceTime:function(t){var e="_"+t+"Change";return this._sinceChange[t]=this[e]?(new Date).getTime()-this[e]:0,
this._sinceChange[t]},_getRatio:function(){return this._ratio.len=this._params.user_input.length,this._ratio.queryLen=this._params.text.length,
{ratio:[this._ratio.len,this._ratio.queryLen,this._ratio.actionsCount].join(".")}},_addTime:function(t){
return this._times.push(t),this._params.times=this._times.join("."),this},_addRenderTime:function(t){
return this._renderTimes.push(t),this._params.render_times=this._renderTimes.join("."),this},_getData:function(){
return{"*data":"url="+this.params.dataUrl}}},{_generateReqID:function(){var t=BEM.blocks["i-global"]&&BEM.blocks["i-global"].param("yandexuid")?BEM.blocks["i-global"].param("yandexuid"):this._random(9)+this._random(9);
return t+(+new Date).toString().slice(-7)+this._random(7)},_random:function(t){return Math.random().toString().slice(2,Math.min(t,10)+2);
}}),_borschik("vTOREKg50iOKPo1amjNJs-kxzDA")&&BEM.DOM.decl("suggest2-counter",{attachReqID:function(){
this._reqID=this.__self._generateReqID(),BEM.blocks["i-global"].setParams({suggest_reqid:this._reqID});
}}),_borschik("VCUs4KpGs3WiQYrzRuppODxCKAU")&&BEM.decl({block:"suggest2-popup",modName:"for",modVal:"popup2"
},{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this._popup.on("beforeClose",function(){
this.afterCurrentEvent(function(){BEM.blocks["suggest2-detect"].isPressedEscape()&&this.trigger("hide",{});
})},this)}}},show:function(t){return this._popup.domElem?(t&&this._popup.setContent(t),this.isShown()?this:(this.trigger("preshow"),
this._popup.setAnchor(this.params.owner),this._popup.setMod("visible","yes"),this.trigger("show"),this)):this;
},hide:function(t){return this.isShown()&&(this._popup.delMod("visible"),this.trigger("hide",t||{})),
this},isShown:function(){return this._popup?this._popup.hasMod("visible","yes"):!1}}),_borschik("20WyJQpdEPZB-6AMhP3V-2_Wbfc")&&BEM.DOM.decl("popup2",{
onSetMod:{js:{inited:function(){this._parentPopup=void 0,this._zIndex=null,this._zIndexGroupLevel=null,
this._isAttachedToScope=!1}},visible:{yes:function(){this.trigger("beforeOpen"),this._isAttachedToScope||(BEM.DOM.scope.append(this.domElem),
this._isAttachedToScope=!0),this._captureZIndex()._bindToParentPopup().bindTo(this.__self._pointerPressEvent,this._setPreventHideByClick).bindTo("leftclick tap",this._setPreventHideByClick);
},"":function(){this.trigger("beforeClose")._releaseZIndex()._unbindFromParentPopup().unbindFrom(this.__self._pointerPressEvent).unbindFrom("leftclick tap");
}}},destruct:function(){this.delMod("visible"),this.__base.apply(this,arguments)},setContent:function(t){
return BEM.DOM.update(this.domElem,t),this},_calcZIndexGroupLevel:function(){var t=this.params.zIndexGroupLevel,e=this._getParentPopup();
return e&&(t+=e._zIndexGroupLevel),t},_setPreventHideByClick:function(){var t=this;do t._preventHideByClick=!0,
t=t._getParentPopup();while(t)},_bindToParentPopup:function(){var t=this._getParentPopup();return t&&t.on("beforeClose",this._onParentPopupClose,this),
this},_unbindFromParentPopup:function(){return this._parentPopup&&this._parentPopup.un("beforeClose",this._onParentPopupClose,this),
this._parentPopup=void 0,this},_onParentPopupClose:function(){this.delMod("visible")},_getParentPopup:function(){
return this._parentPopup},_captureZIndex:function(){null===this._zIndexGroupLevel&&(this._zIndexGroupLevel=this._calcZIndexGroupLevel());
var t=this.__self._visiblePopupsZIndexes,e=this._zIndexGroupLevel,i=t[e],n=this._zIndex;return i||(i=t[e]=[(e+1)*this.__self.ZINDEX_FACTOR]),
this._zIndex=i[i.length-1]+1,i.push(this._zIndex),this._zIndex!==n&&this.domElem.css("z-index",this._zIndex),
this},_releaseZIndex:function(){var t=this.__self._visiblePopupsZIndexes[this._zIndexGroupLevel];return t.splice(t.indexOf(this._zIndex),1),
this},_recaptureZIndex:function(){return this._releaseZIndex(),this._zIndexGroupLevel=null,this._captureZIndex();
},getDefaultParams:function(){return{zIndexGroupLevel:0}}},{live:!0,_visiblePopupsZIndexes:{},ZINDEX_FACTOR:1e3,
_pointerPressEvent:"mousedown"}),_borschik("_61gGbPwL4ldJt9v8MG8f_VNO60")&&BEM.DOM.decl("popup2",{isShown:function(){
return this.hasMod("visible","yes")},hide:function(){return this.delMod("visible")},show:function(){return this.setMod("visible","yes");
}}),_borschik("fCcxyi2q2N370A46VW4RVCmmA6k")&&BEM.decl("keycodes",{},{BACKSPACE:8,TAB:9,ENTER:13,CAPS_LOCK:20,
ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46,
is:function(t,e){return Array.prototype.slice.call(arguments,1).some(function(e){return this[e]===t},this);
}}),_borschik("s9-RQ6nJTihYo3BvOqkuh_lPbgE")&&BEM.DOM.decl({block:"popup2",modName:"autoclosable",modVal:"yes"
},{onSetMod:{visible:{yes:function(){this.__self._visiblePopupsStack.unshift(this),this.afterCurrentEvent(function(){
this.domElem&&this.bindToDoc("leftclick tap",this._onDocClick)}),this.__base.apply(this,arguments)},"":function(){
var t=this.__self._visiblePopupsStack;t.splice(t.indexOf(this),1),this.unbindFromDoc("leftclick tap").__base.apply(this,arguments);
}}},_onDocClick:function(t){this.hasMod("target","anchor")&&(this._anchor[0]===t.target||this._anchor.find(t.target).length>0)||(this._preventHideByClick?this._preventHideByClick=null:this.delMod("visible"));
}},{live:function(){BEM.DOM.doc.on("keydown",this._onDocKeyPress.bind(this))},_visiblePopupsStack:[],
_onDocKeyPress:function(t){BEM.blocks.keycodes.is(t.keyCode,"ESC")&&this._visiblePopupsStack.length&&this._visiblePopupsStack[0].delMod("visible");
}}),_borschik("hon_1rhmvU9embNUYl-xN_OPIEg")&&BEM.DOM.decl({block:"popup2",modName:"autoclosable",modVal:"yes"
},{_onDocClick:function(t){return this.hasMod("fixed","yes")&&(this._anchor[0]===t.target||this._anchor.find(t.target).length>0)?void 0:this.__base.apply(this,arguments);
}}),_borschik("gPEU88EOzolAyWHxzn9Es9xejUY")&&BEM.DOM.decl({block:"search2",modName:"paranja",modVal:"yes"
},{onSetMod:{js:function(){this.__base.apply(this,arguments),this.paranja=this.findBlockInside("paranja"),
BEM.DOM.append(BEM.DOM.scope,this.paranja.domElem),this.input.on({focus:this._showParanja,blur:function(){
this.suggest.isBlur()&&this._hideParanja()}},this)}},_onSubmit:function(){return this._hideParanja(),
this.__base.apply(this,arguments)},_showParanja:function(){this.paranja.open(),this.bPage.setMod("suggest-paranja","open");
},_hideParanja:function(){this.paranja.close(),this.bPage.delMod("suggest-paranja")}}),_borschik("GfqFDRvsEwjrRG108Xa8DCG0izQ")&&BEM.DOM.decl({
block:"search2",modName:"paranja",modVal:"yes"},{_showParanja:function(){this.__base();var t=window.scrollX,e=window.scrollY;
$(window).on("scroll.suggest-paranja",function(){window.scrollTo(t,e)})},_hideParanja:function(){this.__base(),
$(window).off("scroll.suggest-paranja")}}),_borschik("C-AnOPTYGatOjj1l2b1dZHbF-2s")&&BEM.DOM.decl({block:"popup2",
modName:"fixed",modVal:"yes"},{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this._anchor=null,
this._lastDrawingCss={left:void 0,top:void 0}}},visible:{yes:function(){if(!this._anchor)throw new Error("Can't show popup without anchor");
this.setMod("outside","yes").redraw().delMod("outside"),this.__base.apply(this,arguments)}}},show:function(t){
return this.setAnchor(t).setMod("visible","yes")},hide:function(){return this.delMod("visible")},setAnchor:function(t){
return this._anchor=t instanceof BEM.DOM?t.domElem:t,this},redraw:function(){if(!this.hasMod("visible","yes")&&!this.hasMod("outside","yes"))return this;
var t=this._lastDrawingCss,e=!1;return $.each(this._calcDrawingParams(),function(i,n){t[i]!==n&&(t[i]=n,
e=!0)}),e&&this.domElem.css(t),this},_calcDrawingParams:function(){var t=this._calcAnchorDimensions();
return{left:t.left,top:t.top+t.height}},_calcAnchorDimensions:function(){var t=this._anchor,e=t.offset(),i=BEM.DOM.win;
return{left:e.left-i.scrollLeft(),top:e.top-i.scrollTop(),width:t.outerWidth(),height:t.outerHeight()
}},_calcZIndexGroupLevel:function(){var t=this.__base.apply(this,arguments);return this.findBlocksOutside(this._anchor,"z-index-group").reduce(function(t,e){
return t+Number(e.getMod("level"))},t)}}),_borschik("WB3qi6JmWArptMJ_tsdnKTovTZE")&&BEM.DOM.decl({block:"suggest2",
modName:"search",modVal:"yes"},{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this._keyboardState={
opened:window.name.indexOf("keyboard_state=open")>=0,firstFocusIgnored:!1}}}},_onFocus:function(){return this._keyboardState.opened&&!this._keyboardState.firstFocusIgnored?void(this._keyboardState.firstFocusIgnored=!0):void this.__base.apply(this,arguments);
}}),_borschik("a1BZ3JoOVEZ2qmjOraJH74wiUFo")&&BEM.DOM.decl("main",{update:function(t){this.updateAssets(t),
this.replaceContent(t)},updateAssets:function(t){var e=t.params||{},i=e.js,n=e.css,s=e.legacyJS;this.appendStyles(n),
this.appendScripts(i),this.appendScripts(s)},replaceContent:function(t){var e=t.params||{},i=e.html;i?BEM.DOM.update(this.findElem("content"),i):this.showResultError();
},appendStyles:function(t){t&&BEM.DOM.append(BEM.DOM.scope,t)},appendScripts:function(t){t&&t.forEach(function(t){
if(t){var e=document.createElement("script");t.content&&(e.text=t.content),t.url&&(e.src=t.url),t.attrs&&Object.keys(t.attrs).forEach(function(i){
e.setAttribute(i,t.attrs[i])}),BEM.DOM.scope.append(e)}})},showResultError:function(){this._serp||(this._serp=this.findBlockOn("serp")),
this._serp.showResultError()}}),_borschik("wo7Sf9JnmDRcrZIW1hPpfcZ5axA")&&BEM.DOM.decl("main",{isAdvancedSearchOpened:function(){
return this.hasMod("kind","advanced-search")},toggleAdvancedSearch:function(){this.isAdvancedSearchOpened()?this.closeAdvancedSearch():this.openAdvancedSearch();
},openAdvancedSearch:function(t){!this.params.advSearch.isAjax||this.params.advSearch.advPressed||this.advSearch?this._openAdvSearch():this.loadAdvancedSearch(t);
},loadAdvancedSearch:function(t){$.when($.get(this.params.advSearch.urlCSS,this.successLoadAdvSearch.bind(this,"style")),$.get(this.params.advSearch.urlJS,this.successLoadAdvSearch.bind(this,"script"))).done(function(){
BEM.DOM.update(this.findElem("advanced-search"),this.params.advSearch.html),this._openAdvSearch(t),BEM.channel("advansed-search").trigger("inited");
}.bind(this))},successLoadAdvSearch:function(t,e){var i=document.createElement(t);i.innerHTML=e,document.body.appendChild(i);
},_openAdvSearch:function(t){this.advSearch=this.advSearch||this.findBlockInside("advanced-search"),t&&this.advSearch.setSiteValue(t.site,{
noSubmit:!0}),this.advSearch.open(),this.setMod("kind","advanced-search")},closeAdvancedSearch:function(){
this.delMod("kind"),this.findBlockInside("advanced-search").reset()},onAjaxSuccess:function(t){this.clearUrlParams(),
this.closePanel(!0),BEM.DOM.win.scrollTop(0),this.update(t)},clearUrlParams:function(){var t=BEM.blocks.uri.parse(window.location.href);
BEM.blocks["i-global"].setParams({csg:t.getParam("csg"),suggest_reqid:t.getParam("suggest_reqid")}),window.history&&"pushState"in window.history&&BEM.blocks.location.getInstance().change({
url:t.deleteParam("csg").deleteParam("suggest_reqid").toString(),trigger:!1,history:!1})}}),_borschik("2gs-7xJMkYBq-rLWguecB5MxQoM")&&BEM.DOM.decl("main",{
onAjaxSuccess:function(){var t=this.channel("main");t.trigger("updateStart"),this.__base.apply(this,arguments),
t.trigger("updateStop")}}),_borschik("zecsvmuDpF84z3Pxy_GnlE7LgdA")&&BEM.DOM.decl("progress",{update:function(t,e){
return this.setMod("timing",e||"").domElem.css({width:0>=t?"0":t>=1?"100%":(100*t).toPrecision(2)+"%"
}).css("width"),this}}),_borschik("4Y8hj0l_haXfxPkkAvSv7j5eDKk")&&!function(){var t=500,e=400,i=200,n=.8;
BEM.DOM.decl("progress",{onSetMod:{js:{inited:function(){BEM.channel("serp-request").on({startProgress:this._startProgress,
stopProgress:this._stopProgress},this)}}},_startProgress:function(){this._clearTimers(),this.update(0),
this._timeout=setTimeout(function(){delete this._timeout,this._thresholdDistance=n,this._onPending(),
this._interval=setInterval(this._onPending.bind(this),e)}.bind(this),t)},_onPending:function(){this._thresholdDistance/=2,
this.update(n-this._thresholdDistance,"pending")},_stopProgress:function(){return this._timeout?(this._clearTimers(),
void this.update(0)):(this._clearTimers(),this.update(1,"finish"),void(this._timeout=setTimeout(function(){
delete this._timeout,this.update(1,"hide")}.bind(this),i)))},_clearTimers:function(){this._timeout&&(clearTimeout(this._timeout),
delete this._timeout),this._interval&&(clearInterval(this._interval),delete this._interval)}})}(),_borschik("tP2OS0l-LXRrSHsUaTjncGm1Agk")&&BEM.DOM.decl("default-search",{
onSetMod:{js:function(){try{2!==window.external.IsSearchProviderInstalled(location.origin)&&this._show();
}catch(t){}}},_show:function(){this.webstoreItem=BEM.create("chrome-webstore-item_type_set",this.params.webItem),
this.webstoreItem.on("installed",this._chromeAppInstalled,this).on("installationFailed",this._chromeAppInstallationFailed,this).on("installationCancelled",this._chromeAppInstallationCancelled,this),
this.domElem.on("click",this._install.bind(this)),this.delMod("visibility")},_install:function(){this._chromeAppCounter(this.params.downloadCounter),
this.webstoreItem.install()},_chromeAppInstalled:function(){this._chromeAppCounter(this.params.successCounter);
},_chromeAppInstallationFailed:function(t,e){this._chromeAppCounter(this.params.failureCounter,{error_code:e.errorCode
})},_chromeAppInstallationCancelled:function(){this._chromeAppCounter(this.params.closePopupCounter)},
_chromeAppCounter:function(t,e){var i=Object.create(e||{});i.app_url=this.params.webItem.url,BEM.blocks.counter.log(t,i);
}}),_borschik("PqksHYuzRJcvb2W5zVQrtJg1ri0")&&BEM.decl("counter",null,{log:function(t,e){var i=[];if(t[1]&&i.push(t[1]),
e)for(var n in e)i.push("-"+encodeURIComponent(n)+"="+encodeURIComponent(e[n]));w(null,t[0],i.join(","));
}}),_borschik("hLT6_HzpoVKa5pIUhRb0Qhibhkk")&&BEM.DOM.decl("main",{onSetMod:{js:function(){this.clearUrlParams();
var t=this.elem("content-preview-container");this.previewContainer=this.findBlockOn(t,"content-preview"),
this.__base.apply(this,arguments)}},isPanelOpened:function(){return!this.hasMod("right-panel-hidden");
},openPanel:function(){this.hasMod("right-panel-hidden","yes")&&(this.delMod("right-panel-animate"),this.delMod("right-panel-hidden"),
this.updatePanelPosition(),this.bindEvents(),this.trigger("panelOpened"))},closePanel:function(t){this.hasMod("right-panel-hidden","yes")||(t&&this.setMod("right-panel-animate","no"),
this.setMod("right-panel-hidden","yes"),this.unbindEvents(),this.trigger("panelClosed"))},togglePanel:function(){
this.hasMod("right-panel-hidden","yes")?this.openPanel():this.closePanel()},_onEventsSomewhereElse:function(t){
$(t.target).filter(this.__self._activeElements).length||$(t.target).parents(this.__self._activeElements).length||(this.closePanel(),
this.unbindEvents())},bindEvents:function(){this.bindToDoc("leftclick.mainRight tap.mainRight",this._onEventsSomewhereElse);
},unbindEvents:function(){this.unbindFromDoc("leftclick.mainRight tap.mainRight")}},{_activeElements:[".serp-item__preview-btn",".serp-item_preview-active_yes",".z-images__link",".content-preview",".i-geo-point__cont",'[target="_blank"]',"ymaps",".video-thumb",".popup",".previewed"].join()
}),_borschik("HQBTFCbU_7csb1GDcY35CWumA3I")&&BEM.DOM.decl("main",{onSetMod:{js:function(){this.__base.apply(this,arguments),
this.findContentLeftColumn(),this.channel("main").on("updateStop",this.findContentLeftColumn,this),this.scrollHandler=$.debounce(this.setPreviewContainerSize,100,this),
this.resizeHandler=$.debounce(this.onResize,100,this)}},openPanel:function(){this.__base.apply(this,arguments),
this.setPreviewContainerSize()},bindEvents:function(){this.__base.apply(this,arguments),this.bindToWin("resize",this.resizeHandler),
this.bindToWin("scroll",this.scrollHandler)},unbindEvents:function(){this.__base.apply(this,arguments),
this.unbindFromWin("resize",this.resizeHandler),this.unbindFromWin("scroll",this.scrollHandler)},findContentLeftColumn:function(){
this.contentLeftColumn=this.findBlockInside("content").elem("left")},updatePanelPosition:function(){var t,e,i,n,s=BEM.DOM.win.scrollTop();
this.elem("right").isMedia("main__right_size_m")?(n=this.elem("left").offset().top,t=n-s):(e=this.contentLeftColumn.offset().top,
i=this.elem("center").offset().top,t=Math.max(e-s,i)),this.elem("right").css("top",t)},setPreviewContainerSize:function(){
var t,e,i,n,s,o=this.elem("right-inner").height();this.elem("right").isMedia("main__right_size_l")&&(t=this.elem("center"),
e=t.offset().top+t.height(),i=BEM.DOM.win.scrollTop(),n=BEM.DOM.win.height(),s=i+n-e,s>0&&(o-=s)),this.previewContainer.setMaxHeight(o);
},onResize:function(){this.updatePanelPosition(),this.setPreviewContainerSize()}}),_borschik("UAU-CxlQPp18Ydx1-HYY7irFV4Y")&&BEM.DOM.decl("content-preview",{
onSetMod:{js:function(){this._defaultParams=this.params,this.data={},this.channel("content-preview").on({
update:this._onChannelUpdate,toggle:this._onChannelToggle},this),this.opened=!1,this.elem("close-wrap").click(this.onCloseButtonClick.bind(this)),
this.main=this.findBlockOutside("main"),this.main.on("panelClosed",this._onPanelClosed,this)}},_onPanelClosed:function(){
this.opened&&(this.opened=!1,this.channel("content-preview").trigger("closed"),this.trigger("closed"));
},open:function(t){this.opened||(this.main.openPanel(),this.opened=!0,this.trigger("opened")),t&&this.update(t);
},close:function(){this.main.closePanel(),this.opened=!1},isOpened:function(){return this.opened},_onChannelUpdate:function(t,e){
this.update(e)},_onChannelToggle:function(t,e){return this._isSameContent(e)&&this.main.isPanelOpened()?void this.close():void this.open(e);
},destruct:function(){},show:function(t){BEM.DOM.update(this.elem("wrap"),t)},showEmpty:function(){var t=this.__self.createEmpty(this.params.empty);
this.show(t),sh(this.params.empty.showCounter)},update:function(t){this.channel("content-preview").trigger("before-update",t),
this._isInited||this._afterInit(),this._isSameContent(t)||(this.data=t,this.params=$.extend(!0,[],this._defaultParams,t),
this.closeCounter=null,this.setContent(t.type,t.content))},setContent:function(t,e){t?this.setMod("type",t):this.delMod("type"),
this._beforeUpdate(),e?this.show(e):this.showEmpty(),this.setMod("updated","yes"),this._afterUpdate(),
this.trigger("contentChanged")},onCloseButtonClick:function(){this.main.closePanel(),this.closeCounter&&BEM.blocks.counter.log(this.closeCounter);
},_afterInit:function(){this._isInited=!0},_beforeUpdate:function(){BEM.DOM.destruct(this.elem("wrap"),!0),
this.trigger("beforeUpdate")},_afterUpdate:function(){var t=this._getExtraParams();return t.isEmpty?void this.showEmpty():(t.counter&&sh(t.counter),
this.trigger("resized"),t.closeCounter&&(this.closeCounter=t.closeCounter),void this.trigger("updated"));
},_getExtraParams:function(){var t=this.findElem("extra-params");return t.length?this.elemParams(t):{};
},_isSameContent:function(t){return!t.force&&this.data.content===t.content},setMaxHeight:function(t){
this.elem("content-container").css("max-height",t-this.elem("close-wrap").outerHeight())}},{createEmpty:function(t){
return BEMHTML.apply([{block:"content-preview",elem:"content",mods:{empty:"yes"},content:t.text.replace("%sitename%",BEMHTML.apply({
block:"link",mix:[{block:"content-preview",elem:"empty-link"}],url:t.siteUrl,counter:t.textCounter,target:"_blank",
content:t.siteName}))}])}}),_borschik("646wGChD-RInSIwAavzk3cCJ7BA")&&!function(t){t.fn.extend({isMedia:function(t){
return this.getMedia()===t},getMedia:function(){if(this.css){var t=this.css("counter-reset");return t=t&&t.split(" ")||"",
t[1===t.length?0:t.length-2]}}})}(jQuery),_borschik("K5wkVCaMBCJT1VVUk8uOawlXJJ0")&&BEM.DOM.decl("main",{
onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this.hasMod(this.elem("left"),"fixed","yes")&&this._initBlock();
}}},_initBlock:function(){this._documentElement=BEM.DOM.doc[0].documentElement,this._body=BEM.DOM.scope[0],
this._toggleScrollHandler(),this._repositionMenu(),this._repositionMenu=$.throttle(this._repositionMenu,50),
this.bindToWin("resize",$.throttle(this._toggleScrollHandler,100))},_repositionMenu:function(t){var e=Math.min(this._getScrollLeft(),this._maxScrollLeft),i=Math.min(-e,0);
void 0===t&&(this._currentScrollLeft=0),(void 0===t||e!==this._currentScrollLeft)&&this.elem("left").css("left",i),
this._currentScrollLeft=e},_toggleScrollHandler:function(){this._maxScrollLeft=this._getMaxScrollLeft(),
0!==this._maxScrollLeft?(this._isOnScrollBound||this.bindToWin("scroll.mainLeft",this._repositionMenu),
this._isOnScrollBound=!0):this._isOnScrollBound&&(this.unbindFromWin("scroll.mainLeft"),this._isOnScrollBound=!1),
this._needReposition()&&this._repositionMenu(),this._previousWinWidth=this._getWinWidth()},_needReposition:function(){
var t=100;return this._getWinWidth()-this._previousWinWidth>t},_getWinWidth:function(){return BEM.DOM.win.width();
},_getMaxScrollLeft:function(){return this._body.scrollWidth-this._body.offsetWidth},_getScrollLeft:function(){
return this._documentElement.scrollLeft||this._body.scrollLeft}}),_borschik("vGKWNWPgWY9kfpEhs2n7iWSgxfc")&&(BEM.DOM.decl("b-keyboard-loader",{
onSetMod:{js:function(){Lego.block["b-keyboard-loader"].call(this.domElem,this.params)}}}),function(t,e){
e.block["b-keyboard-loader"]=function(i){function n(i){var n=i?"addClass":"toggleClass",s=c.find(".b-keyboard-popup"),o=e.block["b-keyboard"]._lastFocusedIn;
s.length&&(c.find(".b-keyboard-popup__gap")[n]("i-hidden"),c.find(".b-keyboard-popup")[n]("i-hidden").hasClass("i-hidden")?(h.trigger("keyboardClosed"),
t(document).trigger("popupsClose.lego"),o&&o.focus()):h.trigger("keyboardOpened.lego"),s.data("isHidden",!1));
}function s(){l||(e.cp(0,70873,BEM.blocks["i-global"].param("id")+"."+(i.autoLoad?"auto":"manual")),l=!0);
}function o(t){return r()[t]}function r(){var e={};return t.each(window.name.split("&"),function(){if(this.toString()){
var t=this.split("=");e[t[0]]=t[1]}}),e}function a(e,i){var n=r(),s=[];n[e]=i,t.each(n,function(t,e){
s.push(t+"="+e)}),window.name=s.join("&")}var c=t(document.body),h=t(window),u=this;u.click(function(s){
s.preventDefault();var o=t(this),r=(this.className.match(/b-keyboard-loader_lang_(\w+)/)||["",""])[1];
if(c.find(".b-keyboard")[0])n();else{var a=BEM.blocks["i-global"].param("lego-static-host"),u=a+("/"===a.charAt(a.length-1)?"":"/")+"blocks-desktop/",l=[u+"b-keyboard/_keyboard.js"],d=BEM.blocks["i-ua"].ie<=10&&(!document.documentMode||document.documentMode<9)?".ie":"",p=[u+"b-keyboard/_keyboard"+d+".css"];
o.append('<i class="b-keyboard-loader__progress"/>'),t.xLazyLoader({name:"b-keyboard",js:l,css:p,success:function(){
e.block["b-keyboard-popup"]({lang:r,"for":i["for"]}),c.append("<div class=\"b-keyboard i-bem\" onclick=\"return {'b-keyboard': { lang:'"+r+"'}};\"></div>"),
BEM.DOM.init(t(".b-keyboard")),o.find(".b-keyboard-loader__progress").remove(),h.trigger("keyboardOpened.lego",{
afterLoad:!0})}})}}),h.bind("keyboardOpen.lego",function(){u.click()}).bind("keyboardClose.lego",n),i["for"]&&h.bind("keyboardOpened.lego",function(e,n){
!(n&&n.afterLoad&&i.autoLoad)&&t(i["for"]).focus()}),h.bind("keyboardLangChanged.lego keyboardSetLang.lego",function(t,e){
var i=u.find(".b-keyboard-loader__flag");i[0]&&("tt"===e&&(e="ru"),i.attr("src",i.attr("src").replace(/[a-z]+\.png$/,e+".png")));
}),i.storeState=i.storeState!==!1,i.storeState&&h.bind("keyboardOpened.lego",function(){a("keyboard_state","open");
var e=o("keyboard_lang");e&&t(window).trigger("keyboardSetLang.lego",e)}).bind("keyboardClosed.lego",function(){
a("keyboard_state","close")}).bind("keyboardLangChanged.lego",function(t,e){a("keyboard_lang",e)}),(i.autoLoad=i.autoLoad||i.storeState&&"open"===o("keyboard_state"))&&u.click();
var l;h.bind("keyboardOpened.lego",function(){s(),t("input:focus").focus()})}}(jQuery,window.Lego),_borschik("lYXAb_RFH0GR0fpkRlZvhJJprgg")&&!function(t){
function e(){function e(t,e){u[t](e,function(t){"error"===t?d.push(e):l.push(e)&&r.each(e),s()},"lazy-loaded-"+(r.name?r.name:(new Date).getTime()));
}function n(t){r.complete(t,l,d),r[t]("error"===t?d:l),clearTimeout(a),clearTimeout(c)}function s(){l.length===p.length?n("success"):l.length+d.length===p.length&&n("error");
}function o(){d.push(this.src),s()}var r,a,c,h,u=this,l=[],d=[],p=[];this.init=function(i){if(i){if(r=t.extend({},t.xLazyLoader.defaults,i),
h={js:r.js,css:r.css,img:r.img},t.each(h,function(t,e){"string"==typeof e&&(e=e.split(",")),p=p.concat(e);
}),!p.length)return void n("error");r.timeout&&(a=setTimeout(function(){var e=l.concat(d);t.each(p,function(i,n){
-1===t.inArray(n,e)&&d.push(n)}),n("error")},r.timeout)),t.each(h,function(i,n){t.isArray(n)?t.each(n,function(t,n){
e(i,n)}):"string"==typeof n&&e(i,n)})}},this.js=function(e,n,s){var r=t('script[src*="'+e+'"]');if(r.length)return void(r.attr("pending")?r.bind("scriptload",n):n());
var a=document.createElement("script");a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),
a.setAttribute("src",e),a.setAttribute("pending",1),a.onerror=o,t(a).bind("scriptload",function(){t(this).removeAttr("pending"),
n(),setTimeout(function(){t(a).unbind("scriptload")},10)});var c=!1;a.onload=a.onreadystatechange=function(){
c||this.readyState&&!/loaded|complete/.test(this.readyState)||(c=!0,a.onload=a.onreadystatechange=null,
t(a).trigger("scriptload"))},i.appendChild(a)},this.css=function(e,n,s){if(t('link[href*="'+e+'"]').length)return void n();
var o=document.createElement("link");o.setAttribute("type","text/css"),o.setAttribute("rel","stylesheet"),
o.setAttribute("href",e);var r=navigator.userAgent.toLowerCase().indexOf("msie")>-1,a=window.opera&&window.opera.version()<13;
r?o.onreadystatechange=function(){/loaded|complete/.test(o.readyState)&&n()}:a?o.onload=n:!function(){
o&&o.sheet?n():c=setTimeout(arguments.callee,20)}(),i.appendChild(o)},this.img=function(t,e){var i=new Image;
i.onload=e,i.onerror=o,i.src=t},this.disable=function(e){t("#lazy-loaded-"+e,i).attr("disabled","disabled");
},this.enable=function(e){t("#lazy-loaded-"+e,i).removeAttr("disabled")},this.destroy=function(e){t("#lazy-loaded-"+e,i).remove();
}}t.xLazyLoader=function(t,i){"object"==typeof t&&(i=t,t="init"),(new e)[t](i)},t.xLazyLoader.defaults={
js:[],css:[],img:[],name:null,timeout:2e4,success:function(){},error:function(){},complete:function(){},
each:function(){}};var i=document.getElementsByTagName("head")[0]}(jQuery)),_borschik("uMKSKvCiqV_z4LBU_1czx1PUUAs")&&BEM.DOM.decl("content",{
onSetMod:{js:function(){this.__base.apply(this,arguments),this._bindMainPanelEvents()}},_bindMainPanelEvents:function(){
var t=this.findBlockOutside("main");t.on("panelOpened",this.hideRightPanel,this),t.on("panelClosed",this.showRightPanel,this);
},_unbindMainPanelEvents:function(){var t=this.findBlockOutside("main");t.un("panelOpened",this.hideRightPanel,this),
t.un("panelClosed",this.showRightPanel,this)},hideRightPanel:function(){this.setMod(this.findElem("right"),"hidden","yes");
},showRightPanel:function(){this.delMod(this.findElem("right"),"hidden")},destruct:function(){return this._unbindMainPanelEvents(),
this.__base.apply(this,arguments)}}),_borschik("PYzutwnHR8MSaLv-N091TlbA5zM")&&BEM.DOM.decl("grid",{onSetMod:{
js:function(){this.updateColsMod(),this.bindToWin("resize orientationchange",this._onResize)}},_onResize:function(){
this.updateColsMod()},updateColsMod:function(){var t=this.domElem.getMedia().replace(/\D+/,"");this.setMod("cols",t).trigger("resized",{
gridElem:this.domElem})}}),_borschik("0VynPuANG4e_nIRAGJvCVdu1yMk")&&BEM.DOM.decl("button",{onSetMod:{
js:function(){var t=this.isDisabled(),e=this.domElem;(this._href=e.attr("href"))&&t&&e.removeAttr("href");
},disabled:function(t,e){var i="yes"===e,n=this.domElem;i&&this.delMod("hovered"),this._href&&(i?n.removeAttr("href"):n.attr("href",this._href)),
this.afterCurrentEvent(function(){n.attr("disabled",i)})},pressed:function(t,e){return this.isDisabled()?!1:void this.trigger("yes"===e?"press":"release");
}},isDisabled:function(){return this.hasMod("disabled","yes")},url:function(t){return"undefined"==typeof t?this._href:(this._href=t,
this.isDisabled()||this.domElem.attr("href",t),this)},_onClick:function(t){this.isDisabled()?t.preventDefault():this.afterCurrentEvent(function(){
this.trigger("click")})}},{live:function(){this.liveBindTo("leftclick tap",function(t){this._onClick(t);
})}}),_borschik("51Lr7fUE6SX1NdJQ5ISiAWQIpFE")&&BEM.DOM.decl("button",{onSetMod:{js:function(){this.__base.apply(this,arguments);
},focused:{yes:function(){return this.isDisabled()?!1:(this.bindToWin("unload",function(){this.delMod("focused");
}).bindTo("keydown",this._onKeyDown),this._isControlFocused()||this._getControl().focus(),void this.trigger("focus"));
},"":function(){this.unbindFromWin("unload").unbindFrom("keydown"),this._isControlFocused()&&this._getControl().blur(),
this.trigger("blur")}},disabled:function(t,e){this.__base.apply(this,arguments),"yes"===e&&this.domElem.keyup();
},hovered:function(t,e){return this.isDisabled()?!1:void(""===e&&this.delMod("pressed"))},pressed:function(){
return this.isDisabled()||this.setMod("focused","yes"),this.__base.apply(this,arguments)}},_getControl:function(){
return this.elem("control").length&&this.elem("control")||this.domElem},_isControlFocused:function(){
try{return this.containsDomElem($(this.__self.doc[0].activeElement))}catch(t){return!1}},_onKeyDown:function(t){
var e=t.keyCode;13!==e&&32!==e||this._keyDowned||(this._keyDowned=!0,this.setMod("pressed","yes").bindTo("keyup",function(){
this.delMod("pressed").unbindFrom("keyup"),delete this._keyDowned,32===e&&this.domElem.attr("href")&&(document.location=this.domElem.attr("href"));
}))},destruct:function(){this.delMod("focused"),this.__base.apply(this,arguments)}},{live:function(){
this.__base.apply(this,arguments);var t={mouseover:{name:"hovered",val:"yes"},mouseout:{name:"hovered"
},mousedown:{name:"pressed",val:"yes"},mouseup:{name:"pressed"},focusin:{name:"focused",val:"yes"},focusout:{
name:"focused"}},e=8===BEM.blocks["i-ua"].ie;this.liveBindTo("mouseover mouseout mouseup focusin focusout",function(i){
var n=t[i.type];this.setMod(n.name,n.val||""),!e||this._href||"mouseup"!==i.type&&"mouseout"!==i.type||this.domElem.height();
}).liveBindTo("mousedown",function(e){var i=t[e.type];1===e.which&&this.setMod(i.name,i.val||"")})}}),
_borschik("kCiHC0E32zt_AmBJwRxXVX_cXpA")&&!function(){function t(){s=!0,setTimeout(setTimeout.bind(window,e));
}function e(){s=!1}function i(){n.toggleClass("pointerfocus",s)}if(window.addEventListener){var n=$(document.documentElement),s=!1;
addEventListener("mousedown",t,!0),addEventListener("mouseup",t,!0),addEventListener("click",t,!0),addEventListener("onfocusin"in window?"focusin":"focus",i,!0);
}}(),_borschik("njUF67wAd8AGmbBYdRyYcUp63dA")&&BEM.DOM.decl({block:"popup",modName:"autosize",modVal:"yes"
},{getDefaultParams:function(){var t=this.__base();return t.offsetWithoutTail=5,t},repaint:function(){
return this._saveDefault(),this.__base(),this.domElem.css({maxWidth:this.size.width,height:this.size.height
}),this},_saveDefault:function(){this._defSize||(this._defSize=this.getPopupSize())},_resetDefault:function(){
return this._defSize=null,this.domElem.css({maxWidth:"",height:""}),this},_getAvailableSpace:function(t){
return this._owner?{width:this._getAvailableWidth(t),height:this._getAvailableHeight(t)}:$.extend({},this._defSize);
},_getAvailableWidth:function(t){var e=BEM.DOM.getWindowSize(),i=e.width,n=t.offset,s=this._owner[0].getBoundingClientRect(),o=$.extend({},this._defSize);
switch(t.to){case"left":i=s.left,"number"==typeof n&&(i-=n),"object"==typeof n&&(n.left&&(i+=n.left),
n.right&&(i-=n.right));break;case"right":i=e.width-s.right,"number"==typeof n&&(i-=n),"object"==typeof n&&(n.left&&(i-=n.left),
n.right&&(i+=n.right))}return("left"===t.to||"right"===t.to)&&(i-=this._tailPos?2*this.params.tail.width:this.params.offsetWithoutTail),
Math.min(o.width,i)},_getAvailableHeight:function(t){var e=BEM.DOM.getWindowSize(),i=e.height,n=t.offset,s=this._owner[0].getBoundingClientRect(),o=$.extend({},this._defSize);
switch(t.to){case"bottom":i=e.height-s.bottom,"number"==typeof n&&(i-=n),"object"==typeof n&&(n.bottom&&(i+=n.bottom),
n.top&&(i-=n.top));break;case"top":i=s.top,"number"==typeof n&&(i-=n),"object"==typeof n&&(n.bottom&&(i-=n.bottom),
n.top&&(i+=n.top))}return("bottom"===t.to||"top"===t.to)&&(i-=this._tailPos?2*this.params.tail.height:this.params.offsetWithoutTail),
Math.min(o.height,i)},_calcTop:function(t){var e,i=this.__base(t),n=$(window).scrollTop(),s=BEM.DOM.getWindowSize(),o=this.getPlacingSize(),r=this.getOwnerPos(),a=this.getOwnerSize();
return 0>i&&(i=0),e=Math.max(s.height+n,r.top+a.height),i+o.height>e&&(i=e-o.height),i},_calcLeft:function(t){
var e,i=this.__base(t),n=$(window).scrollLeft(),s=BEM.DOM.getWindowSize(),o=this.getPlacingSize(),r=this.getOwnerPos(),a=this.getOwnerSize();
return 0>i&&(i=0),e=Math.max(s.width+n,r.left+a.width),i+o.width>e&&(i=e-o.width),i},getPlacingSize:function(){
return this._availSizes},_calcPlacingSize:function(t){return this._availSizes=this._getAvailableSpace(t),
this._availSizes},_calcVisibilityFactor:function(){var t=this._defSize,e=this.getPlacingSize(),i=e.height*e.width,n=t.height*t.width;
return i/n*100}}),_borschik("2a-EDcR9wCmW_Eysp4WLcN8DEDY")&&BEM.DOM.decl("select",{onSetMod:{js:function(){
this._items=[],this._curItemIndex=-1,this._scrollableElemOutsidePopup=null,this._rowHeight=22,this.on("change",this._redrawParentPopup);
var t=this._getSelectedText();t&&t!==this._getButtonText()&&this.elem("control").trigger("change")},disabled:function(t,e){
var i="yes"===e;this.elem("control").attr("disabled",i),this._getButton().setMod(t,e),i&&this.delMod("opened").delMod("focused");
},focused:{yes:function(){return this.hasMod("disabled","yes")?!1:(this._useNativeControl()||this.bindTo("keydown",this._onKeyDown),
void this.afterCurrentEvent(function(){this.trigger("focus")}))},"":function(){this._useNativeControl()||this.delMod("opened").unbindFrom("keydown"),
this.afterCurrentEvent(function(){this.trigger("blur")})}},opened:function(t,e){this._getButton()&&this._getButton().domElem&&this._getButton().toggleMod("arrow","up","down","yes"===e);
}},isDisabled:function(){return this.hasMod("disabled","yes")},isOpened:function(){return this.hasMod("opened","yes");
},open:function(){return this.setMod("opened","yes")},close:function(){return this.delMod("opened")},
val:function(t,e){if("undefined"==typeof t)return this.elem("control").val();var i,n=-1;return this.findElem("option").each(function(e){
this.value===t&&!this.disabled&&(i=$(this).parent("optgroup")[0],!(i&&i.disabled))&&(n=e)}),n>-1&&this._selectedIndex(n,e),
this},name:function(t){var e=this.elem("control");return arguments.length?(e.attr("name",t),this):e.attr("name");
},_selectedIndex:function(t,e){var i=this._getSelectedIndex();return"undefined"==typeof t||t===i?i:(this.elem("control").prop("selectedIndex",t),
this._useNativeControl()||(this._setButtonText(this._getSelectedText()),this._items[0]&&this.delMod(this._items,"selected").setMod(this._items.eq(t),"selected","yes")),
this.trigger("change",$.extend({index:t,prev:i},e)),t)},setOptions:function(t){return t?(BEM.DOM.update(this.elem("control"),BEMHTML.apply($.map(t,this.__self._buildOption))),
this.redraw()):this},redraw:function(){return this._popup&&this._redrawList(),this.elem("control").trigger("change"),
this},_useNativeControl:function(){return null!==this.__self.useNativeControl?this.__self.useNativeControl:this.__self.useNativeControl="none"!==this.elem("control").css("display");
},_redrawParentPopup:function(){return this._isParentPopup()&&this._popup._parent.repaint(),this},_isParentPopup:function(){
return this._popup&&this._popup._parent&&!this.hasMod("layout","fixed")},_onSelectChange:function(){var t=this;
t._setButtonText(t._getSelectedText()),t.trigger("change",{index:t._getSelectedIndex(),prev:-1})},_onControlFocusInOut:function(t){
this._useNativeControl()&&this.toggleMod("focused","yes","","focusin"===t.type)},_onMouseDown:function(t){
this._isControlFocused()&&t.preventDefault()},_onKeyDown:function(t){var e=38===t.keyCode,i=40===t.keyCode,n=13===t.keyCode,s=32===t.keyCode;
if(e||i){if(t.preventDefault(),!this.isOpened())return this.open();var o=this._items.length,r=this._curItemIndex;
if(e&&0===r||i&&r>o-2)return;if(o){var a=i?1:-1,c=0;for(c=r;c>=0&&o>=c;)if(c+=a,this._isSelectableItem(this._items.eq(c))){
r=c;break}this._onEnterItem(this._items.eq(r),!0)}}(n||s)&&this._onEnterItem(this._items.eq(this._curItemIndex),!0,!0);
},_onEnterItem:function(t,e,i){this.elem("button").attr("aria-activedescendant",t.attr("id"));var n=this._curItemIndex,s=this._getItemIndex(t),o=this._items;
n>-1&&this.delMod(o.eq(n),"hovered"),s>-1&&(this._curItemIndex=s,this.setMod(o.eq(s),"hovered","yes")),
i&&this._selectedIndex(this._curItemIndex),e&&this._scrollToCurrent()},_onLeaveItem:function(t){var e=this._curItemIndex;
e>-1&&e===this._getItemIndex(t)&&(this.delMod(this._items.eq(e),"hovered")._curItemIndex=-1)},_onSelectItem:function(t){
return this._isSelectableItem(t)&&this._selectedIndex(this._curItemIndex),this.close()},_onButtonFocus:function(){
this.setMod("focused","yes")},_findScrollableElemOutsidePopup:function(){if(null===this._scrollableElemOutsidePopup){
var t,e=this._getPopup().domElem;do e=e.parent(),t=e.css("overflow-y");while("scroll"!==t&&"auto"!==t&&"HTML"!==e.prop("tagName"));
this._scrollableElemOutsidePopup=e}return this._scrollableElemOutsidePopup},_onButtonBlur:function(){
if(this.isOpened()&&this._isPopupFocused())if(8===BEM.blocks["i-ua"].ie){var t=this._findScrollableElemOutsidePopup(),e=t.scrollTop();
this._focusButton(),t.scrollTop(e)}else this._focusButton();else this.delMod("focused")},_onButtonPress:function(){
this.toggleMod("opened","yes","")},_focusButton:function(){return this._getButton().setMod("focused","yes"),
this},_blurButton:function(){return this._getButton().delMod("focused"),this},_isPopupFocused:function(){
try{return this._getPopup().containsDomElem($(document.activeElement))}catch(t){return!1}},_getButtonText:function(){
return this._getButton().elem("text").text()},_setButtonText:function(t){t.length&&(this._getButton().elem("text").text(t),
BEM.blocks["i-ua"].ie<10&&this.domElem.parent().css("outline",""))},_isOutsideClicked:function(t,e){return this.containsDomElem($(e.target));
},_getItemIndex:function(t){return $.inArray(t.get(0),this._items)},_getSelectedText:function(){return this.elem("control").find(":selected").text();
},_getSelectedIndex:function(){return this.elem("control").prop("selectedIndex")},_isSelectableItem:function(t){
var e;return e=this.hasMod(t,"disabled","yes")||this.hasMod(t,"label","yes")?!1:!0},_getButton:function(){
return this._button||(this._button=this.findBlockOn("button","button"))},_getRowHeight:function(){return this.findElem(this._getPopup().domElem,"item").outerHeight();
},_isControlFocused:function(){try{return this.containsDomElem($(this.__self.doc[0].activeElement))}catch(t){
return!1}},destruct:function(){this._outPopup&&this._outPopup.un("outside-click"),this.delMod("opened"),
this._popup&&this._popup.domElem&&BEM.DOM.destruct(this._popup.domElem),this.__base.apply(this,arguments);
},getDefaultParams:function(){return{rows:15,popupMods:{direction:"down"}}}},{live:function(){this.liveBindTo("control","change",function(t){
this._onSelectChange()}),this.liveBindTo("control","focusin focusout",function(t){this._onControlFocusInOut(t);
}),this.liveBindTo("mousedown",function(t){this._onMouseDown(t)}),this.liveInitOnBlockInsideEvent("focus","button",function(){
this._onButtonFocus()}).liveInitOnBlockInsideEvent("blur","button",function(){this._onButtonBlur()}).liveInitOnBlockInsideEvent("press","button",function(){
this._onButtonPress()})},useNativeControl:null,_buildOption:function t(e,i,n){var s={};return"option"===e.item?(s={
block:"select",elem:"option",tag:"option",attrs:{value:e.value},content:e.content},e.disabled&&(s.attrs.disabled="disabled"),
e.selected&&(s.attrs.selected="selected")):"optgroup"===e.item&&(s={elem:"option-group",tag:"optgroup",
attrs:{label:e.label}},e.disabled&&(s.attrs.disabled="disabled"),s.content=Array.isArray(e.content)?e.content.map(function(e,i){
return t(e,i)}):e.content),s.block="select",s}}),_borschik("SmaEVeHIQTzg2rbS34tGgMD7aBc")&&BEM.DOM.decl("select",{
onElemSetMod:{item:{hovered:function(){BEM.blocks["i-ua"].opera<13&&this._popup.domElem.css("display","inline").css("display","");
}}}}),_borschik("7r0lSBJElJKvRjAWi3nh9sbHVe8")&&BEM.DOM.decl("select",{onSetMod:{js:function(){this.__base.apply(this,arguments),
this._initButton()}},_initButton:function(){},_redrawList:function(){var t,e=this,i=this._getPopup().domElem;
return BEM.DOM.update(this.findElem(i,"list"),this.__self._buildItemsHtml(this.elem("control").children())),
t=this.findElem(i,"item"),this._curItemIndex=-1,this._items=t.filter(function(){return!e.hasMod($(this),"label","yes");
}),this}},{_buildItemsHtml:function(t){function e(t,e,i){var n={block:"select",elem:"item",content:{elem:"text",
tag:"span",content:e||" &nbsp; "},elemMods:{}};return i&&(n.elemMods=i),n}function i(t,n){var c=t.length;
if(c){var h=0;do{var u=$(t[h]),l=u.attr("disabled")&&{disabled:"yes"};if(u.is("optgroup")){a=!0,!u.prev().is("optgroup")&&h>0&&o.push(s),
r.push(o),o=[],o.push(e(u,u.attr("label"),$.extend({label:"yes"},l,n))),i(u.children(),$.extend({inner:"yes"
},l,n));var d=o;o=r.pop(),o.push({block:"select",elem:"group",content:d})}else o.push(e(u,u.html(),$.extend(l,u.is(":selected")&&{
selected:"yes"},n)))}while(++h<c||(a=!1))}}var n="select",s={block:n,elem:"separator",tag:"i"},o=[],r=[],a=!1;
return i(t),BEMHTML.apply(o)}}),_borschik("AlvFf0ZmeOjMXrxeeDmVFScrWtQ")&&BEM.DOM.decl("select",{_redrawList:function(){
this.__base();var t=this;this.bindTo(t._items,{mouseup:function(e){1===e.which&&(e.preventDefault(),t._onSelectItem(e.data.domElem));
},mouseover:function(e){t._onEnterItem(e.data.domElem)},mouseout:function(e){t._onLeaveItem(e.data.domElem);
}})}}),_borschik("dZDE2bkFlvhuwjrPQv6IvKN39BA")&&BEM.DOM.decl("select",{onSetMod:{opened:{yes:function(){
if(this.hasMod("disabled","yes"))return!1;this._drawPopup();var t=this.findElem(this._popup.domElem,"item","selected","yes");
this.elem("button").attr({"aria-activedescendant":t.attr("id"),"aria-expanded":!0})},"":function(){this.elem("button").attr("aria-expanded",!1).removeAttr("aria-activedescendant"),
this._getPopup().hide()}}},_getPopupContent:function(t){return{block:t,elem:"list"}},_getPopupMix:function(t){
return{block:t,elem:"popup",elemMods:{}}},_getPopup:function(){if(this._popup)return this._popup;var t=this,e=t.params,i=t.__self.getName(),n=this._getPopupContent(i),s=this._getPopupMix(i),o={
animate:"no"},r={directions:[{to:"bottom",axis:"left",offset:{top:8}},{to:"top",axis:"left",offset:{bottom:8
}}]};["size","layout","theme","width"].forEach(function(e){t.hasMod(e)&&(s.elemMods[e]=t.getMod(e))}),
$.extend(s.elemMods,e.elemPopupMods),$.extend(o,e.popupMods),$.extend(r,e.popupParams);var a=$(BEMHTML.apply({
block:"popup",mods:o,mix:s,js:r,content:{elem:"content",content:n}}));return(t._popup=t.findBlockOn(a,"popup")).on({
show:function(){t._curItemIndex=t._getSelectedIndex();var e=t._items.eq(t._curItemIndex);t.delMod(t._items,"selected").setMod(e,"hovered","yes").setMod(e,"selected","yes");
},"outside-click":function(e,i){t._isOutsideClicked(e,i)?e.preventDefault():t._blurButton()},hide:function(){
t.delMod("opened").delMod(t._items,"hovered").delMod(t.findElem(t._popup.domElem,"popup"),"scrollable");
}}).bindTo("mousedown",function(t){t.preventDefault()}),BEM.DOM.append(BEM.DOM.scope,t._popup.domElem),
t._redrawList(),t._outPopup=t.findBlockOutside("button","popup"),t._outPopup&&t._outPopup.on("outside-click",function(e,i){
t._popup.containsDomElem($(i.target))&&e.preventDefault()}),t._popup},_calcPopupDimensions:function(){
this._popupContent||(this._popupContent=this._getPopup().findBlockInside("popup").elem("content"));var t=parseInt(this.params.rows,10)||!1;
if(t&&this.findElem(this._popupContent,"item").size()>t){this._rowHeight=this._getRowHeight();var e=parseInt(this._getPopup().domElem.css("height"),10);
if(e>t*this._rowHeight)this._getPopup().setSize({height:t*this._rowHeight}),this.setMod(this.findElem(this._getPopup().domElem,"popup"),"scrollable","yes");else{
var i=t*this._rowHeight+"px";this._getPopup().domElem.css("height")!==i&&this._getPopup().setSize({height:i
})}}else this._getPopup().setSize({height:"auto"})},_drawPopup:function(){var t=this.findBlockInside("select"),e=this._getPopup();
e.show(t),this._calcPopupDimensions(),this._scrollToCurrent()},_scrollToCurrent:function(){if(this._popupContent&&!(this._curItemIndex<0)){
var t,e=this._items.eq(this._curItemIndex).get(0).offsetTop,i=this._popupContent,n=i.scrollTop(),s=e-n,o=2*this._rowHeight;
s>i.height()-o?t=e-o:n&&o>s&&(t=e-i.height()+o),t&&i.scrollTop(t)}}},{SHADOW_OFFSET:1}),_borschik("W6QASAOCSHZW3Okk9qH-qjOo-Kw")&&BEM.DOM.decl("serp-adv__banner",{
onSetMod:{js:function(){window.swfobject?this.initFlash():this.flashErrorCallback()}},initFlash:function(){
var t=this,e=t.params,i=window.swfobject;e.flashVersion&&!i.hasFlashPlayerVersion(e.flashVersion)?this.flashErrorCallback():i.embedSWF(e.flash,e.id,e.width,e.height,e.flashVersion,null,{
color:"0xFFFFFF"},{allowscriptaccess:"always",wmode:"transparent"},"",function(i){i.success?(new Image).src=e.counter:t.flashErrorCallback();
})},flashErrorCallback:function(){if(this.params.html.indexOf("bnFlash")<0)return this.domElem.html(this.params.html);
var t=/document.write\((.*?)\)/.exec(this.params.html)||"",e=t[1].split('"+"').join("").split('"').join(""),i=$(e).attr("src");
if(!i)return this.domElem.html("");var n=this,s=document.write,o="";document.write=function(){document.write=function(t){
o+=t},$.ajax({url:i,cache:!0,dataType:"script",success:function(){return document.write=s,n.domElem.html(o);
}})},this.domElem.append(this.params.html)}}),_borschik("0Q-NwBtpt_jslUMeCVz90t02dF0")&&BEM.DOM.decl("serp-adv__counter",{
CHECK_TIMEOUT:1e3,onSetMod:{js:function(){var t=this.elemParams(this.domElem);t.counterUrl&&(this.bindToWin("scroll",$.debounce(this._onScroll,100)),
setTimeout(this._onScroll.bind(this),0))}},_count:function(){var t=this.elemParams(this.domElem);this._createImage(t.counterUrl),
t.bsCounterUrl&&this._createImageWithFallback(t.bsCounterUrl,t.bsFallbackUrl)},_createImage:function(t){
var e=new Image;e.src=t},_createImageWithFallback:function(t,e){var i=new Image,n=function(){i.onload=i.onerror=i.onabort=null,
clearTimeout(o)},s=function(){$.ajax({url:e})},o=setTimeout(function(){n(),s()},this.CHECK_TIMEOUT);i.onload=function(){
n(),i.complete&&1===i.width||s()},i.onerror=i.onabort=function(){n(),s()},i.src=t},_onScroll:function(){
BEM.DOM.win.scrollTop()+BEM.DOM.win.height()>=this.domElem.offset().top&&(this.unbindFromWin("scroll"),
this._count())}}),_borschik("tsBRAilRAXihLlw4WnlNwHaR1dY")&&BEM.DOM.decl("serp-item",{onSetMod:{js:function(){
this.__base.apply(this,arguments),this._bindBackgroundEvents()}},_bindBackgroundEvents:function(){var t,e,i,n=5;
this.bindTo(this.domElem,"mouseup pointerup",function(s){t||Math.abs(s.pageX-e)>n||Math.abs(s.pageY-i)>n||"A"===s.target.tagName||$(s.target).parents(this.__self.active).length||this.trigger("backgroundClick");
}),this.bindTo(this.domElem,"mousedown pointdown",function(n){e=n.pageX,i=n.pageY,t=window.getSelection&&""!==window.getSelection().toString();
})}},{active:["a",".serp-url",".check-button",".serp-item__preview",".serp-item__right"].join(",")}),
_borschik("6WTkbO4f7zQqJZTBXg2jHkoTKOk")&&BEM.DOM.decl("serp-item",{onSetMod:{js:function(){this.__base.apply(this,arguments),
this.findBlocksOn("preview-btn","check-button").map(function(t){t.afterCurrentEvent(function(){t.on("change",this._onPreviewButtonStateChange,this);
},this),this._uncheckPreviewButton(t)},this)}},togglePreview:function(t){this._isActivePreview(t)?this.closePreview(t):this.openPreview(t);
},openPreview:function(t){this._isModernPreview(t)?this._modernPreviewOpen(t):this._legacyPreviewOpen(t),
this.trigger("previewShow",{name:t}),BEM.channel("serp-item").trigger("previewShow",{name:t})},closePreview:function(t){
this._isModernPreview(t)?this._modernPreviewClose(t):this._legacyPreviewClose(t),BEM.channel("serp-item").trigger("previewHide",{
name:t})},_onPreviewButtonStateChange:function(t){return this._skipToggle?void(this._skipToggle=!1):void this.togglePreview(this.getMod(t.block.domElem,"name"));
},_legacyPreviewOpen:function(t){this._legacyPreviewClose(this._legacyPreviewGetActivePreviewId()),this._legacyPreviewSetActivePreviewId(t),
this._checkPreviewButton(this._getCorrespondedButton(t)),this.setMod("expanded","yes"),this.setMod(this._legacyPreviewGet(t),"visibility","visible");
},_legacyPreviewClose:function(t){this._uncheckPreviewButton(this._getCorrespondedButton(t)),this._legacyPreviewSetActivePreviewId(null),
this.delMod("expanded"),this.delMod(this._legacyPreviewGet(t),"visibility"),this.trigger("previewHide",{
name:t})},_legacyPreviewSetActivePreviewId:function(t){this._legacyPreviewActiveId=t},_legacyPreviewGetActivePreviewId:function(){
return this._legacyPreviewActiveId},_legacyPreviewGet:function(t){return this.elem("preview","name",t);
},_legacyPreviewIsActive:function(t){return t===this._legacyPreviewGetActivePreviewId()},_uncheckPreviewButton:function(t){
t&&t.isChecked()&&(this._skipToggle=!0,t.toggle())},_checkPreviewButton:function(t){t&&!t.isChecked()&&(this._skipToggle=!0,
t.toggle())},_getCorrespondedButton:function(t){var e=this.elem("preview-btn","name",t);return this.findBlockOn(e,"check-button");
},_isActivePreview:function(t){return this._isModernPreview(t)?this._modernPreviewIsActive(t):this._legacyPreviewIsActive(t);
},_isModernPreview:function(t){return!this._legacyPreviewGet(t).length}}),_borschik("PWG2Xfn-guhVMdqoHBfEwWUOhMo")&&BEM.DOM.decl("serp-item",{
onSetMod:{js:function(){this.__base.apply(this,arguments),this._main=this.findBlockOutside("main")}},
_modernPreviewOnPreviewUpdate:function(t,e){!e.partial&&this._modernPreviewDeactivate()},_modernPreviewOpen:function(t){
this.channel("content-preview").trigger("update",this._modernPreviewGetParams(t)),this._modernPreviewActivate(t),
this._main.openPanel()},_modernPreviewClose:function(){this._main.closePanel()},_modernPreviewActivate:function(t){
var e=this._getCorrespondedButton(t);this._modernPreviewSetActivePreviewId(t),this._modernPrevieSetActiveButton(e),
this._modernPreviewBindDeactivationEvents(),this._modernPreviewSetVisualChanges(t),this._checkPreviewButton(e);
},_modernPreviewDeactivate:function(){var t=this._modernPreviewGetActiveButton();t&&t.findBlockOutside("serp-item")._uncheckPreviewButton(t),
this.trigger("previewHide",{name:this._modernPreviewGetActivePreviewId()}),this._modernPreviewSetActivePreviewId(null),
this._modernPrevieSetActiveButton(null),this._modernPreviewUnbindDeactivationEvents(),this._modernPreviewUnsetVisualChanges();
},_modernPreviewBindDeactivationEvents:function(){this._main.on("panelClosed",this._modernPreviewDeactivate,this),
this.channel("content-preview").on("before-update",this._modernPreviewOnPreviewUpdate,this)},_modernPreviewUnbindDeactivationEvents:function(){
this._main.un("panelClosed",this._modernPreviewDeactivate,this),this.channel("content-preview").un("before-update",this._modernPreviewOnPreviewUpdate,this);
},_modernPreviewGetActiveButton:function(){return this.__self.modernPreviewActiveButton},_modernPrevieSetActiveButton:function(t){
this.__self.modernPreviewActiveButton=t},_modernPreviewSetActivePreviewId:function(t){this._modernPreviewActiveId=t;
},_modernPreviewGetActivePreviewId:function(){return this._modernPreviewActiveId},_modernPreviewIsActive:function(t){
return t===this._modernPreviewActiveId},_modernPreviewGetParams:function(t){return this.params.preview&&$.extend({},this.params.preview[t],this.params.preview._extra);
},_modernPreviewSetVisualChanges:function(){},_modernPreviewUnsetVisualChanges:function(){}}),_borschik("v3bWLw140qWwSF2_YtsLl08VwVk")&&BEM.DOM.decl("checkbox",{
onSetMod:{js:function(){this.setMod("checked",this.elem("control").prop("checked")?"yes":""),this._isControlFocused()&&this.setMod("focused","yes");
},focused:{yes:function(){return this.isDisabled()?!1:(this._isControlFocused()||this.elem("control").focus(),
this.setMod(this.elem("box"),"focused","yes"),void this.afterCurrentEvent(function(){this.trigger("focus");
}))},"":function(){this._isControlFocused()&&this.elem("control").blur(),this.delMod(this.elem("box"),"focused"),
this.afterCurrentEvent(function(){this.trigger("blur")})}},checked:function(t,e){return this.isDisabled()?!1:(this.elem("control").prop("checked","yes"===e),
this.afterCurrentEvent(function(){this.trigger("change",{checked:"yes"===e})}),void this.setMod(this.elem("box"),"checked",e));
},disabled:function(t,e){this.elem("control").prop("disabled","yes"===e)}},isDisabled:function(){return this.hasMod("disabled","yes");
},isChecked:function(){return this.hasMod("checked","yes")},toggle:function(){this.toggleMod("checked","yes","");
},val:function(t){var e=this.elem("control");return"undefined"==typeof t?e.val():(e.val(t),this)},name:function(t){
var e=this.elem("control");return arguments.length?(e.attr("name",t),this):e.attr("name")},_onClick:function(t){
this.isDisabled()||this.setMod("focused","yes")},_onChange:function(t){t.target.checked?this.setMod("checked","yes"):this.delMod("checked");
},_onFocusInFocusOut:function(t){this.setMod("focused","focusin"===t.type?"yes":"")},_onMouseOverMouseOut:function(t){
this.isDisabled()||this.setMod("hovered","mouseover"===t.type?"yes":"")},_isControlFocused:function(){
try{return this.containsDomElem($(this.__self.doc[0].activeElement))}catch(t){return!1}}},{live:function(){
this.liveBindTo("leftclick tap",function(t){this._onClick(t)}).liveBindTo("control","change",function(t){
this._onChange(t)}).liveBindTo("control","focusin focusout",function(t){this._onFocusInFocusOut(t)}).liveBindTo("mouseover mouseout",function(t){
this._onMouseOverMouseOut(t)})}}),_borschik("K0xmG6P2qV5cl8otwx0__Uwdalk")&&BEM.DOM.decl({block:"check-button",
baseBlock:"checkbox"},{onSetMod:{js:function(){this.__base.apply(this,arguments),this.elem("control").attr({
role:"button","aria-labelledby":this.elem("text").attr("id"),"aria-pressed":this.hasMod("checked","yes")
}),this.bindTo("keyup",function(t){t.shiftKey||t.ctrlKey||t.altKey||13===t.which&&this.elem("control").click();
})},checked:function(t,e){if(this.__base.apply(this,arguments)===!1)return!1;var i="yes"===e;this.elem("control").attr("aria-pressed",i);
},pressed:function(t,e){return this.isDisabled()?!1:void 0}},_onMouseDown:function(){this.setMod("pressed","yes"),
this.bindToDoc("mouseup touchend",function(){this.delMod("pressed"),this.unbindFromDoc("mouseup touchend");
})}},{live:function(){var t=this.__base.apply(this,arguments);return this.liveBindTo("mousedown touchstart",function(t){
this._onMouseDown(t)}),t}}),_borschik("xDJt-A2d_6RJSVgdoQPqH07adZM")&&BEM.DOM.decl("check-button",{onSetMod:{
js:function(){this.__base.apply(this,arguments),this.bindTo("click",this.onClick.bind(this))}},onClick:function(){
if(this.params.counter){var t=this.isDisabled()?this.isChecked():!this.isChecked(),e=t?"checked":"unchecked";
BEM.blocks.counter.log(this.params.counter,{state:e})}}}),_borschik("cLru_eU4tDAzpHWDpX3clwC3ZNs")&&BEM.DOM.decl("check-button",{
onSetMod:{js:function(){this.__base.apply(this,arguments),this.elem("control").attr("role","checkbox");
}}}),_borschik("R75NJqJ-IMQXSbuEjqZwX4W7hzE")&&BEM.DOM.decl("click",{onSetMod:{js:function(){this.action=this.params.action,
this.bindTo("click",this.onClick.bind(this))}},onClick:function(){this.action&&this.executeAction()},
executeAction:function(){var t=BEM.create(this.action.action+"-action",this.action.arguments);t.execute();
}}),_borschik("8hsbMRHdvpK6VVysY63OMtmrZcc")&&BEM.DOM.decl("enframed",{show:function(){var t=this.params;
BEM.DOM.getBlockByUniqId("construct-frame").show({src:t.src,counters:t.counters,width:t.width,height:t.height,
isFixedSize:t.isFixedSize})}},{live:function(){this.liveBindTo("leftclick tap",function(t){this.show(),
t.preventDefault(),t.handled=!0})}}),_borschik("N3LxOiUFQ0k2Jq3a5Um0-AsbZvI")&&BEM.DOM.decl("frame",{
onSetMod:{js:function(){this._getPopup().on({show:this._onShow,hide:this._onHide},this),this.bindTo(this.elem("close"),"click",this._onCloseClick,this);
}},destruct:function(){this.__base.apply(this,arguments),this._getPopup().un({show:this._onShow,hide:this._onHide
},this)},_getPopup:function(){return this._popup||(this._popup=this.findBlockOn(this.domElem,"popup")),
this._popup},_resizeContent:function(){var t=this.elem("iframe"),e=t.outerWidth(!0)-t.width(),i=t.outerHeight(!0)-t.height(),n=BEM.DOM.win;
this._proportionalResize(Math.min((n.height()-i)/this._frameHeight,(n.width()-e)/this._frameWidth,1)),
this._getPopup().repaint()},_proportionalResize:function(t){this.elem("iframe").attr({height:this._frameHeight*t,
width:this._frameWidth*t})},_count:function(t){var e=this._counters&&this._counters[t];e&&w(this,e[0],e[1]);
},_onShow:function(){this._count("show"),this.channel("header").trigger("hideRightSide")},_onHide:function(){
this._count("hide"),this._isFixedSize||this.unbindFromWin("resize.frame"),this.channel("header").trigger("showRightSide"),
this.afterCurrentEvent(function(){this.elem("iframe").attr({src:"about:blank"})})},_onCloseClick:function(){
this._getPopup().hide()},_onResize:function(){this._resizeContent()},show:function(t){this._frameWidth=t.width,
this._frameHeight=t.height,this._counters=t.counters,this._isFixedSize=t.isFixedSize,this.elem("iframe").attr({
frameborder:0,height:t.height,width:t.width}),this._getPopup().toggle(),this._getPopup().setMod("adaptive","yes"),
this._isFixedSize||(this._resizeContent(),this.bindToWin("resize.frame",$.throttle(this._onResize,50),this)),
this.elem("iframe").attr("src",t.src)}}),_borschik("37dEdB3GojphoYvNWueCUY7jf2o")&&BEM.DOM.decl("popup",{
onSetMod:{js:function(){this.__base(),this._tailPos={}}},_calcTailPos:function(t){var e=t.to,i=this._positions[t.key],n=t.tail.axis,s={};
return"top"===e||"bottom"===e?s.left=this._calcTailLeft(n,i):("left"===e||"right"===e)&&(s.top=this._calcTailTop(n,i)),
s},_calcTailTop:function(t,e){var i=0,n=this.getOwnerSize(),s=this.getOwnerPos(),o=this.params.tail.width,r=this.getPopupSize(),a=r.height,c=s.top-e.top,h=e.top+r.height-(s.top+n.height);
return c>0&&(i+=c,a-=c),h>0&&(a-=h),"middle"===t?(a-=o,i+=a/2):"bottom"===t&&(a-=o,i+=a),0>i&&(i=0),i;
},_calcTailLeft:function(t,e){var i=0,n=this.getOwnerSize(),s=this.getOwnerPos(),o=this.params.tail.width,r=this.getPopupSize(),a=s.left-e.left,c=r.width,h=e.left+r.width-(s.left+n.width);
return a>0&&(i+=a,c-=a),h>0&&(c-=h),"center"===t?(c-=o,i+=c/2):"right"===t&&(c-=o,i+=c),i},_calcOffsetByTail:function(t){
var e=this.params.tail,i=e.height,n={};switch(t.to){case"top":n={top:-i};break;case"bottom":n={top:i};
break;case"right":n={left:i};break;case"left":n={left:-i}}return n},_calcTailOffset:function(t){var e={},i=t.to,n=t.tail,s=n.offset,o=n.axis;
return s?("top"===i||"bottom"===i?(e.left=0,"left"===o?e.left+=s.left:"center"===o?(s.left&&(e.left+=s.left),
s.right&&(e.left-=s.right)):"right"===o&&(e.left-=s.right)):("left"===i||"right"===i)&&(e.top=0,"top"===o?e.top+=s.top:"middle"===o?(s.top&&(e.top+=s.top),
s.bottom&&(e.top-=s.bottom)):"bottom"===o&&(e.top-=s.bottom)),e):!1},_resetTailPos:function(t){return t?this._tailPos[t]=null:this._tailPos={},
this},_pushTailPos:function(t,e){return this._pushPosTo(this._tailPos,t,e),this}}),_borschik("b0wszeqPOWXhMEBIhT4Y1VAYpEE")&&BEM.DOM.decl({
block:"popup",modName:"position",modVal:"fixed"},{addChild:function(t){this.__base.apply(this,arguments),
t.setMod("watch-scroll","no")},_onFirstFocusableKeyDown:function(t){t.ctrlKey||t.altKey||t.metaKey||t.shiftKey&&9===t.which&&(t.preventDefault(),
this._lastFocusable.focus())},_onLastFocusableKeyDown:function(t){t.shiftKey||t.ctrlKey||t.altKey||t.metaKey||9===t.which&&(t.preventDefault(),
this._firstFocusable.focus())}}),_borschik("sfH9C4IGy1ip9PvIpfb14fsz6M8")&&BEM.DOM.decl({block:"popup",
modName:"position",modVal:"fixed"},{getOwnerPos:function(){var t=this.__base.apply(this,arguments);if(this._owner){
var e=this._viewport;t.top-=e.scrollTop(),t.left-=e.scrollLeft()}return t}}),_borschik("PBOC9zww9HpldTT7vKqRunAciCo")&&BEM.DOM.decl({
block:"popup",modName:"type",modVal:"modal"},{getDefaultParams:function(){var t=this.__base();return t.top="50%",
t.left="50%",t},_isPercentVal:function(t){return"string"==typeof t&&t.indexOf("%")>0},show:function(t){
return this._moveToContainer(),this.setMod("visibility","outside").setMod("adaptive","no"),this.repaint(t),
this},repaint:function(t){this._moveToContainer(),t||(t={left:this.params.left,top:this.params.top});var e=this.getPopupSize();
return this._isPercentVal(t.left)&&!t.marginLeft&&(t.marginLeft=e.width/(-100/parseInt(t.left,10))),this._isPercentVal(t.top)&&!t.marginTop&&(t.marginTop=e.height/(-100/parseInt(t.top,10))),
this._show(t),this}}),_borschik("PfHRek1FuKwWIOwzx2E-N9VF_OY")&&!function(){var t={};BEM.DOM.decl({block:"popup",
modName:"body-scroll",modVal:"no"},{onSetMod:{visibility:function(){return this.afterCurrentEvent(function(){
this.domElem&&this.hasMod("visibility","visible")?t[this.params.uniqId]=!0:delete t[this.params.uniqId],
this._manageScopeOverflow()}),this.__base()}},destruct:function(){var e=this.params.uniqId;t[e]&&(delete t[e],
this._manageScopeOverflow()),this.__base.apply(this,arguments)},_enableScroll:function(){return this._scope.css({
overflow:""}),this},_disableScroll:function(){return this._scope.css({overflow:"hidden"}),this},_manageScopeOverflow:function(){
var e=Object.keys(t).length;0===e?this._enableScroll():1===e&&this._disableScroll()}})}(),_borschik("V64MswGvSmrsN1pU7KxScB4lmwk")&&BEM.DOM.decl("windowed",{
_window:null,open:function(){var t=this.params;t.left=Math.round(window.screenX+(window.outerWidth-t.width)/2),
t.top=Math.round(window.screenY+(window.outerHeight-t.height)/2),t.location="yes",t.resizable="yes";var e=["top","left","width","height","menubar","toolbar","location","status","resizable","scrollbars"].map(function(e){
return e+"="+(t[e]||"no")}).join(",");this._window=window.open(t.src,t.name||this.__self.defaultWindowName,e),
this._window.focus();var i=t.counters&&t.counters.show;i&&w(this,i[0],i[1])},getWindow:function(){return this._window;
}},{live:function(){this.defaultWindowName="windowed_"+(new Date).getTime(),this.liveBindTo("leftclick tap",function(t){
t.preventDefault(),this.open()})}}),_borschik("h0VPx3Sefy0aIDdKQRU82vl7Emw")&&BEM.DOM.decl("ajax",{go:function(){
var t=this.domElem.prop("href");t&&BEM.blocks["serp-request"].navigateTo(t)}},{live:function(){this.liveBindTo("leftclick tap",function(t){
t.preventDefault(),t.handled=!0,this.go()})}}),_borschik("S3rZ8rL-AZC-xAiQj7VGj3GJ_xM")&&BEM.DOM.decl("serp-item",{
onSetMod:{js:function(){this.__base.apply(this,arguments);var t=this.findBlockOn(this.elem("preview-btn","name","common"),"check-button");
this.bindTo(this.elem("text-link"),"click",function(e){return"A"===e.target.nodeName.toUpperCase()||$(e.target).parents("a, .serp-item__preview-btn").length?void 0:(t.toggle(),
!1)})}}}),_borschik("D64lMxmb6HLnwq4IljoJI7m33Gw")&&BEM.DOM.decl({name:"serp-item",modName:"nahodki",
modVal:"yes"},{onSetMod:{js:function(){this.nahodkiUrl=this.elem("title-link").attr("href"),this.__base();
}},nahodkiSave:function(){$.post(this.params.storeHandler,this.nahodkiGatherParams())},nahodkiGatherParams:function(){
return{header:this.elem("title-link").html(),url:this.nahodkiUrl,request:BEM.blocks["i-global"].param("query"),
request_time:this.params.nahodkiTime,yandexuid:BEM.blocks["i-global"].param("yandexuid"),ajax:1,snippet:this.nahodkiGatherText(),
exsnp_img:this.nahodkiGatherImg()}},nahodkiGatherText:function(){var t=this.elem("text").toArray().map(function(t){
return $(t).html()}).join("<br/>");return"<p>"+t+"</p>"},nahodkiGatherImg:function(){if(this.elem("nahodki-thumb").length){
var t=this.elemParams("nahodki-thumb").url;return BEM.blocks.uri.parse(t).protocol("http").toString();
}}},{live:function(){return this.__base(),this.liveBindTo("title-link nahodki-link","click",function(){
this.nahodkiSave()}),!1}}),_borschik("N5UGACDjS9v3SSK98fmA3cOqPSs")&&BEM.DOM.decl({block:"serp-url",modName:"fake",
modVal:"yes"},{},{live:function(){this.liveBindTo("link","mousedown",function(t){if(this.hasMod("fake","yes")){
var e=this.findBlockOutside("serp-item"),i=e.findElem("title-link"),n=i.attr("onmousedown"),s=new Function(n).bind(t.data.domElem[0]);
n&&s()}})}}),_borschik("VdHXDcEoq1dXTDr2maLYTmBt6g8")&&BEM.DOM.decl("serp-url",{_showPopup:function(t){
this._popup=this._popup||this.findBlockInside("popup2").setAnchor(t.data.domElem),this._popup&&this._popup.toggleMod("visible","yes");
}},{live:function(){this.__base.apply(this,arguments),this.liveBindTo("arrow","click",function(t){this._showPopup(t);
})}}),_borschik("sw5VXJQhbIzG-HgymyBE-aupFhY")&&BEM.DOM.decl({block:"popup2",modName:"target"},{onSetMod:{
js:{inited:function(){var t=this.__self.AVAILABLE_DIRECTIONS;this.params.directions.forEach(function(e){
if(-1===t.indexOf(e))throw new Error("Can't init popup with \""+e+'" direction. Available directions: '+t.join(", "));
}),this.__base.apply(this,arguments),this._lastDrawingCss={left:void 0,top:void 0,zIndex:void 0,display:void 0
}}},visible:{yes:function(){this.__base.apply(this,arguments),this.bindToWin("scroll resize",this._onWinScollAndResize).setMod("outside","yes").redraw().delMod("outside");
},"":function(){this.__base.apply(this,arguments),this.unbindFromWin("scroll resize")}}},setContent:function(){
return this.__base.apply(this,arguments).redraw()},redraw:function(){if(!this.hasMod("visible","yes")&&!this.hasMod("outside","yes"))return this;
var t=this._calcBestDrawingParams();this.setMod("direction",t.direction);var e=this._lastDrawingCss,i=!1;
return $.each(this._calcDrawingCss(t),function(t,n){e[t]!==n&&(e[t]=n,i=!0)}),i&&this.domElem.css(e),
this},_calcDrawingCss:function(t){return{left:t.left,top:t.top}},calcPossibleDrawingParams:function(){
var t=this._calcTargetDimensions(),e=this._calcViewportDimensions(),i=this.params,n=i.mainOffset,s=i.secondaryOffset,o=i.viewportOffset;
return this.params.directions.map(function(i){var r={direction:i,width:0,height:0,left:0,top:0};return this._checkMainDirection(i,"bottom")?(r.top=t.top+t.height+n,
r.height=e.bottom-r.top-o):this._checkMainDirection(i,"top")?(r.height=t.top-e.top-n-o,r.top=t.top-r.height-n):(this._checkSecondaryDirection(i,"center")?(r.height=e.bottom-e.top-2*o,
r.top=t.top+(t.height-r.height)/2):this._checkSecondaryDirection(i,"bottom")?(r.height=t.top+t.height-e.top-s-o,
r.top=t.top+t.height-r.height-s):this._checkSecondaryDirection(i,"top")&&(r.top=t.top+s,r.height=e.bottom-r.top-o),
this._checkMainDirection(i,"left")?(r.width=t.left-e.left-n-o,r.left=t.left-r.width-n):(r.left=t.left+t.width+n,
r.width=e.right-r.left-o)),this._checkSecondaryDirection(i,"right")?(r.width=t.left+t.width-e.left-s-o,
r.left=t.left+t.width-r.width-s):this._checkSecondaryDirection(i,"left")?(r.left=t.left+s,r.width=e.right-r.left-o):this._checkSecondaryDirection(i,"center")&&this._checkMainDirection(i,"top","bottom")&&(r.width=e.right-e.left-2*o,
r.left=t.left+t.width/2-r.width/2),r},this)},_calcBestDrawingParams:function(){for(var t,e,i,n,s,o,r=this._calcPopupDimensions(),a=this._calcTargetDimensions(),c=this._calcViewportDimensions(),h=this.params.directions,u=h.length,l=0;u>l&&(t=h[l],
e=this._calcPos(t,a,r),i=this._calcViewportFactor(e,c,r),(0===l||i>o||!o&&this.hasMod("direction",t))&&(n=t,
o=i,s=e),!(o>this.__self.VIEWPORT_ACCURACY_FACTOR));l++);return{direction:n,left:s.left,top:s.top}},_calcPopupDimensions:function(){
var t=this.domElem.outerWidth(),e=this.domElem.outerHeight();return{width:t,height:e,area:t*e}},_calcTargetDimensions:function(){},
_calcViewportDimensions:function(){var t=BEM.DOM.win,e=t.scrollTop(),i=t.scrollLeft(),n=t.width(),s=t.height();
return{top:e,left:i,bottom:e+s,right:i+n}},_calcPos:function(t,e,i){var n={},s=this.params.mainOffset,o=this.params.secondaryOffset;
return this._checkMainDirection(t,"bottom")?n.top=e.top+e.height+s:this._checkMainDirection(t,"top")?n.top=e.top-i.height-s:this._checkMainDirection(t,"left")?n.left=e.left-i.width-s:this._checkMainDirection(t,"right")&&(n.left=e.left+e.width+s),
this._checkSecondaryDirection(t,"right")?n.left=e.left+e.width-i.width-o:this._checkSecondaryDirection(t,"left")?n.left=e.left+o:this._checkSecondaryDirection(t,"bottom")?n.top=e.top+e.height-i.height-o:this._checkSecondaryDirection(t,"top")?n.top=e.top+o:this._checkSecondaryDirection(t,"center")&&(this._checkMainDirection(t,"top","bottom")?n.left=e.left+e.width/2-i.width/2:this._checkMainDirection(t,"left","right")&&(n.top=e.top+e.height/2-i.height/2)),
n},_calcViewportFactor:function(t,e,i){var n=this.params.viewportOffset,s=Math.max(t.left,e.left+n),o=Math.min(t.left+i.width,e.right-n),r=Math.max(t.top,e.top+n),a=Math.min(t.top+i.height,e.bottom-n);
return o>s&&a>r?(o-s)*(a-r)/i.area:0},_checkMainDirection:function(t,e,i){return 0===t.indexOf(e)||i&&0===t.indexOf(i);
},_checkSecondaryDirection:function(t,e){return t.indexOf("-"+e)>0},_checkDirection:function(t,e){return t.indexOf(e)>=0;
},_onWinScollAndResize:function(t){this.redraw()},getDefaultParams:function(){return $.extend(this.__base.apply(this,arguments),{
mainOffset:0,secondaryOffset:0,viewportOffset:0,directions:this.__self.AVAILABLE_DIRECTIONS})}},{VIEWPORT_ACCURACY_FACTOR:.99,
AVAILABLE_DIRECTIONS:["bottom-left","bottom-center","bottom-right","top-left","top-center","top-right","right-top","right-center","right-bottom","left-top","left-center","left-bottom"]
}),_borschik("poT4Nm4aEIHQT3PehyQC0SvIi44")&&!function(t){function e(t,e){return t.addClass("i-bem "+e).bem(e);
}BEM.DOM.decl({block:"popup2",modName:"target",modVal:"anchor"},{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),
this._anchor=null,this._anchorParents=null,this._destructor=null,this._isAnchorVisible=void 0,this._updateIsAnchorVisible=t.throttle(this._updateIsAnchorVisible,this.__self.UPDATE_TARGET_VISIBILITY_THROTTLING_INTERVAL,this);
}},visible:{yes:function(){if(!this._anchor)throw new Error("Can't show popup without anchor");this._anchorParents=this._anchor.parents(),
this._bindToAnchorParents(),this.__base.apply(this,arguments)},"":function(){this.__base.apply(this,arguments),
this._unbindFromAnchorParents(),this._anchorParents=null,this._isAnchorVisible=void 0}}},destruct:function(){
this._unbindFromDestructor(),this.__base.apply(this,arguments)},setAnchor:function(t){return this._unbindFromAnchorParents()._unbindFromParentPopup()._unbindFromDestructor(),
this._anchor=t instanceof BEM.DOM?t.domElem:t,this._destructor=e(this._anchor,"_"+this.__self.getName()+"-destructor"),
this._isAnchorVisible=void 0,this._bindToDestructor(),this.hasMod("visible","yes")?(this._anchorParents=this._anchor.parents(),
this._recaptureZIndex()._bindToAnchorParents()._bindToParentPopup().redraw()):(this._anchorParents=null,
this._zIndexGroupLevel=null),this},_calcTargetDimensions:function(){var t=this._anchor,e=this._getOffsetOf(t);
return{left:e.left,top:e.top,width:t.outerWidth(),height:t.outerHeight()}},_getOffsetOf:function(t){var e=t.offset();
return"pageYOffset"in window&&(e.top-=window.pageYOffset-(document.documentElement.scrollTop||document.body.scrollTop),
e.left-=window.pageXOffset-(document.documentElement.scrollLeft||document.body.scrollLeft)),e},_calcDrawingCss:function(e){
return"undefined"==typeof this._isAnchorVisible&&(this._isAnchorVisible=this._calcIsAnchorVisible()),
t.extend(this.__base(e),{display:this._isAnchorVisible?"":"none"})},_calcIsAnchorVisible:function(){var e=this._anchor,i=this._getOffsetOf(e),n=i.left,s=i.top,o=n+e.outerWidth(),r=s+e.outerHeight(),a=this.getMod("direction"),c=Math.floor(this._checkDirection(a,"top")?s:r),h=Math.floor(this._checkDirection(a,"left")?n:o),u=!0;
return this._anchorParents.each(function(e,i){if("BODY"===i.tagName)return!1;i=t(i);var n=/scroll|hidden|auto/,s=n.test(i.css("overflow-y")),o=n.test(i.css("overflow-x"));
if(s||o){var r=this._getOffsetOf(i);if(s){var a=Math.floor(r.top);if(a>c||a+i.outerHeight()<c)return u=!1;
}if(o){var l=Math.floor(r.left);return u=h>=l&&l+i.outerWidth()>=h}}}.bind(this)),u},_calcZIndexGroupLevel:function(){
var t=this.__base.apply(this,arguments);return this._destructor.findBlocksOutside("z-index-group").reduce(function(t,e){
return t+Number(e.getMod("level"))},t)},_bindToAnchorParents:function(){return this.bindTo(this._anchorParents,"scroll",this._onAnchorParentsScroll);
},_unbindFromAnchorParents:function(){return this._anchorParents&&this.unbindFrom(this._anchorParents,"scroll"),
this},_onAnchorParentsScroll:function(){this.redraw()._updateIsAnchorVisible()},_onWinScollAndResize:function(){
this.__base.apply(this,arguments),this._updateIsAnchorVisible()},_updateIsAnchorVisible:function(){if(this.domElem&&this.hasMod("visible")){
var t=this._calcIsAnchorVisible();t!==this._isAnchorVisible&&(this._isAnchorVisible=t,this.redraw())}
},_bindToDestructor:function(){return this._destructor.on("destruct",this._onPopupAnchorDestruct,this),
this},_unbindFromDestructor:function(){return this._destructor&&this._destructor.un("destruct",this._onPopupAnchorDestruct,this),
this},_onPopupAnchorDestruct:function(){this.domElem&&BEM.DOM.destruct(this.domElem)},_getParentPopup:function(){
return void 0===this._parentPopup&&(this._parentPopup=this.findBlockOutside(this._anchor,this.__self.getName())),
this._parentPopup}},{UPDATE_TARGET_VISIBILITY_THROTTLING_INTERVAL:100});var i=BEM.DOM;i.decl("_popup2-destructor",{
destruct:function(){this.trigger("destruct"),this.__base.apply(this,arguments)}})}(jQuery),_borschik("66Bqj-db9XAgbC3_7zhVuK5ogmw")&&BEM.DOM.decl({
block:"popup2",modName:"target",modVal:"anchor"},{show:function(t){return t=t instanceof BEM.DOM?t.domElem:t,
t.is(this._anchor)||this.setAnchor(t),this.__base.apply(this,arguments)}}),_borschik("lC19WdNcnXtPPTfXKAydkplb19M")&&BEM.DOM.decl({
block:"popup2",modName:"theme",modVal:"normal"},{getDefaultParams:function(){return $.extend(this.__base(),{
mainOffset:5,viewportOffset:5})}}),_borschik("xR4JSEIr5Evir8UVrvAlGkBhyL4")&&BEM.DOM.decl("feedback",{
externalData:{},onSetMod:{js:function(){this.checkboxes=this.findBlocksInside("checkbox"),this.submit=this.findBlockInside({
block:"button",modName:"type",modVal:"submit"}).on("click",this.submitFeedback,this),this.popup=this.findBlockOn("popup").on("show",this.onShowPopup,this).on("hide",this.onHidePopup,this),
this.findBlockInside({block:"button",modName:"type",modVal:"close"}).on("click",function(){this.popup.hide();
},this),this.setCheckboxEvent(),this._ajax=BEM.create("i-request_type_ajax",{cache:!1,callbackCtx:this,
dataType:"script",type:"POST"}),this.channel("feedback").on("show",this.showFeedback,this),this.popup.findBlockInside("radiobox").on("change",this.radioboxChanged,this);
}},radioboxChanged:function(){"yes"===this.popup.findBlockInside("radiobox").val()?this.removeSerpItemBorder():this.setSerpItemBorder();
},showFeedback:function(t,e){this.externalData=e,this.setMod("type",e.modType),this.resetPopup(),this.popup.show();
},resetPopup:function(){Object.keys(this.getMods()).forEach(function(t){/^hide-/.test(t)&&this.delMod(t);
},this),Array.isArray(this.externalData.hide)&&this.externalData.hide.forEach(function(t){this.setMod("hide-"+t,"yes");
},this),this.checkboxes.forEach(function(t){t.delMod("checked")}),this.popup.findBlockInside("radiobox").val("no"),
this.delMod("thanks"),this.popup.findElem("result").hide(),this.popup.findElem("complaint").show()},setCheckboxEvent:function(){
this.checkboxes.forEach(function(t){t.on("change",this.checkboxChanged,this)},this)},checkboxChanged:function(){
this.submit.toggleMod("disabled","no","yes",this.hasCheckedItems())},hasCheckedItems:function(){return this.checkboxes.filter(function(t){
return t.isChecked()}).length>0},submitFeedback:function(){var t=this;this._ajax.params.url=this.externalData.abuseLink,
this._ajax.get(this.getLogParams(),this.onSuccess,this.onError),setTimeout(function(){t.setMod("thanks","true"),
t.popup.findElem("result").show(),t.popup.findElem("complaint").hide()},200)},defaultParams:function(){
var t=this.popup.findBlocksInside("checkbox").filter(function(t){return t.isChecked()}).map(function(t){
return t.val()}).toString(),e=this.popup.findBlockInside("radiobox").val(),i=this.params&&this.params.request,n={
"complaint-query":e,"reason-complaint":t};return i&&$.extend(n,i),n},onError:function(t){w(null,this.params.counter,"-code="+t.status);
},onSuccess:function(){},onShowPopup:function(){this.setSerpItemBorder()},onHidePopup:function(){var t=this.popup;
t.setMod("modal","hide"),setTimeout(function(){t.delMod("visibility"),t.delMod("modal")},150),this.removeSerpItemBorder();
},setSerpItemBorder:function(){"default"===this.externalData.modType&&this.externalData.serpItem&&this.externalData.serpItem.setMod("feedback","yes");
},removeSerpItemBorder:function(){this.externalData.serpItem&&this.externalData.serpItem.delMod("feedback");
},getComplaintLinks:function(t,e){var i="images"===e?t.findBlockInside("z-images").elem("link-outer"):t.findBlockInside("z-video").elem("link-outer");
return $.map(i,function(t){return $(t).attr("href")}).join(";")},getLogParams:function(){var t,e=BEM.blocks["i-global"],i={
query:e.param("query"),service:"yandex."+e.param("tld"),reqid:this.externalData.reqid},n=this.externalData.serpItem,s=this.externalData.complaintItem,o=this.externalData.modType,r=$(".serp-item__title a").map(function(t,e){
return $(e).attr("href")});return i["shows-urls"]=r.toArray().join(";"),"images"===o||"video"===o?(t=s.closest(".serp-block").bem("serp-block"),
i["url-complaint"]=this.getComplaintLinks(t,o)||t.findBlockInside("serp-item").elem("title-link").attr("href"),
i.type="w_"+o):n&&(i["url-complaint"]=n.findElem("title-link").attr("href"),i.type="snippet"),$.extend(i,this.defaultParams()),
i}}),_borschik("KTnKVBZwDON0CvnyTwB1m-9Zvoc")&&BEM.DOM.decl({block:"popup",modName:"wrapped",modVal:"yes"
},{onSetMod:{visibility:{visible:function(){this.__base(),this._wrap()},"":function(){this.__base(),this._unwrap();
}},wrapped:{"":function(){this._unwrap()}}},_wrap:function(){this._wrapper||(this._wrapper=this.elem("wrapper").detach()),
this._wrapper&&this.domElem.wrap(this._wrapper)},_unwrap:function(){this._wrapper&&this.domElem.unwrap();
},destruct:function(){this._unwrap(),this.__base()}}),_borschik("ZoSfwPi7z4_8rql8ue24gr0ly-I")&&BEM.DOM.decl({
block:"popup",modName:"behaviour",modVal:"scrollable"},{getDefaultParams:function(){var t=this.__base();
return t.top=20,t}}),_borschik("KaZ_1nWe1TXdQAC0hOFgJr8OeBA")&&BEM.DOM.decl("radiobox",{onSetMod:{js:function(){
var t=this;t._val=t.findElem(t.elem("radio","checked","yes"),"control").val(),t.elem("control").each(function(e,i){
var n=[];if(t._isControlFocused($(i))&&n.push("focused"),i.checked&&n.push("checked"),n[0]){var s=t.__self._getRadioByElem($(i));
n.forEach(function(e){t.setMod(s,e,"yes")})}})},disabled:{yes:function(){this.setMod(this.elem("radio"),"disabled","yes");
},"":function(){this.delMod(this.elem("radio"),"disabled")}}},onElemSetMod:{radio:{focused:{yes:function(t){
this.delMod(this.elem("radio","focused","yes"),"focused");var e=this.findElem(t,"control");this._isControlFocused(e)||e.focus(),
this.afterCurrentEvent(function(){this.trigger("focus",{current:t})})},"":function(t){this.afterCurrentEvent(function(){
this.trigger("blur",{prev:t})})}},checked:{yes:function(t){this._val=this.findElem(t,"control").prop("checked",!0).val();
var e=this.elem("radio","checked","yes");this.delMod(e,"checked"),this.trigger("change",{current:t,prev:e
})}},hovered:function(t){return!this.isDisabled(t)},disabled:function(t,e,i){t.find(this.buildSelector("control")).prop("disabled","yes"===i);
}}},_isControlFocused:function(t){try{return t[0]===this.__self.doc[0].activeElement}catch(e){return!1;
}},isDisabled:function(t){return this.hasMod(t,"disabled","yes")},val:function(t){if("undefined"==typeof t)return this._val;
var e=this;return this.elem("control").each(function(i,n){return n.value===t?(e.setMod(e.__self._getRadioByElem($(n)),"checked","yes"),
!1):void 0}),e},name:function(t){var e=this.elem("control");return arguments.length?(e.attr("name",t),
this):e.attr("name")},getCurrent:function(){return this.findElem("radio","checked","yes")},uncheckAll:function(){
var t=this.elem("radio","checked","yes");return this.delMod(t,"checked").findElem(t,"control").prop("checked",!1),
this._val=void 0,this.trigger("change",{current:void 0,prev:t}),this},_onLeftClick:function(t){this.isDisabled(t.data.domElem)||this.setMod(t.data.domElem,"focused","yes");
},_onChange:function(t){this.setMod(this.__self._getRadioByElem(t.data.domElem),"checked","yes")}},{live:function(){
this.liveBindTo("radio","leftclick tap",function(t){this._onLeftClick(t)}).liveBindTo("control","change",function(t){
this._onChange(t)}).liveBindTo("radio","mouseover mouseout",function(t){this.setMod(t.data.domElem,"hovered","mouseover"===t.type?"yes":"");
}).liveBindTo("control","focusin focusout",function(t){this.setMod(this.__self._getRadioByElem(t.data.domElem),"focused","focusin"===t.type?"yes":"");
})},_getRadioByElem:function(t){return t.closest(this.buildSelector("radio"))}}),_borschik("rZ3U7KvFxHpWtK0c-en7cbw47f0")&&BEM.DOM.decl("radiobox",{
name:function(t){var e=this.elem("control");return"undefined"==typeof t?e.attr("name"):(e.each(function(e,i){
i.name=t}),this)}}),_borschik("pQHv5-NORKIf9_kHTgq6T8E-rLc")&&BEM.DOM.decl("radiobox",{getCurrent:function(){
return this.findElem("radio","checked","yes")}}),_borschik("VFTg5NaGZM4xnK092HxFrx1LQIc")&&BEM.DOM.decl("show-feedback",{
onSetMod:{js:function(){var t=this.findBlockOutside("popup2"),e=this.findElem("icon").length>0?this.findElem("icon"):this.domElem;
this.page=this.findBlockOutside("b-page"),this.paranja=this.page.findBlockInside("paranja"),this.serpItem=this.findBlockOutside("serp-item"),
this.bindTo(e,"click",function(e){return t&&t.delMod("visible"),this.page.findBlockInside("feedback")?this.callFeedback(this,$(e.target)):(this.showParanja(),
this.channel("serp-request").trigger("request",{key:"feedback",params:{text:BEM.blocks["i-global"].param("query")
},success:this.loadFeedback.bind(this,$(e.target)),error:this.hideParanja.bind(this)})),!1},this)}},loadFeedback:function(t,e){
BEM.DOM.init($(e.html)).appendTo(this.page.domElem).bem("feedback"),this.callFeedback(this,t)},callFeedback:function(t,e){
var i={serpItem:this.serpItem,complaintItem:e,modType:this.getMod("type")||"default",hide:this.params.hide,
abuseLink:this.params.abuseLink,reqid:this.params.reqid};return this.hideParanja(),this.channel("feedback").trigger("show",i),
!1},showParanja:function(){this.paranja.findBlockOn("z-index-group").setMod("level","10"),this.paranja.open();
},hideParanja:function(){this.paranja.close(),this.paranja.findBlockOn("z-index-group").delMod("level");
}}),_borschik("oXVrK5ENYQHBlbq_fpnf_Xdli8s")&&BEM.decl("app-location",{},{change:function(t,e){if(BEM.blocks["i-global"].param("isSearchAndroidApp")){
var i=this._changeAppLocationFallback.bind(this,t),n=Ya&&Ya.AppsApi;n.whenAvailable("ajax",function(n){
n?("reload"===e&&(t=document.location.href),n.changeLocation(t)):i()}),n.whenUnavailable(i)}else 0===arguments.length?e="reload":1===arguments.length?e="assign":"reload"===e&&(t=void 0),
window.location[e](t)},_changeAppLocationFallback:function(t){var e=BEM.blocks.uri.parse(t||window.location.href);
e.path("/touchsearch").deleteParam("scr_w").deleteParam("scr_h").deleteParam("did").deleteParam("scalefactor").deleteParam("app_id").deleteParam("app_platform").deleteParam("app_version").deleteParam("app_version_name").deleteParam("app_build_number").deleteParam("lang").deleteParam("uuid").deleteParam("manufacturer").deleteParam("os_version").deleteParam("search_token").deleteParam("query_source").deleteParam("ver").deleteParam("model"),
window.open(e.build())}}),_borschik("IExWnXvTUQzU5X1Zw3Wd2yktcvs")&&BEM.decl("serp-request",{onSetMod:{
js:function(){if(this.__self._lockInstance)throw Error("serp-request: multiple initialization");this._requestData={},
this._prefetchList=[],this._prefetchInQuery={},this._location=BEM.blocks.location.getInstance(),this._ajax=this._createAjax(),
this._channel=BEM.channel("serp-request"),this._doRequest=$.debounce(this._doRequest,this.__self.DEBOUNCE_TIME,this),
this._onRequest=this._onRequest.bind(this),this._channel.on("request",this._onRequest),this.ajaxParameters={};
}},destruct:function(){this._channel.un("request",this._onRequest),this.__base.apply(this,arguments)},
_createAjax:function(){return BEM.create("i-request_type_ajax",{url:BEM.blocks["i-global"].param("ajaxUrl")||"",
data:{yu:BEM.blocks["i-global"].param("yandexuid"),st:this.__self.getStaticVersion()},timeout:this.__self.REQUEST_TIMEOUT,
cacheTimeout:this.__self.CACHE_TIMEOUT,traditional:!0,paramsToSettings:["traditional"],cache:!0})},_onRequest:function(t,e){
if(!e)throw Error("Empty request data");if(!e.key)throw Error("Request key is required");e.params=e.params||{},
t.reloadReason&&(e.params.reload=t.reloadReason),this._requestData[e.key]=e,this._doRequest()},_doRequest:function(){
if(!$.isEmptyObject(this._requestData)){var t=this._getRequestParams(),e=t.prefetchText?this._getPrefetchData(t):this._getAjaxData();
e&&(e.params&&(t=e.params),t.text&&this._isPrefetchedQuery(t.text[0])&&(t.prefetch=1),this._requestData={},
this._ajax.get(t,e.onSuccess,e.onError))}},_getRequestParams:function(){var t=this._location.getState(),e=this._prepareData();
return $.extend({},t.params,e.ajaxParams,this._composeAjaxParameters(e.blocksData),BEM.blocks["i-global"].param("serpRequestExtraParams"));
},_getAjaxData:function(){return{onSuccess:this._onSuccess.bind(this,this._requestData),onError:this._onClientAjaxError.bind(this,this._requestData)
}},_getPrefetchData:function(t){var e=t.prefetchText;if(e&&!this._isPrefetchedQuery(e)&&!this._prefetchInQuery[e])return this._prefetchInQuery[e]=1,
delete t.prefetchText,t.text=[e],t.prefetch=1,{params:t,onSuccess:this._onPrefetch.bind(this,e),onError:this._clearPrefetchQuery.bind(this,e)
}},_composeAjaxParameters:function(t){var e=$.extend({},t,this.ajaxParameters),i=this._sortProperties(e);
return{ajax:JSON.stringify(i)}},_sortProperties:function(t){var e=Object.keys(t).sort(),i={};return e.forEach(function(e){
i[e]=t[e]}),i},_prepareData:function(){var t={},e={},i=BEM.blocks["i-global"];return $.each(this._requestData,function(i,n){
e[i]=n.data||{},$.extend(t,n.params)}),$.extend(e,{bmt:i.param("bundlesMetadata"),amt:i.param("assetsMetadata")
}),{ajaxParams:t,blocksData:e}},_clearPrefetchQuery:function(t){delete this._prefetchInQuery[t]},_isPrefetchedQuery:function(t){
return-1!==this._prefetchList.indexOf(t)},_onSuccess:function(t,e){this._checkIssues(t,e)||(this._updateGlobalParams(e),
this._execSuccessCallbacks(t,e))},_onPrefetch:function(t){t&&(this._prefetchList.push(t),this._clearPrefetchQuery(t));
},_checkIssues:function(t,e){var i=this.__self,n=!0,s=BEM.blocks["i-global"].param("isSearchAppAjax");
if(s&&!Boolean(e.error)&&(Boolean(e.captcha)||e["static-host"]!==i.getStaticHost()))return Ya.AppsApi.whenAvailable("ajax",function(t){
t.changeLocation(e.captcha?e.captcha["captcha-page"]:document.location.href)}),!0;switch(!0){case Boolean(e.error):
this._onServerAjaxError(t,e.error);break;case Boolean(e.captcha):this._onServerAjaxError(t,i.CAPTCHA_ERROR),
i.changeLocation(e.captcha["captcha-page"]);break;case e["static-host"]!==i.getStaticHost():this._onServerAjaxError(t,i.INVALID_STATIC_HOST_ERROR),
i.reloadPage(i.RELOAD_STATIC_HOST);break;case!e.serp||!e.serp.params:this._onInvalidAjaxParams(t);break;
default:n=!1}return n},_updateGlobalParams:function(t){var e=t.serp.params;BEM.blocks["i-global"].setParams({
reqid:e.reqid,clck:e.clck,query:e.query,serpRequestExtraParams:e.extraParams,bundlesMetadata:e.bundlesMetadata,
assetsMetadata:e.assetsMetadata})},_execSuccessCallbacks:function(t,e){var i=this;$.each(e,function(e,n){
var s=t[e];s&&$.isFunction(s.success)&&i._execCallback(s.success,n)}),e.requestData=t,this._channel.trigger("success",e);
},_execCallback:function(t,e){try{t(e)}catch(i){i.catchType="ajax",window.logSerpJsError(i)}},_onClientAjaxError:function(t,e){
return 200===e.status||409===e.status?this.__self.reloadPage(this.__self.RELOAD_INVALID_RESULT):void this._execErrorCallbacks(t,this.__self.ERROR_AJAX,e);
},_onServerAjaxError:function(t,e){this._execErrorCallbacks(t,this.__self.ERROR_SERVER,e)},_onInvalidAjaxParams:function(t){
var e="Invalid serp params";this._execErrorCallbacks(t,this.__self.ERROR_INVALID_PARAMS,e)},_execErrorCallbacks:function(t,e,i){
var n={type:e,data:i,reqData:t},s=this;$.each(t,function(t,e){e&&$.isFunction(e.error)&&s._execCallback(e.error,n);
}),this._channel.trigger("error",n)},getRequestData:function(){return this._requestData},_setAjaxParams:function(t){
$.extend(this._ajax.params,t)},setAjaxParameter:function(t,e){this.ajaxParameters[t]=e},getAjaxParameter:function(t){
return this.ajaxParameters[t]},removeAjaxParameter:function(t){delete this.ajaxParameters[t]}},{DEBOUNCE_TIME:15,
CACHE_TIMEOUT:3e5,REQUEST_TIMEOUT:2e4,RELOAD_STATIC_HOST:1,RELOAD_TRY_AGAIN:2,RELOAD_INVALID_RESULT:3,
RELOAD_GEO_RELOCATION:4,ERROR_SERVER:"serverError",ERROR_AJAX:"ajaxError",ERROR_INVALID_PARAMS:"invalidParamsError",
INVALID_STATIC_HOST_ERROR:"INVALID_STATIC_HOST_ERROR",CAPTCHA_ERROR:"CAPTCHA_ERROR",_instance:null,_lockInstance:!0,
getInstance:function(){return this._instance||(this._lockInstance=!1,this._instance=BEM.create("serp-request"),
this._lockInstance=!0),this._instance},clearInstance:function(){this._instance&&(this._instance.destruct(),
this._instance=null)},reloadPage:function(t,e){e=e||{},t&&(e.reload=t);var i=BEM.blocks.uri.parse(BEM.blocks.location.getInstance().getState().url);
$.each(e,function(t,e){i=i.replaceParam(t,e)}),this.changeLocation(i.toString(),!0)},navigateTo:function(t,e){
t=String(t),BEM.blocks["i-ua"].canUseAjax()?this.changeHistory(t,e):this.changeLocation(t)},changeHistory:function(t,e){
e=e||{},e.url=t,this.afterCurrentEvent(function(){BEM.blocks.location.getInstance().change(e)})},changeLocation:function(t,e){
BEM.blocks["app-location"].change(t,e?"replace":"assign")},getStaticHost:function(){return BEM.blocks["i-global"].param("static-host");
},getStaticVersion:function(){var t=/\/([^\/]*)\/$/.exec(this.getStaticHost());return t&&t[1]}}),_borschik("4ITC44BPChDaF6vmCb_7PyC8OKE")&&BEM.decl("serp-request",{
_doRequest:function(){BEM.blocks["i-global"].setParams({sts:$.now()}),this.__base.apply(this,arguments);
},_onSuccess:function(t){this.__base.apply(this,arguments),t.error||BEM.blocks["i-global"].sendCounters(BEM.blocks["i-global"].viewPortParamsCount());
}}),_borschik("EQyhSkiZpY9Y9bwqTQu_yTJfXUA")&&BEM.DOM.decl("serp",{onSetMod:{js:function(){if(++this.__self._instancesCount>1)throw Error("serp: multiple initialization");
this._canUseAjax=BEM.blocks["i-ua"].canUseAjax(),this._setBlocks(),this._bindAjaxLinks(),this._canUseAjax&&this.afterCurrentEvent(this._initBlocks);
}},destruct:function(){this.__self._instancesCount=Math.max(0,this.__self._instancesCount-1),this._cleanBlocks(),
this.__base.apply(this,arguments)},_setBlocks:function(){this._request=BEM.blocks["serp-request"].getInstance(),
this._location=BEM.blocks.location.getInstance(),this._spin=this.elem("spin")},_bindAjaxLinks:function(){
var t=this;BEM.blocks.link.liveBindTo(this.domElem,"tap leftclick",function(e){return e.ctrlKey||e.metaKey?void 0:t._onAjaxLinkClick(e,this);
})},_onAjaxLinkClick:function(t,e){return this._isAjaxLink(e)?(t.preventDefault(),BEM.blocks["serp-request"].navigateTo(e.domElem.prop("href")),
!1):void 0},_isAjaxLink:function(t){return t.domElem.prop("href")&&(t.hasMod("ajax","yes")||t.hasMod("pseudo","yes"));
},_initBlocks:function(){var t=this.findBlockOn("search2"),e=this._getNodeBlocks();e.forEach(this.addRequestListener,this),
t&&BEM.DOM.blocks["suggest2-form"].on(t.domElem,"init",this._initSuggest.bind(this,t,e))},_initSuggest:function(t,e){
if(!this._suggestModel){var i=t.findBlockInside("suggest2");this._suggestModel=i&&i.getModel(),this._suggestModel&&e.forEach(function(t){
this._suggestModel.on("response",t.__onPrefetch)},this)}},_cleanBlocks:function(){this._getNodeBlocks().forEach(this.removeRequestListener,this);
},_getNodeBlocks:function(){var t=this.__self.BLOCKS.map(function(t){return this.findBlockOn(t)},this).filter(Boolean);
return t.unshift(this),t},addRequestListener:function(t){function e(e,i){return $.isFunction(t[e])?t[e].bind(t):i||$.noop;
}function i(e){e.html&&BEM.DOM.update(t.domElem,$(e.html).html())}function n(i,n){var s=t.params.ajaxKey||t.__self.getName(),o=e("getAjaxData")()||{};
BEM.channel("serp-request").trigger($.Event("request",{reloadReason:i.reloadReason}),{key:s,data:o,params:n.params,
success:n.onSuccess,error:n.onError,requestParams:n})}t&&!t.__onLocationChange&&(t.__onLocationChange=function(t,s){
e("onAjaxPrepare")(),n(t,$.extend(s,{onSuccess:function(t){return t=t||{},e("onAjaxSuccess",i)(t)},onError:e("onAjaxError")
}))},t.__onPrefetch=function(t,e){var i=e&&e.data&&e.data.meta,s=i&&i.prefetch,o=i&&i.instant,r=s||[];
r.length&&"yes"===o&&r.forEach(function(e){this.afterCurrentEvent(function(){n(t,{params:{prefetchText:e||0
}})})},this)},this._location.on("change",t.__onLocationChange),this.params.testing&&t.setMod("serp-bound","yes"));
},removeRequestListener:function(t){t&&t.__onLocationChange&&(this._location.un("change",t.__onLocationChange),
this._suggestModel&&this._suggestModel.un("response",t.__onPrefetch),t.__onLocationChange=null,t.__onPrefetch=null,
this.params.testing&&t.delMod("serp-bound"))},onAjaxPrepare:function(){this._hideError(),this._startProgress();
},onAjaxSuccess:function(t){this._stopProgress();var e=document.createElement("i");e.innerHTML=t.params.found,
document.title=e.firstChild.nodeValue},onAjaxError:function(t){if(t.type!==BEM.blocks["serp-request"].ERROR_SERVER||t.data!==BEM.blocks["serp-request"].INVALID_STATIC_HOST_ERROR){
this._stopProgress();var e=this.params[t.data.readyState?"resultError":"connectionError"];this._showError(e);
}},_startProgress:function(){this.setMod("loading","yes"),this._spin.length&&this.setMod(this._spin,"progress","yes"),
BEM.DOM.scope.attr("aria-busy",!0)},_stopProgress:function(){BEM.DOM.scope.attr("aria-busy",!1),this.delMod("loading"),
this._spin.length&&this.delMod(this._spin,"progress")},_showError:$.noop,_hideError:$.noop},{_instancesCount:0,
BLOCKS:[]}),_borschik("izh_bKDbGP6da0cAt3JwefQVD8w")&&BEM.DOM.decl("serp",{onSetMod:{js:function(){this.__base.apply(this,arguments),
this._requestChannel=BEM.channel("serp-request"),BEM.channel("advansed-search").on("inited",function(){
this.addRequestListener(this.findBlockOn("advanced-search"))},this)}},_setBlocks:function(){this.__base(),
this._main=this.findBlockOutside("main"),this._noConnection=this._main&&this._main.findBlockInside("no-connection");
},destruct:function(){this._stopProgressTimeout&&clearTimeout(this._stopProgressTimeout),this.__base.apply(this,arguments);
},_startProgress:function(){this._requestChannel.trigger("startProgress"),this._progressStarted=$.now(),
this.__base.apply(this,arguments)},_stopProgress:function(){function t(){e._stopProgressTimeout=null,
i(),e._requestChannel.trigger("stopProgress")}if(this.hasMod("loading","yes")){var e=this,i=this.__base.bind(this);
this._stopProgressTimeout=setTimeout(t,this._getStopProgressDelay())}},_getStopProgressDelay:function(){
var t=250;return Math.max(0,t-($.now()-this._progressStarted))},showResultError:function(){this._stopProgress(),
this._showError(this.params.resultError)},_showError:function(t){this._main&&this._noConnection&&(this._noConnection.elem("message").text(t.message),
this._noConnection.setMod("visible","yes"),this._main.setMod("hidden-content","yes"))},_hideError:function(){
this._main&&this._noConnection&&(this._noConnection.delMod("visible"),this._main.delMod("hidden-content"));
}},{BLOCKS:["keyboard-shortcuts","input","b-counters","more","navigation","main","search2","feedback","serp-adv__add","advanced-search","footer__settings","footer-stripe","head-stripe","stripe","user"]
}),_borschik("54LGidGBeg8d4Es4o5zkGmgRuKs")&&BEM.DOM.decl("no-connection",{_onButtonClick:function(){
var t=BEM.blocks["i-global"].param("yandexuid")!==$.cookie("yandexuid");this._reload(t)},_reload:function(t){
if(t)BEM.blocks["serp-request"].reloadPage(BEM.blocks["serp-request"].RELOAD_INVALID_RESULT);else{var e=BEM.blocks.location.getInstance();
e.trigger($.Event("change",{reloadReason:BEM.blocks["serp-request"].RELOAD_TRY_AGAIN}),e.getState())}
}},{live:function(){this.liveBindTo("reload","click",function(){this._onButtonClick()})}}),_borschik("PiXHs9rIR1GwTkA5_TdnO6af0yg")&&BEM.DOM.decl({
name:"link",modName:"pseudo",modVal:"yes"},{_onClick:function(t){t.preventDefault(),this.hasMod("disabled","yes")||this.afterCurrentEvent(function(){
this.trigger("click")})},_onKeyUp:function(t){t.shiftKey||t.ctrlKey||t.altKey||(13===t.which||32===t.which)&&(this.hasMod("disabled","yes")||this.afterCurrentEvent(function(){
this.trigger("click")}))}},{live:function(){this.__base.apply(this,arguments),this.liveBindTo({modName:"pseudo",
modVal:"yes"},"leftclick tap",function(t){this._onClick(t)}).liveBindTo({modName:"pseudo",modVal:"yes"
},"keyup",function(t){this._onKeyUp(t)})}}),_borschik("fokyVw2gMIExO5GIkteEdcruefM")&&BEM.DOM.decl("pager",{
getUrl:function(t){var e=this.params["forward"===t?"nextPage":"prevPage"];return e!==!1&&BEM.blocks.location.getInstance().getUri().replaceParam("p",e).toString();
},go:function(t){t&&BEM.blocks["serp-request"].navigateTo(t)},goForward:function(){this.go(this.getUrl("forward"));
},goBackward:function(){this.go(this.getUrl("backward"))}}),_borschik("pXu5mGEpXFXClVcCahIpPZgwr6Y")&&BEM.DOM.decl("pager-counter",{
onSetMod:{js:function(){this.notifyWhenVisible()}},notifyWhenVisible:function(){this.subscribed||(this.subscribed=!0,
BEM.blocks["scroll-spy"].notifyBecameVisible(this.domElem,this.onShown,this))},onShown:function(){this.subscribed=!1,
this.sendCounter()},sendCounter:function(){BEM.blocks.counter.log(this.params.counter)},destruct:function(){
this.subscribed&&BEM.blocks["scroll-spy"].stopWatchingVisibility(this.domElem,this.onShown,this),this.__base.apply(this,arguments);
}}),_borschik("r6bn1Liu44iWeZNuGh9lHi9_w3c")&&(BEM.DOM.decl("scroll-spy",{onFirstBecameVisible:function(t,e){
var i=this.params.visibilityConditions;this.__self.notifyBecameVisible(this.domElem,t,e,i)}},{SCROLL_EVENT:"scroll touchmove",
SCROLL_SMOOTHING:50,live:!0,init:function(){this._win=BEM.DOM.win,this._watchedElements=[],this._onScrollSmooth=$.debounce(this._onScroll,this.SCROLL_SMOOTHING,this);
},getElemVisibility:function(t){if(!t.is(":visible"))return{visible:!1,x:0,y:0,area:0};var e=t[0].getBoundingClientRect();
if(e.right<=0||e.left>=window.innerWidth||e.bottom<=0||e.top>=window.innerHeight)return{visible:!1,x:0,
y:0,area:0};var i=e.width*e.height,n=this.getIntersection(e,{top:0,right:window.innerWidth,bottom:window.innerHeight,
left:0});return{visible:!0,x:e.width?n.xOverlap/e.width:0,y:e.height?n.yOverlap/e.height:0,area:i?n.overlapArea/i:0
}},getIntersection:function(t,e){var i=Math.min(t.right,e.right)-Math.max(t.left,e.left),n=Math.min(t.bottom,e.bottom)-Math.max(t.top,e.top);
return 0>i&&(i=0),0>n&&(n=0),{xOverlap:i,yOverlap:n,overlapArea:i*n}},watchVisibility:function(t,e,i){
if(!t)throw new Error("Dom elem required");if(!e)throw new Error("Callback required");if(!t.length)throw new Error("Can't watch empty collection");
var n=$.identify(t[0]);return this.isElemWatched(t,e)||(this._watchedElements.push({id:n,domElem:t,callback:e,
ctx:i||null}),this._setupScrollListener()),this},stopWatchingVisibility:function(t,e,i){if(!t.length)return this;
i=i||null;var n=$.identify(t[0]),s=e?function(t){return!(t.id===n&&t.callback===e&&t.ctx===i)}:function(t){
return t.id!==n};return this._watchedElements=this._watchedElements.filter(s),this._setupScrollListener(),
this},_setupScrollListener:function(){var t=this._watchedElements.length;1!==t||this._listeningScroll?0===t&&(this._win.off(this.SCROLL_EVENT,this._onScrollSmooth),
this._listeningScroll=!1):(this._win.on(this.SCROLL_EVENT,this._onScrollSmooth),this._listeningScroll=!0);
},_onScroll:function(){for(var t=0;t<this._watchedElements.length;t++){var e=this._watchedElements[t],i=this.getElemVisibility(e.domElem);
setTimeout(e.callback.bind(e.ctx,i),0)}},isElemWatched:function(t,e,i){if(!t.length)return!1;var n=$.identify(t[0]);
return i=i||null,this._watchedElements.some(function(t){return t.id===n&&t.callback===e&&t.ctx===i})},
notifyBecameVisible:function(t,e,i,n){var s=e.bind(i),o=this.getElemVisibility(t);return this.checkVisibilityConditions(n,o)?setTimeout(s,0):void this.watchVisibility(t,function r(e){
this.checkVisibilityConditions(n,e)&&(setTimeout(s,0),this.stopWatchingVisibility(t,r,this))},this)},
checkVisibilityConditions:function(t,e){var i=e.visible;if(i)for(var n in t){var s=e[n]>=t[n];if(i=i&&s,
!i)break}return i}}),BEM.blocks["scroll-spy"].init()),_borschik("map4dwqASE0-cRmOItmcI3LZ-14")&&BEM.DOM.decl("navigation",{
onSetMod:{js:function(){this.__base();var t=this.findBlockOutside("b-page");this._searchInput=(t.findBlockInside("search")||t.findBlockInside("search2")).findBlockInside("input"),
this._onSearchQueryChange=$.debounce(this._onSearchQueryChange,200,this),this._searchInput.on("change",this._onSearchQueryChange,this),
this._changeLabel(this._searchInput.val())}},_onSearchQueryChange:function(){var t=this.elem("item").map(this.changeThis(this._processItem)),e=this._searchInput.val();
t.each(this.changeThis(function(t,i){var n,s,o=this.findBlockInside(i,"service").elem("url"),r=o.attr("href");
if(r&&e){var a=BEM.blocks.uri.parse(r);n=a.queryParams.request?"request":"text",s=a.replaceParam(n,e.trim()).toString(),
o.attr("href",s)}})),this._changeLabel(e)},_changeLabel:function(t){t=t?BEM.I18N("navigation","search-on",{
query:t}):BEM.I18N("navigation","search-also"),this.domElem.attr("aria-label",t)}}),_borschik("IVH9Wm1fUUHQ4b69JAWCl3osjoc")&&BEM.DOM.decl("navigation",{
onSetMod:{js:{inited:function(){this._selectedItem=-1,this._items=this.elem("item","service","yes").map(this.changeThis(this._processItem,this)),
this._onWindowResize=$.throttle(this._onWindowResize,100,this),this._onWindowResize(),this.bindToWin("resize",this._onWindowResize);
}}},onElemSetMod:{item:{state:{selected:function(t){t.attr({role:"link","aria-hidden":!0})},"":function(t){
t.attr("role","listitem").removeAttr("aria-hidden")}}}},_processItem:function(t,e){var i=$(e),n=this.getMod(i,"name"),s=this.hasMod(i,"state","selected");
return n?(s&&(this._selectedItem=t),$.extend(i,{_index:t,_cachedBottom:this._getBorders(i).bottom,_sticky:s
}),i):null},_onWindowResize:function(){this.reflow()},reflow:function(){var t,e=this._getViewportThreshold(),i=this._items.length,n=0;
for(t=i;t--;)this._items[t]._cachedBottom>e&&n++;if(n=this._reflowExtra(e,i,n),n===i)for(t=i;t--;)this.setMod(this._items[t],"stacked","yes");else{
var s=n;for(t=i;t--;){var o=this._items[t];s&&!o._sticky?(this.setMod(o,"stacked","yes"),s--):this.delMod(o,"stacked");
}}return n},_reflowExtra:function(t,e,i){return i},_onMoreClick:function(){},_getViewportThreshold:function(){
return this.__self.win.height()},_getBorders:function(t){"number"==typeof t&&(t=this._items[t]),t instanceof $||(t=$(t));
var e=t.outerHeight(),i=t.offset().top-BEM.DOM.win.scrollTop();return{top:i,bottom:e+i}}},{live:function(){
return this.liveBindTo("more","leftclick tap",function(t){this._onMoreClick(t)}).liveBindTo("more","keyup",function(t){
t.shiftKey||t.ctrlKey||t.altKey||(13===t.which||32===t.which)&&this._onMoreClick(t)}),!1}}),_borschik("GNk7e4kVcCOy8E0sEhqZAmsv6Uw")&&BEM.DOM.decl("navigation",{
_getBorders:function(t){if(BEM.blocks["i-ua"].opera<13||BEM.blocks["i-ua"].ie<9){var e=this.elem("more").css("bottom");
this.elem("more").css("bottom","0"),this.elem("more").offset().top,this.elem("more").css("bottom",e)}
return this.__base.apply(this,arguments)}}),_borschik("Q425UB6bMQ63Dvh8iyM4LBJZmr4")&&BEM.DOM.decl("navigation",{
onAjaxSuccess:function(t){this.dropElemCache(),BEM.DOM.update(this.domElem,$(t.html).html()),this._items=this.elem("item","service","yes").map(this._processItem.bind(this)),
this.reflow()}}),_borschik("F5VGJmoErOpnXbEFUXh1avNqdak")&&BEM.DOM.decl({block:"navigation",modName:"more-type",
modVal:"popup"},{onSetMod:{js:{inited:function(){var t=this.elem("more-label");this._popup=this.findBlockInside("popup").on("show",function(){
t.attr("aria-expanded",!0)}).on("hide",function(){t.attr("aria-expanded",!1)}),this._stack=this.elem("more-stack"),
this.bindTo(this.findElem(this._stack,"item"),"leftclick tap",this._onStackedItemClick),this.__base.apply(this,arguments);
}}},onElemSetMod:{item:{stacked:function(t,e,i){this.setMod(t._popupElem,"visibility",i)}},more:{visibility:{
"":function(){this._popup.hide()}}}},_processItem:function(){var t=this.__base.apply(this,arguments),e=this.getMod(t,"name");
return $.extend(t,{_popupElem:this.findElem(this._stack,"item","name",e)}),t},_onStackedItemClick:function(t){
this._popup.hide()},reflow:function(){var t=this.__base.apply(this,arguments);return this.toggleMod(this.elem("more"),"visibility","yes","",t>0),
t},_reflowExtra:function(t,e,i){return 1===i&&e>1&&i++,i},_onMoreClick:function(){this._popup.toggle(this.elem("more"));
},_getViewportThreshold:function(){return this._getBorders(this.elem("more")).top}}),_borschik("a4UYrpmSkSB1q-x-A7gBD6atFzg")&&BEM.decl({
block:"navigation",modName:"sticky",modVal:"yes"},{onSetMod:{js:function(){this.__base.apply(this,arguments);
}},_getFooterHeight:function(){return this.findBlockOutside("b-page").findBlockInside("footer").domElem.height();
},_getWin:function(){return this.__self.win},_getOffset:function(){return this.domElem.offset()},_getViewportThreshold:function(){
var t=this._getWin();return t.height()-this._getOffset.top-t.scrollTop()-this._getFooterHeight()}}),_borschik("055B0vO6ZB5X59CUog1f2CrTapw")&&BEM.decl({
block:"navigation",modName:"more-type",modVal:"slide"},{onSetMod:{js:function(){this.__base.apply(this,arguments),
this._extraItems=this.elem("item","extra","hidden"),this.toggleTimeout=null,this.bindTo("mouseleave",$.debounce(this._onNavigationLeave,100)),
this.bindTo("mouseenter",$.debounce(this._clearTimer,100)),this.bindToWin("touchstart",this._onNavigationLeave);
}},_clearTimer:function(){this.toggleTimeout&&(clearTimeout(this.toggleTimeout),this.toggleTimeout=null);
},_onMoreClick:function(){this._clearTimer(),this.expand()},_onNavigationLeave:function(){this.toggleTimeout=setTimeout(function(){
this.collapse()}.bind(this),300)},onAjaxSuccess:function(){this.__base.apply(this,arguments),this._extraItems=this.elem("item","extra","hidden");
},isCollapsed:function(){return!this.hasMod(this.findElem("more"),"visibility","hidden")},expand:function(){
this.setMod(this.findElem("more"),"visibility","hidden"),this.setMod(this._extraItems,"extra","visible");
},collapse:function(){this.setMod(this.findElem("more"),"visibility",""),this.setMod(this._extraItems,"extra","hidden");
}}),_borschik("BnMO737sPbCsV0MC8Rs5EICdV3Q")&&BEM.DOM.decl("region",{onSetMod:{js:function(){this._initPopup();
}},onAjaxPrepare:function(){this._rmPopup()},onAjaxSuccess:function(t){var e="hidden";t&&t.html&&(BEM.DOM.update(this.domElem,$(t.html).html()),
this._initPopup(),t.params&&(e=t.params.visibility)),this.setMod("visibility",e)},_initPopup:function(){
this.dropElemCache("button");var t=this.elem("button");this._popup=this.findBlockInside("popup"),t&&this._popup&&this.bindTo(t,"leftclick tap",function(){
this._popup.toggle(t)})},_rmPopup:function(){this.unbindFrom("button","leftclick tap"),this._popup&&this._popup.destruct(),
delete this._popup}}),_borschik("fYqw_wHv7ns4l92N80FdvNjJaVs")&&BEM.DOM.decl("i-menu",{onElemSetMod:{
item:{state:{current:function(t,e,i,n){if("disabled"==n)return!1;var s=this.elem("item","state","current");
this.delMod(s,"state").trigger("current",{prev:s,current:t})}}}},onItemSelectorClick:function(t){var e=this._getItemByEvent(t);
this.setMod(e,"state","current")},_getItemByEvent:function(t){return t.data.domElem.closest(this.buildSelector("item"));
}},{live:function(){this.liveBindTo("item-selector","leftclick tap",function(t){this.onItemSelectorClick(t);
})}}),_borschik("gUB_nEQ3WwQk6FRxfzk9uzN57Io")&&BEM.DOM.decl({block:"b-menu-vert",baseBlock:"i-menu"}),
_borschik("USmCejGB25qCoVvjvXqsWHIbAjg")&&BEM.DOM.decl({name:"button",modName:"pseudo",modVal:"yes"},{
_onClick:function(t){this.__base.apply(this,arguments),this._href&&t.preventDefault()}}),_borschik("OySDzGXwezPABjnSBuP--anqSN0")&&BEM.DOM.decl("competitors",{
onSetMod:{js:function(){this.hasMod("pos","bottom")&&(this._footer=this.findBlockOutside("b-page").findBlockInside("footer"),
this._bottomOffset=this._footer.domElem.outerHeight(),this.updateCompetitorsPos(),this.bindToWin("orientationchange resize",$.debounce(this.updateCompetitorsPos,50,this)));
}},updateCompetitorsPos:function(){var t=BEM.DOM.win.height()-this._footer.domElem.offset().top-this._bottomOffset;
this.domElem.css("position",t>=0?"":"static")}}),_borschik("vIEo1s1Mjm0tGIjnKSy0c69BwAY")&&!function(t,e){
if(t.addEventListener&&t.getComputedStyle&&Function.prototype.bind){var i="76",n="487",s="238",o="690",r="836",a="1042",c="1132",h="1133",u="1134",l="1135",d={
MIN_HEIGHT:16,probeElem:null,probeClass:"adbanner advblock b-adv b-banner bannerad reklama pagead sideads serp-adv sponsoredlinks",
probeId:"adbanner",probeStyle:"position: absolute !important; visibility: hidden !important; height: 9px !important",
probeTimeout:null,params:null,counterParams:{dtype:"yact",path:o+"."+c},vars:{},isMSIE:navigator.userAgent.indexOf("Trident")>-1,
detect:function(i){this.params=i,this.prepareTests();for(var n,s=0,o=this.tests.length;!n&&o>s;s++)n=this.tests[s].call(this);
return!n&&this.isMSIE?"complete"==e.readyState?this.doDeferredTests():t.addEventListener("load",this.doDeferredTests.bind(this),!1):void this.report(n);
},doDeferredTests:function(){for(var t,e=0,i=this.deferredTests.length;!t&&i>e;e++)t=this.deferredTests[e].call(this);
this.report(t)},report:function(t){var e=this.check();e&&!t&&(t=r),t?this.vars[i]=t:this.setCookie(!1),
this.send()},check:function(){var t=this.params.inquire,e=[],i=[];for(var o in t)if(t.hasOwnProperty(o)){
i.push(o);var r=!0,a=t[o];if(a instanceof Array)for(var c=a.length;c--&&r;)r=this.checkBlock(a[c]);else r=this.checkBlock(a);
r||e.push(o)}return i.length&&(this.vars[n]=i),e.length&&(this.setCookie(!0),this.vars[s]=e),!!e.length;
},checkBlock:function(i){var n=e.querySelector(i),s=n&&t.getComputedStyle(n,"");return!(!n||"none"==s.display||"visible"!=s.visibility||"1"!=s.opacity||s.MozBinding&&s.MozBinding.indexOf("abp")>-1&&n.offsetHeight<this.MIN_HEIGHT||parseInt(s.height,10)<this.MIN_HEIGHT);
},send:function(){this.vars[a]=encodeURIComponent(navigator.userAgent),(new Image).src=[this.params.counterUrl,this._stringify(this.counterParams),this._stringify(this.vars),"*"].join("/");
},_stringify:function(t,e){var i=[];e||(e="/");for(var n in t)t.hasOwnProperty(n)&&null!=t[n]&&i.push(n+"="+t[n]);
return i.join(e)},setCookie:function(t){for(var i=(e.cookie||"").split(/\s*;\s*/),n=String(location.host),s="."+n.substring(n.indexOf("yandex")),o="Tue, 19 Jan 2038 03:14:00 GMT",r="; expires="+o+"; domain="+s+"; path=/",a=2592e3,c=[],h=!1,u=i.length;!c.length&&u--;)"yp="==i[u].substring(0,3)&&(c=i[u].substring(3).split(/#|%23/));
for(var u=0,l=c.length;!h&&l>u;u++){var d=c[u].split(".");if("los"==d[1])if(h=!0,t){if("0"!=d[2])return;
d[2]="1",c[u]=d.join(".")}else c.splice(u,1)}t&&!h&&c.push(Math.round(.001*new Date+a)+".los.1"),(t||h)&&(e.cookie="yp="+c.join("#")+r);
},checkHiding:function(t){this.vars[s]&&this.vars[s].length||!t.offsetHeight||this.setCookie(!1),t.parentNode==e.body&&(e.body.removeChild(t),
this.probeElem=null)},prepareTests:function(){"MozBinding"in e.body.style?this.tests.push(function(){
var e=this.createTestElement(),i=t.getComputedStyle(e,"").MozBinding;return i&&i.indexOf("about:abp")>-1?(this.probeTimeout=setTimeout(this.checkHiding.bind(this,e),1e3),
h):void 0}):t.opera&&t.opera.version()<13?this.tests.push(function(){for(var t=e.querySelectorAll('style[type="text/css"]'),i=0,n=t.length;n>i;i++){
var s=t[i].sheet.cssRules;if(s.length){var o=s[0].selectorText;if(o&&o.toLowerCase().indexOf("#ad")>-1)return 20==o.split(",").length?h:c;
}}}):this.tests.push(function(){for(var t=e.documentElement.webkitShadowRoot||e.documentElement.shadowRoot,i=t?Array.apply(null,t.querySelectorAll("style")):[],n=Array.prototype.slice.call(e.querySelectorAll('head>style[type="text/css"]'),0),s=i.concat(n),o=0,r=s.length;r>o;o++){
var a,u=s[o].sheet.cssRules;if(u.length){if(1==u[0].type&&(a=u[0].selectorText,a.toLowerCase().indexOf("#ad")>-1&&20==a.split(",").length))return h;
var l=u[u.length-1];if(1==l.type&&(a=l.selectorText,a.toLowerCase().indexOf("#ad")>-1&&1e3==a.split(",").length))return c;
}}}),this.isMSIE?this.deferredTests.push(this.doTraitTest):this.tests.push(this.doTraitTest)},doTraitTest:function(){
var i=this.createTestElement(),n=t.getComputedStyle(i,null),s=n.display,o=parseInt(n.height,10);return e.body.removeChild(i),
"none"!=s&&o?void 0:r},createTestElement:function(){var t=this.probeElem||(this.probeElem=e.createElement("div"));
return t.className=this.probeClass,t.id=this.probeId,t.style.cssText=this.probeStyle,e.body.insertBefore(t,null),
t},destruct:function(){this.probeTimeout&&(clearTimeout(this.probeTimeout),this.probeTimeout=null),this.probeElem&&this.probeElem.parentNode==e.body&&(e.body.removeChild(this.probeElem),
this.probeElem=null)},tests:[function(){if("undefined"!=typeof adguard)return l;this.styleLinks||(this.styleLinks=e.querySelectorAll('head>link[rel="stylesheet"]'));
for(var t=0,i=this.styleLinks.length;i>t;t++)if(this.styleLinks[t].href.indexOf("adguard")>-1)return l;
},function(){this.styleLinks||(this.styleLinks=e.querySelectorAll('head>link[rel="stylesheet"]'));for(var t=0,i=this.styleLinks.length;i>t;t++)if(this.styleLinks[t].href.indexOf("interceptedby.admuncher.com")>-1)return u;
}],deferredTests:[function(){return null!=e.body.getAttribute("abp")?h:void 0}]};return BEM&&BEM.DOM&&BEM.DOM.decl("inquire",{
onSetMod:{js:function(){var t=BEM.blocks["i-global"].param("click-host");if(!t){var e=location.hostname.match(/^yandex(?:.[a-z]+)+$/i);
t="//"+(e?e[0]:"yandex.ru")+"/clck"}this.params.counterUrl=t+"/click",d.detect(this.params)}},destruct:function(){
return d.destruct(),this.__base.apply(this,arguments)}}),d}}(window,document),_borschik("wSPz8HQtePUpG40Gz61jLxe0I7k")&&BEM.decl("i-statface",{
onSetMod:{js:function(){this._data={},this._needSend=!1,this.hasMod("send","manual")||$(window).unload(this.changeThis(this.send));
}},set:function(t,e){this._needSend=!0;var i=this._data;return"object"==typeof t?$.each(t,function(t,e){
i[t]=e}):i[t]=e,this},reset:function(){var t=this;return arguments[0]?$.each(arguments,function(e,i){
delete t._data[i]}):this._data={},$.isEmptyObject(this._data)&&(this._needSend=!1),this},serialize:function(){
var t=this;return $.map(t.params.keys,function(e){return t._data[e]}).join(".")+(t.params.customKeys?$.map(t.params.customKeys,function(e){
var i=t._data[e];return"/"+e+"="+(void 0===i?"":i)}).join(""):"")},send:function(t){if(this._needSend){
var e=this.params,i=["//",e.host,"/",e.path,"/dtype=stred","/pid=",e.pid,"/cid=",e.cid,"/cts=",(new Date).getTime(),"/path=",this.serialize(),"/*data=",encodeURIComponent("url="+encodeURIComponent(e.url))].join("");
"click"===e.path?document.createElement("IMG").src=i:$.ajax({type:"GET",url:i,data:null,complete:t||$.noop,
dataType:"script",timeout:500}),this._needSend=!1}return this},getDefaultParams:function(){return{host:"clck.yandex.ru",
path:"jclck",url:location.href}}}),_borschik("xyHy8YRnSDDWvd_v0zFquDw81ms")&&BEM.decl("i-statface",{onSetMod:{
js:function(){this.__base.apply(this,arguments),this.params.customKeys.push("u","reqid")}},sendCounter:function(t){
this.set({u:(new Date).getTime(),reqid:BEM.blocks["i-global"].param("reqid")}).send(t).reset()},getDefaultParams:function(){
return $.extend(this.__base(),{pid:1,host:BEM.blocks["i-global"].param("click-host").replace(/(.*)\/\//,""),
customKeys:[]})}}),_borschik("odlHPC881r0zVnCPIwGcOZKUNYk")&&BEM.DOM.decl("video",{onSetMod:{js:function(){
var t=this.findBlockOn("serp-item"),e=this.findBlockInside("video-player"),i=t.params.preview&&t.params.preview.common?"common":"video";
this.bVideoThumb=this.findBlockInside("video-thumb"),this.bVideoThumb&&this.bVideoThumb.getMod("playable")&&this.bVideoThumb.bindTo("click",function(){
t.togglePreview(i)},this),e&&(e.on("closeActive",t.togglePreview.bind(t,"video")),t.on("previewShow",e.open,e),
t.on("previewHide",e.close,e)),this.params.openCounter&&this.params.openCounter.unshift(this.domElem[0]),
this.params.closeCounter&&this.params.closeCounter.unshift(this.domElem[0]),this._bindVideoCounters(t),
this.params["play-now"]&&t.togglePreview(!0)}},_bindVideoCounters:function(t){var e=this.params.counterData.hostingId;
t.bindTo("title-link","click",function(){this._sendCounter({path:"hosting.head",hosting_id:e})}.bind(this)),
this.findBlockInside("serp-url").bindTo("link","click",function(){this._sendCounter({path:"hosting.greenurl",
hosting_id:e})}.bind(this)),this.params.videoError&&this.bVideoThumb&&this.bVideoThumb.bindTo("click",function(){
this._sendCounter({path:"hosting.thumb",hosting_id:e})}.bind(this)),t.on("previewShow",function(t,e){
e&&"video"===e.name&&this._playerOpenCounter()},this),t.on("previewHide",function(t,e){e&&"video"===e.name&&this._playerCloseCounter();
},this)},_playerOpenCounter:function(){this._sendCounter({path:"vplay"}),this._startTime=(new Date).getTime();
},_playerCloseCounter:function(){var t=(new Date).getTime()-this._startTime;this._sendCounter({path:"vclose",
dur:this.params.counterData.dur,pldur:Math.floor(t/1e3%60)})},_sendCounter:function(t){$.extend(t,this.params.counterData.params),
BEM.create("i-statface",{cid:70116,path:"click",keys:["path"],customKeys:["yuid","reg","query","vrezka","videoid","videourl","dur","pldur","hosting_id"]
}).set(t).sendCounter()}}),_borschik("a5J0SCxjPdNAOmMtlhX05F8-gr4")&&BEM.DOM.decl("video-player",{_shouldLogClick:!1,
open:function(){this._spin=this.findBlockInside("spin2"),this.__self.closeActivePlayer(this),this._setInitialMods(),
this._initPlayer(),this.isOpened||(this._setPlayerParams(),this.trigger("open"),this._sendSERPCounterDynamic("open"),
this._shouldLogClickOnOpen()?this._sendSERPCounter("click"):this._shouldLogClick=!0),this.isOpened=!0,
this.params.scroll&&!this.findBlockOutside({blockName:"content-preview",modName:"updated",modVal:"yes"
})&&this.afterCurrentEvent(this._scrollToView)},close:function(){this._player.clean(),this.isOpened=!1,
this.__self.dropActivePlayer(this),this.trigger("close"),this._sendSERPCounterDynamic("close")},destruct:function(){
this.isOpened&&this.close(),this.unbindFromWin("resize"),this.__base.apply(this,arguments)},_setInitialMods:function(){
this.delMod("error"),this._spin.setMod("progress","yes")},_initPlayer:function(){this._player||(this._player=this.findBlockInside("player"),
this._player.on("error load-error",this._onError,this),this._player.on("started",this._onStart,this),
this._player.on("load-success",this._onLoadSuccess,this),this._player.on("paused",this._onPause,this),
this._player.on("ended",this._onEnd,this))},_setPlayerParams:function(){this._spin.setMod("progress","yes"),
this._player.setParams({hosting:this.params.hosting,url:this.params.src,autoplay:this.params.autoplay,
properties:this.params.videoUrlParam})},_onStart:function(t,e){this._spin.delMod("progress"),this._sendSERPCounterDynamic("play",e.time?",-time="+e.time:""),
this._logClick()},_onLoadSuccess:function(){this._spin.delMod("progress")},_onPause:function(t,e){this._sendSERPCounterDynamic("pause",e.time?",-time="+e.time:"");
},_onEnd:function(){this._sendSERPCounterDynamic("end"),this._shouldLogClick=!0},_onError:function(t,e){
this._spin.delMod("progress"),this.setMod("error","yes"),this._player.clean(),this._sendErrCounter(e),
this._logClick()},_scrollToView:function(){var t=this.domElem.height(),e=this.findBlockOutside("b-page").findBlockInside("serp-header").domElem.outerHeight(),i=this.domElem.offset().top-e,n=this.domElem.offset().top-BEM.DOM.win.height()+t+5,s=Math.min(i,Math.max(n,BEM.DOM.win.scrollTop()));
$("html, body").animate({scrollTop:s},"fast")},_shouldLogClickOnOpen:function(){return"inline"!==this.params.type;
},_logClick:function(){this._shouldLogClick&&(this._sendSERPCounter("click"),this._shouldLogClick=!1);
},_sendErrCounter:function(t){w(null,this.params.countersData.techPath,"-event=error,-hosting="+t.hosting+",-code="+t.code+",-source-url="+encodeURIComponent(t.url)+",-time="+(t.time||0));
},_sendSERPCounterDynamic:function(t,e){e=e||"",e+=",action=dynamic-click",this._sendSERPCounter(t,e);
},_sendSERPCounter:function(t,e){e=e||"",w(this.domElem[0],this.params.countersData[t+"Path"],this.params.countersData.vars+e);
}},{live:!0,_current:null,closeActivePlayer:function(t){this._current&&this._current.trigger("closeActive"),
this._current=t},dropActivePlayer:function(t){t===this._current&&(this._current=null)}}),_borschik("UQoE3whoo9-145V3qyjMQ4wxq3c")&&BEM.DOM.decl({
block:"video-player",modName:"auto",modVal:"yes"},{onSetMod:{js:function(){this.__base.apply(this,arguments),
this.open(),this._spin.delMod("progress")}}},{live:!1}),_borschik("8FCBtUGsNMOuKJuf3RAAIh_E8Dc")&&BEM.DOM.decl("player",{
onSetMod:{"iframe-listener":{yes:function(){this.afterCurrentEvent(function(){this._startListenHostingsPostMessage();
}.bind(this))}}},setParams:function(t){this.params=this._getNormalizedParams(t),this._setMods()._update();
},_setMods:function(){var t=this.params,e=t.hosting||"",i=e&&-1!==this.__self.IFRAME_LISTENERS.indexOf(e),n=-1===this.__self.NO_TRANSPORT.indexOf(e),s="";
return n&&(t.autoplayHtml&&t.noAutoplayHtml?s="direct":t.url&&(s="ajax")),this.setMod("transport",s),
i&&this.setMod("iframe-listener","yes"),this.setMod("hosting",e),this},getParams:function(){return this.params;
},_getNormalizedParams:function(t){var e=this.__self.HOSTING_NORMALIZE_MAP,i={};return this.__self.ALLOWED_PARAMS.forEach(function(e){
"undefined"!=typeof t[e]&&(i[e]=t[e])}),this.params.includeHostings&&(e=function(t,e){var i={};return $.each(t,function(t,n){
-1!==e.indexOf(n)&&(i[t]=n)}),i}(e,this.params.includeHostings)),t.hosting&&e[t.hosting]?i.hosting=e[t.hosting]:i.hosting="",
i.includeHostings=this.params.includeHostings,i},_replacePlayerSizes:function(t){return t.replace(/%{playerWidth}/gi,this.domElem.width()).replace(/%{playerHeight}/gi,this.domElem.height());
},_updateDomElem:function(t){return t=this._replacePlayerSizes(t),this.domElem.html(t),this},_update:function(){},
clean:function(){return this.unbindFromWin("message"),this.__self._alreadyListeningHostingsPostMessages=!1,
this.domElem&&this.domElem.empty(),this},_triggerEvent:function(t,e){e&&(e.hosting=this.getMod("hosting")),
-1!==["started","paused","ended","error"].indexOf(t)&&this.trigger(t,e)},destruct:function(){this.__base.apply(this,arguments),
this.unbindFromWin("message")}},{SOFT_404_ERROR_CODE:"s404",HOSTING_NORMALIZE_MAP:{},ALLOWED_PARAMS:["url","autoplay","autoplayHtml","noAutoplayHtml","properties","hosting","remoteServerUrl"],
IFRAME_LISTENERS:["mailru","rutube"],NO_TRANSPORT:[],registerHosting:function(t){this.HOSTING_NORMALIZE_MAP=$.extend(this.HOSTING_NORMALIZE_MAP,t);
},registerNoTransport:function(t){this.NO_TRANSPORT.push(t)}}),_borschik("bSHUT0JTZkk3M0AQ48VcYP_0WdM")&&!function(){
function t(t){return window.YT?void setTimeout(t,1):i?void i.promise().done(t):(i=$.Deferred(),i.promise().done(t),
window.onYouTubeIframeAPIReady=function(){i.resolve(),i=null,window.onYouTubeIframeAPIReady=null}.bind(this),
void $.getScript("//www.youtube.com/iframe_api"))}function e(t){var e;return[/(?:youtube\.com\/watch\?v=([\da-z\-_]+))/i,/(?:youtube\.com\/v\/([\da-z\-_]+))/i,/(?:youtu\.be\/([\da-z\-_]+))/i].some(function(i){
var n=t.match(i);return e=n&&n[1],!!e}),e}var i=null;BEM.DOM.decl({block:"player",modName:"hosting",modVal:"youtube"
},{_update:function(){this.params.videoid=e(this.params.url),t(function(){this._player=new YT.Player(this.domElem.html("<div>").children()[0],{
width:"100%",height:"100%",videoId:this.params.videoid,events:{onReady:this._onReady.bind(this),onStateChange:this._onStateChange.bind(this),
onError:this._onError.bind(this)}})}.bind(this))},_onStateChange:function(t){var e=Math.round(this._player.getCurrentTime()),i={};
i[YT.PlayerState.PLAYING]="started",i[YT.PlayerState.PAUSED]="paused",i[YT.PlayerState.ENDED]="ended",
i[t.data]&&this._triggerEvent(i[t.data],{url:this.params.url,time:e})},_onError:function(t){this._triggerEvent("error",{
url:this.params.url,time:Math.round(this._player.getCurrentTime()),code:t.data})},_onReady:function(){
this.params.autoplay&&this._player.playVideo()}}),BEM.blocks.player.registerHosting({youtube:"youtube",
"youtube.com":"youtube","www.youtube.com":"youtube"}),BEM.blocks.player.registerNoTransport("youtube");
}(),_borschik("SJeR6nV8TKZPb7uVoJfJrfYQ75U")&&(BEM.DOM.decl({block:"player",modName:"hosting",modVal:"mailru"
},{_onHostingsPostMessage:function(t){if(t=t.originalEvent,this._isCorrectOrigin(t.origin)){var e={start:"started",
pause:"paused",stop:"ended"};e[t.data]&&this._triggerEvent(e[t.data],{url:this.params.url})}},_isCorrectOrigin:function(t){
return-1!==t.indexOf("mail.ru")}}),BEM.blocks.player.registerHosting({maulru:"mailru","video.mail.ru":"mailru"
})),_borschik("dPnXPO-08XipMO6eucXc7QU-_0E")&&(BEM.DOM.decl({block:"player",modName:"hosting",modVal:"rutube"
},{_onHostingsPostMessage:function(t){if(t=t.originalEvent,this._isCorrectOrigin(t.origin)){var e=$.parseJSON(t.data),i=e.type,n=e.data&&e.data.time,s=e.data&&e.data.state;
"player:currentTime"===i?this._setCurrentTime(n):"player:changeState"===i&&s?this._triggerPlayerStateEvent(s):"player:playComplete"===i&&this._triggerPlayerStateEvent("ended");
}},_isCorrectOrigin:function(t){return-1!==t.indexOf("rutube")},_setCurrentTime:function(t){this._time=t;
},_getCurrentTime:function(){return Math.round(this._time)||0},_triggerPlayerStateEvent:function(t){var e={
playing:"started",paused:"paused",ended:"ended"};"lockScreenOn"===t?this._triggerEvent("error",{url:this.params.url,
code:this.__self.SOFT_404_ERROR_CODE}):e[t]&&this._triggerEvent(e[t],{url:this.params.url,time:this._getCurrentTime()
})}}),BEM.blocks.player.registerHosting({rutube:"rutube","rutube.ru":"rutube"})),_borschik("iu6m7qYfC7iWqTYjFKofj_hB63g")&&BEM.DOM.decl({
block:"player",modName:"transport",modVal:"ajax"},{DEFAULT_EMBED_URL:"/video/hosting?action=generateEmbedSimple",
_update:function(){this.__base.apply(this,arguments);var t=this.params;this._deferred&&this._deferred.reject(),
this._loadPlayer(function(e){"undefined"!=typeof e&&(e.autoplay||e.noautoplay)?this._updateDomElem(t.autoplay?e.autoplay.html:e.noautoplay.html):this.trigger("load-error");
}.bind(this))},_loadPlayer:function(t){this._deferred=$.Deferred(),this.trigger("load-starts"),$.ajax({
url:this.DEFAULT_EMBED_URL,context:this,dataType:"json",timeout:1500,data:{properties:this.params.properties||"",
url:this.params.url}}).done(function(t){this._deferred&&this._deferred.resolve(t),this._cleanPlayerLoad(),
this.trigger("load-success")}).fail(function(t,e){this._cleanPlayerLoad(),this.trigger("load-error",[e]);
}),this._deferred.promise().done(t)},clean:function(){return this.__base.apply(this,arguments),this._ajax&&(this._ajax.abort(),
this._cleanPlayerLoad()),this},_cleanPlayerLoad:function(){delete this._deferred,delete this._ajax}}),
_borschik("yANtkX9tCdk7iOpimA5o4cya-us")&&BEM.DOM.decl({block:"player",modName:"transport",modVal:"direct"
},{_update:function(){this.__base.apply(this,arguments);var t=this.params,e="";return t.autoplay&&t.autoplayHtml?e=t.autoplayHtml:!t.autoplay&&t.noAutoplayHtml&&(e=t.noAutoplayHtml),
e?void this._updateDomElem(e):void 0}}),_borschik("_Rp-S27kVuL4khfj0x3uC_rQ4CQ")&&BEM.DOM.decl({block:"player",
modName:"iframe-listener",modVal:"yes"},{_startListenHostingsPostMessage:function(){this.__self._alreadyListeningHostingsPostMessages||(this.bindToWin("message",this._onHostingsPostMessage.bind(this)),
this.__self._alreadyListeningHostingsPostMessages=!0)}}),_borschik("68NEhNk_lq9mEOTOgbuXsQm1B0U")&&!function(){
function t(){var t,e,i,n,s,o=["constructor","setParams","getDefaultParams","destruct","clean"],r={};for(t=Object.keys(BEM.blocks.player.prototype),
e=0,i=t.length;i>e;e++)n=t[e],s=BEM.blocks.player.prototype[n],$.isFunction(s)&&0!==n.indexOf("_")&&-1===o.indexOf(n)&&!function(t){
r[t]=function(){return this._callRemoteMethod.call(this,t,Array.prototype.slice.call(arguments))}}(n);
BEM.DOM.decl({block:"player",modName:"remote",modVal:"client"},r)}BEM.DOM.decl({block:"player",modName:"remote",
modVal:"client"},{onSetMod:{js:function(){this._ready=!1,this._readyCommands=[],this._callPromises={},
this._generateId(),this._startListenPostMessage(),this._iframe=this.elem("iframe")[0],this.params.remoteServerUrl?this._updateIframeUrl(this.params.remoteServerUrl):this._updateIframeUrl(this._getServersUrl());
}},_getServersUrl:function(){return"//yastatic.net/video-player/"+this.__self.STATIC_VERSION+"/pages-desktop/player/player.html";
},_update:function(){var t=$.extend(this.params,{});return this.hasMod("transport","ajax")?void this._loadPlayer(function(e){
"undefined"!=typeof e&&(e.autoplay||e.noautoplay)?(t.noAutoplayHtml=e.noautoplay.html,t.autoplayHtml=e.autoplay.html,
this._callRemoteMethod("setParams",[t])):this.trigger("load-error")}.bind(this)):void this._callRemoteMethod("setParams",[t]);
},_generateId:function(){this._id=this._uniqueId("player-remote-")},_updateIframeUrl:function(t){this._iframe.src=t+"#"+this._id;
},_startListenPostMessage:function(){this.bindToWin("message",this._onPostMessage.bind(this))},_onPostMessage:function(t){
var e,i=t.originalEvent;i.source===this._iframe.contentWindow&&(e=$.parseJSON(i.data),setTimeout(function(){
"event"===e.type?this._processPostMessageEvent(e):"result"===e.type&&this._processPostMessageResult(e);
}.bind(this),1))},_processPostMessageEvent:function(t){"init"===t.name?(this._ready=!0,this._callRemoteDelayedMethods()):this.trigger(t.name,t.data);
},_processPostMessageResult:function(t){this._callPromises[t.callId].resolve(t.data),delete this._callPromises[t.callId];
},_callRemoteMethod:function(t,e,i){return i||(i=this._uniqueId(),this._callPromises[i]=$.Deferred()),
this._ready?this._iframe.contentWindow.postMessage(JSON.stringify({type:"command",name:t,args:e,callId:i,
id:this._id}),"*"):this._readyCommands.push([t,e,i]),this._callPromises[i].promise()},_callRemoteDelayedMethods:function(){
for(;this._readyCommands.length;)this._callRemoteMethod.apply(this,this._readyCommands.shift())}}),t();
}(),_borschik("4AFPRVV7Lk4zhKK6TtWLaI8R6CE")&&BEM.DOM.decl("player",{},{STATIC_VERSION:"0x7cfcfe9"}),
_borschik("t8yxWWLAbwJ61lZDWnD89j8ffrw")&&BEM.DOM.decl("player",{_uniqueId:function(){var t=0;return function(e){
return(e||"")+ ++t}}()}),_borschik("0F4xLmsAbPViB0kPmOzDw0KRgas")&&!function(){BEM.DOM.decl({block:"player",
modName:"hosting",modVal:"yavideo"},{_update:function(){this.__base.apply(this,arguments);var t=this.params,e='<iframe src="'+t.url+(t.autoplay?"&autoplay=1":"")+'"></iframe>',i=this;
this._updateDomElem(e).domElem.find("iframe").on("load",function(){i.trigger("load-success")})}}),BEM.blocks.player.registerHosting({
"yandex.video":"yavideo",yavideo:"yavideo"}),BEM.blocks.player.registerNoTransport("yavideo")}(),_borschik("qq79NLb1nmsw5R5xsm5PiTWM24s")&&BEM.DOM.decl("video-thumb",{},{
live:function(){this.liveBindTo("tap leftclick",function(t){this.getMod("playable")&&t.preventDefault();
})}}),function(t,e,i){function n(){f&&_&&console.log.apply(console,arguments)}function s(t){return"string"==typeof t&&(t={
block:t}),t.block+(t.elem?u+t.elem:"")+(t.modName?h+t.modName+h+t.modVal:"")}function o(t){var e={};return t.split(u).forEach(function(t,i){
var n=[i?"elem":"block","mod","val"];t.split(h).forEach(function(t,i){e[n[i]]=t})}),e}function r(t){return t?p.push(t):!1;
}function a(){return p.length&&p.pop()}function c(){this._lang="",this._prj="lego",this._keyset="",this._key="";
}if("function"==typeof e.I18N&&e.I18N._proto)return e.I18N;"undefined"==typeof i18n&&(i18n={}),BEM=e;var h="_",u="__",l="ru",d={},p=[],f=!1,_="undefined"!=typeof console&&"function"==typeof console.log;
c.prototype={lang:function(t){return this._lang=t,this},project:function(t){return this._prj=t,this},
keyset:function(t,e){return e&&r(this._keyset),this._keyset=s(t),this},key:function(t){return this._key=t,
this},decl:function(t){var e=o(this._keyset),i="i-tanker"===e.block?"tanker":this._prj,n=e.elem||this._keyset,s=this._key;
i=i18n[i]||(i18n[i]={}),n=i[n]||(i[n]={}),n[s]="function"==typeof t?t:function(e){return t};var r=d[this._lang]||(d[this._lang]={}),a=r[this._keyset]||(r[this._keyset]={});
a[s]=t},val:function(t,e){var i=d[this._lang]&&d[this._lang][this._keyset],s="keyset: "+this._keyset+" key: "+this._key+" (lang: "+this._lang+")";
if(!i)return n("[I18N_NO_KEYSET] %s",s),"";i=i[this._key];var o=typeof i;return"undefined"===o?(n("[I18N_NO_VALUE] %s",s),
""):"string"===o?i:(e||(e=this),i.call(e,t))},_cache:function(){return d}},e.I18N=function(t){var e=function(t,i,n){
return e.keyset(t).key(i,n)};return e._proto=t,e.project=function(t){return this._proto.project(t),this;
},e.keyset=function(t){return this._proto.keyset(t,!0),this},e.key=function(t,i){var n,s,o=this._proto;
return o.lang(this._lang).key(t),n=o.val.call(o,i,e),s=a(),s&&o.keyset(s,!1),n},e.decl=function(t,e,i){
var n,s=this._proto;i||(i={}),i.lang&&s.lang(i.lang),s.keyset(t);for(n in e)e.hasOwnProperty(n)&&s.key(n).decl(e[n]);
return this},e.lang=function(t){return"undefined"!=typeof t&&(this._lang=t),this._lang},e.debug=function(t){
f=!!t},e.lang(l),e}(new c)}(this,"undefined"==typeof BEM?{}:BEM),BEM.I18N.decl("b-keyboard-loader",{keyboard:"Клавиатура"
},{lang:"ru"}),BEM.I18N.decl("competitors_spok_yes",{"Искать в других поисковых системах":"Искать в других поисковых системах"
},{lang:"ru"}),BEM.I18N.decl("copyright",{link:function(t){return"ООО «"+t.content+"»"},yandex:"Яндекс"
},{lang:"ru"}),BEM.I18N.decl("copyright_spok_yes",{"ООО «Яндекс»":"ООО «Яндекс»"},{lang:"ru"}),BEM.I18N.decl("feedback",{
"Шокирующий / Неприличный контент":"Шокирующий / Неприличный контент"},{lang:"ru"}),BEM.I18N.decl("feedback_spok_yes",{
"В подсказке есть ошибки":"В подсказке есть ошибки","Ваш отзыв будет использован алгоритмами Поиска.":"Ваш отзыв будет использован алгоритмами Поиска.",
"Вернуться на Яндекс":"Вернуться на Яндекс","Картинка не подходит":"Картинка не подходит","На всю страницу":"На всю страницу",
"На этот результат":"На этот результат","Несоответствие запросу":"Несоответствие запросу","Подсказка не соответствует запросу":"Подсказка не соответствует запросу",
"Пожаловаться":"Пожаловаться","Пожаловаться на видео":"Пожаловаться на видео","Пожаловаться на картинки":"Пожаловаться на картинки",
"Порнография":"Порнография","Причина жалобы":"Причина жалобы","Спасибо, что помогаете делать Яндекс лучше!":"Спасибо, что помогаете делать Яндекс лучше!",
"Ссылка неправильная":"Ссылка неправильная","Что не так с подсказкой?":"Что не так с подсказкой?","Шокирующая или неприятная информация":"Шокирующая или неприятная информация",
"Шокирующее или неприятное видео":"Шокирующее или неприятное видео","Шокирующие или неприятные картинки":"Шокирующие или неприятные картинки"
},{lang:"ru"}),BEM.I18N.decl("footer",{about:"О компании","about-url":"//company.yandex.ru",advert:"Реклама",
"advert-url":"//advertising.yandex.ru/kupislova.xml?advertising",agreement:"Пользовательское соглашение",
apps:"Мобильные приложения","apps-url":"//mobile.yandex.ru",beta:"β-версия","copyright-notice":"",design:"Дизайн",
"design-artlebedev":"Студия Артемия Лебедева","design-artlebedev-url":"http://www.artlebedev.ru",mobile:"Мобильная версия",
"privacy-policy":"","services-button-value":"Перейти",stat:"Статистика","terms-of-service":"",termsofuse:"Лицензия на поиск",
"termsofuse-url":"//legal.yandex.ru/termsofuse/",vacancies:"Вакансии","yandex-is-local":"Яндекс локален",
"yandex-is-not-local":"Как сделать Яндекс локальным"},{lang:"ru"}),BEM.I18N.decl("i-services",{404:"404",
adresa:"Адреса",advertising:"Реклама",afisha:"Афиша",all:"Все сервисы",api:"API",appsearch:"Приложения",
auto:"Авто",avia:"Авиабилеты",aziada:"Азиада",ba:"Баян",backapv:"Партнер Я.Карт",balance:"Баланс",bar:"Бар",
"bar-ie":"Бар для ИЕ","bar-ie9":"Бар для ИЕ9",bayan:"Баннеры Яндекса",blogs:"Блоги",books:"Книги",browser:"Браузер",
calendar:"Календарь",captcha:"ой...",catalogwdgt:"Каталог виджетов",chrome:"Хром с поиском Яндекса",city:"Города",
cityday:"День города",collection:"Коллекция",company:"Компания",contest:"Contest",desktop:"Персональный поиск",
direct:"Директ","direct.market":"Маркет",disk:"Диск",ege:"ЕГЭ",expert:"Эксперт",feedback:"Обратная связь",
feedback2:"Обратная связь",ff:"ФФ с поиском Яндекса",fotki:"Фотки",fresh:"Свежее",games:"Игрушки",geocontext:"Геоконтекст",
goroda:"Города",help:"Помощь",i:"Мои сервисы",ie:"ИЕ с поиском Яндекса",images:"Картинки","images-com":"Картинки",
interests:"Интересы",internet:"Интернет",kassa:"Касса",keyboard:"Клавиатура",kraski:"Краски",kuda:"Куда все идут",
large:"Яндекс для слабовидящих",legal:"Правовые документы",lenta:"Лента",libra:"Библиотека",literacy:"Неделя борьбы за грамотность",
local:"Локальная сеть",lost:"Незабудки",love:"День взаимного тяготения — 13 августа",mail:"Почта",maps:"Карты",
"maps-wiki":"Народная карта",market:"Маркет","market.advertising":"Маркет",master:"Мастер",metrika:"Метрика",
metro:"Метро",mobile:"Мобильный",moikrug:"Мой Круг",money:"Деньги",museums:"Дни исторического и культурного наследия",
music:"Музыка","music-partner":"Музыка: статистика",nahodki:"Мои находки",nano:"Нано",newhire:"Наниматор",
news:"Новости",notifications:"Нотификационная панель",oauth:"Авторизация",online:"Онлайн",openid:"OpenID",
opera:"Opera Software",opinion:"Цитаты",partners:"Рекламная сеть",partnersearch:"Поиск для партнеров",
passport:"Паспорт",pdd:"Почта для домена",peoplesearch:"Люди",perevod:"Перевод",probki:"Пробки",pulse:"блоги: пульс",
punto:"Punto switcher",pvo:"Ответы",rabota:"Работа",ramazan:"",rasp:"Расписания",realty:"Недвижимость",
referats:"Рефераты",rk:"Есть вопросы?",root:"Яндекс.Олимпиада для Unix администраторов",school:"Школа",
search:"Поиск",server:"Сервер",shtrafi:"Штрафы",site:"Поиск для сайта",slovari:"Словари",so:"Самооборона",
social:"Социализм",soft:"Программы",sport:"Спорт",sprav:"Справочник",start:"Стартовая страница",stat:"Статистика",
subs:"Подписки",taxi:"Такси",terms:"Разговорник",tests:"Тесты и опросы",tickets:"Билеты",time:"Яндекс.Время",
toster:"Тосты",translate:"Перевод",tune:"Настройки",tv:"ТВ",uslugi:"Услуги",video:"Видео","video-com":"Видео",
vno:"ВНО",wdgt:"Виджеты",weather:"Погода",webmaster:"Вебмастер",widgets:"Виджеты",wordstat:"Статистика",
wow:"Я.ру",www:"Поиск",xmlsearch:"XML",yaca:"Каталог",yamb:"Медийные баннеры",zakladki:"Закладки"},{lang:"ru"
}),BEM.I18N.decl("i-tanker__dynamic",{gender:function(t){return function(t){return t[t.gender]}.call(this,t);
},plural:function(t){return function(t){var e=isNaN(parseInt(t.count))?0:t.count,i=e%10,n=e%100;return 1==i&&11!=n?t.one:i>1&&5>i&&(10>n||n>20)?t.some:t.many;
}.call(this,t)},plural_adv:function(t){return function(t){var e=isNaN(parseInt(t.count))?0:t.count;return 0===e?t.none:this.keyset("i-tanker__dynamic").key("plural",{
count:t.count,one:t.one,some:t.some,many:t.many})}.call(this,t)},toggle:function(t){return function(t){
return Boolean(t.condition)?t["true"]:t["false"]}.call(this,t)}},{lang:"ru"}),BEM.I18N.decl("input",{
"Расширенный поиск":"Расширенный поиск"},{lang:"ru"}),BEM.I18N.decl("logo",{yandex:"Яндекс"},{lang:"ru"
}),BEM.I18N.decl("navigation",{more:"Ещё","search-also":"Найти также","search-on":function(t){return"Найти "+t.query+" в других сервисах";
}},{lang:"ru"}),BEM.I18N.decl("navigation_spok_yes",{"Ещё":"Ещё"},{lang:"ru"}),BEM.I18N.decl("pager_spok_yes",{
"Страницы":"Страницы"},{lang:"ru"}),BEM.I18N.decl("search2",{"search-button-text":"Найти","search-input-label":"Запрос",
"search-service-label":"Поиск по сервису","search-web-label":"Поиск в интернете"},{lang:"ru"}),BEM.I18N.decl("suggest2",{
fact:"Факты",group:"Группа подсказок",nah:"Вы искали",nav:"Сайт",text:"Поиск",traffic:"Пробки",weather:"Погода"
},{lang:"ru"}),BEM.I18N.decl("suggest2-item",{"quick-answer":"Быстрый ответ"},{lang:"ru"}),BEM.I18N.decl("user",{
"Почта":"Почта"},{lang:"ru"}),BEM.I18N.lang("ru")}