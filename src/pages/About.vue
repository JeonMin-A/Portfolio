<template>
    <Title>about</Title>
    <div class="my-14 flex flex-wrap justify-center items-center gap-10">
        <div class="relative mb-10 inline-block">
            <img :src="require(`@/assets/images/circleFrame.svg`)" alt="" class="animate-spin-slow rounded-[120px] w-[300px] overflow-visible mx-auto">
            <img :src="require(`@/assets/images/profile_img.png`)" alt="" class="rounded-full w-[250px] absolute block top-[24px] left-[26px]">
        </div>
        <div class="flex justify-center">
            <div class="text-center">
                <h3 class="uppercase text-3xl font-bold mb-1">jeon min-A</h3>
                <p class="mb-3">2001.11.13 | Daegu</p>
                <p class="mb-3 font-medium">jeonminah01@gmail.com</p>
                <p class="w-[300px] text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illum est libero magni amet exercitationem esse. Doloremque fugit corporis, voluptatum, illo magnam ratione fuga amet adipisci libero rerum nihil itaque!</p>
            </div>
        </div>
    </div>
    <img :src="require(`@/assets/images/clover_icon_bg.svg`)" alt="" class="absolute right-0 w-[150px] top-[1240px] -z-10">
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