(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{533:function(e,t,a){"use strict";var n=a(8),r=a(9),s=a(11),l=a(10),o=a(12),c=a(25),i=a(1),d=a.n(i),m=a(46),u=a.n(m),p=a(3),g=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).updateDimensions=function(){var e=u.a.findDOMNode(Object(c.a)(Object(c.a)(a))).getElementsByClassName("widget"),t=e[0]&&e[0].offsetWidth&&e[0].offsetWidth<=280||!1,n=a.state.widgetClasses;t&&(n+=" small-width"),a.setState({widgetClasses:n})};var r="d-inline-block text-muted text-truncate";return e&&e.wrapSecondary&&(r=r.replace("text-truncate","text-wrap")),a.state={widgetClasses:r},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var e=this.props,t=e.hideProgress,a=e.hideSecondaryValue;return d.a.createElement(p.f,{className:this.props.bgColor},d.a.createElement(p.g,{className:"widget"},d.a.createElement("div",{className:"h1 text-muted float-right"},d.a.createElement("i",{className:this.props.icon+" text-gray"})),d.a.createElement("div",{className:"h4 m-0"},this.props.value),d.a.createElement("div",null,this.props.title),d.a.createElement(p.G,{className:"progress-xs my-3 ".concat(t?"invisible":""),color:this.props.progressColor,value:this.props.progressValue}),d.a.createElement("small",{className:this.state.widgetClasses},this.props.secondaryTitle,a?null:":"," ",d.a.createElement("b",null,this.props.secondaryValue))))}}]),t}(i.Component);t.a=g},599:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(9),s=a(11),l=a(10),o=a(12),c=a(17),i=a(1),d=a.n(i),m=a(3),u=a(532),p=a.n(u),g=a(15),h=a(533),f=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.loadingNode,e.mcu),a=e.node,n=e.nodeError;if(t&&t.stats&&t.stats.memory&&t.stats.memory.total&&t.stats.memory.total<5e5)return d.a.createElement("div",{ref:"main"},d.a.createElement(m.a,{color:"warning"},"There is a problem fetching system stats (",d.a.createElement("b",null,"MCU must have at least 512 MB of memory to view this page"),")"));if(n)return d.a.createElement("div",{ref:"main"},d.a.createElement(m.a,{color:"warning"},"There is a problem fetching system stats (",d.a.createElement("b",null,n),")"));if(a&&a.stats&&a.stats.error){var r=null;return r="ECONNREFUSED"===a.stats.error.code?"Node is currently offline":"-28"===a.stats.error.code?"Node is currently loading":a.stats.error.message,d.a.createElement("div",{ref:"main"},d.a.createElement(m.a,{color:"warning"},"There is a problem fetching system stats (",d.a.createElement("b",null,r),")"))}var s=a.stats,l=s.blockchainInfo,o=s.connectionCount,c=s.miningInfo,i=s.peerInfo,u=null;if(t&&t.stats&&t.stats.disks){var f=t.stats.disks.filter(function(e){return"/media/usb0"===e.mountPoint})[0];f&&(u=f.total/1e9)}var b=null;l.sizeOnDisk&&(b=l.sizeOnDisk/1e9);var E=null,y=null;return u&&b&&(E=parseInt(b/u*100),y=((u-b)/u*100).toFixed(2)),d.a.createElement("div",{ref:"main"},d.a.createElement("div",{className:"animated fadeIn"},d.a.createElement(m.H,null,d.a.createElement(m.m,{xs:"12",md:"6"},l.headers&&l.blocks===l.headers&&d.a.createElement(h.a,{bgColor:"bg-gray-300",icon:"fa fa-clock",value:l.blocks,title:"Current Blocks",progressColor:"success",progressValue:100,secondaryTitle:"Last Block",secondaryValue:l.blockTime&&p()().utc().subtract(l.blockTime,"seconds").format("mm:ss")}),l.headers&&l.blocks<l.headers&&d.a.createElement(h.a,{bgColor:"bg-gray-300",icon:"fa fa-clock",value:"".concat(l.blocks," / ").concat(l.headers),title:"Syncing Blocks",progressColor:"warning",progressValue:parseInt(l.blocks/l.headers*100),secondaryTitle:"Block Sync Progress",secondaryValue:"".concat((Math.floor(l.blocks/l.headers*100*100)/100).toFixed(2),"%")})),d.a.createElement(m.m,{xs:"12",md:"6"},d.a.createElement(h.a,{bgColor:"bg-light",icon:"fa fa-fire",value:c.networkhashps?"".concat((c.networkhashps/1e12).toFixed(2)," Th/s"):"0 Th/s",title:"Network Hashrate",hideProgress:!0,progressColor:"success",progressValue:100,secondaryTitle:"Network Difficulty",secondaryValue:c.difficulty&&c.difficulty.toFixed(2)}))),d.a.createElement(m.H,null,d.a.createElement(m.m,{xs:"12",md:"6"},o&&d.a.createElement(h.a,{bgColor:"bg-gray-300",icon:"fa fa-broadcast-tower",value:"".concat(o," / 16"),title:"Connections",progressColor:o>8?"success":"danger",progressValue:parseInt(o/16*100),secondaryTitle:8===o?"Only inbound connections detected, please enable port 9333 on your router port forwarding rules for your Apollo IP address":null,wrapSecondary:!0,hideSecondaryValue:!0})),d.a.createElement(m.m,{xs:"12",md:"6"},l.sizeOnDisk&&d.a.createElement(h.a,{bgColor:"bg-gray-300",icon:"fa fa-hdd",value:"".concat(b.toFixed(2)," GB"),title:"Blockchain Size",progressColor:E>90?"danger":E>70?"warning":"success",progressValue:E,secondaryTitle:"Remaining Space",secondaryValue:"".concat(y,"%")}))),d.a.createElement(m.H,null,d.a.createElement(m.m,null,d.a.createElement("h4",null,d.a.createElement(g.Trans,{id:"Connections"})),d.a.createElement("div",null,d.a.createElement(g.I18n,null,function(e){e.i18n;return d.a.createElement(m.K,{responsive:!0,className:"table-outline d-table d-sm-table"},d.a.createElement("thead",{className:"bg-light"},d.a.createElement("tr",null,d.a.createElement("th",null,d.a.createElement(g.Trans,{id:"IP"})),d.a.createElement("th",null,d.a.createElement(g.Trans,{id:"Client"})))),d.a.createElement("tbody",{className:"bg-white"},i.map(function(e,t){return d.a.createElement("tr",{key:t},d.a.createElement("td",null,d.a.createElement("div",{className:"font-weight-bold text-muted"},e.addr)),d.a.createElement("td",null,e.subver))})))}))))))}}]),t}(i.Component),b=Object(c.connect)(function(e){return{loadingNode:e.nodeStats.loading,mcu:e.mcuStats.data,node:e.nodeStats.data,nodeError:e.nodeStats.error}})(f);t.default=b}}]);
//# sourceMappingURL=5.b67bf641.chunk.js.map