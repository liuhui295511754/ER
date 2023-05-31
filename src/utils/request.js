import axios from 'axios'
import store from '@/store/index';
import { router } from '@/router/index'
import {
    MessageBox,
    Message
} from 'element-ui'
import {
    message
} from '@/utils/resetMessage';
import globalUrl from '@/Base.vue'

// create an axios instance
var baseUploadUrl = ""
const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API, // uat打包（npm run testing）生产打包（npm run build）
    // baseURL: 'http://114.116.87.242:9081/',
    // baseURL: 'http://101.201.50.45:8081/',
    // baseURL: "https://zcfront.juran.com.cn:8083/", // url = base url + request url不需要
    baseURL:globalUrl.BASE_URL,
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 600000 // request timeout
})

//post请求添加请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = '/api';
// request interceptor
axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断vuex中是否存在token
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        // if (store.state.token) {
        const token = store.state.token;
        // const token = this.$cookie.get('token');
        token && (config.headers.token = token);
        return config;
        // }
        /*  if (store.getters.token) {
              // 让每个请求携带令牌
              // ['X-Token']是一个自定义头键
              // 请根据实际情况修改
              //  config.headers['X-Token'] = getToken()
              // config.headers['Authorization'] = getToken();

              config.headers = {
                  'token': getToken() || 'token'
              }
          }*/
    },
    error => {
        return Promise.error(error);
        // return Promise.reject(error)
        // console.log(error);
    })

// response interceptor
axios.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
        // 否则的话抛出错误
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。
                case 401:
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                    break;

                // 403 token过期
                // 登录过期对用户进行提示
                // 清除本地token和清空vuex中token对象
                // 跳转登录页面
                case 403:
                    layer.open({
                        title: '警告'
                        , content: '登录过期，请重新登录'
                    });
                    // 清除token
                    localStorage.removeItem('token');
                    store.commit('loginSuccess', null);
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    setTimeout(() => {
                        router.replace({
                            path: '/login',
                            query: {
                                redirect: router.currentRoute.fullPath
                            }
                        });
                    }, 1000);
                    break;

                // 404请求不存在
                case 404:
                    layer.open({
                        title: '警告'
                        , content: '网络请求不存在'
                    });
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    layer.open({
                        title: '警告'
                        , content: error.response.data.message
                    });
            }
            return Promise.reject(error.response);
        }
    })

export default service
