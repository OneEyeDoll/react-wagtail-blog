(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{206:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(82),i=a.n(s),r=(a(91),a(28)),l=a(2),o=a(3),j=a(5),h=a(4),d=(a.p,a(22)),b=a(20),u=a.n(b),O=a(0),g=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){u()("#search-icon").click((function(){u()(".nav").toggleClass("search"),u()(".nav").toggleClass("no-search"),u()(".search-input").toggleClass("search-active")})),u()(".menu-toggle").click((function(){u()(".nav").toggleClass("mobile-nav"),u()(this).toggleClass("is-active")}))}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"nav-wrapper",children:[Object(O.jsx)("div",{className:"grad-bar"}),Object(O.jsxs)("nav",{className:"navbar",children:[Object(O.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png",alt:"Company Logo"}),Object(O.jsxs)("div",{className:"menu-toggle",id:"mobile-menu",children:[Object(O.jsx)("span",{className:"bar"}),Object(O.jsx)("span",{className:"bar"}),Object(O.jsx)("span",{className:"bar"})]}),Object(O.jsxs)("ul",{className:"nav",children:[Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"#",children:"Home"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"#",children:"About"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"#",children:"Work"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"#",children:"Careers"})}),Object(O.jsx)("li",{className:"nav-item",children:Object(O.jsx)("a",{href:"#",children:"Contact Us"})}),Object(O.jsx)(d.b,{id:"search-icon"}),Object(O.jsx)("input",{className:"search-input",type:"text",placeholder:"Search.."})]})]})]})}}]),a}(n.Component),m=(a(93),function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"item-2",children:Object(O.jsxs)("a",{href:"/blog/"+this.props.slug,className:"card",children:[Object(O.jsx)("div",{className:"thumb",style:{"background-image":"url('"+this.props.image_url+"')"}}),Object(O.jsxs)("article",{children:[Object(O.jsx)("h1",{children:this.props.title}),Object(O.jsx)("span",{children:this.props.date})]})]})})}}]),a}(n.Component)),x=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).styleCategoryTitle={"text-align":"center"},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)("h1",{style:this.styleCategoryTitle,children:this.props.name})}}]),a}(n.Component),f=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={results:{},isReady:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v2/pages/?type=blog.BlogPage&fields=date,title,slug,feed_image&offset=0&limit=12").then((function(e){return e.json()})).then((function(t){e.setState({results:t.items,isReady:!0})}))}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x,{name:"Welcome"}),Object(O.jsx)("div",{className:"band",children:this.state.isReady?Object.entries(this.state.results).map((function(e){var t=Object(r.a)(e,2),a=(t[0],t[1]);return Object(O.jsx)(m,{title:a.title,image_url:a.feed_image.meta.download_url,date:a.date,slug:a.meta.slug})})):Object(O.jsx)(O.Fragment,{})})]})}}]),a}(n.Component),p=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsxs)("footer",{className:"footer",children:[Object(O.jsxs)("div",{className:"footer__addr",children:[Object(O.jsx)("h1",{className:"footer__logo",children:"Something"}),Object(O.jsx)("h2",{children:"Contact"}),Object(O.jsxs)("address",{children:["5534 Somewhere In. The World 22193-10212",Object(O.jsx)("br",{}),Object(O.jsx)("a",{className:"footer__btn",href:"mailto:example@gmail.com",children:"Email Us"})]})]}),Object(O.jsxs)("ul",{className:"footer__nav",children:[Object(O.jsxs)("li",{className:"nav__item",children:[Object(O.jsx)("h2",{className:"nav__title",children:"Media"}),Object(O.jsxs)("ul",{className:"nav__ul",children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:"Online"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:"Print"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:"Alternative Ads"})})]})]}),Object(O.jsxs)("li",{className:"nav__item nav__item--extra",children:[Object(O.jsx)("h2",{className:"nav__title",children:"Technology"}),Object(O.jsxs)("ul",{className:"nav__ul nav__ul--extra",children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:"Hardware Design"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:"Software Design"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:"Digital Signage"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:"Automation"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:"Artificial Intelligence"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:"IoT"})})]})]}),Object(O.jsxs)("li",{className:"nav__item",children:[Object(O.jsx)("h2",{className:"nav__title",children:"Legal"}),Object(O.jsxs)("ul",{className:"nav__ul",children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:"Privacy Policy"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:"Terms of Use"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:"Sitemap"})})]})]})]}),Object(O.jsxs)("div",{className:"legal",children:[Object(O.jsx)("p",{children:"\xa9 2019 Something. All rights reserved."}),Object(O.jsx)("div",{className:"legal__links",children:Object(O.jsxs)("span",{children:["Made with ",Object(O.jsx)("span",{className:"heart",children:"\u2665"})," remotely from Anywhere"]})})]})]})}}]),a}(n.Component),v=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).imageTitleStyle={"background-image":"url("+n.props.imageUrl+")",opacity:"0.5",width:"100vw",height:"50vh","background-position":"center center","background-attachment":"fixed"},n.imageTitleStyleH1={opacity:"1",color:"white","text-align":"center",border:"1vw"},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("section",{style:this.imageTitleStyle,children:Object(O.jsx)("h1",{style:this.imageTitleStyleH1,children:this.props.title})})})}}]),a}(n.Component),y=a(209),N=a(210),_=a(211),k=a(83),P=a.n(k),C=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsxs)("section",{className:"grid-container",children:[Object(O.jsxs)("div",{className:"about",children:["Follow us on Twitter",Object(O.jsx)(d.c,{}),Object(O.jsx)("hr",{}),"Share:",Object(O.jsx)(y.a,{url:window.location.href,children:Object(O.jsx)(d.c,{})}),Object(O.jsx)(N.a,{url:window.location.href,children:Object(O.jsx)(d.a,{})}),Object(O.jsx)(_.a,{url:window.location.href,children:Object(O.jsx)(d.d,{})}),Object(O.jsx)("hr",{}),this.props.date]}),Object(O.jsx)("div",{className:"contentLayout",children:Object(O.jsx)(P.a,{children:this.props.body})}),Object(O.jsxs)("div",{className:"related",children:[Object(O.jsx)("h1",{children:"Related"}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"band",children:Object(O.jsx)(m,{})})]})]})}}]),a}(n.Component),w=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={body:"",date:"",title:"",image:"",isReady:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v2/pages/?type=blog.BlogPage&fields=body,date,feed_image",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e.setState({body:t.items[0].body,date:t.items[0].date,title:t.items[0].title,image:t.items[0].feed_image.meta.download_url,isReady:!0})}))}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[this.state.isReady?Object(O.jsx)(v,{title:this.state.title,imageUrl:this.state.image}):Object(O.jsx)(O.Fragment,{}),Object(O.jsx)(C,{body:this.state.body,date:this.state.date})]})}}]),a}(n.Component),R=a(23),S="LEFT",M="RIGHT",T=function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=e,c=[];n<=t;)c.push(n),n+=a;return c},F=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this,e)).gotoPage=function(e){var t=n.props.onPageChanged,a=void 0===t?function(e){return e}:t,c=Math.max(0,Math.min(e,n.totalPages)),s={currentPage:c,totalPages:n.totalPages,pageLimit:n.pageLimit,totalRecords:n.totalRecords};n.setState({currentPage:c},(function(){return a(s)}))},n.handleClick=function(e){return function(t){t.preventDefault(),n.gotoPage(e)}},n.handleMoveLeft=function(e){e.preventDefault(),n.gotoPage(n.state.currentPage-2*n.pageNeighbours-1)},n.handleMoveRight=function(e){e.preventDefault(),n.gotoPage(n.state.currentPage+2*n.pageNeighbours+1)},n.fetchPageNumbers=function(){var e=n.totalPages,t=n.state.currentPage,a=n.pageNeighbours,c=2*n.pageNeighbours+3;if(e>c+2){var s=Math.max(2,t-a),i=Math.min(e-1,t+a),r=T(s,i),l=s>2,o=e-i>1,j=c-(r.length+1);switch(!0){case l&&!o:var h=T(s-j,s-1);r=[S].concat(Object(R.a)(h),Object(R.a)(r));break;case!l&&o:var d=T(i+1,i+j);r=[].concat(Object(R.a)(r),Object(R.a)(d),[M]);break;case l&&o:default:r=[S].concat(Object(R.a)(r),[M])}return[1].concat(Object(R.a)(r),[e])}return T(1,e)};var c=e.totalRecords,s=void 0===c?null:c,i=e.pageLimit,r=void 0===i?30:i,o=e.pageNeighbours,j=void 0===o?0:o;return n.pageLimit="number"===typeof r?r:30,n.totalRecords="number"===typeof s?s:0,n.pageNeighbours="number"===typeof j?Math.max(0,Math.min(j,2)):0,n.totalPages=Math.ceil(n.totalRecords/n.pageLimit),n.state={currentPage:1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;if(!this.totalRecords||1===this.totalPages)return null;var t=this.state.currentPage,a=this.fetchPageNumbers();return Object(O.jsx)(n.Fragment,{children:Object(O.jsx)("ul",{className:"pagination",children:a.map((function(a,n){return a===S?Object(O.jsx)("li",{className:"page-item",children:Object(O.jsxs)("a",{className:"page-link",href:"#","aria-label":"Previous",onClick:e.handleMoveLeft,children:[Object(O.jsx)("span",{"aria-hidden":"true",children:"\xab"}),Object(O.jsx)("span",{className:"sr-only",children:"Previous"})]})},n):a===M?Object(O.jsx)("li",{className:"page-item",children:Object(O.jsxs)("a",{className:"page-link",href:"#","aria-label":"Next",onClick:e.handleMoveRight,children:[Object(O.jsx)("span",{"aria-hidden":"true",children:"\xbb"}),Object(O.jsx)("span",{className:"sr-only",children:"Next"})]})},n):Object(O.jsx)("li",{className:"page-item".concat(t===a?" active":""),children:Object(O.jsx)("a",{className:"page-link",href:"#",onClick:e.handleClick(a),children:a})},n)}))})})}},{key:"componentDidMount",value:function(){this.gotoPage(1)}}]),a}(n.Component),L=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={activePage:1,results:{},isReady:!1},n}return Object(o.a)(a,[{key:"handlePageChange",value:function(e){console.log("active page is ".concat(e)),this.setState({activePage:e})}},{key:"componentDidMount",value:function(){var e=this;fetch("/api/v2/pages?type=blog.BlogPage&offset="+(12*(this.state.activePage-1)).toString()+"&limit=12&fields=date,title,slug,feed_image&category="+this.props.id).then((function(e){return e.json()})).then((function(t){e.setState({activePage:1,results:t.items,isReady:!0})}))}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:Object(O.jsx)(x,{name:this.props.name})}),Object(O.jsx)("div",{className:"band",children:this.state.isReady?Object.entries(this.state.results).map((function(e){var t=Object(r.a)(e,2),a=(t[0],t[1]);return Object(O.jsx)(m,{title:a.title,image_url:a.feed_image.meta.download_url,date:a.date,slug:a.meta.slug})})):Object(O.jsx)(O.Fragment,{})}),Object(O.jsx)("div",{className:"pagebar",children:Object(O.jsx)(F,{totalRecords:36,pageLimit:12,pageNeighbours:3,onPageChanged:void 0})})]})}}]),a}(n.Component),D=a(85),A=a(6),B=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={categories:{},isReady:!1},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("/categories").then((function(e){return e.json()})).then((function(t){e.setState({categories:t,isReady:!0})}))}},{key:"render",value:function(){var e=this,t=window.location.pathname.split("/");return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(D.a,{children:[Object(O.jsx)(g,{}),Object(O.jsx)(A.a,{exact:!0,path:"/",component:function(){return Object(O.jsx)(f,{categories:e.state.categories})}}),Object(O.jsx)(A.a,{path:"/blog",component:function(){return Object(O.jsx)(w,{slug:t[t.length-1]})}}),this.state.isReady?Object.entries(this.state.categories).map((function(e){var t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(O.jsx)(A.a,{path:"/category/"+n+"/",component:function(){return Object(O.jsx)(L,{id:a,name:n})}})})):Object(O.jsx)(O.Fragment,{}),Object(O.jsx)(p,{})]})})}}]),a}(n.Component),I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,212)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(B,{})}),document.getElementById("root")),I()},91:function(e,t,a){},93:function(e,t,a){}},[[206,1,2]]]);
//# sourceMappingURL=main.6879f19b.chunk.js.map