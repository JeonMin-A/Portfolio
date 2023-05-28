<template>
    <div class="flex h-[1080px] justify-center mt-56">
        <div class="imogi">
            <img :src="require(`@/assets/images/imogi.svg`)" alt="이모지" class="w-[200px]">
        </div>
        <div class="text mt-14 ml-10">
            <h1 class="text-5xl dark:text-white">
                안녕하세요!<br><span class="text-green-800 dark:text-green-400 font-bold">FE개발자</span> 전민아입니다.
            </h1>
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