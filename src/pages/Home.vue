<template>
    <div class="w-full bg">
        <div class="max-w-7xl mx-auto pt-40 pb-24">
            <div class="flex-wrap flex items-center">
                <div class="basis-full md:basis-2/4 text-center py-3">
                    <p v-html="langList.MainTxt[0]" class="text-green-600 hover:text-green-500 text-2xl lg:text-4xl font-medium lg:font-semibold mb-5 lg:leading-normal leading-snug dark:text-[#d9d9d9]">
                    </p>
                </div>
                <div class="basis-full md:basis-2/4 text-center">
                    <div class="m-3 p-1 lg:p-5">
                        <lottie-player :src="require('@/assets/ani.json')" background="transparent" speed="1" style="max-width: 500px; max-height: 500px;" autoplay loop ></lottie-player>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- typed 테스트 -->
    <!-- <div id="app">
        welcome to
        <span class="typing-wrapper inline-block relative after:content-none">INCODDING</span>
    </div> -->


    
</template>

<script>

import "@lottiefiles/lottie-player"

export default {
    name: "HomePage",
    props:{
        langList : Object
    },
    data() {
        return {
            text: "안녕하세요", //표시할 텍스트
            index: 0, //표시할 우측 위치
            write: true
        };
    },
    computed:{
        displayText(){
            return this.text.substring(0, this.index);
        },
        empty(){
            return this.index === 0;
        },
        full(){
            return this.index === this.text.length-1;
        }
    },
    // 애플리케이션에서 사용할 경우
    methods: {
        typing(){
            // 작성중 (write == true)일 경우 인덱스 증가/ 반대는 감소
            if(this.write){
                this.index ++;
            }else{
                this.index --;
            // 내용을 다 표시하면 방향을 반대로 변환
            }if(this.full){
                this.write = false;
            }else if(this.empty){
                this.write = true;
            }
            // 계속 같은 작업을 실행하도록 setTimeout 처리
            setTimeout(this.typing, 250);
        },
    },
    // 애플리케이션이 마운트(화면부착)후 발생할 작업 코드
    mounted() {
        
    },
}

</script>

<style>
    /* .bg{
        background-image: url("../assets/portfolio.png");
        background: url("../assets/portfolio.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    } */
</style>