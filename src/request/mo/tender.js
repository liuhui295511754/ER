import {
    get,
    post,
    gets
} from './../http';

export default {
    //项目
    project: {
        list: (props, query) => post('/bmapi/tender/searchTenderingProjectList', props, query),
        new: props => post('/bmapi/tender/addTenderingProject', props),
        detail: (props, query) => post('/bmapi/tender/tenderingProjectInfo/{projectId}', props, query),
    },

    //公告
    notice: {
        list: (props, query) => post('/bmapi/tender/searchTenderingNoticeList', props, query),
        new: (props, query) => post('/bmapi/tender/addTenderingNotice/{projectId}', props, query),
        update: (props, query) => post('/bmapi/tender/updTenderingNotice/{projectId}', props, query),
        detail: (props, query) => post('/bmapi/tender/noticeInfo/{noticeId}', props, query),
        details: (props, query) => post('/bmapi/tender/tenderingProjectInfo/{projectId}', props, query),
        verify: (props, query) => post('/bmapi/tender/tenderingNoticeVerify/{noticeId}/{verifyStatus}', props, query),
        merchant: (props, query) => post('/bmapi/tender/findProviderList4Tender/{noticeId}', props, query),
        merchantDetail: (props, query) => post('/bmapi/tender/findProviderList4Tender/{noticeId}', props, query),
        signupVerify: (props, query) => post('/bmapi/tender/tenderingSignupVerify/{signupId}/{verifyStatus}', props, query),//报名审核
        uploadAnswerFile: (props, query) => post('/bmapi/tender/uploadNoticeAnswerFile/{noticeId}', props, query),//上传答疑文件
        removeAnswerFile: (props, query) => post('/bmapi/tender/removeNoticeAnswerFile/{answerId}', props, query),//删除答疑文件
        cancel: (props, query) => post('/bmapi/tender/cancelTenderingNotice/{noticeId}', props, query),//作废招标公告
        quit: (props, query) => post('/bmapi/tender/quitTenderingNotice/{noticeId}', props, query),//废标招标公告
        revoke: (props, query) => post('/bmapi/tender/tenderingNoticeReturn/{noticeId}', props, query),//撤销招标公告
        edit: (props, query) => post('/bmapi/tender/updTenderingNotice/{openId}', props, query),//编辑招标公告
        bidPicDetail: (props, query) => post('/bmapi/tender/myTenderPic/{signId}', props, query),//报名资质详情
        enquirySignupVerify: (props, query) => post('/bmapi/tender/enquirySignupVerify/{signId}/{verifyStatus}', props, query),//报名资质详情
        myEnquiryPic: (props, query) => post('/bmapi/tender/myEnquiryPic/{signId}', props, query),//报名资质详情
    },

    //单位
    org: {
        searchName: props => post('/org/search/name', props),
        searchName1: props => post('/org/search/searchOrgForTenderAnnouncementList', props),
    },

    // //单位
    // org: {
    // },

    //供应商
    provider: {
        list: (props, query) => post('/bmapi/contract/provider/find/{serviceType}', props, query),
    },

    //开标
    open: {
        list: (props, query) => post('/bmapi/tender/searchTenderingOpenList', props, query),
        new: (props, query) => post('/bmapi/tender/addTenderingOpen/{noticeId}', props, query),
        verify: (props, query) => post('/bmapi/tender/tenderingOpenVerify/{openId}/{verifyStatus}', props, query),
        detail: (props, query) => post('/bmapi/tender/openInfo/{openId}', props, query),
        cancel: (props, query) => post('/bmapi/tender/cancelTenderingOpen/{openId}', props, query),
        revoke: (props, query) => post('/bmapi/tender/tenderingOpenVerifyReturn/{openId}', props, query),
        edit: (props, query) => post('/bmapi/tender/editTenderingOpen/{openId}', props, query),
        merchant: (props, query) => post('/bmapi/tender/findProviderList4OpenTender/{openId}', props, query),

    },

    //中标
    win: {
        list: (props, query) => post('/bmapi/tender/searchTenderingWinList', props, query),
        new: (props, query) => post('/bmapi/tender/addTenderingWin/{openId}', props, query),
        findProvider: (props, query) => post('/bmapi/tender/findProviderList4CreateWinTender/{openId}', props, query),
        verify: (props, query) => post('/bmapi/tender/tenderingWinVerify/{winId}/{verifyStatus}', props, query),
        edit: (props, query) => post('/bmapi/tender/editTenderingWin/{winId}', props, query),
        detail: (props, query) => post('/bmapi/tender/winInfo/{winId}', props, query),
        cancel: (props, query) => post('/bmapi/tender/quitTenderingWin/{winId}', props, query),//废标
        cancel1: (props, query) => post('/bmapi/tender/cancelTenderingWinVerify/{winId}', props, query),//作废
        merchant: (props, query) => post('/bmapi/tender/findProviderList4WinTender/{noticeId}', props, query),
        //创建中标公告可选的供应商
        merchantList: (props, query) => post(`/bmapi/tender/selectProviderList4CreateWin/${props.businessType}/${props.noticeId}`, props),
	verifyList: (props, query) => post('/bmapi/tenderVerify/searchTenderingWinList4Verify', props, query),
        //撤销
        return: (props, query) => post('/bmapi/tender/returnTenderingWinVerify/{winId}', props, query),
    },

    //标书
    book: {
        list: (props, query) => post('/bmapi/tender/searchTenderingBatchFileList', props, query),//标书管理列表
        offlineReceive: (props, query) => post('/bmapi/tender/addOfflineReceiveBid/{signupId}', props, query),//线下领取标书
        uplaod: (props, query) => post('/bmapi/tender/uploadTenderingBatchFile/{noticeId}', props, query),//标书管理：上传
        replyList: (props, query) => post('/bmapi/tender/findTenderingNoticeReplyList/{noticeId}', props, query),//查看回标
        uploadAnswerFile: (props, query) => post('/bmapi/tender/uploadTenderingAnswerFile/{noticeId}', props, query),//上传应标答疑文件
        removeAnswerFile: (props, query) => post('/bmapi/tender/removeTenderingAnswerFile/{answerId}', props, query),//删除应标答疑文件
    },

    //保证金
    deposit: {
        list: (props, query) => post('/bmapi/tender/searchTenderDepositList', props, query),
        verify: (props, query) => post('/bmapi/tender/tenderDepositVerify/{depositId}/{verifyStatus}', props, query),
        detail: (props, query) => post('/bmapi/tender/tenderDepositInfoList/{noticeId}', props, query),
        refund: (props, query) => post('/bmapi/tender/uploadTenderDepositRefundFile/{depositId}', props, query),

    },
    //询比价保证金
    enquiryDeposit: {
        list: (props, query) => post('/bmapi/tender/searchEnquiryDepositList', props, query),
        // verify: (props, query) => post('/bmapi/tender/tenderDepositVerify/{depositId}/{verifyStatus}', props, query),
        detail: (props, query) => post('/bmapi/tender/enquiryDepositInfoList/{noticeId}', props, query),
        refund: (props, query) => post('/bmapi/tender/uploadEnquiryDepositRefundFile/{depositId}', props, query),

    },
    //合同
    contract:{
        // new: (props, query) => post('/bmapi/contract/add/contract', props, query),
        new: (props, query) => post('/bmapi/contract/add/contract4tender', props, query),
        newEnquiry: (props, query) => post('/bmapi/contract/add/contract4enquiry', props, query),
    }
}
