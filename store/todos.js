import { useApiRequest } from "~/composables";

export const useTodosStore = defineStore("todos", () => {
    const apiRequest = useApiRequest();

    const store = reactive({
        todos: [],
        todo_id: 0,
    });


    async function getTodos() {
        const data = await apiRequest.get(`todos`);
        store.todos = data.data;
    }

    return {
        store,
        getTodos,
    };
});
