<template>
    <section>
        <ul class="space-y-4">
            <li @click="postEdit(null, 'create')">
                <button class="border border-[#59ACFF] w-full fflex p-5 rounded-lg">
                    <img src="@/assets/svg/add.svg" alt="">
                </button>
            </li>
            <li v-for="(i, index) in usePost.store.posts" class="bg-[#f0f5fa] p-4 rounded-lg relative space-y-2">
                <p>#{{ i.id }}</p>
                <div class="flex items-center gap-3" v-show="user.id == i.userId"
                    v-for="user in useUser.getUserById(i.userId)">
                    <img class="h-10 w-10" src="@/assets/svg/user.svg" alt="">
                    {{ user.name }}
                </div>
                <h1 class="font-semibold max-w-[90%]">{{ i.title }}</h1>
                <p class="max-w-[90%]">{{ i.body }}</p>
                <div class="flex items-center gap-4 justify-end cpall">
                    <img @click="usePost.getCommentByPostId(i.id)" src="@/assets/svg/message.svg" alt="">
                    <img @click="postEdit(i)" src="@/assets/svg/edit.svg" alt="">
                    <img @click="postEdit(i.id, 'delete')" src="@/assets/svg/delete.svg" alt="">
                    <img v-if="i.isLiked" @click="addFavourites(i.id, index)" class="absolute top-4 right-4"
                        src="@/assets/svg/alike.svg" alt="">
                    <img v-else @click="addFavourites(i.id, index)" class="absolute top-4 right-4"
                        src="@/assets/svg/like.svg" alt="">
                </div>
                <ul v-if="usePost.store.comment_id == i.id">
                    <li v-for="comment in usePost.store.comment">
                        <div class="flex items-center gap-3">
                            <img class="h-5 w-5" src="@/assets/svg/user.svg" alt="">
                            {{ comment.email }}
                        </div>
                        <p class="pl-8 font-semibold">{{ comment.name }}</p>
                        <a-typography-paragraph class="pl-8" :ellipsis="{ rows: 2, expandable: true, symbol: 'more' }"
                            :content="comment.body" />
                    </li>
                </ul>
            </li>
        </ul>
    </section>

    <a-modal v-model:open="usePost.store.modal.create"
        :title="(usePost.store.modal.update ? 'Update' : 'Create') + ' post'" centered>
        <template #footer>
            <a-button key="back" @click="handleCancel">Calcel</a-button>
            <a-button @click="usePost.updatePost" key="submit" type="primary"
                :loading="isLoading.isLoadingType('updatePost') || isLoading.isLoadingType('createPost')">{{
                    usePost.store.modal.update ? 'Update' :
                'Create' }}</a-button>
        </template>
        <div class="space-y-5">
            <FloatingInput :id="'title'" :maxValue="50" class="w-full" :type="'text'" v-model="usePost.create.title"
                :label="'Title'" required />
            <a-textarea v-model:value="usePost.create.body" placeholder="Description"
                :auto-size="{ minRows: 2, maxRows: 10 }" />
        </div>
    </a-modal>

    <a-modal v-model:open="usePost.store.modal.delete" title="Delete post" centered>
        <template #footer>
            <a-button key="back" @click="handleCancel">Calcel</a-button>
            <a-button @click="usePost.deletePost" key="submit" type="primary"
                :loading="isLoading.isLoadingType('deletePost')">Delete</a-button>
        </template>
        <div class="space-y-5">
            <h1>Are you sure you want to delete this</h1>
        </div>
    </a-modal>
</template>

<script setup>

import { useLoadingStore, usePostStore } from '~/store';
import { useUserStore } from '~/store/users';

const usePost = usePostStore();
const useUser = useUserStore()
const isLoading = useLoadingStore();
usePost.getPosts();

function postEdit(postId, type) {
    usePost.store.modal.update = true;
    type == 'delete' ? usePost.store.modal.delete = true : usePost.store.modal.create = true;
    usePost.store.post_id = postId
    if (type == 'create' || type == 'delete') {
        usePost.store.modal.update = false
    } else {
        for (let i in usePost.create) {
            usePost.create[i] = postId[i];
        }
        usePost.store.post_id = postId.id
    }
}

function addFavourites(postId, index) {
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
    if (favourites.includes(postId)) {
        favourites.splice(favourites.indexOf(postId), 1)
    } else {
        favourites.push(postId);
    }
    localStorage.setItem('favourites', JSON.stringify(favourites));
    usePost.store.posts[index].isLiked = !usePost.store.posts[index]?.isLiked;

}
</script>

<style scoped></style>