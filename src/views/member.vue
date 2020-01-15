<template>
    <div>
        <div class="topborder"></div>
        <div class="bottomborder"></div>
        <div class="leftborder"></div>
        <div class="rightborder"></div>

        <div class="mask1">
            <div class="menu-button">
                <a href="Profiles-Bio.html"><div class="Profiles-in"></div></a>
                <a href="Fans work.html"><div class="Fanswork-in"></div></a>
                <a href="How to-buy.html"><div class="Howto-in"></div></a>
                <a href="About us.html"><div class="Aboutus-in"></div></a>
            </div>
        </div>

        <div class="menu-img" id="mask1"></div>
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
    import "../assets/css/c2.css"
    export default {
        name: "member",
        methods:{
            toOtherpage(path){
                window.$router.push(path)
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
</style>
