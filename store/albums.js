import { useApiRequest } from "~/composables";
import { useUserStore } from "./users";

export const useAlbumsStore = defineStore("albums", () => {
    const apiRequest = useApiRequest();
    const useUser = useUserStore()

    const store = reactive({
        albums: [],
        users: [],
        photos: [],
        modal: {
            photos: false,
        },
        album_id: 0,
        comment: [],
    });

    async function getAlbums() {
        const users = await useUser.getUsers();
        store.users = users.data;
        console.log(store.users)
        const data = await apiRequest.get(`albums`);
        store.albums = data.data;
    }

    async function getAlbumPhotos(id) {
        const data = await apiRequest.get(`albums/${id}/photos`, "photos");
        store.photos = data.data;
    }

    const getCommentByAlbumId = async (albumId) => {
        store.album_id = store.album_id == albumId ? 0 : albumId;
        const data = await apiRequest.get(`comments?albumId=${albumId}`);
        console.log(data);
        store.comment = data.data;
    };

    return {
        store,
        getAlbums,
        getCommentByAlbumId,
        getAlbumPhotos,
    };
});
