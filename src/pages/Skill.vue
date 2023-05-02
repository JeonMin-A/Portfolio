<template>
    <div class="w-full pt-12 mt-16 px-[2%] pb-8">
        <!-- 
            타이틀 영역
        -->
        <Title title="기술" />
        
        <div class="max-w-7xl mx-auto mt-8">
            <div class="bg-white rounded-md border darkMode p-5 mb-8 last:mb-0">
                <div class="w-full h-20" v-for="e in ProgressList" :key="e">
                    <div class="w-full h-5 bg-[#e0e0e0] rounded-[50px]">
                        <div class="h-full bg-slate-400 dark:bg-slate-700 duration-1000 ease-in-out rounded-[50px] text-right relative mb-3 first:mt-10" :style="{width:`${e.progressBefore}%`}">
                            <p class="absolute -top-6 md:-top-7 left-1 text-sm md:text-lg">{{ e.textList }}</p>
                            <span class="text-sm pr-2 relative -top-0.5">{{e.progressBefore}}%</span>
                        </div>
                        <p class="text-sm md:text-base">{{ e.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Title from '../components/Title.vue'

export default {
    name: "SkillPage",
    components:{
        Title
    },
    data() {
        return {
            ProgressList: [
                {
                    textList: "HTML",
                    progressBefore: 0,
                    progressAfter: 80,
                    desc: "1웹표준에 준수하여, 마크업을 할 수 있다. float이 아닌 flex 및 grid를 활용한 레이아웃을 구성할 수 있다."
                },{
                    textList: "CSS",
                    progressBefore: 0,
                    progressAfter: 80,
                    desc: "2웹표준에 준수하여, 마크업을 할 수 있다. float이 아닌 flex 및 grid를 활용한 레이아웃을 구성할 수 있다."
                },
                {
                    textList: "js",
                    progressBefore: 0,
                    progressAfter: 70,
                    desc: "3웹표준에 준수하여, 마크업을 할 수 있다. float이 아닌 flex 및 grid를 활용한 레이아웃을 구성할 수 있다."
                },
                {
                    textList: "jquery",
                    progressBefore: 0,
                    progressAfter: 60,
                    desc: "4웹표준에 준수하여, 마크업을 할 수 있다. float이 아닌 flex 및 grid를 활용한 레이아웃을 구성할 수 있다."
                },
                {
                    textList: "Vue",
                    progressBefore: 0,
                    progressAfter: 70,
                    desc: "5웹표준에 준수하여, 마크업을 할 수 있다. float이 아닌 flex 및 grid를 활용한 레이아웃을 구성할 수 있다."
                },
                {
                    textList: "React",
                    progressBefore: 0,
                    progressAfter: 50,
                    desc: "6웹표준에 준수하여, 마크업을 할 수 있다. float이 아닌 flex 및 grid를 활용한 레이아웃을 구성할 수 있다."
                },
            ]
        }
    },
    mounted() {
        this.ProgressList.forEach((e)=>{
            setTimeout(()=>{
                e.progressBefore = e.progressAfter
            },500);
        })
    },
}
</script>
<style>
    
</style>