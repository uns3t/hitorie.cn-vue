import Vue from "vue";
import Router from "vue-router";
import index from "./views/index.vue";
import bio from "./views/bio"
import disc from "./views/disc";
import member from "./views/member";
import about from "./views/about";


Vue.use(Router)

window.$router=new Router({
    mode:'history',
    routes:[
        {
            path: "/",
            component: index,
        },
        {
            path: "/disc",
            component: disc,
        },
        {
            path: "/member",
            component: member,
        },
        {
            path: "/about",
            component: about,
        },
        {
            path: "/bio",
            component: bio,
        }
    ],
})


export default window.$router
