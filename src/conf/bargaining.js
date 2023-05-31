export default {
  //
  enquiryType: [
    { id: 1, name: "公开询价" },
    { id: 2, name: "定向询价" }
  ],

  noticeStatus: [
    { id: 0, name: "待审核" },
    { id: 1, name: "已发布" },
    { id: 2, name: "已驳回" },
    { id: 3, name: "报名结束" },
    { id: 4, name: "已作废" },
    //{id:5,name:'已创建询价结果'},
    { id: 9, name: "已完结" },
    { id: 10, name: "撤销" },
    { id: 11, name: "已废标" }
  ],
  resultStatus: [
    /*      0:待审核 1:已发布、已审核  2: 已驳回 3: 报名结束 4: 已作废  5:已创建合同待审核 6：合同审核已驳回 7：合同待审核通过 9：已完成',*/
    { id: 0, name: "待审核" },
    { id: 1, name: "已发布" },
    { id: 2, name: "已驳回" },
    { id: 4, name: "已作废" },
    { id: 5, name: "已创建合同待审核" },
    { id: 6, name: "合同审核已驳回" },
    { id: 7, name: "合同审核通过" },
    { id: 9, name: "已完结" },
    { id: 10, name: "已撤销" }
    // { id: 11, name: "重新创建合同" }
  ]
};
