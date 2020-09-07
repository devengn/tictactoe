(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,n,a){e.exports=a(20)},,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},,function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),l=a(3),c=a.n(l),o=a(1),i=Object(t.createContext)(!1),u=a(4);function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,t)}return a}function d(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(a,!0).forEach(function(n){Object(u.a)(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(a).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}var m={IDLE:"IDLE",YOUR_TOURN:"YOUR_TURN",OPPONENTS_TURN:"OPPONENTS_TURN",WIN:"WIN",DEFEAT:"DEFEAT",DRAW:"DRAW"},f={CHECK:"CHECK",RESET:"RESET",RESET_SCORE:"RESET_SCORE",CHANGE_DIFFICULTY:"CHANGE_DIFFICULTY"},v={EASY:"EASY",MEDIUM:"MEDIUM",HARD:"HARD"},b={score:{you:0,opponent:0},round:0,board:{a1:null,b1:null,c1:null,a2:null,b2:null,c2:null,a3:null,b3:null,c3:null},winnerCells:[],state:m.IDLE,difficulty:localStorage.getItem("difficulty")||v.HARD},E=function(e,n){switch(n.type){case f.CHECK:if(!n.payload)throw new Error("payload is required");if(-1===Object.keys(b.board).indexOf(n.payload.target))throw new Error("payload.target has unexpected value");if(-1===["x","o"].indexOf(n.payload.value))throw new Error("payload.value is invalid. It expects `x` or `o`");if(null!==e.board[n.payload.target])throw new Error("target is not empty");var a=d({},e);a.board[n.payload.target]=n.payload.value,a.round+=1,"o"===n.payload.value&&(a.state=m.OPPONENTS_TURN),"x"===n.payload.value&&(a.state=m.YOUR_TOURN);var t=function(e){var n=e.a1,a=e.b1,t=e.c1,r=e.a2,l=e.b2,c=e.c2,o=e.a3,i=e.b3,u=e.c3;function s(e,n,a){return null!==e&&null!==n&&null!==a&&e===n&&e===a}return s(n,a,t)?{winner:n,cells:["a1","b1","c1"]}:s(r,l,c)?{winner:r,cells:["a2","b2","c2"]}:s(o,i,u)?{winner:o,cells:["a3","b3","c3"]}:s(n,r,o)?{winner:n,cells:["a1","a2","a3"]}:s(a,l,i)?{winner:a,cells:["b1","b2","b3"]}:s(t,c,u)?{winner:t,cells:["c1","c2","c3"]}:s(n,l,u)?{winner:n,cells:["a1","b2","c3"]}:s(o,l,t)?{winner:o,cells:["a3","b2","c1"]}:null}(a.board),r=t&&"o"===t.winner,l=t&&"x"===t.winner,c=!t&&9===a.round;return(r||l)&&(a.winnerCells=t.cells),r&&(a.score.you+=1,a.state=m.WIN),l&&(a.score.opponent+=1,a.state=m.DEFEAT),c&&(a.state=m.DRAW),a;case f.RESET:var o=d({},e);return o.round=0,o.board={a1:null,b1:null,c1:null,a2:null,b2:null,c2:null,a3:null,b3:null,c3:null},o.state=m.IDLE,o.winnerCells=[],o;case f.RESET_SCORE:var i=d({},e);return i.score=b.score,i;case f.CHANGE_DIFFICULTY:if(-1===Object.keys(v).map(function(e){return v[e]}).indexOf(n.payload))throw new Error("Invalid payload");localStorage.setItem("difficulty",n.payload);var u=d({},e);return u.difficulty=n.payload,u;default:return e}},p=Object(t.createContext)();a(10);function w(e){var n=e.id,a=e.onClick,t=e.children,l=e["aria-label"],c=e.primary;return r.a.createElement("button",{id:n,onClick:a,className:"button "+(c?"button--primary ":""),"aria-label":l},t)}w.defaultProps={id:void 0,"aria-label":void 0,primary:!1};var y=w,h={dropdown:r.a.createElement("path",{d:"M128 192l128 128 128-128z"}),menu:r.a.createElement("path",{d:"M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"}),x:r.a.createElement("path",{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}),o:r.a.createElement("path",{d:"M256 48C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.399c-91.518 0-166.399-74.882-166.399-166.399S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.399 256 422.399z"})};function g(e){var n=e.type,a=e.color,t=e.size,l=e["aria-hidden"];return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:{fill:a,width:t,height:t},"aria-hidden":l},h[n])}g.defaultProps={color:"var(--text-color)",size:16,"aria-hidden":!1};var _=g;a(11);var O=function(e){var n=e.value,a=e.onChange,t=e.id,l=e.name,c=e.options;return r.a.createElement("div",{className:"select"},r.a.createElement("div",{className:"select__display","aria-hidden":!0},c.find(function(e){return e.value===n}).label,r.a.createElement(_,{type:"dropdown"})),r.a.createElement("select",{id:t,name:l,onChange:a,defaultValue:n,className:"select__input"},c.map(function(e){var n=e.label,a=e.value;return r.a.createElement("option",{key:a,value:a},n)})))};a(12);var C=function(e){var n=e.onClose,a=Object(t.useContext)(i),l=Object(o.a)(a,2),c=l[0],u=l[1],s=Object(t.useContext)(p),d=Object(o.a)(s,2),m=d[0],b=d[1];function E(){var e=document.querySelector(".menu__container");e.classList.remove("slideInLeft"),e.classList.add("slideOutLeft"),e.addEventListener("animationend",n,{once:!0})}function w(e){"Escape"===e.key&&E()}function h(){document.querySelector(".menu__container").focus()}return Object(t.useEffect)(function(){return window.addEventListener("keydown",w),function(){return window.removeEventListener("keydown",w)}}),Object(t.useEffect)(function(){var e=document.querySelector(".menu__container");e.addEventListener("animationend",function(){e.focus()},{once:!0})}),r.a.createElement("div",{className:"menu",onClick:function(e){!1!==e.target.classList.contains("menu")&&E()}},r.a.createElement("div",{tabIndex:"0",onFocus:h}),r.a.createElement("div",{className:"menu__container animated slideInLeft faster",tabIndex:"0"},r.a.createElement("div",{className:"menu__close-button"},r.a.createElement(y,{onClick:E,"aria-label":"Close menu"},r.a.createElement(_,{type:"x","aria-hidden":!0,size:20}))),r.a.createElement("div",{className:"menu__content"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement("div",{className:"menu__form-group"},r.a.createElement("label",{htmlFor:"darkmode"},"Dark Mode"),r.a.createElement("div",null,r.a.createElement("input",{id:"darkmode",name:"darkmode",type:"checkbox",defaultChecked:c,onClick:function(){return u(!c)}}))),r.a.createElement("div",{className:"menu__form-group"},r.a.createElement("label",{htmlFor:"difficulty"},"Difficulty"),r.a.createElement(O,{id:"difficulty",name:"difficulty",value:m.difficulty,options:[{label:"Easy",value:v.EASY},{label:"Medium",value:v.MEDIUM},{label:"Hard",value:v.HARD}],onChange:function(e){var n=e.target.value;b({type:f.CHANGE_DIFFICULTY,payload:n})}})),r.a.createElement("div",{className:"menu__form-group"},r.a.createElement("label",{htmlFor:"reset-score"},"Reset Score"),r.a.createElement(y,{id:"reset-score",onClick:function(){window.confirm("Are you sure you want to reset the score?")&&window.location.reload()},primary:!0},"Reset"))),r.a.createElement("footer",{className:"menu__footer"},r.a.createElement("div",null,"Created by"," ",r.a.createElement("a",{href:"https://github.com/pydigger",target:"_blank",rel:"noopener noreferrer"},"Masroor Ahmad")),r.a.createElement("div",null,"This project is"," ",r.a.createElement("a",{href:"https://github.com/pydigger/tictactoe",target:"_blank",rel:"noopener noreferrer"},"Open Source")))),r.a.createElement("div",{tabIndex:"0",onFocus:h})))};a(13);var N=function(){var e=Object(t.useContext)(p),n=Object(o.a)(e,1)[0],a=Object(t.useState)(n.score.you),l=Object(o.a)(a,2),c=l[0],i=l[1],u=Object(t.useState)(n.score.opponent),s=Object(o.a)(u,2),d=s[0],m=s[1];return Object(t.useEffect)(function(){var e=n.score,a=e.you,t=e.opponent;if(a!==c||t!==d){var r=document.getElementById("".concat(a!==c?"o":"x","-score"));r.classList.add("score__number--hide"),l(r).then(function(){return r.classList.remove("score__number--hide"),r.classList.add("score__number--will-update"),c!==a?i(a):m(t),l(r)}).then(function(){r.classList.remove("score__number--will-update")})}function l(e){return new Promise(function(n){e.addEventListener("transitionend",n,{once:!0})})}},[n,c,i,d,m]),r.a.createElement("div",{className:"score"},r.a.createElement("div",null),r.a.createElement("div",{className:"score__cell"},r.a.createElement("div",{className:"score__img"},r.a.createElement(_,{type:"o",color:"var(--primary-color)",size:40})),r.a.createElement("div",{className:"score__number-holder"},r.a.createElement("div",{className:"score__number",id:"o-score"},c))),r.a.createElement("div",null),r.a.createElement("div",{className:"score__cell"},r.a.createElement("div",{className:"score__img"},r.a.createElement(_,{type:"x",color:"var(--secondary-color)",size:40})),r.a.createElement("div",{className:"score__number-holder"},r.a.createElement("div",{className:"score__number",id:"x-score"},d))),r.a.createElement("div",null))};var k=function(e,n){var a=100*Math.random(),t=!1;if(n===v.HARD&&(t=!0),n===v.MEDIUM&&(t=a>=25),n===v.EASY&&(t=a>=50),t){var r=function(e){function n(n,a,t){var r=e[n],l=e[a],c=e[t],o=0,i=0;return"x"===r&&o++,"x"===l&&o++,"x"===c&&o++,null===r&&i++,null===l&&i++,null===c&&i++,2===o&&1===i&&[{name:n,value:r},{name:a,value:l},{name:t,value:c}].find(function(e){return null===e.value}).name}var a=[n("a1","b1","c1"),n("a2","b2","c2"),n("a3","b3","c3"),n("a1","a2","a3"),n("b1","b2","b3"),n("c1","c2","c3"),n("a1","b2","c3"),n("a3","b2","c1")].filter(function(e){return!1!==e});return a.length>0&&a[Math.floor(Math.random()*a.length)]}(e);if(r)return r;var l=function(e){function n(n,a,t){var r=e[n],l=e[a],c=e[t],o=0,i=0;return"o"===r&&o++,"o"===l&&o++,"o"===c&&o++,null===r&&i++,null===l&&i++,null===c&&i++,2===o&&1===i&&[{name:n,value:r},{name:a,value:l},{name:t,value:c}].find(function(e){return null===e.value}).name}var a=[n("a1","b1","c1"),n("a2","b2","c2"),n("a3","b3","c3"),n("a1","a2","a3"),n("b1","b2","b3"),n("c1","c2","c3"),n("a1","b2","c3"),n("a3","b2","c1")].filter(function(e){return!1!==e});return a.length>0&&a[Math.floor(Math.random()*a.length)]}(e);if(l)return l;var c=function(e){function n(n,a,t){var r=e[n],l=e[a],c=e[t],o=0,i=0;return"x"===r&&o++,"x"===l&&o++,"x"===c&&o++,null===r&&i++,null===l&&i++,null===c&&i++,1===o&&2===i&&[{name:n,value:r},{name:a,value:l},{name:t,value:c}].find(function(e){return null===e.value}).name}var a=[n("a1","b1","c1"),n("a2","b2","c2"),n("a3","b3","c3"),n("a1","a2","a3"),n("b1","b2","b3"),n("c1","c2","c3"),n("a1","b2","c3"),n("a3","b2","c1")].filter(function(e){return!1!==e});return a.length>0&&a[Math.floor(Math.random()*a.length)]}(e);if(c)return c;var o=function(e){return null===e.b2&&"b2"}(e);if(o)return o}return function(e){var n=Object.keys(e).map(function(n){return{key:n,value:e[n]}}).filter(function(e){return null===e.value}).map(function(e){return e.key});return n[Math.floor(n.length*Math.random())]}(e)};a(14);function x(e){var n=e.name,a=e.value,t=e.onClick,l=e.disabled,c=e.opaque;return r.a.createElement("button",{type:"button","aria-label":Boolean(a)?"".concat(n,": ").concat(a):"Empty",disabled:l||Boolean(a),className:"cell ".concat(c?"cell--opaque":""),onClick:t},a?r.a.createElement("div",{className:"animated bounceIn"},r.a.createElement(_,{type:a,"aria-hidden":!0,size:50,color:"o"===a?"var(--primary-color)":"var(--secondary-color)"})):null)}x.defaultProps={disabled:!1,value:null,opaque:!1};var j=x;a(15);var S=function(){var e=Object(t.useContext)(p),n=Object(o.a)(e,2),a=n[0],l=n[1];function c(e){l({type:f.CHECK,payload:{target:e,value:"o"}})}Object(t.useEffect)(function(){a.state===m.OPPONENTS_TURN&&setTimeout(function(){var e=a.board,n=a.difficulty;l({type:f.CHECK,payload:{target:k(e,n),value:"x"}})},1e3)},[a,l]);var i=-1===[m.IDLE,m.YOUR_TOURN].indexOf(a.state),u=-1!==[m.WIN,m.DEFEAT].indexOf(a.state);return r.a.createElement("div",{className:"game-grid"},r.a.createElement("div",{className:"game-grid__cell"},r.a.createElement(j,{name:"A1",onClick:function(){return c("a1")},value:a.board.a1,disabled:i,opaque:u&&-1===a.winnerCells.indexOf("a1")})),r.a.createElement("div",{className:"game-grid__cell"},r.a.createElement(j,{name:"B1",onClick:function(){return c("b1")},value:a.board.b1,disabled:i,opaque:u&&-1===a.winnerCells.indexOf("b1")})),r.a.createElement("div",{className:"game-grid__cell"},r.a.createElement(j,{name:"C1",onClick:function(){return c("c1")},value:a.board.c1,disabled:i,opaque:u&&-1===a.winnerCells.indexOf("c1")})),r.a.createElement("div",{className:"game-grid__cell"},r.a.createElement(j,{name:"A2",onClick:function(){return c("a2")},value:a.board.a2,disabled:i,opaque:u&&-1===a.winnerCells.indexOf("a2")})),r.a.createElement("div",{className:"game-grid__cell"},r.a.createElement(j,{name:"B2",onClick:function(){return c("b2")},value:a.board.b2,disabled:i,opaque:u&&-1===a.winnerCells.indexOf("b2")})),r.a.createElement("div",{className:"game-grid__cell"},r.a.createElement(j,{name:"C2",onClick:function(){return c("c2")},value:a.board.c2,disabled:i,opaque:u&&-1===a.winnerCells.indexOf("c2")})),r.a.createElement("div",{className:"game-grid__cell"},r.a.createElement(j,{name:"A3",onClick:function(){return c("a3")},value:a.board.a3,disabled:i,opaque:u&&-1===a.winnerCells.indexOf("a3")})),r.a.createElement("div",{className:"game-grid__cell"},r.a.createElement(j,{name:"B3",onClick:function(){return c("b3")},value:a.board.b3,disabled:i,opaque:u&&-1===a.winnerCells.indexOf("b3")})),r.a.createElement("div",{className:"game-grid__cell"},r.a.createElement(j,{name:"C3",onClick:function(){return c("c3")},value:a.board.c3,disabled:i,opaque:u&&-1===a.winnerCells.indexOf("c3")})))};a(16);var I=function(){var e=Object(t.useContext)(p),n=Object(o.a)(e,2),a=n[0],l=n[1];function c(){l({type:f.RESET})}return r.a.createElement("div",{className:"status"},r.a.createElement("div",null,r.a.createElement("div",null,function(){switch(a.state){case m.IDLE:return"Whenever you're ready!";case m.YOUR_TOURN:return"Your turn!";case m.WIN:return"Victory!";case m.DEFEAT:return"You were defeated!";case m.DRAW:return"It's a draw!";default:return""}}()),r.a.createElement("div",null,r.a.createElement(function(){switch(a.state){case m.WIN:return r.a.createElement("button",{onClick:c,className:"status__reset-btn"},"Play again!");case m.DEFEAT:case m.DRAW:return r.a.createElement("button",{onClick:c,className:"status__reset-btn status__reset-btn--red"},"Play again!");default:return null}},null))))};a(17);var R=function(){return r.a.createElement("div",{className:"game animated zoomIn fast"},r.a.createElement(N,null),r.a.createElement(S,null),r.a.createElement(I,null))};a(18);var D=function(){var e=Object(t.useState)(Boolean(localStorage.getItem("darktheme"))),n=Object(o.a)(e,2),a=n[0],l=n[1],c=Object(t.useState)(!1),u=Object(o.a)(c,2),s=u[0],d=u[1],m=Object(t.useState)(!1),f=Object(o.a)(m,2),v=f[0],w=f[1],h=Object(t.useReducer)(E,b),g=Object(o.a)(h,2),O=g[0],N=g[1];return Object(t.useEffect)(function(){function e(){!0!==v&&w(!0)}function n(e){"Tab"===e.key&&!1!==v&&w(!1)}return window.addEventListener("mousemove",e),window.addEventListener("touchstart",e),window.addEventListener("keydown",n),function(){window.removeEventListener("mousemove",e),window.removeEventListener("touchstart",e),window.removeEventListener("keydown",n)}},[v]),Object(t.useEffect)(function(){document.body.style.backgroundColor=a?"#000":"#FFF",a?localStorage.setItem("darktheme","1"):localStorage.removeItem("darktheme")},[a]),r.a.createElement(i.Provider,{value:[a,l]},r.a.createElement(p.Provider,{value:[O,N]},r.a.createElement("div",{className:"app "+(a?"app--dark-theme ":"")+(v?"app--no-outlines ":"")},s?r.a.createElement(C,{onClose:function(){d(!1),document.querySelector(".app__menu-button button").focus()},darkTheme:a,toggleDarkTheme:function(){return l(!a)}}):null,r.a.createElement("div",{className:"app__content"},r.a.createElement(R,null)),r.a.createElement("div",{className:"app__menu-button"},r.a.createElement(y,{onClick:function(){return d(!0)},"aria-label":"Open menu"},r.a.createElement(_,{type:"menu","aria-hidden":!0,size:20}))))))},T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(19);c.a.render(r.a.createElement(D,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat(".","/service-worker.js");T?(function(e,n){fetch(e).then(function(a){var t=a.headers.get("content-type");404===a.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):A(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):A(n,e)})}}()}],[[5,1,2]]]);
//# sourceMappingURL=main.d8626f5c.chunk.js.map