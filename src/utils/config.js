/**
 * 是否折旧：
 */
export function isDepreciationList() {
  let isDepreciation = [{
      value: "0",
      label: "否"
    },
    {
      value: "1",
      label: "是"
    }
  ]
  return isDepreciation;
}

/**
 * 结算方式：
 */
let settlementType = [
  // {
  //   value: "",
  //   label: "不限"
  // },
  {
    value: "1",
    label: "月结"
  },
  {
    value: "2",
    label: "预付"
  }
]
export function settlementTypeList() {
  return settlementType;
}
export function getSettlementType(value) {
  let v = '';
  settlementType.forEach(ele => {
    if (ele.value == value) {
      v = ele.label
    }
  })

  return v;
}
/**
 * 计价方式：
 */
let priceType = [{
    value: "0",
    label: "一口价"
  },
  {
    value: "1",
    label: "阶梯价"
  },
  {
    value: "2",
    label: "平米报价"
  },
  {
    value: "3",
    label: "延米报价"
  }
]
export function priceTypeList() {

  return priceType;
}
export function getPriceType(value) {
  let v = '';
  priceType.forEach(ele => {
    if (ele.value == value) {
      v = ele.label;
    }
  })
  return v;
}
getSearchParams: function (formData) {
  var arr = [];
  for (var key in formData) {
    if (key.indexOf('_q') != -1) {
      var queryName = key.substring(0, key.indexOf('_'));
      if ($.trim(formData[queryName])) {
        if (formData[key] == 'IN') {
          //如果是用In 查询将参数拼成字符串
          if (Array.isArray(formData[queryName])) {
            var queryValue = formData[queryName].join(',');
            arr.push({
              name: queryName,
              value: queryValue,
            });
          } else {
            arr.push({
              name: queryName,
              value: formData[queryName],
            });
          }
          arr.push({
            name: key,
            value: formData[key],
          });
        } else if (formData[key] == 'NO') {
          arr.push({
            name: queryName,
            value: formData[queryName],
          });
        } else {
          arr.push({
            name: queryName,
            value: formData[queryName],
          });
          arr.push({
            name: key,
            value: formData[key],
          });
        }
      }
    }
  }
  arr = arr.concat(this.fixedSearchParam);
  return arr;
}
/**
 * 是否可退换：
 */
let isRefund = [
  // {
  //   value: "",
  //   label: "不限"
  // },
  {
    value: "0",
    label: "否"
  },
  {
    value: "1",
    label: "是"
  }
]
export function isRefundList() {
  return isRefund;
}
export function getIsRefund(value) {
  let v = '';
  isRefund.forEach(ele => {
    if (ele.value == value) {
      v = ele.label;
    }
  })
  return v;
}
/**
 * 是否可退换：
 */
let isPost = [
  // {
  //   value: "",
  //   label: "不限"
  // },
  {
    value: "0",
    label: "否"
  },
  {
    value: "1",
    label: "是"
  }
]
export function isPostList() {

  return isPost;
}
export function getIsPost(value) {
  let v = '';
  isPost.forEach(ele => {
    if (ele.value == value) {
      v = ele.label;
    }
  })
  return v;
}
/**
 * 商品状态
 */
let goodsStatusArr = [
  {
    value: 3,
    label: "待审核"
  },
  {
    value:5,
    label: "已驳回"
  },
  {
    value: 7,
    label: "上架"
  },
  {
    value: 9,
    label: "下架"
  }
]
export function goodsStatusList() {
  return goodsStatusArr;
}
export function getGoodsStatus(value) {
  let v = '';
  goodsStatusArr.forEach(ele => {
    if (ele.value == value) {
      v = ele.label;
    }
  })
  return v;
}

let goodsSpuStatusArr = [{
    value: 0,
    label: "删除"
  }, {
    value: 1,
    label: "有效"
  },
  {
    value: 7,
    label: "上架"
  },
  {
    value: 9,
    label: "下架"
  },
  {
    value: 3,
    label: "待审核"
  },
  {
    value: 5,
    label: "驳回"
  }
]
export function goodsSpuStatusList() {
  return goodsStatusArr;
}
export function getSpuGoodsStatus(value) {
  let v = '';
  goodsSpuStatusArr.forEach(ele => {
    if (ele.value == value) {
      v = ele.label;
    }
  })
  return v;
}

/**
 * 商品类型 单品  多品
 */
let goodsType = [
  // {
  //   value: "",
  //   label: "不限"
  // },
  {
    label: "单品",
    value: "0"
  },
  {
    label: "多品",
    value: "1"
  }
]
export function goodsList() {
  return goodsType;
}
export function getGoodsType(value) {
  let v = '';
  goodsType.forEach(ele => {
    if (ele.value == value) {
      v = ele.label;
    }
  })
  return v;
}
/**
 * 处理商品品类数据
 * **/

export function categoryData(data) {
  let arr = [];
  data.map(item1 => {
    let arr1 = [];
    item1.children.map(item2 => {
      let arr2 = [];
      item2.children.map(item3 => {
        let arr3 = [];
        item3.children.map(items => {
          arr3.push({
            value: items.id,
            label: items.text
          })
        })
        arr2.push({ //二级
          value: item3.id,
          label: item3.text,
          children: arr3
        })
      });
      arr1.push({ //一级
        value: Number(item2.id),
        label: item2.text,
        children: arr2
      })

    });
    let obj1 = {
      value: item1.id,
      label: item1.text,
      children: arr1
    };
    arr.push(obj1)

  })
  return arr;
}
export function categoryDataCode(data) {
  let arr = [];
  data.map(item1 => {
    let arr1 = [];
    item1.children.map(item2 => {
      let arr2 = [];
      item2.children.map(item3 => {
        let arr3 = [];
        item3.children.map(items => {
          arr3.push({
            value: items.goodsCategory.categoryCode,
            label: items.text
          })
        })
        arr2.push({ //二级
          value: item3.goodsCategory.categoryCode,
          label: item3.text,
          children: arr3
        })
      });
      arr1.push({ //一级
        value: Number(item2.goodsCategory.categoryCode),
        label: item2.text,
        children: arr2
      })

    });
    let obj1 = {
      value: item1.id,
      label: item1.text,
      children: arr1
    };
    arr.push(obj1)

  })
  return arr;
}

export function categoryDataId(data) {
  let arr = [];
  data.map(item1 => {
    let arr1 = [];
    item1.children.map(item2 => {
      let arr2 = [];
      item2.children.map(item3 => {
        let arr3 = [];
        item3.children.map(items => {
          arr3.push({
            value: items.goodsCategory.id,
            label: items.text
          })
        })
        arr2.push({ //二级
          value: item3.goodsCategory.id,
          label: item3.text,
          children: arr3
        })
      });
      arr1.push({ //一级
        value: Number(item2.goodsCategory.id),
        label: item2.text,
        children: arr2
      })

    });
    let obj1 = {
      value: item1.id,
      label: item1.text,
      children: arr1
    };
    arr.push(obj1)

  })
  return arr;
}

export function attrOtherList(type) {

  let arr = [{
      label: "商品介绍",
      name: "goodsIntro",
      tableList: [{
        attrId: 0,
        attrName: "",
        attrType: 0,
        attrValue: "",
        valueName:""
      }]
    },
    {
      label: "规格包装",
      name: "packageIntro",
      tableList: [{
        attrId: 0,
        attrName: "",
        attrType: 0,
        attrValue: "",
        valueName:""
      }]
    },
    {
      label: "安装清单",
      name: "installList",
      tableList: [{
        attrId: 0,
        attrName: "",
        attrType: 0,
        attrValue: "",
        valueName:""
      }]
    },
    {
      label: "售后保障",
      name: "postSaleIntro",
      tableList: [{
        attrId: 0,
        attrName: "",
        attrType: 0,
        attrValue: "",
        valueName:""
      }]
    }
  ]
  if (type == 'less') {
    arr.splice(0, 1);
  }
  return arr;
}
//千分位展示金额
export function get_thousand_num(num) {
  return num.toString().replace(/\d+/, function (n) { // 先提取整数部分
    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) { // 对整数部分添加分隔符
      return $1 + ",";
    });
  });
}

