<template>
    <div class="">
        <h3 class="w-full text-center text-3xl dark:text-[#d9d9d9] border-t border-b py-4 uppercase font-semibold">contact</h3>
    </div>
    <div class="Contact w-full lg:my-[300px]">
        <div class="flex justify-around md:justify-center my-[140px]">
            <div class="Notion md:mr-48 hover:opacity-70 duration-200">
                <!-- Notion -->
                <a href="https://jeonmin-a.notion.site/FE-9e441af27b1441908ee34ad8ab4136ed" target="_blank" class="Notion">
                    <img :src="require(`@/assets/images/Notion_app_logo.png`)" alt="노션" class="mx-auto w-20 md:w-40">
                    <h5 class="text-center text-xl md:text-4xl mt-5 md:mt-9 dark:text-[#d9d9d9]">Notion</h5>
                </a>
            </div>
            <div class="GitHub hover:opacity-70 duration-200">
                <!-- GitHub -->
                <a href="https://github.com/JeonMin-A" target="_blank" class="GitHub">
                    <img :src="require(`@/assets/images/GitHub_logo.png`)" alt="깃허브" class="mx-auto w-20 md:w-40">
                    <h5 class="text-center text-xl md:text-4xl mt-5 md:mt-9 dark:text-[#d9d9d9]">GitHub</h5>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
// import Title from '../components/Title.vue'

export default {
    name: "ContactPage"
}
</script>
<style>
    .Notion img{
        animation: up-down1 1.4s infinite ease-in-out alternate;
    }
    .GitHub img{
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