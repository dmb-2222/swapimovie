(this.webpackJsonpswapimovie=this.webpackJsonpswapimovie||[]).push([[0],{19:function(e,t,a){e.exports={movieDetailsPage:"MovieDetailsPage_movieDetailsPage__T-hfB",choice:"MovieDetailsPage_choice__z90I6"}},31:function(e,t,a){e.exports=a.p+"static/media/defaultStarWars.83796e7b.jpg"},32:function(e,t,a){e.exports={movei:"Movie_movei__2nImw"}},36:function(e,t,a){e.exports={loader:"Loader_loader__3vYoJ"}},37:function(e,t,a){e.exports={listMovie:"MoviesList_listMovie__3yeZB"}},38:function(e,t,a){e.exports={searchForm:"SearchBar_searchForm__v8ojd"}},39:function(e,t,a){e.exports=a(85)},44:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),c=a.n(l),o=a(12),i=(a(44),a(13)),s=a(6),u=a(7),p=a(9),m=a(8),h=a(10),v=a(16),f=a.n(v),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"A";return f.a.get("https://swapi.co/api/films/?search=".concat(e)).then((function(e){return e.data.results}))},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return f.a.get("".concat(e)).then((function(e){return e.data}))},b=a(31),g=a.n(b),y=a(32),j=a.n(y),O=function(e){var t=e.title,a=e.director,n=e.url.slice(20,28);return r.a.createElement("li",{className:j.a.movei},r.a.createElement(o.b,{to:n},r.a.createElement("img",{src:g.a,alt:"StarWars"}),r.a.createElement("p",null,t),r.a.createElement("p",null,a)))},_=a(35),k=a.n(_),S=a(36),D=a.n(S),w=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:D.a.loader},r.a.createElement(k.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}))}}]),t}(n.Component),M=a(37),C=a.n(M),F=a(38),x=a.n(F),I=function(e){var t=e.handleInput,a=e.handeleSubmit,n=e.value;return r.a.createElement("form",{className:x.a.searchForm,onSubmit:a},r.a.createElement("input",{type:"text",autoComplete:"off",placeholder:"Search movies...",onChange:t,value:n}))},B=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={items:[],isLoader:!0},a.handleInput=function(e){e.preventDefault(),a.setState({isLoader:!0}),d(e.target.value).then((function(e){return a.setState({items:e,isLoader:!1})})),console.log(e.target.value)},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;d().then((function(t){return e.setState({items:t,isLoader:!1})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.items,n=t.isLoader,l=a.sort((function(e,t){return e.title>t.title?1:e.title<t.title?-1:0}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{handleInput:this.handleInput}),0===a.length?r.a.createElement("h2",null,"No match"):r.a.createElement("ul",{className:C.a.listMovie},l.map((function(t){return r.a.createElement(O,Object.assign({},t,{key:t.created,handleInput:e.handleInput}))}))),n&&r.a.createElement(w,null))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={ships:{}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;E(this.props.location.urlShip).then((function(t){return e.setState({ships:t})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;t.ships.name===this.state.ships.name&&E(this.props.location.urlShip).then((function(e){return a.setState({ships:e})}))}},{key:"render",value:function(){var e=this.state.ships;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"About ship"),r.a.createElement("h4",null,e.name),r.a.createElement("p",null,"model:",e.model),r.a.createElement("p",null,"manufacturer:",e.manufacturer))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={planet:{}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;E(this.props.location.urlPlanet).then((function(t){return e.setState({planet:t})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;t.planet.name===this.state.planet.name&&E(this.props.location.urlPlanet).then((function(e){return a.setState({planet:e})}))}},{key:"render",value:function(){var e=this.state.planet;return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"About planet"),r.a.createElement("h4",null,"name:",e.name),r.a.createElement("p",null,"rotation_period:",e.rotation_period),r.a.createElement("p",null,"orbital_period:",e.orbital_period),r.a.createElement("p",null,"climate:",e.climate),r.a.createElement("p",null,"planet.gravity:",e.gravity),r.a.createElement("p",null,"planet.terrain:",e.terrain),r.a.createElement("p",null,"population:",e.population))}}]),t}(n.Component),L=a(19),N=a.n(L),G=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={movieDetals:{}},a.handleGoBack=function(){a.props.history.push("/")},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.url,a="https://swapi.co/api".concat(t);E(a).then((function(t){return e.setState({movieDetals:t})}))}},{key:"render",value:function(){var e=this,t=this.state.movieDetals,a=this.props.location.state;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:this.handleGoBack},"Go back"),r.a.createElement("div",{className:N.a.movieDetailsPage},r.a.createElement("div",null,r.a.createElement("h1",null,t.title),r.a.createElement("p",null,t.opening_crawl),r.a.createElement("div",{className:N.a.choice},r.a.createElement("div",null,r.a.createElement("h3",null,"Choice ship"),t.starships&&t.starships.map((function(t,n){return r.a.createElement("div",{key:t},r.a.createElement(o.b,{to:{pathname:"".concat(e.props.match.url,"/ships").concat(n+1),urlShip:t,state:a}},"starship ",n+1))}))),r.a.createElement("div",null,r.a.createElement("h3",null,"Choice planet"),t.planets&&t.planets.map((function(t,n){return r.a.createElement("div",{key:t},r.a.createElement(o.b,{to:{pathname:"".concat(e.props.match.url,"/planets").concat(n+1),urlPlanet:t,state:a}},"planet ",n+1))})))))),r.a.createElement(i.a,{path:"".concat(this.props.match.url,"/ships:id"),component:P}),r.a.createElement(i.a,{path:"".concat(this.props.match.url,"/planets:id"),component:A}))}}]),t}(n.Component),J=function(){return r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:B}),r.a.createElement(i.a,{path:"/films/:id",component:G}))},T=function(){return r.a.createElement(J,null)};c.a.render(r.a.createElement(o.a,{basename:"/"},r.a.createElement(T,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.d980e29b.chunk.js.map