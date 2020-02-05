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


</style>
