import{c as b,_ as k}from"./RichEditor.client.36f5fda7.js";import{_ as w}from"./Loader.d28ca904.js";import{u as y,c as m,b as a,w as l,a as e,f as u,l as C,F as x,d as T,r as s,o as d}from"./entry.078e507d.js";import{c as V}from"./createSlug.32ba2e5c.js";const R=b(k),B={class:"flex items-center justify-between"},P=e("div",{class:"text-xl font-semibold"},[e("span",null,"Hapus Thumbnail?")],-1),U=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"black","stroke-width":"1.5"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{"stroke-linecap":"round",d:"m14.5 9.5l-5 5m0-5l5 5"})])],-1),E=[U],F=e("div",null,[e("span",null,"Thumbnail akan dihapus dari server, apakah anda yakin untuk menghapusnya?")],-1),$={class:"w-full flex justify-end"},A=e("span",{class:"capitalize"},"Hapus",-1),N={class:"grid animate-fade"},j={class:"col-12"},z={class:"card"},H=e("h3",{class:"text-2xl font-medium mb-5"},"Tambah Pengumuman",-1),L={class:"grid grid-cols-1 gap-3"},O={class:"col-span-1"},S={class:"mt-3"},q=e("div",{class:"mb-3 text-lg font-medium my-1"},"Konten",-1),D={key:0,class:"capitalize"},I={data(){return{modalRemoveThumbnail:!1,image:null,categories:[],renderRichEditor:!1,thumbnailDeleted:!1,thumbnailUploaded:!1,data:null,form:{title:null,description:null,content:null,thumbnail:null},headers:[{title:"Title",align:"start",sortable:!1,key:"title"},{title:"Content",align:"end",key:"content"}],items:[],loading:!1}},async mounted(){this.renderRichEditor=!0},methods:{async addAnnouncement(){const{valid:i}=await this.$refs.form.validate();i&&(this.loading=!0,this.form.content=this.data,this.form.slug=V(this.form.title),await $fetch(this.$config.public.API_PUBLIC_URL+"/api/announcement",{method:"POST",headers:{Authorization:"Bearer "+T().token},body:this.form}),this.loading=!1,this.$router.push("/dashboard/announcement"))},contentChange(i){this.data=i}}},Q=Object.assign(I,{__name:"add",setup(i){return y({title:"Tambah Pengumuman"}),(t,o)=>{const r=s("v-btn"),c=s("v-card"),_=s("v-dialog"),h=s("v-text-field"),p=s("v-textarea"),f=s("v-form"),v=R,g=w;return d(),m(x,null,[a(_,{modelValue:t.modalRemoveThumbnail,"onUpdate:modelValue":o[1]||(o[1]=n=>t.modalRemoveThumbnail=n),width:"auto"},{default:l(()=>[a(c,{height:"auto",style:{"scrollbar-width":"none"}},{title:l(()=>[e("div",B,[P,e("div",{onClick:o[0]||(o[0]=n=>t.modalRemoveThumbnail=!1),class:"cursor-pointer"},E)])]),text:l(()=>[F]),actions:l(()=>[e("div",$,[a(r,{onClick:t.removeThumbnailNews,color:"#FC4100",class:"mt-3 text-white px-3 py-2"},{default:l(()=>[A]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["modelValue"]),e("div",N,[e("div",j,[e("div",z,[H,a(f,{ref:"form"},{default:l(()=>[e("div",L,[e("div",O,[a(h,{rules:[n=>!!n||"Field is required"],modelValue:t.form.title,"onUpdate:modelValue":o[2]||(o[2]=n=>t.form.title=n),variant:"outlined","hide-details":"auto",label:"Judul Pengumuman"},null,8,["rules","modelValue"])]),e("div",S,[a(p,{rules:[n=>!!n||"Field is required"],rows:"3",variant:"outlined",label:"Deskripsi Pengumuman",clearable:"",modelValue:t.form.description,"onUpdate:modelValue":o[3]||(o[3]=n=>t.form.description=n)},null,8,["rules","modelValue"])])])]),_:1},512),q,t.renderRichEditor?(d(),u(v,{key:0,data:t.data,onContentChange:t.contentChange},null,8,["data","onContentChange"])):C("",!0),a(r,{onClick:t.addAnnouncement,color:"#10B981",class:"mt-5 text-white px-3 py-2"},{default:l(()=>[t.loading?(d(),u(g,{key:1})):(d(),m("span",D,"Submit"))]),_:1},8,["onClick"])])])])],64)}}});export{Q as default};
