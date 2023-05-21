<template>
    <div></div>
    <div class="w-full px-[2%] sticky top-0 bg-white py-2.5 z-50 dark:bg-[#333] dark:border-b dark:border-b-[#3a3b3d] dark:text-[#d9d9d9] border-b border-t border-black">
        <div class="max-w-7xl mx-auto flex justify-center md:justify-between items-center">
            <button @click="$emit('MenuIndex', 'section-0')">
                <img src="https://via.placeholder.com/120x50" alt="logo">
            </button>
            <div class="basis-3/4 hidden md:block">
                <ul class="flex justify-around">
                    <li class="relative" v-for="(e, index) in NavList[0]" :key="e">
                        <button @click="$emit('MenuIndex', 'section-'+(index+1) )">{{ langList.Nav[index] }}</button>
                    </li>
                </ul>
            </div>
            <div class="basis-1/12 hidden md:block">
                <ul class="flex justify-between">
                    <li class="basis-2/4 text-center cursor-pointer">
                        <font-awesome-icon :icon="isDark ? 'sun' : 'moon'" class="text-2xl" @click="$emit('dark')" />
                    </li>
                    <li class="basis-2/4 text-center cursor-pointer relative group">
                        <font-awesome-icon icon="globe" class="text-2xl" />
                        <ul class="absolute -left-3 top-10 bg-white w-20 group-hover:border group-hover:h-20 transition-all rounded-md h-0 overflow-hidden">
                            <li @click="$emit('lang', 0); SelectLang(0)" class="pt-3 pb-0 hover:font-bold"><button>한국어 </button></li>
                            <li @click="$emit('lang', 1); SelectLang(1)" class="py-2.5 hover:font-bold"><button>영어 </button></li>
                        </ul>
                    </li>
                </ul>
            </div>
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
    // 1. 프롭스할 파일을 컴포넌트에 생성, name 작성
    name: "NavPage",
    data() {
        return {
            // 모 아니면 도 , 
            isOpen: false,
            // 6.위에서 nav 반복문 돌려줄거라 데이터 안에 변수 작성, [[ex1],[ex2]] 대괄호 안, ex2는 라우터 시킬 path(주소)임.
            // 프롭스 작동을 할려며 부모 컴포넌트에서 가져온 변수를 프롭스 작성해준다.
            NavList: [["소개", "스킬", "포트폴리오", "연락처"], ["/About", "/skill", "/portfolio", "/Contact"], ["user", "code", "folder-open"]]
        }
    },
    props:{
        isDark: Boolean,
        langList: Object
    },
    methods:
    // 동작 전 기능 / 위에서 메소드를 호출해야 실행 가능
    {
        SelectLang(index){
            localStorage.setItem("language", index);
        }
    },
}
</script>

<style>

</style>