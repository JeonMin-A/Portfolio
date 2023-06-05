<template>
    <Title>about</Title>
    <div class="my-14">
        <div class="relative mb-10">
            <img :src="require(`@/assets/images/circleFrame.svg`)" alt="" class="animate-spin-slow w-[350px] mx-auto">
            <img :src="require(`@/assets/images/profile_img.png`)" alt="" class="rounded-full w-[300px] absolute top-[26px] left-[46px]">
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
    @keyframes marquee{
        from{
    transform: translateX(0);
    }
    to{
    transform: translateX(-50%);
    }
}

    .animated-title{
        font-size: 20px;
        width: 100%;
        margin-top: 60px;
        max-width: 100%;
        border: 1px solid black;
        overflow: hidden;
    }

    .animated-title .track{
        white-space: nowrap;
        will-change: transform;
        animation: marquee 30s linear infinite;
    }

    .animated-title .track .content{
        padding: 30px;
        font-weight: 600;
    }
    
    .animated-title .track .content img{
        width: 17px;
        height: 17px;
        margin-right: 20px;
        margin-left: 20px;
    }
</style>