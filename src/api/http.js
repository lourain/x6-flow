import Axios from 'axios';
import { Spin, Message } from 'view-design'

Axios.defaults.headers.post['Content-Type'] = 'application/json';
Axios.defaults.timeout = 5000
let loadingTimer; //! 加载timer 为了避免：请求返回值很快时出现的loading闪一下
// 拦截器
Axios.interceptors.request.use((config) => {
  if (!loadingTimer) {
    loadingTimer = setTimeout(() => {
      Spin.show();
    }, 400);
  }
  const reqUrl = config.url
  // 若请求地址不是signIn 则携带token
  if (reqUrl.indexOf('signIn') == -1) {
    config.headers.Authorization = localStorage.riskSys;
  }
  return config;
}, ((err) => {
  return Promise.reject(err);
}));
Axios.interceptors.response.use(response => {
  clearInterval(loadingTimer)
  Spin.hide();
  const data = response.data;
  const { code, error } = data
  if (code !== "0") {
    Message.error({
      content: error.message,
      duration: 5
    })
  }
  return response
}, (err) => {
  Spin.hide();
  Message.error(err.message)
  return Promise.reject(err)
}
)
export default {
  get(url, params, responseType) {
    return new Promise((resolve, reject) => {
      Axios({
        method: 'get',
        url,
        params,
        responseType
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    })

  },
  post(url, data) {
    return new Promise((resolve, reject) => {
      Axios({
        method: 'post',
        url,
        data,
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    })
  },
};
