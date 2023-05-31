import axios from "axios";
import globalUrl from '@/Base.vue'

var apiUrl = ''
if (process.env.NODE_ENV == 'development') {//开发环境
    // apiUrl='https://zcmanager.juran.com.cn:8081'
    // apiUrl = 'http://101.201.50.45:8081'
    apiUrl= globalUrl.BASE_URL
}
else if (process.env.NODE_ENV == 'production') {//生产环境
    if (process.env.type === 'testing') {
        // apiUrl= 'https://zcmanager.juran.com.cn:8081/';
        // apiUrl = 'http://101.201.50.45:8081/';//生产测试
        apiUrl= globalUrl.BASE_URL
    } else {
        apiUrl = 'https://zcmanager.juran.com.cn:8081/';//生产正式
        //apiUrl = globalUrl.BASE_URL
    }
}
const uploadURL = `${apiUrl}/upload/file`
const downUrl = `${apiUrl}/download/file`
const downUrl2 = `${apiUrl}/downloadByUrl/file`
const downUrlWater = `${apiUrl}/download/water/file`
const previewUrlWater = `${apiUrl}/preview/water/file`
const exportPurchase = `${apiUrl}/back/order/export`

export default {
    uploadURL,
    downUrl2,
    apiUrl
}
/*
下载文件
* */
export function downFile(id) {
    window.location.href = `${downUrl}?id=` + id
}
export function downFileUrl(url) {
    window.location.href = `${downUrl2}?url=` + url
}
export function downFileWater(id) {
    window.location.href = `${downUrlWater}?id=` + id
}
export function previewFileWater(id) {
    window.open(`${previewUrlWater}?id=` + id)
}
export function PurchaseList(orderType) {
    window.open(`${exportPurchase}?orderType=` + orderType)
}
