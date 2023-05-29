<template>
    <!-- 
        logo area
    -->
    <div class="hidden xl:block">
        <img :src="require(`@/assets/images/logo_text.svg`)" alt="로고" class="animate-spin-slow fixed top-0 right-0 z-20 w-[200px] block dark:hidden">
        <img :src="require(`@/assets/images/logo_text_white.svg`)" alt="로고" class="animate-spin-slow fixed top-0 right-0 z-20 w-[200px] hidden dark:block">
        <img :src="require(`@/assets/images/3.svg`)" alt="로고" class="fixed right-[50px] top-[50px] z-20 w-[100px] block dark:hidden">
        <img :src="require(`@/assets/images/4.svg`)" alt="로고" class="fixed right-[50px] top-[50px] z-20 w-[100px] hidden dark:block">
    </div>
    <!-- nav area -->
    <ul class="hidden md:inline-block md:sticky md:top-10 md:z-20">
        <li class="ml-6 text-[20px] dark:text-[#d9d9d9]  mt-4" v-for="(e, index) in NavList[0]" :key="e">
            <button @click="$emit('MenuIndex', 'section-'+(index+1) )" class="lg:text-xl xl:text-3xl hover:opacity-60">{{ e }}</button>
        </li>
    </ul>

    <!-- <div class="w-full h-20 px-[2%] sticky top-0 bg-white py-2.5 z-50 dark:bg-[#333] dark:border-b dark:border-b-[#3a3b3d] dark:text-[#d9d9d9] border-b border-t border-black"> -->
        <div class="">
            <!-- <div class="hidden md:block">
                <ul class="flex justify-around">
                    <li class="relative text-[20px] mt-4" v-for="(e, index) in NavList[0]" :key="e">
                        <button @click="$emit('MenuIndex', 'section-'+(index+1) )">{{ e }}</button>
                    </li>
                </ul>
            </div> -->
            <!-- 
                mobile 
            -->
            <nav class="md:hidden fixed w-full h-[70px] md:h-0 z-50 top-0 bg-[#fff] dark:bg-[#1d1c21]">
                <!-- <div class="logo_mobile">
                    <img :src="require(`@/assets/images/logo_text.svg`)" alt="로고" class="animate-spin-slow block dark:hidden w-20 mb mx-auto relative">
                    <img :src="require(`@/assets/images/logo_text_white.svg`)" alt="로고" class="animate-spin-slow hidden dark:block w-20 mx-auto relative">
                    <img :src="require(`@/assets/images/3.svg`)" alt="로고" class="block dark:hidden w-10 mx-auto absolute top-[20px] right-[175px]">
                    <img :src="require(`@/assets/images/4.svg`)" alt="로고" class="hidden dark:block w-20 mx-auto absolute top-[111px] right-[104px]">
                </div> -->
                <div class="manu_bar">
                    <font-awesome-icon icon="bars" class="text-3xl cursor-pointer md:hidden absolute right-3 top-5 dark:text-[#d9d9d9]" @click="isOpen = true"  />
                </div>
            </nav>
            <div class="w-72 h-full fixed darkMode bg-gray-100 z-50 p-12 box-border transition-all duration-500 top-0 -right-80 xl:hidden" :class="isOpen && '!right-0'">
                <font-awesome-icon icon="times" class="absolute top-5 right-5 text-3xl cursor-pointer md:hidden" @click="isOpen === false ? isOpen = true : isOpen=false" />
                <div class="text-center mt-6">
                    <div class="logo_mobile mb-5">
                        <img :src="require(`@/assets/images/logo_text.svg`)" alt="로고" class="animate-spin-slow block dark:hidden w-40 mx-auto relative">
                        <img :src="require(`@/assets/images/logo_text_white.svg`)" alt="로고" class="animate-spin-slow hidden dark:block w-40 mx-auto relative">
                        <img :src="require(`@/assets/images/3.svg`)" alt="로고" class="block dark:hidden w-20 mx-auto absolute top-[111px] right-[104px]">
                        <img :src="require(`@/assets/images/4.svg`)" alt="로고" class="hidden dark:block w-20 mx-auto absolute top-[111px] right-[104px]">
                        <!-- <img :src="require(`@/assets/images/img.svg`)" alt="" class="z-50 rounded-full"> -->
                    </div>
                    <p>FE 개발자 전민아</p>
                </div>
                <ul class="mt-12">
                    <li class="py-5 border-b" v-for="(e, index) in NavList[0]" :key="e">
                        <font-awesome-icon :icon="NavList[2][index]" class="mr-2" />
                        <button @click="$emit('MenuIndex', 'section-'+(index+1) )">{{ e }}</button>
                    </li>
                </ul>
                <ul class="bottom-3 right-64 flex justify-center mt-10">
                    <!-- Notion -->
                    <li class="notion mr-10">
                        <a href="https://jeonmin-a.notion.site/FE-9e441af27b1441908ee34ad8ab4136ed">
                            <img :src="require(`@/assets/images/Notion_app_logo.png`)" alt="노션" class="w-12">
                        </a>
                    </li>
                    <!-- GitHub -->
                    <li class="github">
                        <a href="https://github.com/JeonMin-A">
                            <img :src="require(`@/assets/images/GitHub_logo.png`)" alt="깃허브" class="w-12">
                        </a>
                    </li>
                </ul>
                <div class="absolute right-3 bottom-3 cursor-pointer border px-3 py-2 rounded">
                    <font-awesome-icon :icon="isDark ? 'sun' : 'moon'" class="text-xl text-[#333] dark:text-[#d9d9d9]" @click="$emit('dark')"/>
                </div>
                <p class="absolute bottom-0 right-[70px] mb-4 text-xs">jeonminah01@gmail.com</p>
            </div>
        </div>
</template>

<script>
export default {
    // 1. 프롭스할 파일을 컴포넌트에 생성, name 작성
    name: "NavPage",
    data() {
        return {
            isOpen: true,
            // 6.위에서 nav 반복문 돌려줄거라 데이터 안에 변수 작성, [[ex1],[ex2]] 대괄호 안, ex2는 라우터 시킬 path(주소)임.
            // 프롭스 작동을 할려며 부모 컴포넌트에서 가져온 변수를 프롭스 작성해준다.
            NavList: [["Home", "About", "Portfolio", "Contact"], ["Home", "/About", "/Portfolio", "/Contact"], ["user", "code", "folder-open", "address-card"]]
        }
    },
}
</script>

<style>
    .swiper-pagination .swiper-pagination-progressbar .swiper-pagination-horizontal.swiper-pagination-progressbar-fill:root{
        /* --swiper-theme-color: #007aff; */
        --swiper-theme-color: #000000;
        /* background: #000; */
    }
</style>