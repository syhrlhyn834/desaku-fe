import{_ as I}from"./BreadCrumb.01f281d5.js";import{_ as B}from"./Date.60762cce.js";import{_ as L}from"./Tag.6add8f9e.js";import{_ as S}from"./EmptyData.e6da9306.js";import{_ as V,a as z}from"./LatestPotensi.15a52ff0.js";import{_ as A,i as r,j as E,u as F,c as p,b as o,w as N,a as t,l as a,F as j,n as q,e as H,q as M,r as u,o as _,s as h,t as d,p as R,f as U}from"./entry.dc9af3c6.js";import{h as G}from"./moment.a9aaa855.js";import{w as J}from"./scroll.c1e36832.js";const K=n=>(R("data-v-95d55f2d"),n=n(),U(),n),O={class:"flex-1 animate-fade block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6"},Q={class:"grid grid-cols-1 md:grid-cols-6 md:gap-x-12 h-full"},W={class:"block col-span-1 md:col-span-4"},X=K(()=>t("div",{class:"text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl md:text-2xl font-semibold py-3"},[t("span",null,"Potensi Desa")],-1)),Y=["onClick"],Z={class:"h-[120px] sm:h-[160px] w-[140px] sm:w-[220px] md:w-[260px] flex-none"},tt={class:"block pl-4"},et={class:"tetx-base md:text-xl font-semibold"},st={class:"line-clamp-2"},ot={class:"block md:flex"},at={class:"text-xs md:text-base flex items-center font-medium mt-2"},nt={class:"ml-1"},it={class:"text-xs md:text-base flex items-center font-medium mt-2 sm:ml-2"},lt={class:"ml-1"},ct={class:"mt-2 text-sm md:text-base"},mt={class:"line-clamp-2 sm:line-clamp-3"},_t={class:"col-span-2"},dt={__name:"index",async setup(n){let i,x;const l=r([]),c=r(1),f=r(1),{data:v,total:g}=([i,x]=E(()=>$fetch("/api/potensi-desa?limit=5")),i=await i,x(),i);l.value=v,f.value=Math.ceil(g/5);async function b(){const{data:s}=await $fetch(`/api/potensi-desa?limit=5&page=${c.value}`);if(l.value=s,navigator.userAgent.includes("Chrome")){window.scrollTo({behavior:"smooth",top:0,left:0});return}J(window,{behavior:"smooth",top:0,left:0})}return F({title:"Potensi Desa"}),(s,m)=>{const w=I,y=u("v-img"),k=B,C=L,P=S,T=u("v-pagination"),$=V,D=z;return _(),p("div",O,[o(w,null,{root:N(()=>[t("span",{onClick:m[0]||(m[0]=e=>("navigateTo"in s?s.navigateTo:a(h))("/potensi-desa"))},"Potensi Desa")]),_:1}),t("div",Q,[t("div",W,[X,a(l).length>0?(_(!0),p(j,{key:0},q(a(l),e=>(_(),p("div",{onClick:rt=>("navigateTo"in s?s.navigateTo:a(h))("/potensi-desa/"+e.slug),class:"cursor-pointer flex mb-[0.5rem] md:mb-2 h-[160px] md:h-[200px]"},[t("div",Z,[o(y,{"lazy-src":e.thumbnail,height:"100%","aspect-ratio":"4/3",src:e.thumbnail},null,8,["lazy-src","src"])]),t("div",tt,[t("div",et,[t("span",st,d(e.title),1)]),t("div",ot,[t("div",at,[o(k,{class:"flex-none"}),t("span",nt,d(a(G)(e.created_at).format("LL")),1)]),t("div",it,[o(C,{class:"flex-none"}),t("span",lt,d(e.category_name),1)])]),t("div",ct,[t("span",mt,d(e.description),1)])])],8,Y))),256)):(_(),H(P,{key:1})),o(T,{size:s.$vuetify.display.mobile?"small":"default",class:"mt-4 mb-14",modelValue:a(c),"onUpdate:modelValue":[m[1]||(m[1]=e=>M(c)?c.value=e:null),b],"total-visible":5,length:a(f)},null,8,["size","modelValue","length"])]),t("div",_t,[o($),o(D)])])])}}},wt=A(dt,[["__scopeId","data-v-95d55f2d"]]);export{wt as default};
