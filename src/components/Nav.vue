<!-- 자식컴포넌트 -->
<template>
    <!-- 4.컴포넌트 작성 -->
    <div class="w-full px-[2%] sticky top-0 bg-white py-2.5 z-50 dark:bg-[#333] dark:border-b dark:border-b-[#3a3b3d] dark:text-[#d9d9d9]">
        <div class="max-w-7xl mx-auto flex justify-center md:justify-between items-center">
            <!-- 로고 누르면 상단의 위치 값으로 이동 -->
            <button @click="$emit('MenuIndex', 'section-0')">
                <img src="https://via.placeholder.com/120x50" alt="logo">
            </button>
            <!--  
                상단 메뉴 영역
            -->
            <div class="basis-3/4 hidden md:block">
                <ul class="flex justify-around">
                    <!-- 5. 반복문 설정 -->
                    <li class="relative" v-for="(e, index) in NavList[0]" :key="e">
                        <!-- 변수 설정해서 반복문 돌릴거임,
                        밑에 데이터 안에다가 변수 설정,
                        (e.index)는 변수 설정한 순서대로 출력 될 거라는 뜻 [0]은 대괄호 index를 뜻함,
                        그리고 v-for 반복문은 무조건 :key값을 작성해야 함,
                        {{e}}는 변수 설정한 배열의 데이터들을 출력,
                        라우트를 위해 'to'앞에 ':' 바인딩 해줘야됌.-->
                        <!-- 스크립트 문법/연습 필요 -->

                        <!-- data index값이 필요해서 [index] -->
                        <button @click="$emit('MenuIndex', 'section-'+(index+1) )">{{ langList.Nav[index] }}</button>
                    </li>
                </ul>
            </div>
            <!-- 
                user nav 영역 
            -->
            <div class="basis-1/12 hidden md:block">
                <ul class="flex justify-between">
                    <!-- 다크모드 / 얘는 프롭스 해야됌(클릭이벤트) -->
                    <li class="basis-2/4 text-center cursor-pointer">
                        <!-- 삼항연산자 - isDark라는 변수를 만들어서 참이라면 'sun', 거짓이라면 'moon'의 아이콘을 보이게 한다,
                        isDark라는 변수는 부모 컴포넌트인 App.vue에서 설정된 변수를 자식 컴포넌트 아래에 프롭스를 작성함-->
                        <font-awesome-icon :icon="isDark ? 'sun' : 'moon'" class="text-2xl" @click="$emit('dark')" />
                        <!-- 자식에서 부모로 데이터 전달은 Props를 사용할 수 없고 Emit을 사용, ex) @click="$emit('dark')" 여기서 변수dark는 .toggle("dark")에서 가져옴 -->
                    </li>
                    <!-- 영문 -->
                    <li class="basis-2/4 text-center cursor-pointer relative group">
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