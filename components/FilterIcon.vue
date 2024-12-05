<template>
    <div v-if="isActive" class="flex flex-col -space-y-1 min-w-fit">
        <img class="h-4 w-4" src="@/assets/svg/afiltertop.svg" alt="">
        <img class="h-4 w-4 rotate-180" src="@/assets/svg/afiltertop.svg" alt="">
    </div>
    <div v-else class="flex flex-col -space-y-1 min-w-fit">
        <img class="h-4 w-4" src="@/assets/svg/filtertop.svg" alt="">
        <img class="h-4 w-4 rotate-180" src="@/assets/svg/filtertop.svg" alt="">
    </div>
</template>

<script setup>
defineProps({
    isActive: {
        type: Boolean,
        default: false,
    }
})
</script>

<style lang="scss" scoped></style>