<!-- 부모컴포넌트 -->
<template>
    <NotFound/>
    <FontBox :langList="langList[lang]" />
    <!-- 각 메뉴를 클릭 했을 때 고유의 값이 필요해서 작성 -->
    <!-- <NavMenu @click="DarkMode()" /> -->
    
    <!-- 새로고침해도 유지 쌉가능
        11.부모 컴포넌트에서 자식 컴포넌트를 호출 시 자식 컴포넌트 태그 내 ‘v-vind’나 ‘:’콜론 키워드를 통해 데이터를 전달, 
        변수명은 사용했던 변수명 그대로 작성해야 됌
        @dark="toggleDark() - 클릭 하였을 때 사용 -->
        <!-- 이벤트 = 고정된 값 -->
        
        <NavMenu @MenuIndex="SectionMove($event)" :isDark="isDark" @lang="lang=$event" :langList="langList[lang]" @dark="toggleDark()" />


        <!-- 라우터는 App.vue에 작성 -->
        <div ref="section-0">
            <Home :langList="langList[lang]" />
        </div>
        <div ref="section-1">
            <About/>
        </div>
        <div ref="section-2">
            <Skill/>
        </div>
        <div ref="section-3">
            <Portfolio/>
        </div>
        <div ref="section-4">
            <Contact/>
        </div>
        <LoadingSpinner v-if="isLoading"></LoadingSpinner>
    <!-- 
        푸터 영역
        아래 하단부에 들어갈 거라 탬플릿 안, 제일 하단에 푸터를 라우터 시켜야됌
      -->
    <Footer />
    <!-- 스크롤 탑 버튼 -->
    <transition name="fade">
        <div id="pagetop" class="fixed hidden md:block lg:block bg-[#333] right-4 bottom-4 rounded-full z-[999999] transition duration-1000 darkMode dark:bg-[#d9d9d9]" v-show="scY > 300" @click="toTop">
            <button @click="scrollToTop" class="pt-[10px] pb-[10px] pl-[17px] pr-[17px] opacity-75"><font-awesome-icon class="text-white dark:text-[#333]" icon="fa-solid fa-arrow-up" size="1x" /></button>
        </div>
    </transition>
</template>

<script>
import Home from './pages/Home.vue'
import About from './pages/Profile.vue'
import Skill from './pages/Skill.vue'
import Portfolio from './pages/Portfolio.vue'
import Contact from './pages/Contact.vue'

// 프롭스할 컴포너를 임포트 
import NavMenu from './components/Nav.vue'
import Footer from './components/Footer.vue'
import FontBox from './components/FontBox.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import Language from './assets/Language.json'


// 7.'@vueuse/core' App.vue에 임포트  
// 스토리지를 이용했던 예전과는 달리 "vueuse/core"를 인스톨하면 다크 모드 구현시 편하게 작동시킬 수 있음.
// {useDark, useToggle} 중괄호 안에 있는 변수명은 'vueuse/core' 안에 디폴트로 담겨 있기 때문에 수정 불가, 오타 주의 
import { useDark, useToggle } from '@vueuse/core'

export default {
    name: 'App',
    components: {
        // 3. 컴포넌츠에 설정한 작성, component 아니고 component's'임, 오타 주의
        NavMenu,
        Footer,
        FontBox,
        Home,
        About,
        Skill,
        Portfolio,
        Contact,
        LoadingSpinner,
    },
    data() {
        return {
            // 9.데이터 isDark 변수 작성
            // 데이터를 전역을 바뀔려면 앱으로 날려야 됌. 그래서 컴포넌트에서 emit을 사용
            lang: 0,
            isDark: useDark(),
            langList : Language,
            toggleDark: useToggle(useDark()),
            FontStyle: "",
            MenuIndex: 'section-1',
            ArrayList: '',
            scTimer: 0,
            scY: 0,
        }
    },
    methods: {
        handleScroll: function() {
            this.isLoading = true
            if (this.scTimer) return;
            this.scTimer = setTimeout(() => {
                this.scY = window.scrollY;
                clearTimeout(this.scTimer);
                this.scTimer = 0;
            }, 100);
        },
        toTop: function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
        // js문법
        // 8.메소드 안에 다크모드 변수를 작성
        DarkMode() {
            document.querySelector("html").classList.toggle("dark")
        },
        SectionMove(index) {
            this.MenuIndex = index;
            // 크기 위치값
            const rect = this.ArrayList[this.MenuIndex].getBoundingClientRect();
            // console.log(rect)
            const offset = rect.top + window.scrollY - 60;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            })
        }
        
        // scrollTo - 자바 스크립트 기본 메소드, 페이지의 특정 위치로 스크롤이 가능
        // window.scrollTo -(x좌표, y좌표, 행동)
        // bahavioe - 스크롤 동작을 지정 "auto" 기본값 "smooth" 부드러운 애니메이션과 함께 스크롤 
    },
    mounted() {
        this.FontStyle = localStorage.getItem("font");
        document.querySelector("body").classList.add("this.FontStyle");
        this.ArrayList = this.$refs;
        console.log(this.$refs)

        // 영문 시, 새로고침해도 스토리지에 저장
        this.lang = localStorage.getItem("language");
        // 스크롤 탑 버튼
        window.addEventListener('scroll', this.handleScroll);
        this.isLoading = false
    },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: 0.5s;
}

.fade-enter,
.fade-leave-to,
.fade-enter-from {
    /* 스크롤 내리거나 올릴 때 둘다 부드럽게 해주는 것 */
    opacity: 0;
}
</style>