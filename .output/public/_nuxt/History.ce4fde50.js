import{c as r,_}from"./RichEditor.client.36f5fda7.js";import{_ as l}from"./Loader.d28ca904.js";import{u as h,c as o,a as e,f as s,l as m,b as p,w as u,F as f,d as C,r as g,o as n}from"./entry.078e507d.js";const b=r(_),k=e("div",{class:"text-2xl font-semibold mb-2"},"Sejarah Desa",-1),y={class:"grid animate-fade"},B={class:"col-12"},v={class:"card"},x=e("h3",{class:"mb-3 text-xl font-medium"},"Konten",-1),j={key:0,class:"capitalize"},w={data(){return{data:null,renderRichEditor:!1,loading:!1}},async mounted(){const a=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/sejarah");this.data=a.sejarah,this.renderRichEditor=!0},methods:{async updateContent(){this.loading=!0,await $fetch(this.$config.public.API_PUBLIC_URL+"/api/sejarah",{method:"POST",headers:{Authorization:"Bearer "+C().token},body:{content:this.data}}),this.loading=!1},contentChange(a){this.data=a}}},I=Object.assign(w,{__name:"History",setup(a){return h({title:"Sejarah Desa"}),(t,R)=>{const i=b,c=l,d=g("v-btn");return n(),o(f,null,[k,e("div",y,[e("div",B,[e("div",v,[x,t.renderRichEditor?(n(),s(i,{key:0,data:t.data,onContentChange:t.contentChange},null,8,["data","onContentChange"])):m("",!0),p(d,{onClick:t.updateContent,color:"#10B981",class:"mt-3 text-white px-3 py-2"},{default:u(()=>[t.loading?(n(),s(c,{key:1})):(n(),o("span",j,"Submit"))]),_:1},8,["onClick"])])])])],64)}}});export{I as default};
