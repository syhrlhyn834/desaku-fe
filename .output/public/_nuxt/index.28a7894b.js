import{_ as $}from"./BreadCrumb.01f281d5.js";import{_ as I}from"./Date.60762cce.js";import{_ as S,a as z}from"./LatestActivities.f7c15214.js";import{_ as B,u as D,i as p,j as L,c as _,b as o,w as M,a as t,d as N,l as a,t as n,m as Y,F as A,n as K,q as T,r as x,o as d,p as F,f as H}from"./entry.dc9af3c6.js";import{h as P}from"./moment.a9aaa855.js";const j=l=>(F("data-v-c07312dd"),l=l(),H(),l),q={class:"animate-fade flex-1 block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6"},E=j(()=>t("span",null,"Kegiatan",-1)),R={class:"grid grid-cols-1 md:grid-cols-6 md:gap-x-12"},U={class:"block col-span-1 md:col-span-4"},G={class:"text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl sm:text-2xl font-semibold py-3"},J={key:0},O=["onClick"],Q={class:"h-[120px] sm:h-[160px] w-[140px] sm:w-[220px] md:w-[260px] flex-none"},W={class:"block pl-4"},X={class:"tetx-base md:text-xl font-semibold"},Z={class:"line-clamp-2"},tt={class:"text-sm md:text-base block sm:flex items-center font-medium mt-2"},et={class:"flex items-center"},st={class:"ml-1"},ot={class:"flex items-center sm:ml-2"},at={class:"ml-1"},nt={class:"mt-2 text-sm md:text-base"},lt={class:"line-clamp-2 sm:line-clamp-3"},ct={class:"col-span-2"},it={__name:"index",async setup(l){let c,r;D({title:"Kegiatan"});const m=p(null),s=p(1),u=p(0),{data:f,total:v}=([c,r]=L(()=>$fetch("/api/kegiatan?limit=5&page=1")),c=await c,r(),c);m.value=f,u.value=Math.ceil(v/5);async function g(){const{data:i}=await $fetch(`/api/kegiatan?limit=5&page=${s.value}`);if(m.value=i,navigator.userAgent.includes("Chrome")){window.scrollTo({behavior:"smooth",top:0,left:0});return}windowScrollTo(window,{behavior:"smooth",top:0,left:0})}return(i,h)=>{const b=$,k=x("v-img"),y=I,C=S,w=x("v-pagination"),V=z;return d(),_("div",q,[o(b,null,{root:M(()=>[E]),_:1}),t("div",R,[t("div",U,[t("div",G,[t("span",null,[N("Kegiatan "),a(s)!=1?(d(),_("span",J,": Halaman "+n(a(s)),1)):Y("",!0)])]),(d(!0),_(A,null,K(a(m),e=>(d(),_("div",{onClick:_t=>i.$router.push("/kegiatan/"+e.slug),class:"cursor-pointer animate-fade flex mb-10"},[t("div",Q,[o(k,{"lazy-src":e.thumbnail,height:"100%","aspect-ratio":"4/3",src:e.thumbnail},null,8,["lazy-src","src"])]),t("div",W,[t("div",X,[t("span",Z,n(e.title),1)]),t("div",tt,[t("div",et,[o(y,{class:"flex-none"}),t("span",st,n(a(P)(e.date).format("DD MMM YYYY")),1)]),t("div",ot,[o(C,{class:"flex-none"}),t("span",at,n(e.location),1)])]),t("div",nt,[t("span",lt,n(e.description),1)])])],8,O))),256)),o(w,{size:i.$vuetify.display.mobile?"small":"default",class:"mt-4 mb-14",modelValue:a(s),"onUpdate:modelValue":[h[0]||(h[0]=e=>T(s)?s.value=e:null),g],"total-visible":5,length:a(u)},null,8,["size","modelValue","length"])]),t("div",ct,[o(V)])])])}}},ht=B(it,[["__scopeId","data-v-c07312dd"]]);export{ht as default};
