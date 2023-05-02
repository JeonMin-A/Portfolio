<template>
    <div class="w-full pt-12 mt-16 px-[2%] pb-8">
        <!-- 
            타이틀 영역
        -->
        <Title title="포트폴리오" />
        <!-- 
            카테고리 영역
        -->
        <div class="max-w-7xl mx-auto mt-8">
            <ul class="flex m-4">
                <!-- 이거 실무에서 많이 사용함, 따로 메모 해놓기 -->
                <li class="mr-4 border darkMode bg-white py-2 px-5 rounded-md">
                    <button @click="CateName = '전체'" :class="CateName === '전체' && 'font-bold text-blue-300'">전체</button>
                </li>
                <!--
                    :class="CateName === e.type && 'font-bold text-blue-800'"
                    :클래스 앞에 바인딩이 있어야 조건이 작동/ ?=참, := 거짓 / 삼항연산자에서 &&면 무조건 참, 거짓은 없음 / 굳이  else까지 적어줄 필요가 없기에 줄인거임
                    :class="CateName === e.type ? 'font-bold text-blue-800' : ''"
                -->
                <li class="mr-4 border darkMode bg-white py-2 px-5 rounded-md" v-for="e in CateList" :key="e">
                    <button @click="CateName = e.type" :class="CateName === e.type && 'font-bold text-blue-800'">{{ e.type }}</button>
                </li>
            </ul>
        </div>
        <!-- 
            본문 영역
        -->
        <div class="max-w-7xl mx-auto mt-8">
            <div v-for="e in CateItem" :key="e" class="bg-white mb-8 pt-12 group px-8 pb-16 rounded-md flex border darkMode flex-wrap">
                <div class="basis-[48%] relative mokup-img group-even:order-1 xl:group-even:order-2">
                    <div v-for="e in 3" :key="e">
                        <!-- 이미지 바인딩 시 백틱 사용 -->
                        <img class="w-full" :src="require(`@/assets/505-images/mokup-${e}.png`)" alt="mokup">
                    </div>
                </div>
                <div class="basis-full md:basis-[52%] pt-10 group-even:order-2 xl:group-even:order-1">
                    <!-- 
                        even = 짝수
                        odd = 홀수
                    -->
                    <h3 class="text-2xl font-bold pt-[10px] pb-[10px] lg:pl-[50px]">
                        {{ e.descTitle }}
                    </h3>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">{{ e.desc }}</p>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">키워드 : <span v-for="el in e.keyword" :key="el" class="mr-2">{{ el }}</span> </p>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">컬러 : <span v-for="el in e.color" :key="el" class="w-5 h-5 inline-block align-middle mr-2" :style="{backgroundColor: `${el}`}"></span> </p>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">폰트 : {{ e.font }}</p>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">사용툴 : <span v-for="el in e.tools" :key="el" class="mr-2 align-middle">{{ el }}</span> </p>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">작업기간 : {{ e.date }}</p>
                    <p class="text-base pt-[10px] pb-[10px] lg:pl-[50px]">기여도 : {{ e.contribution }}</p>
                    <ul class="flex justify-center mt-6">
                        <li v-if="e.progress"><a :href="e.progress" class="py-1 px-8 border rounded-md darkMode text-sm">Progress</a></li>
                        <!-- 
                            v-if="e.progress"
                            v-if="e.progress !== ''"
                            :class="e.progress === '' && 'hidden'" 
                        -->
                        <li v-if="e.original"><a :href="e.original" :class="e.original === '' && 'hidden'" class="py-1 px-8 border rounded-md darkMode text-sm mx-4" target="_blank">Original</a></li>
                        <li v-if="e.redesign"><a :href="e.redesign" :class="e.redesign === '' && 'hidden'" class="py-1 px-8 border rounded-md darkMode text-sm" target="_blank">{{ e.type === 'Publishing' ? 'Clone' : 'Redesign' }}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Title from '../components/Title.vue'
export default {
    name: "PortfolioPage",
    components:{
        Title
    },
    methods: {
        
    },
    computed:{
        CateItem(){
            return this.WorkList.filter((data)=>{
            if(this.CateName !== '전체'){
                return data.type === this.CateName
            }else{
                return data.type
            }
        })
    },
    CateList(){
        return this.WorkList.filter((item,i)=>{
            return(
                this.WorkList.findIndex((item2)=>{
                    return item.type === item2.type
            }) === i
        )
        })
    },
    },
    data() {
        return {
            CateName: "전체",
            WorkList: [
                {
                    "img" : "https//via.placeholder.com/500",
                    "descTitle" : "경남 문화 관광 웹앱",
                    "desc" : "API를 활용한 웹앱 개발",
                    "keyword" : ["#심플함", "#깔끔함", "#tailwind"],
                    "color" : ["lightblue", "lightorange", "navy"],
                    "font": "Noto Sans KR",
                    "tools" : ["PS", "AI", "VS CODE"],
                    "date" : "10일 (기획 1일 / 구상1일 / 제작8일)",
                    "contribution" : "100%",
                    "type" : "Publishing",
                    "progress" : "https//via.placeholder.com/1200x5000",
                    "original" : "https//www.naver.com",
                    "redesign" : "",

                },
                {
                    "img" : "https//via.placeholder.com/500",
                    "descTitle" : "스마트 택배 조회 서비스",
                    "desc" : "웹앱",
                    "keyword" : ["#심플함", "#산뜻함", "애니메이션"],
                    "color" : ["yellow", "green", "darkblue"],
                    "font": "Noto Sans KR",
                    "tools" : ["PS", "AI", "VS CODE"],
                    "date" : "20일 (기획 10일 / 구상5일 / 제작5일)",
                    "contribution" : "100%",
                    "type" : "Wepapp",
                    "progress" : "https//via.placeholder.com/1200x5000",
                    "original" : "",
                    "redesign" : "https//www.kakao.com",

                },
                {
                    "img" : "https//via.placeholder.com/500",
                    "descTitle" : "퍼센테이지 계산기",
                    "desc" : "계산기 웹앱",
                    "keyword" : ["#3d", "#공학적", "#tailwind"],
                    "color" : ["lightgray", "white", "black"],
                    "font": "Noto Sans KR",
                    "tools" : ["PS", "배고프당", "VS CODE"],
                    "date" : "30일 (기획 10일 / 구상10일 / 제작10일)",
                    "contribution" : "100%",
                    "type" : "Publishing",
                    "progress" : "https//via.placeholder.com/1200x5000",
                    "original" : "https//www.naver.com",
                    "redesign" : "https//www.kakao.com",

                },
                {
                    "img" : "https//via.placeholder.com/500",
                    "descTitle" : "날씨 어플",
                    "desc" : "openweather api를 활용한 날씨 어플",
                    "keyword" : ["#깔끔한", "#산뜻한", "#tailwind"],
                    "color" : ["lightblue", "white", "orange"],
                    "font": "Noto Sans KR",
                    "tools" : ["PS", "배고프당", "VS CODE"],
                    "date" : "30일 (기획 10일 / 구상10일 / 제작10일)",
                    "contribution" : "100%",
                    "type" : "Publishing",
                    "progress" : "https//via.placeholder.com/1200x5000",
                    "original" : "https//www.naver.com",
                    "redesign" : "https//www.kakao.com",

                },
                {
                    "img" : "https//via.placeholder.com/500",
                    "descTitle" : "포트폴리오",
                    "desc" : "vue를 활용한 포트폴리오 사이트",
                    "keyword" : ["#3d", "#공학적", "#tailwind"],
                    "color" : ["lightgray", "white", "black"],
                    "font": "Noto Sans KR",
                    "tools" : ["PS", "배고프당", "VS CODE"],
                    "date" : "30일 (기획 10일 / 구상10일 / 제작10일)",
                    "contribution" : "100%",
                    "type" : "Publishing",
                    "progress" : "https//via.placeholder.com/1200x5000",
                    "original" : "https//www.naver.com",
                    "redesign" : "https//www.kakao.com",

                },
                {
                    "img" : "https//via.placeholder.com/500",
                    "descTitle" : "클론코딩",
                    "desc" : "클론코딩",
                    "keyword" : ["#3d", "#공학적", "#tailwind"],
                    "color" : ["lightgray", "white", "black"],
                    "font": "Noto Sans KR",
                    "tools" : ["PS", "배고프당", "VS CODE"],
                    "date" : "30일 (기획 10일 / 구상10일 / 제작10일)",
                    "contribution" : "100%",
                    "type" : "Publishing",
                    "progress" : "https//via.placeholder.com/1200x5000",
                    "original" : "https//www.naver.com",
                    "redesign" : "https//www.kakao.com",

                },
            ]
        }
    },
}
</script>
<style>
    /* 데스크 */
    .mokup-img > div{ position: absolute; overflow: hidden; bottom: 0;}
    .mokup-img > div:nth-child(1){ width: 85%; left: 50%; transform: translateX(-50%);}
    .mokup-img > div:nth-child(1)::after{ content: ""; position: absolute; width: 92%; height: 62%; background: url("../assets/505-images/preview.jpg") center top no-repeat; left: 19px; top: 22px; background-size: cover; transition: 5s;}

    /* 태블릿 */
    .mokup-img > div:nth-child(2){ width: 35%; right: 0;}
    .mokup-img > div:nth-child(2)::after{content: ""; position: absolute; width: 86%; height: 81%; background: url("../assets/505-images/preview.jpg") center top no-repeat; left: 16px; top: 29px; background-size: cover; transition: 5s;}

    /* 모바일 */
    .mokup-img > div:nth-child(3){ width: 23%; left: 0;}
    .mokup-img > div:nth-child(3)::after{content: ""; position: absolute; width: 91%; height: 93%; background: url("../assets/505-images/preview.jpg") center top no-repeat; left: 7px; top: 12px; background-size: cover; transition: 5s; border-radius: 5px;}
    .mokup-img > div:hover::after{background-position: center bottom;}


    /* 반응형 */
    @media screen and (max-width: 1200px) {
        .mokup-img{flex-basis: 100%; height: 500px;}
        .mokup-img > div:nth-child(1){width: 550px;}
        .mokup-img > div:nth-child(2){width: 184px; right: 0;}
        .mokup-img > div:nth-child(3){width: 126px; left: 0;}
        .mokup-img > div:nth-child(1)::after{top: 23px;  height: 62%; left: 21px; width: 87%;}
        .mokup-img > div:nth-child(2)::after{width: 85%; top: 24px;}
    }
    @media screen and (max-width: 640px) {
        .mokup-img{height: 70.3125vw;}
        .mokup-img > div:nth-child(1){width: 100%;}
        .mokup-img > div:nth-child(2){width: 35%;}
        .mokup-img > div:nth-child(3){width: 20%;}
        .mokup-img > div:nth-child(1)::after{width: 92.5%; left: 3.8%; top: 4.7%;}
        .mokup-img > div:nth-child(2)::after{left: 8%; top: 8%;}
        .mokup-img > div:nth-child(3)::after{height: 92.5%; left: 5.5%; top:2.5;}
    }
</style>