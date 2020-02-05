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
                <div class="content">
                    <p>Hitorie（ヒトリエ）中文粉丝站是一个于2018年由粉丝自发建立，无盈利目的情报网站。<br>致力于为使用中文的hitorie的粉丝<br>提供一个跨越语言与国籍的乐队资料获取&同人展示平台。<br>更多内容将在今后进一步完善。</p>
                    <img src="../assets/asimg/grouplogo.png" class="grouplogo"></img>
                    <br>
                    <img src="../assets/asimg/staff1.png" class="stafflogo"></img>
                    <br>
                    <p2>weibo:<br>https://www.weibo.com/u/5667976052</p2>
                    <br>
                    <img src="../assets/asimg/staff2.png" class="stafflogo"></img>
                    <br>
                    <p2>weibo:<br>https://weibo.com/u/5581438258</p2>
                    <br>
                    <img src="../assets/asimg/staff3.png" class="stafflogo"></img>
                    <br>
                    <p2>weibo:<br>https://weibo.com/ayatsumi/</p2>
                    <br>
                    <img src="../assets/asimg/staff4.png" class="stafflogo"></img>
                    <br>
                    <p2>weibo:<br>https://UNKNOW</p2>
                    <br>
                    <img src="../assets/asimg/weibo.png" class="stafflogo"></img>
                    <br>
                    <p2>官方最新咨询搬运<br>weibo:<br>https://weibo.com/u/5176743229</p2>
                    <br>
                    <img src="../assets/asimg/qqgroup.png" class="stafflogo"></img>
                    <br>
                    <p2>ヒトリエ粉丝聚集地<br>qq群:<br>497511647</p2>
                    <br>

                    <p>我们长时间招募<br>网页制作/后台维护/翻译/文案/策划<br>欢迎加入我们！<br>qq群：675420262</p>
                    <img src="../assets/asimg/pay.png" class="grouplogo"></img>
                    <p>也欢迎赞助我们。<br>Hitorie（ヒトリエ）中文粉丝站是一个非盈利的网站。<br>所有收到的赞助款项将全部用于服务器与网页维护。</p>

                </div>
                <div class="whitebottom"></div>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: "about",
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


    .title
    {
        float: left;
        margin-top: 45px;
        height: 28px;
        width: 142px;
        background: url("../assets/asimg/title.png") no-repeat center center;
    }
    .titleline
    {
        float: left;
        margin-top: 18px;
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
