<template>
    <div class="fixed left-0 top-2/4 -translate-y-2/4 z-50">
        <div class="bg-white darkMode p-3 text-center absolute cursor-pointer mt-7 transition-all duration-500 left-0 border-2" :class="isOpen && 'left-36'">
            <!-- 아이콘 -->
            <font-awesome-icon icon="font" @click="isOpen === false ? isOpen = true : isOpen=false" /> 
        </div>
        <!-- 폰트선택 -->
        <ul class="absolute w-36 -left-36 bg-white darkMode duration-500 transition-all" :class="isOpen && '!left-0'">
            <li v-for="(e, index) in FontList" :key="e" class="cursor-pointer text-center py-2 border text-sm" :class="e.font" @click="this.FontSelect(index)" @mouseover="FontView(index)" @mouseout="FontRemove(index)" >{{ langList.FontTxt[index] }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "FontBox",
    props:{
        langList: Object
    },
    data() {
        return {
            isOpen: false,
            FontList:[
                {
                    title: "NotoSansKR",
                    font: "ns"
                },
                {
                    title: "나눔스퀘어 네오",
                    font: "nanum"
                },
                {
                    title: "에스코어드림",
                    font: "scoredream"
                },
                {
                    title: "수박화채",
                    font: "efwm"
                },
            ]
        }
    },
    methods: {
        FontSelect(index){
            console.log(index)
            document.querySelector("body").classList = []
            document.querySelector("body").classList.add(this.FontList[index].font);
            // 로컬스토리지는 실무에서 많이 사용하기 때문에 꼭 연습하기
            localStorage.setItem("font", this.FontList[index].font)
        },
        FontView(index){
            document.querySelector("body").style.fontFamily = this.FontList[index].font;
        },
        FontRemove(){
            document.querySelector("body").style = [];
        },
    },
}
</script>
<style>
    
</style>