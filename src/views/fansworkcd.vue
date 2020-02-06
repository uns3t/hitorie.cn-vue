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
            <div class="clientmain" >
                <div class="title"></div>
                <div class="titleline"></div>
                <div class="fw-menu">
                    <a @click="toOtherpage('/fanswork')"><div class="pic"></div></a>
                    <a @click="toOtherpage('/fansworkvd')"><div class="vid"></div></a>
                    <a @click="toOtherpage('/fansworkcd')"><div class="cd421"></div></a>
                </div>

                    <div class="content2" >

                        <transition name="el-zoom-in-center">

                            <div class="v-waterfall-content" id="v-waterfall" v-show="showImg">
                                <div v-for="img in waterfallList"
                                     class="v-waterfall-item"
                                     :style="{top:img.top+'px',left:img.left+'px',width:waterfallImgWidth+'px',height:img.height}">

                                    <a class="grid__link" ><img v-lazy="img.src" alt="Some image" />{{img.name}}<br/>{{"by"+img.auth}}</a>
                                </div>
                            </div>
                        </transition>

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
        data(){
            return{
                showMenu:false,
                showImg:false,
                waterfallList:[],
                imgArr:[

                ],
                waterfallImgWidth:280,
                waterfallImgCol:3,
                waterfallImgRight:20,
                waterfallImgBottom:50,
                waterfallDeviationHeight:[],
                imgDetail:[
                    "ロ-リンガ-ル", "桃酥",
                    "Sister Judy", "Aya～亜夜罪～",
                    "モンタージュガール", '柴',
                    'アレとコレと、女の子', 'erin',
                    'るらるら' ,'喵喵',
                    'サブリミナル・ワンステップ' ,'世帆',
                    'カラノワレモノ' ,'Jevic',
                    '泡色の街', '北燕',
                    'らんらんと泣いて' ,'白子',
                    'Inaikara', '麦西maisy',
                    'ハネルマワル', 'akoto',
                    'さらってほしいの', 'leko',
                    'darasta', '喵喵',
                    'アイマイ・アンドミー', '白子',
                    'アンチテーゼ・ジャンクガール', '墨总',
                    '生きたがりの娘' ,'喵喵',
                    '踊るマネキン、唄う阿呆', '猫君毛巾巾',
                    '(W)HERE' ,'方海',
                    'ever ever ever', 'joy',
                    '浮游沉没', '墨总',
                    '剿着点', 'ice',
                    'インパ┼フェクション' ,'喵喵',
                    'N/A', '广深',
                    '5カウントハロー', '须须',
                    'ピューパ・シネマ' ,'尖牙',
                    '癖' ,'柴',
                    'NONSENSE' ,'亚茶',
                    'ボートマン' ,'佐伯',
                    'なぜなぜ', 'erin',
                    '我楽多遊び' ,'周石榴',
                    'ゴーストロール' ,'核桃 ',
                    '劇場街' ,'广深',
                    'トーキーダンス' ,'尖牙',
                    'サークル サークル' ,'广深',
                    '深夜0時' ,'亚茶',
                    'モノカラー' ,'宅橘',
                    'finder', '白子',
                    'シャッタードール', '墨莹',
                    'FilmlooP', '白子',
                    'カラノワレモノ[ReREC]', '蝉蜕',
                    'ワンミーツハー' ,'须须',
                    'GO BACK TO VENUSFORT' ,'Ariko',
                    'Swipe, Shrink', 'Akiro',
                    '輪郭' ,'Akiro',
                    'フユノ', 'Akiro',
                    'バスタブと夢遊' ,'Akiro',
                    '後天症のバックビート', 'Akiro',
                    'MIRROR' ,'Akiro',
                    'KOTONOHA' ,'柴',
                    '心呼吸', '方海',
                    'リトルクライベイビー', '喵喵',
                    'イヴステッパー', '尖牙',
                    'Daydreamer(s)', '广深',
                    '極夜灯' ,'兔梓',
                    'doppel', '喵喵',
                    'ハグレノカラー' ,'墨莹',
                    'さいはて', '蝉蜕',
                    '目眩', '墨莹',
                    '絶対的' ,'白子',
                    'アンノウン・マザーグース' ,'白子',
                    'Namid[A]me' ,'白字',
                    'Loveless' ,'白子',
                    'ソシアルクロック' ,'白子',
                    'NAI.' ,'白子'
                ],

                imgList:[
                    require('../assets/fwimg/421pic/0.jpg'),
                    require('../assets/fwimg/421pic/1.jpg'),
                    require('../assets/fwimg/421pic/2.jpg'),
                    require('../assets/fwimg/421pic/3.jpg'),
                    require('../assets/fwimg/421pic/4.jpg'),
                    require('../assets/fwimg/421pic/5.jpg'),
                    require('../assets/fwimg/421pic/6.jpg'),
                    require('../assets/fwimg/421pic/7.jpg'),
                    require('../assets/fwimg/421pic/8.jpg'),
                    require('../assets/fwimg/421pic/9.jpg'),
                    require('../assets/fwimg/421pic/10.jpg'),
                    require('../assets/fwimg/421pic/12.jpg'),
                    require('../assets/fwimg/421pic/13.jpg'),
                    require('../assets/fwimg/421pic/14.jpg'),
                    require('../assets/fwimg/421pic/15.jpg'),
                    require('../assets/fwimg/421pic/16.jpg'),
                    require('../assets/fwimg/421pic/17.jpg'),
                    require('../assets/fwimg/421pic/18.jpg'),
                    require('../assets/fwimg/421pic/19.jpg'),
                    require('../assets/fwimg/421pic/20.jpg'),
                    require('../assets/fwimg/421pic/21.jpg'),
                    require('../assets/fwimg/421pic/22.jpg'),
                    require('../assets/fwimg/421pic/23.jpg'),
                    require('../assets/fwimg/421pic/24.jpg'),
                    require('../assets/fwimg/421pic/25.jpg'),
                    require('../assets/fwimg/421pic/26.jpg'),
                    require('../assets/fwimg/421pic/27.jpg'),
                    require('../assets/fwimg/421pic/28.jpg'),
                    require('../assets/fwimg/421pic/29.jpg'),
                    require('../assets/fwimg/421pic/30.jpg'),
                    require('../assets/fwimg/421pic/31.jpg'),
                    require('../assets/fwimg/421pic/32.jpg'),
                    require('../assets/fwimg/421pic/33.jpg'),
                    require('../assets/fwimg/421pic/34.jpg'),
                    require('../assets/fwimg/421pic/35.jpg'),
                    require('../assets/fwimg/421pic/36.jpg'),
                    require('../assets/fwimg/421pic/37.jpg'),
                    require('../assets/fwimg/421pic/38.jpg'),
                    require('../assets/fwimg/421pic/39.jpg'),
                    require('../assets/fwimg/421pic/40.jpg'),
                    require('../assets/fwimg/421pic/41.jpg'),
                    require('../assets/fwimg/421pic/42.jpg'),
                    require('../assets/fwimg/421pic/43.jpg'),
                    require('../assets/fwimg/421pic/44.jpg'),
                    require('../assets/fwimg/421pic/45.jpg'),
                    require('../assets/fwimg/421pic/46.jpg'),
                    require('../assets/fwimg/421pic/47.jpg'),
                    require('../assets/fwimg/421pic/48.jpg'),
                    require('../assets/fwimg/421pic/49.jpg'),
                    require('../assets/fwimg/421pic/50.jpg'),
                    require('../assets/fwimg/421pic/51.jpg'),
                    require('../assets/fwimg/421pic/52.jpg'),
                    require('../assets/fwimg/421pic/53.jpg'),
                    require('../assets/fwimg/421pic/54.jpg'),
                    require('../assets/fwimg/421pic/55.jpg'),
                    require('../assets/fwimg/421pic/56.jpg'),
                    require('../assets/fwimg/421pic/57.jpg'),
                    require('../assets/fwimg/421pic/58.jpg'),
                    require('../assets/fwimg/421pic/59.jpg'),
                    require('../assets/fwimg/421pic/60.jpg'),
                    require('../assets/fwimg/421pic/61.jpg'),
                    require('../assets/fwimg/421pic/62.jpg'),
                    require('../assets/fwimg/421pic/63.jpg'),
                    require('../assets/fwimg/421pic/64.jpg'),
                ]
            }
        },

        mounted(){

            this.showImg=true
            this.calculationWidth();
        },
        methods:{
            toOtherpage(path){
                window.$router.push(path)
            },
            tomenu(){
                this.showMenu=true

            },
            hidemenu(e){
                if(e.target.className==="mask1")
                    this.showMenu=false
            },
            calculationWidth(){
                let domWidth = document.getElementById("v-waterfall").offsetWidth;
                if (!this.waterfallImgWidth && this.waterfallImgCol){
                    this.waterfallImgWidth = (domWidth-this.waterfallImgRight*this.waterfallImgCol)/this.waterfallImgCol;
                }else if(this.waterfallImgWidth && !this.waterfallImgCol){
                    this.waterfallImgCol = Math.floor(domWidth/(this.waterfallImgWidth+this.waterfallImgRight))
                }
                //初始化偏移高度数组
                this.waterfallDeviationHeight = new Array(this.waterfallImgCol);
                for (let i = 0;i < this.waterfallDeviationHeight.length;i++){
                    this.waterfallDeviationHeight[i] = 0;
                }
                this.imgPreloading()
            },
            //图片预加载
            imgPreloading(){
                for (let i = 0;i < this.imgList.length;i++){
                    let aImg = new Image();
                    aImg.src = this.imgList[i];
                    aImg.onload = aImg.onerror = (e)=>{
                        let imgData = {};
                        imgData.height = this.waterfallImgWidth/aImg.width*aImg.height;
                        imgData.src = this.imgList[i];
                        imgData.name=this.imgDetail[2*i]
                        imgData.auth=this.imgDetail[2*i+1]
                        this.waterfallList.push(imgData);
                        this.rankImg(imgData);
                    }
                }
            },
            //瀑布流布局
            rankImg(imgData){
                let {waterfallImgWidth,waterfallImgRight,waterfallImgBottom,waterfallDeviationHeight,waterfallImgCol} = this;
                //for (let i = 0;i < this.waterfallList.length;i++){
                let minIndex = this.filterMin();
                imgData.top = waterfallDeviationHeight[minIndex];
                imgData.left = minIndex*(waterfallImgRight+waterfallImgWidth);
                waterfallDeviationHeight[minIndex] += imgData.height + waterfallImgBottom;
                //}

            },
            /**
             * 找到最短的列并返回下标
             * @returns {number} 下标
             */
            filterMin(){
                const min = Math.min.apply(null, this.waterfallDeviationHeight);
                return this.waterfallDeviationHeight.indexOf(min);
            }
        },

    }
</script>

<style scoped>
    .v-waterfall-content{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .v-waterfall-item{
        float: left;
        position: absolute;
    }
    .v-waterfall-item img{
        width: 280px;
        height: auto;
    }
    .title
    {
        float: left;
        margin-top: 45px;
        height: 28px;
        width: 172px;
        background: url("../assets/fwimg/fwtitle.png") no-repeat center center;
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


</style>
