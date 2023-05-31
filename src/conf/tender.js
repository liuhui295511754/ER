export default {
  //
  projectType: [
    {
      id: 1,
      name: "工程类型"
    },
    {
      id: 2,
      name: "IT类型"
    },
    {
      id: 3,
      name: "采购类型"
    },
    {
      id: 4,
      name: "服务类型"
    }
  ],
  projectStatus: [
    {
      id: 0,
      name: "已创建"
    },
    {
      id: 1,
      name: "招标中"
    },
    {
      id: 2,
      name: "开标中"
    },
    {
      id: 3,
      name: "选定供应商"
    },
    {
      id: 4,
      name: "流标"
    },
    {
      id: 5,
      name: "已完结"
    },
    {
      id: 6,
      name: "招标-驳回"
    },
    {
      id: 7,
      name: "已验收"
    },
    {
      id: 8,
      name: "招标-撤销"
    },
    {
      id: 9,
      name: "已作废"
    },
    {
      id: 10,
      name: "已废标"
    }
  ],
  tenderingStages: [
    /*value="招标阶段 1:项目阶段 2：招标阶段 3：开标阶段 4：中标阶段"*/
    {
      id: 1,
      name: "项目阶段"
    },
    {
      id: 2,
      name: "招标阶段"
    },
    {
      id: 3,
      name: "开标阶段"
    },
    {
      id: 4,
      name: "中标阶段"
    }
  ],
  tenderingStatuss: [
    /*value="招标状态 1:待审核 2:审核通过 3:审核驳回 4:招标作废"*/
    // {
    //     id: 0,
    //     name: '待审核',
    // },
    // {
    //     id: 1,
    //     name: '已发布',
    // },
    // {
    //     id: 2,
    //     name: '已驳回',
    // },
    // {
    //     id: 3,
    //     name: '报名结束3',
    // },
    // {
    //     id: 4,
    //     name: '已作废',
    // },
    {
      id: 1,
      name: "待审核"
    },
    {
      id: 2,
      name: "审核通过"
    },
    {
      id: 3,
      name: "审核驳回"
    },
    {
      id: 4,
      name: "招标作废"
    },
    {
      id: 5,
      name: "开标公告待审核"
    },
    {
      id: 6,
      name: "开标公告审核通过"
    },
    {
      id: 8,
      name: "中标公告审核通过"
    },
    {
      id: 9,
      name: "已撤销"
    },
    {
      id: 10,
      name: "已作废"
    },
    {
      id: 11,
      name: "开标公告撤销编辑"
    }
  ],
  providerType: [
    { id: 0, name: "内部" },
    { id: 1, name: "外部" }
  ],
  buildType: [
    {
      id: 1,
      name: "代建"
    },
    {
      id: 2,
      name: "自建"
    }
  ],
  tenderingType: [
    {
      id: 1,
      name: "公开招标"
    },
    {
      id: 2,
      name: "邀标"
    }
  ],
  isUploadBid: [
    {
      id: 0,
      name: "必须上传"
    }
    /* {
            id: 1,
            name: '可以不传',
        },*/
  ],
  tenderingStatus: [
    { id: 0, name: "待审核" },
    { id: 1, name: "已发布" },
    { id: 2, name: "已驳回" },
    { id: 3, name: "报名结束" },
    { id: 4, name: "已废标" },
    { id: 5, name: "开标公告待审核" },
    { id: 6, name: "开标公告审核通过" },
    { id: 7, name: "中标公告待审核" },
    { id: 8, name: "中标公告审核通过" },
    { id: 9, name: "已撤销" },
    { id: 10, name: "已作废" },
    { id: 11, name: "开标公告撤销" },
    { id: 12, name: "开标公告驳回" },
    { id: 13, name: "开标公告作废" }
  ],
  tenderingOpenStatus: [
    { id: 0, name: "待审核" },
    { id: 1, name: "已发布" },
    { id: 2, name: "已驳回" },
    { id: 4, name: "已作废" },
    { id: 5, name: "中标公告待审核" },
    { id: 6, name: "中标公告审核通过" },
    { id: 7, name: "已撤销" },
    { id: 8, name: "已废标" },
    { id: 9, name: "中标公告已作废" }
  ],
  tenderingSuccStatus: [
    { id: 0, name: "待审核" },
    { id: 1, name: "已发布" },
    { id: 2, name: "已驳回" },
    { id: 4, name: "已作废" },
    { id: 5, name: "创建合同待审核" },
    { id: 6, name: "合同审核被驳回" },
    { id: 7, name: "合同审核通过" },
    { id: 8, name: "已撤销" },
    { id: 9, name: "已废标" }
    // { id: 11, name: "重新创建合同" }
  ],
  tenderingWinStatus: [
    { id: 0, name: "待审核" },
    { id: 1, name: "已发布" },
    { id: 2, name: "已驳回" },
    { id: 3, name: "报名结束" },
    { id: 4, name: "已作废" }
  ],
  businessType: [
    {
      id: 1,
      name: "招投标"
    },
    {
      id: 2,
      name: "询价"
    }
  ],
  depositStatus: [
    {
      id: 0,
      name: "初始化"
    },
    {
      id: 1,
      name: "待审核"
    },
    {
      id: 2,
      name: "审核通过"
    },
    {
      id: 3,
      name: "审核不通过"
    },
    {
      id: 4,
      name: "已退还保证金"
    }
  ],

  contractCharacter: [
    {
      id: 1,
      name: "一次性采购"
    },
    {
      id: 2,
      name: "商品采购"
    }
    /*{
            id: 3,
            name: '商品租赁',
        },*/
  ],
  contractScopeType: [
    {
      id: 1,
      name: "集团范围"
    },
    {
      id: 2,
      name: "分公司范围"
    },
    {
      id: 3,
      name: "门店范围"
    }
  ],

  project: {
    types: [
      //
      {
        id: 1,
        name: "工程类型"
      },
      {
        id: 2,
        name: "IT类型"
      },
      {
        id: 3,
        name: "采购类型"
      },
      {
        id: 4,
        name: "服务类型"
      }
    ],
    statuss: [
      //
      {
        id: 0,
        name: "已创建"
      },
      {
        id: 1,
        name: "招标中"
      },
      {
        id: 2,
        name: "开标中"
      },
      {
        id: 3,
        name: "选定供应商"
      },
      {
        id: 4,
        name: "流标"
      },
      {
        id: 5,
        name: "已完结"
      }
    ],
    buildTypes: [
      //
      {
        id: 1,
        name: "代建"
      },
      {
        id: 2,
        name: "自建"
      }
    ],

    tenderingTypes: [
      //
      {
        id: 1,
        name: "公开招标"
      },
      {
        id: 2,
        name: "邀标"
      }
    ],

    isUploadBids: [
      //
      {
        id: 0,
        name: "必须上传"
      }
      /* {
                id: 1,
                name: '可以不传',
            },*/
    ]
  },
  tendering: {
    statuss: [
      {
        id: 0,
        name: "待审核"
      },
      {
        id: 1,
        name: "已发布"
      },
      {
        id: 2,
        name: "已驳回"
      },
      {
        id: 3,
        name: "报名结束"
      },
      {
        id: 4,
        name: "已作废"
      }
    ],
    businessType: [
      {
        id: 1,
        name: "招投标"
      },
      {
        id: 2,
        name: "询价"
      }
    ]
  },
  deposit: {
    statuss: [
      {
        id: 0,
        name: "初始化"
      },
      {
        id: 1,
        name: "待审核"
      },
      {
        id: 2,
        name: "审核通过"
      },
      {
        id: 3,
        name: "审核不通过"
      },
      {
        id: 4,
        name: "已退还保证金"
      }
    ]
  }
};
