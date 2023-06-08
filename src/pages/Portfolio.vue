<template>
    <Title>
        Portfolio</Title>
    <div class="max-w-5xl xl:max-w-6xl mx-auto pt-12 px-[2%] pb-8 lg:my-[200px]">
        <!-- 카테고리 -->
        <div class="w-full mt-8">
            <ul class="flex flex-wrap">
                <li class="border border-[#5d6ab1] rounded darkMode mr-3 mb-2">
                    <button @click="CateName = '전체'" :class="CateName === '전체' && 'bg-[#5d6ab1] text-white py-2 px-2'" class="text-xs py-2 px-2 md:text-base lg:text-lg lg:py-3 lg:px-4">전체</button>
                </li>
                <li class="border border-[#5d6ab1] rounded darkMode mr-3 mb-2" v-for="e in CateList" :key="e">
                    <button @click="CateName = e.type" :class="CateName === e.type && 'bg-[#5d6ab1] text-white py-2 px-2'" class="text-xs py-2 px-2 md:text-base lg:text-lg lg:py-3 lg:px-4">{{ e.type }}</button>
                </li>
            </ul>
        </div>
        <!-- 
                contents 
            -->
        <div class="w-full lg:max-w-7xl xl:max-w-5xl mx-auto mt-8">
            <swiper :pagination="{type: 'progressbar',}" :navigation="true" :modules="modules" :keyboard="true" :cssMode="true" class="mySwiper">
                <swiper-slide v-for="e in CateItem" :key="e">
                    <div class="bg-white mb-8 pt-12 group px-8 pb-16 rounded-md flex border darkMode flex-wrap">
                        <!-- area-1 -->
                        <div class="md:basis-full md:mt-10 lg:basis-[90%] xl:basis-[50%] relative mx-auto items-center flex">
                            <!-- img  -->
                            <img class="w-full border" :src="require(`@/assets/images/${e.img}`)">
                            <img :src="require(`@/assets/images/clip_icon2.svg`)" alt="클립" class="absolute -top-4 left-2 w-4 md:w-[40px] md:-top-10 md:left-4 xl:w-[33px] xl:-top-0">
                        </div>
                        <!-- area-2 -->
                        <div class="basis-full md:basis-[90%] lg:basis-[52%] xl:basis-[50%] pt-10 md:flex md:justify-center xl:flex xl:flex-wrap">
                            <!-- txt -->
                            <div class="md:basis-full xl:ml-0">
                                <h3 class="text-2xl text-[#5d6ab1] font-bold pt-[10px] pb-[10px] md:pl-[50px] md:text-3xl xl:text-xl">
                                    {{ e.descTitle }} | {{ e.date }}
                                </h3>
                                <p class="text-sm pt-[10px] pb-[10px] md:pl-[50px] md:text-base"><span v-for="el in e.keyword" :key="el" class="mr-2 align-middle">{{ el }}</span> </p>
                                <p class="text-sm pt-[10px] pb-[10px] md:pl-[50px] md:text-base">{{ e.desc }}</p>
                                <!-- 아이콘 바인딩 -->
                                <p class="text-sm pt-[10px] pb-[10px] md:pl-[50px] md:text-base">사용툴 :
                                    <img v-for="el in e.tools" :key="el" class="w-[25px] inline-block mr-2" :src="require(`@/assets/images/${el}.svg`)" art="사용툴">
                                </p>
                                <!-- <p class="text-sm pt-[10px] pb-[10px] md:pl-[50px]">작업기간 : {{ e.date }}</p> -->
                                <!-- <p class="text-sm pt-[10px] pb-[10px] md:pl-[50px]">기여도 : {{ e.contribution }}</p> -->
                            </div>
                            <!-- link btn -->
                            <div class="">
                                <ul class="justify-center mt-6 md:mt-0">
                                    <!-- site -->
                                    <li v-if="e.Site" class="mb-5 w-full hover:bg-[#5d6ab1]/20">
                                        <a :href="e.Site" :class="e.Site === '' && 'hidden'" class="flex justify-center border rounded-md py-3 md:px-20" target="_blank">
                                        <img :src="require(`@/assets/images/vercel_icon.svg`)" alt="" class="w-4 inline-block mr-2">Site
                                    </a>
                                    </li>
                                    <!-- notion -->
                                    <li v-if="e.Notion" class="mb-5 hover:bg-[#5d6ab1]/20">
                                        <a :href="e.Notion" :class="e.Notion === '' && 'hidden'" class="flex justify-center border rounded-md py-3 xl:px-5" target="_blank">
                                        <img :src="require(`@/assets/images/notion_icon.svg`)" alt="" class="w-4 inline-block mr-2">Notion
                                    </a>
                                    </li>
                                    <!-- github -->
                                    <li v-if="e.GitHub" class="hover:bg-[#5d6ab1]/20">
                                        <a :href="e.GitHub" :class="e.GitHub === '' && 'hidden'" class="flex justify-center border rounded-md py-3" target="_blank">
                                        <img :src="require(`@/assets/images/GitHub_icon.svg`)" alt="" class="w-4 inline-block mr-2">
                                        GitHub
                                    </a>
                                    </li>
                                    <!-- <li v-if="e.redesign"><a :href="e.redesign" :class="e.redesign === '' && 'hidden'" class="py-1 px-8 border rounded-md darkMode text-sm" target="_blank">{{ e.type === 'Publishing' ? 'Clone' : 'Redesign' }}</a></li> -->
                                </ul>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import Title from '../components/Title.vue'
import Portfolio from '../assets/Portfolio.json'

import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Pagination, Autoplay, Navigation, Keyboard } from 'swiper';
import 'swiper/css'
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import 'swiper/css/navigation';

export default {
    name: "PortfolioPage",
    data() {
        return {
            CateName: "전체",
            modules: [EffectFade, Pagination, Autoplay, Navigation, Keyboard],
            PortfolioData: Portfolio,
            // WorkList: 
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        Title
    },
    computed: {
        CateItem() {
            return this.PortfolioData.filter((data) => {
                if (this.CateName !== '전체') {
                    return data.type === this.CateName
                } else {
                    return data.type
                }
            })
        },
        CateList() {
            return this.PortfolioData.filter((item, i) => {
                return (
                    this.PortfolioData.findIndex((item2) => {
                        return item.type === item2.type
                    }) === i
                )
            })
        },
    },
}
</script>

<style>
.swiper-button-prev::after {
    content: '';
    /* background-image: url("../assets/images/prev_icon.svg"); */
    background-size: cover;
    width: 14px;
    height: 25px;
    position: absolute;
    top: 200px;
    left: 680px;
}

.swiper-button-next::after {
    content: '';
    /* background-image: url("../assets/images/next_icon.svg") ; */
    background-size: cover;
    width: 14px;
    height: 25px;
    position: absolute;
    top: 200px;
    right: 50px;
}

.swiper-pagination-progressbar-fill {
    border: 2px solid #5d6ab1;
    border-radius: 5px;
}

.swiper-pagination-progressbar {
    background-color: lightgrey;
    border-radius: 5px;
}
</style>