(this.webpackJsonpswapimovie=this.webpackJsonpswapimovie||[]).push([[0],{19:function(e,t,a){e.exports={movieDetailsPage:"MovieDetailsPage_movieDetailsPage__T-hfB",choice:"MovieDetailsPage_choice__z90I6"}},31:function(e,t,a){e.exports=a.p+"static/media/defaultStarWars.83796e7b.jpg"},32:function(e,t,a){e.exports={movei:"Movie_movei__2nImw"}},36:function(e,t,a){e.exports={loader:"Loader_loader__3vYoJ"}},37:function(e,t,a){e.exports={listMovie:"MoviesList_listMovie__3yeZB"}},38:function(e,t,a){e.exports={searchForm:"SearchBar_searchForm__v8ojd"}},39:function(e,t,a){e.exports=a(85)},44:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),o=a.n(l),i=a(12),c=(a(44),a(13)),u=a(6),s=a(7),p=a(9),m=a(8),h=a(10),v=a(16),f=a.n(v),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"A";return f.a.get("https://swapi.co/api/films/?search=".concat(e)).then((function(e){return e.data.results}))},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return f.a.get("".concat(e)).then((function(e){return e.data}))},b=a(31),y=a.n(b),g=a(32),j=a.n(g),O=function(e){var t=e.title,a=e.director,n=e.url.slice(20,28);return r.a.createElement("li",{className:j.a.movei},r.a.createElement(i.b,{to:n},r.a.createElement("img",{src:y.a,alt:"StarWars"}),r.a.createElement("p",null,t),r.a.createElement("p",null,a)))},_=a(35),k=a.n(_),S=a(36),D=a.n(S),w=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:D.a.loader},r.a.createElement(k.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100}))}}]),t}(n.Component),M=a(37),P=a.n(M),C=a(38),F=a.n(C),x=function(e){var t=e.handleInput,a=e.handeleSubmit,n=e.value;return r.a.createElement("form",{className:F.a.searchForm,onSubmit:a},r.a.createElement("input",{type:"text",autoComplete:"off",placeholder:"Search movies...",onChange:t,value:n}))},I=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={items:[],isLoader:!0},a.handleInput=function(e){e.preventDefault(),a.setState({isLoader:!0}),d(e.target.value).then((function(e){return a.setState({items:e,isLoader:!1})}))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;d().then((function(t){return e.setState({items:t,isLoader:!1})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.items,n=t.isLoader,l=a.sort((function(e,t){return e.title>t.title?1:e.title<t.title?-1:0}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{handleInput:this.handleInput}),0===a.length?r.a.createElement("h2",null,"No match"):r.a.createElement("ul",{className:P.a.listMovie},l.map((function(t){return r.a.createElement(O,Object.assign({},t,{key:t.created,handleInput:e.handleInput}))}))),n&&r.a.createElement(w,null))}}]),t}(n.Component),B=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={ships:{}},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.location.urlShip&&E(this.props.location.urlShip).then((function(t){return e.setState({ships:t})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;this.props.location.urlShip!==e.location.urlShip&&E(this.props.location.urlShip).then((function(e){return a.setState({ships:e})}))}},{key:"render",value:function(){var e=this.state.ships;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"About ship"),r.a.createElement("h4",null,e.name),r.a.createElement("p",null,"model: ",e.model),r.a.createElement("p",null,"manufacturer: ",e.manufacturer))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={planet:null},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.location.urlPlanet&&E(this.props.location.urlPlanet).then((function(t){return e.setState({planet:t})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;this.props.location.urlPlanet!==e.location.urlPlanet&&E(this.props.location.urlPlanet).then((function(e){return a.setState({planet:e})}))}},{key:"render",value:function(){var e=this.state.planet;return r.a.createElement(r.a.Fragment,null,e&&r.a.createElement("div",null,r.a.createElement("h3",null,"About planet"),r.a.createElement("h4",null,"name: ",e.name),r.a.createElement("p",null,"rotation_period: ",e.rotation_period),r.a.createElement("p",null,"orbital_period: ",e.orbital_period),r.a.createElement("p",null,"climate: ",e.climate),r.a.createElement("p",null,"planet.gravity: ",e.gravity),r.a.createElement("p",null,"planet.terrain: ",e.terrain),r.a.createElement("p",null,"population: ",e.population)))}}]),t}(n.Component),L=a(19),N=a.n(L),G=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={movieDetals:{}},a.handleGoBack=function(){a.props.history.push("/")},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.url,a="https://swapi.co/api".concat(t);E(a).then((function(t){return e.setState({movieDetals:t})}))}},{key:"render",value:function(){var e=this,t=this.state.movieDetals,a=this.props.location.state;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:this.handleGoBack},"Go back"),r.a.createElement("div",{className:N.a.movieDetailsPage},r.a.createElement("div",null,r.a.createElement("h1",null,t.title),r.a.createElement("p",null,t.opening_crawl),r.a.createElement("div",{className:N.a.choice},r.a.createElement("div",null,r.a.createElement("h3",null,"Choice ship"),t.starships&&t.starships.map((function(t,n){return r.a.createElement("div",{key:t},r.a.createElement(i.b,{to:{pathname:"".concat(e.props.match.url,"/ships").concat(n+1),urlShip:t,state:a}},"starship ",n+1))}))),r.a.createElement("div",null,r.a.createElement("h3",null,"Choice planet"),t.planets&&t.planets.map((function(t,n){return r.a.createElement("div",{key:t},r.a.createElement(i.b,{to:{pathname:"".concat(e.props.match.url,"/planets").concat(n+1),urlPlanet:t,state:a,title:t.title}},"planet ",n+1))})))))),r.a.createElement(c.a,{path:"".concat(this.props.match.url,"/ships:id"),component:B}),r.a.createElement(c.a,{path:"".concat(this.props.match.url,"/planets:id"),component:A}))}}]),t}(n.Component),J=function(){return r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",exact:!0,component:I}),r.a.createElement(c.a,{path:"/films/:id",component:G}))},T=function(){return r.a.createElement(J,null)};o.a.render(r.a.createElement(i.a,{basename:"/"},r.a.createElement(T,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.fa38de62.chunk.js.map