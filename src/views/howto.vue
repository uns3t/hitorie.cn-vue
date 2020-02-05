<template>
    <div style="text-align: center">
        <div class="topborder"></div>
        <div class="bottomborder"></div>
        <div class="leftborder"></div>
        <div class="rightborder"></div>

        <transition name="el-fade-in">
            <div class="mask1" @click="hidemenu" v-show="showMenu">
                <div class="menu-button">
                    <a @click="toOtherpage('/bio')"><div class="Profiles-in"></div></a>
                    <a @click="toOtherpage('/fanswork')"><div class="Fanswork-in"></div></a>
                    <a @click="toOtherpage('/howtobuy')"><div class="Howto-in"></div></a>
                    <a @click="toOtherpage('/about')"><div class="Aboutus-in"></div></a>
                </div>
            </div>
        </transition>
        <div class="menu-img" id="mask1" @click="tomenu"></div>
        <div class="logo" style="display:block"></div>

        <div class="main">
            <div class="clientmain">
                <div style="font-size: 40px;float: left;color: #2d3436;margin-top:45px">HowTo</div>
                <div class="titleline"></div>
                <div class="content">
                    <h2>周边购买</h2>
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    <br/>
                    xxxxxxxxxxxxxxxx
                    <br/>
                    xxxxxxxxx
                    <br/>
                    xxxxxxxxxxxxxx

                    <div style="margin-top: 30px;margin-bottom: 30px" class="titleline"></div>
                    <h2>巡演相关</h2>
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    <br/>
                    xxxxxxxxxxxxxxxx
                    <br/>
                    xxxxxxxxx
                    <br/>
                    xxxxxxxxxxxxxx

                </div>
                <div class="whitebottom"></div>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: "howto",
        methods:{
            toOtherpage(path){
                window.$router.push(path)
            },
            tomenu(){
                this.showMenu=true
                console.log(this.showMenu)
            },
            hidemenu(e){
                if(e.target.className==="mask1")
                    this.showMenu=false
            }
        },
        data(){
            return{
                showMenu:false
            }
        }
    }
</script>

<style scoped>
    *{
        font-family: SFMono-Regular,Menlo,Monaco,'Liberation Mono','Courier New',monospace;
    }

    .mask1
    {
        position: fixed;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        width: 100%;
        height: 100%;
        /*display: none;*/
        background: rgba(0, 0, 0, 0.7);
    }
    .menu-button
    {
        height: 432px;
        width: 440px;
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .Profiles-in
    {
        float: left;
        width: 440px;
        height: 90px;
        margin-bottom: 24px;
        background: url("../assets/img/Profiles-in.png") no-repeat center center;
        /*display: none;*/
    }
    .Profiles-in:hover
    {
        float: left;
        width: 440px;
        height: 90px;
        margin-bottom: 24px;
        background: url("../assets/img/Profiles-in-on.png") no-repeat center center;
    }
    .Fanswork-in
    {
        float: left;
        width: 440px;
        height: 90px;
        margin-bottom: 24px;
        background: url("../assets/img/Fans work-in.png") no-repeat center center;
        /*display: none;*/
    }
    .Fanswork-in:hover
    {
        float: left;
        width: 440px;
        height: 90px;
        margin-bottom: 24px;
        background: url("../assets/img/Fans work-in-on.png") no-repeat center center;
    }
    .Howto-in
    {
        float: left;
        width: 440px;
        height: 90px;
        margin-bottom: 24px;
        background: url("../assets/img/How to-in.png") no-repeat center center;
        /*display: none;*/
    }
    .Howto-in:hover
    {
        float: left;
        width: 440px;
        height: 90px;
        margin-bottom: 24px;
        background: url("../assets/img/How to-in-on.png") no-repeat center center;
    }
    .Aboutus-in
    {
        float: left;
        width: 440px;
        height: 90px;
        margin-bottom: 24px;
        background: url("../assets/img/About us-in.png") no-repeat center center;
        /*display: none;*/
    }
    .Aboutus-in:hover
    {
        float: left;
        width: 440px;
        height: 90px;
        margin-bottom: 24px;
        background: url("../assets/img/About us-in-on.png") no-repeat center center;
    }

    .topborder
    {
        margin-left: -12px;
        padding:0;
        background-color: #4A4A4A;
        height: 12px;
        width: 100%;
        position: fixed;
        z-index: 9999;
    }
    .bottomborder
    {
        margin-left: -12px;
        padding:0;
        background-color: #4A4A4A;
        height: 12px;
        width: 100%;
        position: fixed;
        bottom: 0px;
        z-index: 9999;
    }
    .leftborder
    {
        margin-left: 0px;
        padding:0;
        background-color: #4A4A4A;
        height: 100%;
        width: 12px;
        position: fixed;
        left: 0px;
        z-index: 9999;
    }
    .rightborder
    {
        padding:0;
        background-color: #4A4A4A;
        height: 100%;
        width: 12px;
        position: fixed;
        right: 0px;
        z-index: 9999;
    }

    .menu-img
    {
        height: 16px;
        width: 26px;
        right: 30px;
        top: 28px;
        position: fixed;
        background: url("../assets/img/menu.png") no-repeat center center;
    }
    .logo
    {
        float: left;
        height: 124px;
        width: 100%;
        margin-top: 60px;
        background: url("../assets/img/logo.png") no-repeat center center;
    }

    .main
    {
        width: 100%;
        text-align: center;
    }
    .clientmain
    {
        margin: 0 auto;
        width: 1024px;
    }

    .titleline
    {
        float: left;
        margin-top: 4px;
        height: 2px;
        width: 1024px;
        background-color: #4A4A4A;
    }

    .content
    {
        float: left;
        width: 1024px;
        margin-top: 20px;
    }
    .content p
    {
        margin-top: 84px;
        text-align: 24px;
        color: #4A4A4A;
    }
    .content p2
    {
        color: #4A4A4A;
        font-size: 12px;
        text-align: 12px;
    }
    .grouplogo
    {
        margin-top: 84px;
    }
    .stafflogo
    {
        margin-top: 48px;
        margin-bottom: 12px;
    }

    .whitebottom
    {
        height: 164px;
        width: 1024px;
        float: left;
    }
</style>
