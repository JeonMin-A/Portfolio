<!-- 부모컴포넌트 -->
<template>
        <!-- <Intro/> -->
    <!-- <NotFound/> -->
    <NavMenu @MenuIndex="SectionMove($event)" @dark="toggleDark()" :isDark="isDark" />
        <div ref="section-1">
            <Home />
        </div>
        <div ref="section-2">
            <About/>
        </div>
        <div ref="section-3">
            <Portfolio/>
        </div>
        <div ref="section-4">
            <Contact/>
        </div>
        <SideWidget @dark="toggleDark()" :isDark="isDark"  />
        <Footer />
</template>

<script>
// import Intro from './pages/Intro.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Portfolio from './pages/Portfolio.vue'
import Contact from './pages/Contact.vue'

// 프롭스할 컴포너를 임포트 
import NavMenu from './components/Nav.vue'
import Footer from './components/Footer.vue'
import Language from './assets/Language.json'
// import SideWidget from './components/SideWidget.vue'



// 7.'@vueuse/core' App.vue에 임포트  
// 스토리지를 이용했던 예전과는 달리 "vueuse/core"를 인스톨하면 다크 모드 구현시 편하게 작동시킬 수 있음.
// {useDark, useToggle} 중괄호 안에 있는 변수명은 'vueuse/core' 안에 디폴트로 담겨 있기 때문에 수정 불가, 오타 주의 
import { useDark, useToggle } from '@vueuse/core'

export default {
    name: 'App',
    components: {
        NavMenu,
        // Intro,
        Home,
        About,
        Portfolio,
        Contact,
        // SideWidget,
        Footer,
    },
    data() {
        return {
            lang: 0,
            isDark: useDark(),
            langList : Language,
            toggleDark: useToggle(useDark()),
            FontStyle: "",
            MenuIndex: 'section-0',
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
        // console.log(this.$refs)

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