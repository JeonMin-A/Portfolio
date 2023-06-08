<template>
    <div class="uppercase max-w-7xl py-[400px] p-[3%] xl:-mt-[300px] xl:mx-auto">
        <!-- top floor -->
        <div class="flex text-6xl font-bold justify-center mr-32 md:text-8xl md:ml-[50px] xl:text-[150px] dark:text-[#d9d9d9] xl:mr-[500px]">
            <h2 class="mr-1">j</h2>
            <h2 class="mr-1">e</h2>
            <img :src="require(`@/assets/images/longCircle_icon1.svg`)" alt="" class="w-[170px] md:w-[250px] mt-2 mr-1 hidden md:block xl:w-[360px]">
            <!-- <<< sm -->
            <img :src="require(`@/assets/images/longCircle_icon2.svg`)" alt="" class="w-20 mt-2 mr-1 md:hidden block dark:hidden">
            <h2>n</h2>
        </div>
        <!-- midden floor -->
        <div class="flex text-6xl font-bold justify-center ml-12 md:text-8xl md:mr-[110px] xl:text-[150px] dark:text-[#d9d9d9] xl:mr-[28px]">
            <h2 class="mr-1">m</h2>
            <h2 class="mr-1">i</h2>
            <h2 class="mr-1">n</h2>
            <h2 class="mr-1">-</h2>
            <h2 class="mr-1">a</h2>
        </div>
        <!-- bottom floor -->
        <div class="flex text-6xl font-bold justify-center md:text-8xl xl:text-[150px] dark:text-[#d9d9d9] xl:ml-[155px]">
            <h2 class="mr-1">p</h2>
            <img :src="require(`@/assets/images/clover_icon.svg`)" alt="" class="w-10 mt-2 mr-1 md:w-[68px] md:mx-2 md:mt-3 animate-spin-slow xl:hidden">
            <!-- 이미지 크기 임시 해결 / 나중에 고쳐야됨 -->
            <img :src="require(`@/assets/images/clover_icon2.svg`)" alt="" class="w-10 mt-2 mr-1 md:w-[68px] md:mx-2 md:mt-3 animate-spin-slow xl:w-[100px] xl:mx-4 hidden xl:block xl:mt-4">
            <h2 class="mr-1">r</h2>
            <h2 class="mr-1">t</h2>
            <h2 class="mr-1">f</h2>
            <img :src="require(`@/assets/images/shortCircle_icon.svg`)" alt="" class="w-8 mt-2 mr-1 md:w-[53px] md:mt-3 xl:hidden">
            <img :src="require(`@/assets/images/shortCircle_icon2.svg`)" alt="" class="xl:w-[85px] xl:mt-5 xl:mx-2 hidden xl:block">
            <h2 class="mr-1">l</h2>
            <h2 class="mr-1">i</h2>
            <img :src="require(`@/assets/images/shortCircle_icon.svg`)" alt="" class="w-8 mt-2 md:w-[53px] md:mt-3 xl:hidden">
            <img :src="require(`@/assets/images/shortCircle_icon2.svg`)" alt="" class="xl:w-[85px] xl:mt-5 xl:mx-2 hidden xl:block">
        </div>
    </div>
</template>

<script>

// import "@lottiefiles/lottie-player"

export default {
    name: "HomePage",

}

</script>

<style>

</style>