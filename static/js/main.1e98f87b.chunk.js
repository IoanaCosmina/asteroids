(this.webpackJsonpasteroids=this.webpackJsonpasteroids||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/1.73bb763c.jpg"},20:function(e,t,a){e.exports=a.p+"static/media/2.d247ff0d.jpg"},21:function(e,t,a){e.exports=a.p+"static/media/3.e26c2309.jpg"},22:function(e,t,a){e.exports=a.p+"static/media/4.bfc93194.jpg"},23:function(e,t,a){e.exports=a.p+"static/media/5.08fdadb9.jpg"},24:function(e,t,a){e.exports=a(54)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),s=a.n(o),i=(a(29),a(3)),c=a(4),l=a(5),m=a(6),d=(a(30),a(31),a(8)),u=a.n(d),f=a(2),g=a.n(f),h="https://api.nasa.gov/neo/rest/v1",v="utPTfalKIby2KQN1rACUXKB4jGHmIK061GVqPmYQ",p=(a(50),a(19)),b=a.n(p),y=a(20),E=a.n(y),N=a(21),k=a.n(N),j=a(22),I=a.n(j),M=a(23),P=a.n(M),O=[b.a,E.a,k.a,I.a,P.a],w=function(e){var t=e.asteroid;if(!t)return null;var a=t.name,n=t.estimated_diameter,o=t.close_approach_data[0],s=o.miss_distance,i=o.relative_velocity,c=t.is_potentially_hazardous_asteroid,l=s.kilometers,m=i.kilometers_per_hour,d=n.meters.estimated_diameter_min,u=n.meters.estimated_diameter_max;return r.a.createElement("div",{className:"card section"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:O[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return Math.floor(Math.random()*Math.floor(e))}()],alt:"asteroid"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-3"},"Name: ",a),r.a.createElement("article",{className:c?"message is-warning":"message is-success"},r.a.createElement("div",{className:"message-body"},r.a.createElement("p",null,"Potentially Hazardous? ",c?"Yes":"No"))))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label is-small"},"Distance:"),r.a.createElement("span",null,Number(l).toFixed(2)," ","kilometers")),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label is-small"},"Velocity:"),r.a.createElement("span",null,Number(m).toFixed(2)," ","kilometers","/hour")),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label is-small"},"Diameter:"),r.a.createElement("span",null,Number(d).toFixed(2)," - ",Number(u).toFixed(2)," ","meters")))))},Y=a(7),A=(a(51),function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=e,r=[];n<=t;)r.push(n),n+=a;return r}),_=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;Object(i.a)(this,a),(n=t.call(this,e)).gotoPage=function(e){var t=n.props.onPageChanged,a=void 0===t?function(e){return e}:t,r=Math.max(0,Math.min(e,n.totalPages)),o={currentPage:r,totalPages:n.totalPages,pageLimit:n.pageLimit,totalRecords:n.totalRecords};n.setState({currentPage:r},(function(){return a(o)}))},n.handleClick=function(e,t){t.preventDefault(),n.gotoPage(e)},n.handleMoveLeft=function(e){e.preventDefault(),n.gotoPage(n.state.currentPage-2*n.pageNeighbours-1)},n.handleMoveRight=function(e){e.preventDefault(),n.gotoPage(n.state.currentPage+2*n.pageNeighbours+1)},n.fetchPageNumbers=function(){var e=n.totalPages,t=n.state.currentPage,a=n.pageNeighbours,r=2*n.pageNeighbours+3;if(e>r+2){var o=[],s=t-a,i=t+a,c=e-1,l=s>2?s:2,m=i<c?i:c,d=r-(o=A(l,m)).length-1,u=l>2,f=m<c,g="LEFT";if(u&&!f){var h=A(l-d,l-1);o=[g].concat(Object(Y.a)(h),Object(Y.a)(o))}else if(!u&&f){var v=A(m+1,m+d);o=[].concat(Object(Y.a)(o),Object(Y.a)(v),["RIGHT"])}else u&&f&&(o=[g].concat(Object(Y.a)(o),["RIGHT"]));return[1].concat(Object(Y.a)(o),[e])}return A(1,e)};var r=e.totalRecords,o=void 0===r?null:r,s=e.pageLimit,c=void 0===s?30:s,l=e.pageNeighbours,m=void 0===l?0:l;return n.pageLimit="number"===typeof c?c:30,n.totalRecords="number"===typeof o?o:0,n.pageNeighbours="number"===typeof m?Math.max(0,Math.min(m,2)):0,n.totalPages=Math.ceil(n.totalRecords/n.pageLimit),n.state={currentPage:1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.gotoPage(1)}},{key:"render",value:function(){var e=this;if(!this.totalRecords)return null;if(1===this.totalPages)return null;var t=this.state.currentPage,a=this.fetchPageNumbers();return r.a.createElement(n.Fragment,null,r.a.createElement("nav",{className:"pagination is-centered",role:"navigation","aria-label":"pagination"},r.a.createElement("ul",{className:"pagination-list"},a.map((function(a,n){return"LEFT"===a?r.a.createElement("li",{key:n},r.a.createElement("button",{className:"pagination-link pagination-previous","aria-label":"Previous",onClick:e.handleMoveLeft},r.a.createElement("span",{className:"sr-only"},"Previous"))):"RIGHT"===a?r.a.createElement("li",{key:n},r.a.createElement("button",{className:"pagination-link pagination-next","aria-label":"Next",onClick:e.handleMoveRight},r.a.createElement("span",{className:"sr-only"},"Next"))):r.a.createElement("li",{key:n},r.a.createElement("button",{className:"pagination-link ".concat(t===a?" is-current":""),onClick:function(t){return e.handleClick(a,t)}},a))})))))}}]),a}(n.Component),S=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={allAsteroids:[],currentAsteroids:[],currentPage:null,totalPages:null},e.onPageChanged=function(t){var a=e.state.allAsteroids,n=t.currentPage,r=t.totalPages,o=t.pageLimit,s=(n-1)*o,i=a.slice(s,s+o);e.setState({currentPage:n,currentAsteroids:i,totalPages:r})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;navigator.onLine||this.setState({allAsteroids:localStorage.getItem("allAsteroids")});var t=g()().format("YYYY-MM-DD");u.a.get("".concat(h,"/feed?start_date=").concat(t,"&end_date=").concat(t,"&api_key=").concat(v)).then((function(t){var a=t.data.near_earth_objects;e.setState({allAsteroids:a[Object.keys(a)[0]]}),localStorage.setItem("allAsteroids",a[Object.keys(a)[0]])})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.allAsteroids,a=e.currentAsteroids,n=t.length;return 0===n?null:r.a.createElement("div",null,r.a.createElement("h1",{className:"title is-spaced"},"Today - ",g()().format("MMMM Do, YYYY")),r.a.createElement("h2",{className:"subtitle"},n," Asteroids"),r.a.createElement("div",{className:""},r.a.createElement(_,{totalRecords:n,pageLimit:3,pageNeighbours:1,onPageChanged:this.onPageChanged})),r.a.createElement("div",{className:"container today--container"},a.map((function(e){return r.a.createElement(w,{key:e.id,asteroid:e})}))))}}]),a}(n.Component),D=(a(52),a(53),function(e){var t=e.history,a=t.date,n=t.count,o=t.allAsteroids;return o?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("header",{className:"card-header"},r.a.createElement("p",{className:"card-header-title"},a)),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label is-small"},"Total:"),r.a.createElement("span",null,n," asteroids")),r.a.createElement("p",null,"List of potentially hazardous asteroids:"),r.a.createElement("ul",{className:"fa-ul"},o.filter((function(e){return e.is_potentially_hazardous_asteroid})).map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("i",{className:"fa-li fa fa-exclamation"}),r.a.createElement("span",null,e.name))}))))))):null}),x=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={yesterdayInfo:{},twodaysInfo:{},threedaysInfo:{}},e.getAsteroids=function(e){return u.a.get("".concat(h,"/feed?start_date=").concat(e,"&end_date=").concat(e,"&api_key=").concat(v))},e.getYesterdayInfo=function(){var t=g()().subtract(1,"days").format("YYYY-MM-DD");e.getAsteroids(t).then((function(t){var a=t.data.near_earth_objects,n={date:g()().subtract(1,"days").format("MMMM Do, YYYY"),allAsteroids:a[Object.keys(a)[0]],count:a[Object.keys(a)[0]].length};localStorage.setItem("yesterdayInfo",JSON.stringify(n)),e.setState({yesterdayInfo:n})}))},e.getTwoDaysInfo=function(){var t=g()().subtract(2,"days").format("YYYY-MM-DD");e.getAsteroids(t).then((function(t){var a=t.data.near_earth_objects,n={date:g()().subtract(2,"days").format("MMMM Do, YYYY"),allAsteroids:a[Object.keys(a)[0]],count:a[Object.keys(a)[0]].length};localStorage.setItem("twodaysInfo",JSON.stringify(n)),e.setState({twodaysInfo:n})}))},e.getThreeDaysInfo=function(){var t=g()().subtract(3,"days").format("YYYY-MM-DD");e.getAsteroids(t).then((function(t){var a=t.data.near_earth_objects,n={date:g()().subtract(3,"days").format("MMMM Do, YYYY"),allAsteroids:a[Object.keys(a)[0]],count:a[Object.keys(a)[0]].length};localStorage.setItem("threedaysInfo",JSON.stringify(n)),e.setState({threedaysInfo:n})}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){navigator.onLine||(this.setState({yesterdayInfo:JSON.parse(localStorage.getItem("yesterdayInfo"))}),this.setState({twodaysInfo:JSON.parse(localStorage.getItem("twodaysInfo"))}),this.setState({threedaysInfo:JSON.parse(localStorage.getItem("threedaysInfo"))})),this.getYesterdayInfo(),this.getTwoDaysInfo(),this.getThreeDaysInfo()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"title is-spaced"},"Last 3 days"),r.a.createElement("div",{className:"container history--container"},r.a.createElement(D,{history:this.state.yesterdayInfo}),r.a.createElement(D,{history:this.state.twodaysInfo}),r.a.createElement(D,{history:this.state.threedaysInfo})))}}]),a}(n.Component),C=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"topheader"},r.a.createElement("header",{className:"container"},r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("span",{className:"navbar-item"},"AsteroidAlert")),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("a",{className:"navbar-item",href:"https://api.nasa.gov/",target:"_blank",rel:"noopener noreferrer"},"Powered by NASA Open APIs"))))),r.a.createElement("section",{className:"results--section"},r.a.createElement(S,null),r.a.createElement(x,null)),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,"AsteroidAlert provides realtime information about near Earth asteroids,",r.a.createElement("br",null),"based on information retrieved from the ",r.a.createElement("a",{href:"https://api.nasa.gov/"},"NeoWs (Near Earth Object Web Service) API"),"."))))}}]),a}(n.Component),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/asteroids",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/asteroids","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.1e98f87b.chunk.js.map