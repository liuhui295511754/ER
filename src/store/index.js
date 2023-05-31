import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:"",
    userInfo:{},
    id: '123456',
    // openedTab: [],
    openedTab: [{title:"首页",name:"/main"}],
    activeTab: [],
    comList:[]
  },
  mutations: {
    set_token(state, token) {
      state.token = token
      sessionStorage.token = token
    },
    del_token(state) {
      state.token = ''
      sessionStorage.removeItem('token')
    },
    set_userInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    addTab (state,obj) {
      state.openedTab.push({
        title:obj.title,
        name:obj.name
      })
    },
    changeTab (state,obj) {
      state.activeTab = {
        title:obj.title,
        name:obj.name
      }
    },
    deductTab (state, componentName) {
      let vals=[];
      state.openedTab.forEach(function(val,index){
        console.log("wwww",val.title)
        vals.push(val.name);
      });
      let index = vals.indexOf(componentName)
      // alert(index);
      state.openedTab.splice(index, 1)
    }
  }
})