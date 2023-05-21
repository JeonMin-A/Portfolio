<template>
    <div class="w-full h-full uppercase text-[50px] md:text-[100px] xl:text-[200px] font-black my-80 xl:my-28 dark:text-white">
        <div class="flex ml-14 md:ml-32 xl:ml-60">
            <h2 class="">j</h2>
            <h2>e</h2>
            <img src="../assets/Portfolio_logo/3.svg" class="animate w-[50px] md:w-[100px] xl:w-[200px] mx-1 dark:hidden ">
            <img src="../assets/Portfolio_logo/3_dark.svg" class="animate w-[50px] md:w-[100px] xl:w-[200px] mx-1 hidden dark:block">
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
            <img src="../assets/Portfolio_logo/5.svg" class="animate w-[45px] md:w-[90px] xl:w-[170px] mx-1 dark:hidden">
            <img src="../assets/Portfolio_logo/5_dark.svg" class="animate w-[45px] md:w-[90px] xl:w-[170px] mx-1 hidden dark:block">
            <h2>r</h2>
            <h2>t</h2>
            <h2>f</h2>
            <img src="../assets/Portfolio_logo/2.svg" class="animate w-[35px] md:w-[75px] xl:w-[140px] mx-3 dark:hidden">
            <img src="../assets/Portfolio_logo/2_dark.svg" class="animate w-[35px] md:w-[75px] xl:w-[140px] mx-3 hidden dark:block">
            <h2>l</h2>
            <h2>i</h2>
            <img src="../assets/Portfolio_logo/4.svg" class="animate w-[50px] md:w-[100px] xl:w-[180px] mx-2 dark:hidden">
            <img src="../assets/Portfolio_logo/4_dark.svg" class="animate w-[50px] md:w-[100px] xl:w-[18px] mx-2 hidden dark:block">
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
    .animate{
        animation: spin 7s linear infinite;

    @keyframes spin {
        from {
            transform: rotate(0deg);
            }
        to {
            transform: rotate(360deg);
            }
        }
    }
</style>