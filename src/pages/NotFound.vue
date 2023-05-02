<template>
    낫파운드
    <div class="fixed w-full h-full left-0 top-0 z-50 bg-slate-200 flex justify-center items-center px-[2%] box-border">
        <div class="max-w-7xl p-10 bg-white w-full text-center rounded-lg shadow-lg">
            <h3 class="text-[165px] uppercase font-bold mb-12 text-[#262626] ">4<span class="text-[#00b7ff]">0</span>4</h3>
            <p class="text-lg font-normal text-[#151515] mt-0 mb-6">해당 페이지를 찾을 수 없습니다.</p>
            <p class="text-lg font-normal text-[#151515] mt-0 mb-6">아래 버튼을 통해 메인 페이지로 이동하시거나 <span class="font-bold text-xl">{{ count }}초</span>뒤 메인 페이지로 자동 이동 됩니다.</p>
            <router-link :to="'/'" class="py-1 px-10 border rounded transition-all hover:text-white hover:shadow-[inset_-60px_0_0_0_#ffa31b,inset_60px_0_0_0_#ffa31b] duration-500">메인</router-link>
            <!-- tailwindcss - ','콤마 뒤에 띄어쓰기 x  -->

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count: 5
        }
    },
    mounted() {
        this.countDown();
        
    },
    methods: {
        countDown(){
            if(this.count > 0){
                setTimeout(()=>{
                    this.count--;
                    this.countDown()
                }, 1000);
            }else{
                this.$router.replace('/');
            }
        }
    }
} 
</script>
<style>
    
</style>