/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername (str) {
  // const valid_map = ['admin', 'editor']
  //= return valid_map.indexOf(str.trim()) >= 0
  return 1
}

export function validMoney (rule, value, callback) {
  if (/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(val)) callback()
  else callback(new Error('请输出正确的金额格式'))
}

export function validEmpty (rule, value, callback) {
  if (value.replace(/^\s+|\s+$/g, '')) callback()
  else callback(new Error('填写内容不能只有空格'))
}
export function validPhone(val) {
  return /^1[3456789]\d{9}$/.test(val)
}
export function validEmail(val) {
  return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(val)
}