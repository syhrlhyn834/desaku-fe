import{H as g,T as v}from"./components.aa444c8b.js";import{_ as b}from"./BreadCrumb.01f281d5.js";import{_ as T}from"./Date.60762cce.js";import{_ as y}from"./Author.91752d84.js";import{_ as k}from"./LatestAnnouncement.f7c47fe3.js";import{h as C,E as H,j as L,c as w,b as n,w as l,a as t,l as s,t as c,F as B,o as $,d as A,s as D}from"./entry.dc9af3c6.js";import{h as N}from"./moment.a9aaa855.js";const V={class:"animate-fade block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6"},E={class:"pb-12 grid grid-cols-1 md:grid-cols-6 md:gap-x-12 gap-y-8"},F={class:"block col-span-1 md:col-span-4"},I={class:"text-[#0088CC] mb-2 text-xl md:text-2xl font-semibold py-3"},M={class:"text-sm md:text-base block sm:flex items-center font-normal mt-2 mb-4"},P={class:"flex items-center"},R={class:"ml-1"},j={class:"flex items-center sm:ml-2"},q={class:"ml-1"},S=["innerHTML"],z={class:"col-span-2"},Z={__name:"[id]",async setup(G){let o,i;const r=C().currentRoute.value,e=H({title:null,content:null,created_at:null,created_by:null}),a=([o,i]=L(()=>$fetch("/api/pengumuman/slug/"+r.params.id)),o=await o,i(),o);return e.title=a.title,e.content=a.content,e.created_at=a.created_at,e.created_by=a.name,(_,m)=>{const d=v,p=g,u=b,f=T,x=y,h=k;return $(),w(B,null,[n(p,null,{default:l(()=>[n(d,null,{default:l(()=>[A(c(s(e).title),1)]),_:1})]),_:1}),t("div",V,[n(u,{child:s(e).title},{root:l(()=>[t("span",{onClick:m[0]||(m[0]=J=>("navigateTo"in _?_.navigateTo:s(D))("/pengumuman"))},"Pengumuman")]),_:1},8,["child"]),t("div",E,[t("div",F,[t("div",I,[t("span",null,c(s(e).title),1)]),t("div",M,[t("div",P,[n(f,{class:"flex-none"}),t("span",R,c(s(N)(s(e).created_at).format("LL")),1)]),t("div",j,[n(x,{class:"flex-none"}),t("span",q,"Ditulis oleh "+c(s(e).created_by),1)])]),t("div",{class:"quill-content",innerHTML:s(e).content??""},null,8,S)]),t("div",z,[n(h)])])])],64)}}};export{Z as default};
