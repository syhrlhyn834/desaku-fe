<script setup>
import moment from 'moment';

const news = ref(null)

news.value = (await $fetch('/api/berita?limit=5')).data
</script>
<template>
    <div class="flex mb-10 cursor-pointer" @click="$router.push('/berita/' + news.slug)" v-for="news in news">
        <div class="h-[120px] sm:h-[160px] w-[140px] sm:w-[220px] md:w-[260px] flex-none">
            <v-img :lazy-src="news.thumbnail" height="100%" aspect-ratio="4/3"
                :src="news.thumbnail" />
        </div>
        <div class="block pl-4">
            <div class="text-md md:text-xl font-semibold">
                <span class="line-clamp-2">{{ news.title }}</span>
            </div>
            <div class="text-sm md:text-base block sm:flex items-center font-medium mt-2">
                <div class="flex items-center">
                    <IconsDate class="flex-none" />
                    <span class="ml-1">{{ moment(news.created_at).format("LL") }}</span>
                </div>
                <div class="flex items-center sm:ml-2 max-[500px]:mt-1">
                    <IconsTag class="flex-none" />
                    <span class="ml-1">{{ news.name }}</span>
                </div>
            </div>
            <div class="mt-2">
                <span class="line-clamp-2 sm:line-clamp-3">{{ news.description }}</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
::v-deep img {
    border-radius: 6px;
    width: 100%;
    object-fit: cover;
}
</style>