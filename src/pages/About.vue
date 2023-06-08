<template>
    <Title>about</Title>
    <div class="my-14 flex flex-wrap justify-center items-center gap-10 xl:gap-16 py-[200px]">
        <div class="relative mb-5 inline-block">
            <!-- lightMode -->
            <img :src="require(`@/assets/images/circleFrame.svg`)" alt="" class="animate-spin-slow rounded-[120px] w-[300px] overflow-visible mx-auto xl:w-[400px] block dark:hidden">
            <!-- darkMode -->
            <img :src="require(`@/assets/images/circleFrame_white.svg`)" alt="" class="animate-spin-slow rounded-[120px] w-[300px] overflow-visible mx-auto xl:w-[400px] hidden dark:block">
            <img :src="require(`@/assets/images/profile_img.png`)" alt="" class="rounded-full w-[250px] xl:w-[350px] absolute block top-[24px] left-[26px]">
        </div>
        <div class="flex justify-center">
            <div class="text-center">
                <h3 class="uppercase text-3xl font-bold mb-1 xl:text-5xl dark:text-[#d9d9d9]">jeon min-A</h3>
                <p class="mb-8 text-sm text-gray-500 xl:text-lg xl:mb-12 dark:text-stone-400/30">2001.11.13 | Daegu</p>
                <p class="mb-5 font-medium xl:text-3xl xl:mb-8 dark:text-[#d9d9d9]">jeonminah01@gmail.com</p>
                <p class="w-[300px] text-gray-500 xl:text-lg mx-auto xl:w-[400px] dark:text-stone-400">예술과 컴퓨터에 관심이 많아 프론트엔드를 공부하고 있습니다.</p>
            </div>
        </div>
    </div>
    <img :src="require(`@/assets/images/clover_icon_bg.svg`)" alt="" class="absolute right-0 w-[150px] top-[1240px] -z-10 md:top-[1300px] xl:w-[220px]">
</template>

<script>
import txt from '@/assets/txt.json'
import Title from '@/components/Title.vue';
export default {
    name: "AboutPage",
    components:{
        Title,
    },
    data() {
        return {
            txt: txt
        }
    },
}
</script>

<style>


</style>