<template>
    <div class="intro-bg">
        <a @mouseenter="showbg" @mouseleave="hidebg" @click="toBio">
            <div class="intro-logo">
            </div>
        </a>

        <transition name="el-fade-in">
            <div class="intro-img" v-show="isShowbg">
            </div>
        </transition>
    </div>
</template>

<script>

    export default {
        name: "index",
        data(){
            return {
                isShowbg:false
            }
        },
        methods:{
            showbg(){
                this.isShowbg=true
            },
            hidebg(){
                this.isShowbg=false
            },
            toBio(){
                window.$router.push("/bio")
            }
        }
    }
</script>

<style scoped>

    .intro-bg
    {
        width: 100%;
        height: 100vh;
    }
    .intro-img
    {
        width: 100%;
        height: 100vh;
        background: url("../assets/img/bg.jpg") ;
        background-size: cover;
    }
    .intro-logo
    {
        position: absolute;
        width: 620px;
        height: 116px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: url("../assets/img/logo1.png") no-repeat center center;
        z-index: 1111;
    }
    .intro-logo:hover
    {
        position: absolute;
        width: 620px;
        height: 116px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: url("../assets/img/logo2.png") no-repeat center center;
        z-index: 1111;
    }

</style>
