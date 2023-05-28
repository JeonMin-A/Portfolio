<template>
    <div class="w-full pt-12 mt-16 px-[2%] pb-8">
        <!-- 카테고리 -->
        <div class="max-w-7xl mx-auto mt-8">
            <ul class="flex m-4">
                <li class="mr-4 border darkMode bg-white py-2 px-5 rounded-md">
                    <button @click="CateName = '전체'" :class="CateName === '전체' && 'font-bold text-blue-300'" class="text-sm">전체</button>
                </li>
                <li class="mr-4 border darkMode bg-white py-2 px-5 rounded-md" v-for="e in CateList" :key="e">
                    <button @click="CateName = e.type" :class="CateName === e.type && 'font-bold text-blue-800'" class="text-sm">{{ e.type }}</button>
                </li>
            </ul>
        </div>
        <div class=""></div>
        <!-- 
            contents 
        -->
        <div class="max-w-7xl mx-auto mt-8">
            <swiper :pagination="{type: 'progressbar',}" :navigation="true" :modules="modules" :keyboard="true" :cssMode="true" class="mySwiper">
                <swiper-slide v-for="e in CateItem" :key="e">
                    <div class="bg-white mb-8 pt-12 group px-8 pb-16 rounded-md flex border darkMode flex-wrap">
                <div class="basis-[48%] relative mx-auto">
                    <!-- img  -->
                    <img class="w-full  " :src="require(`@/assets/images/${e.img}`)">
                </div>
                <div class="basis-full md:basis-[52%] pt-10 group-even:order-2 xl:group-even:order-1">
                    <h3 class="text-2xl font-bold pt-[10px] pb-[10px] lg:pl-[50px]">
                        {{ e.descTitle }}
                    </h3>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">{{ e.desc }}</p>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">사용툴 : <span v-for="el in e.tools" :key="el" class="mr-2 align-middle">{{ el }}</span> </p>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">작업기간 : {{ e.date }}</p>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">기여도 : {{ e.contribution }}</p>
                    <ul class="flex justify-center mt-6">
                        <!-- site -->
                        <li v-if="e.Site"><a :href="e.Site" class="py-1 px-8 border rounded-md darkMode text-sm">Site</a></li>
                        <!-- notion -->
                        <li v-if="e.Notion"><a :href="e.Notion" :class="e.Notion === '' && 'hidden'" class="py-1 px-5 border rounded-md darkMode text-sm mx-4" target="_blank">Notion</a></li>
                        <!-- github -->
                        <li v-if="e.GitHub"><a :href="e.GitHub" :class="e.GitHub === '' && 'hidden'" class="py-1 px-5 border rounded-md darkMode text-sm" target="_blank">GitHub</a></li>
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
// import Title from '../components/Title.vue'
// import PortfolioData from '../assets/Portfolio.json'

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
            // Portfolio : PortfolioData,
            WorkList: [
                {
                    "img" : "pds.png",
                    "descTitle" : "스마트 택배 조회 서비스",
                    "desc" : "웹앱",
                    "tools" : ["VS CODE","Vue.js3", "TailwindCSS"],
                    "date" : "20일 (기획 10일 / 구상5일 / 제작5일)",
                    "contribution" : "100%",
                    "type" : "Publishing",
                    "Site" : "https://jeonmin-a.github.io/DeliveryTracking/",
                    "Notion" : "https://jeonmin-a.notion.site/273672f798b644e193c86c6034dffdf0",
                    "GitHub" : "https://github.com/JeonMin-A/DeliveryTracking_src",
                },
                {
                    "img" : "calculator.png",
                    "descTitle" : "퍼센테이지 계산기",
                    "desc" : "계산기 웹앱",
                    "tools" : ["VS CODE", "Vue.js3", "VS CODE"],
                    "date" : "30일 (기획 10일 / 구상10일)",
                    "contribution" : "100%",
                    "type" : "Publishing",
                    "Site" : "https://jeonmin-a.github.io/DeliveryTracking/",
                    "Notion" : "https://jeonmin-a.notion.site/273672f798b644e193c86c6034dffdf0",
                    "GitHub" : "https://github.com/JeonMin-A/DeliveryTracking_src",
                },
                {
                    "img" : "Notion_app_logo.png",
                    "descTitle" : "퍼센테이지 계산기",
                    "desc" : "계산기 웹앱",
                    "tools" : ["VS CODE", "Vue.js3", "VS CODE"],
                    "date" : "30일 (기획 10일 / 구상10일)",
                    "contribution" : "100%",
                    "type" : "Publishing",
                    "Site" : "https://jeonmin-a.github.io/DeliveryTracking/",
                    "Notion" : "https://jeonmin-a.notion.site/273672f798b644e193c86c6034dffdf0",
                    "GitHub" : "https://github.com/JeonMin-A/DeliveryTracking_src",
                },
            ]
        }
    },
    components:{
        Swiper,
        SwiperSlide
    },
    computed:{
        CateItem(){
            return this.WorkList.filter((data)=>{
            if(this.CateName !== '전체'){
                return data.type === this.CateName
            }else{
                return data.type
            }
        })
    },
    CateList(){
        return this.WorkList.filter((item,i)=>{
            return(
                this.WorkList.findIndex((item2)=>{
                    return item.type === item2.type
            }) === i
        )
        })
    },
    },
}
</script>
<style>
    .swiper-button-prev{
        /* border: 1px solid black; */
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
    .swiper-button-prev::after{
        content: '';
        background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' fill='%23000' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd'%3E%3Cpath d='M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z'/%3E%3C/svg%3E");
        background-size: cover;
        width: 25px;
        height: 25px;
        left: 14px;
    }
    .swiper-button-next{
        /* border: 1px solid black; */
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
    .swiper-button-next::after{
        content: '';
        background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' fill='%23000' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd'%3E%3Cpath d='M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z'/%3E%3C/svg%3E");
        background-size: cover;
        width: 25px;
        height: 25px;
        right: 20px;
    }
</style>