import{Y as S,$ as I,b as c,l as _,i as r,F as g,f as w,_ as L,o as u}from"./entry.2ba41e71.js";import{_ as k,a as C}from"./Footer.8697d72d.js";/*!
  * PhotoSwipe Lightbox 5.4.3 - https://photoswipe.com
  * (c) 2023 Dmytro Semenov
  */function d(a,t,i){const e=document.createElement(t);return a&&(e.className=a),i&&i.appendChild(e),e}function x(a,t,i){let e=`translate3d(${a}px,${t||0}px,0)`;return i!==void 0&&(e+=` scale3d(${i},${i},1)`),e}function y(a,t,i){a.style.width=typeof t=="number"?`${t}px`:t,a.style.height=typeof i=="number"?`${i}px`:i}const h={IDLE:"idle",LOADING:"loading",LOADED:"loaded",ERROR:"error"};function D(a){return"button"in a&&a.button===1||a.ctrlKey||a.metaKey||a.altKey||a.shiftKey}function p(a,t,i=document){let e=[];if(a instanceof Element)e=[a];else if(a instanceof NodeList||Array.isArray(a))e=Array.from(a);else{const s=typeof a=="string"?a:t;s&&(e=Array.from(i.querySelectorAll(s)))}return e}function P(a){return typeof a=="function"&&a.prototype&&a.prototype.goTo}function v(){return!!(navigator.vendor&&navigator.vendor.match(/apple/i))}class A{constructor(t,i){this.type=t,this.defaultPrevented=!1,i&&Object.assign(this,i)}preventDefault(){this.defaultPrevented=!0}}class R{constructor(){this._listeners={},this._filters={},this.pswp=void 0,this.options=void 0}addFilter(t,i,e=100){var s,n,l;this._filters[t]||(this._filters[t]=[]),(s=this._filters[t])===null||s===void 0||s.push({fn:i,priority:e}),(n=this._filters[t])===null||n===void 0||n.sort((o,f)=>o.priority-f.priority),(l=this.pswp)===null||l===void 0||l.addFilter(t,i,e)}removeFilter(t,i){this._filters[t]&&(this._filters[t]=this._filters[t].filter(e=>e.fn!==i)),this.pswp&&this.pswp.removeFilter(t,i)}applyFilters(t,...i){var e;return(e=this._filters[t])===null||e===void 0||e.forEach(s=>{i[0]=s.fn.apply(this,i)}),i[0]}on(t,i){var e,s;this._listeners[t]||(this._listeners[t]=[]),(e=this._listeners[t])===null||e===void 0||e.push(i),(s=this.pswp)===null||s===void 0||s.on(t,i)}off(t,i){var e;this._listeners[t]&&(this._listeners[t]=this._listeners[t].filter(s=>i!==s)),(e=this.pswp)===null||e===void 0||e.off(t,i)}dispatch(t,i){var e;if(this.pswp)return this.pswp.dispatch(t,i);const s=new A(t,i);return(e=this._listeners[t])===null||e===void 0||e.forEach(n=>{n.call(this,s)}),s}}class z{constructor(t,i){if(this.element=d("pswp__img pswp__img--placeholder",t?"img":"div",i),t){const e=this.element;e.decoding="async",e.alt="",e.src=t,e.setAttribute("role","presentation")}this.element.setAttribute("aria-hidden","true")}setDisplayedSize(t,i){this.element&&(this.element.tagName==="IMG"?(y(this.element,250,"auto"),this.element.style.transformOrigin="0 0",this.element.style.transform=x(0,0,t/250)):y(this.element,t,i))}destroy(){var t;(t=this.element)!==null&&t!==void 0&&t.parentNode&&this.element.remove(),this.element=null}}class O{constructor(t,i,e){this.instance=i,this.data=t,this.index=e,this.element=void 0,this.placeholder=void 0,this.slide=void 0,this.displayedImageWidth=0,this.displayedImageHeight=0,this.width=Number(this.data.w)||Number(this.data.width)||0,this.height=Number(this.data.h)||Number(this.data.height)||0,this.isAttached=!1,this.hasSlide=!1,this.isDecoding=!1,this.state=h.IDLE,this.data.type?this.type=this.data.type:this.data.src?this.type="image":this.type="html",this.instance.dispatch("contentInit",{content:this})}removePlaceholder(){this.placeholder&&!this.keepPlaceholder()&&setTimeout(()=>{this.placeholder&&(this.placeholder.destroy(),this.placeholder=void 0)},1e3)}load(t,i){if(this.slide&&this.usePlaceholder())if(this.placeholder){const e=this.placeholder.element;e&&!e.parentElement&&this.slide.container.prepend(e)}else{const e=this.instance.applyFilters("placeholderSrc",this.data.msrc&&this.slide.isFirstSlide?this.data.msrc:!1,this);this.placeholder=new z(e,this.slide.container)}this.element&&!i||this.instance.dispatch("contentLoad",{content:this,isLazy:t}).defaultPrevented||(this.isImageContent()?(this.element=d("pswp__img","img"),this.displayedImageWidth&&this.loadImage(t)):(this.element=d("pswp__content","div"),this.element.innerHTML=this.data.html||""),i&&this.slide&&this.slide.updateContentSize(!0))}loadImage(t){var i,e;if(!this.isImageContent()||!this.element||this.instance.dispatch("contentLoadImage",{content:this,isLazy:t}).defaultPrevented)return;const s=this.element;this.updateSrcsetSizes(),this.data.srcset&&(s.srcset=this.data.srcset),s.src=(i=this.data.src)!==null&&i!==void 0?i:"",s.alt=(e=this.data.alt)!==null&&e!==void 0?e:"",this.state=h.LOADING,s.complete?this.onLoaded():(s.onload=()=>{this.onLoaded()},s.onerror=()=>{this.onError()})}setSlide(t){this.slide=t,this.hasSlide=!0,this.instance=t.pswp}onLoaded(){this.state=h.LOADED,this.slide&&this.element&&(this.instance.dispatch("loadComplete",{slide:this.slide,content:this}),this.slide.isActive&&this.slide.heavyAppended&&!this.element.parentNode&&(this.append(),this.slide.updateContentSize(!0)),(this.state===h.LOADED||this.state===h.ERROR)&&this.removePlaceholder())}onError(){this.state=h.ERROR,this.slide&&(this.displayError(),this.instance.dispatch("loadComplete",{slide:this.slide,isError:!0,content:this}),this.instance.dispatch("loadError",{slide:this.slide,content:this}))}isLoading(){return this.instance.applyFilters("isContentLoading",this.state===h.LOADING,this)}isError(){return this.state===h.ERROR}isImageContent(){return this.type==="image"}setDisplayedSize(t,i){if(this.element&&(this.placeholder&&this.placeholder.setDisplayedSize(t,i),!this.instance.dispatch("contentResize",{content:this,width:t,height:i}).defaultPrevented&&(y(this.element,t,i),this.isImageContent()&&!this.isError()))){const e=!this.displayedImageWidth&&t;this.displayedImageWidth=t,this.displayedImageHeight=i,e?this.loadImage(!1):this.updateSrcsetSizes(),this.slide&&this.instance.dispatch("imageSizeChange",{slide:this.slide,width:t,height:i,content:this})}}isZoomable(){return this.instance.applyFilters("isContentZoomable",this.isImageContent()&&this.state!==h.ERROR,this)}updateSrcsetSizes(){if(!this.isImageContent()||!this.element||!this.data.srcset)return;const t=this.element,i=this.instance.applyFilters("srcsetSizesWidth",this.displayedImageWidth,this);(!t.dataset.largestUsedSize||i>parseInt(t.dataset.largestUsedSize,10))&&(t.sizes=i+"px",t.dataset.largestUsedSize=String(i))}usePlaceholder(){return this.instance.applyFilters("useContentPlaceholder",this.isImageContent(),this)}lazyLoad(){this.instance.dispatch("contentLazyLoad",{content:this}).defaultPrevented||this.load(!0)}keepPlaceholder(){return this.instance.applyFilters("isKeepingPlaceholder",this.isLoading(),this)}destroy(){this.hasSlide=!1,this.slide=void 0,!this.instance.dispatch("contentDestroy",{content:this}).defaultPrevented&&(this.remove(),this.placeholder&&(this.placeholder.destroy(),this.placeholder=void 0),this.isImageContent()&&this.element&&(this.element.onload=null,this.element.onerror=null,this.element=void 0))}displayError(){if(this.slide){var t,i;let e=d("pswp__error-msg","div");e.innerText=(t=(i=this.instance.options)===null||i===void 0?void 0:i.errorMsg)!==null&&t!==void 0?t:"",e=this.instance.applyFilters("contentErrorElement",e,this),this.element=d("pswp__content pswp__error-msg-container","div"),this.element.appendChild(e),this.slide.container.innerText="",this.slide.container.appendChild(this.element),this.slide.updateContentSize(!0),this.removePlaceholder()}}append(){if(this.isAttached||!this.element)return;if(this.isAttached=!0,this.state===h.ERROR){this.displayError();return}if(this.instance.dispatch("contentAppend",{content:this}).defaultPrevented)return;const t="decode"in this.element;this.isImageContent()?t&&this.slide&&(!this.slide.isActive||v())?(this.isDecoding=!0,this.element.decode().catch(()=>{}).finally(()=>{this.isDecoding=!1,this.appendImage()})):this.appendImage():this.slide&&!this.element.parentNode&&this.slide.container.appendChild(this.element)}activate(){this.instance.dispatch("contentActivate",{content:this}).defaultPrevented||!this.slide||(this.isImageContent()&&this.isDecoding&&!v()?this.appendImage():this.isError()&&this.load(!1,!0),this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","false"))}deactivate(){this.instance.dispatch("contentDeactivate",{content:this}),this.slide&&this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","true")}remove(){this.isAttached=!1,!this.instance.dispatch("contentRemove",{content:this}).defaultPrevented&&(this.element&&this.element.parentNode&&this.element.remove(),this.placeholder&&this.placeholder.element&&this.placeholder.element.remove())}appendImage(){this.isAttached&&(this.instance.dispatch("contentAppendImage",{content:this}).defaultPrevented||(this.slide&&this.element&&!this.element.parentNode&&this.slide.container.appendChild(this.element),(this.state===h.LOADED||this.state===h.ERROR)&&this.removePlaceholder()))}}function F(a,t){if(a.getViewportSizeFn){const i=a.getViewportSizeFn(a,t);if(i)return i}return{x:document.documentElement.clientWidth,y:window.innerHeight}}function m(a,t,i,e,s){let n=0;if(t.paddingFn)n=t.paddingFn(i,e,s)[a];else if(t.padding)n=t.padding[a];else{const l="padding"+a[0].toUpperCase()+a.slice(1);t[l]&&(n=t[l])}return Number(n)||0}function M(a,t,i,e){return{x:t.x-m("left",a,t,i,e)-m("right",a,t,i,e),y:t.y-m("top",a,t,i,e)-m("bottom",a,t,i,e)}}const b=4e3;class ${constructor(t,i,e,s){this.pswp=s,this.options=t,this.itemData=i,this.index=e,this.panAreaSize=null,this.elementSize=null,this.fit=1,this.fill=1,this.vFill=1,this.initial=1,this.secondary=1,this.max=1,this.min=1}update(t,i,e){const s={x:t,y:i};this.elementSize=s,this.panAreaSize=e;const n=e.x/s.x,l=e.y/s.y;this.fit=Math.min(1,n<l?n:l),this.fill=Math.min(1,n>l?n:l),this.vFill=Math.min(1,l),this.initial=this._getInitial(),this.secondary=this._getSecondary(),this.max=Math.max(this.initial,this.secondary,this._getMax()),this.min=Math.min(this.fit,this.initial,this.secondary),this.pswp&&this.pswp.dispatch("zoomLevelsUpdate",{zoomLevels:this,slideData:this.itemData})}_parseZoomLevelOption(t){const i=t+"ZoomLevel",e=this.options[i];if(e)return typeof e=="function"?e(this):e==="fill"?this.fill:e==="fit"?this.fit:Number(e)}_getSecondary(){let t=this._parseZoomLevelOption("secondary");return t||(t=Math.min(1,this.fit*3),this.elementSize&&t*this.elementSize.x>b&&(t=b/this.elementSize.x),t)}_getInitial(){return this._parseZoomLevelOption("initial")||this.fit}_getMax(){return this._parseZoomLevelOption("max")||Math.max(1,this.fit*4)}}function E(a,t,i){const e=t.createContentFromData(a,i);let s;const{options:n}=t;if(n){s=new $(n,a,-1);let l;t.pswp?l=t.pswp.viewportSize:l=F(n,t);const o=M(n,l,a,i);s.update(e.width,e.height,o)}return e.lazyLoad(),s&&e.setDisplayedSize(Math.ceil(e.width*s.initial),Math.ceil(e.height*s.initial)),e}function T(a,t){const i=t.getItemData(a);if(!t.dispatch("lazyLoadSlide",{index:a,itemData:i}).defaultPrevented)return E(i,t,a)}class N extends R{getNumItems(){var t;let i=0;const e=(t=this.options)===null||t===void 0?void 0:t.dataSource;e&&"length"in e?i=e.length:e&&"gallery"in e&&(e.items||(e.items=this._getGalleryDOMElements(e.gallery)),e.items&&(i=e.items.length));const s=this.dispatch("numItems",{dataSource:e,numItems:i});return this.applyFilters("numItems",s.numItems,e)}createContentFromData(t,i){return new O(t,this,i)}getItemData(t){var i;const e=(i=this.options)===null||i===void 0?void 0:i.dataSource;let s={};Array.isArray(e)?s=e[t]:e&&"gallery"in e&&(e.items||(e.items=this._getGalleryDOMElements(e.gallery)),s=e.items[t]);let n=s;n instanceof Element&&(n=this._domElementToItemData(n));const l=this.dispatch("itemData",{itemData:n||{},index:t});return this.applyFilters("itemData",l.itemData,t)}_getGalleryDOMElements(t){var i,e;return(i=this.options)!==null&&i!==void 0&&i.children||(e=this.options)!==null&&e!==void 0&&e.childSelector?p(this.options.children,this.options.childSelector,t)||[]:[t]}_domElementToItemData(t){const i={element:t},e=t.tagName==="A"?t:t.querySelector("a");if(e){i.src=e.dataset.pswpSrc||e.href,e.dataset.pswpSrcset&&(i.srcset=e.dataset.pswpSrcset),i.width=e.dataset.pswpWidth?parseInt(e.dataset.pswpWidth,10):0,i.height=e.dataset.pswpHeight?parseInt(e.dataset.pswpHeight,10):0,i.w=i.width,i.h=i.height,e.dataset.pswpType&&(i.type=e.dataset.pswpType);const n=t.querySelector("img");if(n){var s;i.msrc=n.currentSrc||n.src,i.alt=(s=n.getAttribute("alt"))!==null&&s!==void 0?s:""}(e.dataset.pswpCropped||e.dataset.cropped)&&(i.thumbCropped=!0)}return this.applyFilters("domItemData",i,t,e)}lazyLoadData(t,i){return E(t,this,i)}}class U extends N{constructor(t){super(),this.options=t||{},this._uid=0,this.shouldOpen=!1,this._preloadedContent=void 0,this.onThumbnailsClick=this.onThumbnailsClick.bind(this)}init(){p(this.options.gallery,this.options.gallerySelector).forEach(t=>{t.addEventListener("click",this.onThumbnailsClick,!1)})}onThumbnailsClick(t){if(D(t)||window.pswp)return;let i={x:t.clientX,y:t.clientY};!i.x&&!i.y&&(i=null);let e=this.getClickedIndex(t);e=this.applyFilters("clickedIndex",e,t,this);const s={gallery:t.currentTarget};e>=0&&(t.preventDefault(),this.loadAndOpen(e,s,i))}getClickedIndex(t){if(this.options.getClickedIndexFn)return this.options.getClickedIndexFn.call(this,t);const i=t.target,s=p(this.options.children,this.options.childSelector,t.currentTarget).findIndex(n=>n===i||n.contains(i));return s!==-1?s:this.options.children||this.options.childSelector?-1:0}loadAndOpen(t,i,e){if(window.pswp||!this.options)return!1;if(!i&&this.options.gallery&&this.options.children){const s=p(this.options.gallery);s[0]&&(i={gallery:s[0]})}return this.options.index=t,this.options.initialPointerPos=e,this.shouldOpen=!0,this.preload(t,i),!0}preload(t,i){const{options:e}=this;i&&(e.dataSource=i);const s=[],n=typeof e.pswpModule;if(P(e.pswpModule))s.push(Promise.resolve(e.pswpModule));else{if(n==="string")throw new Error("pswpModule as string is no longer supported");if(n==="function")s.push(e.pswpModule());else throw new Error("pswpModule is not valid")}typeof e.openPromise=="function"&&s.push(e.openPromise()),e.preloadFirstSlide!==!1&&t>=0&&(this._preloadedContent=T(t,this));const l=++this._uid;Promise.all(s).then(o=>{if(this.shouldOpen){const f=o[0];this._openPhotoswipe(f,l)}})}_openPhotoswipe(t,i){if(i!==this._uid&&this.shouldOpen||(this.shouldOpen=!1,window.pswp))return;const e=typeof t=="object"?new t.default(this.options):new t(this.options);this.pswp=e,window.pswp=e,Object.keys(this._listeners).forEach(s=>{var n;(n=this._listeners[s])===null||n===void 0||n.forEach(l=>{e.on(s,l)})}),Object.keys(this._filters).forEach(s=>{var n;(n=this._filters[s])===null||n===void 0||n.forEach(l=>{e.addFilter(s,l.fn,l.priority)})}),this._preloadedContent&&(e.contentLoader.addToCache(this._preloadedContent),this._preloadedContent=void 0),e.on("destroy",()=>{this.pswp=void 0,delete window.pswp}),e.init()}destroy(){var t;(t=this.pswp)===null||t===void 0||t.destroy(),this.shouldOpen=!1,this._listeners={},p(this.options.gallery,this.options.gallerySelector).forEach(i=>{i.removeEventListener("click",this.onThumbnailsClick,!1)})}}const j={class:"px-[2rem] md:px-[14rem] pt-[2.5rem] min-h-[26rem]"},V=r("div",{class:"flex mb-6 items-center bg-[#f0f0f0] px-2 py-3 rounded-lg"},[r("div",{class:"mr-2"},[r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 1024 1024"},[r("path",{fill:"#0088CC",d:"M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5"})])]),r("div",null,[r("span",null,"/ Galeri")])],-1),W={class:"pb-8"},G=r("h1",{class:"mb-4 font-semibold text-[#0088CC] text-3xl"},"Galeri Video",-1),H={class:"grid grid-cols-1 md:grid-cols-4 mb-2 gap-8"},Z={class:"h-full"},B=r("iframe",{class:"w-full md:w-[260px]",height:"160",src:"https://www.youtube.com/embed/UEqLiwV2zw0?si=2SqWo6wMW14srfhM"},null,-1),K=r("div",{class:"mt-3 font-semibold text-lg"},[r("span",null,"Pembukaan Acara Halal Bihalal")],-1),q=[B,K],Y={class:"pb-8"},X=r("h1",{class:"mb-4 font-semibold text-[#0088CC] text-3xl"},"Galeri Foto",-1),J={id:"gallery"},Q={class:"grid grid-cols-1 md:grid-cols-3 gap-8"},tt=["href"],et=["src"],it=r("div",{class:"mt-3 font-semibold text-lg"},[r("span",null,"Pembukaan Acara Halal Bihalal")],-1),st={data:()=>({lightbox:null,images:[{largeURL:"https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pembangunan_tpt.jpg",thumbnailURL:"https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pembangunan_tpt.jpg",width:600,height:600},{largeURL:"https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pemberdayaan_masyarakat.jpg",thumbnailURL:"https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pemberdayaan_masyarakat.jpg",width:600,height:600},{largeURL:"https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pembangunan_tpt.jpg",thumbnailURL:"https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pembangunan_tpt.jpg",width:600,height:600},{largeURL:"https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pemberdayaan_masyarakat.jpg",thumbnailURL:"https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pemberdayaan_masyarakat.jpg",width:600,height:600},{largeURL:"https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pembangunan_tpt.jpg",thumbnailURL:"https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pembangunan_tpt.jpg",width:600,height:600},{largeURL:"https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pemberdayaan_masyarakat.jpg",thumbnailURL:"https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pemberdayaan_masyarakat.jpg",width:600,height:600}]}),mounted(){this.lightbox||(this.lightbox=new U({gallery:"#gallery",children:"a",pswpModule:()=>L(()=>import("./photoswipe.esm.060dc2da.js"),[],import.meta.url)}),this.lightbox.init())},unmounted(){this.lightbox&&(this.lightbox.destroy(),this.lightbox=null)}},lt=Object.assign(st,{__name:"Galeri",setup(a){const t=S(!1);return I(()=>{window.addEventListener("scroll",function(){window.scrollY>20?t.value=!0:t.value=!1})}),(i,e)=>{const s=k,n=C;return u(),c(g,null,[_(s),r("div",j,[V,r("div",W,[G,r("div",H,[(u(),c(g,null,w(8,l=>r("div",Z,q)),64))])]),r("div",Y,[X,r("div",J,[r("div",Q,[(u(!0),c(g,null,w(i.images,(l,o)=>(u(),c("a",{class:"w-fit",key:o,href:l.largeURL,"data-pswp-width":"500","data-pswp-height":"400",target:"_blank",rel:"noreferrer"},[r("img",{src:l.thumbnailURL,alt:""},null,8,et),it],8,tt))),128))])])])]),_(n)],64)}}});export{lt as default};
