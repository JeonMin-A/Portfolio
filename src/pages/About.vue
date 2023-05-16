<template>
  <div class="w-full px-[2%] sticky top-0 bg-white border border-black py-2.5 z-50 dark:bg-[#333] dark:border-b dark:border-b-[#3a3b3d] dark:text-[#d9d9d9]">
        <div class="max-w-7xl mx-auto flex items-center">
            <!--  
                상단 메뉴 영역
            -->
            <div class="hidden md:block">
                <ul class="flex">
                    <li class="" v-for="(e, index) in NavList[0]" :key="e">
                        <button @click="$emit('MenuIndex', 'section-'+(index+1) )">{{ langList.Nav[index] }}</button>
                    </li>
                </ul>
            </div>
            <button @click="$emit('MenuIndex', 'section-0')">
                <img src="https://via.placeholder.com/120x50" alt="logo">
            </button>
            <!-- 
                user nav 영역 
            -->
            <div class="hidden md:block">
                <ul class="flex">
                    <!-- 다크모드 / 얘는 프롭스 해야됌(클릭이벤트) -->
                    <li class="text-center cursor-pointer">
                        <font-awesome-icon :icon="isDark ? 'sun' : 'moon'" class="text-2xl" @click="$emit('dark')" />
                    </li>
                    <!-- 영문 -->
                    <li class="text-center cursor-pointer relative group">
                        <font-awesome-icon icon="globe" class="text-2xl" />
                        <ul class="absolute -left-3 top-10 bg-white w-20 group-hover:border group-hover:h-20 transition-all rounded-md h-0 overflow-hidden">
                            <li @click="$emit('lang', 0); SelectLang(0)" class="pt-3 pb-0 hover:font-bold"><button>한국어 </button></li>
                            <li @click="$emit('lang', 1); SelectLang(1)" class="py-2.5 hover:font-bold"><button>영어 </button></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!--  
                모바일 시, 사이드 메뉴
            -->
            <div class="manu_bar">
                <font-awesome-icon icon="bars" class="text-3xl cursor-pointer md:hidden absolute right-3 top-5" @click="isOpen = true"  />
                <!-- 
                    두가지 방법
                    @click="isOpen === false ? isOpen = true : isOpen=false"
                    @click="isOpen = true" 
                -->
            </div>
            <!-- 조건문 -->
            <!-- 클래스 바인딩 -->
            <div class="w-72 h-full fixed darkMode bg-gray-100 z-50 p-12 box-border transition-all duration-500 top-0 -right-80 md:hidden" :class="isOpen && '!right-0'">
                <font-awesome-icon icon="times" class="absolute top-5 right-5 text-3xl cursor-pointer md:hidden" @click="isOpen === false ? isOpen = true : isOpen=false" />
                <!-- 
                    두가지 방법
                    @click="isOpen === false ? isOpen = true : isOpen=false"
                    @click="isOpen = false" 
                -->
                <div class="text-center mt-6">
                    <img src="https://via.placeholder.com/100" alt="img" class="mx-auto rounded-full mb-4">
                    <p>프론트엔드 개발자 전민아</p>
                </div>
                <ul class="mt-12">
                    <!-- <li class="py-5 border-b" v-for="(e, index) in NavList[0]" :key="e"> -->
                    <!-- </li> -->
                    <li class="py-5 border-b" v-for="(e, index) in NavList[0]" :key="e">
                        <font-awesome-icon :icon="NavList[2][index]" class="mr-2" />
                        <button @click="$emit('MenuIndex', 'section-'+(index+1) )">{{ langList.Nav[index] }}</button>
                    </li>
                </ul>
                <ul class=" bottom-3 right-3 flex flex-wrap">
                    <li class="mr-3">
                        <font-awesome-icon :icon="isDark ? 'sun' : 'moon'" class="text-2xl" @click="$emit('dark')" />
                    </li>
                    <li>
                        <font-awesome-icon icon="globe" class="text-2xl" />
                    </li>
                </ul>
                <ul class="bottom-3 right-64">
                    <li>
                        <a href="https://github.com/JeonMina-A"><font-awesome-icon icon="fa-brands fa-github" class="text-2xl" /></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "AboutPage",
}
</script>

<style>

</style>