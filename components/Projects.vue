<template>
  <div class="px-8 lg:px-28 mb-8 mt-12">
      
    <a href="" id="projects"></a>
    <p class="text-center text-base font-semibold uppercase text-gray-500 dark:text-gray-400 tracking-wider">Projects</p>

    <dl class="mt-5 mx-4">
        <VueSlickCarousel v-bind="settings" :style="color"> 

        <div class="px-4 shadow overflow-hidden sm:rounded-lg border border-gray-200 dark:bg-gray-700 project-card" v-for="project in projects" :key="project.name">
            <div class="px-4 py-5 sm:px-6">
                <div class="flex items-center">
                    <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300 w-full md:w-4/5">{{ project.name }}</h3>
                    <a href="https://github.com/JfmGijsbers" target="_blank" class="py-2 flex items-center justify-center text-base font-medium rounded-md text-indigo-700 hover:bg-indigo-200 dark:hover:bg-gray-400">
                        <Github :dark="$store.state.dark" class="md:w-10 w-full h-10"/>
                    </a>
                </div>
                <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">{{ project.intro }}</p>
                <divider text="Info" class="mb-0"/>
            </div>
            <div class="px-4 pb-5 sm:px-6">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:text-center md:text-left lg:text-left">
                <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500 text-bold dark:text-gray-300">Technologies</dt>
                <dd class="mt-1 text-sm text-gray-900 dark:text-gray-400">
                    <ul class="list-none">
                        <li v-for="tech in project.techs" :key="tech">{{ tech }}</li>
                    </ul>
                </dd>
                </div>
                <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-300 text-bold">Achievements</dt>
                <dd class="mt-1 text-sm text-gray-900 dark:text-gray-400">
                    <ul class="list-none">
                        <li v-for="achievements in project.achievements" :key="achievements">{{ achievements }}</li>
                    </ul>
                </dd>
                </div>
                <div class="sm:col-span-2">
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-300">Description</dt>
                <dd class="mt-1 text-sm text-gray-900 dark:text-gray-400">{{ project.description }}</dd>
                </div>
                <div class="hidden md:block sm:col-span-2 px-10" v-if="project.images">
                    <dd class="mt-1 text-sm text-gray-900">
                        <VueSlickCarousel v-bind="imgSettings" class="px-5">
                            <div v-for="img in project.images" :key="img" class="carousel-container">
                                <img :src="img" alt="" class="carousel-img cursor-pointer" @click="openDialog(project.images)">
                            </div>
                            <template #prevArrow>
                                <div class="custom-arrow">
                                </div>
                            </template>
                            <template #nextArrow>
                                <div class="custom-arrow">
                                </div>
                            </template>
                        </VueSlickCarousel>
                    </dd>
                </div>
                <div class="visible md:hidden" v-if="project.images">
                    <div class="">
                        <div v-if="showImages"  >
                            <img v-for="img in project.images" :key="img" :src="img" alt="" class="w-full mt-2">
                        </div>
                        
                        <div class="flex justify-center">
                            <button 
                                v-if="!showImages"
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex content-center"
                                @click="showImages = true;"
                                >
                                Show images
                            </button>
                            <button 
                                v-if="showImages"
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex content-center mt-2"
                                @click="showImages = false;"
                                >
                                Hide images
                            </button>

                        </div>
                    </div>
                </div>
            </dl>
            </div>
        </div>
        <template #prevArrow>
            <div class="custom-arrow">
            </div>
        </template>
        <template #nextArrow>
            <div class="custom-arrow">
            </div>
        </template>
        </VueSlickCarousel>
    </dl>
    <!-- Image dialog -->
    
    <div class="text-center">
        <v-dialog
        v-model="dialog.show"
        width="700"
        height="800"
        >
        <div class="modal w-full h-full outline-none overflow-x-hidden overflow-y-auto dark:bg-gray-600 bg-white">
            <div class="modal-dialog relative w-auto pointer-events-none">
                <div
                class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-clip-padding rounded-md outline-none text-current">
                <div
                    class="modal-header flex flex-shrink-0 items-center justify-between p-4 px-10 border-gray-200 rounded-t-md">
                    
                    <VueSlickCarousel v-bind="dialogSettings" class="w-full" :style="color">
                        <div v-for="img in dialog.images" :key="img" class="carousel-container dialog-container">
                            <img :src="img" alt="" class="carousel-img dialog-img">
                        </div>
                        <template #prevArrow>
                            <div class="custom-arrow">
                            </div>
                        </template>
                        <template #nextArrow>
                            <div class="custom-arrow">
                            </div>
                        </template>
                    </VueSlickCarousel>
                </div>
                </div>
            </div>
            </div>
        </v-dialog>
    </div>
  </div>
</template>

<script>
import Github from './Icons/Github';
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import NuxtSSRScreenSize from 'nuxt-ssr-screen-size'

export default {
    components: { VueSlickCarousel, Github },
    mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],
    mounted() {
        this.settings.slidesToShow = this.$vssWidth < 400 ? 1 : 2;
        this.imgSettings.slidesToShow = this.$vssWidth < 400 ? 1 : 2;
    },
    data: () => {
        return {
            dialog: {
                show: false,
                images: [require('@/static/carousel_imgs/img1.jpg'), require('@/static/carousel_imgs/img2.jpg'), require('@/static/carousel_imgs/img3.jpg')],
            },
            showImages: false,
            projects: [
                {
                    name: 'ThisOne',
                    techs: ['Nuxt.js', 'Node.js'],
                    intro: 'Tinder-like clothing inspiration platform built with Nuxt.js and Node.js.',
                    description: 'Tinder-like clothing inspiration platform.',
                    link: 'https://github.com/JfmGijsbers/',
                    images: [require('@/static/project_imgs/thisone/thisone_1.png'), require('@/static/project_imgs/thisone/thisone_2.png'), require('@/static/project_imgs/thisone/thisone_3.png'), require('@/static/project_imgs/thisone/thisone_4.png')],
                    achievements: [
                        'Secure authentication',
                        'Working with SEO',
                        'Creating a full backend',
                        'Starting a large project from scratch'
                    ],
                },
                {
                    name: 'Crawling framework',
                    techs: ['Python', 'XPath', 'Regular Expressions'],
                    intro: 'Framework to easily crawl websites',
                    description: 'Framework to easily crawl a lot of websites at a time using Python. Also features functionality to grab content from a page using XPath and Regular Expressions. The server used crontab to schedule visits to websites, with folders to dsitribute visit-frequencies.',
                    link: 'https://github.com/JfmGijsbers/',
                    //images: [require('@/static/carousel_imgs/img1.jpg'), require('@/static/carousel_imgs/img2.jpg'), require('@/static/carousel_imgs/img3.jpg')],
                    achievements: [
                        'Crawling with Python',
                        'Working with Crontab',
                        'Working with XPath and Regular Expressions'
                    ]
                },
                {
                    name: 'Resume website',
                    techs: ['Nuxt.js'],
                    intro: 'The website you are currently on :)',
                    description: 'My portfolio / resume website, which you are currently visiting! I display some of my projects, my skills and my education/career here. Furthermore, don\'t forget to visit the cooking sub-page! ',
                    link: 'https://github.com/JfmGijsbers/',
                    images: [require('@/static/project_imgs/personal/personal_1.png'), require('@/static/project_imgs/personal/personal_2.png'), require('@/static/project_imgs/personal/personal_3.png')],
                    achievements: [
                        'Designing a website',
                    ]
                }
            ],
            settings: {
                "infinite": true,
                "speed": 500,
                "slidesToShow": 2,
                // "prevArrow": '<button class="slide-arrow prev-arrow"></button>',
                // "nextArrow": '<button class="slide-arrow next-arrow"></button>'
            },
            imgSettings: {
                "infinite": true,
                "speed": 500,
                "slidesToShow": 2,

                // "prevArrow": '<button class="slide-arrow img-prev-arrow"></button>',
                // "nextArrow": '<button class="slide-arrow img-next-arrow"></button>'
            },
            dialogSettings: {
                "infinite": true,
                "speed": 500,
                "slidesToShow": 1,

                // "prevArrow": '<button class="slide-arrow img-prev-arrow"></button>',
                // "nextArrow": '<button class="slide-arrow img-next-arrow"></button>'

            }
        }
    },
    methods: {
        openDialog(images) {
            this.dialog.images = images;
            this.dialog.show = true;
        }
    },
    computed: {
        color() {
            return {
                '--text-color': this.$store.state.dark ? '#9690f5' : '#4f46e5'
            }
        }
    }
}
</script>
<style>
.dialog-container {
    min-height: 500px !important;
}
.dialog-img {
    height: max-content;
}
.slick-prev {
    left: -30px;
}
/* .slick-prev:before {
    color: var(--text-color);
    font-size: 30px;
}
.slick-next:before {
    color: var(--text-color);
    font-size: 30px;
} */
.custom-arrow::before {
    color: #9690f5;
    font-size: 30px;
}
.slick-slide {
    padding: 0 10px 0 10px;
}
.carousel-img {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.carousel-container {
    min-height: 100px;
    height: max-content;
    position: relative;
}
.project-card {
    min-height: 525px;
}
</style>
