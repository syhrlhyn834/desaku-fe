import{c as _,_ as l}from"./RichEditor.client.36f5fda7.js";import{_ as r}from"./Loader.d28ca904.js";import{u as h,c as o,a as n,f as s,l as m,b as u,w as p,F as g,d as f,r as C,o as a}from"./entry.078e507d.js";const b=_(l),k=n("div",{class:"text-2xl font-semibold mb-2"},"Tentang Desa",-1),y={class:"grid animate-fade"},B={class:"col-12"},x={class:"card"},v=n("h3",{class:"mb-3 text-xl font-medium"},"Konten",-1),w={key:0,class:"capitalize"},R={data(){return{data:null,renderRichEditor:!1,loading:!1}},async mounted(){const t=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/tentang");this.data=t.tentang,this.renderRichEditor=!0},methods:{async updateContent(){this.loading=!0,await $fetch(this.$config.public.API_PUBLIC_URL+"/api/tentang",{method:"POST",headers:{Authorization:"Bearer "+f().token},body:{content:this.data}}),this.loading=!1},contentChange(t){console.log(t),this.data=t}}},I=Object.assign(R,{__name:"About",setup(t){return h({title:"Tentang Desa"}),(e,E)=>{const c=b,i=r,d=C("v-btn");return a(),o(g,null,[k,n("div",y,[n("div",B,[n("div",x,[v,e.renderRichEditor?(a(),s(c,{key:0,data:e.data,onContentChange:e.contentChange},null,8,["data","onContentChange"])):m("",!0),u(d,{onClick:e.updateContent,color:"#10B981",class:"mt-3 text-white px-3 py-2"},{default:p(()=>[e.loading?(a(),s(i,{key:1})):(a(),o("span",w,"Submit"))]),_:1},8,["onClick"])])])])],64)}}});export{I as default};
