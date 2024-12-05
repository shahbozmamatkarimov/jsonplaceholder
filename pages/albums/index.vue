<template>
    <section>
        <ul class="space-y-4">
            <li v-for="(i, index) in useAlbum.store.albums" class="bg-[#f0f5fa] p-4 rounded-lg relative space-y-2">
                <p>#{{ i.id }}</p>
                <div class="flex items-center gap-3" v-show="user.id == i.userId"
                    v-for="user in useUser.getUserById(i.userId)">
                    <img class="h-10 w-10" src="@/assets/svg/user.svg" alt="">
                    {{ user.name }}
                </div>
                <div @click="openPhotos(i.id)" class="flex items-center hover:underline cp">
                    <h1>{{ i.title }}</h1>
                    <img class="h-5 w-5" src="@/assets/svg/link.svg" alt="">
                </div>
            </li>
        </ul>
    </section>

    <a-modal v-model:open="useAlbum.store.modal.photos" title="Edit album" centered  width="100%" wrap-class-name="full-modal">
        <template #footer>
            <a-button key="back" @click="useAlbum.store.modal.photos = false">Close</a-button>
        </template>
        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
            <img class="rounded-lg" v-for="i in useAlbum.store.photos" :src="i.url" alt="">
        </div>
    </a-modal>
</template>

<script setup>

import { useLoadingStore, useAlbumsStore } from '~/store';
import { useUserStore } from '~/store/users';

const useAlbum = useAlbumsStore();
const useUser = useUserStore()
const isLoading = useLoadingStore();

useAlbum.getAlbums();

function openPhotos(albumId) {
    useAlbum.store.modal.photos = true;
    useAlbum.getAlbumPhotos(albumId);
}
</script>

<style scoped></style>