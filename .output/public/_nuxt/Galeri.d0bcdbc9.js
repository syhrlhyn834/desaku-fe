import{_ as P,i as l,E as S,O as B,V as D,j as b,u as E,c as o,b as u,w as L,a as e,F as w,n as x,l as d,q as F,r as y,o as r,t as k,p as M,f as T}from"./entry.f8680ccd.js";import{_ as A}from"./BreadCrumb.69337a12.js";import{P as N}from"./photoswipe.2681c699.js";const g=i=>(M("data-v-a7cf918d"),i=i(),T(),i),O={class:"animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6"},R=g(()=>e("span",null,"Galeri Desa",-1)),j={class:"pb-[1rem]"},q=g(()=>e("h1",{class:"mb-2 font-semibold text-[#0088CC] text-2xl"},"Galeri Video",-1)),H={class:"grid grid-cols-1 md:grid-cols-3 md:gap-[2rem]"},U=["src"],Y={class:"rounded-b-lg py-3 px-2 font-medium text-base md:text-lg backdrop-blur-sm bg-white/30 shadow-sm border border-slate-100"},J={class:"line-clamp-1"},K={class:"pb-[6rem]"},Q=g(()=>e("h1",{class:"mb-8 font-semibold text-[#0088CC] text-2xl"},"Galeri Foto",-1)),W={id:"gallery",class:"grid grid-cols-1 md:grid-cols-3 gap-[2rem] md:gap-y-[2rem]"},X=["href"],Z={class:"rounded-b-lg py-3 px-2 font-medium text-base md:text-lg backdrop-blur-sm bg-white/30 shadow-sm border border-slate-100"},ee={class:"line-clamp-1"},te={__name:"Galeri",async setup(i){let a,n;const c=l(null),h=l([]),p=l([]),s=l(1),f=l(0);S(async()=>{await B(()=>{c.value||(c.value=new N({gallery:"#gallery",children:"a",pswpModule:()=>D(()=>import("./photoswipe.esm.3ee328cd.js"),[],import.meta.url)}),c.value.init())})}),h.value=([a,n]=b(()=>$fetch("/api/image-gallery")),a=await a,n(),a);const{data:C,total:V}=([a,n]=b(()=>$fetch(`/api/video-gallery?limit=3&page=${s.value}`)),a=await a,n(),a);p.value=C,f.value=Math.ceil(V/3);async function G(){const{data:_}=await $fetch(`/api/video-gallery?limit=3&page=${s.value}`);p.value=_}return E({title:"Galeri Desa"}),(_,v)=>{const $=A,z=y("v-pagination"),I=y("v-img");return r(),o("div",O,[u($,null,{root:L(()=>[R]),_:1}),e("div",j,[q,e("div",H,[(r(!0),o(w,null,x(d(p),(t,m)=>(r(),o("a",{class:"relative w-full rounded-lg animate-fade",key:m,target:"_blank",rel:"noreferrer"},[e("iframe",{class:"mt-6 rounded-t-lg shadow-sm",width:"100%",height:"245",loading:"lazy",src:t.url,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,8,U),e("div",Y,[e("span",J,k(t.description),1)])]))),128))]),u(z,{size:_.$vuetify.display.mobile?"small":"default",class:"mt-4 mb-6 md:mb-10",modelValue:d(s),"onUpdate:modelValue":[v[0]||(v[0]=t=>F(s)?s.value=t:null),G],"total-visible":5,length:d(f)},null,8,["size","modelValue","length"])]),e("div",K,[Q,e("div",W,[(r(!0),o(w,null,x(d(h),(t,m)=>(r(),o("a",{class:"w-full cursor-pointer rounded-lg",key:m,href:t.url,"data-pswp-width":"600","data-pswp-height":"400",target:"_blank",rel:"noreferrer"},[u(I,{"lazy-src":t.url,class:"w-full rounded-t-lg",height:"300",src:t.url,alt:""},null,8,["lazy-src","src"]),e("div",Z,[e("span",ee,k(t.description),1)])],8,X))),128))])])])}}},oe=P(te,[["__scopeId","data-v-a7cf918d"]]);export{oe as default};
