(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{173:function(t,e,n){t.exports=n.p+"img/hero.893e1d1.svg"},174:function(t,e,n){t.exports=n.p+"img/presentation.a20c4f9.svg"},175:function(t,e,n){t.exports=n.p+"img/deal.64d3062.svg"},176:function(t,e,n){t.exports=n.p+"img/ask.09d48be.svg"},177:function(t,e,n){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="dist/",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=(r(n(1)),n(6)),u=r(a),s=r(n(7)),o=r(n(8)),p=r(n(9)),b=r(n(10)),l=r(n(11)),c=r(n(14)),d=[],f=!1,m={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(f=!0),f)return d=(0,l.default)(d,m),(0,b.default)(d,m.once),d},h=function(){d=(0,c.default)(),v()},x=function(){d.forEach((function(t,e){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay")}))},w=function(t){return!0===t||"mobile"===t&&p.default.mobile()||"phone"===t&&p.default.phone()||"tablet"===t&&p.default.tablet()||"function"==typeof t&&!0===t()},k=function(t){m=i(m,t),d=(0,c.default)();var e=document.all&&!window.atob;return w(m.disable)||e?x():(m.disableMutationObserver||o.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),m.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",m.easing),document.querySelector("body").setAttribute("data-aos-duration",m.duration),document.querySelector("body").setAttribute("data-aos-delay",m.delay),"DOMContentLoaded"===m.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===m.startEvent?window.addEventListener(m.startEvent,(function(){v(!0)})):document.addEventListener(m.startEvent,(function(){v(!0)})),window.addEventListener("resize",(0,s.default)(v,m.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(v,m.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)((function(){(0,b.default)(d,m.once)}),m.throttleDelay)),m.disableMutationObserver||o.default.ready("[data-aos]",h),d)};t.exports={init:k,refresh:v,refreshHard:h}},function(t,e){},,,,,function(t,e){(function(e){"use strict";function n(t,e,n){function r(e){var n=b,r=v;return b=v=void 0,C=e,g=t.apply(r,n)}function o(t){return C=t,x=setTimeout(c,e),j?r(t):g}function a(t){var i=e-(t-w);return M?y(i,h-(t-C)):i}function l(t){var n=t-w;return void 0===w||n>=e||n<0||M&&t-C>=h}function c(){var t=_();return l(t)?d(t):void(x=setTimeout(c,a(t)))}function d(t){return x=void 0,O&&b?r(t):(b=v=void 0,g)}function f(){void 0!==x&&clearTimeout(x),C=0,b=w=v=x=void 0}function p(){return void 0===x?g:d(_())}function m(){var t=_(),n=l(t);if(b=arguments,v=this,w=t,n){if(void 0===x)return o(w);if(M)return x=setTimeout(c,e),r(w)}return void 0===x&&(x=setTimeout(c,e)),g}var b,v,h,g,x,w,C=0,j=!1,M=!1,O=!0;if("function"!=typeof t)throw new TypeError(s);return e=u(e)||0,i(n)&&(j=!!n.leading,h=(M="maxWait"in n)?k(u(n.maxWait)||0,e):h,O="trailing"in n?!!n.trailing:O),m.cancel=f,m.flush=p,m}function r(t,e,r){var o=!0,a=!0;if("function"!=typeof t)throw new TypeError(s);return i(r)&&(o="leading"in r?!!r.leading:o,a="trailing"in r?!!r.trailing:a),n(t,e,{leading:o,maxWait:e,trailing:a})}function i(t){var e=void 0===t?"undefined":l(t);return!!t&&("object"==e||"function"==e)}function o(t){return!!t&&"object"==(void 0===t?"undefined":l(t))}function a(t){return"symbol"==(void 0===t?"undefined":l(t))||o(t)&&w.call(t)==d}function u(t){if("number"==typeof t)return t;if(a(t))return c;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var n=m.test(t);return n||b.test(t)?v(t.slice(2),n?2:8):p.test(t)?c:+t}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s="Expected a function",c=NaN,d="[object Symbol]",f=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,h="object"==(void 0===e?"undefined":l(e))&&e&&e.Object===Object&&e,g="object"==("undefined"==typeof self?"undefined":l(self))&&self&&self.Object===Object&&self,x=h||g||Function("return this")(),w=Object.prototype.toString,k=Math.max,y=Math.min,_=function(){return x.Date.now()};t.exports=r}).call(e,function(){return this}())},function(t,e){(function(e){"use strict";function n(t,e,n){function i(e){var n=b,r=v;return b=v=void 0,C=e,g=t.apply(r,n)}function o(t){return C=t,x=setTimeout(c,e),j?i(t):g}function u(t){var i=e-(t-_);return M?k(i,h-(t-C)):i}function s(t){var n=t-_;return void 0===_||n>=e||n<0||M&&t-C>=h}function c(){var t=y();return s(t)?d(t):void(x=setTimeout(c,u(t)))}function d(t){return x=void 0,O&&b?i(t):(b=v=void 0,g)}function f(){void 0!==x&&clearTimeout(x),C=0,b=_=v=x=void 0}function p(){return void 0===x?g:d(y())}function m(){var t=y(),n=s(t);if(b=arguments,v=this,_=t,n){if(void 0===x)return o(_);if(M)return x=setTimeout(c,e),i(_)}return void 0===x&&(x=setTimeout(c,e)),g}var b,v,h,g,x,_,C=0,j=!1,M=!1,O=!0;if("function"!=typeof t)throw new TypeError(l);return e=a(e)||0,r(n)&&(j=!!n.leading,h=(M="maxWait"in n)?w(a(n.maxWait)||0,e):h,O="trailing"in n?!!n.trailing:O),m.cancel=f,m.flush=p,m}function r(t){var e=void 0===t?"undefined":u(t);return!!t&&("object"==e||"function"==e)}function i(t){return!!t&&"object"==(void 0===t?"undefined":u(t))}function o(t){return"symbol"==(void 0===t?"undefined":u(t))||i(t)&&x.call(t)==c}function a(t){if("number"==typeof t)return t;if(o(t))return s;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(d,"");var n=p.test(t);return n||m.test(t)?b(t.slice(2),n?2:8):f.test(t)?s:+t}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l="Expected a function",s=NaN,c="[object Symbol]",d=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==(void 0===e?"undefined":u(e))&&e&&e.Object===Object&&e,h="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||h||Function("return this")(),x=Object.prototype.toString,w=Math.max,k=Math.min,y=function(){return g.Date.now()};t.exports=n}).call(e,function(){return this}())},function(t,e){"use strict";function n(t){var e=void 0,r=void 0;for(e=0;e<t.length;e+=1){if((r=t[e]).dataset&&r.dataset.aos)return!0;if(r.children&&n(r.children))return!0}return!1}function r(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!r()}function o(t,e){var n=window.document,o=new(r())(a);u=e,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(t){t&&t.forEach((function(t){var e=Array.prototype.slice.call(t.addedNodes),r=Array.prototype.slice.call(t.removedNodes);if(n(e.concat(r)))return u()}))}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){};e.default={isSupported:i,ready:o}},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function t(){n(this,t)}return i(t,[{key:"phone",value:function(){var t=r();return!(!o.test(t)&&!a.test(t.substr(0,4)))}},{key:"mobile",value:function(){var t=r();return!(!u.test(t)&&!l.test(t.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),t}();e.default=new s},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e,n){var r=t.node.getAttribute("data-aos-once");e>t.position?t.node.classList.add("aos-animate"):void 0!==r&&("false"===r||!n&&"true"!==r)&&t.node.classList.remove("aos-animate")},r=function(t,e){var r=window.pageYOffset,i=window.innerHeight;t.forEach((function(t,o){n(t,i+r,e)}))};e.default=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(12)),a=function(t,e){return t.forEach((function(t,n){t.node.classList.add("aos-init"),t.position=(0,o.default)(t.node,e.offset)})),t};e.default=a},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(13)),a=function(t,e){var n=0,r=0,i=window.innerHeight,a={offset:t.getAttribute("data-aos-offset"),anchor:t.getAttribute("data-aos-anchor"),anchorPlacement:t.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(r=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(t=document.querySelectorAll(a.anchor)[0]),n=(0,o.default)(t).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=t.offsetHeight/2;break;case"bottom-bottom":n+=t.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+t.offsetHeight;break;case"center-center":n+=i/2+t.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=t.offsetHeight+i;break;case"center-top":n+=t.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(e)||(r=e),n+r};e.default=a},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){for(var e=0,n=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)e+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),n+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:n,left:e}};e.default=n},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,(function(t){return{node:t}}))};e.default=n}])},178:function(t,e,n){"use strict";n.r(e);var r=n(177),o=n.n(r),l=(n(121),{mixins:[{mounted:function(){o.a.init({disable:"phone"})}}]}),c=n(9),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pb-24"},[r("section",{staticClass:"w-full py-12",attrs:{id:"hero"}},[r("div",{staticClass:"relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden"},[r("div",{staticClass:"col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left"},[r("span",{staticClass:"text-base text-gray-600 font-semibold uppercase",attrs:{"data-aos":"fade-right","data-aos-once":"true"}},[t._v("Daftar Sekarang")]),t._v(" "),r("h1",{staticClass:"font-extrabold text-transparent text-4xl md:text-7xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600",attrs:{"data-aos":"fade-right","data-aos-once":"true"}},[t._v("\n                    Web Aplikasi Akutansi #1\n                ")]),t._v(" "),r("p",{staticClass:"paragraph hidden sm:block",attrs:{"data-aos":"fade-down","data-aos-once":"true","data-aos-delay":"300"}},[t._v("\n                    Gunakan untuk membantu pembukuan diperusahaan Anda\n                    terkait dengan transaksi, penjualan, pembelian, dan juga\n                    stock produk yang dimiliki.\n                ")]),t._v(" "),r("div",{staticClass:"flex justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 py-2",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-delay":"700"}},[r("Button",{attrs:{url:"https://app.jurnalbijak.com/register",text:"Daftar Sekarang"}})],1)]),t._v(" "),r("div",{staticClass:"hidden sm:block col-span-12 lg:col-span-6 mt-12 xl:mt-10"},[r("div",{staticClass:"w-full"},[r("img",{attrs:{"data-aos":"fade-up","data-aos-once":"true",src:n(173),alt:"Membantu Jurnal Anda - Jurnalbijak.com"}})])])])]),t._v(" "),r("section",[r("div",{staticClass:"relative max-w-screen-xl p-4 mx-auto sm:p-16 overflow-hidden"},[t._m(0),t._v(" "),r("div",{staticClass:"flex flex-col space-y-5"},[r("div",{staticClass:"flex items-center justify-between w-full transition duration-500 ease-in-out transform bg-blue-400 border-2 rounded",attrs:{"data-aos":"fade-right","data-aos-once":"true","data-aos-delay":"300"}},[r("div",{staticClass:"w-full"},[r("div",{staticClass:"relative flex flex-col h-full p-8"},[r("h2",{staticClass:"mb-4 font-semibold tracking-widest text-white uppercase title-font"},[t._v("\n                                Silver (Periodik)\n                            ")]),t._v(" "),r("p",{staticClass:"flex items-center mb-2 text-lg font-normal tracking-wide text-white"},[r("span",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"},[r("svg",{staticClass:"w-4 h-4",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M20 6L9 17l-5-5"}})])]),t._v("Manajemen Akun dan Kontak\n                            ")]),t._v(" "),r("p",{staticClass:"flex items-center mb-2 text-lg font-normal tracking-wide text-white"},[r("span",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"},[r("svg",{staticClass:"w-4 h-4",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M20 6L9 17l-5-5"}})])]),t._v("Jurnal Umum\n                            ")]),t._v(" "),r("p",{staticClass:"flex items-center mb-2 text-lg font-normal tracking-wide text-white"},[r("span",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"},[r("svg",{staticClass:"w-4 h-4",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M20 6L9 17l-5-5"}})])]),t._v("Laporan Keuangan, (Laba-rugi, Arus Kas,\n                                Perubahan Ekuitas, Posisi Keuangan)\n                            ")]),t._v(" "),r("p",{staticClass:"flex items-center mb-2 text-lg font-normal tracking-wide text-white"},[r("span",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"},[r("svg",{staticClass:"w-4 h-4",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M20 6L9 17l-5-5"}})])]),t._v("Laporan Buku Besar\n                            ")]),t._v(" "),r("p",{staticClass:"flex items-center mb-2 text-lg font-normal tracking-wide text-white"},[r("span",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"},[r("svg",{staticClass:"w-4 h-4",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M20 6L9 17l-5-5"}})])]),t._v("Laporan Hutang dan Laporan Piutang\n                            ")])])]),t._v(" "),t._m(1)]),t._v(" "),r("div",{staticClass:"flex items-center justify-between w-full transition duration-500 ease-in-out transform bg-blue-400 border-2 rounded",attrs:{"data-aos":"fade-left","data-aos-once":"true","data-aos-delay":"300"}},[r("div",{staticClass:"w-full"},[r("div",{staticClass:"relative flex flex-col h-full p-8"},[r("h2",{staticClass:"mb-4 font-semibold tracking-widest text-white uppercase title-font"},[t._v("\n                                Gold (Perpetual)\n                            ")]),t._v(" "),r("p",{staticClass:"flex items-center mb-2 text-lg font-normal tracking-wide text-white"},[r("span",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"},[r("svg",{staticClass:"w-4 h-4",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M20 6L9 17l-5-5"}})])]),t._v("Semua fitur yang tersedia di Paket Silver\n                                (Periodik)\n                            ")]),t._v(" "),r("p",{staticClass:"flex items-center mb-2 text-lg font-normal tracking-wide text-white"},[r("span",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"},[r("svg",{staticClass:"w-4 h-4",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M20 6L9 17l-5-5"}})])]),t._v("Manajemen Produk\n                            ")]),t._v(" "),r("p",{staticClass:"flex items-center mb-2 text-lg font-normal tracking-wide text-white"},[r("span",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"},[r("svg",{staticClass:"w-4 h-4",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M20 6L9 17l-5-5"}})])]),t._v("Pencatatan Kas dan Bank\n                            ")]),t._v(" "),r("p",{staticClass:"flex items-center mb-2 text-lg font-normal tracking-wide text-white"},[r("span",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"},[r("svg",{staticClass:"w-4 h-4",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M20 6L9 17l-5-5"}})])]),t._v("Pencatatan Pembelian\n                            ")]),t._v(" "),r("p",{staticClass:"flex items-center mb-2 text-lg font-normal tracking-wide text-white"},[r("span",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"},[r("svg",{staticClass:"w-4 h-4",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M20 6L9 17l-5-5"}})])]),t._v("Pencatatan Penjualan\n                            ")]),t._v(" "),r("p",{staticClass:"flex items-center mb-2 text-lg font-normal tracking-wide text-white"},[r("span",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"},[r("svg",{staticClass:"w-4 h-4",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M20 6L9 17l-5-5"}})])]),t._v("Penyesuaian Persediaan\n                            ")]),t._v(" "),r("p",{staticClass:"flex items-center mb-2 text-lg font-normal tracking-wide text-white"},[r("span",{staticClass:"inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white rounded-full bg-blue-1300"},[r("svg",{staticClass:"w-4 h-4",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2.5",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M20 6L9 17l-5-5"}})])]),t._v("Laporan Persediaan\n                            ")])])]),t._v(" "),t._m(2)])])])]),t._v(" "),r("section",[r("div",{staticClass:"max-w-screen-lg mx-auto px-3 py-16"},[t._m(3),t._v(" "),r("div",{staticClass:"mt-20 flex flex-wrap items-center",attrs:{"data-aos":"zoom-in-left"}},[t._m(4),t._v(" "),r("div",{staticClass:"w-full sm:w-1/2 p-6"},[r("img",{attrs:{src:n(174),alt:"Presentation - Jurnalbijak.com"}})])]),t._v(" "),r("div",{staticClass:"mt-20 flex flex-wrap items-center flex-row-reverse",attrs:{"data-aos":"zoom-in-right"}},[t._m(5),t._v(" "),r("div",{staticClass:"w-full sm:w-1/2 p-6"},[r("img",{attrs:{src:n(175),alt:"Make a deal - Jurnalbijak.com"}})])]),t._v(" "),r("div",{staticClass:"mt-20 flex flex-wrap items-center",attrs:{"data-aos":"zoom-in-left"}},[t._m(6),t._v(" "),r("div",{staticClass:"w-full sm:w-1/2 p-6"},[r("img",{attrs:{src:n(176),alt:"Customer Support - Jurnalbijak.com"}})])])])]),t._v(" "),r("div",{staticClass:"bg-blue-400 rounded max-w-screen-lg mx-auto px-3"},[r("div",{staticClass:"text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-primary-100 rounded-md"},[t._m(7),t._v(" "),r("div",{staticClass:"whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2"},[r("Button",{attrs:{text:"Daftar Sekarang",url:"https://app.jurnalbijak.com/register",outline:!0}})],1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"text-center w-full font-bold py-8 sm:py-16 text-2xl text-gray-600 uppercase",attrs:{"data-aos":"fade-up","data-aos-once":"true"}},[t._v("\n                Pilihan Paket "),n("i",{attrs:{"data-feather":"circle"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full"},[n("div",{staticClass:"relative flex flex-col h-full p-8"},[n("p",{staticClass:"line-through text-white text-center"},[t._v("\n                                Rp. 200.000\n                            ")]),t._v(" "),n("h1",{staticClass:"flex items-end mx-auto text-3xl font-black leading-none text-white"},[n("span",[t._v("Rp. 100.000 ")])]),t._v(" "),n("p",{staticClass:"mx-auto mt-6 text-xs text-white"},[t._v("\n                                Gratis masa uji coba 14 hari\n                            ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full"},[n("div",{staticClass:"relative flex flex-col h-full p-8"},[n("p",{staticClass:"line-through text-white text-center"},[t._v("\n                                Rp. 400.000\n                            ")]),t._v(" "),n("h1",{staticClass:"flex items-end mx-auto text-3xl font-black leading-none text-white"},[n("span",[t._v("Rp. 200.000 ")])]),t._v(" "),n("p",{staticClass:"mx-auto mt-6 text-xs text-white"},[t._v("\n                                Gratis masa uji coba 14 hari\n                            ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-12 text-center",attrs:{"data-aos":"zoom-in"}},[n("h2",{staticClass:"text-4xl text-gray-900 font-bold"},[t._v("\n                    Cara Anda untuk mendapatkan layanan Maksimal\n                ")]),t._v(" "),n("div",{staticClass:"mt-4 text-xl md:px-20"},[t._v("\n                    Sesuaikan paket pada aplikasi kami dengan kebutuhan Anda\n                    dalam mengelola bisnis.\n                ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full sm:w-1/2 text-center sm:px-6"},[n("h3",{staticClass:"text-3xl text-gray-900 font-semibold"},[t._v("\n                        Minta Demo (Presentasi)\n                    ")]),t._v(" "),n("div",{staticClass:"mt-6 text-xl leading-9"},[t._v("\n                        Sebelum membeli Anda bisa meminta kami untuk\n                        melakukan presentasi tentang bagaimana cara terbaik\n                        untuk menggunakan fitur-fitur yang tersedia\n                        dijurnalbijak.\n                    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full sm:w-1/2 text-center sm:px-6"},[n("h3",{staticClass:"text-3xl text-gray-900 font-semibold"},[t._v("\n                        Buat Kesepakatan\n                    ")]),t._v(" "),n("div",{staticClass:"mt-6 text-xl leading-9"},[t._v("\n                        Setelah presentasi Anda bisa memutuskan kembali,\n                        untuk berlangganan dengan jurnalbijak dan menikmati\n                        fitur yang disediakan oleh kami.\n                    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full sm:w-1/2 text-center sm:px-6"},[n("h3",{staticClass:"text-3xl text-gray-900 font-semibold"},[t._v("\n                        Konsultasikan\n                    ")]),t._v(" "),n("div",{staticClass:"mt-6 text-xl leading-9"},[t._v("\n                        Selama Anda menjadi pelanggan yang baik di\n                        jurnalbijak, kami akan selalu membantu Anda jika ada\n                        masalah dengan aplikasi kami.\n                    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-2xl"},[n("div",{staticClass:"text-white font-semibold"},[t._v("\n                    Ayo, Gunakan sekarang sebelum kiamat.\n                ")]),t._v(" "),n("div",{staticClass:"text-base"},[t._v("Mulai Uji Coba Gratis.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(68).default})}}]);