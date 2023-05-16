<template>
    <div class="w-full px-[2%] sticky top-0 bg-white border border-black py-2.5 z-50 dark:bg-[#333] dark:border-b dark:border-b-[#3a3b3d] dark:text-[#d9d9d9]">
        <div class="max-w-7xl mx-auto flex items-center justify-around">
            <!--  
                상단 메뉴 영역
            -->
            <div class="basis-[30%] hidden md:block">
                <ul class="flex justify-between">
                    <li class="" v-for="(e, index) in NavList[0]" :key="e">
                        <button @click="$emit('MenuIndex', 'section-'+(index+1) )">{{ langList.Nav[index] }}</button>
                    </li>
                </ul>
            </div>
            <button @click="$emit('MenuIndex', 'section-0')" class="basis-[30%]">
                <img src="https://via.placeholder.com/120x50" alt="logo">
            </button>
            <!-- 
                user nav 영역 
            -->
            <div class="basis-[10%] hidden md:block text-right">
                <ul class="flex justify-end">
                    <!-- 다크모드 / 얘는 프롭스 해야됌(클릭이벤트) -->
                    <li class="text-center cursor-pointer mr-5">
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
        </div>
        <!--  
            모바일 시, 사이드 메뉴
        -->
    </div>
    <div class="manu_bar">
        <font-awesome-icon icon="bars" class="text-3xl cursor-pointer md:hidden absolute right-3 top-5" @click="isOpen = true"  />
        <!-- 
            두가지 방법
            @click="isOpen === false ? isOpen = true : isOpen=false"
            @click="isOpen = true" 
        -->
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
            NavList: [["소개", "포트폴리오", "연락"], ["/About", "/portfolio", "/skill"], ["user", "code", "folder-open"]]
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