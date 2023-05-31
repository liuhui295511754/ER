import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const ER = () => import("../pages/ER/ER.vue")

const router = {
  routes:[
    {
      path: "/",
      name: "ER",
      component: ER,
      meta: {
        title: "ER关系图"
      }
    }
  ]
}


export default new Router(router)
