import{_ as w}from"./BreadCrumb.ad457be3.js";import{h as P,_ as D}from"./moment.ac99684a.js";import{_ as I}from"./Tag.220d9264.js";import{_ as T}from"./EmptyData.5490c7dc.js";import{_ as $,a as B}from"./LatestPotensi.5253726b.js";import{_ as L,i as d,j as x,u as S,c as r,b as o,w as z,a as s,k as a,F as E,m as F,f as N,r as V,o as i,q as h,t as m,p as j,g as q}from"./entry.7bd8cb73.js";import"./asyncData.099608ec.js";const A=n=>(j("data-v-283a5330"),n=n(),q(),n),H={class:"flex-1 animate-fade block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6"},G={class:"grid grid-cols-1 md:grid-cols-6 md:gap-x-12 h-full"},J={class:"block col-span-1 md:col-span-4"},K=A(()=>s("div",{class:"text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl md:text-2xl font-semibold py-3"},[s("span",null,"Potensi Desa")],-1)),M=["onClick"],O={class:"h-[120px] sm:h-[160px] w-[140px] sm:w-[220px] md:w-[260px] flex-none"},Q={class:"block pl-4"},R={class:"tetx-base md:text-xl font-semibold"},U={class:"line-clamp-2"},W={class:"block md:flex"},X={class:"text-xs md:text-base flex items-center font-medium mt-2"},Y={class:"ml-1"},Z={class:"text-xs md:text-base flex items-center font-medium mt-2 sm:ml-2"},ss={class:"ml-1"},ts={class:"mt-2 text-sm md:text-base"},es={class:"line-clamp-2 sm:line-clamp-3"},os={class:"col-span-2"},as={__name:"index",async setup(n){let t,c;const l=d([]);d([]);const f=d([]);return l.value=([t,c]=x(()=>$fetch("/api/potensi-desa")),t=await t,c(),t).data,f.value=([t,c]=x(()=>$fetch("/api/potensi-category")),t=await t,c(),t),S({title:"Potensi Desa"}),(_,p)=>{const u=w,v=V("v-img"),g=D,b=I,y=T,k=$,C=B;return i(),r("div",H,[o(u,null,{root:z(()=>[s("span",{onClick:p[0]||(p[0]=e=>("navigateTo"in _?_.navigateTo:a(h))("/potensi-desa"))},"Potensi Desa")]),_:1}),s("div",G,[s("div",J,[K,a(l).length>0?(i(!0),r(E,{key:0},F(a(l),e=>(i(),r("div",{onClick:ns=>("navigateTo"in _?_.navigateTo:a(h))("/potensi-desa/"+e.slug),class:"cursor-pointer flex mb-[0.5rem] md:mb-2 h-[160px] md:h-[200px]"},[s("div",O,[o(v,{"lazy-src":e.thumbnail,height:"100%","aspect-ratio":"4/3",src:e.thumbnail},null,8,["lazy-src","src"])]),s("div",Q,[s("div",R,[s("span",U,m(e.title),1)]),s("div",W,[s("div",X,[o(g),s("span",Y,m(a(P)(e.created_at).format("LL")),1)]),s("div",Z,[o(b),s("span",ss,m(e.category_name),1)])]),s("div",ts,[s("span",es,m(e.description),1)])])],8,M))),256)):(i(),N(y,{key:1}))]),s("div",os,[o(k),o(C)])])])}}},ps=L(as,[["__scopeId","data-v-283a5330"]]);export{ps as default};