import{_ as v}from"./MediaLibrary.1bd2955a.js";import{_ as b}from"./Loader.d28ca904.js";import{u as w,c as m,b as s,w as l,a as o,l as k,F as y,d as L,r as n,o as r,e as c,f as C,v as M}from"./entry.078e507d.js";const $={class:"grid animate-fade"},B={class:"col-12"},V={class:"card"},I=o("h3",{class:"text-2xl font-medium mb-5"},"Edit Gambar Galeri",-1),S=o("div",{class:"mb-3 text-xl font-medium my-1"},"Gambar",-1),x={key:0,class:"relative w-fit"},H=M('<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><defs><mask id="ipSCloseOne0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></path><path stroke="#000" stroke-linecap="round" d="M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314"></path></g></mask></defs><path fill="#10B981" d="M0 0h48v48H0z" mask="url(#ipSCloseOne0)"></path></svg>',1),z=[H],G={class:"mb-6 mt-6"},U=o("div",{class:"flex items-center"},[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.3em",height:"1.3em",viewBox:"0 0 20 20"},[o("path",{fill:"white",d:"M17.125 6.17L15.079.535c-.151-.416-.595-.637-.989-.492L.492 5.006c-.394.144-.593.597-.441 1.013l2.156 5.941V8.777c0-1.438 1.148-2.607 2.56-2.607H8.36l4.285-3.008l2.479 3.008zM19.238 8H4.767a.761.761 0 0 0-.762.777v9.42c.001.444.343.803.762.803h14.471c.42 0 .762-.359.762-.803v-9.42A.761.761 0 0 0 19.238 8M18 17H6v-2l1.984-4.018l2.768 3.436l2.598-2.662l3.338-1.205L18 14z"})]),o("div",{class:"ml-1 font-semibold"},"Media Library")],-1),O={key:0,class:"capitalize"},A={data(){return{data:null,loading:!1,form:{description:null,image:null},toast:!1,openMediaLibrary:!1}},async mounted(){const i=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/image-gallery/"+this.$route.query.id);this.form.description=i.description,this.form.image=i.url},methods:{async updateImageHomepage(){const{valid:i}=await this.$refs.form.validate();if(i){if(!this.form.image){this.toast=!0;return}this.loading=!0,await $fetch(this.$config.public.API_PUBLIC_URL+"/api/image-gallery/"+this.$route.query.id,{headers:{Authorization:"Bearer "+L().token},method:"PATCH",body:this.form}),this.loading=!1,this.$router.push("/dashboard/gallery")}},onImageSelected(i){this.form.image=i}}},j=Object.assign(A,{__name:"edit",setup(i){return w({title:"Edit Gambar Galeri"}),(e,t)=>{const d=n("v-btn"),u=n("v-snackbar"),f=v,p=n("v-textarea"),h=n("v-form"),_=n("v-img"),g=b;return r(),m(y,null,[s(u,{modelValue:e.toast,"onUpdate:modelValue":t[1]||(t[1]=a=>e.toast=a),color:"red",timeout:3e3},{actions:l(()=>[s(d,{color:"white",variant:"text",onClick:t[0]||(t[0]=a=>e.toastUnauthorized=!1)},{default:l(()=>[c(" Tutup ")]),_:1})]),default:l(()=>[c(" Gambar wajib diisi! ")]),_:1},8,["modelValue"]),s(f,{onOnImageSelected:e.onImageSelected,onOnCloseModal:t[2]||(t[2]=a=>e.openMediaLibrary=!1),open:e.openMediaLibrary},null,8,["onOnImageSelected","open"]),o("div",$,[o("div",B,[o("div",V,[I,s(h,{ref:"form"},{default:l(()=>[o("div",null,[s(p,{rules:[a=>!!a||"Field is required"],rows:"2",variant:"outlined",label:"Deskripsi Gambar",clearable:"",modelValue:e.form.description,"onUpdate:modelValue":t[3]||(t[3]=a=>e.form.description=a)},null,8,["rules","modelValue"])])]),_:1},512),S,e.form.image?(r(),m("div",x,[s(_,{src:e.form.image,width:"300"},null,8,["src"]),o("div",{onClick:t[4]||(t[4]=a=>e.form.image=null),class:"absolute cursor-pointer right-3 top-3 z-50"},z)])):k("",!0),o("div",G,[s(d,{onClick:t[5]||(t[5]=a=>e.openMediaLibrary=!0),color:"#10B981",class:"flex-none text-white px-3"},{default:l(()=>[U]),_:1})]),s(d,{onClick:e.updateImageHomepage,color:"#10B981",class:"mt-2 text-white px-3 py-2"},{default:l(()=>[e.loading?(r(),C(g,{key:1})):(r(),m("span",O,"Submit"))]),_:1},8,["onClick"])])])])],64)}}});export{j as default};
