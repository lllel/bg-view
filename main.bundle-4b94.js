!function(n){function e(e){for(var o,A,a=e[0],s=e[1],c=e[2],p=0,d=[];p<a.length;p++)A=a[p],i[A]&&d.push(i[A][0]),i[A]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(n[o]=s[o]);for(l&&l(e);d.length;)d.shift()();return r.push.apply(r,c||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],o=!0,a=1;a<t.length;a++){var s=t[a];0!==i[s]&&(o=!1)}o&&(r.splice(e--,1),n=A(A.s=t[0]))}return n}var o={},i={0:0},r=[];function A(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,A),t.l=!0,t.exports}A.m=n,A.c=o,A.d=function(n,e,t){A.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},A.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},A.t=function(n,e){if(1&e&&(n=A(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(A.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)A.d(t,o,function(e){return n[e]}.bind(null,o));return t},A.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return A.d(e,"a",e),e},A.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},A.p="";var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=s;r.push([161,1]),t()}({161:function(n,e,t){t(162),n.exports=t(364)},364:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),t(365)},365:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(9),i=t(367),r=t(371),A=t(394),a=t(416),s=t(421),c=t(426);i.render(o.createElement(r.Provider,{store:a.default},o.createElement(A.Router,{history:s.default},o.createElement(c.default,null))),document.querySelector("#application"))},416:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(101),i=t(417),r=t(418),A=o.applyMiddleware(i.default),a=o.createStore(r.default,{},A);window.store=a,e.default=a},418:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(101),i=t(419);e.default=o.combineReducers({test:i.default})},419:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(420),i={data:[]};e.default=function(n,e){switch(void 0===n&&(n=i),e.type){case o.default.START:return JSON.parse(JSON.stringify(n))}return n}},420:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={START:"_START",SUCCESS:"_SUCCESS",FAIL:"_FAIL",TEST:"TEST"}},421:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(422).default();window.routerHistory=o,e.default=o},426:function(n,e,t){"use strict";var o=function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])};return function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=t(9);t(427);var r=t(432),A=t(441),a=t(442),s=function(n){function e(e){var t=n.call(this,e)||this;return t.state={bgColorFirst:"",bgColorSecond:""},t.onInputClick=t.onInputClick.bind(t),t}return o(e,n),e.prototype.onInputClick=function(){var n=this.formRef.getValue();this.setState({bgColorFirst:n.bgFirst,bgColorSecond:n.bgSecond})},e.prototype.render=function(){var n=this,e={background:"linear-gradient("+this.state.bgColorFirst+", "+this.state.bgColorSecond+")",height:"100%"};return i.createElement("div",{style:e},i.createElement(A.FormContainer,{ref:function(e){return n.formRef=e}},i.createElement(r.InputText,{name:"bgFirst",className:"bg-input",placeholder:"Введите первый цвет"}),i.createElement(r.InputText,{name:"bgSecond",className:"bg-input",placeholder:"Введите второй цвет"})),i.createElement(a.default,{onClick:this.onInputClick},"Go"))},e}(i.Component);e.default=s},427:function(n,e,t){var o=t(428);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(158)(o,i);o.locals&&(n.exports=o.locals)},428:function(n,e,t){var o=t(156);(n.exports=t(157)(!0)).push([n.i,'/* stylelint-disable */\n/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n * ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of fonts size after orientation changes in\n *    IE on Windows Phone and in iOS. */\nhtml {\n  line-height: 1.15;\n  /* 1 */ }\n\n/* Sections\n * ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated). */\nbody {\n  margin: 0; }\n\n/**\n * Add the correct display in IE 9-. */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block; }\n\n/**\n * Correct the fonts size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari. */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n * ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE. */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block; }\n\n/**\n * Add the correct margin in IE 8. */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE. */\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of fonts size in all browsers.\n * 2. Correct the odd `em` fonts sizing in all browsers. */\npre {\n  font-family: monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n * ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+. */\na {\n  background-color: transparent;\n  /* 1 */ }\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari. */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */ }\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6. */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\n * Add the correct fonts weight in Chrome, Edge, and Safari. */\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of fonts size in all browsers.\n * 2. Correct the odd `em` fonts sizing in all browsers. */\ncode,\nkbd,\nsamp {\n  font-family: monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct fonts style in Android 4.3-. */\ndfn {\n  font-style: italic; }\n\n/**\n * Add the correct background and color in IE 9-. */\nmark {\n  background-color: #ffff00;\n  color: #000000; }\n\n/**\n * Add the correct fonts size in all browsers. */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers. */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n * ========================================================================== */\n/**\n * Add the correct display in IE 9-. */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\n * Add the correct display in iOS 4-7. */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Remove the border on images inside links in IE 10-. */\nimg {\n  border-style: none; }\n\n/**\n * Hide the overflow in IE. */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Forms\n * ========================================================================== */\n/**\n * 1. Change the fonts styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari. */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge. */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox. */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari. */\n/**\n * Remove the inner border and padding in Firefox. */\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule. */\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox. */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers. */\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera. */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Remove the default vertical scrollbar in IE. */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-. */\n[type="checkbox"],\n[type="radio"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome. */\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari. */\n[type="search"] {\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS. */\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change fonts properties to `inherit` in Safari. */\n::-webkit-file-upload-button {\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n * ========================================================================== */\n/* Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox. */\ndetails,\nmenu {\n  display: block; }\n\n/* Add the correct display in all browsers. */\nsummary {\n  display: list-item; }\n\n/* Scripting\n * ========================================================================== */\n/**\n * Add the correct display in IE 9-. */\ncanvas {\n  display: inline-block; }\n\n/**\n * Add the correct display in IE. */\ntemplate {\n  display: none; }\n\n/* Hidden\n * ========================================================================== */\n/**\n * Add the correct display in IE 10-. */\n[hidden] {\n  display: none; }\n\n@font-face {\n  font-family: "Roboto";\n  src: local("Roboto"), url('+o(t(429))+') format("woff2"), url('+o(t(430))+') format("woff");\n  font-weight: 400;\n  font-style: normal;\n  font-display: swap; }\n\nhtml {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 100%; }\n\n* {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit; }\n\nbody {\n  position: relative;\n  font-family: "Roboto", "Arial", sans-serif;\n  min-width: 320px;\n  height: 100%;\n  margin: 0 auto;\n  overflow-x: hidden; }\n\n#application {\n  height: 100%; }\n\n.bg-input {\n  display: block;\n  width: 300px;\n  margin: 10px 0; }\n',"",{version:3,sources:["D:/programming/repositories/bg/app/app/pages/App/D:/programming/repositories/bg/app/app/pages/App/App.scss"],names:[],mappings:"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",file:"App.scss",sourcesContent:['/* stylelint-disable */\n/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n * ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of fonts size after orientation changes in\n *    IE on Windows Phone and in iOS. */\nhtml {\n  line-height: 1.15;\n  /* 1 */ }\n\n/* Sections\n * ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated). */\nbody {\n  margin: 0; }\n\n/**\n * Add the correct display in IE 9-. */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block; }\n\n/**\n * Correct the fonts size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari. */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n * ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE. */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block; }\n\n/**\n * Add the correct margin in IE 8. */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE. */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of fonts size in all browsers.\n * 2. Correct the odd `em` fonts sizing in all browsers. */\npre {\n  font-family: monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n * ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+. */\na {\n  background-color: transparent;\n  /* 1 */ }\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari. */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */ }\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6. */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\n * Add the correct fonts weight in Chrome, Edge, and Safari. */\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of fonts size in all browsers.\n * 2. Correct the odd `em` fonts sizing in all browsers. */\ncode,\nkbd,\nsamp {\n  font-family: monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct fonts style in Android 4.3-. */\ndfn {\n  font-style: italic; }\n\n/**\n * Add the correct background and color in IE 9-. */\nmark {\n  background-color: #ffff00;\n  color: #000000; }\n\n/**\n * Add the correct fonts size in all browsers. */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers. */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n * ========================================================================== */\n/**\n * Add the correct display in IE 9-. */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\n * Add the correct display in iOS 4-7. */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Remove the border on images inside links in IE 10-. */\nimg {\n  border-style: none; }\n\n/**\n * Hide the overflow in IE. */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Forms\n * ========================================================================== */\n/**\n * 1. Change the fonts styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari. */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge. */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox. */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari. */\n/**\n * Remove the inner border and padding in Firefox. */\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule. */\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox. */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers. */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera. */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Remove the default vertical scrollbar in IE. */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-. */\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome. */\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari. */\n[type="search"] {\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS. */\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change fonts properties to `inherit` in Safari. */\n::-webkit-file-upload-button {\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n * ========================================================================== */\n/* Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox. */\ndetails,\nmenu {\n  display: block; }\n\n/* Add the correct display in all browsers. */\nsummary {\n  display: list-item; }\n\n/* Scripting\n * ========================================================================== */\n/**\n * Add the correct display in IE 9-. */\ncanvas {\n  display: inline-block; }\n\n/**\n * Add the correct display in IE. */\ntemplate {\n  display: none; }\n\n/* Hidden\n * ========================================================================== */\n/**\n * Add the correct display in IE 10-. */\n[hidden] {\n  display: none; }\n\n@font-face {\n  font-family: "Roboto";\n  src: local("Roboto"), url("./content/fonts/roboto-regular.woff2") format("woff2"), url("./content/fonts/roboto-regular.woff") format("woff");\n  font-weight: 400;\n  font-style: normal;\n  font-display: swap; }\n\nhtml {\n  box-sizing: border-box;\n  height: 100%; }\n\n* {\n  box-sizing: inherit; }\n\nbody {\n  position: relative;\n  font-family: "Roboto", "Arial", sans-serif;\n  min-width: 320px;\n  height: 100%;\n  margin: 0 auto;\n  overflow-x: hidden; }\n\n#application {\n  height: 100%; }\n\n.bg-input {\n  display: block;\n  width: 300px;\n  margin: 10px 0; }\n'],sourceRoot:""}])},429:function(n,e,t){n.exports=t.p+"fonts/roboto-regular-d97e.woff2"},430:function(n,e,t){n.exports=t.p+"fonts/roboto-regular-d4d7.woff"},432:function(n,e,t){"use strict";(function(n){var o=function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])};return function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=t(9);t(434);var r=t(159),A=t(438),a=t(439),s=t(440),c=function(e){function t(n){var t=e.call(this,n)||this;return t.props.formRef&&t.props.formRef.addFormItemsInArr(t),t.state={value:t.props.value||""},t}return o(t,e),t.prototype.focus=function(){this.inputTextRef.focus()},t.prototype.getValue=function(){return this.state.value},t.prototype.setValue=function(n){""===n?this.setState({value:""}):this.setState({value:n||this.state.value})},t.prototype.getStatus=function(){return{hasValue:!!this.getValue()}},t.prototype.checkState=function(e){var t=this,o=!0;return r.forEach(e,function(n){n===a.CheckStates.CheckRequired&&(o=o&&(!t.props.required||!!t.getValue()))}),o?n(this.inputTextRef).removeClass("component-input-text-error"):n(this.inputTextRef).addClass("component-input-text-error"),o},t.prototype.onChange=function(n){this.props.event&&this.props.event(this.props.name,A.EventTypes.OnChange,n.target.value),this.setState({value:n.target.value})},t.prototype.onKeyDown=function(n){this.props.event&&this.props.event(this.props.name,A.EventTypes.OnKeyDown,n.keyCode)},t.prototype.onClickButton=function(n){n.onClick?n.onClick():"x"===n.title.toLowerCase()&&this.setValue("")},t.prototype.render=function(){return i.createElement(i.Fragment,null,s.default(this.renderInput(),this.props.label))},t.prototype.renderInput=function(){var n=this;return i.createElement("input",{type:"text",ref:function(e){return n.inputTextRef=e},className:this.props.className||"",value:this.state.value,disabled:this.props.disabled,placeholder:this.props.placeholder||"",onChange:this.onChange.bind(this),onKeyDown:this.onKeyDown.bind(this)})},t}(i.Component);e.InputText=c}).call(this,t(433))},434:function(n,e,t){var o=t(435);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(158)(o,i);o.locals&&(n.exports=o.locals)},435:function(n,e,t){var o=t(156);(n.exports=t(157)(!0)).push([n.i,'.component-input-text {\n  display: block;\n  width: 100%;\n  height: 25px;\n  padding: 2px;\n  font-size: 12px;\n  line-height: 1.42857143;\n  color: #555555;\n  background-color: #ffffff;\n  background-image: none;\n  border: 1px solid #cccccc;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s, -webkit-box-shadow ease-in-out .15s; }\n\n.component-input-text-error {\n  border: 1px solid #F0A3A3;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.3);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.3); }\n\n.component-input-text:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }\n\n.component-input-text:disabled {\n  cursor: text;\n  background-color: #eeeeee; }\n\n.component-input-text-buttons-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 14px;\n  color: #555;\n  background-color: #eee;\n  border: 1px solid #ccc; }\n\n.component-input-text-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.component-input-text-button-clear {\n  display: block;\n  padding: 3px 6px; }\n  .component-input-text-button-clear::after {\n    content: "";\n    display: block;\n    width: 10px;\n    height: 10px;\n    background-image: url('+o(t(436))+');\n    background-position: -42px 0px;\n    background-repeat: no-repeat; }\n\n.component-input-text-button-new-window {\n  display: block;\n  padding: 3px 6px; }\n  .component-input-text-button-new-window::after {\n    content: "";\n    display: block;\n    width: 12px;\n    height: 12px;\n    background-image: url('+o(t(437))+");\n    background-repeat: no-repeat; }\n\n.component-input-text-button-any {\n  padding: 0 6px;\n  color: #606060 !important;\n  font-weight: 400;\n  white-space: nowrap;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  font-size: 12px;\n  line-height: 12px; }\n  .component-input-text-button-any:hover {\n    text-decoration: none; }\n","",{version:3,sources:["D:/programming/repositories/bg/common/components/input_text/D:/programming/repositories/bg/common/components/input_text/InputText.scss"],names:[],mappings:"AAAA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,aAAa;EACb,gBAAgB;EAChB,wBAAwB;EACxB,eAAe;EACf,0BAA0B;EAC1B,uBAAuB;EACvB,0BAA0B;EAC1B,yDAAiD;UAAjD,iDAAiD;EACjD,uFAAuE;EAAvE,+EAAuE;EAAvE,0EAAuE;EAAvE,uEAAuE;EAAvE,4GAAuE,EAAE;;AAE3E;EACE,0BAA0B;EAC1B,WAAW;EACX,uFAA+E;UAA/E,+EAA+E,EAAE;;AAEnF;EACE,sBAAsB;EACtB,WAAW;EACX,2FAAmF;UAAnF,mFAAmF,EAAE;;AAEvF;EACE,aAAa;EACb,0BAA0B,EAAE;;AAE9B;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,+BAAoB;EAApB,8BAAoB;MAApB,wBAAoB;UAApB,oBAAoB;EACpB,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,uBAAuB;EACvB,uBAAuB,EAAE;;AAE3B;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,+BAAoB;EAApB,8BAAoB;MAApB,wBAAoB;UAApB,oBAAoB,EAAE;;AAExB;EACE,eAAe;EACf,iBAAiB,EAAE;EACnB;IACE,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,aAAa;IACb,gDAAyD;IACzD,+BAA+B;IAC/B,6BAA6B,EAAE;;AAEnC;EACE,eAAe;EACf,iBAAiB,EAAE;EACnB;IACE,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,aAAa;IACb,gDAAwD;IACxD,6BAA6B,EAAE;;AAEnC;EACE,eAAe;EACf,0BAA0B;EAC1B,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB,EAAE;EACpB;IACE,sBAAsB,EAAE",file:"InputText.scss",sourcesContent:['.component-input-text {\n  display: block;\n  width: 100%;\n  height: 25px;\n  padding: 2px;\n  font-size: 12px;\n  line-height: 1.42857143;\n  color: #555555;\n  background-color: #ffffff;\n  background-image: none;\n  border: 1px solid #cccccc;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s; }\n\n.component-input-text-error {\n  border: 1px solid #F0A3A3;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.3); }\n\n.component-input-text:focus {\n  border-color: #66afe9;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }\n\n.component-input-text:disabled {\n  cursor: text;\n  background-color: #eeeeee; }\n\n.component-input-text-buttons-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 14px;\n  color: #555;\n  background-color: #eee;\n  border: 1px solid #ccc; }\n\n.component-input-text-container {\n  display: flex;\n  flex-direction: row; }\n\n.component-input-text-button-clear {\n  display: block;\n  padding: 3px 6px; }\n  .component-input-text-button-clear::after {\n    content: "";\n    display: block;\n    width: 10px;\n    height: 10px;\n    background-image: url("./content/img/chosen-sprite.png");\n    background-position: -42px 0px;\n    background-repeat: no-repeat; }\n\n.component-input-text-button-new-window {\n  display: block;\n  padding: 3px 6px; }\n  .component-input-text-button-new-window::after {\n    content: "";\n    display: block;\n    width: 12px;\n    height: 12px;\n    background-image: url("./content/img/ico_external.png");\n    background-repeat: no-repeat; }\n\n.component-input-text-button-any {\n  padding: 0 6px;\n  color: #606060 !important;\n  font-weight: 400;\n  white-space: nowrap;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  font-size: 12px;\n  line-height: 12px; }\n  .component-input-text-button-any:hover {\n    text-decoration: none; }\n'],sourceRoot:""}])},436:function(n,e){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAlCAYAAAAN8srVAAACTUlEQVR42u3Wv2sTcRiA8VPBxUKwEAxU3NxPIoFAl1bIkkmwYKAKRbqbRSWQCGJ+rMUibjo4FARBl0AgUIh/QXFxFIpKJHAQKA56r0/hDbyEK5VrDH2hBx+ud+Ga9+G+uSQQkVOv0+lMZNBFHoFRwABZb0F9CCITVdRjQd9b0CoOTNSGiRkidBWkljGGINb9CCECd0FqE7GJqkxeMxccK8UbJzppUPGIO5SfR9DCjINsTIR1RDbKXvAakuB9yqAsvuLaDIN6Jqag5/IaIxjYCxaxDzFGyKUMegdBb4ZBGfQmMUaIXeSmLyhDjHspl9wdiPHgJEGlUumf2UGml96HlJ+hRQwhRoSleQfZgfawlDJoB5KgO4OgDLrIT4UUMEA2xdNpro/t6aA+BJGJKuqxoJ9ikLmzQas4MFEbJmYIHz99GNRaxhiCWPcjhAjcBalNxCaqgsBrUPGIO5T3GGRjIqwjslHegnompqDn8hojGHgLyqA3iTFC7CLnLOh4Z0Gn3FnQf2O3ZrN5iZ9aVw81Go3zQfLmI4iIx/gBUXvtdnvNXZDGbEMI2Gf/BFsQPXffVRADr+jgn1hylwPdOL6Bn7w2brVaV9wEMfALBheGDu3QGvVQ79RtT0FvGDyu1WoXE4JWNKjiack916HXEoJecT7GLTdBLLXrDPwbEX+Xq9XqucPHNzFVzv3B93q9fsHbU+4uhAhh/wXfIMaWqyBdXjfxluE/63fQM/Yt8/je9hQ0vdnQpybqJRZcB2nUI4J+QVB2H6RRHzUoTPo/fwGr9gNcek8bXAAAAABJRU5ErkJggg=="},437:function(n,e){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozMzEyNjk2RDI2RDUxMUU0QjNFOUFGRDFDRDgwMDQ4RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozMzEyNjk2RTI2RDUxMUU0QjNFOUFGRDFDRDgwMDQ4RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjMzMTI2OTZCMjZENTExRTRCM0U5QUZEMUNEODAwNDhFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjMzMTI2OTZDMjZENTExRTRCM0U5QUZEMUNEODAwNDhFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rU+DuQAAALhJREFUeNpi9D/wYjUDA0MwEDMyIMBFIHYFYnUg3g7EPDAJJqjiVCA2QcLJQMyywV78CJCuRDKIgQVq8k2g5FkGNBBw8KUFkGpBFmNiwAGgincAMT8QPwXiBCD+woRDMQeQWoek2BHogoVA2hOrBqDkDyAVCcS3oYpvAw0RBTkdp5OAig4CKU2QYqiQBBBvxakBqukvmpA6Xg1YAB+pGsDx8B9kFdBT3wmoVQGpZYEG3xwiLVgDEGAA48UvvqnfanAAAAAASUVORK5CYII="},438:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(n){n.OnClick="OnClick",n.OnChange="OnChange",n.OnKeyDown="OnKeyDown",n.OnSelect="OnSelect",n.OnDoubleClick="OnDoubleClick",n.OnSelectItem="OnSelectItem",n.OnComplete="OnComplete"}(e.EventTypes||(e.EventTypes={}))},439:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(n){n.CheckRequired="CheckRequired",n.CheckValid="CheckValid"}(e.CheckStates||(e.CheckStates={}))},440:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(9);e.default=function(n,e){if(!e)return n;var t=o.createElement("div",{className:e.params.classL,style:{textAlign:e.params.align}},e.text),i=o.createElement("div",{className:e.params.classC},n);return o.createElement(o.Fragment,null,"left"===e.params.orient?o.createElement("div",null,t,i):"","right"===e.params.orient?o.createElement("div",null,i,t):"","top"===e.params.orient?o.createElement("div",{style:{display:"flex",flexDirection:"column"}},t,i):"","bottom"===e.params.orient?o.createElement("div",{style:{display:"flex",flexDirection:"column"}},i,t):"")}},441:function(n,e,t){"use strict";var o=function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])};return function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=t(9),r=t(159),A=function(n){function e(e){var t=n.call(this,e)||this;return t.props.formRef&&t.props.formRef.addFormItemsInArr(t),t.formItems=[],t.isOk=!0,t}return o(e,n),e.prototype.cloneChildren=function(n){var e=this;if(n)return r.isArray(n)||(n=[n]),r.map(n,function(n,t){return"string"==typeof n.type?i.cloneElement(n,{key:t,children:e.cloneChildren(n.props.children)}):"string"==typeof n?n:i.cloneElement(n,{key:t,formRef:e,children:e.cloneChildren(n.props.children)})})},e.prototype.addFormItemsInArr=function(n){this.formItems.push(n)},e.prototype.checkState=function(n){var e=!0;return r.forEach(this.formItems,function(t){if(!t.props.name)return null;null!==t.checkState(n)&&(e=e&&t.checkState(n))}),e},e.prototype.getValue=function(){var n=this,e={};return this.isOk=!0,r.forEach(this.formItems,function(t){if(null!==t.getValue()){var o=t.getValue();t.props.name&&(e[t.props.name]=void 0!==o?o:e[t.props.name])}else n.isOk=null}),null===this.isOk?null:e},e.prototype.setValue=function(n){r.forEach(this.formItems,function(e){if(!e.props.name)return null;e.setValue(n[e.props.name])})},e.prototype.getStatus=function(){return!0},e.prototype.render=function(){var n=this.cloneChildren(this.props.children);return i.createElement(i.Fragment,null,n)},e}(i.Component);e.FormContainer=A},442:function(n,e,t){"use strict";var o=function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])};return function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=t(9),r=function(n){function e(e){return n.call(this,e)||this}return o(e,n),e.prototype.render=function(){return i.createElement("button",{className:this.props.className||"",disabled:this.props.disabled||!1,onClick:this.props.onClick?this.props.onClick:null},this.props.children?this.props.children:this.props.title)},e}(i.Component);e.default=r}});
//# sourceMappingURL=main.bundle-4b94.js.map
//# sourceMappingURL=main.bundle-4b94.js.map