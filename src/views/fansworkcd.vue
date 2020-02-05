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

                    <div class="content content--center">
                        <div class="grid grid--type-b">
                            <div class="grid__sizer"></div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/0.jpg" alt="Some image" />ロ-リンガ-ル<br>by 桃酥</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/1.png" alt="Some image" />Sister Judy<br>by Aya～亜夜罪～</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/2.jpg" alt="Some image" />モンタージュガール<br>by 柴</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/3.jpg" alt="Some image" />アレとコレと、女の子<br>by erin</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/4.jpg" alt="Some image" />るらるら<br>by 喵喵</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/5.jpg" alt="Some image" />サブリミナル・ワンステップ<br>by 世帆</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/6.jpg" alt="Some image" />カラノワレモノ<br>by Jevic</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/7.png" alt="Some image" />泡色の街<br>by 北燕</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/8.jpg" alt="Some image" />らんらんと泣いて<br>by 白子</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/9.jpg" alt="Some image" />Inaikara<br>by 麦西maisy</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/10.png" alt="Some image" />ハネルマワル<br>by akoto</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/12.jpg" alt="Some image" />さらってほしいの<br>by leko</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/13.jpg" alt="Some image" />darasta<br>by 喵喵</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/14.jpg" alt="Some image" />アイマイ・アンドミー<br>by 白子</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/15.jpg" alt="Some image" />アンチテーゼ・ジャンクガール<br>by 墨总</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/16.jpg" alt="Some image" />生きたがりの娘<br>by 喵喵</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/17.jpg" alt="Some image" />踊るマネキン、唄う阿呆<br>by 猫君毛巾巾</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/18.jpg" alt="Some image" />(W)HERE<br>by 方海</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/19.jpg" alt="Some image" />ever ever ever<br>by joy</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/20.jpg" alt="Some image" />浮游沉没<br>by 墨总</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/21.jpg" alt="Some image" />剿着点<br>by ice</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/22.jpg" alt="Some image" />インパ┼フェクション<br>by 喵喵</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/23.jpg" alt="Some image" />N/A<br>by 广深</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/24.jpg" alt="Some image" />5カウントハロー<br>by 须须</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/25.jpg" alt="Some image" />ピューパ・シネマ<br>by 尖牙</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/26.jpg" alt="Some image" />癖<br>by 柴</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/27.jpg" alt="Some image" />NONSENSE<br>by 亚茶</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/28.jpg" alt="Some image" />ボートマン<br>by 佐伯</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/29.jpg" alt="Some image" />なぜなぜ<br>by erin</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/30.jpg" alt="Some image" />我楽多遊び<br>by 周石榴</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/31.png" alt="Some image" /><br>ゴーストロールby 核桃 </a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/32.jpg" alt="Some image" />劇場街<br>by 广深</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/33.jpg" alt="Some image" />トーキーダンス<br>by 尖牙</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/34.jpg" alt="Some image" />サークル サークル<br>by 广深</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/35.jpg" alt="Some image" />深夜0時<br>by 亚茶</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/36.jpg" alt="Some image" />モノカラー<br>by 宅橘</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/37.jpg" alt="Some image" />finder<br>by 白子</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/38.png" alt="Some image" />シャッタードール<br>by 墨莹</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/39.jpg" alt="Some image" />FilmlooP<br>by 白子</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/40.jpg" alt="Some image" />カラノワレモノ[ReREC]<br>by 蝉蜕</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/41.jpg" alt="Some image" />ワンミーツハー<br>by 须须</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/42.jpg" alt="Some image" />GO BACK TO VENUSFORT<br>by Ariko</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/43.jpg" alt="Some image" />Swipe, Shrink<br>by Akiro</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/44.jpg" alt="Some image" />輪郭<br>by Akiro</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/45.jpg" alt="Some image" />フユノ<br>by Akiro</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/46.jpg" alt="Some image" />バスタブと夢遊<br>by Akiro</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/47.jpg" alt="Some image" />後天症のバックビート<br>by Akiro</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/48.jpg" alt="Some image" />MIRROR<br>by Akiro</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/49.jpg" alt="Some image" />KOTONOHA<br>by 柴</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/50.jpg" alt="Some image" />心呼吸<br>by 方海</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/51.jpg" alt="Some image" />リトルクライベイビー<br>by 喵喵</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/52.jpg" alt="Some image" />イヴステッパー<br>by 尖牙</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/53.jpg" alt="Some image" />Daydreamer(s)<br>by 广深</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/54.jpg" alt="Some image" />極夜灯<br>by 兔梓</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/55.jpg" alt="Some image" />doppel<br>by 喵喵</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/56.png" alt="Some image" />ハグレノカラー<br>by 墨莹</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/57.jpg" alt="Some image" />さいはて<br>by 蝉蜕</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/58.png" alt="Some image" />目眩<br>by 墨莹</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/59.jpg" alt="Some image" />絶対的<br>by 白子</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/60.jpg" alt="Some image" />アンノウン・マザーグース<br>by 白子</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/61.jpg" alt="Some image" />Namid[A]me<br>by 白字</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/62.jpg" alt="Some image" />Loveless<br>by 白子</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/63.jpg" alt="Some image" />ソシアルクロック<br>by 白子</a>
                            </div>
                            <div class="grid__item">
                                <a class="grid__link" ><img class="grid__img" src="../assets/fwimg/421pic/64.jpg" alt="Some image" />NAI.<br>by 白子</a>
                            </div>


                        </div>
                    </div>

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
        name: "fansworkcd",
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
            },
        },
        data(){
            return{
                showMenu:false,
            }
        },
    }
</script>

<style scoped>
    .grid {
        position: relative;
        z-index: 2;
        display: block;
        margin: 0 auto;
    }




    .grid__sizer {
        margin-bottom: 0 !important;
    }

    .grid__link,
    .grid__img {
        display: block;
    }

    .grid__img {
        width: 100%;
    }

    .grid__deco {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
    }

    .grid__deco path {
        fill: none;
        stroke: #fff;
        stroke-width: 2px;
    }

    .grid__reveal {
        position: absolute;
        z-index: 50;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        opacity: 0;
        background-color: #000;
    }

    .grid .grid__item,
    .grid .grid__sizer {
        float: left;
        width: calc(50% - 20px);
        margin: 0 10px 20px;
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
        background: url("../assets/fwimg/vid-off.png") no-repeat center center;
    }
    .vid:hover
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
        background: url("../assets/fwimg/2018-4-12-on.png") no-repeat center center;
    }

    .whitebottom
    {
        height: 68px;
        width: 1024px;
        float: left;
    }


</style>
