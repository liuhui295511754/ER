/**
 * api接口统一管理
 */
import { get, post } from "./http";
import request from "@/utils/request";
/*获取验证码*/
export const loginImg = p => get("/login/img", p);

/*登录*/
export const login = p => post("/login", p);

/*获取左侧导航栏*/
export const getMenus = p => post("/login/menu", p);

/*查看登录用户信息*/
export const getUserInfo = p => post("/login/find", p);

/*获取用户按钮权限数组*/
export const getUserPerms = p => get("/role/perms", p);

/*修改用户信息*/
export const modifyUserInfo = p => post("/login/update", p);

/*修改密码*/
export const modifyPassword = p => post("/login/pass", p);

/*获取供应商审核列表*/
export const getMerchant = p =>
  post(
    `/bmapi/provider/verify/searchProviderList?pageNum=${p.page}&pageSize=${p.pageSize}`,
    {
      providerName: p.providerName,
      serviceType: p.serviceType,
      orgNumber: p.orgNumber,
      searchOrgType: p.orgType,
      status: p.status,
      verifyType: p.verifyType,
      categoryId: p.categoryId
    }
  );

/*获取供应商列表*/
export const getMerchantList = p =>
  post(
    `/bmapi/provider/list/searchProviderList?pageNum=${p.page}&pageSize=${p.pageSize}`,
    {
      orgNumber: p.orgNumber,
      orgType: p.orgType,
      providerName: p.providerName,
      serviceType: p.serviceType,
      contractCountType: p.contractNumType,
      contractNum: p.contractNum,
      creatTimeBegin: p.creatTimeBegin,
      creatTimeEnd: p.creatTimeEnd,
      status: p.status,
      isCompanybuy: p.isCompanybuy,
      categoryId: p.categoryId
    }
  );

/*获取供应商名录*/
export const getMerchantRedList = p =>
  post(
    `/bmapi/provider/directories/list?pageNum=${p.page}&pageSize=${p.pageSize}`,
    {
      orgNumber: p.orgNumber,
      orgType: p.orgType,
      providerName: p.providerName,
      serviceType: p.serviceType,
      contractCountType: p.contractCountType,
      contractNum: p.contractNum,
      creatTimeBegin: p.creatTimeBegin,
      creatTimeEnd: p.creatTimeEnd,
      status: p.status,
      categoryId: p.categoryId
    }
  );

/*获取黑名单列表*/
export const getBlackList = p =>
  post(
    `/bmapi/provider/blacklist/list?pageNum=${p.pageNum}&pageSize=${p.pageSize}`,
    {
      providerName: p.providerName,
      status: p.status,
      serviceType: p.serviceType,
      creatTimeBegin: p.creatTimeBegin,
      creatTimeEnd: p.creatTimeEnd,
      cooperType: p.cooperType,
      status: p.status,
      categoryId: p.categoryId
    }
  );
/*"orgCode", "status", "verifyType", "contractNum", "creatTimeEnd", "contractCountType", "providerName", "orgNumber", "orgType", "serviceType", "creatTimeBegin"*/

/*获取黑名单详情*/
export const getBlackListDetail = p =>
  post(`/bmapi/provider/blacklist/info/${p.id}`, {});

/*获取黑名单审核列表*/
export const getBlackAutList = p =>
  post(
    `/bmapi/provider/blackWaitingList/list?pageNum=${p.pageNum}&pageSize=${p.pageSize}`,
    {
      providerName: p.providerName,
      status: p.status,
      serviceType: p.serviceType,
      creatTimeBegin: p.creatTimeBegin,
      creatTimeEnd: p.creatTimeEnd,
      cooperType: p.cooperType,
      status: p.status,
      categoryId: p.categoryId
    }
  );

/*移出黑名单*/
export const removeBlackList = p => post("/bmapi/provider/blacklist/remove", p);

/*加入黑名单审核*/
export const joinAutBlackList = p =>
  post("/bmapi/provider/blacklist/joinAut", p);

/*移除黑名单审核*/
export const removeAutBlackList = p =>
  post("/bmapi/provider/blacklist/removeAut", p);

/*供应商列表查看详情*/
export const findProviderList = p => post(`/bmapi/provider/info/${p.id}`, {});

/*供应商审核查看详情*/
export const findProviderVerifyList = p =>
  post(`/bmapi/provider/verify/${p.id}`, {});

/*新建供应商*/
export const saveMerchant = p => post("/bmapi/provider/verify/addProvider", p);

//申请企业购列表
export const getCompanyPuse = p =>
  post("/bmapi/providerapply/baseQueryList", p);

/*申请企业购查看详情*/
export const findProviderVerifyCompanyList = p =>
  post(`/bmapi/providerapply/applyDetail?uuid=${p.id}`, {});

//申请企业购审核
export const getCompanyAudit = p => post("/bmapi/providerapply/auditApply", p);
//申请企业购删除
export const delCompanyAudit = p =>
  post(`/bmapi/providerapply/baseGetByUuid?uuid=${p.uuid}`, {});

/*获取地址*/
export const getProvince = p => get("/back/region/listProvince", p);
export const getCity = p => get("/back/region/listCity", p);
export const getCounty = p => get("/back/region/listCounty", p);
export const getTown = p => get("/back/region/listTown", p);

/*供应商审核*/
export const autVerifyMerchant = p => post("/bmapi/provider/verify/aut", p);

// 供应商审核：供应商加入黑名单
export const addBlack = p => post("/bmapi/provider/black", p);

/*获取供应商子账户*/
export const getMerchantAccountlist = p =>
  post(
    `/bmapi/provider/account/${p.providerId}?pageNum=${p.pageNum}&pageSize=${p.pageSize}`,
    {}
  );

/*新建子账户*/
export const saveSysUser = p => post("/bmapi/provider/account/reg", p);

/*供应商子账户--启用、禁用*/
export const enableDisable = p =>
  post(`/bmapi/provider/account/enableDisable/${p.id}`, p);

/*项目管理*/
export const getTenderingProject = p =>
  get("/tendering/tenderingProject/list", p);

/*查询合同列表*/
export const getContractList = p =>
  post(
    `/bmapi/contract/list/searchContractList?pageNum=${p.page}&pageSize=${p.pageSize}`,
    {
      contractNumber: p.contractNumber,
      contractTitle: p.contractTitle,
      effectEndTimeEnd: p.effectEndTimeEnd,
      effectEndTimeStart: p.effectEndTimeStart,
      effectStartTimeEnd: p.effectStartTimeEnd,
      effectStartTimeStart: p.effectStartTimeStart,
      firstPartyId: p.firstPartyId,
      orgNumber: p.orgNumber,
      orgType: p.orgType,
      status: p.status,
      channelSource: p.channelSource,
      secondPartyName: p.secondPartyName,
      contractType: p.contractType
    }
  );

/*通过合同号获取钉钉合同*/
export const getContractByNo = p =>
  post(`/sysback/dingdingContract/getContractByNo?contractNo=${p.contractNo}`);

/*在输入合同号后检测此合同是否可以被此账户创建验收*/
export const checkContractAcceptanceAuthority = p =>
  post(
    `/bmapi/contract/checkContractAcceptanceAuthority?contractNum=${p.contractNo}`
  );

/*特殊合同检查合同号*/
export const checkContractByNo = p =>
  post(
    `/sysback/dingdingContract/checkContractByNo?contractNo=${p.contractNo}`
  );

/*通过供应商名称获取供应商id */
export const getProviderIdByName = p =>
  post(`/bmapi/contract/getProviderIdByName?providerName=${p.providerName}`);

/*获取甲方机构id */
export const getOrgByOrgName = p =>
  post(`/bmapi/contract/getOrgByOrgName?orgName=${p.orgName}`);

/*新增合同*/
export const addContractList = p => post("/bmapi/contract/add/contract", p);
/*新增特殊合同*/
export const addpeculiarContract = p =>
  post("bmapi/contract/add/peculiar/contract", p);
/*修改子合同*/
export const editSubContractList = p =>
  post("/bmapi/contract/improve/contract", p);
/*修改合同*/
export const editContractList = p => post("/bmapi/contract/edit/contract", p);
// 修改框架合同
export const editContractListFrame = p =>
  post("/bmapi/contractFrame/editProviderContractFrame", p);

/*新增合同选择供应商*/
export const getContractMerchantList = p =>
  post(
    `/bmapi/contract/provider/select/${p.serviceType}?pageNum=${p.page}&pageSize=${p.pageSize}&providerName=${p.providerName}`
  );
// 上传补充协议
export const supplyContract = p => post("/bmapi/contract/supplyContract", p);

/*合同审核*/
export const autVerifyContract = p => post("/bmapi/contract/verify/aut", p);
// 框架合同审核
export const autVerifyContractFrame = p =>
  post("/bmapi/contractFrame/providerContractFrameVerify", p);

/*合同作废*/
export const invalidContractList = p => post("/bmapi/contract/list/invalid", p);
//框架合同作废
export const invalidContractListFrame = p =>
  post(
    `/bmapi/contractFrame/cancelProviderContractFrame/${p.id}?cancelDesc=${p.cancelDesc}`
  );

/*查看合同列表详情*/
export const findListContract = p => post(`/bmapi/contract/list/${p.id}`);

/*查看合同审核详情*/
export const findVerifyContract = p => post(`/bmapi/contract/verify/${p.id}`);
// 查看框架合同
export const findVerifyContractFrame = p =>
  post(`/bmapi/contractFrame/getProviderContractFrame/${p.id}`);

/*设置合同范围*/
export const scopeServices = p => post("/bmapi/contract/edit/scopeServices", p);
// 设置构架合同范围
export const scopeServicesFrame = p =>
  post(`/bmapi/contractFrame/editFrameScopOfService/${p.id}`, {
    scopeOfServiceList: p.scopeOfServiceList
  });

/*设置合同内采品类*/
export const classification = p =>
  post("/bmapi/contract/edit/classification", p);
// 设置框架合同品类
// export const classificationFrame= p => post("/bmapi/contractFrame/editFrameScopOfCategory",p);
export const classificationFrame = p =>
  post(`/bmapi/contractFrame/editFrameScopOfCategory/${p.id}`, {
    scopeOfCategoryList: p.scopeOfCategoryList
  });
/*设置合同员工品类*/
export const classificationStore = p =>
  post("/bmapi/contract/edit/updateUserStoreCate", p);
/*设置合同企业品类*/
export const classificationCompany = p =>
  post("/bmapi/contract/edit/updateEnterCate", p);

/*提交请款凭证*/
export const requestOrder = p => post("/back/RequestOrder/entry", p);

/*创建一次性订单*/
export const oneOrder = p => post("/back/OneOrder/entry", p);

// 提交合同保证金
export const uploadContractDeposit = p =>
  post("/bmapi/contractdeposit/uploadContractDeposit", p);

//查看保证金
export const getUploadContractDeposit = p =>
  post(
    `/bmapi/contractdeposit/getDepositFile?contractId=${p.contractId}&frameVat=${p.frameVat}`
  );

/*合同续约*/
export const contractRenew = p => post("/bmapi/contract/renew", p);

/*合同解约*/
export const contractRescission = p =>
  post(`/bmapi/contract/rescission/${p.contractId}`);

// 商品报表
export const getReportChart = p =>
  post("/sysback/channel/product/report/query", p);

//供应商报表
export const getSupplierChart = p => post("/back/providerStatement/base", p);

//订单统计
export const getOrderChart = p =>
  post(
    `/back/ordersc/statistics/getOrderStatistics?channelType=${p.channelType}&orderStartTime=${p.orderStartTime}&orderEndTime=${p.orderEndTime}`
  );
// export const getOrderChart= p => post("/back/ordersc/statistics/getOrderStatistics",p);

//订单统计-获取地区统计
export const getOrderAreaChart = p =>
  post(
    `/back/ordersc/statistics/getOrderAreaStatistics?channelType=${p.channelType}&orderStartTime=${p.orderStartTime}&orderEndTime=${p.orderEndTime}`
  );
// export const getOrderAreaChart= p => post("/back/ordersc/statistics/getOrderAreaStatistics",p);

//订单统计列表
export const getOrderTotalList = p =>
  post(
    `/back/ordersc/statistics/getOrderListStatistics?limit=10&offset=0&channelType=${p.channelType}&orderStartTime=${p.orderStartTime}&orderEndTime=${p.orderEndTime}`
  );
// export const getOrderTotalList= p => post("/back/ordersc/statistics/getOrderListStatistics",{limit:p.limit,offset:p.offset,channelType:p.channelType,orderStartTime:p.orderStartTime,orderEndTime:p.orderEndTime,userName:p.userName});

/*获取合同预警列表*/
export const getContractDpList = p =>
  post(
    `/bmapi/contract/list/searchExpireContract?pageNum=${p.page}&pageSize=${p.pageSize}`,
    {
      contractTitle: p.contractTitle,
      effectEndTimeEnd: p.effectEndTimeEnd,
      effectEndTimeStart: p.effectEndTimeStart,
      effectStartTimeEnd: p.effectStartTimeEnd,
      effectStartTimeStart: p.effectStartTimeStart
    }
  );

/*获取合同审核列表*/
export const getContracaut = p =>
  post(
    `/bmapi/contract/verify/searchContractList?pageNum=${p.page}&pageSize=${p.pageSize}`,
    {
      verifyStatus: p.verifyStatus
    }
  );

/*获取验收管理列表*/
export const getProjeccheck = p =>
  post(
    `/bmapi/tender/searchTenderingCheckOrder?pageNum=${p.offset}&pageSize=${p.limit}`,
    {
      projectName: p.projectName,
      status: p.status,
      checkTimeBegin: p.checkTimeBegin,
      checkTimeEnd: p.checkTimeEnd,
      verifyStatus: p.verifyStatus
    }
  );

/*获取合同验收管理列表*/
export const searchContractAcceptInfo = p =>
  post(
    `/bmapi/contractAccept/searchContractAcceptInfo?pageNum=${p.nowPage}&pageSize=${p.pageShow}`,
    {
      contractTitle: p.contractTitle,
      contractAcceptTitle: p.contractAcceptTitle,
      contractSource: p.contractSource,
      verifyStatus: p.verifyStatus,
      createOpeTime: p.createOpeTime,
      createOpeTime2: p.createOpeTime2,
      contractNum: p.contractNum,
      orgType: p.orgType,
      orgNumber: p.orgNumber
    }
  );

// 【BM055】验收管理:获取项目列表
export const chooseCheckList = p =>
  post("/bmapi/tender/findProjectList4CheckOrder", {
    projectName: p.projectName
  });
//【BM046】验收管理-详情
export const checkDetail = p =>
  post(`/bmapi/tender/tenderingCheckOrderInfo/${p.orderId}`);
// 【BM049】验收管理-删除
export const checkDelete = p =>
  post(`/bmapi/tender/removeTenderingCheckOrder/${p.orderId}`);
//验收合同详情
export const getContractAccept = p =>
  post(`/bmapi/contractAccept/getContractAccept?uuid=${p.uuid}`);
//验收合同删除
export const deleteContractAccept = p =>
  post(`/bmapi/contractAccept/deleteContractAccept?uuid=${p.uuid}`);
//检查验收合同标题是否已经存在
export const checkCurrentTitleIfExist = p =>
  post(
    `/bmapi/contractAccept/checkCurrentTitleIfExist?contractNum=${p.contractNum}&contractAcceptTitle=${p.contractAcceptTitle}`
  );

/*验收合同新增*/
export const addContractAccept = p =>
  post(`/bmapi/contractAccept/addContractAccept`, p);

/*创建验收单*/
export const addCheckInfo = p =>
  post(`/bmapi/tender/addTenderingCheckOrder/${p.projectId}`, {
    checkFileName: p.checkFileName,
    checkFilePath: p.checkFilePath,
    checkIntro: p.checkIntro,
    checkTitle: p.checkTitle,
    status: p.status,
    checkTime: p.checkTime
  });

/*获取招标通知管理列表*/
export const getPublishList = p => get("/tendering/publish/list", p);

/*获取中标管理列表*/
export const getOpenList = p => get("/tendering/open/list", p);

/*获取中标管理列表*/
export const getSuccessfulList = p => get("/tendering/successful/list", p);

/*获取标书管理列表*/
export const getBookList = p => get("/tendering/book/list", p);

/*保证金管理列表*/
export const getDepositList = p => get("/tendering/deposit/list", p);

/*询比价保证金管理列表*/
export const getEnquiryDepositList = p => get("/enquiry/deposit/list", p);

/*询价公告列表*/
export const getNoticeList = p => get("/bargaining/notice/list", p);

/*询价结果列表*/
export const getResultsList = p => get("/bargaining/results/list", p);

/*商品单位管理列表*/
export const getUnitList = p =>
  post(`/goodsUnit/search?page=${p.page}&pageSize=${p.pageSize}`, {
    unitName: p.unitName
  });

/*添加单位*/
export const addUnitList = p => post("/goodsUnit/save", p);

/*查找商品单位*/
export const findUnitList = p => post("/goodsUnit/find", p);

/*修改单位*/
export const updateUnitList = p => post("/goodsUnit/update", p);

/*删除商品单位*/
export const deleteUnitList = p => post("/goodsUnit/delete", p);

/*获取上级品类*/
export const getLatClassifyList = p => post("/goodsCategory/searchByLevel", p);

/*获取商品品类*/
export const getClassifyList = p =>
  post(`/goodsCategory/search?page=${p.page}&pageSize=${p.pageSize}`, {
    categoryLevel: p.categoryLevel,
    oneName: p.oneName,
    twoName: p.twoName,
    threeName: p.threeName,
    fourName: p.fourName,
    createStartTime: p.createStartTime,
    createEndTime: p.createEndTime,
    status: p.status
  });

/*商品品类与财务科目关系*/
export const queryCategoryNeicaiList = p =>
  post(
    `/categoryNeicai/queryCategoryNeicaiList?nowPage=${p.nowPage}&pageShow=${p.pageShow}`,
    {
      firstCategory: p.firstCategory,
      secondCategory: p.secondCategory,
      thirdCategory: p.thirdCategory,
      fourthCategory: p.fourthCategory,
      selfCategoryNum: p.selfCategoryNum,
      selfCategoryName: p.selfCategoryName
    }
  );

/*新增品类*/
export const addClassifyList = p => post("/goodsCategory/save", p.addForm);

/*查找品类*/
export const findClassifyList = p => post("/goodsCategory/find", p);

/*修改品类*/
export const updateClassifyList = p =>
  post("/goodsCategory/update", p.editForm);

/*删除品类*/
export const deleteClassifyList = p => post("/goodsCategory/delete", p);

/*启用/停用品类*/
export const startOrStopClassifyList = p =>
  post("/goodsCategory/startOrStop", p);

/*获取品类列表*/
export const selectClassifyList = p => post("/goodsCategory/select", p);

/*获取企业购上级品类*/
export const getLatClassifyCompanyList = p =>
  post("/goodsCategoryCompany/searchByLevel", p);

/*获取企业购商品品类*/
export const getClassifyCompanyList = p =>
  post(`/goodsCategoryCompany/search?page=${p.page}&pageSize=${p.pageSize}`, {
    categoryLevel: p.categoryLevel,
    oneName: p.oneName,
    twoName: p.twoName,
    threeName: p.threeName,
    fourName: p.fourName,
    createStartTime: p.createStartTime,
    createEndTime: p.createEndTime,
    status: p.status
  });

/*新增企业购品类*/
export const addClassifyCompanyList = p =>
  post("/goodsCategoryCompany/save", p.addForm);

/*查找企业购品类*/
export const findClassifyCompanyList = p =>
  post("/goodsCategoryCompany/find", p);

/*修改企业购品类*/
export const updateClassifyCompanyList = p =>
  post("/goodsCategoryCompany/update", p.editForm);

/*删除企业购品类*/
export const deleteClassifyCompanyList = p =>
  post("/goodsCategoryCompany/delete", p);

/*启用/停用企业购品类*/
export const startOrStopClassifyCompanyList = p =>
  post("/goodsCategoryCompany/startOrStop", p);

/*获取企业购品类列表*/
export const selectClassifyCompanyList = p =>
  post("/goodsCategoryCompany/select", p);

//企业购分期付款规则添加
export const baseAdd = p => post("/sysback/categorystageparam/baseAdd", p);

//企业购分期付款规则修改
export const baseUpdate = p =>
  post("/sysback/categorystageparam/baseUpdate", p);

//通过ID获取企业购三级品类分期付款规则
export const findCompanyRuleList = p =>
  post("/sysback/categorystageparam/getByCatId", p);

/*获取员工/商户购上级品类*/
export const getLatClassifyStaffList = p =>
  post("/goodsCategoryStore/searchByLevel", p);

/*获取员工/商户购商品品类*/
export const getClassifyStaffList = p =>
  post(`/goodsCategoryStore/search?page=${p.page}&pageSize=${p.pageSize}`, {
    categoryLevel: p.categoryLevel,
    oneName: p.oneName,
    twoName: p.twoName,
    threeName: p.threeName,
    fourName: p.fourName,
    createStartTime: p.createStartTime,
    createEndTime: p.createEndTime,
    status: p.status
  });

/*新增员工/商户购品类*/
export const addClassifyStaffList = p =>
  post("/goodsCategoryStore/save", p.addForm);

/*查找员工/商户购品类*/
export const findClassifyStaffList = p => post("/goodsCategoryStore/find", p);

/*修改员工/商户购品类*/
export const updateClassifyStaffList = p =>
  post("/goodsCategoryStore/update", p.editForm);

/*删除员工/商户购品类*/
export const deleteClassifyStaffList = p =>
  post("/goodsCategoryStore/delete", p);

/*启用/停用员工/商户购品类*/
export const startOrStopClassifyStaffList = p =>
  post("/goodsCategoryStore/startOrStop", p);

/*获取品类员工/商户购列表*/
export const selectClassifyStaffList = p =>
  post("/goodsCategoryStore/select", p);

/*获取四级分类列表*/
export const getDingCategoryList = p =>
  post(`/dingCategory/search?page=${p.page}&pageSize=${p.pageSize}`, {});

/*新增四级品类*/
export const addDingClassifyList = p => post("/dingCategory/save", p);

/*删除四级品类*/
export const delDingClassifyList = p => post("/dingCategory/delete", p);

/*获取品类日志*/
export const getDingCategoryLog = p =>
  post(`/dingCategory/log?page=${p.page}&pageSize=${p.pageSize}`, {
    fourName: p.fourName,
    startTime: p.startTime,
    endTime: p.endTime
  });

/*商品品类查询（树行结构）*/
export const classifyTreeList = p => post("/goodsCategory/tree", p);
export const classifyTreeStoreList = p => post("/goodsCategoryStore/tree", p);
export const classifyTreeCompanyList = p =>
  post("/goodsCategoryCompany/tree", p);

// 子合同商品品类
export const classifyTreeFrameList = p =>
  post(`/bmapi/contractFrame/getScopeOfCategoryTreesByFrameId/${p}`);

//框架子合同服务范围
export const getOrgTreeFrameList = p =>
  post(`/bmapi/contractFrame/getScopeOfServiceTreesByFrameId/${p}`);
/*商品新品类查询（树行结构）*/
export const classifyStoreTreeList = p => post("goodsCategoryStore/tree", p);
export const classifyCompanyTreeList = p =>
  post("goodsCategoryCompany/tree", p);

/*获取商品spu列表*/
export const getGoodsSpuList = p =>
  post(`/goods/spu/list?page=${p.page}&pageSize=${p.pageSize}`, {
    spuName: p.spuName,
    brandName: p.brandName,
    isSpu: p.isSpu,
    settlementType: p.settlementType,
    categoryCode: p.categoryCode,
    orgNumber: p.orgNumber,
    orgType: p.orgType,
    status: p.status,
    isDepreciation: p.isDepreciation,
    isRefund: p.isRefund,
    createStartTime: p.createStartTime,
    createEndTime: p.createEndTime,
    providerName: p.providerName,
    skuName: p.skuName
  });
// export const getGoodsSpuList= p => post(`/inner/channel/spu/all/list?page=${p.page}&pageSize=${p.pageSize}`, {spuName:p.spuName,brandName:p.brandName,isSpu:p.isSpu,settlementType:p.settlementType,categoryCode:p.categoryCode,orgNumber:p.orgNumber,orgType:p.orgType,status:p.status,isDepreciation:p.isDepreciation,isRefund:p.isRefund,createStartTime:p.createStartTime,createEndTime:p.createEndTime,providerName:p.providerName,skuName:p.skuName});

/*获取商品待审核列表*/
export const getGoodsAutList = p =>
  post(`/goods/spu/autList?page=${p.page}&pageSize=${p.pageSize}`, {
    skuName: p.skuName,
    categoryId: p.categoryId,
    brandName: p.brandName,
    isSpu: p.isSpu,
    isRefund: p.isRefund,
    isDepreciation: p.isDepreciation,
    createTimeStart: p.createTimeStart,
    createTimeEnd: p.createTimeEnd,
    settlementType: p.settlementType,
    providerName: p.providerName
  });

/*商品审核*/
export const skuAudit = p => post("/goods/sku/audit", p);

/*批量商品审核*/
export const skuAuditBatch = p => post("/goods/sku/audit/batch", p);

// 商品审核通过
export const getGoodsTypeAudit = p =>
  post(
    `/sysback/channelspu/auditPass?channelSpuUuids=${p.id}&auditNote=${p.auditNote}`
  );

// 商品审核不通过
export const getGoodsTypeNoAudit = p =>
  post(
    `/sysback/channelspu/auditFail?channelSpuUuids=${p.id}&auditNote=${p.auditNote}`
  );

//下架内采商品
export const getAutDownGoods = p =>
  post(`/sysback/channelspu/down?channelSpuUuidList=${p.id}`);

/*获取商品审核详情*/
// export const skuAutDetail= p => post('/goods/sku/autDetail', p);
export const skuAutDetail = p =>
  post(`/goods/spu/new/detail?channelSpuUuid=${p.id}`, {});
export const skuAutDetails = p =>
  post(`/goods/spu/new/detail?channelSpuUuid=${p.id}`, {});

/*获取商品sku详情*/
export const getSkuDetails = p =>
  post(`/goods/spu/new/detail?channelSpuUuid=${p.id}`, {});

/*获取商品SPU详情*/
export const getSpuDetail = p => post("/goods/spu/detail", p);

/*获取商品sku列表*/
export const getSkuList = p => post("/goods/sku/list", p);

/*批量上架商品*/
export const upSpu = p => post("/goods/spu/upper", p);

/*批量下架商品*/
export const lowSpu = p => post("/goods/spu/lower", p);

/*获取企业购商品审核全部列表*/
export const getInsideShopAutList = p =>
  post(`/company/channel/spu/all/list`, {
    page: p.page,
    pageSize: p.pageSize,
    productName: p.skuName,
    categoryId: p.categoryId,
    state: p.status,
    brandName: p.brandName,
    createTimeBegin: p.createTimeStart,
    createTimeEnd: p.createTimeEnd,
    priceType: p.priceType,
    providerName: p.providerName
  });

/*获取企业购商品待审核列表*/
export const getInsideShopAudit = p =>
  post(`/company/channel/spu/wait/audit/list`, {
    page: p.page,
    pageSize: p.pageSize,
    productName: p.skuName,
    categoryId: p.categoryId,
    state: p.status,
    brandName: p.brandName,
    createTimeBegin: p.createTimeStart,
    createTimeEnd: p.createTimeEnd,
    priceType: p.priceType,
    providerName: p.providerName
  });

/*获取企业购商品审核不通过列表*/
export const getInsideShopNoAudit = p =>
  post(`/company/channel/spu/fail/list`, {
    page: p.page,
    pageSize: p.pageSize,
    productName: p.skuName,
    categoryId: p.categoryId,
    state: p.status,
    brandName: p.brandName,
    createTimeBegin: p.createTimeStart,
    createTimeEnd: p.createTimeEnd,
    priceType: p.priceType,
    providerName: p.providerName
  });

/*获取企业购商品审核上架列表*/
export const getInsideShopUp = p =>
  post(`/company/channel/spu/up/list`, {
    page: p.page,
    pageSize: p.pageSize,
    productName: p.skuName,
    categoryId: p.categoryId,
    state: p.status,
    brandName: p.brandName,
    createTimeBegin: p.createTimeStart,
    createTimeEnd: p.createTimeEnd,
    priceType: p.priceType,
    providerName: p.providerName
  });

/*获取企业购商品审核下架列表*/
export const getInsideShopDown = p =>
  post(`/company/channel/spu/down/list`, {
    page: p.page,
    pageSize: p.pageSize,
    productName: p.skuName,
    categoryId: p.categoryId,
    state: p.status,
    brandName: p.brandName,
    createTimeBegin: p.createTimeStart,
    createTimeEnd: p.createTimeEnd,
    priceType: p.priceType,
    providerName: p.providerName
  });

/*获取员工商户购商品审核全部列表*/
export const getStoreShopAutList = p =>
  post(`/store/channel/spu/all/list`, {
    page: p.page,
    pageSize: p.pageSize,
    productName: p.skuName,
    categoryId: p.categoryId,
    state: p.status,
    brandName: p.brandName,
    createTimeBegin: p.createTimeStart,
    createTimeEnd: p.createTimeEnd,
    priceType: p.priceType,
    providerName: p.providerName
  });

/*获取员工商户购商品待审核列表*/
export const getStoreShopAudit = p =>
  post(`/store/channel/spu/wait/audit/list`, {
    page: p.page,
    pageSize: p.pageSize,
    productName: p.skuName,
    categoryId: p.categoryId,
    state: p.status,
    brandName: p.brandName,
    createTimeBegin: p.createTimeStart,
    createTimeEnd: p.createTimeEnd,
    priceType: p.priceType,
    providerName: p.providerName
  });

/*获取员工商户购商品审核不通过列表*/
export const getStoreShopNoAudit = p =>
  post(`/store/channel/spu/fail/list`, {
    page: p.page,
    pageSize: p.pageSize,
    productName: p.skuName,
    categoryId: p.categoryId,
    state: p.status,
    brandName: p.brandName,
    createTimeBegin: p.createTimeStart,
    createTimeEnd: p.createTimeEnd,
    priceType: p.priceType,
    providerName: p.providerName
  });

/*获取员工商户购商品审核上架列表*/
export const getStoreShopUp = p =>
  post(`/store/channel/spu/up/list`, {
    page: p.page,
    pageSize: p.pageSize,
    productName: p.skuName,
    categoryId: p.categoryId,
    state: p.status,
    brandName: p.brandName,
    createTimeBegin: p.createTimeStart,
    createTimeEnd: p.createTimeEnd,
    priceType: p.priceType,
    providerName: p.providerName
  });
/*获取员工商户购商品审核上架列表不带条件*/
export const getStoreShopUpList = p =>
  post(`/store/channel/spu/up/list`, {
    page: p.page,
    pageSize: p.pageSize,
    productName: p.productName,
    categoryId: "",
    state: "",
    brandName: "",
    createTimeBegin: "",
    createTimeEnd: "",
    priceType: "",
    providerName: ""
  });

/*获取员工商户购商品审核下架列表*/
export const getStoreShopDown = p =>
  post(`/store/channel/spu/down/list`, {
    page: p.page,
    pageSize: p.pageSize,
    productName: p.skuName,
    categoryId: p.categoryId,
    state: p.status,
    brandName: p.brandName,
    createTimeBegin: p.createTimeStart,
    createTimeEnd: p.createTimeEnd,
    priceType: p.priceType,
    providerName: p.providerName
  });

/*获取内部采购商品审核全部列表*/
export const getInnerShopAutList = p =>
  post(`/inner/channel/spu/all/list`, {
    page: p.page,
    pageSize: p.pageSize,
    productName: p.skuName,
    categoryId: p.categoryId,
    state: p.status,
    brandName: p.brandName,
    createTimeBegin: p.createTimeStart,
    createTimeEnd: p.createTimeEnd,
    priceType: p.priceType,
    providerName: p.providerName
  });

/*获取内部采购商品待审核列表*/
export const getInnerShopAudit = p =>
  post(`/inner/channel/spu/wait/audit/list`, {
    page: p.page,
    pageSize: p.pageSize,
    productName: p.skuName,
    categoryId: p.categoryId,
    state: p.status,
    brandName: p.brandName,
    createTimeBegin: p.createTimeStart,
    createTimeEnd: p.createTimeEnd,
    priceType: p.priceType,
    providerName: p.providerName
  });

/*获取内部采购商品审核不通过列表*/
export const getInnerShopNoAudit = p =>
  post(`/inner/channel/spu/fail/list`, {
    page: p.page,
    pageSize: p.pageSize,
    productName: p.skuName,
    categoryId: p.categoryId,
    state: p.status,
    brandName: p.brandName,
    createTimeBegin: p.createTimeStart,
    createTimeEnd: p.createTimeEnd,
    priceType: p.priceType,
    providerName: p.providerName
  });

/*获取内部采购商品审核上架列表*/
export const getInnerShopUp = p =>
  post(`/inner/channel/spu/up/list`, {
    page: p.page,
    pageSize: p.pageSize,
    productName: p.skuName,
    categoryId: p.categoryId,
    state: p.status,
    brandName: p.brandName,
    createTimeBegin: p.createTimeStart,
    createTimeEnd: p.createTimeEnd,
    priceType: p.priceType,
    providerName: p.providerName
  });

/*获取内部采购商品审核下架列表*/
export const getInnerShopDown = p =>
  post(`/inner/channel/spu/down/list`, {
    page: p.page,
    pageSize: p.pageSize,
    productName: p.skuName,
    categoryId: p.categoryId,
    state: p.status,
    brandName: p.brandName,
    createTimeBegin: p.createTimeStart,
    createTimeEnd: p.createTimeEnd,
    priceType: p.priceType,
    providerName: p.providerName
  });

/*获取内部采购库存列表*/
export const getInternalStockList = p =>
  post(`/sysback/stock/list/inner`, {
    page: p.page,
    pageSize: p.pageSize,
    productName: p.productName,
    thirdSpuId: p.thirdSpuId,
    brandName: p.brandName,
    categoryId: p.categoryId,
    providerName: p.providerName
  });

/*获取员工商户购库存列表*/
export const getStaffStockList = p =>
  post(`/sysback/stock/list/store`, {
    page: p.page,
    pageSize: p.pageSize,
    productName: p.productName,
    thirdSpuId: p.thirdSpuId,
    brandName: p.brandName,
    categoryId: p.categoryId,
    providerName: p.providerName
  });

/*获取企业购库存列表*/
export const getCompanyStockList = p =>
  post(`/sysback/stock/list/company`, {
    page: p.page,
    pageSize: p.pageSize,
    productName: p.productName,
    thirdSpuId: p.thirdSpuId,
    brandName: p.brandName,
    categoryId: p.categoryId,
    providerName: p.providerName
  });

/*获取品牌列表*/
export const getBrandList = p =>
  post(`/goodsBrand/search?page=${p.page}&pageSize=${p.pageSize}`, {
    brandName: p.brandName,
    status: p.status,
    firstLetter: p.firstLetter
  });

/*新增品牌*/
export const addBrandList = p => post("/goodsBrand/save", p);

/*查找品牌*/
export const findBrandList = p => post("/goodsBrand/find", p);

/*修改品牌*/
export const updateBrandList = p => post("/goodsBrand/update", p);

/*删除品牌*/
export const delBrandList = p => post("/goodsBrand/delete", p);

/*审核品牌*/
export const auditBrandList = p => post("/goodsBrand/audit", p);

/*品牌启用停用*/
export const startOrStopBrandList = p => post("/goodsBrand/startOrStop", p);

/*获取商品信息列表*/
export const getGoodsList = p => get("/back/goods/list/1", p);

/*商品信息审核列表*/
export const getGoodsListsh = p => get("/back/goods/list/2", p);

/*商品上架审核*/
export const getGoodsListsj = p => get("/back/goods/list/3", p);

/*筛选公司组织*/
export const getCompanyInfoThree = p => post("/org/select", p);

/*获取采购订单*/
export const getPurchaseList = p => get("/back/order/purchase/list", p);

/** 零星订单列表*/
export const lingxingList = p => get("/back/ordersc/store/lingxingList", p);

/*导出采购订单*/
export const exportPurchaseList = p => get("/back/order/export", p);
/*获取采购结算*/
export const getPurchaseTotalList = p => get("/back/purchase/total", p);

/*获取采购结算单*/
export const getPurchase2List = p => get("/back/order/purchase/list2", p);

/*一次、请款订单审核*/
export const getOrderAudit = p => get("/back/order/audit", p);

/*零星订单审阅*/
export const getOrderRead = p => get("/back/order/read", p);

/*重新提交审核*/
export const reSubmit = p => get("/back/ordersc/reSubmit", p);

/*提交一次性订单*/

/*获取销售订单*/
export const getSaleList = p => get("/back/order/sale/list", p);

/*获取销售结算*/
export const getSaleTotal = p => get("/back/sale/total", p);

/*获取销售结算单*/
export const getSaleList2 = p => get("/back/order/sale/list2", p);

/*获取订单详情*/
export const getOrderItemList = p =>
  get(`/back/order/item/list/${p.orderId}`, {});

/*获取零星订单详情*/
//export const getAuditLingxingOrderInfo = p => post(`/back/ordersc/item/lingxinglist/getAuditLingxingOrderInfo?orderCode=`+p.orderCode, {});
export const getAuditLingxingOrderInfo = p =>
  post(
    `/back/ordersc/item/lingxingOrderList/getAuditLingxingOrderInfo?orderCode=` +
      p.orderCode,
    {}
  );

/*获取零星订单审核*/
export const auditLingxingOrder = p =>
  post(`/back/ordersc/item/AuditLingxing/AuditLingxingOrder`, p);

/*导出订单*/
export const exportOrderItemList = p => get("/back/order/export", p);

/*获取cms内容管理*/
export const getcmsContentList = p =>
  post(`/notify/search?page=${p.page}&pageSize=${p.pageSize}`, {
    title: p.title,
    notifyType: p.notifyType,
    status: p.status
  });

export const addcmsContentList = p =>
  post(`/notify/save`, {
    title: p.title,
    notifyType: p.notifyType,
    showRangeType: p.showRangeType,
    isRelease: p.isRelease,
    isTop: p.isTop,
    isWater: p.isWater,
    content: p.content,
    fieIdList: p.fieIdList
  }); //新增

export const getcmsContentDetail = p =>
  post(`/notify/detail`, { id: p.itemId }); //详情

export const getcmsContentUpdate = p =>
  post(`/notify/update`, {
    id: p.itemId,
    title: p.title,
    notifyType: p.notifyType,
    showRangeType: p.showRangeType,
    isRelease: p.isRelease,
    isTop: p.isTop,
    isWater: p.isWater,
    content: p.content,
    fieIdList: p.fieIdList
  }); //修改
export const getcmsContentAudit = p =>
  post(`/notify/audit`, {
    id: p.itemId,
    verifyStatus: p.verifyStatus,
    reason: p.reason
  }); //审核
export const getcmsContentDelete = p =>
  post(`/notify/delete`, { id: p.itemId }); //删除
export const getcmsContentRecall = p =>
  post(`/notify/recall`, { id: p.itemId }); //撤回
export const getcmsContentFind = p => post(`/notify/find`, { id: p.itemId }); //查找
export const setcmsContentDeleteList = p =>
  post(`/notify/alldelete`, { id: p.itemId }); //All删除

/*信息安全管理*/
/*门店分析*/
export const getAnalyzeList = p =>
  get(`/back/storeAnalysis/list`, {
    offset: p.offset,
    limit: p.limit,
    orderStartTime: p.orderStartTime,
    orderEndTime: p.orderEndTime,
    status: p.status,
    orgType: p.orgType,
    orgNumber: p.orgNumber
  }); //All删除
/*门店采购*/
export const getStorePurchaseList = p =>
  get(`/back/storePurchase/list`, {
    limit: p.limit,
    offset: p.offset,
    providerName: p.providerName,
    status: p.status,
    orgType: p.orgType,
    orderStartTime: p.orderStartTime,
    orderEndTime: p.orderEndTime,
    orgNumber: p.orgNumber
  }); //All删除
/*供应商品订单*/
export const getProviderOrderList = p =>
  get(`/back/providerOrder/list`, {
    limit: p.limit,
    offset: p.offset,
    orgNumber: p.orgNumber,
    providerId: p.providerId,
    orgType: p.orgType,
    orderStartTime: p.orderStartTime,
    orderEndTime: p.orderEndTime,
    status: p.status
  }); //All删除
/*订单详情*/
export const getorderDetail = p =>
  get(`/back/orderDetail/list`, { orderCode: p.orderCode }); //All删除

/*销售报表导出*/
export const saleStatement = p =>
  get("/back/saleStatement/Export", {
    orderType: p.orderType,
    orgNumber: p.orgNumber,
    orderStartTime: p.orderStartTime,
    orderEndTime: p.orderEndTime,
    status: p.status,
    orgType: p.orgType
  });
/*销售报表*/
export const getsaleStatementList = p =>
  get("/back/saleStatement/list", {
    offset: p.offset,
    limit: p.limit,
    orderType: p.orderType,
    orgNumber: p.orgNumber,
    orderStartTime: p.orderStartTime,
    orderEndTime: p.orderEndTime,
    status: p.status,
    orgType: p.orgType,
    providerName: p.providerName
  });

// 商品报表列表
export const getGoodsMoreList = p =>
  post("/sysback/channel/product/report/more", {
    page: p.page,
    pageSize: p.pageSize,
    productType: p.productType,
    sortType: p.sortType,
    categoryId: p.categoryId,
    productName: p.productName,
    startDay: p.startDay,
    endDay: p.endDay
  });

//供应商渠道占比列表
export const getProviderZBList = p =>
  post("/back/providerStatement/channelMore", {
    page: p.page,
    pageSize: p.pageSize,
    providerName: p.providerName
  });

//供应商订单数列表
export const getProviderOrderSumList = p =>
  post("/back/providerStatement/orderMore", {
    page: p.page,
    pageSize: p.pageSize,
    providerName: p.providerName
  });

/*获取账户管理*/
// export const getUserList= p => get('/sys/user/list', p);

/*获取角色管理*/
// export const getRoleList= p => post('/role/search', p);
export const getRoleList = p =>
  post(`/role/search?page=${p.page}&pageSize=${p.pageSize}`, {
    roleName: p.roleName
  });

/*新增角色*/
export const addRoleList = p => post("/role/save", p);

/*查找角色*/
export const findRoleList = p => post("/role/find", p);

/*更新角色*/
export const updateRoleList = p => post("/role/update", p);

/*删除角色*/
export const delRoleList = p => post("/role/delete", p);

/*批量删除角色*/
export const batchDelRoleList = p => post("/role/delete/batch", p);

/*获取角色列表*/
export const getAllRoleList = p => post("/role/select", p);

/*获取系统菜单*/
// export const getSysMenuList= p => get('/sys/menu/list', p);
export const getSysMenuList = p => post("/menu/listTree", p);

/*增加系统菜单*/
export const addSysMenuList = p => post("/menu/save", p);

/*查找系统菜单*/
export const findSysMenuList = p => post("/menu/find", p);

/*修改系统菜单*/
export const editSysMenuList = p => post("/menu/update", p);

/*删除系统菜单*/
export const delSysMenuList = p => post("/menu/delete", p);

/*获取部门管理信息*/
// export const getSysDeptList= p => get('/system/sysDept/list', p);

/*获取部门列表*/
export const getSysDeptList = p => post("/depart/search", p);

/*新增部门*/
export const addSysDeptList = p => post("/depart/save", p);

/*查找部门*/
export const findSysDeptList = p => post("/depart/find", p);

/*修改部门*/
export const updateSysDeptList = p => post("/depart/update", p);

/*删除部门*/
export const deleteSysDeptList = p => post("/depart/delete", p);

/*获取公司信息*/
export const getCompanyInfo = p => get("/system/org/list", p);

/*获取机构信息*/
export const getOrgInfo = p => post("/org/search", p);

/*获取组织机构树（同步）*/
export const getOrgTreeList = p => post("/org/selectTree", p);

/*获取中标的供应商*/
export const findProviderSupList = p =>
  post(`/bmapi/tender/findProviderList4WinTender/${p.id}`, {});

/*新增机构*/
export const addOrgInfo = p => post("/org/save", p);

/*修改机构*/
export const updateOrgInfo = p => post("/org/update", p);

/*删除机构*/
export const deleteOrgInfo = p => post("/org/delete", p);

/*查找机构*/
export const findOrgInfo = p => post("/org/find", p);

/*查看发票*/
export const findOrgInvoice = p => post("/org/find/invoice", p);
// 获取发票
export const getInvoicesMessageList = p => post("/invoice/search", p);
//获取补充协会
export const getUploadFile = p =>
  post(`/bmapi/contract/getSupplyFile?contractId=${p}`, p);

/*获取用户管理列表*/
export const getUserList = p =>
  post(`/user/search?page=${p.page}&pageSize=${p.pageSize}`, {
    jobNumber: p.jobNumber,
    mobile: p.mobile,
    status: p.status,
    orgName: p.orgName
  });

/*新增用户*/
export const addUserList = p => post("/user/save", p);

/*查找用户*/
export const findUserList = p => post("/user/find", p);

/*修改用户*/
export const updateUserList = p => post("/user/update", p);

/*删除用户*/
export const deleteUserList = p => post("/user/delete", p);

/*批量删除用户*/
export const batchDeleteUserList = p => post("/user/batch/delete", p);

/*重置用户密码*/
export const repeatPassUserList = p => post("/user/repeatPass", p);

/*判断工号是否已存在*/
export const userExist = p => post(`/user/exist?jobNumber=${p.jobNumber}`, p);

/*下载水印文件*/
export const downWater = p => get("/download/water/file?id=19677");

/*导出*/
export const daochu = p => post("/goods/export", p);

/*中标二级审核的配置*/
export const addTenderConfig = p =>
  post("/bmapi/tenderConfig/addTenderConfig", p);

/*中标二级审核-组织单位列表*/
export const findOrgList = p => post("/bmapi/tenderConfig/findOrgList");

/*中标二级审核列表*/
export const searchTenderConfigList = p =>
  post(
    `/bmapi/tenderConfig/searchTenderConfigList?pageNum=${p.pageNum}&pageSize=${p.pageSize}`,
    { orgName: p.orgName, superOrgName: p.superOrgName }
  );

/*【BM103】中标二级审核-详情*/
export const tenderConfigInfo = p =>
  post(`/bmapi/tenderConfig/tenderConfigInfo/${p.configId}`);

/*【BM104】中标二级审核-编辑*/
export const editTenderConfig = p =>
  post("/bmapi/tenderConfig/editTenderConfig", p);

/*【BM105】中标二级审核-删除*/
export const removeTenderConfig = p =>
  post(`/bmapi/tenderConfig/removeTenderConfig/${p.configId}`);

/*运营参数-列表查询*/
export const findWebsiteoperateList = p =>
  post("/sysback/websiteoperate/queryList", p);

/*运营参数-获取渠道名称选择信息*/
export const getChannelTypeSelectList = p =>
  post("/sysback/websiteoperate/getChannelTypeSelectList", p);

/*运营参数-获取渠道名称选择信息*/
export const getParamTypeSelectList = p =>
  post("/sysback/websiteoperate/getParamTypeSelectList", p);

/*运营参数-添加*/
export const addWebsiteoperate = p => post("/sysback/websiteoperate/add", p);

/*运营参数-编辑*/
export const updateWebsiteoperate = p =>
  post("/sysback/websiteoperate/update", p);

/*运营参数-删除*/
export const deleteWebsiteoperate = p =>
  post(`/sysback/websiteoperate/deletes?uuids=${p.uuids}`, p);

/*运营参数-查看*/
export const getWebsiteoperate = p =>
  post(`/sysback/websiteoperate/getByUuid?uuid=${p.uuid}`, p);

/*短信模版-列表查询*/
export const findMessageTemplateList = p =>
  post("/sysback/messagetemplate/baseQueryList", p);

/*短信模版-添加*/
export const addMessageTemplate = p =>
  post("/sysback/messagetemplate/baseAdd", p);

/*短信模版-编辑*/
export const updateMessageTemplate = p =>
  post("/sysback/messagetemplate/baseUpdate", p);

/*短信模版-删除*/
export const deleteMessageTemplate = p =>
  post(`/sysback/messagetemplate/baseDeletes?uuids=${p.uuids}`, p);

/*短信模版-查看*/
export const getMessageTemplate = p =>
  post(`/sysback/messagetemplate/baseGetByUuid?uuid=${p.uuid}`, p);

/*公告内容模版-列表查询*/
export const findNoticeTemplateList = p =>
  post("/sysback/contenttemplate/baseQueryList", p);

/*公告内容模版-添加*/
export const addNoticeTemplate = p =>
  post("/sysback/contenttemplate/baseAdd", p);

/*公告内容模版-编辑*/
export const updateNoticeTemplate = p =>
  post("/sysback/contenttemplate/baseUpdate", p);

/*小程序意见反馈 */
export const appFeedBackList = p =>
  post("/sysback/appfeedback/baseQueryList", p);

/*一键寻源列表 */
export const pollingPriceList = p =>
  post("/sysback/pollingPrice/baseQueryList", p);

/**一键寻源获取详情 */
export const sourcingBaseGetByUuid = p =>
  post(`/sysback/pollingPrice/baseGetByUuid?uuid=${p.uuid}`, p);

/**一键寻源通过或驳回 */
export const sourcingPassOrRejected = p =>
  post("/sysback/pollingPrice/passOrRejected", p);

/**一键寻源询价文件下载 */
export const sourcingDownFile = p =>
  post("/sysback/pollingPrice/sourcingDownFile", p);

/*科目报表 */
export const subjectStatisticsList = p =>
  post("/sysback/subjectstatistics/baseQueryList", p);

/*获取科目编号和名称 */
export const getSelfCategory = p => post("/categoryNeicai/getSelfCategory", p);

/*订单品类分析报表 */
export const getCategoryStatisticsPager = p =>
  post("/sysback/categorystatistics/getCategoryStatisticsPager", p);

/*科目获取总金额 */
export const getSubjectStatisticsMoney = p =>
  post("/sysback/subjectstatistics/getSubjectStatisticsMoney", p);

/*品类统计获取总金额 */
export const getCategoryStatisticsMoney = p =>
  post("/sysback/categorystatistics/getCategoryStatisticsMoney", p);

/*小程序处理意见反馈 */
export const appFeedBackDispose = p => post("/sysback/appfeedback/dispose", p);

//启用
export const updateNoticeStated = p =>
  post(`/sysback/contenttemplate/started/${p.uuid}`, p);

//禁用
export const updateNoticeStoped = p =>
  post(`/sysback/contenttemplate/stoped/${p.uuid}`, p);

/*公告内容模版-查看*/
export const getNoticeTemplate = p =>
  post(`/sysback/contenttemplate/baseGetByUuid?uuid=${p.uuid}`, p);

//通过类型获取公告模板
export const getNoticeTemplates = p =>
  post(`/bmapi/tender/getNoticeTemplates/${p.type}`, p);

/*消息模版-列表查询*/
export const findMessagesTemplateList = p =>
  post("/sysback/messagestoresend/baseQueryList", p);

/*消息模版-添加*/
export const addMessagesTemplate = p =>
  post("/sysback/messagestoresend/baseAdd", p);

/*短信模版-编辑*/
export const updateMessagesTemplate = p =>
  post("/sysback/messagestoresend/baseUpdate", p);

/*消息模版-查看*/
export const getMessagesTemplate = p =>
  post(`/sysback/messagestoresend/baseGetByUuid?uuid=${p.uuid}`, p);

/*消息模版关联供应商列表*/
export const MessageTemplateSupplice = p =>
  post("sysback/messagestoresendrel/getProviderList", p);

/*消息模版关联供应商*/
export const MessageTemplateSuppliceGl = p =>
  post("sysback/messagestoresendrel/baseAdd", p);

//员工/商户购售后
export const getafterSalesList = p =>
  post("/sysback/orderaftermain/getOrderAfterList", p);
/*获取员工/商户购售后订单详情*/
export const getSaleOrderItemList = p =>
  post(`/sysback/orderaftermain/getDetails?uuid=${p.uuid}`, p);

//企业购订单列表
export const getCompanyList = p => get("/back/ordersc/company/list", p);

//员工/商户购订单列表
export const getSafftList = p => get("/back/ordersc/store/list", p);

//员工管理列表
export const getUserStaffList = p =>
  post("/sysback/usersubinfo/getUserList", p);
//启用/禁用员工
export const openUserStatus = p => post("/sysback/usersubinfo/updateState", p);
//企业审核
export const auditStatus = p => post("/sysback/usersubinfo/verifyUser", p);
//后台在审核企业用户的时候编辑此用户是否可以购买月结商品
export const adjustUserCanBuyMonthlyProduct = p =>
  post(
    `/sysback/usersubinfo/adjustUserCanBuyMonthlyProduct?uuid=${p.uuid}&canBuy=${p.canBuy}`,
    p
  );
//获取员工信息列表
export const findUserMsgList = p =>
  post(`/sysback/usersubinfo/getUserDetails?uuid=${p.uuid}`, p);
//员工管理关联角色
export const repeatRoleUserList = p =>
  post("/sysback/usersubinfo/contactRole", p);
//员工管理重置密码
export const staffPassUserList = p =>
  post("/sysback/usersubinfo/resetPassword", p);

//手动同步
export const getAutoJDList = p => post("/jd/pull", p);

//获取单位
export const getGoodsUnit = p => post("/goodsUnit/select", {});

//商品品牌
export const getBrandListMsg = p => post("/goodsBrand/select", {});

//提交京东商品
export const JDUpdateGoods = p => post("/jd/update", p);

//京东商品管理列表
export const getJDList = p =>
  post(`/jd/search?page=${p.page}&pageSize=${p.pageSize}`, {
    jdSkuId: p.jdSkuId,
    jdName: p.jdName,
    brandName: p.brandName,
    categoryId: p.categoryId,
    status: p.status
  });

//页面配置列表
export const getPageSettingList = p =>
  post("/sysback/channelpage/baseQueryList", p);

//供应商活动-页面配置列表
export const getSupplyPageSettingList = p =>
  post("/sysback/supply/channelpage/baseQueryList", p);

/*新增页面配置*/
export const addPageList = p => post("/sysback/channelpage/baseAdd", p);
/*修改页面配置*/
export const updatePageList = p => post("/sysback/channelpage/baseUpdate", p);

//通过uuid获取页面配置
export const findPageMsgList = p =>
  post(`/sysback/channelpage/baseGetByUuid?uuid=${p.uuid}`, p);

//通过spuUuid获取企业购SKU数据
export const getSkuDatas = p =>
  post(
    `/company/channel/spu/all/getByChannelSpuUuid?channelSpuUuid=${p.spuUuid}`,
    p
  );
//通过spuUuid获取员工商户购SKU数据
export const getSkuStoreDatas = p =>
  post(
    `/store/channel/spu/all/getByChannelSpuUuid?channelSpuUuid=${p.spuUuid}`,
    p
  );
//通过spuUuid获取内部采购SKU数据
export const getSkuInnerDatas = p =>
  post(
    `/inner/channel/spu/all/getByChannelSpuUuid?channelSpuUuid=${p.spuUuid}`,
    p
  );

//删除页面配置
export const deletePageList = p =>
  post(`/sysback/channelpage/baseDeletes?uuids=${p.uuids}`, p);

//居然官网装修搭建列表
export const getOffcialWesiteList = p =>
  post("/sysback/channelpagecomp/baseQueryList", p);

//供应商活动-页面配置-点击页面搭建
export const getSupplyOffcialWesiteList = p =>
  post("/sysback/supply/channelpagecomp/baseQueryList", p);
//供应商活动-页面配置-点击页面搭建-点击banner图
export const getSupplyCompPicList = p =>
  post("/sysback/supply/comp/pic/baseQueryList", p);
//供应商活动-页面配置-点击页面搭建-新增banner图
export const CompPicAdd = p => post("/sysback/supply/comp/pic/baseAdd", p);
//供应商活动-页面配置-点击页面搭建-编辑banner图 获取
export const findSupplyCompPicInfo = p =>
  post(`/sysback/supply/comp/pic/baseGetByUuid?uuid=${p.uuid}`, p);
//供应商活动-页面配置-点击页面搭建-编辑banner图
export const CompPicUpdate = p =>
  post("/sysback/supply/comp/pic/baseUpdate", p);
export const CompPicChangeState = p =>
  post("/sysback/supply/comp/pic/changeState", p);
//供应商活动-页面配置-点击页面搭建-删除banner图
export const CompPicDeletes = p =>
  post(`/sysback/supply/comp/pic/baseDeletes?uuids=${p.uuids}`, p);

//供应商活动-页面配置-点击页面搭建 - 分类导航栏 -开始
//供应商活动-页面配置-点击页面搭建-点击分类导航栏
export const getSupplyCompcategoryList = p =>
  post("/sysback/supply/comp/category/baseQueryList", p);
//供应商活动-页面配置-点击页面搭建-新增分类导航栏
export const CompcategoryAdd = p =>
  post("/sysback/supply/comp/category/baseAdd", p);
//供应商活动-页面配置-点击页面搭建-编辑分类导航栏 获取
export const findSupplyCompcategoryInfo = p =>
  post(`/sysback/supply/comp/category/baseGetByUuid?uuid=${p.uuid}`, p);
//供应商活动-页面配置-点击页面搭建-编辑分类导航栏
export const CompcategoryUpdate = p =>
  post("/sysback/supply/comp/category/baseUpdate", p);
export const CompcategoryChangeState = p =>
  post("/sysback/supply/comp/category/changeState", p);
//供应商活动-页面配置-点击页面搭建-删除分类导航栏
export const CompcategoryDeletes = p =>
  post(`/sysback/supply/comp/category/baseDeletes?uuids=${p.uuids}`, p);
//供应商活动-页面配置-点击页面搭建 - 分类导航栏 -结束

//供应商活动-页面配置-点击页面搭建 - 图标 -开始
//供应商活动-页面配置-点击页面搭建-点击图标
export const getSupplyCompIconList = p =>
  post("/sysback/supply/comp/icon/baseQueryList", p);
//供应商活动-页面配置-点击页面搭建-新增图标
export const CompIconAdd = p => post("/sysback/supply/comp/icon/baseAdd", p);
//供应商活动-页面配置-点击页面搭建-编辑图标 获取
export const findSupplyCompIconInfo = p =>
  post(`/sysback/supply/comp/icon/baseGetByUuid?uuid=${p.uuid}`, p);
//供应商活动-页面配置-点击页面搭建-编辑图标
export const CompIconUpdate = p =>
  post("/sysback/supply/comp/icon/baseUpdate", p);
export const CompIconChangeState = p =>
  post("/sysback/supply/comp/icon/changeState", p);
//供应商活动-页面配置-点击页面搭建-删除图标
export const CompIconDeletes = p =>
  post(`/sysback/supply/comp/icon/baseDeletes?uuids=${p.uuids}`, p);
//供应商活动-页面配置-点击页面搭建 - 图标 -结束

//供应商活动-页面配置-点击页面搭建 - 推荐 -开始
//供应商活动-页面配置-点击页面搭建-点击推荐
export const getSupplyCompAdoneList = p =>
  post("/sysback/supply/comp/adone/baseQueryList", p);
//供应商活动-页面配置-点击页面搭建-新增推荐
export const CompAdoneAdd = p => post("/sysback/supply/comp/adone/baseAdd", p);
//供应商活动-页面配置-点击页面搭建-编辑推荐 获取
export const findSupplyCompAdoneInfo = p =>
  post(`/sysback/supply/comp/adone/baseGetByUuid?uuid=${p.uuid}`, p);
//供应商活动-页面配置-点击页面搭建-编辑推荐
export const CompAdoneUpdate = p =>
  post("/sysback/supply/comp/adone/baseUpdate", p);
export const CompAdoneChangeState = p =>
  post("/sysback/supply/comp/adone/changeState", p);
//供应商活动-页面配置-点击页面搭建-删除推荐
export const CompAdoneDeletes = p =>
  post(`/sysback/supply/comp/adone/baseDeletes?uuids=${p.uuids}`, p);
//供应商活动-页面配置-点击页面搭建 - 推荐 -结束

//供应商活动-页面配置-点击页面搭建 - 推荐-分类 -开始
//供应商活动-页面配置-点击页面搭建-点击推荐
export const getSupplyCompAdtwoList = p =>
  post("/sysback/supply/comp/adtwo/baseQueryList", p);
//供应商活动-页面配置-点击页面搭建-新增推荐
export const CompAdtwoAdd = p => post("/sysback/supply/comp/adtwo/baseAdd", p);
//供应商活动-页面配置-点击页面搭建-编辑推荐 获取
export const findSupplyCompAdtwoInfo = p =>
  post(`/sysback/supply/comp/adtwo/baseGetByUuid?uuid=${p.uuid}`, p);
//供应商活动-页面配置-点击页面搭建-编辑推荐
export const CompAdtwoUpdate = p =>
  post("/sysback/supply/comp/adtwo/baseUpdate", p);
export const CompAdtwoChangeState = p =>
  post("/sysback/supply/comp/adtwo/changeState", p);
//供应商活动-页面配置-点击页面搭建-删除推荐
export const CompAdtwoDeletes = p =>
  post(`/sysback/supply/comp/adtwo/baseDeletes?uuids=${p.uuids}`, p);
//供应商活动-页面配置-点击页面搭建 - 推荐-分类 -结束

//供应商活动-页面配置-点击页面搭建 - 推荐-分类-图标 -开始
//供应商活动-页面配置-点击页面搭建-点击推荐
export const getSupplyCompAdthreeList = p =>
  post("/sysback/supply/comp/adthree/baseQueryList", p);
//供应商活动-页面配置-点击页面搭建-新增推荐
export const CompAdthreeAdd = p =>
  post("/sysback/supply/comp/adthree/baseAdd", p);
//供应商活动-页面配置-点击页面搭建-编辑推荐 获取
export const findSupplyCompAdthreeInfo = p =>
  post(`/sysback/supply/comp/adthree/baseGetByUuid?uuid=${p.uuid}`, p);
//供应商活动-页面配置-点击页面搭建-编辑推荐
export const CompAdthreeUpdate = p =>
  post("/sysback/supply/comp/adthree/baseUpdate", p);
export const CompAdthreeChangeState = p =>
  post("/sysback/supply/comp/adthree/changeState", p);
//供应商活动-页面配置-点击页面搭建-删除推荐
export const CompAdthreeDeletes = p =>
  post(`/sysback/supply/comp/adthree/baseDeletes?uuids=${p.uuids}`, p);
//供应商活动-页面配置-点击页面搭建 - 推荐-分类 -结束

//通过uuid获取信息
export const findoffcialWesiteList = p =>
  post(`/sysback/channelpagecomp/baseGetByUuid?uuid=${p.uuid}`, p);
//删除页面
export const deleteOffcialWesiteList = p =>
  post(`/sysback/channelpagecomp/baseDeletes?uuids=${p.uuids}`, p);
/*新增组件*/
export const addOffcialList = p => post("/sysback/channelpagecomp/baseAdd", p);

//供应商活动装修，新增组件，修改组件
export const addSupplyOffcialList = p =>
  post("/sysback/supply/channelpagecomp/baseAdd", p);
export const updateSupplyOffcialList = p =>
  post("/sysback/supply/channelpagecomp/baseUpdate", p);
export const updateSupplyOffcialState = p =>
  post("/sysback/supply/channelpagecomp/changeState", p);
export const deleteSupplyOffcialWesiteList = p =>
  post(`/sysback/supply/channelpagecomp/baseDeletes?uuids=${p.uuids}`, p);
export const findSupplyOffcialWesiteList = p =>
  post(`/sysback/supply/channelpagecomp/baseGetByUuid?uuid=${p.uuid}`, p);

/*编辑组件*/
export const updateOffcialList = p =>
  post("/sysback/channelpagecomp/baseUpdate", p);

/*新增楼层*/
export const addFloorList = p => post("/sysback/channelcompcontent/baseAdd", p);
/*编辑楼层*/
export const updateFloorList = p =>
  post("/sysback/channelcompcontent/baseUpdate", p);
//楼层列表
export const getFloorList = p =>
  post("/sysback/channelcompcontent/baseQueryList", p);
//通过uuid获取信息
export const findFloorList = p =>
  post(`/sysback/channelcompcontent/baseGetByUuid?uuid=${p.uuid}`, p);
//删除页面
export const deleteFloorList = p =>
  post(`/sysback/channelcompcontent/baseDeletes?uuids=${p.uuids}`, p);
// export function deleteFloorList (data) {
//      return request({
//        url: '/sysback/channelcompcontent/baseDeletes',
//        method: 'post',
//        data:data
//      })
//    }
//所属行业列表
export const industryList = p => post("/tradecategory/baseQueryList", p);
/*所属行业-添加*/
export const addIndustryTemplate = p => post("/tradecategory/baseAdd", p);

/*所属行业-编辑*/
export const updateIndustryTemplate = p => post("/tradecategory/baseUpdate", p);

/*所属行业-删除*/
export const deleteIndustryTemplate = p =>
  post(`/tradecategory/baseDeletes?uuids=${p.uuid}`, p);

/*所属行业-查看*/
export const getIndustryTemplate = p =>
  post(`/tradecategory/baseGetByUuid?uuid=${p.uuid}`, p);

//企业对账单
export const getCompanyStatementList = p =>
  post("/sysback/billorder/getBillList", p);

/*获取企业对账单详情*/
export const getCompanyStatementUuid = p =>
  post(`/sysback/billorder/baseGetByUuid?uuid=${p.uuid}`, p);

//企业付款单
export const getCompanyPaymentList = p =>
  post("/sysback/billpayorder/getBillPayList", p);

//对账单明细
export const billorderdetail = p =>
  post("/sysback/billorderdetail/getDetailList", p);

//付款单明细
export const billpayorderdetail = p =>
  post("/sysback/billpayorderdetail/getDetailList", p);

/*获取企业付款单详情*/
export const getCompanyPaymentUuid = p =>
  post(`/sysback/billorder/baseGetByUuid?uuid=${p.uuid}`, p);

//获取省列表
export const getProvinceList = p => get("/back/region/listProvince", p);
//获取市区列表
export const getCityList = p => get(`/back/region/listCity?parentId=${p}`, p);
//获取区，县
export const getAreaList = p => get(`/back/region/listCounty?parentId=${p}`, p);

//发票列表
export const queryInvoicePage = p => post("/invoice/search", p);
//添加发票
export const addInvoice = p => post("/invoice/add", p);
//编辑
export const editInvoice = p => post("/invoice/update", p);
//删除
export const deleteInvoice = p => post("/invoice/delete", p);
//查询Id
export const getInvoice = p => post("/invoice/find", p);
// 供应商列表银联设置
export const addUnionPay = p =>
  post("/bmapi/provider/edit/providerUnionPay", p);
/*获取企业购子账户*/
export const getComponyAccountlist = p =>
  post("/sysback/companysubinfo/baseQueryList", p);

/*新建企业购子账户*/
export const saveSubUser = p => post("/sysback/companysubinfo/createSub", p);
/*修改子账户*/
export const updateSubUser = p => post("/sysback/abcfimnnoopsuy/updateSub", p);
/*企业购子账户--启用、禁用*/
export const enableDisableSubUser = p =>
  post(`/sysback/companysubinfo/updateState?uuid=${p.uuid}&state=${p.state}`);
/*广告费设置-列表查询*/
export const findAdsetList = p =>
  post("/sysback/admoney/adset/baseQueryList", p);
/*广告费设置-添加*/
export const addCreateAdSet = p =>
  post("/sysback/admoney/adset/createAdSet", p);
/*广告费设置-查看*/
export const getCreateAdSet = p =>
  post(`/sysback/admoney/adset/queryDetail?uuid=${p.uuid}`, p);
/*短信模版-编辑*/
export const updateCreateAdSet = p =>
  post("/sysback/admoney/adset/updateAdSet", p);
/*短信模版-修改状态*/
export const changeStateCreateAdSet = p =>
  post("/sysback/admoney/adset/changeState", p);
/*广告区域-查看*/
export const queryAreaValues = p =>
  post("/sysback/admoney/main/queryAreaValues", p);
/*广告位置-查看*/
export const queryPosValues = p =>
  post("/sysback/admoney/main/queryPosValues", p);
/*广告列表-查看*/
export const baseQueryList = p =>
  post("/sysback/admoney/main/baseQueryList", p);
/*查询供应商*/
export const selectList = p =>
  post(
    `/sysback/admoney/provider/select?providerName=${p.providerName}&pageNum=${p.pageNum}&pageSize=${p.pageSize}`,
    {}
  );
/*保存广告费*/
export const createAdMoney = p =>
  post("/sysback/admoney/main/createAdMoney", p);
/*企业购子账户--修改密码*/
export const resetPassword = p =>
  post(
    "/sysback/companysubinfo/resetPassword?uuid=" +
      p.uuid +
      "&password=" +
      p.password
  );
/*获取供应商保证金设置列表*/
export const getsupplierMarginlist = p =>
  post("/sysback/depositconfigure/baseQueryList", p);
/*新增保证金设置*/
export const addSupplierDeposit = p =>
  post("/sysback/depositconfigure/baseAdd", p);
/*编辑保证金设置*/
export const editSupplierDeposit = p =>
  post("/sysback/depositconfigure/baseUpdate", p);
/*保证金设置详情*/
export const getSupplierDeposit = p =>
  post(`/sysback/depositconfigure/baseGetByUuid?uuid=${p.uuid}`, p);
//保证金分类列表
export const getDepositCategory = p =>
  post(
    `/sysback/depositcategory/getDepositCategory?serviceType=${p.serviceType}`,
    p
  );
/*获取保证金单据列表*/
export const getBaseQueryList = p =>
  post("/sysback/depositbill/baseQueryList", p);
/*保证金单据详情*/
export const getDepositDill = p =>
  post(`/sysback/depositbill/baseGetByUuid?uuid=${p.uuid}`, p);
/*创建保证金付款单*/
export const createDepositBill = p =>
  post("/sysback/depositbill/createDepositBill", p);
/*创建保证金退款单*/
export const createReturnBill = p =>
  post("/sysback/depositbill/createReturnBill", p);
/*修改保证金单据*/
export const updateDepositBill = p =>
  post("/sysback/depositbill/updateDepositBill", p);
/*保证金单据详情*/
export const getDepositBill = p =>
  post(`/sysback/depositbill/baseGetByUuid?uuid=${p.uuid}`, p);
/*保证金单据审核*/
export const auditDepositBill = p =>
  post("/sysback/depositbill/auditDepositBill", p);
/*暂不收取*/
export const depositbillNotCharged = p =>
  post("/sysback/depositbill/notCharged", p);
/*提交审核新增广告费*/
export const createAndAuditMoney = p =>
  post("/sysback/admoney/main/createAndAuditMoney", p);
/*广告费列表-查看*/
export const queryDetail = p =>
  post(`/sysback/admoney/main/queryDetail?uuid=${p.id}`, {});
/*广告费列表-编辑保存*/
export const updateAdMoney = p =>
  post("/sysback/admoney/update/updateAdMoney", p);
/*广告费列表-编辑提交审核*/
export const updateAndAuditMoney = p =>
  post("/sysback/admoney/update/updateAndAuditMoney", p);
/*广告费列表-审核通过*/
export const passAuditMoney = p =>
  post("/sysback/admoney/main/pass?uuid=" + p.uuid + "&reason=" + p.reason);
/*广告费列表-审核驳回*/
export const rejectAuditMoney = p =>
  post("/sysback/admoney/main/reject?uuid=" + p.uuid + "&reason=" + p.reason);
/*广告费列表-EBS模拟已付款*/
export const ebsPaid = p => post("/sysback/admoney/test/ebsPaid?recordNo=" + p);
/*广告费列表-EBS模拟驳回*/
export const ebsFail = p => post("/sysback/admoney/test/ebsFail?recordNo=" + p);
/*平台管理费设置-查询*/
export const getPlatManFeeSet = p =>
  post("/sysback/platmanagefeeSet/getPlatManFeeSet");
/*平台管理费设置-新增编辑*/
export const editPlatManFeeSet = p =>
  post("/sysback/platmanagefeeSet/editPlatManFeeSet", p);
/*平台管理费列表-查询*/
export const getPlatManFeeBillList = p =>
  post("/sysback/platmanagefeebill/getPlatManFeeBillList", p);
/*平台管理费列表-查询供应商*/
export const providerSelectList = p =>
  post(
    `/sysback/PlatformManagefee/provider/select?providerName=${p.providerName}&pageNum=${p.pageNum}&pageSize=${p.pageSize}`,
    {}
  );
/*平台管理费列表-查询供应商*/
export const creategetPlatManFeeBill = p =>
  post("/sysback/platmanagefeebill/creategetPlatManFeeBill", p);
/*平台管理费列表-查看*/
export const getinfo = p =>
  post(`/sysback/platmanagefeebill/getinfo?uuid=${p.id}`, {});
/*平台管理费列表-编辑*/
export const editPlatManFeeBill = p =>
  post(`/sysback/platmanagefeebill/editPlatManFeeBill`, p);
/*平台管理费列表-审核驳回*/
export const auditPlatManFeeBill = p =>
  post("/sysback/platmanagefeebill/auditPlatManFeeBill", p);
/*平台管理费列表-暂不收取*/
export const notCharged = p => post("/sysback/platmanagefeebill/notCharged", p);
/*平台管理费列表-全部结算*/
export const allProviderSettlement = p =>
  post("/sysback/platmanagefeebill/allProviderSettlement", p);
/*平台管理费列表-创建平台管理费*/
export const newCreate = p =>
  post("/sysback/platmanagefeebill/new/create", p);
/*供应商费用列表-查询*/
export const getStatisticsList = p =>
  post("/sysback/providercoststatistics/getStatisticsList", p);
/*供应商费用列表-查询合计*/
export const getStatisticsListTotal = p =>
  post("/sysback/providercoststatistics/getStatisticsListTotal", p);
/*站内信分页查询*/
export const getByCondition = p =>
  post("/sysback/innermessage/myGetByCondition", p);
/*站内信详情/查看*/
export const getDetails = p =>
  post(`sysback/innermessage/getDetails?uuid=${p.uuid}`, {});
/*获取未读数量*/
export const getUnReadMsgCount = p =>
  get("/sysback/innermessage/getUnReadMsgCount", p);
/*站内信模板-查询*/
export const getTemplateList = p =>
  post("/sysback/InnerMessageTemplate/baseQueryList", p);
/*站内信模板-新增*/
export const addList = p => post("/sysback/InnerMessageTemplate/add", p);
// 站内信模板-编辑
export const editList = p => post("/sysback/InnerMessageTemplate/edit", p);
/*站内信模板-启用或者禁用*/
export const getState = p =>
  post(
    `/sysback/InnerMessageTemplate/enableOrDisable?uuid=${p.uuid}&operateNo=${p.operateNo}`,
    {}
  );

/*站内信模板-查看*/
export const getInfo = p =>
  post(`/sysback/InnerMessageTemplate/getInfo?uuid=${p.uuid}`, {});

/*保证金单据-暂不收取*/
export const notChargedList = p => post("/sysback/depositbill/notCharged", p);

/*保证金-查询供应商信息*/
// export const getSupplierList = p => post("/bmapi/provider/select", p);

/*保证金-查询供应商信息*/
export const getSupplierList = p =>
  post(
    `/sysback/PlatformManagefee/provider/select?providerName=${p.providerName}&pageNum=${p.pageNum}&pageSize=${p.pageSize}`,
    {}
  );
// export const getSupplierList = p =>
//   post(
//     `/bmapi/provider/select?providerName=${p.providerName}&pageNum=${p.pageNum}&pageSize=${p.pageSize}`,
//     {}
//   );
