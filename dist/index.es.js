import e,{useState as t,useRef as a,useEffect as o,useMemo as n,useCallback as i,forwardRef as r,useImperativeHandle as l}from"react";import{createPortal as s}from"react-dom";function d({width:t="11",height:a="20",active:o,iconColorExpanded:n="stroke-white",iconColorCollapse:i="stroke-blue"}){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:a,fill:"none",viewBox:"0 0 11 20"},e.createElement("path",{className:o?n:i,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1.545 18.44l8.22-8.256-8.22-8.257"}))}function c({width:t="17",height:a="17",active:o,iconColorExpanded:n="stroke-blue",iconColorCollapse:i="stroke-black"}){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:a,fill:"none",viewBox:"0 0 17 17"},e.createElement("path",{className:o?n:i,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:""+(o?"M1.463 8.229h14":"M8.463 1.229v14 M1.463 8.229h14")}))}function p({expand:n="Your title",collapse:i="Your collapsed content",className:r="bg-white",boxStyle:l=!1,shadow:s=!0,headerStyle:p="text-15px font-600 text-black",headerStyleExpanded:m="text-15px font-600 text-blue pb-10px",iconColorExpanded:x,iconColorCollapse:u,circleExpand:h="rotate-90deg bg-blue",circleCollapse:f=(s?"shadow-small-gray-9":"")+" bg-white",collapseStyle:b="text-15px text-black text-left"}){const[g,w]=t(!1),k=a(null);o((()=>{k.current.style.maxHeight=g?`${k.current.scrollHeight}px`:"0px"}),[k,g]);const y=()=>{w(!g)};return e.createElement("div",{id:"accordion",role:"button",tabIndex:0,className:`cursor-pointer p-15px transition-all transition-duration-100ms ease overflow-x-hidden rounded-5px focus:outline-1px focus:outline-solid focus:text-blue-9 text-blue-9 border-1px border-solid border-gray-10 ${l?"py-20px mb-10px":""} ${r}\n      `,onClick:y,onKeyPress:y},e.createElement(e.Fragment,null,e.createElement("div",{className:"flex items-center"},e.createElement("h3",{className:`mb-0px ${g?m:p}`},n),e.createElement("span",{className:"ml-auto min-w-10px "+(g?"pb-10px":"pb-0px")},l?e.createElement("div",{className:"rounded-50per min-w-25px min-h-25px flex justify-center items-center transition-all transition-duration-200ms ease "+(g?`${h}`:`${f}`)},e.createElement(d,{active:g,width:"10",height:"12",iconColorExpanded:x,iconColorCollapse:u})):e.createElement(c,{active:g,width:"10",height:"10",iconColorExpanded:x,iconColorCollapse:u}))),e.createElement("div",{ref:k,className:"overflow-hidden transition-all transition-duration-300ms ease"},e.createElement("p",{className:`relative z-99 mb-0px ${b}`},i))))}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},m.apply(this,arguments)}function x({width:t="20",height:a="20",iconColor:o="fill-gray"}){return e.createElement("svg",{className:"cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:t,height:a,fill:"none",viewBox:"0 0 20 20"},e.createElement("path",{className:o,d:"M5.187 4.01A.833.833 0 004.01 5.187L8.822 10l-4.814 4.813a.835.835 0 101.179 1.178L10 11.178l4.813 4.813a.833.833 0 001.178-1.178L11.178 10l4.813-4.812a.833.833 0 00-1.178-1.179L10 8.822 5.187 4.008v.001z"}))}const u=({children:t,toggle:a,setToggle:n,className:i,backgroundAnimation:r="fade-in animation-duration-500ms animation-forwards",iconColor:l,closeIcon:d=e.createElement(x,{iconColor:l}),modalContentAnimation:c="fade-in animation-duration-500ms animation-forwards",useKeyInput:p=!0,shadow:m=!0,modalPadding:u=!0})=>(!0===p&&o((()=>{const e=e=>{27===e.keyCode&&n()};window.addEventListener("keydown",e);const t=e=>{(e.ctrlKey||e.metaKey)&&"k"===e.key&&(e.preventDefault(),n(!0))};return document.addEventListener("keydown",t),()=>window.removeEventListener("keydown",e)||document.removeEventListener("keydown",t)}),[]),"undefined"!=typeof window&&s(e.createElement(e.Fragment,null,a&&e.createElement(e.Fragment,null,e.createElement("div",{onClick:n.bind(void 0,!1),className:`fixed z-97 left-0per top-0per bottom-0per right-0per backdrop-blur-30px text-black ${r}`,style:{backgroundColor:"rgba(16,16,16,0.5)"}}),e.createElement(h,{shadow:m,className:i,setToggle:n,closeIcon:d,modalPadding:u,modalContentAnimation:c},t))),document.querySelector("#modal-portal"))),h=({children:t,className:o,modalContentAnimation:n,closeIcon:i,shadow:r,setToggle:l,modalPadding:s,...d})=>{const c=a();return e.createElement("div",m({ref:c,tabIndex:0},d,{className:`fixed left-50per top-50per z-98 text-black overflow-x-hidden rounded-20px bg-white min-w-50rem sm:min-w-90vw md:min-w-90vw ${r?"shadow-small-black-2":""} ${o} ${n}`,style:{transform:"translate(-50%, -50%)"}}),e.createElement("div",{role:"button",tabIndex:0,onKeyPress:l.bind(void 0,!1),onClick:l.bind(void 0,!1),className:"absolute focus:outline-1px focus:outline-solid focus:outline-gray text-gray-9",style:{top:"20px",right:"20px",zIndex:"99999"}},i),e.createElement("div",{className:s?"p-20px":""},t))};function f({required:t,id:a,label:o,value:n,setValue:i,htmlFor:r,maxLength:l,minLength:s,type:d="text",autofocus:c=!1,shadow:p=!0,ariaLabel:m="input-field"}){return e.createElement("div",{className:"relative"},e.createElement("input",{autoFocus:c,"aria-label":m,required:t,id:a,maxLength:l,minLength:s,type:d,onChange:e=>i(e.target.value),value:n,className:"greeninput border-none bg-white rounded-10px pl-10px text-15px h-50px w-100per border-blue-9 focus:border-1px focus:border-solid "+(p?"shadow-small-gray-9":"")}),e.createElement("label",{className:"w-100per placeholder-text pl-10px absolute top-0per right-0per bottom-0per left-0per flex items-center pointer-events-none w-100per h-50px",htmlFor:r},e.createElement("div",{className:"text translate-0per transition-all transition-duration-300ms text-black-7 text-15px"},o)))}function b({required:t,id:a,label:n,value:i,setValue:r,htmlFor:l,maxLength:s,type:d="text",autofocus:c=!1,shadow:p=!0,ariaLabel:m="textarea-field"}){c&&o((()=>{document.querySelector("[contenteditable]").focus()}),[]);return e.createElement("div",{className:"relative"},e.createElement("div",{tabIndex:c?1:0,"aria-label":m,autoFocus:c,spellCheck:"false",contentEditable:"true",required:t,id:a,maxLength:s,onKeyDown:s>=1?e=>{(e.target.outerText.length===s&&8!=e.keyCode||37===e.keyCode||38===e.keyCode||39===e.keyCode||40===e.keyCode||e.ctrlKey||e.metaKey)&&e.preventDefault()}:null,type:d,onInput:e=>r(e.currentTarget.textContent),value:i,className:"greeninput greentextarea border-none bg-white rounded-10px pl-10px text-15px h-50px w-100per border-blue-9 focus:border-1px focus:border-solid "+(p?"shadow-small-gray-9":"")}),e.createElement("label",{className:"placeholder-text pl-10px absolute top-0per right-0per bottom-0per left-0per flex items-center pointer-events-none w-100per h-50px",htmlFor:l},e.createElement("div",{className:"text translate-0per transition-all transition-duration-300ms text-black-7 text-15px"},n)))}function g({header:a="🍪 Our website uses cookies",shadow:n=!0,position:i="bottom-right",showButton:r=!0,buttonText:l="Accept",buttonStyle:s="mt-25px cursor-pointer flex py-10px px-25px min-w-50px font-bold transition-duration-200ms transition-all rounded-10px border-1px border-solid border-black my-auto text-center justify-center items-center mx-auto my-auto text-15px text-black hover:bg-black hover:text-white",className:d,children:c}){const[p,m]=t(!0);o((()=>{"accepted"==(()=>{if("undefined"!=typeof window){const e=localStorage.getItem("cookie");if(e)return JSON.parse(e)}return""})()&&m(!1)}),[]);let x=("top-left"===i?"top-0per left-0per":"top-right"===i&&"top-0per right-0per")||"bottom-left"===i&&"bottom-0per left-0per"||"bottom-right"===i&&"bottom-0per right-0per";return e.createElement(e.Fragment,null,p&&e.createElement("div",{className:`fixed m-20px max-h-50vh w-50vw sm:w-auto md:w-auto bg-white z-99 rounded-10px overflow-scroll ${n?"shadow-small-gray":""} ${i&&x} ${d}`,id:"cookie-banner"},e.createElement("div",{className:"flex h-100per sm:block p-20px"},e.createElement("div",{className:"m-auto"},e.createElement("h3",{className:"text-25px font-600"},a),c||e.createElement("p",{className:"text-15px text-gray font-400"},"Our website use cookies. By continuing, we assume your permission to deploy cookies as detailed in our"," ",e.createElement("span",{className:"text-blue"},"Privacy Policy.")),r&&e.createElement("button",{onClick:()=>{localStorage.setItem("cookie",JSON.stringify("accepted")),m(!1)},id:"close-cookie",className:`${s}`},l)))))}function w(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===a&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}u.Header=({children:t,className:a,...o})=>e.createElement("header",m({className:`text-20px font-bold mb-20px max-w-90per ${a}`},o),t),u.Body=({children:t,className:a,...o})=>e.createElement("div",m({className:`${a}`},o),t),u.Footer=({children:t,className:a,...o})=>e.createElement("footer",m({className:`mt-20px ${a}`},o),t);function k({width:t="50",height:a="50",className:o="fill-black"}){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:a,fill:"none",viewBox:"0 0 50 50","aria-label":"close-toast"},e.createElement("mask",{id:"mask0_516351_1648",style:{maskType:"alpha"},width:"25",height:"25",x:"12",y:"12",maskUnits:"userSpaceOnUse"},e.createElement("path",{className:o,fillRule:"evenodd",d:"M32.709 35.941l-8.082-8.081-8.08 8.081a2.286 2.286 0 11-3.233-3.232l8.081-8.082-8.081-8.08a2.286 2.286 0 013.232-3.233l8.081 8.08 8.082-8.08a2.286 2.286 0 013.232 3.232l-8.081 8.081 8.081 8.082a2.286 2.286 0 11-3.232 3.232z",clipRule:"evenodd"})),e.createElement("g",{mask:"url(#mask0_516351_1648)"},e.createElement("path",{className:o,d:"M0 0H50V50H0z"})))}function y({width:t="50",height:a="50"}){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:a,fill:"none",viewBox:"0 0 28 28"},e.createElement("path",{fill:"#DBEAFE",d:"M27.27 13.5c0 7.456-6.044 13.5-13.5 13.5S.27 20.956.27 13.5 6.314 0 13.77 0s13.5 6.044 13.5 13.5z"}),e.createElement("path",{fill:"#DBEAFE",d:"M2 27.5c-.96 0-1.46-.46-1.055-1.383a.84.84 0 01.14-.214l4.03-4.586c-.422-.241-1.412-2.16 0 0l7.035 4.016c.795.454 2.514 1.47 1.62 1.667L2 27.5z"}),e.createElement("mask",{id:"mask0_40_0",style:{maskType:"alpha"},width:"14",height:"12",x:"7",y:"7",maskUnits:"userSpaceOnUse"},e.createElement("path",{fill:"#066EF9",fillRule:"evenodd",d:"M14.52 7.5a.6.6 0 00-1.04 0L7.591 17.7a.6.6 0 00.52.9h11.778a.6.6 0 00.52-.9l-5.89-10.2zm-1.32 2.908a.2.2 0 01.2-.208h1.2a.2.2 0 01.2.208l-.187 4.8a.2.2 0 01-.2.192h-.826a.2.2 0 01-.2-.192l-.187-4.8zM13.395 16c0-.11.09-.2.2-.2h.812c.11 0 .2.09.2.2v.8a.2.2 0 01-.2.2h-.812a.2.2 0 01-.2-.2V16z",clipRule:"evenodd"})),e.createElement("g",{mask:"url(#mask0_40_0)"},e.createElement("path",{fill:"#066EF9",d:"M4 3H24V23H4z"})))}function v({width:t="28",height:a="28"}){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:a,fill:"none",viewBox:"0 0 28 28"},e.createElement("path",{fill:"#FEDBDB",d:"M27.27 13.5c0 7.456-6.044 13.5-13.5 13.5S.27 20.956.27 13.5 6.314 0 13.77 0s13.5 6.044 13.5 13.5z"}),e.createElement("path",{fill:"#FEDBDB",d:"M2 27.5c-.96 0-1.46-.46-1.055-1.383a.84.84 0 01.14-.214l4.03-4.586c-.422-.241-1.412-2.16 0 0l7.035 4.016c.795.454 2.514 1.47 1.62 1.667L2 27.5z"}),e.createElement("mask",{id:"mask0_40_0",style:{maskType:"alpha"},width:"13",height:"13",x:"7",y:"7",maskUnits:"userSpaceOnUse"},e.createElement("path",{fill:"#F90606",fillRule:"evenodd",d:"M13.5 19.2a5.7 5.7 0 100-11.4 5.7 5.7 0 000 11.4zm-2.956-7.58a.76.76 0 111.075-1.076l1.881 1.881 1.881-1.88a.76.76 0 111.075 1.074L14.575 13.5l1.88 1.88a.76.76 0 11-1.074 1.076l-1.88-1.881-1.882 1.88a.76.76 0 11-1.075-1.074l1.881-1.881-1.88-1.88z",clipRule:"evenodd"})),e.createElement("g",{mask:"url(#mask0_40_0)"},e.createElement("path",{fill:"#F90606",d:"M4 4H23V23H4z"})))}function E({width:t="50",height:a="50"}){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:a,fill:"none",viewBox:"0 0 28 28"},e.createElement("path",{fill:"#edfedb",d:"M27.27 13.5c0 7.456-6.044 13.5-13.5 13.5S.27 20.956.27 13.5 6.314 0 13.77 0s13.5 6.044 13.5 13.5z"}),e.createElement("path",{fill:"#edfedb",d:"M2 27.5c-.96 0-1.46-.46-1.055-1.383a.84.84 0 01.14-.214l4.03-4.586c-.422-.241-1.412-2.16 0 0l7.035 4.016c.795.454 2.514 1.47 1.62 1.667L2 27.5z"}),e.createElement("mask",{id:"mask0_40_0",style:{maskType:"alpha"},width:"14",height:"13",x:"7",y:"7",maskUnits:"userSpaceOnUse"},e.createElement("path",{fill:"#3e7a02",fillRule:"evenodd",d:"M13.507 18.3c2.581 0 4.706-2.131 4.706-4.8 0-.25-.019-.497-.055-.737l1-1.015c.166.554.255 1.143.255 1.752 0 3.314-2.644 6-5.906 6-3.262 0-5.907-2.686-5.907-6s2.645-6 5.907-6c1.496 0 2.862.565 3.903 1.497l-.843.857a4.642 4.642 0 00-3.06-1.154c-2.582 0-4.707 2.131-4.707 4.8s2.125 4.8 4.707 4.8zm-3.07-5.102a.2.2 0 01.014-.277l.667-.623a.2.2 0 01.287.015l1.73 1.997 6.215-5.65a.2.2 0 01.287.018l.59.7a.2.2 0 01-.019.277l-6.704 6.096-.327.297a.2.2 0 01-.285-.017l-.29-.335-2.165-2.498z",clipRule:"evenodd"})),e.createElement("g",{mask:"url(#mask0_40_0)"},e.createElement("path",{fill:"#3e7a02",d:"M4 3.5H24V23.5H4z"})))}function N({width:t="50",height:a="50"}){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:a,fill:"none",viewBox:"0 0 28 28"},e.createElement("path",{fill:"#FEEFDB",d:"M27.27 13.5c0 7.456-6.044 13.5-13.5 13.5S.27 20.956.27 13.5 6.314 0 13.77 0s13.5 6.044 13.5 13.5z"}),e.createElement("path",{fill:"#FEEFDB",d:"M2 27.5c-.96 0-1.46-.46-1.055-1.383a.84.84 0 01.14-.214l4.03-4.586c-.422-.241-1.412-2.16 0 0l7.035 4.016c.795.454 2.514 1.47 1.62 1.667L2 27.5z"}),e.createElement("mask",{id:"mask0_40_0",style:{maskType:"alpha"},width:"12",height:"14",x:"8",y:"7",maskUnits:"userSpaceOnUse"},e.createElement("path",{fill:"#000",fillRule:"evenodd",d:"M18 9.97c.364.884.467 3.653.494 5.538h.006l1.5 1.846v.923H8v-.923l1.5-1.846h.023c.04-1.921.155-4.757.477-5.539.648-1.572 1.862-2.769 4-2.769s3.352 1.197 4 2.77zm-4 10.615c1.02 0 1.846-.827 1.846-1.847h-3.692c0 1.02.826 1.847 1.846 1.847z",clipRule:"evenodd"})),e.createElement("g",{mask:"url(#mask0_40_0)"},e.createElement("path",{fill:"#F99106",d:"M4 4H24V24H4z"})))}w("@media(prefers-reduced-motion:reduce){*,:after,:before{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}*,:after,:before{box-sizing:border-box}*{margin:0}input{font:inherit}input:focus{outline:none}::-moz-focus-inner,input::-moz-focus-inner{border:0}::-moz-focus-inner{border:0}.fade-in{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden}@keyframes fadeIn{0%{opacity:0}45%{opacity:.33}to{opacity:1}}.fade-in-right{-webkit-animation-name:fadeInRight;animation-name:fadeInRight;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden}@keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(200px,0,0);transform:translate3d(200px,0,0)}45%{opacity:.33}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fade-in-left{-webkit-animation-name:fadeInLeft;animation-name:fadeInLeft;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden}@keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(-200px,0,0);transform:translate3d(-200px,0,0)}45%{opacity:.33}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fade-out-left{-webkit-animation-name:fadeOutLeft;animation-name:fadeOutLeft;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden}@keyframes fadeOutLeft{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}45%{opacity:.33}to{opacity:0;-webkit-transform:translate3d(-200px,0,0);transform:translate3d(-200px,0,0)}}.fade-out-right{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden}@keyframes fadeOutRight{0%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}45%{opacity:.33}to{opacity:0;-webkit-transform:translate3d(200px,0,0);transform:translate3d(200px,0,0)}}.font-bold{font-weight:700}.text-left{text-align:left}.text-center{text-align:center}.text-12px{font-size:12px}.text-15px{font-size:15px}.text-20px{font-size:20px}.text-25px{font-size:25px}.font-400{font-weight:400}.font-600{font-weight:600}.block{display:block}.flex{display:flex}.flex-1{flex:1}.justify-center{justify-content:center}.items-center{align-items:center}.hover\\:bg-black:hover{background-color:#101010}.hover\\:text-white:hover{color:#fdfdfd}.text-blue{color:#066ef9}.text-black{color:#101010}.text-gray{color:#7d7d7d}.bg-red{background-color:#f90606}.bg-orange{background-color:#f99106}.bg-greencss{background-color:#3e7a02}.bg-blue{background-color:#066ef9}.focus\\:text-blue-9:focus,.text-blue-9{color:#dbeafe}.text-black-7{color:#656565}.text-gray-9{color:#eaeaea}.bg-red-8{background-color:#fec3c3}.bg-orange-8{background-color:#fee5c3}.bg-green-8{background-color:#e1fec3}.bg-blue-8{background-color:#c3dcfe}.bg-white{background-color:#fdfdfd}.overflow-hidden{overflow:hidden}.overflow-scroll{overflow:scroll}.overflow-x-hidden{overflow-x:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.collapse{visibility:collapse}.top-0per{top:0}.top-2per{top:2%}.top-50per{top:50%}.right-0per{right:0}.right-2per{right:2%}.bottom-0per{bottom:0}.left-0per{left:0}.left-50per{left:50%}.z-97{z-index:97}.z-98{z-index:98}.z-99{z-index:99}.m-auto{margin:auto}.mx-auto{margin-inline:auto}.my-auto{margin-block:auto}.ml-auto{margin-left:auto}.w-35rem{width:35rem}.w-100per{width:100%}.w-50vw{width:50vw}.max-w-90per{max-width:90%}.min-w-10px{min-width:10px}.min-w-25px{min-width:25px}.min-w-30px{min-width:30px}.min-w-50px{min-width:50px}.min-w-50rem{min-width:50rem}.h-5px{height:5px}.h-50px{height:50px}.h-100per{height:100%}.max-h-50vh{max-height:50vh}.min-h-25px{min-height:25px}.min-h-75px{min-height:75px}.p-10px{padding:10px}.p-15px{padding:15px}.p-20px{padding:20px}.pb-0px{padding-bottom:0}.pb-10px{padding-bottom:10px}.pl-10px{padding-left:10px}.px-10px{padding-inline:10px}.px-25px{padding-inline:25px}.py-10px{padding-block:10px}.py-20px{padding-block:20px}.m-10px{margin:10px}.m-20px{margin:20px}.mt-20px{margin-top:20px}.mt-25px{margin-top:25px}.mb-0px{margin-bottom:0}.mb-10px{margin-bottom:10px}.mb-20px{margin-bottom:20px}.my-10px{margin-block:10px}.ease{transition-timing-function:ease;-webkit-transition-timing-function:ease;-moz-transition-timing-function:ease}.animation-forwards{animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards}.transition-all{transition-property:all}.animation-duration-300ms{animation-duration:.3s;-webkit-animation-duration:.3s}.animation-duration-500ms{animation-duration:.5s;-webkit-animation-duration:.5s}.transition-duration-100ms{transition-duration:.1s;-webkit-transition-duration:.1s}.transition-duration-200ms{transition-duration:.2s;-webkit-transition-duration:.2s}.transition-duration-300ms{transition-duration:.3s;-webkit-transition-duration:.3s}.shadow-small-black-2{box-shadow:5px 5px 10px -1px #282828;-webkit-box-shadow:5px 5px 10px -1px #282828;-moz-box-shadow:5px 5px 10px -1px #282828;-ms-box-shadow:5px 5px 10px -1px #282828}.shadow-small-gray{box-shadow:5px 5px 10px -1px #7d7d7d;-webkit-box-shadow:5px 5px 10px -1px #7d7d7d;-moz-box-shadow:5px 5px 10px -1px #7d7d7d;-ms-box-shadow:5px 5px 10px -1px #7d7d7d}.shadow-small-gray-5{box-shadow:5px 5px 10px -1px #bababa;-webkit-box-shadow:5px 5px 10px -1px #bababa;-moz-box-shadow:5px 5px 10px -1px #bababa;-ms-box-shadow:5px 5px 10px -1px #bababa}.shadow-small-gray-9{box-shadow:5px 5px 10px -1px #eaeaea;-webkit-box-shadow:5px 5px 10px -1px #eaeaea;-moz-box-shadow:5px 5px 10px -1px #eaeaea;-ms-box-shadow:5px 5px 10px -1px #eaeaea}.opacity-100per{opacity:100%}.rotate-90deg{transform:rotate(90deg);-webkit-transform:rotate(90deg)}.translate-0per{transform:translate(0);-webkit-transform:translate(0)}.backdrop-blur-30px{backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px)}.border-solid,.focus\\:border-solid:focus{border-style:solid}.border-none{border-style:none}.focus\\:outline-solid:focus{outline-style:solid}.border-blue-9{border-color:#dbeafe}.border-black{border-color:#101010}.border-gray-10{border-color:#f6f6f6}.rounded-5px{border-radius:5px}.rounded-10px{border-radius:10px}.rounded-20px{border-radius:20px}.rounded-50per{border-radius:50%}.rounded-left-radius-5px{border-bottom-left-radius:5px;border-top-left-radius:5px}.border-1px,.focus\\:border-1px:focus{border-width:1px}.focus\\:outline-1px:focus{outline-width:1px}.cursor-pointer{cursor:pointer}.pointer-events-none{pointer-events:none}.fill-black{fill:#101010}.fill-gray{fill:#7d7d7d}.stroke-white{stroke:#fdfdfd}.stroke-blue{stroke:#066ef9}.stroke-black{stroke:#101010}@media(max-width:480px){.sm\\:block{display:block}.sm\\:w-auto{width:auto}.sm\\:min-w-90vw{min-width:90vw}}@media(min-width:481px)and (max-width:768px){.md\\:w-auto{width:auto}.md\\:min-w-90vw{min-width:90vw}}");w(".Toast-module_toast_progress__peRjM{animation-fill-mode:forwards;animation-name:Toast-module_progressBar__BVuLJ;animation-timing-function:linear}@keyframes Toast-module_progressBar__BVuLJ{0%{width:100%}to{width:0}}");const z=({type:t})=>{switch(t){case"success":return e.createElement(E,{height:"30",width:"30"});case"error":return e.createElement(v,{height:"30",width:"30"});case"info":return e.createElement(y,{height:"30",width:"30"});case"warning":return e.createElement(N,{height:"30",width:"30"});default:return e.createElement(k,{width:"20",height:"20"})}},C=({item:t,deleteToast:r,duration:l,progressColor:s,setAnimation:d,removeAnimation:c,shadow:p})=>{const m=a(),x=l,u=n((()=>`${d}`),[]);o((()=>{const e=setInterval((()=>{r(t.id)}),x);return()=>{clearInterval(e)}}),[]),o((()=>{const e=setInterval((()=>{m.current.classList.remove(`${d}`),m.current.classList.add(`${c}`),clearInterval(e)}),x-100);return()=>{clearInterval(e)}}),[]);const h=i((e=>{m.current.classList.remove(`${d}`),m.current.classList.add(`${c}`),setTimeout((()=>{r(e)}),240)}),[]);let f=("success"==t.type?"bg-green-8":"error"==t.type&&"bg-red-8")||"info"==t.type&&"bg-blue-8"||"warning"==t.type&&"bg-orange-8",b=s&&s||"success"==t.type&&"bg-greencss"||"error"==t.type&&"bg-red"||"info"==t.type&&"bg-blue"||"warning"==t.type&&"bg-orange";return e.createElement("div",{"data-testid":"toast-notification",className:`relative block w-35rem rounded-5px overflow-hidden ${u} animation-duration-300ms animation-forwards opacity-100per my-10px min-h-75px ${p}`,ref:m},e.createElement("div",{className:`flex min-h-75px h-100per items-center justify-center ${f}`},e.createElement("div",{className:"flex min-w-30px px-10px rounded-left-radius-5px "},e.createElement(z,{type:t.type})),e.createElement("div",{className:"flex-1 p-10px bg-white min-h-75px h-100per"},e.createElement("div",{className:"font-600 text-black text-15px"},t.title),e.createElement("div",{className:"font-400 text-gray text-12px"},t.content),e.createElement("div",{className:"absolute top-2per right-2per cursor-pointer",onClick:()=>h(t.id)},e.createElement(z,{type:"close"}))),e.createElement("div",{className:`toast_progress Toast-module_toast_progress__peRjM absolute bottom-0per left-0per h-5px w-100per ${b}`,style:{animationDuration:`${x}ms`,borderBottomLeftRadius:"5px"}})))},L=({toastList:t,setToastList:a,progressColor:o,duration:n=5e3,position:r="top-right",shadow:l="shadow-small-gray-5"})=>{const s=i((e=>{a((t=>[...t.filter((t=>t.id!==e))]))}),[t]);let d=("top-left"===r?"top-0per left-0per":"top-right"===r&&"top-0per right-0per")||"bottom-left"===r&&"bottom-0per left-0per"||"bottom-right"===r&&"bottom-0per right-0per",c=r.includes("right")?"fade-in-right":"fade-in-left",p=r.includes("right")?"fade-out-right":"fade-out-left";return e.createElement("div",{className:`fixed z-99 m-10px ${d}`,style:{zIndex:99999}},t.length>0?e.createElement(e.Fragment,null,t.map((t=>e.createElement(C,{key:t.id,item:t,deleteToast:s,duration:n,setAnimation:c,removeAnimation:p,progressColor:o,shadow:l})))):null)},_=(e,t,a,o)=>{const n={id:(new Date).getTime(),type:e,title:t,content:a};o((e=>[...e,n]))},I=r((({setWord:t,numberOfCharacters:n=5,backgroundColor:i="#101010",fontColor:r="#f0eef5",charset:s="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!=?+*%&"},d)=>{const c=a(null),p=s;let m=parseInt(n);const x=()=>{let e="",a="";for(let t=0,a=p.length;t<m;++t)e+=p.charAt(Math.floor(Math.random()*a));a=e,t&&t(a);const o=c.current,n=o.getContext("2d");let l=a.split("\n");n.canvas.width=20*parseInt(m),n.canvas.height=25*l.length*2,n.fillStyle=i,n.fillRect(0,0,o.width,o.height),n.textBaseline="middle",n.font='italic 25px "Open Sans", sans-serif',n.fillStyle=r,n.textAlign="center",n.fillText(e,o.width/2,o.height/2)};return l(d,(()=>({initializeCaptcha:x}))),o((()=>{x()}),[]),e.createElement(e.Fragment,null,e.createElement("canvas",{ref:c,className:"cursor-pointer shadow-small-gray rounded-5px",onClick:x,title:"Click to regenerate"}))}));export{p as Accordion,I as Captcha,g as CookieBanner,f as Input,u as Modal,b as TextArea,L as Toast,_ as handleShowToast};
