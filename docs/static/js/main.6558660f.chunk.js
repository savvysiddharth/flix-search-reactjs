(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/logo.7dbe1adc.svg"},16:function(e,t,a){e.exports=a.p+"static/media/loading.afdb8fab.svg"},18:function(e,t,a){e.exports=a(39)},24:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),s=(a(24),a(5)),i=a(6),o=a(8),m=a(7),u=a(9),h=a(15),p=a.n(h),E=(a(26),a(42)),d=a(43),f=function(e){return r.a.createElement("p",{className:"App-intro"},e.message)},g=(a(28),a(40)),b=function(e){var t=e.series;return r.a.createElement("div",{className:"result-item"},r.a.createElement(g.a,{to:"series/".concat(t.show.id),className:"item-link"},r.a.createElement("li",{className:"result-item-title"},t.show.name)),null===t.show.summary||""===t.show.summary.trim(),null!==t.show.summary&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.show.summary.substr(0,100)+".."},className:"result-item-brief"}))},v=function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:"series-list"},e.list.map(function(e){return r.a.createElement(b,{key:e.show.id,series:e})})))},w=(a(32),a(16)),N=a.n(w),j=(a(34),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("img",{src:N.a,className:"loading",alt:"logo"})}}]),t}(n.Component)),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={series:[],seriesName:"",isFetching:!1},a.onSeriesInputChange=function(e){a.setState({seriesName:e.target.value,isFetching:!0}),fetch("http://api.tvmaze.com/search/shows?q="+e.target.value).then(function(e){return e.json()}).then(function(e){a.setState({series:e,isFetching:!1})})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.series,a=e.seriesName,n=e.isFetching;return r.a.createElement("div",null,r.a.createElement(f,{message:"Here you can find all tv series and web series!"}),r.a.createElement("div",null,r.a.createElement("input",{value:a,type:"text",onChange:this.onSeriesInputChange,placeholder:"Search here...",className:"search-box"})),0===t.length&&""===a.trim()&&r.a.createElement("p",null,"Enter a series.."),!n&&0===t.length&&""!==a.trim()&&r.a.createElement("p",null,"No TV series found"),n&&r.a.createElement(j,null),!n&&r.a.createElement(v,{list:t}))}}]),t}(n.Component),O=(a(36),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={show:null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("http://api.tvmaze.com/shows/"+t+"?embed=episodes").then(function(e){return e.json()}).then(function(t){e.setState({show:t})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state.show;return console.log(e),r.a.createElement("div",null,null===e&&r.a.createElement(j,null),null!==e&&r.a.createElement("div",null,r.a.createElement("h1",null,e.name),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"grid-item"},r.a.createElement("a",{href:e.image.original},r.a.createElement("img",{className:"show-art",src:e.image.medium,alt:"Show art"}))),r.a.createElement("div",{className:"grid-item"},r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.summary},className:"show-info"}),r.a.createElement("ul",{className:"info-list"},r.a.createElement("li",null,r.a.createElement("b",null,"Name")," : ",e.name),r.a.createElement("li",null,r.a.createElement("b",null,"Language")," : ",e.language),r.a.createElement("li",null,r.a.createElement("b",null,"Premiered")," : ",e.premiered),r.a.createElement("li",null,r.a.createElement("b",null,"Status")," : ",e.status),r.a.createElement("li",null,r.a.createElement("b",null,"Genre")," : ",e.genres.join(" | "))))),"Show id : ",r.a.createElement("a",{href:e.url},this.props.match.params.id)),r.a.createElement("br",null),r.a.createElement(g.a,{to:"/",className:"test"},"\u2190 Go back to search"),r.a.createElement("br",null),r.a.createElement("br",null))}}]),t}(n.Component)),k=function(e){return r.a.createElement(E.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:y}),r.a.createElement(d.a,{exact:!0,path:"/series/:id",component:O}))},S=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",{className:"App-title"},"FLiX search")),r.a.createElement(k,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(41);c.a.render(r.a.createElement(x.a,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.6558660f.chunk.js.map