<template>
    <Title>about</Title>
    <div class="my-14 flex flex-wrap justify-center items-center gap-10">
        <div class="relative mb-5 inline-block">
            <img :src="require(`@/assets/images/circleFrame.svg`)" alt="" class="animate-spin-slow rounded-[120px] w-[300px] overflow-visible mx-auto">
            <img :src="require(`@/assets/images/profile_img.png`)" alt="" class="rounded-full w-[250px] absolute block top-[24px] left-[26px]">
        </div>
        <div class="flex justify-center">
            <div class="text-center">
                <h3 class="uppercase text-3xl font-bold mb-1">jeon min-A</h3>
                <p class="mb-3 text-sm text-gray-500">2001.11.13 | Daegu</p>
                <p class="mb-3 font-medium">jeonminah01@gmail.com</p>
                <p class="w-[300px] text-gray-500">예술과 컴퓨터에 관심이 많아 프론트엔드를 공부하고 있습니다. </p>
            </div>
        </div>
    </div>
    <img :src="require(`@/assets/images/clover_icon_bg.svg`)" alt="" class="absolute right-0 w-[150px] top-[1240px] -z-10 md:top-[1020px]">
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