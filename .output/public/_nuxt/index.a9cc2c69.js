import{c as r,_ as i}from"./RichEditor.client.3e4dd939.js";import d from"./button.esm.149a0e85.js";import{a1 as l,b as _,i as t,c as h,e as m,l as p,F as u,o}from"./entry.2ba41e71.js";import"./badge.esm.304bbc79.js";import"./basecomponent.esm.d752fcf6.js";import"./index.esm.620011f4.js";import"./baseicon.esm.26b87126.js";const f=r(i),C={data(){return{data:null,renderRichEditor:!1}},async mounted(){const e=await $fetch("http://localhost:30001/api/sejarah");this.data=e.sejarah,this.renderRichEditor=!0},methods:{async updateContent(){await $fetch("http://localhost:30001/api/sejarah",{method:"POST",body:{content:this.data}})},contentChange(e){this.data=e}}},x=t("div",{class:"text-2xl font-semibold mb-2"},"Sejarah Desa",-1),b={class:"grid"},g={class:"col-12"},k={class:"card"},y=t("h3",{class:"mb-3 text-xl font-medium"},"Konten",-1);function B(e,E,j,v,a,n){const s=f,c=d;return o(),_(u,null,[x,t("div",b,[t("div",g,[t("div",k,[y,a.renderRichEditor?(o(),h(s,{key:0,data:a.data,onContentChange:n.contentChange},null,8,["data","onContentChange"])):m("",!0),p(c,{onClick:n.updateContent,class:"mt-3 bg-[#10B981] text-white px-3 py-2",label:"Submit"},null,8,["onClick"])])])])],64)}const O=l(C,[["render",B]]);export{O as default};
