<template>
    <section>
        <ul class="space-y-4">
            <li v-for="(i, index) in useTodo.store.todos" class="bg-[#f0f5fa] p-4 rounded-lg flex gap-2">
                <a-checkbox v-model:checked="i.completed"></a-checkbox>
                <p>#{{ i.id }}</p>
                <h1 class="font-semibold max-w-[90%]" :class="i.completed ? 'line-through' : ''">{{ i.title }}</h1>
            </li>
        </ul>
    </section>
</template>

<script setup>

import { useLoadingStore, useTodosStore } from '~/store';

const useTodo = useTodosStore();
const isLoading = useLoadingStore();
useTodo.getTodos();
</script>

<style scoped></style>