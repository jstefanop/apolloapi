(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{533:function(e,t,a){"use strict";var n=a(8),s=a(9),r=a(11),l=a(10),o=a(12),c=a(25),i=a(1),m=a.n(i),d=a(46),u=a.n(d),h=a(3),E=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).updateDimensions=function(){var e=u.a.findDOMNode(Object(c.a)(Object(c.a)(a))).getElementsByClassName("widget"),t=e[0]&&e[0].offsetWidth&&e[0].offsetWidth<=280||!1,n=a.state.widgetClasses;t?n+=" small-width":n="d-inline-block text-muted text-truncate",a.setState({widgetClasses:n})},a.state={widgetClasses:"d-inline-block text-muted text-truncate"},a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var e=this.props.hideProgress;return m.a.createElement(h.f,{className:this.props.bgColor},m.a.createElement(h.g,{className:"widget"},m.a.createElement("div",{className:"h1 text-muted float-right"},m.a.createElement("i",{className:this.props.icon+" text-gray"})),m.a.createElement("div",{className:"h4 m-0"},this.props.value),m.a.createElement("div",null,this.props.title),m.a.createElement(h.G,{className:"progress-xs my-3 ".concat(e?"invisible":""),color:this.props.progressColor,value:this.props.progressValue}),m.a.createElement("small",{className:this.state.widgetClasses},this.props.secondaryTitle,": ",m.a.createElement("b",null,this.props.secondaryValue))))}}]),t}(i.Component);t.a=E},599:function(e,t,a){"use strict";a.r(t);var n=a(8),s=a(9),r=a(11),l=a(10),o=a(12),c=a(17),i=a(1),m=a.n(i),d=a(3),u=a(532),h=a.n(u),E=a(15),f=a(533),g=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.loadingNode,e.mcu),a=e.node,n=e.nodeError;if(t&&t.stats&&t.stats.memory&&t.stats.memory.total&&t.stats.memory.total<5e5)return m.a.createElement("div",{ref:"main"},m.a.createElement(d.a,{color:"warning"},"There is a problem fetching system stats (",m.a.createElement("b",null,"MCU must have at least 512 MB of memory to view this page"),")"));if(n)return m.a.createElement("div",{ref:"main"},m.a.createElement(d.a,{color:"warning"},"There is a problem fetching system stats (",m.a.createElement("b",null,n),")"));if(a&&a.stats&&a.stats.error){var s=null;return s="ECONNREFUSED"===a.stats.error.code?"Node is currently offline":"-28"===a.stats.error.code?"Node is currently loading":a.stats.error.message,m.a.createElement("div",{ref:"main"},m.a.createElement(d.a,{color:"warning"},"There is a problem fetching system stats (",m.a.createElement("b",null,s),")"))}var r=a.stats,l=r.blockchainInfo,o=r.connectionCount,c=r.miningInfo,i=r.peerInfo;return m.a.createElement("div",{ref:"main"},m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(d.H,null,m.a.createElement(d.m,{xs:"12",md:"6",xl:"6"},l.headers&&l.blocks===l.headers&&m.a.createElement(f.a,{bgColor:"bg-gray-300",icon:"fa fa-clock",value:l.blocks,title:"Current Blocks",progressColor:"success",progressValue:100,secondaryTitle:"Last Block",secondaryValue:l.medianTime&&h()().subtract(l.medianTime,"seconds").format("mm:ss")}),l.headers&&l.blocks<l.headers&&m.a.createElement(f.a,{bgColor:"bg-gray-300",icon:"fa fa-clock",value:"".concat(l.blocks," / ").concat(l.headers),title:"Syncing Blocks",progressColor:"warning",progressValue:parseInt(l.blocks/l.headers*100),secondaryTitle:"Block Sync Progress",secondaryValue:"".concat((Math.floor(l.blocks/l.headers*100*100)/100).toFixed(2),"%")})),m.a.createElement(d.m,{xs:"12",md:"6",xl:"6"},m.a.createElement(f.a,{bgColor:"bg-light",icon:"fa fa-fire",value:c.networkhashps?"".concat((c.networkhashps/1e12).toFixed(2)," Th/s"):"0 Th/s",title:"Network Hashrate",hideProgress:!0,progressColor:"success",progressValue:100,secondaryTitle:"Network Difficulty",secondaryValue:c.difficulty&&c.difficulty.toFixed(2)}))),m.a.createElement(d.H,null,m.a.createElement(d.m,{xs:"12",md:"6"},m.a.createElement(d.f,{className:"bg-light"},m.a.createElement(d.g,null,m.a.createElement("div",{className:"h4 m-0"},o),m.a.createElement("div",null,m.a.createElement(E.Trans,{id:"Connections"})))))),m.a.createElement(d.H,null,m.a.createElement(d.m,null,m.a.createElement("h4",null,m.a.createElement(E.Trans,{id:"Connections"})),m.a.createElement("div",null,m.a.createElement(E.I18n,null,function(e){e.i18n;return m.a.createElement(d.K,{responsive:!0,className:"table-outline d-table d-sm-table"},m.a.createElement("thead",{className:"bg-light"},m.a.createElement("tr",null,m.a.createElement("th",null,m.a.createElement(E.Trans,{id:"IP"})),m.a.createElement("th",null,m.a.createElement(E.Trans,{id:"Client"})))),m.a.createElement("tbody",{className:"bg-white"},i.map(function(e,t){return m.a.createElement("tr",{key:t},m.a.createElement("td",null,m.a.createElement("div",{className:"font-weight-bold text-muted"},e.addr)),m.a.createElement("td",null,e.subver))})))}))))))}}]),t}(i.Component),p=Object(c.connect)(function(e){return{loadingNode:e.nodeStats.loading,mcu:e.mcuStats.data,node:e.nodeStats.data,nodeError:e.nodeStats.error}})(g);t.default=p}}]);
//# sourceMappingURL=5.e701ed3a.chunk.js.map