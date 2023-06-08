<template>
    <Title >Contact</Title>
    <div class="Contact w-full lg:my-[300px] xl:my-[150px] relative">
        <img :src="require(`@/assets/images/colover_icon3.svg`)" alt="" class="absolute left-0 bottom-48 w-[130px] -z-20 xl:w-[200px] xl:bottom-[50px]">
        <div class="flex justify-center my-[140px]">
            <!-- 3 -->
            <div class="flex flex-col xl:flex-row-reverse">
                <!-- 2 -->
                <div class="flex justify-center mb-20 xl:ml-9">
                    <!-- Notion / 1 -->
                    <div class="Notion hover:opacity-70 duration-200 cursor-pointer mr-10 md:mr-32 xl:mr-10 xl:animation_1">
                        <a href="https://jeonmin-a.notion.site/FE-9e441af27b1441908ee34ad8ab4136ed" target="_blank" class="">
                            <img :src="require(`@/assets/images/Notion_app_logo.png`)" alt="노션" class="w-[150px] md:w-40 lg:w-[300px] xl:w-[210px]">
                            <h5 class="text-center text-xl md:text-4xl mt-5 md:mt-9 dark:text-[#d9d9d9] lg:text-5xl xl:text-3xl">Notion</h5>
                        </a>
                    </div>
                    <!-- GitHub -->
                    <div class="GitHub hover:opacity-70 duration-200 cursor-pointer xl:animation_2">
                        <a href="https://github.com/JeonMin-A" target="_blank" class="">
                            <img :src="require(`@/assets/images/GitHub_logo.png`)" alt="깃허브" class="w-[150px] md:w-40 lg:w-[300px] xl:w-[210px]">
                            <h5 class="text-center text-xl md:text-4xl mt-5 md:mt-9 dark:text-[#d9d9d9] lg:text-5xl xl:text-3xl">GitHub</h5>
                        </a>
                    </div>
                </div>
                <div class="flex justify-center mb-20">
                    <!-- mail -->
                    <div class="mail hover:opacity-70 duration-200 cursor-pointer mr-10 md:mr-32 xl:mr-10 xl:animation_1">
                        <a href="" target="_blank" class="">
                            <img :src="require(`@/assets/images/mail_icon.svg`)" alt="지메일" class=" w-[150px] md:w-40 lg:w-[300px] xl:w-[210px]">
                            <h5 class="text-center text-xl md:text-4xl mt-5 md:mt-9 dark:text-[#d9d9d9] lg:text-5xl xl:text-3xl">Gmail</h5>
                        </a>
                    </div>
                    <!-- openkakao -->
                    <div class="mail hover:opacity-70 duration-200 cursor-pointer xl:animation_2">
                        <a href="https://open.kakao.com/o/sQ9xTLmf" target="_blank" class="">
                            <img :src="require(`@/assets/images/openkakao_icon.svg`)" alt="지메일" class="w-[150px] md:w-40 lg:w-[300px] xl:w-[210px] md:mx-auto">
                            <h5 class="text-center text-xl md:text-4xl mt-5 md:mt-9 dark:text-[#d9d9d9] lg:text-5xl xl:text-3xl">0penKakao</h5>
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
    /* .animation_3 img{
        animation: up-down3 1.4s infinite ease-in-out alternate;
    }
    .animation_4 img{
        animation: up-down4 1.4s infinite ease-in-out alternate;
    } */

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
    /* @keyframes up-down3{
        from{
            transform: translateY(-20px);
        }
        to{
            transform: translateY(0px);
        }
    }
    @keyframes up-down4{
        from{
            transform: translateY(-20px);
        }
        to{
            transform: translateY(0px);
        }
    } */
</style>