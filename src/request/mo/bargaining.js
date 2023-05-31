import {
    get,
    post,
    gets
} from './../http';

//询价公告

export default {
    //项目
    notice: {
        list: (props, query) => post('/bmapi/tender/searchEnquiryNoticeList', props, query),
        new: props => post('/bmapi/tender/addEnquiryNotice', props),
        edit: props => post('/bmapi/tender/updEnquiryNotice', props),
        detail: (props, query) => post('/bmapi/tender/enquiryNoticeInfo/{noticeId}', props, query),
        cancel: (props, query) => post('/bmapi/tender/enquiryReturn/{noticeId}', props, query),
        bid: (props, query) => post('/bmapi/tender/quitEnquiryNotice/{noticeId}', props, query),
        return: (props, query) => post('/bmapi/tender/returnEnquiryNotice/{noticeId}', props, query),
        win: (props, query) => post('/bmapi/tender/addEnquiryWin/{noticeId}', props, query),
        merchant: (props, query) => post('/bmapi/tender/findProviderList4Enquiry/{noticeId}', props, query),
        //创建中标公告可选的供应商
        merchantList: (props, query) => post(`/bmapi/tender/selectProviderList4CreateWin/${props.businessType}/${props.noticeId}`, props),
        verify: (props, query) => post('/bmapi/tender/enquiryVerify', props, query),
    },

    //公告
    result: {
        list: (props, query) => post('/bmapi/tender/searchEnquiryWinList', props, query),
        new: (props, query) => post('/bmapi/tender/addEnquiryWin/{noticeId}', props, query),
        detail: (props, query) => post('/bmapi/tender/enquiryWinInfo/{winId}', props, query),
        merchant: (props, query) => post('/bmapi/tender/findProviderList4Enquiry/{noticeId}', props, query),
        cancel: (props, query) => post('/bmapi/tender/cancelEnquiryWin/{winId}', props, query),//作废招标公告
        listTwo: (props, query) => post('/bmapi/tenderVerify/searchEnquiryWinList4Verify', props, query),
        edit: (props, query) => post('/bmapi/tender/editEnquiryWin/{noticeId}', props, query),
        bid: (props, query) => post('/bmapi/tender/enquiryReturn/{winId}', props, query),//撤销
        update: (props, query) => post('/bmapi/tender/editEnquiryWin/{noticeId}', props, query),//更新
    },
    //保证金
    deposit: {
        //list: (props,  query) => post('/bmapi/tender/searchTenderDepositList', props, query),
        verify: (props, query) => post('/bmapi/tender/enquiryDepositVerify/{signId}/{verifyStatus}', props, query),
        //detail: (props, query) => post('/bmapi/tender/tenderDepositInfoList/{noticeId}', props, query),
        //refund: (props, query) => post('/bmapi/tender/uploadTenderDepositRefundFile/{depositId}', props, query),
    },

}
