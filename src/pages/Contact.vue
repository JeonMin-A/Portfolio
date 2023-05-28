<template>
    <div class="Contact">
        <div class="flex justify-center my-[240px]">
            <div class="Notion mr-48 hover:opacity-70 duration-200">
                <!-- Notion -->
                <a href="https://jeonmin-a.notion.site/FE-9e441af27b1441908ee34ad8ab4136ed" target="_blank" class="Notion">
                    <img :src="require(`@/assets/images/Notion_app_logo.png`)" alt="노션" class="w-56">
                    <h5 class="text-center text-5xl mt-10 dark:text-[#d9d9d9]">Notion</h5>
                </a>
            </div>
            <div class="GitHub hover:opacity-70 duration-200">
                <!-- GitHub -->
                <a href="https://github.com/JeonMin-A" target="_blank" class="GitHub">
                    <img :src="require(`@/assets/images/GitHub_logo.png`)" alt="깃허브" class="w-56">
                    <h5 class="text-center text-5xl mt-10 dark:text-[#d9d9d9]">GitHub</h5>
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