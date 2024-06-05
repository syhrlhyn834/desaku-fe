<script setup>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = ref([Autoplay, EffectFade, Navigation, Pagination])
const images = ref(null)
const lightbox = ref(null)

const { data } = await $fetch('/api/image-gallery?limit=8')

images.value = data

onMounted(async () => {
    await nextTick(() => {
        if (!lightbox.value) {
            lightbox.value = new PhotoSwipeLightbox({
                gallery: '#gallery',
                children: 'a',
                pswpModule: () => import('photoswipe'),
            });
            lightbox.value.on('uiRegister', function () {
                lightbox.value.pswp.ui.registerElement({
                    name: 'download-button',
                    order: 8,
                    isButton: true,
                    tagName: 'a',

                    // SVG with outline
                    html: {
                        isCustomSVG: true,
                        inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',
                        outlineID: 'pswp__icn-download'
                    },

                    // Or provide full svg:
                    // html: '<svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" class="pswp__icn"><path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" /></svg>',

                    // Or provide any other markup:
                    // html: '<i class="fa-solid fa-download"></i>' 

                    onInit: (el, pswp) => {
                        el.setAttribute('download', '');
                        el.setAttribute('target', '_blank');
                        el.setAttribute('rel', 'noopener');

                        pswp.on('change', () => {
                            console.log('change');
                            el.href = pswp.currSlide.data.src;
                        });
                    }
                });

                lightbox.value.pswp.ui.registerElement({
                    name: 'custom-caption',
                    order: 9,
                    isButton: false,
                    appendTo: 'root',
                    html: 'Caption text',
                    onInit: (el, pswp) => {
                        lightbox.value.pswp.on('change', () => {
                            const currSlideElement = lightbox.value.pswp.currSlide.data.element;
                            let captionHTML = '';
                            if (currSlideElement) {
                                const hiddenCaption = currSlideElement.querySelector('.hidden-caption-content');
                                captionHTML = hiddenCaption.innerHTML;
                            }
                            el.innerHTML = captionHTML;
                        });
                    }
                });
            });
            lightbox.value.init();
        }
    })
})
</script>
<template>
    <div class="block col-span-4">
        <div @click="navigateTo('/galeri')"
            class="text-[#0088CC] flex items-center cursor-pointer border-[#0088CC] border-b-2 mb-6 text-xl md:text-2xl font-semibold py-3">
            <span>Galeri Desa</span>
            <IconsArrowRight />
        </div>
        <div id="gallery" class="sm:grid rounded-lg hidden grid-cols-1 md:grid-cols-4 mb-2 gap-6">
            <a class="rounded-lg h-full w-full relative" v-for="(image, key) in images" :key="key" :href="image.url"
                data-pswp-width="600" data-pswp-height="400" target="_blank" rel="noreferrer">
                <div class="hidden-caption-content">{{ image.description }}</div>
                <v-img :lazy-src="image.url" class="rounded-md" cover width="100%" aspect-ratio="1" :src="image.url" />
                <div
                    class="rounded-b-lg z-10 py-1 backdrop-blur-xl opacity-90 pl-2 bg-[#0088CC] bottom-0 absolute w-full text-white">
                    <p class="truncate text-sm md:text-base">{{ image.description }}</p>
                </div>
            </a>
        </div>
        <div id="gallery" class="sm:hidden rounded-lg grid grid-cols-1 md:grid-cols-4 mb-2 gap-6">
            <swiper :autoplay="{
                delay: 4000,
                disableOnInteraction: false,
            }" :spaceBetween="30" :effect="'fade'" :navigation="true" :modules="modules" class="w-full rounded-lg">
                <swiper-slide v-for="image in images" class="relative rounded-lg">
                    <v-img class="rounded-b-lg" cover width="100%" aspect-ratio="1" :lazysrc="image.url"
                        :src="image.url" />
                    <div
                        class="text-sm sm:text-lg font-normal rounded-b-md z-10 py-1 backdrop-blur-xl opacity-90 pl-2 bg-[#0088CC] bottom-0 absolute w-full text-white">
                        <span>{{ image.description }}</span>
                    </div>
                </swiper-slide>
            </swiper>
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