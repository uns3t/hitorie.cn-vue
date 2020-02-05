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
        name: "fansworkImg",
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
                        imgData.name=this.imgName[i]
                        imgData.auth=this.imgAuther[i]
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
                console.log(imgData);
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



        data(){
            return{
                showMenu:false,
                showImg:false,
                waterfallList:[],
                imgArr:[

                ],
                waterfallImgWidth:300,
                waterfallImgCol:3,
                waterfallImgRight:20,
                waterfallImgBottom:50,
                waterfallDeviationHeight:[],
                imgName:[
                    "5カウントハロー",
                    "Eve stepper",
                    "fuyuno",
                    "non-fiction four e p",
                    "rurarura",
                    "senseless wonder",
                    "tosenbo"
                ],
                imgAuther:[
                    "须须",
                    "尖牙",
                    "病理",
                    "KI",
                    "???",
                    "流火",
                    "尖牙",
                ],
                imgList:[
                    require('../assets/fwimg/pic/1.jpg'),
                    require('../assets/fwimg/pic/2.jpg'),
                    require('../assets/fwimg/pic/3.jpg'),
                    require('../assets/fwimg/pic/4.png'),
                    require('../assets/fwimg/pic/5.jpg'),
                    require('../assets/fwimg/pic/6.jpg'),
                    require('../assets/fwimg/pic/7.jpg'),]
            }
        },

        mounted(){
            this.showImg=true
            this.calculationWidth();
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
        width: 300px;
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
</style>
