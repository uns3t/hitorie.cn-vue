<template>
    <div>
        <div class="topborder"></div>
        <div class="bottomborder"></div>
        <div class="leftborder"></div>
        <div class="rightborder"></div>

        <transition name="el-fade-in">
            <div class="mask1" @click="hidemenu" v-show="showMenu">
                <div class="menu-button">
                    <a @click="toOtherpage('/bio')"><div class="Profiles-in"></div></a>
                    <a @click="toOtherpage('/fanswork')"><div class="Fanswork-in"></div></a>
                    <a @click="toOtherpage('/howto')"><div class="Howto-in"></div></a>
                    <a @click="toOtherpage('/about')"><div class="Aboutus-in"></div></a>
                </div>
            </div>
        </transition>
        <div class="menu-img" id="mask1" @click="tomenu"></div>

        <div class="logo"></div>
        <div class="main">
            <div class="clientmain">
                <div class="title"></div>
                <div class="titleline"></div>
                <div class="fw-menu">
                    <a @click="toOtherpage('/fanswork')"><div class="pic"></div></a>
                    <a @click="toOtherpage('/fansworkvd')"><div class="vid"></div></a>
                    <a @click="toOtherpage('/fansworkcd')"><div class="cd421"></div></a>
                </div>
                <div class="content2">

                    <iframe class="fvideo" src="http://player.bilibili.com/player.html?aid=15999557&cid=26105856&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true">
                    </iframe>
                    <a>2017wowaka生贺企划《旅》</a>
                    <iframe class="fvideo" src="http://player.bilibili.com/player.html?aid=19252771&cid=31398388&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true">
                    </iframe>
                    <a>Sister Judy／ヒトリエ cover</a>
                    <iframe class="fvideo" src="http://player.bilibili.com/player.html?aid=20649627&cid=34604838&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true">
                    </iframe>
                    <a>超狂气声音！終着点 - ヒトリエ倒计时计划 #44</a>
                    <iframe class="fvideo" src="http://player.bilibili.com/player.html?aid=19863808&cid=32396181&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true">
                    </iframe>
                    <a>贝斯cover ヒトリエ - 泡色の街</a>

                </div>
                <div class="whitebottom">
                    <div class="content content--side content--right">
                        <div class="control control--effects">
                            <button class="control__btn" data-fx="Nut"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "fansworkvideo",
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

    .mask1
    {
        position: fixed;
        z-index: 10000000;
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

    .title
    {
        float: left;
        margin-top: 45px;
        height: 28px;
        width: 172px;
        background: url("../assets/fwimg/fwtitle.png") no-repeat center center;
    }
    .titleline
    {
        float: left;
        margin-top: 18px;
        height: 2px;
        width: 1024px;
        background-color: #4A4A4A;
    }

    .fw-menu
    {
        float: left;
        width: 145px;
        margin-top: 20px;
    }
    .content2
    {
        float: left;
        width: 870px;
        margin-top: 20px;
        border-left: 1px solid #4A4A4A;
    }
    .fvideo
    {
        float: left;
        margin-left: 12px;
        width: 858px;
        height: 560px;
    }
    .content2 a
    {
        float: left;
        margin-bottom: 24px;
        width: 858px;
    }

    .pic
    {
        float: left;
        height: 39px;
        width: 132px;
        margin-bottom: 10px;
        background: url("../assets/fwimg/pic-off.png") no-repeat center center;
    }
    .pic:hover
    {
        float: left;
        height: 39px;
        width: 132px;
        margin-bottom: 10px;
        background: url("../assets/fwimg/pic-on.png") no-repeat center center;
    }
    .vid
    {
        float: left;
        height: 39px;
        width: 132px;
        margin-bottom: 10px;
        background: url("../assets/fwimg/vid-on.png") no-repeat center center;
    }

    .cd421
    {
        float: left;
        height: 39px;
        width: 132px;
        margin-bottom: 10px;
        background: url("../assets/fwimg/2018-4-12-off.png") no-repeat center center;
    }

    .cd421:hover
    {
        float: left;
        height: 39px;
        width: 132px;
        margin-bottom: 10px;
        background: url("../assets/fwimg/2018-4-12-on.png") no-repeat center center;
    }

    .whitebottom
    {
        height: 68px;
        width: 1024px;
        float: left;
    }


</style>
