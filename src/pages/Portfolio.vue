<template>
    <Title >Portfolio</Title>
    <div class="max-w-5xl xl:max-w-6xl mx-auto pt-12 px-[2%] pb-8 lg:my-[200px]">
        <!-- 카테고리 -->
        <div class="w-full mt-8">
            <ul class="flex flex-wrap">
                <li class="border border-[#5d6ab1] rounded darkMode mr-3 mb-2">
                    <button @click="CateName = '전체'" :class="CateName === '전체' && 'bg-[#5d6ab1] text-white py-2 px-2'" class="text-xs py-2 px-2 lg:text-lg lg:py-3 lg:px-4">전체</button>
                </li>
                <li class="border border-[#5d6ab1] rounded darkMode mr-3 mb-2" v-for="e in CateList" :key="e">
                    <button @click="CateName = e.type" :class="CateName === e.type && 'bg-[#5d6ab1] text-white py-2 px-2'" class="text-xs py-2 px-2 lg:text-lg lg:py-3 lg:px-4">{{ e.type }}</button>
                </li>
            </ul>
        </div>
        <!-- 
            contents 
        -->
        <div class="w-full lg:max-w-7xl mx-auto mt-8">
            <swiper :pagination="{type: 'progressbar',}" :navigation="true" :modules="modules" :keyboard="true" :cssMode="true" class="mySwiper">
                <swiper-slide v-for="e in CateItem" :key="e">
                    <div class="bg-white mb-8 pt-12 group px-8 pb-16 rounded-md flex border darkMode flex-wrap">
                <div class="md:basis-[48%] lg:basis-[40%] relative mx-auto items-center flex">
                    <!-- img  -->
                    <img class="w-full border" :src="require(`@/assets/images/${e.img}`)">
                    <img :src="require(`@/assets/images/clip_icon2.svg`)" alt="클립" class="absolute -top-4 left-2 w-4">
                </div>
                <div class="basis-full md:basis-[52%] pt-10">
                    <h3 class="text-2xl text-[#5d6ab1] font-bold pt-[10px] pb-[10px] md:pl-[50px]">
                        {{ e.descTitle }} | {{ e.date }}
                    </h3>
                    <p class="text-sm pt-[10px] pb-[10px] md:pl-[50px]"><span v-for="el in e.keyword" :key="el" class="mr-2 align-middle">{{ el }}</span> </p>
                    <p class="text-sm pt-[10px] pb-[10px] md:pl-[50px]">{{ e.desc }}</p>
                    <!-- 아이콘 바인딩 -->
                    <p class="text-sm pt-[10px] pb-[10px] md:pl-[50px]">사용툴 : 
                        <img v-for="el in e.tools" :key="el" class="w-[25px] inline-block mr-2" :src="require(`@/assets/images/${el}.svg`)" art="사용툴">
                    </p>
                    <!-- <p class="text-sm pt-[10px] pb-[10px] md:pl-[50px]">작업기간 : {{ e.date }}</p> -->
                    <!-- <p class="text-sm pt-[10px] pb-[10px] md:pl-[50px]">기여도 : {{ e.contribution }}</p> -->
                    <ul class="flex-col justify-center mt-6">
                        <!-- site -->
                        <li v-if="e.Site" class="mb-5">
                            <a :href="e.Site" :class="e.Site === '' && 'hidden'" class="flex justify-center border rounded-md py-3 hover:bg-slate-200" target="_blank">
                                <img :src="require(`@/assets/images/vercel_icon.svg`)" alt="" class="w-4 inline-block mr-2">Site
                            </a>
                        </li>
                        <!-- notion -->
                        <li v-if="e.Notion" class="mb-5">
                            <a :href="e.Notion" :class="e.Notion === '' && 'hidden'" class="flex justify-center border rounded-md py-3" target="_blank">
                                <img :src="require(`@/assets/images/notion_icon.svg`)" alt="" class="w-4 inline-block mr-2">Notion
                            </a>
                        </li>
                        <!-- github -->
                        <li v-if="e.GitHub" class="">
                            <a :href="e.GitHub" :class="e.GitHub === '' && 'hidden'" class="flex justify-center border rounded-md py-3" target="_blank">
                                <img :src="require(`@/assets/images/GitHub_icon.svg`)" alt="" class="w-4 inline-block mr-2">
                                GitHub
                            </a>
                        </li>
                        <!-- <li v-if="e.redesign"><a :href="e.redesign" :class="e.redesign === '' && 'hidden'" class="py-1 px-8 border rounded-md darkMode text-sm" target="_blank">{{ e.type === 'Publishing' ? 'Clone' : 'Redesign' }}</a></li> -->
                    </ul>
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
            PortfolioData : Portfolio,
            // WorkList: 
        }
    },
    components:{
        Swiper,
        SwiperSlide,
        Title
    },
    computed:{
        CateItem(){
            return this.PortfolioData.filter((data)=>{
            if(this.CateName !== '전체'){
                return data.type === this.CateName
            }else{
                return data.type
            }
        })
    },
    CateList(){
        return this.PortfolioData.filter((item,i)=>{
            return(
                this.PortfolioData.findIndex((item2)=>{
                    return item.type === item2.type
            }) === i
        )
        })
    },
    },
}
</script>
<style>
    .swiper-button-prev::after{
        content: '';
        /* background-image: url("../assets/images/prev_icon.svg"); */
        background-size: cover;
        width: 14px;
        height: 25px;
        position: absolute;
        top: 200px;
        left: 680px;
    }
    .swiper-button-next::after{
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