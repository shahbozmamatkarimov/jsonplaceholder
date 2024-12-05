<template>
  <header>
    <nav class="bg-white sticky top-0 z-50 pb-2 bg-opacity-0 backdrop-blur-lg px-5 w-full">
      <div class="flex items-center justify-between py-4">
        <router-link class="text-xl font-semibold" to="/">{JSON}</router-link>
        <div class="flex gap-4 font-semibold text-lg">
          <router-link to="/">Posts</router-link>
          <router-link to="/albums">Albums</router-link>
          <router-link to="/todos">Todos</router-link>
        </div>
      </div>

      <form>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <img class="" src="@/assets/svg/search.svg" alt="">
          </div>
          <input v-model="store.searchInput" @input="searchOptioin" type="search" id="search"
            class="block w-full p-4 !pl-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
            placeholder="Search..." required />
          <a-select class="text-white absolute max-w-[100px] right-0 top-0" v-model:value="store.searchValue"
            show-search placeholder="Select a person" style="width: 200px" @focus="handleFocus" @blur="handleBlur"
            @change="handleChange">
            <a-select-option class="capitalize" :value="key" :label="value"
              v-for="(value, key) in filterOptions[router.currentRoute.value.name]">{{ value }}</a-select-option>
          </a-select>
        </div>
      </form>
    </nav>
    <main class="px-5">
      <ul
        class="flex items-center gap-5 font-semibold uppercase bg-[#f9fafb] p-4 my-2 rounded-lg cpall overflow-hidden overflow-x-auto space-x-5 !max-w-[calc(100vw_-_40px)]">
        <li @click="filterOption(key)" class="fflex gap-2"
          v-for="(value, key) in filterOptions[router.currentRoute.value.name]">
          {{ value }}
          <FilterIcon :isActive="true" />
        </li>
      </ul>
      <div class="space-y-5" v-if="isLoading.isLoadingType('getting')">
        <LoadingDiv v-for="i in 10" class="w-full h-14 max-h-[48px]" />
      </div>
      <div v-show="!isLoading.isLoadingType('getting')">
        <slot />
      </div>
    </main>
  </header>
</template>

<script setup>
import { useAlbumsStore, useLoadingStore, usePostStore, useTodosStore } from '~/store';

const isLoading = useLoadingStore();
const useAlbum = useAlbumsStore();
const useTodo = useTodosStore();
const usePost = usePostStore();
const router = useRouter();

const store = reactive({
  searchInput: "",
  searchValue: 'id',
  oldValue: [],
  newOldValue: [],
  usersStore: [],
})

// Mapping filter options for different pages
const filterOptions = {
  index: { id: 'id', title: 'title', name: 'name', isLiked: 'favorites' },
  albums: { id: 'id', title: 'title', name: 'name' },
  todos: { id: 'id', title: 'title' },
};

// Map pages and store items
const filterPage = {
  index: [usePost, 'posts'],
  albums: [useAlbum, 'albums'],
  todos: [useTodo, 'todos'],
}

// Filter by ASC and DESC
function filterOption(option) {
  let [currentStore, currentPage] = filterPage[router.currentRoute.value.name];
  currentPage = option === 'name' ? 'users' : currentPage;
  const data = currentStore.store[currentPage] || [];

  // Determine sort direction
  const sortAscending = data[0][option] > data[data.length - 1][option];
  currentStore.store[currentPage] = [...data].sort((a, b) =>
    typeof a[option] === 'string'
      ? sortAscending ? a[option].localeCompare(b[option]) : b[option].localeCompare(a[option])
      : sortAscending ? a[option] - b[option] : b[option] - a[option]
  );

  // Filter items if searching by user 'name'
  if (option == 'name') {
    let items = []
    for (let user of currentStore.store[currentPage]) {
      for (let item of currentStore.store[filterPage[router.currentRoute.value.name][1]]) {
        if (item.userId == user.id) {
          items.push(item);
        }
      }
    }
    currentStore.store[filterPage[router.currentRoute.value.name][1]] = items
  }
}

function searchOptioin() {
  const val = store.searchInput?.toLowerCase().trim() || '';
  let [currentStore, currentPage] = filterPage[router.currentRoute.value.name];
  currentPage = store.searchValue === 'name' ? 'users' : currentPage;

  // Save old data
  if (!store.oldValue?.length) {
    store.oldValue = currentStore.store[currentPage];
  } else if (store.oldValue.length) {
    currentStore.store[currentPage] = store.oldValue;
  }

  if (!store.newOldValue?.length) {
    store.newOldValue = currentStore.store[filterPage[router.currentRoute.value.name][1]];
  } else if (store.newOldValue.length) {
    currentStore.store[filterPage[router.currentRoute.value.name][1]] = store.newOldValue;
  }

  if (!store.usersStore?.length) {
    store.usersStore = currentStore.store.users;
  } else {
    currentStore.store.users = store.usersStore;
  }

  // Filter by input value
  let searched = [];
  for (let i of currentStore.store[currentPage]) {
    if (String(i[store.searchValue]).toLowerCase().includes(val)) {
      searched.push(i);
    }
  }
  currentStore.store[currentPage] = searched;

  // Filter items if searching by user 'name'  
  if (store.searchValue == 'name') {
    let items = []
    for (let user of currentStore.store[currentPage]) {
      for (let item of currentStore.store[filterPage[router.currentRoute.value.name][1]]) {
        if (item.userId == user.id) {
          items.push(item);
        }
      }
    }
    currentStore.store[filterPage[router.currentRoute.value.name][1]] = items
  }
}

// Watch route changes to reset search and filter states
watch(() => router.currentRoute.value, () => {
  store.searchValue = 'id';
  store.oldValue = [];
  store.newOldValue = [];
  store.searchInput = "";
})

// Watch search value changes
watch(() => store.searchValue, () => {
  store.searchInput = "";
  searchOptioin()
})
</script>

<style scoped></style>
