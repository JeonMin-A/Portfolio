<template>
    <div class="mt-[300px] xl:mt-0 xl:py-60 flex flex-col md:flex-row justify-center my-56 gap-x-10 xl:gap-x-20">
        <div class="imogi md:mx-0">
            <img :src="require(`@/assets/images/imogi.svg`)" alt="이모지" class="w-[200px] xl:w-[300px] mx-auto">
        </div>
        <div class="flex justify-center font-semibold mt-14 md:mr-8">
            <h2 class="text-2xl dark:text-white lg:text-5xl xl:text-6xl xl:leading-[65px] tracking-wide mb-3 ">Hey!<br> My Name is Min-A,<br>and I'm a <span class="text-[#179379] dark:text-lime-400 font-bold relative">FE Developer
                <img :src="require(`@/assets/images/hand.svg`)" alt="이모지" class="absolute -right-24 top-2 w-[80px] animate-wiggle-more animate-infinite">
            </span>
            </h2>
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