import Vue from "vue";
import Router from "vue-router";
import index from "./views/index.vue";
import bio from "./views/bio"

Vue.use(Router)

window.$router=new Router({
    mode:'history',
    routes:[
        {
            path: "/",
            component: index,
        },
        {
            path: "/bio",
            component: bio,
        }
    ],
})


export default window.$router
