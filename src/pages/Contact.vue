<template>
    <Title >Contact</Title>
    <div class="Contact w-full lg:my-[300px] relative">
        <img :src="require(`@/assets/images/colover_icon3.svg`)" alt="" class="absolute left-0 bottom-48 w-[130px] -z-20">
        <div class="flex justify-center my-[140px]">
            <div class="flex-col">
                <div class="flex mb-20">
                    <!-- openkakao -->
                    <div class="mail md:mr-48 hover:opacity-70 duration-200 mr-5 cursor-pointer">
                        <a href="https://open.kakao.com/o/sQ9xTLmf" target="_blank" class="md:animation_2">
                            <img :src="require(`@/assets/images/openkakao_icon.svg`)" alt="지메일" class="w-[150px] md:w-40 lg:w-[300px]">
                            <h5 class="text-center text-xl md:text-4xl mt-5 md:mt-9 dark:text-[#d9d9d9] lg:text-5xl">0penKakao</h5>
                        </a>
                    </div>
                    <!-- mail -->
                    <div class="mail md:mr-48 hover:opacity-70 duration-200 cursor-pointer">
                        <a href="" target="_blank" class="md:animation_2">
                            <img :src="require(`@/assets/images/mail_icon.svg`)" alt="지메일" class="w-[150px] md:w-40 lg:w-[300px]">
                            <h5 class="text-center text-xl md:text-4xl mt-5 md:mt-9 dark:text-[#d9d9d9] lg:text-5xl">Gmail</h5>
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <!-- Notion -->
                    <div class="Notion md:mr-48 hover:opacity-70 duration-200 mr-5 cursor-pointer">
                        <a href="https://jeonmin-a.notion.site/FE-9e441af27b1441908ee34ad8ab4136ed" target="_blank" class="md:animation_1">
                            <img :src="require(`@/assets/images/Notion_app_logo.png`)" alt="노션" class="w-[150px] md:w-40 lg:w-[300px]">
                            <h5 class="text-center text-xl md:text-4xl mt-5 md:mt-9 dark:text-[#d9d9d9] lg:text-5xl">Notion</h5>
                        </a>
                    </div>
                    <!-- GitHub -->
                    <div class="GitHub hover:opacity-70 duration-200 cursor-pointer">
                        <a href="https://github.com/JeonMin-A" target="_blank" class="md:animation_2">
                            <img :src="require(`@/assets/images/GitHub_logo.png`)" alt="깃허브" class="w-[150px] md:w-40 lg:w-[300px]">
                            <h5 class="text-center text-xl md:text-4xl mt-5 md:mt-9 dark:text-[#d9d9d9] lg:text-5xl">GitHub</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Title from '../components/Title.vue'

export default {
    name: "ContactPage",
    components: {
        Title
    }
}
</script>
<style>
    .animation_1 img{
        animation: up-down1 1.4s infinite ease-in-out alternate;
    }
    .animation_2 img{
        animation: up-down2 1.4s infinite ease-in-out alternate;
    }

    @keyframes up-down1{
        from{
            transform: translateY(0px);
        }
        to{
            transform: translateY(-20px);
        }
    }
    @keyframes up-down2{
        from{
            transform: translateY(-20px);
        }
        to{
            transform: translateY(0px);
        }
    }
</style>