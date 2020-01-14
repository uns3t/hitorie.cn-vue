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
    import "../assets/main.css"

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

</style>
