!function(){function e(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")};var t={};function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,n,t){n&&r(e.prototype,n);t&&r(e,t);return e};var u=function(){"use strict";function r(){e(n)(this,r),this.searchQuery=""}return e(t)(r,[{key:"fetchInfo",value:function(){return fetch("https://newsapi.org/v2/everything?q=".concat(this.searchQuery,"&apiKey=").concat("a05ceaa7c0394871ad19df204a773bc7","&pageSize=5&page=1")).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}}]),r}(),c=document.querySelector(".form"),a=(document.querySelector(".btn-ptimary"),document.querySelector(".btn-seccond"));c.addEventListener("submit",(function(){event.preventDefault(),o.searchQuery=event.currentTarget.elements.query.value,o.fetchInfo()})),a.addEventListener("click",(function(){}));var o=new u}();
//# sourceMappingURL=index.a9b95f2e.js.map
