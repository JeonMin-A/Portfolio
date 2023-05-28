<template>
    <div class="flex flex-col md:flex-row justify-center my-56">
        <div class="imogi mx-auto">
            <img :src="require(`@/assets/images/imogi.svg`)" alt="이모지" class="w-[200px]">
        </div>
        <div class="text mt-14">
            <h1 class="text-3xl text-center dark:text-white">
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