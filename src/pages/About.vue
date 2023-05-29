<template>
    <div class="">
        <h3 class="w-full text-center text-3xl dark:text-[#d9d9d9] border-t border-b py-4 uppercase font-semibold">about</h3>
    </div>
    <div class="w-full h-[1080px]">
        <!-- <div class="hidden relative">sfndsnfksjdnf</div>
        <img :src="require(`@/assets/Portfolio_icon/icon_5.svg`)" class="w-[300px] absolute left-32 top-[2000px]">
        <img :src="require(`@/assets/Portfolio_icon/icon_6.svg`)" class="w-[300px] absolute right-52 top-[3000px]">
        <img :src="require(`@/assets/Portfolio_icon/icon_7.svg`)" class="w-[300px] absolute left-32 top-[4000px]"> -->
    </div>
</template>

<script>
// import Title from '@/components/Title.vue';
export default {
    name: "AboutPage",
    components:{
        // Title
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