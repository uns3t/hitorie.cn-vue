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
                    <p>
                        2011年<br>
                        冬季，乐队前身『ひとりアトリエ』以wowaka为中心，由wowaka、イガラシ、ゆーまお三人结成。<br>
                        <br>
                        2012年<br>
                        3月份シノダ加入之后，乐队开始以『ヒトリエ』这个名字进行活动（初期经常演奏wowaka的V家曲）。<br>
                        12月31日，在comic market（通称·冬comi）中贩卖了自主创作的迷你专辑『ルームシック・ガールズエスケープ』。<br>
                        <br>
                        2013年<br>
                        4月29日，发售了自主创作的ep『non-fiction four e.p』。<br>
                        11月4日，在涉谷eggman举行了首次个人演唱会『hitori-escape:11.4 -非日常渋谷篇-』，门票完售。演唱中宣布了在Sony·Musicgroup下的自主标签。<br>
                        12月30日，出演了『COUNTDOWN JAPAN 13/14』。<br>
                        <br>
                        2014年<br>
                        1月22日，以Sony内部的自主标签正式出道，并发售了首张Single『センスレス・ワンダー』。<br>
                        2月19日，继续发售了首张mini Album『イマジナリー・モノフィクション』。<br>
                        4月，举行了包括在LIQUIDROOM ebisu的最终公演在内的首次东名阪个人巡演『マネキン・イン・ザ・パーク』，全场完售。<br>
                        8月9日，出演了『ROCK IN JAPAN FESTIVAL 2014』。<br>
                        8月10日，出演了『WORLD HAPPINESS 2014』。<br>
                        8月15日，出演了『RISING SUN ROCK FESTIVAL 2014 in EZO』。<br>
                        11月26日，发售了第一张full Album『WONDER and WONDER』。其中收录的歌曲『インパーフェクション』被东京电视台的综艺节目『ゴッドタン』（神之舌）选为12月份片尾曲。<br>
                        12月5日，2014/15全国个人巡回演唱会『WONDER and WANDER』开始了。<br>
                        <br>
                        2015年<br>
                        1月17日，途径全国12个城市的2014/15全国个人巡回演唱会『WONDER and WANDER』的最终公演在东京·赤坂BLITZ举行，完售。<br>
                        7月，ヒトリエ即将在东名阪的CLUB QUATTRO举行巡演2015『トーキーダンスと赤い靴』，并在仙台MACANA追加了公演『トーキーダンスと赤い靴+』。<br>
                        10月，在下北沢GARDEN主办了与成员们都十分尊敬的乐队ZAZEN BOYS一同出演的TWO MAN公演『bAnd』vol.1。<br>
                        11月，发售了完全生产限定盘：单曲『シャッタードール』，以及将正式出道以前自主制作的两张专辑合为一张的再发售专辑『ルームシック・ガールズエスケープ/non-fiction four e.p.』。在下北沢GARDEN举办了『bAnd』vol.2，嘉宾为MO’SOME TONEBENDER。<br>
                        <br>
                        2016年<br>
                        1月，发售了作为1月动画「ディバインゲート」主题曲的第三张单曲「ワンミーツハー」。<br>
                        2月，发售了第二张专辑「DEEPER」。<br>
                        3月，随着新专辑的发售，举办了第二次全国个人巡演「one-Me Tour 2016 “DEEP/SEEK”」。<br>
                        4月29日，个人巡演的最终场在新木场STUDIO COAST取得圆满成功。收录该场演唱会的1st LIVE DVD & Blu-ray『one-Me Tour “DEEP/SEEK” at STUDIO COAST』将于8月17日发售。<br>
                        一直致力于用能够瞬间俘获听众的乐句，编织出音乐和歌词来展现奇妙而独特的世界观，以更纯正的音乐为目标，不断的摸索尝试。这就是摇滚乐队ヒトリエ。请多关照。<br>
                    </p>
                </div>
                <div class="whitebottom"></div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "bio",
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
        background: url("../assets/img/Bio-on.png") no-repeat center center;
    }

    .title
    {
        float: left;
        margin-top: 45px;
        height: 28px;
        width: 117px;
        background: url("../assets/img/Profiles.png") no-repeat center center;
    }

    .content
    {
        float: left;
        width: 870px;
        margin-top: 20px;
        border-left: 1px solid #4A4A4A;
    }
    .content p
    {
        float: left;
        width: 824px;
        margin-left: 24px;
        font-size: 16px;
        line-height: 20px;
        text-align: left;

    }

</style>
