import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据
import store from '@/store/index';
import  { router } from '@/router/index'
import globalUrl from '@/Base.vue'
// 环境的切换
if (process.env.NODE_ENV == 'development') {//开发环境
    axios.defaults.baseURL = globalUrl.BASE_URL
    // axios.defaults.baseURL = 'https://zcmanager.juran.com.cn:8081/';
    // axios.defaults.baseURL = 'http://114.116.87.242:9081/';
    // axios.defaults.baseURL = 'http://101.201.50.45:8081/';
}
else if (process.env.NODE_ENV == 'production') {//生产环境
    if (process.env.type === 'testing') {
        // axios.defaults.baseURL = 'http://114.116.87.242:9081/';
        // axios.defaults.baseURL = 'https://zcmanager.juran.com.cn:8081/';
        // axios.defaults.baseURL = 'http://101.201.50.45:8081/';//测试环境
        axios.defaults.baseURL = globalUrl.BASE_URL
    } else {
        axios.defaults.baseURL = 'https://zcmanager.juran.com.cn:8081/';//生产正式
        // axios.defaults.baseURL = globalUrl.BASE_URL
    }
}
// axios.defaults.withCredentials=true;
//请求超时
axios.defaults.timeout = 60000;

//post请求添加请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//请求拦截
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

// 响应拦截器
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
                        ,content: '登录过期，请重新登录'
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
                        ,content: '网络请求不存在'
                    });
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    layer.open({
                        title: '警告'
                        ,content: error.response.data.message
                    });
            }
            return Promise.reject(error.response);
        }
    })

//封装get方法和post方法
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params){
    return new Promise((resolve, reject) =>{
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)
        })
    });}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params, query) {
    let _query = [] ;
	if(query){
		Object.keys(query).map(it=>{
			if(url.indexOf('{'+it+'}') < 0) return ;
			url = url.replace('{'+it+'}',query[it]) ;
			delete query[it] ;
		}) ;

		Object.keys(query).map(it=>_query.push(it + '=' + encodeURIComponent(query[it]))) ;
		(_query.length > 0)  && (url += (url.indexOf('?') > -1 ? '&' : '?') + _query.join('&')) ;
	}


    return new Promise((resolve, reject) => {
        // axios.post(url, QS.stringify(params))
        axios.post(url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err =>{
                reject(err.data)
            })
    });
}
