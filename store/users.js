import { useApiRequest } from "~/composables";

export const useUserStore = defineStore("users", () => {
    const apiRequest = useApiRequest();

    const store = reactive({
        users: [],
    });

    async function getUsers() {
        return new Promise(async (resolve, reject) => {
            apiRequest.get(`users`, "users").then(res => {
                store.users = res.data
                resolve(res)
            }).catch(err => {
                reject(err);
            })
        })
    }

    // Get user by id
    const getUserById = (userId) => {
        return [store.users.find((user) => user?.id === userId)];
    };

    return {
        store,
        getUsers,
        getUserById,
    };
});
