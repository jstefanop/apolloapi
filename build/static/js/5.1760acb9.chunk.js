(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{542:function(e,n,t){var a=t(78);e.exports=function(e){return e===e&&!a(e)}},543:function(e,n){e.exports=function(e,n){return function(t){return null!=t&&t[e]===n&&(void 0!==n||e in Object(t))}}},571:function(e,n,t){var a=t(281),r=t(572),o=t(591),l=t(592),i=o(function(e,n){if(null==e)return[];var t=n.length;return t>1&&l(e,n[0],n[1])?n=[]:t>2&&l(n[0],n[1],n[2])&&(n=[n[0]]),r(e,a(n,1),[])});e.exports=i},572:function(e,n,t){var a=t(180),r=t(573),o=t(582),l=t(588),i=t(124),c=t(589),s=t(269);e.exports=function(e,n,t){var u=-1;n=a(n.length?n:[s],i(r));var d=o(e,function(e,t,r){return{criteria:a(n,function(n){return n(e)}),index:++u,value:e}});return l(d,function(e,n){return c(e,n,t)})}},573:function(e,n,t){var a=t(574),r=t(577),o=t(269),l=t(56),i=t(579);e.exports=function(e){return"function"==typeof e?e:null==e?o:"object"==typeof e?l(e)?r(e[0],e[1]):a(e):i(e)}},574:function(e,n,t){var a=t(575),r=t(576),o=t(543);e.exports=function(e){var n=r(e);return 1==n.length&&n[0][2]?o(n[0][0],n[0][1]):function(t){return t===e||a(t,e,n)}}},575:function(e,n,t){var a=t(271),r=t(535),o=1,l=2;e.exports=function(e,n,t,i){var c=t.length,s=c,u=!i;if(null==e)return!s;for(e=Object(e);c--;){var d=t[c];if(u&&d[2]?d[1]!==e[d[0]]:!(d[0]in e))return!1}for(;++c<s;){var m=(d=t[c])[0],f=e[m],p=d[1];if(u&&d[2]){if(void 0===f&&!(m in e))return!1}else{var h=new a;if(i)var v=i(f,p,m,e,n,h);if(!(void 0===v?r(p,f,o|l,i,h):v))return!1}}return!0}},576:function(e,n,t){var a=t(542),r=t(122);e.exports=function(e){for(var n=r(e),t=n.length;t--;){var o=n[t],l=e[o];n[t]=[o,l,a(l)]}return n}},577:function(e,n,t){var a=t(535),r=t(578),o=t(539),l=t(272),i=t(542),c=t(543),s=t(173),u=1,d=2;e.exports=function(e,n){return l(e)&&i(n)?c(s(e),n):function(t){var l=r(t,e);return void 0===l&&l===n?o(t,e):a(n,l,u|d)}}},578:function(e,n,t){var a=t(268);e.exports=function(e,n,t){var r=null==e?void 0:a(e,n);return void 0===r?t:r}},579:function(e,n,t){var a=t(580),r=t(581),o=t(272),l=t(173);e.exports=function(e){return o(e)?a(l(e)):r(e)}},580:function(e,n){e.exports=function(e){return function(n){return null==n?void 0:n[e]}}},581:function(e,n,t){var a=t(268);e.exports=function(e){return function(n){return a(n,e)}}},582:function(e,n,t){var a=t(583),r=t(174);e.exports=function(e,n){var t=-1,o=r(e)?Array(e.length):[];return a(e,function(e,a,r){o[++t]=n(e,a,r)}),o}},583:function(e,n,t){var a=t(584),r=t(587)(a);e.exports=r},584:function(e,n,t){var a=t(585),r=t(122);e.exports=function(e,n){return e&&a(e,n,r)}},585:function(e,n,t){var a=t(586)();e.exports=a},586:function(e,n){e.exports=function(e){return function(n,t,a){for(var r=-1,o=Object(n),l=a(n),i=l.length;i--;){var c=l[e?i:++r];if(!1===t(o[c],c,o))break}return n}}},587:function(e,n,t){var a=t(174);e.exports=function(e,n){return function(t,r){if(null==t)return t;if(!a(t))return e(t,r);for(var o=t.length,l=n?o:-1,i=Object(t);(n?l--:++l<o)&&!1!==r(i[l],l,i););return t}}},588:function(e,n){e.exports=function(e,n){var t=e.length;for(e.sort(n);t--;)e[t]=e[t].value;return e}},589:function(e,n,t){var a=t(590);e.exports=function(e,n,t){for(var r=-1,o=e.criteria,l=n.criteria,i=o.length,c=t.length;++r<i;){var s=a(o[r],l[r]);if(s)return r>=c?s:s*("desc"==t[r]?-1:1)}return e.index-n.index}},590:function(e,n,t){var a=t(126);e.exports=function(e,n){if(e!==n){var t=void 0!==e,r=null===e,o=e===e,l=a(e),i=void 0!==n,c=null===n,s=n===n,u=a(n);if(!c&&!u&&!l&&e>n||l&&i&&s&&!c&&!u||r&&i&&s||!t&&s||!o)return 1;if(!r&&!l&&!u&&e<n||u&&t&&o&&!r&&!l||c&&t&&o||!i&&o||!s)return-1}return 0}},591:function(e,n,t){var a=t(269),r=t(282),o=t(283);e.exports=function(e,n){return o(r(e,n,a),e+"")}},592:function(e,n,t){var a=t(176),r=t(174),o=t(267),l=t(78);e.exports=function(e,n,t){if(!l(t))return!1;var i=typeof n;return!!("number"==i?r(t)&&o(n,t.length):"string"==i&&n in t)&&a(t[n],e)}},593:function(e,n,t){var a=t(276),r=1,o=4;e.exports=function(e){return a(e,r|o)}},599:function(e,n,t){"use strict";t.r(n);var a=t(8),r=t(9),o=t(12),l=t(10),i=t(11),c=t(16),s=t(1),u=t.n(s),d=t(117),m=t.n(d),f=t(24),p=t(93),h=t(7),v=t(21),E=t(25),g=t(2),x=(t(540),t(544)),b=t(14),y=t(537),j=t.n(y),k=t(571),w=t.n(k),O=t(593),C=t.n(O),N=function(e){var n=e.pool,t=n.enabled,a=n.donation,r=n.url,o=n.username,l=n.password,i=n.proxy,c=e.disabled,s=e.toggleEnabled,d=e.onDelete,m=e.onMoveUp,f=e.onMoveDown,p=e.onChange;return u.a.createElement(b.I18n,null,function(e){e.i18n;return u.a.createElement(g.H,{form:!0},u.a.createElement(g.m,{md:1},u.a.createElement(g.q,null,u.a.createElement("div",{className:"text-right",style:{marginTop:"36px"}},u.a.createElement(E.n,{className:"",variant:"pill",label:!0,color:"success",checked:t,size:"lg",onClick:s})))),u.a.createElement(g.m,{md:3},u.a.createElement(g.q,null,u.a.createElement(g.w,{for:"poolUrl"},u.a.createElement(b.Trans,{id:"Url"})),u.a.createElement(g.r,{type:"text",name:"url",id:"poolUrl",bsSize:"lg",disabled:c,onChange:p,value:r,className:a?"donation-color":""}))),u.a.createElement(g.m,{md:3},u.a.createElement(g.q,null,u.a.createElement(g.w,{for:"poolUsername"},u.a.createElement(b.Trans,{id:"Username"})),u.a.createElement(g.r,{type:"text",name:"username",id:"poolUsername",bsSize:"lg",disabled:c,onChange:p,value:o,className:a?"donation-color":""}))),u.a.createElement(g.m,{md:1},u.a.createElement(g.q,null,u.a.createElement(g.w,{for:"poolUsername"},u.a.createElement(b.Trans,{id:"Password"})),u.a.createElement(g.r,{type:"text",name:"password",id:"poolPassword",bsSize:"lg",disabled:c,onChange:p,value:l||"",className:a?"donation-color":""}))),u.a.createElement(g.m,{md:2},u.a.createElement(g.q,null,u.a.createElement(g.w,{for:"poolProxy"},u.a.createElement(b.Trans,{id:"Proxy (Optional)"})),u.a.createElement(g.r,{type:"text",name:"proxy",id:"poolProxy",bsSize:"lg",disabled:c,onChange:p,value:i||"",className:a?"donation-color":""}))),u.a.createElement(g.m,{md:2},u.a.createElement(g.q,null,u.a.createElement(g.e,{size:"lg",className:"btn-default",style:{marginTop:"29px",marginRight:"5px"},onClick:m},u.a.createElement("i",{className:"fa fa-arrow-up"})),u.a.createElement(g.e,{size:"lg",className:"btn-default",style:{marginTop:"29px",marginRight:"5px"},onClick:f},u.a.createElement("i",{className:"fa fa-arrow-down"})),u.a.createElement(g.e,{size:"lg",className:"btn-danger",style:{marginTop:"29px"},disabled:!!a,onClick:d},u.a.createElement("i",{className:"fa fa-times"})))))})},S=t(66),U={enabled:!0,donation:0,username:"",password:"",url:"",proxy:"",errors:{}},T=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(o.a)(this,Object(l.a)(n).call(this,e))).state=Object(h.a)({},U),t.toggleEnabled=t.toggleEnabled.bind(Object(v.a)(Object(v.a)(t))),t.handleAdd=t.handleAdd.bind(Object(v.a)(Object(v.a)(t))),t.onChange=t.onChange.bind(Object(v.a)(Object(v.a)(t))),t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"onChange",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"toggleEnabled",value:function(){var e=this.state.enabled;this.setState({enabled:!e})}},{key:"handleAdd",value:function(){var e=this.state,n=e.enabled,t=e.donation,a=e.url,r=e.username,o=e.password,l=e.proxy,i=this.props.onAdd,c={};if(a)try{new URL(a)}catch(s){c.url="URL has to be valid URL."}else c.url="URL is required.";if(l)try{new URL(l)}catch(s){c.proxy="Proxy has to be valid URL."}r||(c.username="Username is required."),o||(c.password="Password is required."),0===Object.keys(c).length?(i({enabled:n,donation:t,url:a,username:r,password:o,proxy:l}),this.setState(Object(h.a)({},U))):this.setState({errors:c})}},{key:"render",value:function(){var e=this,n=this.state,t=n.enabled,a=n.username,r=n.password,o=n.url,l=n.proxy,i=n.errors;return u.a.createElement(b.I18n,null,function(n){var c=n.i18n;return u.a.createElement(g.H,{form:!0},u.a.createElement(g.m,{md:1},u.a.createElement(g.q,null,u.a.createElement("div",{className:"text-right",style:{marginTop:"36px"}},u.a.createElement(E.n,{className:"",variant:"pill",label:!0,color:"success",checked:t,size:"lg",onClick:e.toggleEnabled})))),u.a.createElement(g.m,{md:3},u.a.createElement(g.q,null,u.a.createElement(g.w,{for:"poolUrl"},u.a.createElement(b.Trans,{id:"Url"})),u.a.createElement(g.r,{type:"text",name:"url",id:"poolUrl",placeholder:c._({id:"stratum+tcp://us.litecoinpool.org:3333"}),bsSize:"lg",value:o,onChange:e.onChange}),u.a.createElement("span",{className:"text-danger"},i.url))),u.a.createElement(g.m,{md:3},u.a.createElement(g.q,null,u.a.createElement(g.w,{for:"poolUsername"},u.a.createElement(b.Trans,{id:"Username"})),u.a.createElement(g.r,{type:"text",name:"username",id:"poolUsername",placeholder:"futurebit.1",bsSize:"lg",value:a,onChange:e.onChange}),u.a.createElement("span",{className:"text-danger"},i.username))),u.a.createElement(g.m,{md:1},u.a.createElement(g.q,null,u.a.createElement(g.w,{for:"poolPassword"},u.a.createElement(b.Trans,{id:"Password"})),u.a.createElement(g.r,{type:"text",name:"password",id:"poolPassword",placeholder:"x",bsSize:"lg",value:r,onChange:e.onChange}),u.a.createElement("span",{className:"text-danger"},i.password))),u.a.createElement(g.m,{md:2},u.a.createElement(g.q,null,u.a.createElement(g.w,{for:"poolProxy"},u.a.createElement(b.Trans,{id:"Proxy"})),u.a.createElement(g.r,{type:"text",name:"proxy",id:"poolProxy",placeholder:"http://192.168.1.1:3333",bsSize:"lg",value:l,onChange:e.onChange}),u.a.createElement("span",{className:"text-danger"},i.proxy))),u.a.createElement(g.m,{md:2},u.a.createElement(g.q,null,u.a.createElement(g.e,{size:"lg",className:"btn-light",style:{marginTop:"29px"},onClick:e.handleAdd},u.a.createElement("i",{className:"fa fa-plus"})))))})}}]),n}(s.Component),P=function(e){function n(e){var t;Object(a.a)(this,n);var r=(t=Object(o.a)(this,Object(l.a)(n).call(this,e))).props.pools,i=!1,c=1;return r.forEach(function(e){e.enabled&&e.donation&&(i=!0,c=e.donation)}),t.state={pools:C()(r),donation:i,donationValue:c},t.handleAdd=t.handleAdd.bind(Object(v.a)(Object(v.a)(t))),t.handleSaveAndRestart=t.handleSaveAndRestart.bind(Object(v.a)(Object(v.a)(t))),t.marks={donation:{min:1,max:10,data:{1:"Min",2:"2%",3:"3%",4:"4%",5:"5%",6:"6%",7:"7%",8:"8%",9:"9%",10:"Max"}}},t}return Object(i.a)(n,e),Object(r.a)(n,[{key:"onChangePool",value:function(e,n){var t=this.state.pools;t.find(function(e){return e.index===n})[e.target.name]=e.target.value,this.setState({pools:t})}},{key:"handleSaveAndRestart",value:function(){(0,this.props.saveAndRestart)(this.state.pools)}},{key:"handleMove",value:function(e){var n=e.index,t=e.direction,a=this.state.pools,r=a.find(function(e){return e.index===n}),o=a.find(function(e){return"up"===t?e.index===n-1:e.index===n+1});o&&("up"===t?(r.index-=1,o.index+=1):(r.index+=1,o.index-=1)),this.setState({pools:a})}},{key:"handleDelete",value:function(e){var n=this.state.pools,t=n.findIndex(function(n){return n.index===e}),a=n[t];n.forEach(function(e){e.index>a.index&&(e.index-=1)}),n.splice(t,1),this.setState({pools:n})}},{key:"handleToggleEnabled",value:function(e){var n=this.state.pools,t=n.find(function(n){return n.index===e});t.enabled=!t.enabled,this.setState({pools:n})}},{key:"handleAdd",value:function(e){var n=this.state.pools;n.push(Object(h.a)({},e,{index:n.length})),this.setState({pools:n})}},{key:"onSelect",value:function(e){var n=this.state.pools;n.map(function(n){return n.donation&&(n.enabled=e),n}),this.setState({pools:n,donation:e})}},{key:"onChange",value:function(e){this.state.pools.map(function(n){return n.donation&&(n.donation=e),n}),this.setState({donationValue:e})}},{key:"render",value:function(){var e=this,n=this.state,t=n.pools,a=n.donation,r=n.donationValue,o=this.props.pools,l=!j()(w()(t,[function(e){return e.index}]),w()(o,[function(e){return e.index}]));return u.a.createElement(b.I18n,null,function(n){n.i18n;return u.a.createElement("div",{className:"animated fadeIn"},l&&u.a.createElement(g.H,null,u.a.createElement(g.m,{lg:"12"},u.a.createElement(g.f,null,u.a.createElement(g.j,{className:"bg-dark"},u.a.createElement(g.e,{size:"sm",className:"btn-warning text-uppercase",onClick:e.handleSaveAndRestart,disabled:!l},u.a.createElement(b.Trans,{id:"Save & Restart"})),u.a.createElement("span",{className:"ml-2"},u.a.createElement(b.Trans,{id:"You need to restart your miner to apply changes."})))))),u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(g.H,null,u.a.createElement(g.m,{lg:"12"},u.a.createElement(g.f,null,u.a.createElement(g.j,null,u.a.createElement(g.l,null,u.a.createElement(b.Trans,{id:"Pools"})),u.a.createElement(g.k,{className:"text-muted"},u.a.createElement(b.Trans,{id:"Manage pools configuration for your miner"}))),u.a.createElement(g.g,null,w()(t,function(e){return e.index}).map(function(n){return!n.donation&&u.a.createElement(N,{pool:n,disabled:!1,key:n.index,toggleEnabled:function(){return e.handleToggleEnabled(n.index)},onDelete:function(){return e.handleDelete(n.index)},onMoveUp:function(){return e.handleMove({index:n.index,direction:"up"})},onMoveDown:function(){return e.handleMove({index:n.index,direction:"down"})},onChange:function(t){return e.onChangePool(t,n.index)}})}),u.a.createElement(T,{onAdd:e.handleAdd}))))),u.a.createElement(g.H,null,u.a.createElement(g.m,{lg:"12"},u.a.createElement(g.f,null,u.a.createElement(g.j,null,u.a.createElement(E.n,{className:"float-left mr-2",variant:"pill",label:!0,color:"primary",checked:a,size:"sm",onChange:function(){return e.onSelect(!a)}}),u.a.createElement(g.l,null,u.a.createElement(b.Trans,{id:"Donation pool"})," ",a&&u.a.createElement("span",null,r,"%")),u.a.createElement(g.k,{className:"text-muted"},"Donate a bit of your hashrate to FutureBit to support next development.")),u.a.createElement(g.g,null,u.a.createElement(g.p,null,u.a.createElement(g.H,{form:!0,className:"m-3 mb-4 justify-content-center"},u.a.createElement(g.m,{xl:"8"},u.a.createElement(x.a,{min:e.marks.donation.min,max:e.marks.donation.max,marks:e.marks.donation.data,step:e.marks.donation.step,disabled:!a,defaultValue:r,onChange:function(n){return e.onChange(n)}}))))))))))})}}]),n}(s.Component),A=Object(c.connect)(null,function(e){return{saveAndRestart:function(n){e(Object(p.e)(n))}}})(P),z=function(e){function n(){return Object(a.a)(this,n),Object(o.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(i.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.fetchPools)()}},{key:"render",value:function(){var e=this.props.poolsData,n=e.loading,t=e.pools;return!1!==n?u.a.createElement(f.a,null):u.a.createElement(A,{pools:t})}}]),n}(s.Component),q=Object(c.connect)(function(e){return{poolsData:{loading:e.pools.loading,pools:e.pools.pools&&e.pools.pools.map(function(e){return m()(e,["id"])})}}},function(e){return{fetchPools:function(){e(Object(p.c)())}}})(z);n.default=q}}]);
//# sourceMappingURL=5.1760acb9.chunk.js.map