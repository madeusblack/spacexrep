(this.webpackJsonpspacexrep=this.webpackJsonpspacexrep||[]).push([[0],{21:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/paceholder.f2b1b847.jpg"},25:function(e,t,a){e.exports=a(43)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),l=a.n(r),m=a(7),s=a(14),i=a(11),u=function(e,t){switch(t.type){case"SWITCH_PAGE":return Object(i.a)(Object(i.a)({},e),{},{actualPage:t.payload});case"SET_ITEMS_PER_PAGE":return Object(i.a)(Object(i.a)({},e),{},{itemsPerPage:t.payload});default:return e}},o=a(9),E=a(2),f=a(24),h=function(e){var t=Object(n.useState)({isData:!1}),a=Object(f.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),c},p=(a(21),a(34),function(e){var t=e.children;return c.a.createElement("section",{className:"cardContainer"},t)}),b=(a(35),function(e){var t=e.source,a="https://www.youtube.com/embed/".concat(t);return c.a.createElement("iframe",{src:a,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),d=(a(36),a(23)),g=a.n(d),P=function(e){var t=e.title,a=e.mission_name,n=e.launch_date_utc,r=e.links,l=e.site_name_long,m=e.details,s=new Date(n),i="Launch Date: ".concat(s.toDateString());return c.a.createElement("div",{className:"launchCard"},t&&c.a.createElement("h2",{className:"cardTitle"},t),c.a.createElement("h4",{className:"missionName"},a),r.mission_patch?c.a.createElement("img",{className:"missionPatch",src:r.mission_patch,alt:"mission patch"}):c.a.createElement("img",{className:"missionPatch",src:g.a,alt:"mission patch",style:{borderRadius:"52%"}}),c.a.createElement("h5",{className:"missionDate"},i),c.a.createElement(b,{source:r.youtube_id}),c.a.createElement("h5",{className:"launchSite"},l),c.a.createElement("p",{className:"aboutThisMission"},m))},v="https://api.spacexdata.com/v3/launches",O=function(){var e=h("".concat(v,"/latest")),t=h("".concat(v,"/next"));return e.mission_name&&t.mission_name?c.a.createElement(c.a.Fragment,null,c.a.createElement(p,null,c.a.createElement(P,Object.assign({key:e.id},e,{title:"Lastest Launch"})),c.a.createElement(P,Object.assign({key:t.id},t,{title:"Next Launch"})))):c.a.createElement("h1",null,"Loading...")},_=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"No se hizo la encontraci\xf3n "),c.a.createElement("a",{href:"/"},"Vuelve al inicio viteh"))},I=(a(37),function(){return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header__container"},c.a.createElement(o.b,{to:"/"},"HOME"),c.a.createElement(o.b,{to:"/browse"},"BROWSE"),c.a.createElement(o.b,{to:"/about"},"ABOUT THIS PROJECT")))}),y=function(e){var t=e.children;return c.a.createElement("div",{className:"App"},c.a.createElement(I,null),t)},N=function(e){var t,a=e.numberOfPage,n=e.numberOfItems,r=e.launches,l=[];if(r[0]){t=a>1?(a-1)*n:a;for(var m=0;m<n;m++)void 0!==r[t].flight_number&&l.push(c.a.createElement(P,Object.assign({key:r[t].flight_number},r[t]))),t++}return c.a.createElement(p,null,l)},j=function(e){return{type:"SWITCH_PAGE",payload:e}},w=(a(39),{setItems:function(e){return{type:"SET_ITEMS_PER_PAGE",payload:e}},setPage:j}),T=Object(m.b)(null,w)((function(e){var t,a=e.numberOfItems;return c.a.createElement("h6",{className:"itemsPerPage",onClick:function(){t=20===e.numberOfItems?e.numberOfItems-10:e.numberOfItems+10,e.setItems(t),e.setPage(1)}},"Items per Page: ",a)})),x={setPage:j},S=Object(m.b)(null,x)((function(e){var t=e.number;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h6",{onClick:function(){e.setPage(t)}},t))})),k=(a(40),function(e){for(var t=e.itemsPage,a=[],n=h("".concat("https://api.spacexdata.com/v3/launches","/latest")).flight_number,r=Math.ceil(n/t),l=1;l<=r;l++)a.push(c.a.createElement(S,{key:l.id,number:l}));return!0,c.a.createElement("div",{className:"pagesContainer"},a)}),C=(a(41),function(e){var t=e.children;return c.a.createElement("div",{className:"container"},t)}),A=Object(m.b)((function(e){return{itemsPerPage:e.itemsPerPage,actualPage:e.actualPage,totalItems:e.totalItems}}),null)((function(e){var t=e.itemsPerPage,a=e.actualPage,n=e.totalItems,r=h("https://api.spacexdata.com/v3/launches");return!1!==r.isData?c.a.createElement(c.a.Fragment,null,c.a.createElement(C,null,c.a.createElement(T,{numberOfItems:t}),c.a.createElement(k,{itemsPage:t})),c.a.createElement(N,{numberOfPage:a,numberOfItems:t,launches:r,maxItems:n}),c.a.createElement(C,null,c.a.createElement(k,{itemsPage:t}),c.a.createElement(T,{numberOfItems:t}))):c.a.createElement("h1",null,"Loading")})),M=(a(42),function(){return c.a.createElement("div",{className:"aboutContainer"},c.a.createElement("h2",null,"About This Project"),c.a.createElement("p",null,"The idea of this project it is to provide the data of the launches of",c.a.createElement("b",null," SpaceX "),"in a user friendly way and unificate the relevant information on a simplificated way"),c.a.createElement("br",null),c.a.createElement("p",null,"Feel free to contact me as @Madeusblack in Twitter or through e-mail at hello@Madeusblack.com"))}),D=function(){return c.a.createElement(o.a,null,c.a.createElement(y,null,c.a.createElement(E.c,null,c.a.createElement(E.a,{path:"/",exact:!0,component:O}),c.a.createElement(E.a,{path:"/browse",exact:!0,component:A}),c.a.createElement(E.a,{path:"/about",exact:!0,component:M}),c.a.createElement(E.a,{path:"*",component:_}))))},F=Object(s.b)(u,{itemsPerPage:10,actualPage:1,totalItems:96});l.a.render(c.a.createElement(m.a,{store:F},c.a.createElement(D,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.e560545f.chunk.js.map