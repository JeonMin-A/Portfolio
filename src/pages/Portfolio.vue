<template>
    <Title >Portfolio</Title>
    <div class="max-w-5xl xl:max-w-6xl mx-auto pt-12 px-[2%] pb-8 lg:my-[200px]">
        <!-- 카테고리 -->
        <div class="w-full mx-auto mt-8">
            <ul class="flex flex-wrap">
                <li class="border border-[#5d6ab1] rounded-sm darkMode bg-white mr-3 mb-2">
                    <button @click="CateName = '전체'" :class="CateName === '전체' && 'font-medium focus:bg-[#5d6ab1] focus:text-white'" class="text-xs py-2 px-5 lg:text-lg">전체</button>
                </li>
                <li class="border border-[#5d6ab1] rounded-sm darkMode bg-white mr-3 mb-2" v-for="e in CateList" :key="e">
                    <button @click="CateName = e.type" :class="CateName === e.type && 'focus:bg-[#5d6ab1] focus:text-white'" class="text-xs py-2 px-2 lg:text-lg lg:py-3 lg:px-4">{{ e.type }}</button>
                </li>
            </ul>
        </div>
        <div class=""></div>
        <!-- 
            contents 
        -->
        <div class="w-full lg:max-w-7xl mx-auto mt-8">
            <swiper :pagination="{type: 'progressbar',}" :navigation="true" :modules="modules" :keyboard="true" :cssMode="true" class="mySwiper">
                <swiper-slide v-for="e in CateItem" :key="e">
                    <div class="bg-white mb-8 pt-12 group px-8 pb-16 rounded-md flex border darkMode flex-wrap">
                <div class="md:basis-[48%] lg:basis-[40%] relative mx-auto items-center flex">
                    <!-- img  -->
                    <img class="w-full" :src="require(`@/assets/images/${e.img}`)">
                </div>
                <div class="basis-full md:basis-[52%] pt-10">
                    <h3 class="text-2xl font-bold pt-[10px] pb-[10px] md:pl-[50px]">
                        {{ e.descTitle }}
                    </h3>
                    <p class="text-sm pt-[10px] pb-[10px] md:pl-[50px]">{{ e.desc }}</p>
                    <p class="text-sm pt-[10px] pb-[10px] md:pl-[50px]">키워드 : <span v-for="el in e.keyword" :key="el" class="mr-2 align-middle">{{ el }}</span> </p>
                    <!-- 아이콘 바인딩 -->
                    <p class="text-sm pt-[10px] pb-[10px] md:pl-[50px]">사용툴 : 
                        <img v-for="el in e.tools" :key="el" class="w-[25px] inline-block" :src="require(`@/assets/images/${el}.svg`)" art="hhhhh">
                    </p>
                    <p class="text-sm pt-[10px] pb-[10px] md:pl-[50px]">작업기간 : {{ e.date }}</p>
                    <!-- <p class="text-sm pt-[10px] pb-[10px] md:pl-[50px]">기여도 : {{ e.contribution }}</p> -->
                    <ul class="flex justify-center mt-6">
                        <!-- site -->
                        <li v-if="e.Site"><a :href="e.Site" class="py-1 px-8 border rounded-md darkMode text-sm lg:text-lg lg:py-2">Site</a></li>
                        <!-- notion -->
                        <li v-if="e.Notion"><a :href="e.Notion" :class="e.Notion === '' && 'hidden'" class="py-1 px-5 border rounded-md darkMode text-sm mx-4 lg:text-lg lg:py-2" target="_blank">Notion</a></li>
                        <!-- github -->
                        <li v-if="e.GitHub"><a :href="e.GitHub" :class="e.GitHub === '' && 'hidden'" class="py-1 px-5 border rounded-md darkMode text-sm lg:text-lg lg:py-2" target="_blank">GitHub</a></li>
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
    .swiper-button-prev{
        /* border: 1px solid black; */
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
    .swiper-button-prev::after{
        content: '';
        /* background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' fill='%23000' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd'%3E%3Cpath d='M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z'/%3E%3C/svg%3E"); */
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
        /* background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' fill='%23000' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd'%3E%3Cpath d='M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z'/%3E%3C/svg%3E"); */
        background-size: cover;
        width: 25px;
        height: 25px;
        right: 20px;
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