import { useApiRequest } from "~/composables";
import { useLoadingStore } from "./loading";
import { useUserStore } from "./users";

export const usePostStore = defineStore("posts", () => {
    const apiRequest = useApiRequest();
    const router = useRouter();
    const isLoading = useLoadingStore();
    const useUser = useUserStore()


    const store = reactive({
        posts: [],
        users: [],
        modal: {
            create: false,
            update: false,
            delete: false,
        },
        post_id: 0,
        comment: [],
        comment_id: 0,
    });

    const create = reactive({
        title: "",
        body: "",
        userId: ""
    });

    function clearData() {
        Object.keys(create).forEach((key) => {
            create[key] = "";
        });
    }

    async function getPosts() {
        const users = await useUser.getUsers();
        store.users = users.data;
        const data = await apiRequest.get(`posts`);
        store.posts = data.data;
        const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
        store.posts?.map((post, index) => {
            if (favourites.includes(post.id)) {
                store.posts[index].isLiked = true;
            } else {
                store.posts[index].isLiked = false;
            }
        });
    }

    const getCommentByPostId = async (postId) => {
        store.comment_id = store.comment_id == postId ? 0 : postId;
        store.post_id = store.post_id == postId ? 0 : postId;
        const data = await apiRequest.get(`comments?postId=${postId}`, 'getComments');
        console.log(data);
        store.comment = data.data;
    };

    const deletePost = async () => {
        await apiRequest.delete_req(`posts/${store.post_id}`, 'deletePost');
        store.posts.map((post, index) => {
            if (post.id == store.post_id) {
                store.posts.splice(index, 1);
            }
        })
        store.modal.delete = false;
    };

    const updatePost = async () => {
        if (!store.modal.update) {
            return createPost();
        }
        create.userId = 1;
        const data = await apiRequest.put(`posts/${store.post_id}`, create, 'updatePost');
        console.log(data);
        store.modal.create = false;
        store.modal.update = false;
        clearData();
        for (let post in store.posts) {
            if (store.posts[post].id == store.post_id) {
                store.posts[post] = data.data;
            }
        }

    };

    const createPost = async () => {
        create.userId = 1;
        const data = await apiRequest.post(`posts`, create, 'createPost');
        console.log(data);
        store.modal.create = false;
        clearData();
        store.posts.unshift(data.data)
    };

    return {
        store,
        create,
        getPosts,
        getCommentByPostId,
        updatePost,
        deletePost,
        createPost,
    };
});
