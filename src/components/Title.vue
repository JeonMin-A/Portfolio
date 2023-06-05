<template>
    <div class="">
        <h3 class="w-[200px] mx-auto text-center text-xl md:text:3xl dark:text-[#d9d9d9] border-t border-b border-black dark:border-gray-300 py-4 uppercase font-semibold"><slot></slot>
        <slot name="subtitle"></slot>
        </h3>
    </div>
</template>


<script>

export default {
    name: "TitlePage",
}

</script>

<style>
    
</style>