!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){"use strict";var r=t(2),o=t.n(r)()(!1);o.push([n.i,"/* #region css reset   */\n\nhtml {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nol,\nul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n/* button section */\nbutton {\n  display: inline-block;\n  border: none;\n  padding: 1rem 2rem;\n  margin: 0;\n  text-decoration: none;\n  background: #0069ed;\n  color: #ffffff;\n  font-family: sans-serif;\n  font-size: 1rem;\n  cursor: pointer;\n  text-align: center;\n  transition: background 250ms ease-in-out, transform 150ms ease;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\nbutton:active {\n  transform: scale(0.99);\n}\n\nbody {\n  background: whitesmoke;\n  font-family: Helvetica, Arial, sans-serif;\n  color: black;\n}\n/* #endregion  */\n\n#container {\n  margin: auto;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nform {\n  background-color: antiquewhite;\n  padding: 1rem;\n  border: 1px solid black;\n}\n\nli {\n  padding: 0.3rem;\n  text-align: right;\n}\n\nlabel {\n  display: inline-block;\n  width: 150px;\n  text-align: right;\n  padding-right: 0.5rem;\n}\n\n.error {\n  display: block;\n  width: auto;\n  padding: 0;\n  font-size: 80%;\n  color: white;\n  background-color: #900;\n}\n\nbutton {\n  padding: 0.2rem 0.5rem;\n  background: rgb(108, 172, 135);\n}\n\ninput:invalid {\n  border: 2px dashed red;\n}\n",""]),e.a=o},function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],l=e.base?i[0]+e.base:i[0],d=t[l]||0,u="".concat(l," ").concat(d);t[l]=d+1;var s=c(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(a[s].references++,a[s].updater(f)):a.push({identifier:u,updater:h(f,e),references:1}),r.push(u)}return r}function d(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,s=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function f(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=s(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function m(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var p=null,v=0;function h(n,e){var t,r,o;if(e.singleton){var i=v++;t=p||(p=d(e)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=d(e),r=m.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=l(n,e),d=0;d<t.length;d++){var u=c(t[d]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=i}}}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,l;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},function(n,e){const t=Array.from(document.querySelectorAll("input"));console.log(t);const r=document.querySelector("form"),o=document.getElementById("email"),i=document.getElementById("country"),a=document.getElementById("zip"),c=document.getElementById("password"),l=document.getElementById("confirmPassword"),d=document.getElementById("emailError"),u=document.getElementById("countryError"),s=document.getElementById("zipError"),f=document.getElementById("passwordError"),m=document.getElementById("confirmPasswordError");o.addEventListener("input",()=>{o.validity.valid?d.innerHTML="":o.validity.valueMissing?d.textContent="You need to enter an e-mail address.":o.validity.typeMismatch?d.textContent="Entered value needs to be an e-mail address.":o.validity.tooShort&&(d.textContent=`Email should be at least ${o.minLength} characters; you entered ${o.value.length}.`)}),i.addEventListener("input",()=>{i.validity.valid?u.innerHTML="":i.validity.valueMissing?u.textContent="You need to enter a country.":i.validity.patternMismatch?u.textContent="Please enter a valid country name":i.validity.tooShort&&(u.textContent=`Country should be at least ${i.minLength} characters; you entered ${i.value.length}.`)}),a.addEventListener("input",()=>{a.validity.valid?s.innerHTML="":a.validity.valueMissing&&(s.textContent="You need to enter a zip code.")}),c.addEventListener("input",()=>{c.validity.valid?f.innerHTML="":c.validity.tooShort&&(f.textContent=`Password should be at least ${c.minLength} characters; you entered ${c.value.length}.`)}),l.addEventListener("input",()=>{l.validity.valid?m.innerHTML="":l.value!==c.value&&(m.textContent="Passwords must match.")}),r.addEventListener("submit",()=>{t.every(n=>n.validity.valid)||(alert("Please fill in all fields correctly"),event.preventDefault())})},function(n,e,t){"use strict";t.r(e);var r=t(1),o=t.n(r),i=t(0),a={insert:"head",singleton:!1};o()(i.a,a),i.a.locals,t(3)}]);