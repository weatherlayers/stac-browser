(function(t){function e(e){for(var a,n,l=e[0],s=e[1],c=e[2],u=0,f=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&f.push(i[n][0]),i[n]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,n=1;n<r.length;n++){var l=r[n];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},n={app:0},i={app:0},o=[];function l(t){return s.p+"js/"+({"catalog~item":"catalog~item",catalog:"catalog",item:"item"}[t]||t)+"."+{"catalog~item":"0c1b52e0",catalog:"5418f424",item:"d74d8e41","chunk-2d0bd977":"2c692501","chunk-73658270":"051321f4","chunk-0b128a4c":"78c9d4ea","chunk-6cb9486e":"ba09837b","chunk-320ef7f6":"2030ad1e","chunk-2d21ee9d":"91182cf2"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r={"catalog~item":1,catalog:1,item:1,"chunk-0b128a4c":1,"chunk-6cb9486e":1,"chunk-320ef7f6":1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise((function(e,r){for(var a="css/"+({"catalog~item":"catalog~item",catalog:"catalog",item:"item"}[t]||t)+"."+{"catalog~item":"2f92682e",catalog:"18826515",item:"61ddf448","chunk-2d0bd977":"31d6cfe0","chunk-73658270":"31d6cfe0","chunk-0b128a4c":"39b38f66","chunk-6cb9486e":"9ff8924f","chunk-320ef7f6":"ff60eaa6","chunk-2d21ee9d":"31d6cfe0"}[t]+".css",i=s.p+a,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var c=o[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===i))return e()}var f=document.getElementsByTagName("style");for(l=0;l<f.length;l++){c=f[l],u=c.getAttribute("data-href");if(u===a||u===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete n[t],d.parentNode.removeChild(d),r(o)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){n[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,r){a=i[t]=[e,r]}));e.push(a[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=l(t);var f=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var r=i[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",f.name="ChunkLoadError",f.type=a,f.request=n,r[1](f)}i[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"025e":function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var a=r("53ca"),n=r("d4ec"),i=r("bee2"),o=(r("b64b"),r("d3b7"),r("25f0"),r("ac1f"),r("5319"),r("99af"),r("caad"),r("c909")),l=r.n(o),s=["catalog","collection","item"],c=function(){function t(){Object(n["a"])(this,t)}return Object(i["a"])(t,null,[{key:"isObject",value:function(t){return"object"===Object(a["a"])(t)&&t===Object(t)&&!Array.isArray(t)}},{key:"size",value:function(t){return"object"===Object(a["a"])(t)&&null!==t?Array.isArray(t)?t.length:Object.keys(t).length:0}},{key:"hasText",value:function(t){return"string"===typeof t&&t.length>0}},{key:"urlType",value:function(t,e){var r=l()(t);return r.is(e)}},{key:"toAbsolute",value:function(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=l()(t);return a.is("relative")&&(a=a.absoluteTo(e)),r?a.toString():a}},{key:"equalUrl",value:function(t,e){return l()(t).equals(e)}},{key:"titleForHref",value:function(t){var e=l()(t),r=e.authority(),a=e.filename().replace(/^(.{1,})\.\w+$/,"$1"),n=e.directory().replace(/^\//,"");return r&&a?"".concat(a," at ").concat(r):r||(a&&!s.includes(a)?a:n||t)}},{key:"canBrowserDisplayImage",value:function(t){if("string"!==typeof t)return!1;switch(t.toLowerCase()){case"image/png":case"image/jpg":case"image/jpeg":case"image/webp":case"image/gif":return!0;default:return!1}}}]),t}()},"20a0":function(t,e,r){},"497a":function(t,e,r){"use strict";r("7fdc")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{id:"stac-browser"}},[r("b-sidebar",{attrs:{id:"sidebar",title:"Browse",shadow:"",lazy:""}},[r("Sidebar")],1),r("header",[r("div",{staticClass:"logo"},[t._v(t._s(t.catalogTitle))]),r("StacHeader")],1),r("main",[r("router-view")],1),r("footer",[r("small",{staticClass:"poweredby text-muted"},[t._v(" Powered by "),r("a",{attrs:{href:"https://github.com/radiantearth/stac-browser"}},[t._v("STAC Browser")]),t._v(" v"+t._s(t.browserVersion)+" ")])])],1)},i=[],o=r("5530"),l=(r("2ca0"),r("4de4"),r("ac1f"),r("5319"),r("8c4f")),s=(r("d3b7"),r("3ca3"),r("ddb0"),r("b210")),c=[{path:"/collection/:collection",name:"api-collection",component:function(){return Promise.resolve().then(r.bind(null,"b210"))},props:function(t){return console.log(t),{}}},{path:"/collection/:collection/:item",name:"api-item",component:function(){return Promise.resolve().then(r.bind(null,"b210"))},props:function(t){return console.log(t),{}}},{path:"/search",name:"search",component:function(){return r.e("chunk-2d0bd977").then(r.bind(null,"2d3b"))}}];({catalogUrl:null,catalogTitle:"STAC Browser",allowExternalAccess:!0,tileSourceTemplate:"https://tiles.rdnt.io/tiles/{z}/{x}/{y}@2x?url={ASSET_HREF}",stacProxyUrl:null,tileProxyUrl:null,pathPrefix:"/",historyMode:"history",stacLint:!0}).allowExternalAccess&&c.push({path:"/external/(.*)",name:"browseExternal",component:s["default"],props:function(t){return{path:"/external/".concat(t.params.pathMatch)}}}),{catalogUrl:null,catalogTitle:"STAC Browser",allowExternalAccess:!0,tileSourceTemplate:"https://tiles.rdnt.io/tiles/{z}/{x}/{y}@2x?url={ASSET_HREF}",stacProxyUrl:null,tileProxyUrl:null,pathPrefix:"/",historyMode:"history",stacLint:!0}.catalogUrl||c.push({path:"/",name:"select",component:function(){return Promise.all([r.e("chunk-73658270"),r.e("chunk-0b128a4c")]).then(r.bind(null,"8db4"))}}),c.push({path:"/(.*)",name:"browse",component:function(){return Promise.resolve().then(r.bind(null,"b210"))},props:function(t){return{path:t.params.pathMatch}}});var u=c,f=r("2f62"),d=r("b85c"),h=r("1da1"),p=(r("96cf"),r("7db0"),r("07ac"),r("25f0"),r("a15b"),r("1276"),r("8a79"),r("fb6a"),r("99af"),r("caad"),r("2532"),r("a434"),r("bc3a")),g=r.n(p),b=r("025e"),m=r("d4ec"),v=r("bee2"),y=(r("4e82"),r("7f1d")),k=r.n(y),x=function(){function t(e,r,a){Object(m["a"])(this,t),this._url=r,this._path=a;var n=k.a.stac(e);for(var i in n)"undefined"===typeof this[i]&&(this[i]=n[i])}return Object(v["a"])(t,[{key:"isItem",value:function(){return"Feature"===this.type}},{key:"isCatalog",value:function(){return"Catalog"===this.type}},{key:"isCatalogLike",value:function(){return this.isCatalog()||this.isCollection()}},{key:"isCollection",value:function(){return"Collection"===this.type}},{key:"getMetadata",value:function(t){return this.isItem()?this.properties[t]:this.isCatalogLike()?this[t]:null}},{key:"getDisplayTitle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.isItem()&&b["a"].hasText(this.properties.title)?this.properties.title:b["a"].hasText(this.title)?this.title:b["a"].hasText(this.id)?this.id:t}},{key:"getBrowserPath",value:function(){return this._path}},{key:"getAbsoluteUrl",value:function(){return this._url}},{key:"getLinkWithRel",value:function(t){return this.links.find((function(e){return b["a"].isObject(e)&&"string"===typeof e.href&&e.rel===t}))}},{key:"getLinksWithRels",value:function(t){return this.links.filter((function(e){return b["a"].isObject(e)&&"string"===typeof e.href&&t.includes(e.rel)}))}},{key:"getLinksWithOtherRels",value:function(t){return this.links.filter((function(e){return b["a"].isObject(e)&&"string"===typeof e.href&&!t.includes(e.rel)}))}},{key:"getAssetsWithRoles",value:function(t){var e=[];for(var r in this.assets){var a=this.assets[r];b["a"].isObject(a)&&"string"===typeof a.href&&Array.isArray(a.roles)&&a.roles.find((function(e){return t.includes(e)}))&&e.push(a)}return e}},{key:"getThumbnails",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.getAssetsWithRoles(["thumbnail","overview"]);return e&&r.length>1&&r.sort((function(t){return t.roles.includes(e)?-1:1})),0===r.length&&(r=this.getLinksWithRels(["preview"])),t?r.filter((function(t){return b["a"].canBrowserDisplayImage(t.type)})):r}}]),t}();x.DEFAULT_TITLE="Untitled";var w=x;a["a"].use(f["a"]);var S=new f["a"].Store({strict:!0,state:Object.assign({catalogUrl:null,catalogTitle:"STAC Browser",allowExternalAccess:!0,tileSourceTemplate:"https://tiles.rdnt.io/tiles/{z}/{x}/{y}@2x?url={ASSET_HREF}",stacProxyUrl:null,tileProxyUrl:null,pathPrefix:"/",historyMode:"history",stacLint:!0},{url:"",title:{catalogUrl:null,catalogTitle:"STAC Browser",allowExternalAccess:!0,tileSourceTemplate:"https://tiles.rdnt.io/tiles/{z}/{x}/{y}@2x?url={ASSET_HREF}",stacProxyUrl:null,tileProxyUrl:null,pathPrefix:"/",historyMode:"history",stacLint:!0}.catalogTitle,data:null,valid:null,allowSelectCatalog:!{catalogUrl:null,catalogTitle:"STAC Browser",allowExternalAccess:!0,tileSourceTemplate:"https://tiles.rdnt.io/tiles/{z}/{x}/{y}@2x?url={ASSET_HREF}",stacProxyUrl:null,tileProxyUrl:null,pathPrefix:"/",historyMode:"history",stacLint:!0}.catalogUrl,stacIndex:[],database:{},queue:[],supportedRelTypes:["child","collection","data","first","item","items","last","license","next","prev","parent","preview","root","search","self"]}),getters:{loading:function(t){return!t.database[t.url]},error:function(t){return t.database[t.url]instanceof Error?t.database[t.url]:null},getStac:function(t){return function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)return null;var a=b["a"].toAbsolute(e,t.url),n=t.database[a];return!r&&n instanceof Error?null:n}},getStacFromLink:function(t,e){return function(r){var a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=(null===(a=t.data)||void 0===a?void 0:a.getLinkWithRel(r))||{href:n};return e.getStac(i.href)}},displayCatalogTitle:function(t,e){var r;return(null===(r=e.root)||void 0===r?void 0:r.getDisplayTitle())||t.catalogTitle},isCollection:function(t){var e;return(null===(e=t.data)||void 0===e?void 0:e.isCollection())||!1},isCatalog:function(t){var e;return(null===(e=t.data)||void 0===e?void 0:e.isCatalog())||!1},isCatalogLike:function(t){var e;return(null===(e=t.data)||void 0===e?void 0:e.isCatalogLike())||!1},isItem:function(t){var e;return(null===(e=t.data)||void 0===e?void 0:e.isItem())||!1},stacVersion:function(t){var e;return null===(e=t.data)||void 0===e?void 0:e.stac_version},root:function(t,e){return e.getStacFromLink("root",t.catalogUrl)},parent:function(t,e){return e.getStacFromLink("parent")},collection:function(t,e){return e.getStacFromLink("collection")},getLink:function(t,e){return function(r){var a,n=null===(a=t.data)||void 0===a?void 0:a.getLinkWithRel(r),i=e[r];return n&&(n=Object.assign({},n),n.title=(null===i||void 0===i?void 0:i.getDisplayTitle())||n.title),n}},rootLink:function(t,e){var r=e.getLink("root");return r?r.title=r.title||t.catalogTitle:!r&&t.catalogUrl&&(r={href:"/",title:t.catalogTitle}),r},parentLink:function(t,e){return e.getLink("parent")},collectionLink:function(t,e){return e.getLink("collection")},items:function(t){return t.data?t.data.getLinksWithRels(["item"]):[]},catalogs:function(t){return t.data?t.data.getLinksWithRels(["child"]):[]},hasAssets:function(t,e){return Object.values(e.assets).find((function(t){return b["a"].isObject(t)&&"string"===typeof t.href}))},assets:function(t){var e;return b["a"].isObject(null===(e=t.data)||void 0===e?void 0:e.assets)?t.data.assets:{}},thumbnails:function(t){return t.data?t.data.getThumbnails():[]},additionalLinks:function(t){return t.data?t.data.getLinksWithOtherRels(t.supportedRelTypes):[]},supportsSearch:function(){return!1},toBrowserPath:function(t){return function(e){b["a"].hasText(e)||(e="/");var r,a=b["a"].toAbsolute(e,t.url,!1);if(t.catalogUrl&&(r=a.relativeTo(t.catalogUrl)),r&&r!==a)return"/"+r.toString();if(!t.allowExternalAccess)return a.toString();var n=["/external"],i=a.protocol();return"https"!==i&&n.push(i+":"),n.push(a.authority()),n.push(a.path().replace(/^\//,"")),n.join("/")}},fromBrowserPath:function(t,e){return function(r){if(b["a"].hasText(r)&&"/"!==r)if(r.startsWith("/external/")){var a,n=r.replace(/^\/external\//,"").split("/");n[0].endsWith(":")?(a=n.shift(),n=n.slice(1)):a="https",r="".concat(a,"://").concat(n.join("/"))}else t.catalogUrl&&(r=b["a"].toAbsolute(r,t.catalogUrl));else r=t.catalogUrl;return e.getProxiedUrl(r)}},getProxiedUrl:function(t){return function(e){return Array.isArray(t.stacProxyUrl)?e.replace(t.stacProxyUrl[0],t.stacProxyUrl[1]):e}},getTileSource:function(t,e){return function(r){var a=e.getTileProxiedUrl(r);return t.tileSourceTemplate.replace("{ASSET_HREF}",a)}},getTileProxiedUrl:function(t){return function(e){return Array.isArray(t.tileProxyUrl)?e.replace(t.tileProxyUrl[0],t.tileProxyUrl[1]):e}}},mutations:{config:function(t,e){for(var r in e){var a=e[r];switch(r){case"catalogTitle":t.catalogTitle=a;break;case"catalogUrl":t.catalogUrl=b["a"].toAbsolute(a,a);break;case"stacProxyUrl":case"tileProxyUrl":"string"===typeof a&&a.includes("|")?t[r]=a.split("|"):t[r]=a;break;default:t[r]=a}}},stacIndex:function(t,e){t.stacIndex=e},tileSourceTemplate:function(t,e){t.tileSourceTemplate=e},loading:function(t,e){a["a"].set(t.database,e,null)},loaded:function(t,e){var r=e.url,n=e.data;a["a"].set(t.database,r,n)},show:function(t,e){var r=e.url,a=e.title,n=t.database[r]||null;t.url=r||null,t.data=n instanceof w?n:null,t.valid=null,t.title=a||(n instanceof w?n.getDisplayTitle(w.DEFAULT_TITLE):t.catalogTitle)},errored:function(t,e){var r=e.url,n=e.error;n instanceof Error||(n=new Error(n)),a["a"].set(t.database,r,n)},valid:function(t,e){t.valid=e},queue:function(t,e){t.queue.push(e)},unqueue:function(t,e){var r=t.queue.indexOf(e);-1!==r&&t.queue.splice(r,1)},removeFromQueue:function(t,e){t.queue.splice(0,e)}},actions:{loadBackground:function(t,e){return Object(h["a"])(regeneratorRuntime.mark((function r(){var a,n,i,o,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=t.state.queue.slice(0,e),n=[],i=Object(d["a"])(a);try{for(i.s();!(o=i.n()).done;)l=o.value,n.push(t.dispatch("load",{url:l}))}catch(s){i.e(s)}finally{i.f()}return t.commit("removeFromQueue",e),r.next=7,Promise.all(n);case 7:return r.abrupt("return",r.sent);case 8:case"end":return r.stop()}}),r)})))()},loadStacIndex:function(t){return Object(h["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("https://stacindex.org/api/catalogs");case 3:r=e.sent,Array.isArray(r.data)&&t.commit("stacIndex",r.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},load:function(t,e){return Object(h["a"])(regeneratorRuntime.mark((function r(){var a,n,i,o,l,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=e.url,n=e.fromBrowser,i=e.show,n?(o=a,a=t.getters.fromBrowserPath(a)):(a=b["a"].toAbsolute(a,t.state.url),o=t.getters.toBrowserPath(a)),t.state.database[a]){r.next=17;break}return t.commit("loading",a),r.prev=4,r.next=7,g.a.get(a);case 7:if(l=r.sent,b["a"].isObject(l.data)){r.next=10;break}throw new Error("The response is not a valid STAC entity");case 10:s=new w(l.data,a,o),t.commit("loaded",{url:a,data:s}),r.next=17;break;case 14:r.prev=14,r.t0=r["catch"](4),t.commit("errored",{url:a,error:r.t0});case 17:i&&t.commit("show",{url:a});case 18:case"end":return r.stop()}}),r,null,[[4,14]])})))()},validate:function(t,e){return Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if("boolean"!==typeof t.state.valid){r.next=2;break}return r.abrupt("return");case 2:return r.prev=2,r.next=5,g.a.get("https://api.staclint.com/url?stac_url=".concat(e));case 5:t.commit("valid",!0),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](2),r.t0.response&&422===r.t0.response.status?t.commit("valid",!1):t.commit("valid",r.t0);case 11:case"end":return r.stop()}}),r,null,[[2,8]])})))()},fetch:function(){return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}}),T=r("cca8"),_=r("8b3d"),P=r("7049"),L=r("521d"),j=r("a7e2"),A=r("498a"),O=r("89bf"),U=r("b519"),E=r("1f1a"),C=r("39ba"),B=r("6976"),R=(r("f9e3"),r("2dd8"),r("4ae6")),F=r.n(R),I=r("6057"),M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"tree"},[r("li",[t._v("STAC Browser "),r("ul",[r("li",[r("b-icon-folder-minus"),t._v(" Catalog 1 "),r("ul",[r("li",[r("b-icon-file-earmark-richtext"),t._v(" Item 1")],1)])],1),r("li",[r("b-icon-folder-plus"),t._v(" Catalog 2")],1),r("li",[r("b-icon-folder-plus"),t._v(" Catalog 3")],1)])]),t.allowSelectCatalog?r("li",[r("router-link",{attrs:{to:"/"}},[r("b-icon-arrow-left-right"),t._v(" Switch Catalog")],1)],1):t._e()])},H=[],q=r("7386"),z={name:"Sidebar",components:{BIconArrowLeftRight:q["b"],BIconFileEarmarkRichtext:q["j"],BIconFolderMinus:q["k"],BIconFolderPlus:q["l"]},computed:Object(o["a"])({},Object(f["c"])(["allowSelectCatalog"]))},W=z,$=(r("adaa"),r("2877")),D=Object($["a"])(W,M,H,!1,null,"737bc0e3",null),N=D.exports,V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",[r("b-col",{attrs:{md:"10"}},[r("h1",[t._v(t._s(t.title))]),t.url?r("p",{staticClass:"lead"},[t.containerLink?r("span",{staticClass:"in"},[t._v("in "),r("StacLink",{attrs:{link:t.containerLink}})],1):t._e(),r("b-button-group",[t.parentLink?r("b-button",{attrs:{to:t.toBrowserPath(t.parentLink.href),title:t.parentLink.title,variant:"outline-primary",size:"sm"}},[r("b-icon-arrow-90deg-up"),t._v(" Go to Parent")],1):t._e(),t.collectionLink?r("b-button",{attrs:{to:t.toBrowserPath(t.collectionLink.href),title:t.collectionLink.title,variant:"outline-primary",size:"sm"}},[r("b-icon-folder-symlink"),t._v(" Go to Collection")],1):t._e(),r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar",modifiers:{sidebar:!0}}],attrs:{variant:"outline-primary",size:"sm"}},[r("b-icon-book"),t._v(" Browse")],1),t.supportsSearch?r("b-button",{attrs:{variant:"outline-primary",size:"sm",to:"/search"}},[r("b-icon-search"),t._v(" Search")],1):t._e()],1)],1):t._e()]),t.url?r("b-col",{staticClass:"text-sm-right",attrs:{md:"2"}},[r("Share",{attrs:{title:t.title,stacUrl:t.url,stacVersion:t.stacVersion}})],1):t._e()],1)},G=[],J=r("b701"),Q={name:"StacHeader",components:{BIconArrow90degUp:q["a"],BIconBook:q["d"],BIconFolderSymlink:q["m"],BIconSearch:q["o"],StacLink:J["a"],Share:function(){return Promise.all([r.e("chunk-73658270"),r.e("chunk-6cb9486e")]).then(r.bind(null,"17a4"))}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(f["c"])(["catalogUrl","data","url","title"])),Object(f["b"])(["rootLink","parentLink","collectionLink","stacVersion","supportsSearch","fromBrowserPath","toBrowserPath"])),{},{containerLink:function(){return this.catalogUrl&&this.url===this.catalogUrl||this.rootLink&&b["a"].equalUrl(this.fromBrowserPath(this.rootLink.href),this.url)?null:this.rootLink||this.collectionLink||this.parentLink}})},K=Q,X=(r("b912"),Object($["a"])(K,V,G,!1,null,"2bc1055a",null)),Y=X.exports;for(var Z in a["a"].use(F.a),a["a"].use(T["a"]),a["a"].use(_["a"]),a["a"].use(P["a"]),a["a"].use(L["a"]),a["a"].use(j["a"]),a["a"].use(A["a"]),a["a"].use(O["a"]),a["a"].use(U["a"]),a["a"].use(E["a"]),a["a"].directive("b-toggle",C["a"]),a["a"].directive("b-visible",B["a"]),I["Formatters"])Z.startsWith("format")&&a["a"].filter(Z.replace(/^format/,""),I["Formatters"][Z]);a["a"].use(l["a"]);var tt=new l["a"]({mode:{catalogUrl:null,catalogTitle:"STAC Browser",allowExternalAccess:!0,tileSourceTemplate:"https://tiles.rdnt.io/tiles/{z}/{x}/{y}@2x?url={ASSET_HREF}",stacProxyUrl:null,tileProxyUrl:null,pathPrefix:"/",historyMode:"history",stacLint:!0}.historyMode,base:{catalogUrl:null,catalogTitle:"STAC Browser",allowExternalAccess:!0,tileSourceTemplate:"https://tiles.rdnt.io/tiles/{z}/{x}/{y}@2x?url={ASSET_HREF}",stacProxyUrl:null,tileProxyUrl:null,pathPrefix:"/",historyMode:"history",stacLint:!0}.pathPrefix,routes:u}),et={},rt={};for(var at in{catalogUrl:null,catalogTitle:"STAC Browser",allowExternalAccess:!0,tileSourceTemplate:"https://tiles.rdnt.io/tiles/{z}/{x}/{y}@2x?url={ASSET_HREF}",stacProxyUrl:null,tileProxyUrl:null,pathPrefix:"/",historyMode:"history",stacLint:!0})et[at]={default:{catalogUrl:null,catalogTitle:"STAC Browser",allowExternalAccess:!0,tileSourceTemplate:"https://tiles.rdnt.io/tiles/{z}/{x}/{y}@2x?url={ASSET_HREF}",stacProxyUrl:null,tileProxyUrl:null,pathPrefix:"/",historyMode:"history",stacLint:!0}[at]},rt[at]=function(t){this.$store.commit("config",{key:t})};var nt={name:"StacBrowser",router:tt,store:S,components:{Sidebar:N,StacHeader:Y},props:Object(o["a"])({},et),watch:Object(o["a"])(Object(o["a"])({},rt),{},{title:function(t){document.title=t}}),mounted:function(){var t=this;setInterval((function(){return t.$store.dispatch("loadBackground",5)}),250)},computed:Object(o["a"])(Object(o["a"])({},Object(f["b"])(["displayCatalogTitle"])),{},{browserVersion:function(){return"3.0.0-alpha.1"}})},it=nt,ot=(r("497a"),Object($["a"])(it,n,i,!1,null,null,null)),lt=ot.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(lt)}}).$mount("#stac-browser")},"7fdc":function(t,e,r){},aa36:function(t,e,r){},adaa:function(t,e,r){"use strict";r("20a0")},b210:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[!t.allowExternalAccess&&this.isExternal?r("b-alert",[r("p",[t._v("Accessing external catalogs is not allowed!")])]):t._e(),t.loading?r("div",{staticClass:"loading text-center"},[r("b-spinner",{attrs:{label:"Loading..."}})],1):t.error?r("b-alert",{attrs:{variant:"danger",show:""}},[r("p",[t._v(t._s(t.error))]),r("p",[t._v(" Please note that some servers don't allow external access via web browsers (e.g., when CORS headers are not present). ")]),r("p",[r("small",[t._v("Requested URL: "),r("a",{attrs:{href:t.url}},[t._v(t._s(t.url))])])])]):r(t.component,{tag:"component"})],1)},n=[],i=r("5530"),o=(r("d3b7"),r("3ca3"),r("ddb0"),r("2f62")),l=r("025e"),s={name:"Browse",components:{Item:function(){return Promise.all([r.e("catalog~item"),r.e("item")]).then(r.bind(null,"f0df"))},Catalog:function(){return Promise.all([r.e("catalog~item"),r.e("catalog")]).then(r.bind(null,"247d"))}},props:{path:{type:String,default:""}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(o["c"])(["allowExternalAccess","url"])),Object(o["b"])(["isCatalogLike","loading","error"])),{},{component:function(){return this.isCatalogLike?"Catalog":"Item"},isExternal:function(){return l["a"].urlType(this.path,"absolute")}}),watch:{path:{immediate:!0,handler:function(t,e){t!==e&&this.$store.dispatch("load",{url:t||"/",fromBrowser:!0,show:!0})}}}},c=s,u=r("2877"),f=Object(u["a"])(c,a,n,!1,null,null,null);e["default"]=f.exports},b701:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("router-link",{attrs:{to:t.href,rel:t.link.rel,target:t.target}},[t._v(t._s(t.displayTitle))])},n=[],i=r("5530"),o=(r("9911"),r("2f62")),l=r("025e"),s={name:"StacLink",props:{link:{type:Object,required:!0},title:{type:String,default:null}},computed:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["toBrowserPath"])),{},{isStacBrowserLink:function(){switch(this.link.rel){case"root":case"child":case"parent":case"item":case"related":case"derived_from":case"canonical":case"first":case"prev":case"previous":case"next":case"last":return!0;default:return!1}},target:function(){return this.isStacBrowserLink?null:"_blank"},href:function(){return this.isStacBrowserLink?this.toBrowserPath(this.link.href):this.link.href},displayTitle:function(){return this.title||this.link.title||l["a"].titleForHref(this.link.href)}})},c=s,u=r("2877"),f=Object(u["a"])(c,a,n,!1,null,null,null);e["a"]=f.exports},b912:function(t,e,r){"use strict";r("aa36")}});
//# sourceMappingURL=app.78b08557.js.map