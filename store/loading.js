import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", () => {
  const router = useRouter();

  const store = reactive({
    loadingTypes: ['getting'],
    isLogin: false,
    middleware: true,
    errorMessage: {},
    pagination: {
      current_page: router.currentRoute.value.query.page
        ? router.currentRoute.value.query.page
        : 1,
      total: null,
      last_page: 1,
      per_page: 10,
      from: "",
      to: "",
    },
    drawer: false,
    logout: false,
  });

  const user = reactive({
    id: 0
  })

  const modal = reactive({
    create: false,
    edit: false,
    delete: false,
  });

  function addLoading(type) {
    if (!store.loadingTypes?.includes(type)) {
      store.loadingTypes.push(type);
    }
  }

  function removeLoading(type) {
    if (store.loadingTypes?.includes(type)) {
      store.loadingTypes = store.loadingTypes?.filter(
        (loading) => loading !== type
      );
    }
  }

  function isLoadingType(type) {
    return store.loadingTypes?.includes(type);
  }

  //   function changeQuery(type, query) {
  //     if (store.page_name == "group" && type != "page") {
  //       router.currentRoute.value.query.page = 1;
  //     }

  //     const currentQueries = { ...router.currentRoute.value.query };
  //     currentQueries[type] = query;
  //     let url = "?";
  //     let t = 0;
  //     for (let i in currentQueries) {
  //       if (currentQueries[i]) {
  //         if (t) {
  //           url += "&";
  //         }
  //         url += `${i}=${currentQueries[i]}`;
  //         t++;
  //       }
  //     }
  //     router.push(url);
  //   }

  //   function parseTextToLink(text) {
  //     // Regular expression to detect URLs
  //     const urlPattern = /(https?:\/\/[^\s]+)/g;
  //     // Replace detected URL with a clickable link
  //     const newText = text.replace(urlPattern, '<a href="$&" target="_blank">$&</a>');
  //     // Update the content with the new HTML
  //     return newText;
  //   }

  //   function copyLink(copyText, text) {
  //     navigator.clipboard.writeText(copyText);
  //     showMessage(text);
  //   }

  // function checkCurrentUrl() {
  //   const front_url =
  //     typeof window !== "undefined"
  //       ? window?.location.protocol + "//" + window?.location?.host
  //       : "";
  //   console.log(front_url, 'front_url')
  //   if (front_url.includes("localhost") || front_url.includes("demo")) {
  //     store.baseUrl = localBaseURL;
  //   } else {
  //     store.baseUrl = baseURL;
  //   }
  //   return store.baseUrl;
  // }

  return {
    store,
    user,
    modal,
    addLoading,
    removeLoading,
    isLoadingType,
  };
});
