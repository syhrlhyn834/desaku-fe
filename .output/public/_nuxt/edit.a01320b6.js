import{_ as f}from"./Loader.fb3add51.js";import{u as h,c as l,a,b as s,w as d,g as p,r as i,o as n,e as g}from"./entry.b57668ff.js";import{c as v}from"./createSlug.32ba2e5c.js";const b={class:"grid animate-fade"},y={class:"col-12"},w={class:"card"},B=a("h3",{class:"text-2xl font-medium mb-5"},"Ubah Kategori Berita",-1),C={key:0,class:"capitalize"},k={data(){return{data:null,loading:!1,renderRichEditor:!1,form:{name:null,slug:null}}},async mounted(){const e=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/news-category/"+this.$route.query.id);this.form.name=e.name},methods:{async updateNewsCategory(){const{valid:e}=await this.$refs.form.validate();e&&(this.loading=!0,this.form.slug=v(this.form.name),await $fetch(this.$config.public.API_PUBLIC_URL+"/api/news-category/"+this.$route.query.id,{method:"PATCH",headers:{Authorization:"Bearer "+p().token},body:this.form}),this.loading=!1,this.$router.push("/dashboard/news"))},contentChange(e){this.data=e}}},L=Object.assign(k,{__name:"edit",setup(e){return h({title:"Edit Kategori Berita"}),(t,r)=>{const c=i("v-text-field"),m=i("v-form"),u=f,_=i("v-btn");return n(),l("div",b,[a("div",y,[a("div",w,[B,s(m,{ref:"form"},{default:d(()=>[a("div",null,[s(c,{rules:[o=>!!o||"Field is required"],modelValue:t.form.name,"onUpdate:modelValue":r[0]||(r[0]=o=>t.form.name=o),variant:"outlined","hide-details":"auto",label:"Kategori Berita"},null,8,["rules","modelValue"])])]),_:1},512),s(_,{onClick:t.updateNewsCategory,color:"#10B981",class:"mt-5 text-white px-3 py-2"},{default:d(()=>[t.loading?(n(),g(u,{key:1})):(n(),l("span",C,"Submit"))]),_:1},8,["onClick"])])])])}}});export{L as default};
