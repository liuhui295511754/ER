/* ---------库存管理---------- */
import request from '@/utils/request'
//新品类列表
export function classifyTypeTreeList(data){
	return request({
	  url: '/goods/category/new/tree?productType='+data,
	  method: 'post',
	  data:data
	})
  }
