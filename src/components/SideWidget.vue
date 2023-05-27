<template>
  <div class="">
      <!-- 스크롤 탑 버튼 -->
        <transition name="fade">
          <div id="pagetop" class="fixed hidden md:block lg:block bg-[#333] right-[90px] bottom-5 rounded-full z-[999999] transition duration-1000 darkMode dark:bg-[#d9d9d9]" v-show="scY > 300" @click="toTop">
            <button @click="scrollToTop" class="pt-[10px] pb-[10px] pl-[17px] pr-[17px] opacity-75"><font-awesome-icon class="text-white dark:text-[#333]" icon="fa-solid fa-arrow-up" size="1x" /></button>
          </div>
        </transition>
        <div class="fixed right-10 bottom-6 cursor-pointer">
          <font-awesome-icon :icon="isDark ? 'sun' : 'moon'" class="text-4xl dark:text-[#d9d9d9]" @click="$emit('dark')"/>
        </div>
      <!-- 다크모드 -->
      <div class="">
      </div>
    </div>
</template>

<script>

export default {
    name: "SideWidget",
    data() {
      return {
        scTimer: 0,
        scY: 0,
      }
    },
    props:{
        isDark: Boolean,
        langList: Object
    },
    emits: [
      'dark'
    ],
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
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
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