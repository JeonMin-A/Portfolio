<template>
    <div class="w-full h-full">
        <div class="max-w-7xl mx-auto pt-40 pb-24 text-center">
            <h1 class="text-[100px]">Portfolio</h1>
            <h5 class="text-4xl">Jeon Min-A</h5>
        </div>
    </div>
</template>

<script>

// import "@lottiefiles/lottie-player"

export default {
    name: "HomePage",
    props:{
        langList : Object
    },
    data() {
        return {
            // text: "안녕하세요", //표시할 텍스트
            // index: 0, //표시할 우측 위치
            // write: true
        };
    },
    computed:{
        // displayText(){
        //     return this.text.substring(0, this.index);
        // },
        // empty(){
        //     return this.index === 0;
        // },
        // full(){
        //     return this.index === this.text.length-1;
        // }
    },
    // 애플리케이션에서 사용할 경우
    methods: {
        // typing(){
        //     // 작성중 (write == true)일 경우 인덱스 증가/ 반대는 감소
        //     if(this.write){
        //         this.index ++;
        //     }else{
        //         this.index --;
        //     // 내용을 다 표시하면 방향을 반대로 변환
        //     }if(this.full){
        //         this.write = false;
        //     }else if(this.empty){
        //         this.write = true;
        //     }
        //     // 계속 같은 작업을 실행하도록 setTimeout 처리
        //     setTimeout(this.typing, 250);
        // },
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