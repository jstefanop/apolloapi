(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{598:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(9),l=a(11),s=a(10),c=a(12),m=a(17),o=a(1),i=a.n(o),d=a(3),u=a(15),E=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.loadingNode,e.mcu),a=e.node,n=e.nodeError;if(t&&t.stats&&t.stats.memory&&t.stats.memory.total&&t.stats.memory.total<5e5)return i.a.createElement("div",{ref:"main"},i.a.createElement(d.a,{color:"warning"},"There is a problem fetching system stats (",i.a.createElement("b",null,"MCU must have at least 512 MB of memory to view this page"),")"));if(n)return i.a.createElement("div",{ref:"main"},i.a.createElement(d.a,{color:"warning"},"There is a problem fetching system stats (",i.a.createElement("b",null,n),")"));if(a&&a.stats&&a.stats.error){var r=null;return r="ECONNREFUSED"===a.stats.error.code?"Node is currently offline":"-28"===a.stats.error.code?"Node is currently loading":a.stats.error.message,i.a.createElement("div",{ref:"main"},i.a.createElement(d.a,{color:"warning"},"There is a problem fetching system stats (",i.a.createElement("b",null,r),")"))}return i.a.createElement("div",{ref:"main"},i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(d.H,null,i.a.createElement(d.m,{xs:"12",md:"6"},i.a.createElement(d.f,{className:"bg-light"},i.a.createElement(d.g,null,i.a.createElement("div",{className:"h4 m-0"},a.stats.blockCount),i.a.createElement("div",null,i.a.createElement(u.Trans,{id:"Blocks"}))))),i.a.createElement(d.m,{xs:"12",md:"6"},i.a.createElement(d.f,{className:"bg-light"},i.a.createElement(d.g,null,i.a.createElement("div",{className:"h4 m-0"},a.stats.connectionCount),i.a.createElement("div",null,i.a.createElement(u.Trans,{id:"Connections"})))))),i.a.createElement(d.H,null,i.a.createElement(d.m,null,i.a.createElement("h4",null,i.a.createElement(u.Trans,{id:"Connections"})),i.a.createElement("div",null,i.a.createElement(u.I18n,null,function(e){e.i18n;return i.a.createElement(d.K,{responsive:!0,className:"table-outline d-table d-sm-table"},i.a.createElement("thead",{className:"bg-light"},i.a.createElement("tr",null,i.a.createElement("th",null,i.a.createElement(u.Trans,{id:"IP"})),i.a.createElement("th",null,i.a.createElement(u.Trans,{id:"Client"})))),i.a.createElement("tbody",{className:"bg-white"},a.stats.peerInfo.map(function(e,t){return i.a.createElement("tr",{key:t},i.a.createElement("td",null,i.a.createElement("div",{className:"font-weight-bold text-muted"},e.addr)),i.a.createElement("td",null,e.subver))})))}))))))}}]),t}(o.Component),f=Object(m.connect)(function(e){return{loadingNode:e.nodeStats.loading,mcu:e.mcuStats.data,node:e.nodeStats.data,nodeError:e.nodeStats.error}})(E);t.default=f}}]);
//# sourceMappingURL=4.19e86656.chunk.js.map