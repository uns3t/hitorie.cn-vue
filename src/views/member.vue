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
                <div class="profiles-menu">
                    <a @click="toOtherpage('/bio')"><div class="Bio"></div></a>
                    <a @click="toOtherpage('/member')"><div class="Member"></div></a>
                    <a @click="toOtherpage('/disc')"><div class="Disc"></div></a>
                </div>
                <div class="content">
                    <div class="character">
                        <div class="charactername">
                            <img src="../assets/img/wowakaname.png">
                        </div>
                        <div class="charactercontent">
                            担任：主唱、吉他手<br>
                            出生日期：1987年11月4日<br>
                            身高：158cm<br>
                            出生地：鹿儿岛县<br>
                            喜欢的食物：荞麦面、7-11的食物。喜欢吃辣。<br>
                            ヒトリエ的核心，作曲、作词担当（有时候也参与一些美术设计）。<br>
                            -曾作为VOCALOID作曲者[1]  （副名：现実逃避P）以毒性很高的旋律和意味深长的歌词而闻名，代表作有裏表ラバーズ、ワールズエンド・ダンスホール、ローリンガール、 アンハッピーリフレイン 。<br>
                            -也参与过一些其他音乐制作。如为魔法少女小圆写了第二首角色歌『and I'm home』，为人气女歌手LISA写过专辑曲。<br>
                            -喜欢水手服少女，写的歌都是以【少女】的观点来写的。<br>
                            -喜欢刺猬。<br>
                        </div>
                        <div class="characterimg">
                            <img src="../assets/img/wowakaimg.png">
                        </div>
                    </div>
                    <div class="character">
                        <div class="charactername">
                            <img src="../assets/img/shinodaname.png">
                        </div>
                        <div class="charactercontent">
                            担任：和声、吉他手<br>
                            出生日期：1985年6月6日<br>
                            身高：178cm<br>
                            喜欢的食物：松饼，甜的食物<br>
                            ヒトリエ的主音吉他手，于2012年加入乐队。<br>
                            -（曾用名：冲动的の人）曾在niconico动画上发表自己的原创VOCALOID曲、演奏视频等[2]  。曾进行过东方project同人音乐的创作。曾以cakebox[3]  这个社团名出过一系列包含原创和东方project arrange的CD。<br>
                            -喜欢进行一些手绘创作（如在twitter上发表四格漫画）。<br>
                            -在live上经常做出很激动的动作。平时是吐槽役。<br>
                            -在twitter上比较活跃，有时候会搜索并转发一些带有自己名字的推文。<br>
                        </div>
                        <div class="characterimg">
                            <img src="../assets/img/shinodaimg.png">
                        </div>
                    </div>
                    <div class="character">
                        <div class="charactername">
                            <img src="../assets/img/igarashiname.png">
                        </div>
                        <div class="charactercontent">
                            担任：贝斯手<br>
                            出生日期：1985年6月17日<br>
                            身高：167cm<br>
                            喜欢的食物：火锅（ヒトリエ的成员都喜欢火锅）<br>
                            ヒトリエ的贝斯手。<br>
                            -也曾作为贝斯手参加着niconico动画中人气乐队所属的音乐活动。<br>
                            -曾经担任乐队「石鹸屋」的贝斯手。曾与岸田教团的主唱ichigo一起作为组合「JUDGEMENT」进行活动。<br>
                            -在live上经常会大幅度跳来跳去。<br>
                        </div>
                        <div class="characterimg">
                            <img src="../assets/img/igarashiimg.png">
                        </div>
                    </div>
                    <div class="characterlast">
                        <div class="charactername">
                            <img src="../assets/img/yumaoname.png">
                        </div>
                        <div class="charactercontent">
                            担任：鼓手<br>
                            出生日期：1988年12月6日<br>
                            身高：171cm<br>
                            出生地：东京都<br>
                            喜欢的食物：青菜和蛋的料理
                            ヒトリエ的鼓手。（有时候也玩一玩木吉他还有和声）<br>
                            -2009年后半开始在VOCALOID中活跃，投稿演奏动画[4]  。很喜欢狼与香辛料中的赫萝，在投稿视频背景墙上会挂着赫萝的挂画。<br>
                            -有参与jin（自然の敌P）的多个作品。（包括很多首阳炎project曲目）。<br>
                            -本体是柴犬。平时多半是逗比担当。<br>
                            -以前所在乐队：优しくして♪[5]  （于2012年末解散）。<br>
                        </div>
                        <div class="characterimg">
                            <img src="../assets/img/yumaoimg.png">
                        </div>
                    </div>
                </div>
                <div class="whitebottom"></div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "member",
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
    .Bio
    {
        float: left;
        height: 39px;
        width: 132px;
        margin-bottom: 10px;
        background: url("../assets/img/Bio.png") no-repeat center center;
    }
    .Bio:hover
    {
        float: left;
        height: 39px;
        width: 132px;
        margin-bottom: 10px;
        background: url("../assets/img/Bio-on.png") no-repeat center center;
    }
    .Member
    {
        float: left;
        height: 39px;
        width: 132px;
        margin-bottom: 10px;
        background: url("../assets/img/Member-on.png") no-repeat center center;
    }
    .Disc
    {
        float: left;
        height: 39px;
        width: 132px;
        margin-bottom: 10px;
        background: url("../assets/img/Disc.png") no-repeat center center;
    }
    .Disc:hover
    {
        float: left;
        height: 39px;
        width: 132px;
        margin-bottom: 10px;
        background: url("../assets/img/Disc-on.png") no-repeat center center;
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

    .title
    {
        float: left;
        margin-top: 45px;
        height: 28px;
        width: 117px;
        background: url("../assets/img/Profiles.png") no-repeat center center;
    }
    .titleline
    {
        float: left;
        margin-top: 18px;
        height: 2px;
        width: 1024px;
        background-color: #4A4A4A;
    }

    .profiles-menu
    {
        float: left;
        width: 145px;
        margin-top: 20px;
    }
    .content
    {
        float: left;
        width: 870px;
        margin-top: 20px;
        border-left: 1px solid #4A4A4A;
    }
    .character
    {
        float: left;
        margin-left: 24px;
        width: 849px;
        border-bottom: 1px solid #4A4A4A;
        margin-bottom: 20px;
        text-align: left;
    }
    .characterlast
    {
        float: left;
        margin-left: 24px;
        width: 849px;
        text-align: left;
    }
    .charactername
    {
        float: left;
        margin-top: 14px;
        height: 58px;
        width: 680px;
    }
    .charactercontent
    {
        float: left;
        width: 680px;
        margin-top: 23px;
        font-size: 16px;
        text-align: left;
        margin-bottom: 20px;
    }
    .characterimg
    {
        float: right;
        margin-top: -72px;
        width: 147px;
        height: 220px;
    }



    .whitebottom
    {
        height: 68px;
        width: 1024px;
        float: left;
    }

</style>
