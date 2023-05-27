<template>
    <div class="w-full pt-12 mt-16 px-[2%] pb-8">
        <!-- 카테고리 -->
        <div class="max-w-7xl mx-auto mt-8">
            <ul class="flex m-4">
                <li class="mr-4 border darkMode bg-white py-2 px-5 rounded-md">
                    <button @click="CateName = '전체'" :class="CateName === '전체' && 'font-bold text-blue-300'">전체</button>
                </li>
                <li class="mr-4 border darkMode bg-white py-2 px-5 rounded-md" v-for="e in CateList" :key="e">
                    <button @click="CateName = e.type" :class="CateName === e.type && 'font-bold text-blue-800'">{{ e.type }}</button>
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
                <div class="basis-[48%] relative mokup-img group-even:order-1 xl:group-even:order-2">
                    <!-- <div v-for="e in 3" :key="e">
                        <img class="w-full" :src="require(`@/assets/mokup/mokup-${e}.png`)" alt="mokup">
                    </div> -->
                </div>
                <div class="basis-full md:basis-[52%] pt-10 group-even:order-2 xl:group-even:order-1">
                    <h3 class="text-2xl font-bold pt-[10px] pb-[10px] lg:pl-[50px]">
                        {{ e.descTitle }}
                    </h3>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">{{ e.desc }}</p>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">키워드 : <span v-for="el in e.keyword" :key="el" class="mr-2">{{ el }}</span> </p>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">컬러 : <span v-for="el in e.color" :key="el" class="w-5 h-5 inline-block align-middle mr-2" :style="{backgroundColor: `${el}`}"></span> </p>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">폰트 : {{ e.font }}</p>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">사용툴 : <span v-for="el in e.tools" :key="el" class="mr-2 align-middle">{{ el }}</span> </p>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">작업기간 : {{ e.date }}</p>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">기여도 : {{ e.contribution }}</p>
                    <ul class="flex justify-center mt-6">
                        <li v-if="e.progress"><a :href="e.progress" class="py-1 px-8 border rounded-md darkMode text-sm">Progress</a></li>
                        <li v-if="e.original"><a :href="e.original" :class="e.original === '' && 'hidden'" class="py-1 px-8 border rounded-md darkMode text-sm mx-4" target="_blank">Original</a></li>
                        <li v-if="e.redesign"><a :href="e.redesign" :class="e.redesign === '' && 'hidden'" class="py-1 px-8 border rounded-md darkMode text-sm" target="_blank">{{ e.type === 'Publishing' ? 'Clone' : 'Redesign' }}</a></li>
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
                    "img" : "https//via.placeholder.com/500",
                    "descTitle" : "경남 문화 관광 웹앱",
                    "desc" : "API를 활용한 웹앱 개발",
                    "keyword" : ["#심플함", "#깔끔함", "#tailwind"],
                    "color" : ["lightblue", "lightorange", "navy"],
                    "font": "Noto Sans KR",
                    "tools" : ["PS", "AI", "VS CODE"],
                    "date" : "10일 (기획 1일 / 구상1일 / 제작8일)",
                    "contribution" : "100%",
                    "type" : ["Publishing", "ToyProject"],
                    "progress" : "https//via.placeholder.com/1200x5000",
                    "original" : "https//www.naver.com",
                    "redesign" : "",

                },
                {
                    "img" : "https//via.placeholder.com/500",
                    "descTitle" : "스마트 택배 조회 서비스",
                    "desc" : "웹앱",
                    "keyword" : ["#심플함", "#산뜻함", "애니메이션"],
                    "color" : ["yellow", "green", "darkblue"],
                    "font": "Noto Sans KR",
                    "tools" : ["PS", "AI", "VS CODE"],
                    "date" : "20일 (기획 10일 / 구상5일 / 제작5일)",
                    "contribution" : "100%",
                    "type" : "Wepapp",
                    "Site" : "https//via.placeholder.com/1200x5000",
                    "Notion" : "",
                    "GitHub" : "https//www.kakao.com",

                },
                {
                    "img" : "https//via.placeholder.com/500",
                    "descTitle" : "퍼센테이지 계산기",
                    "desc" : "계산기 웹앱",
                    "keyword" : ["#3d", "#공학적", "#tailwind"],
                    "color" : ["lightgray", "white", "black"],
                    "font": "Noto Sans KR",
                    "tools" : ["PS", "배고프당", "VS CODE"],
                    "date" : "30일 (기획 10일 / 구상10일)",
                    "contribution" : "100%",
                    "type" : "Publishing",
                    "progress" : "https//via.placeholder.com/1200x5000",
                    "original" : "https//www.naver.com",
                },
                {
                    "img" : "https//via.placeholder.com/500",
                    "descTitle" : "날씨 어플",
                    "desc" : "openweather api를 활용한 날씨 어플",
                    "keyword" : ["#깔끔한", "#산뜻한", "#tailwind"],
                    "color" : ["lightblue", "white", "orange"],
                    "font": "Noto Sans KR",
                    "tools" : ["PS", "배고프당", "VS CODE"],
                    "date" : "30일 (기획 10일 / 구상10일",
                    "contribution" : "100%",
                    "type" : "Publishing",
                    "progress" : "https//via.placeholder.com/1200x5000",
                    "original" : "https//www.naver.com",

                },
                {
                    "img" : "https//via.placeholder.com/500",
                    "descTitle" : "포트폴리오",
                    "desc" : "vue를 활용한 포트폴리오 사이트",
                    "keyword" : ["#3d", "#공학적", "#tailwind"],
                    "color" : ["lightgray", "white", "black"],
                    "font": "Noto Sans KR",
                    "tools" : ["PS", "배고프당", "VS CODE"],
                    "date" : "30일 (기획 10일 / 구상10일",
                    "contribution" : "100%",
                    "type" : "Publishing",
                    "progress" : "https//via.placeholder.com/1200x5000",
                    "original" : "https//www.naver.com",

                },
                {
                    "img" : "https//via.placeholder.com/500",
                    "descTitle" : "클론코딩",
                    "desc" : "클론코딩",
                    "keyword" : ["#3d", "#공학적", "#tailwind"],
                    "color" : ["lightgray", "white", "black"],
                    "font": "Noto Sans KR",
                    "tools" : ["PS", "배고프당", "VS CODE"],
                    "date" : "30일 (기획 10일 / 구상10일",
                    "contribution" : "100%",
                    "type" : "Publishing",
                    "progress" : "https//via.placeholder.com/1200x5000",
                    "original" : "https//www.naver.com",
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