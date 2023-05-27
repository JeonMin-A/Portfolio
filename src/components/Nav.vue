<template>
    <ul class="sticky top-5 ml-5 z-20">
        <li class="relative text-[20px] dark:text-[#d9d9d9]  mt-4" v-for="(e, index) in NavList[0]" :key="e">
            <button @click="$emit('MenuIndex', 'section-'+(index+1) )" class="text-3xl">{{ e }}</button>
        </li>
    </ul>

    <!-- <div class="w-full h-20 px-[2%] sticky top-0 bg-white py-2.5 z-50 dark:bg-[#333] dark:border-b dark:border-b-[#3a3b3d] dark:text-[#d9d9d9] border-b border-t border-black"> -->
        <div class="">
            <!-- <div class="hidden md:block">
                <ul class="flex justify-around">
                    <li class="relative text-[20px] mt-4" v-for="(e, index) in NavList[0]" :key="e">
                        <button @click="$emit('MenuIndex', 'section-'+(index+1) )">{{ e }}</button>
                    </li>
                </ul>
            </div> -->
            <!-- 
                모바일 햄버거 
            -->
            <div class="manu_bar">
                <font-awesome-icon icon="bars" class="text-3xl cursor-pointer md:hidden absolute right-3 top-5" @click="isOpen = true"  />
            </div>
            <div class="w-72 h-full fixed darkMode bg-gray-100 z-50 p-12 box-border transition-all duration-500 top-0 -right-80 md:hidden" :class="isOpen && '!right-0'">
                <font-awesome-icon icon="times" class="absolute top-5 right-5 text-3xl cursor-pointer md:hidden" @click="isOpen === false ? isOpen = true : isOpen=false" />
                <div class="text-center mt-6">
                    <img src="https://via.placeholder.com/100" alt="img" class="mx-auto rounded-full mb-4">
                    <p>프론트엔드 개발자 전민아</p>
                </div>
                <ul class="mt-12">
                    <li class="py-5 border-b" v-for="(e, index) in NavList[0]" :key="e">
                        <font-awesome-icon :icon="NavList[2][index]" class="mr-2" />
                        <button @click="$emit('MenuIndex', 'section-'+(index+1) )">{{ e }}</button>
                    </li>
                </ul>
                <ul class=" bottom-3 right-3 flex flex-wrap">
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
    <!-- </div> -->
</template>

<script>
export default {
    // 1. 프롭스할 파일을 컴포넌트에 생성, name 작성
    name: "NavPage",
    data() {
        return {
            // 모 아니면 도 , 
            isOpen: false,
            // 6.위에서 nav 반복문 돌려줄거라 데이터 안에 변수 작성, [[ex1],[ex2]] 대괄호 안, ex2는 라우터 시킬 path(주소)임.
            // 프롭스 작동을 할려며 부모 컴포넌트에서 가져온 변수를 프롭스 작성해준다.
            NavList: [["About", "Portfolio", "Contact"], ["/About", "/portfolio", "/Contact"], ["user", "code", "folder-open"]]
        }
    },
}
</script>

<style>

</style>