<template>
    <div class="w-full h-full uppercase text-[50px] md:text-[100px] xl:text-[200px] font-bold my-80 xl:my-28 dark:text-white">
        <div class="flex ml-14 md:ml-32 xl:ml-60">
            <h2 class="">j</h2>
            <h2>e</h2>
            <img src="../assets/Portfolio_icon/icon_1.svg" class="animate-spin-slow w-[45px] md:w-[90px] xl:w-[170px] mx-1">
            <h2>n</h2>
        </div>
        <div class="flex ml-28 md:ml-64 xl:ml-80">
            <h2>m</h2>
            <h2>i</h2>
            <h2>n</h2>
            <h2 class="mx-2">-</h2>
            <h2>a</h2>
        </div>
        <div class="flex justify-center">
            <h2>p</h2>
            <img src="../assets/Portfolio_icon/icon_2.svg" class="animate-spin-slow w-[45px] md:w-[90px] xl:w-[170px] mx-1">
            <h2>r</h2>
            <h2>t</h2>
            <h2>f</h2>
            <img src="../assets/Portfolio_icon/icon_3.svg" class="animate-spin-slow w-[45px] md:w-[90px] xl:w-[170px] mx-1">
            <h2>l</h2>
            <h2>i</h2>
            <img src="../assets/Portfolio_icon/icon_4.svg" class="animate-spin-slow w-[65px] md:w-[90px] xl:w-[130px] mx-2">
        </div>
    </div>
</template>
<script>
import { onMounted } from 'vue';
import AOS from "aos";

export default {
    name: "IntroPage",
    setup(){
        onMounted(()=>{
            AOS.init();
        })
    }
}
</script>
<style>
    @keyframes left {
            0%{margin-left: 0%;}
            100%{margin-left: -35%;}
        }
        .animate-spin-slow{
            animation: left 5s infinite linear; display: flex; width: 500%;
        }
</style>