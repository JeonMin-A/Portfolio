<template>
    <div class="w-full pt-12 mt-16 px-[2%] pb-8">
        <!--  
            타이틀 영역
        -->
        <!-- 메인 css에 다크모드 css를 작성해놓으면 그냥 class에다가 darkMode만 작성하면 됌 -->
        <Title title="소개" />
        <!--  
            본문 영역
        -->
        <div class="max-w-7xl mx-auto">
            <div class="h-auto flex overflow-hidden mt-8 flex-wrap justify-between">
                <div class="basis-full md:basis-[30%] py-12 px-4 bg-white rounded-md darkMode text-center border">
                    <img src="https://via.placeholder.com/300" alt="사진" class="rounded-full block mx-auto">
                    <ul>
                        <li class="pl-5 box-border pt-6">홍길동 / Hong Gil Dong</li>
                        <li class="pl-5 box-border pt-6">1920.01.01</li>
                        <li class="pl-5 box-border pt-6"><a href="mailto:abcd@naver.com">mailto:abcd@naver.com</a></li>
                    </ul>
                    <!-- 해시태그 -->
                    <span class="inline-block h-8 mt-2 mr-1 text-sm border bg-white rounded-2xl align-top leading-[19px] box-border tracking-tighter pt-1.5 px-3 pb-2 shadow-md darkMode">#성실하게</span>
                    <span class="inline-block h-8 mt-2 mr-1 text-sm border bg-white rounded-2xl align-top leading-[19px] box-border tracking-tighter pt-1.5 px-3 pb-2 shadow-md darkMode">#책임감있게_끝까지</span>
                    <span class="inline-block h-8 mt-2 mr-1 text-sm border bg-white rounded-2xl align-top leading-[19px] box-border tracking-tighter pt-1.5 px-3 pb-2 shadow-md darkMode">#꼼꼼히</span>
                    <span class="inline-block h-8 mt-2 mr-1 text-sm border bg-white rounded-2xl align-top leading-[19px] box-border tracking-tighter pt-1.5 px-3 pb-2 shadow-md darkMode">#오늘할일은_오늘끝내자</span>
                </div>
                <!-- 본문 -->
                <div class="basis-full md:basis-[67.5%] mt-8 md:mt-0">
                    <div class="bg-white rounded-md border darkMode p-5 mb-8 last:mb:0" v-for="e in Content" :key="e">
                        <h3 class="text-base md:text-xl mb-4">◆ {{ e.title }}</h3>
                        <p class="mb-2 last:mb-0 text-sm md:text-base" v-if="e.desc"><span class="font-bold">{{ e.desc }}</span>{{ e.desc2 }}</p>
                        <p class="mb-2 last:mb-0 text-sm md:text-base" v-for="(el, index) in e.date" :key="el">{{el}} : {{ e.dateDesc[index]}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Title from '@/components/Title.vue';
export default {
    name: "AboutPage",
    components:{
        Title
    },
    data() {
        return {
            Content: [
                {
                    title: "MIND",
                    desc: '"혼자 부딪혀봐야 온전히 내 것이 된다"',
                    desc2: "는 마인드를 가지고 있어, 혼자 찾아보고 고민하여 문제를 해결하는 것을 좋아합니다."
                },
                {
                    title: "EDUCATION",
                    date: [
                        "2022.12.29 ~ 2023.06.12",
                        "2023.01.01 ~ 2024.01.01"
                    ],
                    dateDesc:[
                        "(디지털컨버전스) 스마트홉합-뷰(Vue) 활용 프론트엔드 개발자 양성과정 B",
                        "xxx 학교 졸업"
                    ]
                },
                {
                    title: "LICENSE",
                    date: [
                        "2022.08", "2022.09", "2022.10"
                    ],
                    dateDesc: [
                        "정보처리산업기사", "운전면허1종보통","컴퓨터활용능력1급"
                    ]
                }
            ]
        }
    },
}
</script>

<style>
    
</style>