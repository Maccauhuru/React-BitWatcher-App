module.exports=__NEXT_REGISTER_PAGE("/",function(){return{page:webpackJsonp([2],{106:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,r){var o=new XMLHttpRequest;for(var a in o.open(t.method||"get",e),t.headers)o.setRequestHeader(a,t.headers[a]);function i(){var e,t=[],n=[],r={};return o.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(o,a,i){t.push(a=a.toLowerCase()),n.push([a,i]),e=r[a],r[a]=e?e+","+i:i}),{ok:1==(o.status/200|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:i,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}o.withCredentials="include"==t.credentials,o.onload=function(){n(i())},o.onerror=r,o.send(t.body)})};t.default=r},230:function(e,t,n){e.exports=n(231)},231:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(32),o=n.n(r),a=n(5),i=n.n(a),s=(n(232),n(98));function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return l(r,(n=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(p(r),"state",{configurable:!0,enumerable:!0,writable:!0,value:{currency:"USD"}}),n))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["Component"]),n=t,(r=[{key:"render",value:function(){var e=this,t="";return"USD"===this.state.currency?t=i.a.createElement("li",{className:"list-group-item"},"Bitcoin rate for ",this.props.bpi.USD.description,": ",i.a.createElement("span",{class:"badge badge-primary"},this.props.bpi.USD.code)," ",i.a.createElement("strong",null,this.props.bpi.USD.rate)):"GBP"===this.state.currency?t=i.a.createElement("li",{className:"list-group-item"},"Bitcoin rate for ",this.props.bpi.GBP.description,": ",i.a.createElement("span",{class:"badge badge-primary"},this.props.bpi.GBP.code)," ",i.a.createElement("strong",null,this.props.bpi.GBP.rate)):"EUR"===this.state.currency&&(t=i.a.createElement("li",{className:"list-group-item"},"Bitcoin rate for ",this.props.bpi.EUR.description,": ",i.a.createElement("span",{class:"badge badge-primary"},this.props.bpi.EUR.code)," ",i.a.createElement("strong",null,this.props.bpi.EUR.rate))),i.a.createElement("div",null,i.a.createElement("ul",{className:"list-group"},t),i.a.createElement("br",null),i.a.createElement("select",{onChange:function(t){return e.setState({currency:t.target.value})},className:"form-control"},i.a.createElement("option",{value:"USD"},"USD"),i.a.createElement("option",{value:"GBP"},"GBP"),i.a.createElement("option",{value:"EUR"},"EUR")))}}])&&u(n.prototype,r),o&&u(n,o),t}();var m=function(e){return i.a.createElement(s.a,null,i.a.createElement("div",null,i.a.createElement("h1",null,"Welcome to BitWatcher"),i.a.createElement("br",null),i.a.createElement("p",null,i.a.createElement("strong",null,"Check current Bitcoin rate")),i.a.createElement(f,{bpi:e.bpi})))};m.getInitialProps=function(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e,t){try{var n=a[e](t),i=n.value}catch(e){return void o(e)}n.done?r(i):Promise.resolve(i).then(s,c)}function s(e){i("next",e)}function c(e){i("throw",e)}s()})}}(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coindesk.com/v1/bpi/currentprice.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",{bpi:n.bpi});case 7:case"end":return e.stop()}},e,this)}));t.default=m},232:function(e,t,n){e.exports=window.fetch||(window.fetch=n(106).default||n(106))}},[230]).default}});