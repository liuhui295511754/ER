import Cookies from 'js-cookie'

// const TokenKey = 'ADMIN'
const TokenKey = 'token'
const userTypeList = 'userTypeList'

export function getToken () {
  return Cookies.get(TokenKey)
  // return '13167c64-e52b-4519-b0b8-4ea8b8c99a81'
}
// Cookies.set('token', '10f944ef-d62e-4b27-b05f-c63cbb0168d0')
export function setToken (token) {
  Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

export function getUserTypeList () {
  return Cookies.get(userTypeList)
}
export function setUserTypeList(userTypeList){
  Cookies.set(userTypeList, userTypeList ,{path: '/'})
}
export function removeUserTypeList () {
  return Cookies.remove(userTypeList)
}
