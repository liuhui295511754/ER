/**
 * 处理商品品类数据（获取code）
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
            value: items.goodsCategory.categoryCode,
            label: items.text
          });
        });
        arr2.push({
          //二级
          value: item3.goodsCategory.categoryCode,
          label: item3.text,
          children: arr3
        });
      });
      arr1.push({
        //一级
        value: Number(item2.goodsCategory.categoryCode),
        label: item2.text,
        children: arr2
      });
    });
    let obj1 = {
      value: item1.goodsCategory.categoryCode,
      label: item1.text,
      children: arr1
    };
    arr.push(obj1);
  });
  return arr;
}

/**
 * 处理供应商服务数据（获取code）
 * **/

export function serviceData(data) {
  let arr = [];
  data.map(item1 => {
    let arr1 = [];
    item1.subList.map(items => {
      arr1.push({
        value: Number(items.uuid),
        label: items.categoryName
      });
    });
    let obj1 = {
      value: item1.uuid,
      label: item1.categoryName,
      children: arr1
    };
    arr.push(obj1);
  });
  return arr;
}
/*
 * 处理商品品类数据（获取id）
 * */

export function categoryDataId(data, flag) {
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
            label: items.text,
            categoryPath: items.goodsCategory.categoryPath
          });
        });
        arr2.push({
          //二级
          value: item3.goodsCategory.id,
          label: item3.text,
          categoryPath: item3.goodsCategory.categoryPath,
          children: arr3,
          disabled: flag
        });
      });
      arr1.push({
        //一级
        value: Number(item2.goodsCategory.id),
        label: item2.text,
        categoryPath: item2.goodsCategory.categoryPath,
        children: arr2,
        disabled: flag
      });
    });
    let obj1 = {
      value: item1.goodsCategory.id,
      label: item1.text,
      categoryPath: item1.goodsCategory.categoryPath,
      children: arr1,
      disabled: flag
    };
    arr.push(obj1);
  });
  return arr;
}
//千分位展示金额
export function get_thousand_num(num) {
  return num.toString().replace(/\d+/, function(n) {
    // 先提取整数部分
    return n.replace(/(\d)(?=(\d{3})+$)/g, function($1) {
      // 对整数部分添加分隔符
      return $1 + ",";
    });
  });
}
