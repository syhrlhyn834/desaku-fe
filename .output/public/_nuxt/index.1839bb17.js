import{_ as $}from"./BreadCrumb.c8c3d466.js";import{h as w,_ as N}from"./moment.8a6b8cce.js";import{_ as L}from"./Tag.9e664898.js";import{_ as z,a as S}from"./LatestNews.92b07bc2.js";import{_ as P,u as D,i as r,j as E,c as _,b as s,w as F,a as t,e as H,k as a,t as n,l as T,F as j,m as A,n as M,r as h,o as m,p as R,g as U}from"./entry.8fe0adf3.js";const q=l=>(R("data-v-009b2bf3"),l=l(),U(),l),G={class:"animate-fade flex-1 block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6"},J=q(()=>t("span",null,"Berita",-1)),K={class:"grid grid-cols-1 md:grid-cols-6 md:gap-x-12"},O={class:"block col-span-1 md:col-span-4"},Q={class:"text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl sm:text-2xl font-semibold py-3"},W={key:0},X=["onClick"],Y={class:"h-[120px] sm:h-[160px] w-[140px] sm:w-[220px] md:w-[260px] flex-none"},Z={class:"block pl-4"},tt={class:"tetx-base md:text-xl font-semibold"},et={class:"line-clamp-2"},st={class:"text-xs md:text-base block md:flex items-center font-medium mt-2"},ot={class:"flex"},at={class:"ml-1 mr-2"},nt={class:"hidden sm:flex"},lt={class:"ml-1"},ct={class:"mt-2 text-sm md:text-base"},it={class:"line-clamp-2 sm:line-clamp-3"},_t={class:"col-span-2"},mt={__name:"index",async setup(l){let c,p;D({title:"Berita"});const d=r(null),o=r(1),u=r(0),{data:f,total:b}=([c,p]=E(()=>$fetch("/api/berita?limit=5&page=1")),c=await c,p(),c);d.value=f,u.value=Math.ceil(b/5);async function v(){const{data:i}=await $fetch(`/api/berita?limit=5&page=${o.value}`);d.value=i,document.getElementById("list_berita").scrollIntoView({behavior:"smooth"})}return(i,x)=>{const g=$,y=h("v-img"),C=N,k=L,B=h("v-pagination"),I=z,V=S;return m(),_("div",G,[s(g,null,{root:F(()=>[J]),_:1}),t("div",K,[t("div",O,[t("div",Q,[t("span",null,[H("Berita "),a(o)!=1?(m(),_("span",W,": Halaman "+n(a(o)),1)):T("",!0)])]),(m(!0),_(j,null,A(a(d),e=>(m(),_("div",{onClick:dt=>i.$router.push("/berita/"+e.slug),class:"cursor-pointer animate-fade flex mb-10"},[t("div",Y,[s(y,{"lazy-src":e.thumbnail,height:"100%","aspect-ratio":"4/3",src:e.thumbnail},null,8,["lazy-src","src"])]),t("div",Z,[t("div",tt,[t("span",et,n(e.title),1)]),t("div",st,[t("div",ot,[s(C),t("span",at,n(a(w)(e.created_at).format("LL")),1)]),t("div",nt,[s(k),t("span",lt,n(e.name),1)])]),t("div",ct,[t("span",it,n(e.description),1)])])],8,X))),256)),s(B,{size:i.$vuetify.display.mobile?"small":"default",class:"mt-4 mb-14",modelValue:a(o),"onUpdate:modelValue":[x[0]||(x[0]=e=>M(o)?o.value=e:null),v],"total-visible":5,length:a(u)},null,8,["size","modelValue","length"])]),t("div",_t,[s(I),s(V)])])])}}},ft=P(mt,[["__scopeId","data-v-009b2bf3"]]);export{ft as default};
