(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[543],{2176:function(t){"use strict";t.exports=function(t,e,r,n,i,o,a,c){if(!t){var u;if(void 0===e)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[r,n,i,o,a,c],l=0;(u=new Error(e.replace(/%s/g,(function(){return s[l++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}},3050:function(t,e,r){"use strict";r.d(e,{B6:function(){return ut},ql:function(){return ht}});var n,i,o=r(4925),a=r(7326),c=r(136),u=r(7277),s=r(3144),l=r(5671),f=r(3433),p=r(4942),d=r(1413),y=r(9439),h=r(2791),m=r(5121),g=r.n(m),v=r(2176),b=r.n(v),T=r(9613),O=r.n(T),w=["children"],A=["children"],Z=function(t){return t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t}(Z||{}),k={rel:["amphtml","canonical","alternate"]},C={type:["application/ld+json"]},j={charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},x=Object.values(Z),S={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},E=Object.entries(S).reduce((function(t,e){var r=(0,y.Z)(e,2),n=r[0];return t[r[1]]=n,t}),{}),P="data-rh",M="defaultTitle",D="defer",L="encodeSpecialCharacters",H="onChangeClientState",I="titleTemplate",N="prioritizeSeoTags",U=function(t,e){for(var r=t.length-1;r>=0;r-=1){var n=t[r];if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}return null},z=function(t){var e=U(t,"title"),r=U(t,I);if(Array.isArray(e)&&(e=e.join("")),r&&e)return r.replace(/%s/g,(function(){return e}));var n=U(t,M);return e||n||void 0},_=function(t){return U(t,H)||function(){}},q=function(t,e){return e.filter((function(e){return"undefined"!==typeof e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return(0,d.Z)((0,d.Z)({},t),e)}),{})},B=function(t,e){return e.filter((function(t){return"undefined"!==typeof t.base})).map((function(t){return t.base})).reverse().reduce((function(e,r){if(!e.length)for(var n=Object.keys(r),i=0;i<n.length;i+=1){var o=n[i].toLowerCase();if(-1!==t.indexOf(o)&&r[o])return e.concat(r)}return e}),[])},R=function(t,e,r){var n={};return r.filter((function(e){return!!Array.isArray(e[t])||("undefined"!==typeof e[t]&&(r="Helmet: ".concat(t,' should be of type "Array". Instead found type "').concat(typeof e[t],'"'),console&&"function"===typeof console.warn&&console.warn(r)),!1);var r})).map((function(e){return e[t]})).reverse().reduce((function(t,r){var i={};r.filter((function(t){for(var r,o=Object.keys(t),a=0;a<o.length;a+=1){var c=o[a],u=c.toLowerCase();-1===e.indexOf(u)||"rel"===r&&"canonical"===t[r].toLowerCase()||"rel"===u&&"stylesheet"===t[u].toLowerCase()||(r=u),-1===e.indexOf(c)||"innerHTML"!==c&&"cssText"!==c&&"itemprop"!==c||(r=c)}if(!r||!t[r])return!1;var s=t[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][s]&&(i[r][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(i),a=0;a<o.length;a+=1){var c=o[a],u=(0,d.Z)((0,d.Z)({},n[c]),i[c]);n[c]=u}return t}),[]).reverse()},V=function(t,e){if(Array.isArray(t)&&t.length)for(var r=0;r<t.length;r+=1){if(t[r][e])return!0}return!1},F=function(t){return Array.isArray(t)?t.join(""):t},Y=function(t,e){return Array.isArray(t)?t.reduce((function(t,r){return!function(t,e){for(var r=Object.keys(t),n=0;n<r.length;n+=1)if(e[r[n]]&&e[r[n]].includes(t[r[n]]))return!0;return!1}(r,e)?t.default.push(r):t.priority.push(r),t}),{priority:[],default:[]}):{default:t,priority:[]}},K=function(t,e){return(0,d.Z)((0,d.Z)({},t),{},(0,p.Z)({},e,void 0))},W=["noscript","script","style"],$=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(t){return Object.keys(t).reduce((function(e,r){var n="undefined"!==typeof t[r]?"".concat(r,'="').concat(t[r],'"'):"".concat(r);return e?"".concat(e," ").concat(n):n}),"")},J=function(t,e,r,n){var i=G(r),o=F(e);return i?"<".concat(t," ").concat(P,'="true" ').concat(i,">").concat($(o,n),"</").concat(t,">"):"<".concat(t," ").concat(P,'="true">').concat($(o,n),"</").concat(t,">")},Q=function(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return e.reduce((function(e,n){var i=n,o=Object.keys(i).filter((function(t){return!("innerHTML"===t||"cssText"===t)})).reduce((function(t,e){var n="undefined"===typeof i[e]?e:"".concat(e,'="').concat($(i[e],r),'"');return t?"".concat(t," ").concat(n):n}),""),a=i.innerHTML||i.cssText||"",c=-1===W.indexOf(t);return"".concat(e,"<").concat(t," ").concat(P,'="true" ').concat(o).concat(c?"/>":">".concat(a,"</").concat(t,">"))}),"")},X=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[S[r]||r]=t[r],e}),e)},tt=function(t,e,r){var n=(0,p.Z)({key:e},P,!0),i=X(r,n);return[h.createElement("title",i,e)]},et=function(t,e){return e.map((function(e,r){var n=(0,p.Z)({key:r},P,!0);return Object.keys(e).forEach((function(t){var r=S[t]||t;if("innerHTML"===r||"cssText"===r){var i=e.innerHTML||e.cssText;n.dangerouslySetInnerHTML={__html:i}}else n[r]=e[t]})),h.createElement(t,n)}))},rt=function(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];switch(t){case"title":return{toComponent:function(){return tt(0,e.title,e.titleAttributes)},toString:function(){return J(t,e.title,e.titleAttributes,r)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return X(e)},toString:function(){return G(e)}};default:return{toComponent:function(){return et(t,e)},toString:function(){return Q(t,e,r)}}}},nt=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,i=void 0===n||n,o=t.htmlAttributes,a=t.noscriptTags,c=t.styleTags,u=t.title,s=void 0===u?"":u,l=t.titleAttributes,p=t.prioritizeSeoTags,d=t.linkTags,y=t.metaTags,h=t.scriptTags,m={toComponent:function(){},toString:function(){return""}};if(p){var g=function(t){var e=t.metaTags,r=t.linkTags,n=t.scriptTags,i=t.encode,o=Y(e,j),a=Y(r,k),c=Y(n,C);return{priorityMethods:{toComponent:function(){return[].concat((0,f.Z)(et("meta",o.priority)),(0,f.Z)(et("link",a.priority)),(0,f.Z)(et("script",c.priority)))},toString:function(){return"".concat(rt("meta",o.priority,i)," ").concat(rt("link",a.priority,i)," ").concat(rt("script",c.priority,i))}},metaTags:o.default,linkTags:a.default,scriptTags:c.default}}(t);m=g.priorityMethods,d=g.linkTags,y=g.metaTags,h=g.scriptTags}return{priority:m,base:rt("base",e,i),bodyAttributes:rt("bodyAttributes",r,i),htmlAttributes:rt("htmlAttributes",o,i),link:rt("link",d,i),meta:rt("meta",y,i),noscript:rt("noscript",a,i),script:rt("script",h,i),style:rt("style",c,i),title:rt("title",{title:s,titleAttributes:l},i)}},it=[],ot=!("undefined"===typeof window||!window.document||!window.document.createElement),at=(0,s.Z)((function t(e,r){var n=this;(0,l.Z)(this,t),(0,p.Z)(this,"instances",[]),(0,p.Z)(this,"canUseDOM",ot),(0,p.Z)(this,"context",void 0),(0,p.Z)(this,"value",{setHelmet:function(t){n.context.helmet=t},helmetInstances:{get:function(){return n.canUseDOM?it:n.instances},add:function(t){(n.canUseDOM?it:n.instances).push(t)},remove:function(t){var e=(n.canUseDOM?it:n.instances).indexOf(t);(n.canUseDOM?it:n.instances).splice(e,1)}}}),this.context=e,this.canUseDOM=r||!1,r||(e.helmet=nt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))})),ct=h.createContext({}),ut=(n=function(t){(0,c.Z)(r,t);var e=(0,u.Z)(r);function r(t){var n;return(0,l.Z)(this,r),n=e.call(this,t),(0,p.Z)((0,a.Z)(n),"helmetData",void 0),n.helmetData=new at(n.props.context||{},r.canUseDOM),n}return(0,s.Z)(r,[{key:"render",value:function(){return h.createElement(ct.Provider,{value:this.helmetData.value},this.props.children)}}]),r}(h.Component),(0,p.Z)(n,"canUseDOM",ot),n),st=function(t,e){var r,n=document.head||document.querySelector("head"),i=n.querySelectorAll("".concat(t,"[").concat(P,"]")),o=[].slice.call(i),a=[];return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i))if("innerHTML"===i)n.innerHTML=e.innerHTML;else if("cssText"===i)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=i,u="undefined"===typeof e[c]?"":e[c];n.setAttribute(i,u)}n.setAttribute(P,"true"),o.some((function(t,e){return r=e,n.isEqualNode(t)}))?o.splice(r,1):a.push(n)})),o.forEach((function(t){var e;return null===(e=t.parentNode)||void 0===e?void 0:e.removeChild(t)})),a.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:a}},lt=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute(P),i=n?n.split(","):[],o=(0,f.Z)(i),a=Object.keys(e),c=0,u=a;c<u.length;c++){var s=u[c],l=e[s]||"";r.getAttribute(s)!==l&&r.setAttribute(s,l),-1===i.indexOf(s)&&i.push(s);var p=o.indexOf(s);-1!==p&&o.splice(p,1)}for(var d=o.length-1;d>=0;d-=1)r.removeAttribute(o[d]);i.length===o.length?r.removeAttribute(P):r.getAttribute(P)!==a.join(",")&&r.setAttribute(P,a.join(","))}},ft=function(t,e){var r=t.baseTag,n=t.bodyAttributes,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,s=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;lt("body",n),lt("html",i),function(t,e){"undefined"!==typeof t&&document.title!==t&&(document.title=F(t)),lt("title",e)}(f,p);var d={baseTag:st("base",r),linkTags:st("link",o),metaTags:st("meta",a),noscriptTags:st("noscript",c),scriptTags:st("script",s),styleTags:st("style",l)},y={},h={};Object.keys(d).forEach((function(t){var e=d[t],r=e.newTags,n=e.oldTags;r.length&&(y[t]=r),n.length&&(h[t]=d[t].oldTags)})),e&&e(),u(t,y,h)},pt=null,dt=function(t){pt&&cancelAnimationFrame(pt),t.defer?pt=requestAnimationFrame((function(){ft(t,(function(){pt=null}))})):(ft(t),pt=null)},yt=function(t){(0,c.Z)(r,t);var e=(0,u.Z)(r);function r(){var t;(0,l.Z)(this,r);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return t=e.call.apply(e,[this].concat(i)),(0,p.Z)((0,a.Z)(t),"rendered",!1),t}return(0,s.Z)(r,[{key:"shouldComponentUpdate",value:function(t){return!O()(t,this.props)}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this.props.context.helmetInstances.remove(this),this.emitChange()}},{key:"emitChange",value:function(){var t,e=this.props.context,r=e.helmetInstances,n=e.setHelmet,i=null,o=(t=r.get().map((function(t){var e=(0,d.Z)({},t.props);return delete e.context,e})),{baseTag:B(["href"],t),bodyAttributes:q("bodyAttributes",t),defer:U(t,D),encode:U(t,L),htmlAttributes:q("htmlAttributes",t),linkTags:R("link",["rel","href"],t),metaTags:R("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:R("noscript",["innerHTML"],t),onChangeClientState:_(t),scriptTags:R("script",["src","innerHTML"],t),styleTags:R("style",["cssText"],t),title:z(t),titleAttributes:q("titleAttributes",t),prioritizeSeoTags:V(t,N)});ut.canUseDOM?dt(o):nt&&(i=nt(o)),n(i)}},{key:"init",value:function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())}},{key:"render",value:function(){return this.init(),null}}]),r}(h.Component),ht=(i=function(t){(0,c.Z)(r,t);var e=(0,u.Z)(r);function r(){return(0,l.Z)(this,r),e.apply(this,arguments)}return(0,s.Z)(r,[{key:"shouldComponentUpdate",value:function(t){return!g()(K(this.props,"helmetData"),K(t,"helmetData"))}},{key:"mapNestedChildrenToProps",value:function(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error("<".concat(t.type," /> elements are self-closing and can not contain children. Refer to our API for more information."))}}},{key:"flattenArrayTypeChildren",value:function(t,e,r,n){return(0,d.Z)((0,d.Z)({},e),{},(0,p.Z)({},t.type,[].concat((0,f.Z)(e[t.type]||[]),[(0,d.Z)((0,d.Z)({},r),this.mapNestedChildrenToProps(t,n))])))}},{key:"mapObjectTypeChildren",value:function(t,e,r,n){var i;switch(t.type){case"title":return(0,d.Z)((0,d.Z)({},e),{},(i={},(0,p.Z)(i,t.type,n),(0,p.Z)(i,"titleAttributes",(0,d.Z)({},r)),i));case"body":return(0,d.Z)((0,d.Z)({},e),{},{bodyAttributes:(0,d.Z)({},r)});case"html":return(0,d.Z)((0,d.Z)({},e),{},{htmlAttributes:(0,d.Z)({},r)});default:return(0,d.Z)((0,d.Z)({},e),{},(0,p.Z)({},t.type,(0,d.Z)({},r)))}}},{key:"mapArrayTypeChildrenToProps",value:function(t,e){var r=(0,d.Z)({},e);return Object.keys(t).forEach((function(e){r=(0,d.Z)((0,d.Z)({},r),{},(0,p.Z)({},e,t[e]))})),r}},{key:"warnOnInvalidChildren",value:function(t,e){return b()(x.some((function(e){return t.type===e})),"function"===typeof t.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types ".concat(x.join(", ")," are allowed. Helmet does not support rendering <").concat(t.type,"> elements. Refer to our API for more information.")),b()(!e||"string"===typeof e||Array.isArray(e)&&!e.some((function(t){return"string"!==typeof t})),"Helmet expects a string as a child of <".concat(t.type,">. Did you forget to wrap your children in braces? ( <").concat(t.type,">{``}</").concat(t.type,"> ) Refer to our API for more information.")),!0}},{key:"mapChildrenToProps",value:function(t,e){var r=this,n={};return h.Children.forEach(t,(function(t){if(t&&t.props){var i=t.props,a=i.children,c=(0,o.Z)(i,w),u=Object.keys(c).reduce((function(t,e){return t[E[e]||e]=c[e],t}),{}),s=t.type;switch("symbol"===typeof s?s=s.toString():r.warnOnInvalidChildren(t,a),s){case"Symbol(react.fragment)":e=r.mapChildrenToProps(a,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=r.flattenArrayTypeChildren(t,n,u,a);break;default:e=r.mapObjectTypeChildren(t,e,u,a)}}})),this.mapArrayTypeChildrenToProps(n,e)}},{key:"render",value:function(){var t=this.props,e=t.children,r=(0,o.Z)(t,A),n=(0,d.Z)({},r),i=r.helmetData;(e&&(n=this.mapChildrenToProps(e,n)),!i||i instanceof at)||(i=new at(i.context,!0),delete n.helmetData);return i?h.createElement(yt,(0,d.Z)((0,d.Z)({},n),{},{context:i.value})):h.createElement(ct.Consumer,null,(function(t){return h.createElement(yt,(0,d.Z)((0,d.Z)({},n),{},{context:t}))}))}}]),r}(h.Component),(0,p.Z)(i,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),i)},5121:function(t){var e="undefined"!==typeof Element,r="function"===typeof Map,n="function"===typeof Set,i="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(t)){if((c=t.length)!=a.length)return!1;for(u=c;0!==u--;)if(!o(t[u],a[u]))return!1;return!0}if(r&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=t.entries();!(u=l.next()).done;)if(!o(u.value[1],a.get(u.value[0])))return!1;return!0}if(n&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((c=t.length)!=a.length)return!1;for(u=c;0!==u--;)if(t[u]!==a[u])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf&&"function"===typeof t.valueOf&&"function"===typeof a.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString&&"function"===typeof t.toString&&"function"===typeof a.toString)return t.toString()===a.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(u=c;0!==u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(e&&t instanceof Element)return!1;for(u=c;0!==u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!t.$$typeof)&&!o(t[s[u]],a[s[u]]))return!1;return!0}return t!==t&&a!==a}t.exports=function(t,e){try{return o(t,e)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},2119:function(t,e,r){"use strict";r.d(e,{w_:function(){return d}});var n=r(2791),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(i),a=["attr","size","title"];function c(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function u(){return u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},u.apply(this,arguments)}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t){return t&&t.map((function(t,e){return n.createElement(t.tag,l({key:e},t.attr),p(t.child))}))}function d(t){return function(e){return n.createElement(y,u({attr:l({},t.attr)},e),p(t.child))}}function y(t){var e=function(e){var r,i=t.attr,o=t.size,s=t.title,f=c(t,a),p=o||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,f,{className:r,style:l(l({color:t.color||e.color},e.style),t.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),t.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(t){return e(t)})):e(i)}}}]);
//# sourceMappingURL=543.7387420d.chunk.js.map