import axios from "axios";
import { useLoadingStore } from "~/store";
import { notification } from 'ant-design-vue';

export const useApiRequest = () => {
  const runtime = useRuntimeConfig();
  const endPoint = runtime.public.baseURL;
  type NotificationType = 'success' | 'info' | 'warning' | 'error';
  const isLoading = useLoadingStore();

  function getToken() {
    return localStorage.getItem("token");
  }

  function getHeader() {
    let token = getToken();

    return {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Origin": "*",
    };
  }

  function get(url: string, loadingType?: string) {
    if (process.client) {
      let headers = getHeader();
      isLoading.addLoading(loadingType || 'getting');
      url = endPoint + url;
      console.log(url);
      return new Promise(function (resolve, reject) {
        axios
          .get(url, { headers })
          .then((res) => {
            console.log(res, "res");
            isLoading.removeLoading(loadingType || 'getting');
            resolve(res);
          })
          .catch((err) => {
            isLoading.removeLoading(loadingType || 'getting');
            reject(err);
            openNotificationWithIcon(err.response.data.message)
          });
      });
    }
  }

  function post(url: string, data: any = {}, loadingType?: string) {
    console.log(data);
    console.log(data.sort_level)
    let headers = getHeader();
    isLoading.addLoading(loadingType);
    url = endPoint + url;
    return new Promise(function (resolve, reject) {
      axios
        .post(url, data, { headers })
        .then((res) => {
          isLoading.removeLoading(loadingType);
          resolve(res);
        })
        .catch((err) => {
          isLoading.removeLoading(loadingType);
          reject(err);
          openNotificationWithIcon(err.response.data.message)
        });
    });
  }

  function put(url: string, data = {}, loadingType?: string) {
    let headers = getHeader();
    url = endPoint + url;
    isLoading.addLoading(loadingType);
    return new Promise(function (resolve, reject) {
      axios
        .put(url, data, { headers: headers })
        .then((res) => {
          isLoading.removeLoading(loadingType);
          resolve(res);
        })
        .catch((err) => {
          openNotificationWithIcon(err.response.data.message)
          isLoading.removeLoading(loadingType);
          reject(err);
        });
    });
  }

  function delete_req(url: string, loadingType?: string) {
    let headers = getHeader();
    url = endPoint + url;
    isLoading.addLoading(loadingType);
    return new Promise(function (resolve, reject) {
      axios
        .delete(url, { headers: headers })
        .then((res) => {
          isLoading.removeLoading(loadingType);
          resolve(res);
        })
        .catch((err) => {
          isLoading.removeLoading(loadingType);
          openNotificationWithIcon(err.response.data.message)
          reject(err);
        });
    });
  }

  function openNotificationWithIcon(error: string) {
    notification['error']({
      message: 'Error',
      description: error || "Something went wrong",
    });
  };

  return {
    get,
    post,
    put,
    delete_req,
  };
};
