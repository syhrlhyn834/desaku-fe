<script setup>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const lightbox = ref(null)
const images = ref([])
const videos = ref([])
const page = ref(1)
const pageLengthVideo = ref(0)
const pageLengthImage = ref(0)

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

async function loadImage() {
    const { data, total } = await $fetch(`/api/image-gallery?limit=9&page=${page.value}`)
    images.value = data
    pageLengthImage.value = Math.ceil(total / 9)
}

async function loadVideo() {
    const { data, total } = await $fetch(`/api/video-gallery?limit=3&page=${page.value}`)
    videos.value = data
    pageLengthVideo.value = Math.ceil(total / 3)
}

await loadVideo()
await loadImage()

async function changePageVideo() {
    const { data } = await $fetch(`/api/video-gallery?limit=3&page=${page.value}`)
    videos.value = data
}

async function changePageImage() {
    const { data } = await $fetch(`/api/image-gallery?limit=9&page=${page.value}`)
    images.value = data
}

definePageMeta({
    layout: 'app'
});

useHead({
    title: "Galeri Desa"
})
</script>

<template>
    <div class="animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6">
        <BreadCrumb>
            <template v-slot:root>
                <span>Galeri Desa</span>
            </template>
        </BreadCrumb>
        <div class="pb-[1rem]">
            <h1 class="mb-2 font-semibold text-[#0088CC] text-2xl">Galeri Video</h1>
            <div class="grid grid-cols-1 md:grid-cols-3 md:gap-[2rem]">
                <a class="relative w-full rounded-lg animate-fade" v-for="(video, key) in videos" :key="key"
                    target="_blank" rel="noreferrer">
                    <iframe class="mt-6 rounded-t-lg shadow-sm" width="100%" height="245" loading="lazy"
                        :src="video.url" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; web-share" referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen></iframe>
                    <div
                        class="rounded-b-lg py-3 px-2 font-medium text-base md:text-lg backdrop-blur-sm bg-white/30 shadow-sm border border-slate-100">
                        <span class="line-clamp-1">{{ video.description }}</span>
                    </div>
                </a>
            </div>
            <v-pagination :size="$vuetify.display.mobile ? 'small' : 'default'" class="mt-4 mb-6 md:mb-10"
                v-model="page" @update:modelValue="changePageVideo" :total-visible="5"
                :length="pageLengthVideo"></v-pagination>
        </div>
        <div class="pb-[6rem]">
            <h1 class="mb-8 font-semibold text-[#0088CC] text-2xl">Galeri Foto</h1>
            <div id="gallery" class="grid grid-cols-1 md:grid-cols-3 gap-[2rem] md:gap-y-[2rem]">
                <a class="w-full cursor-pointer rounded-lg" v-for="(image, key) in images" :key="key" :href="image.url"
                    data-pswp-width="600" data-pswp-height="400" target="_blank" rel="noreferrer">
                    <div class="hidden-caption-content">{{ image.description }}</div>
                    <v-img :lazy-src="image.url" class="w-full rounded-t-lg" height="300" :src="image.url" alt="" />
                    <div
                        class="rounded-b-lg py-3 px-2 font-medium text-base md:text-lg backdrop-blur-sm bg-white/30 shadow-sm border border-slate-100">
                        <span class="line-clamp-1">{{ image.description }}</span>
                    </div>
                </a>
            </div>
            <v-pagination :size="$vuetify.display.mobile ? 'small' : 'default'" class="mt-4 mb-6 md:mb-10"
                v-model="page" @update:modelValue="changePageImage" :total-visible="5"
                :length="pageLengthImage"></v-pagination>
        </div>
    </div>
</template>
<style scoped>
::v-deep img {
    border-radius: 6px 0 0 0;
    width: 100%;
    object-fit: cover;
}
</style>
