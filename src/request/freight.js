import request from '@/utils/request'

/* 获取省列表 */
export const getProvinceList = ()=>{
	return request({
	  url: '/open/api/region/listProvince',
	  method: 'get'
	})
}
/* 获取市列表 */
export const getCityList = (pid)=>{
	return request({
	  url: '/open/api/region/listCity?parentId='+pid,
	  method: 'get'
	})
}
/* 获取物流列表 */
export const getFreightList = (providerId)=>{
	return request({
	  url: '/storeback/transfertemplate/getTransTempList?providerId='+providerId,
	  method: 'post'
	})
}
/* 保存运费信息 */
export const saveAlls = (param)=>{
	return request({
	  url: '/storeback/transfertemplate/saveTransTemp',
	  method: 'post',
	  data:param
	})
}
