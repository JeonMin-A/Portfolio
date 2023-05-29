<template>
    <div class="w-full bg-white dark:bg-[#1d1c21] dark:text-[#d9d9d9] py-4 text-center text-xs">
        <div class="mx-5">
            <img :src="require(`@/assets/images/openkakao_qrcode.png`)" alt="오픈카카오톡큐알코드" class="w-[130px] absolute ml-5 hidden md:block md:w-[90px] md:ml-1">
        </div>
        <div class="top md:my-5">
            <p class="mb-3">본 사이트의 모든 컨텐츠는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었음을 알려드립니다.</p>
            <p class="mb-3">This website's content is created for personal portfolio purposes and not for commercial use.</p>
            <p class="mb-3 md:mb-2">jeonminah01@gmail.com</p>
        </div>
        <div class="bottom text-[10px] border-t border-t-[#777]">
            <p class="mt-3">ⓒ 2023. Jeon Min-A all rights reserved.</p>
            <p class="text-[#999] dark:text-[#555]">LastUpdate : 2023.05.29</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterPage"
}
</script>

<style>
    
</style>