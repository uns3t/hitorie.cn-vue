<template>
  <div id="app">
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',

}
</script>

<style>
  *
  {
    margin:0;
    padding:0;
    border:0;
  }
  body
  {
    margin:0;
    padding:0;
    width: calc(100% - 24px);
    background-color: #FFF;
  }
  .Bio
  {
    float: left;
    height: 39px;
    width: 132px;
    cursor: pointer;
    margin-bottom: 10px;
    background: url("./assets/img/Bio.png") no-repeat center center;
  }
  .Bio:hover
  {
    float: left;
    height: 39px;
    width: 132px;
    margin-bottom: 10px;
    cursor: pointer;
    background: url("./assets/img/Bio-on.png") no-repeat center center;
  }

  .Member
  {
    float: left;
    height: 39px;
    width: 132px;
    margin-bottom: 10px;
    background: url("./assets/img/Member.png") no-repeat center center;
  }
  .Member:hover
  {
    float: left;
    height: 39px;
    width: 132px;
    margin-bottom: 10px;
    cursor: pointer;
    background: url("./assets/img/Member-on.png") no-repeat center center;
  }
  .Disc
  {
    float: left;
    height: 39px;
    width: 132px;
    margin-bottom: 10px;

    background: url("./assets/img/Disc.png") no-repeat center center;
  }
  .Disc:hover
  {
    float: left;
    height: 39px;
    width: 132px;
    margin-bottom: 10px;
    cursor: pointer;
    background: url("./assets/img/Disc-on.png") no-repeat center center;
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

  .mask1
  {
    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    z-index: 9999;
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
    background: url("./assets/img/Profiles-in.png") no-repeat center center;
    /*display: none;*/
  }
  .Profiles-in:hover
  {
    float: left;
    width: 440px;
    height: 90px;
    margin-bottom: 24px;
    background: url("./assets/img/Profiles-in-on.png") no-repeat center center;
  }
  .Fanswork-in
  {
    float: left;
    width: 440px;
    height: 90px;
    margin-bottom: 24px;
    background: url("./assets/img/Fans work-in.png") no-repeat center center;
    /*display: none;*/
  }
  .Fanswork-in:hover
  {
    float: left;
    width: 440px;
    height: 90px;
    margin-bottom: 24px;
    background: url("./assets/img/Fans work-in-on.png") no-repeat center center;
  }
  .Howto-in
  {
    float: left;
    width: 440px;
    height: 90px;
    margin-bottom: 24px;
    background: url("./assets/img/How to-in.png") no-repeat center center;
    /*display: none;*/
  }
  .Howto-in:hover
  {
    float: left;
    width: 440px;
    height: 90px;
    margin-bottom: 24px;
    background: url("./assets/img/How to-in-on.png") no-repeat center center;
  }
  .Aboutus-in
  {
    float: left;
    width: 440px;
    height: 90px;
    margin-bottom: 24px;
    background: url("./assets/img/About us-in.png") no-repeat center center;
    /*display: none;*/
  }
  .Aboutus-in:hover
  {
    float: left;
    width: 440px;
    height: 90px;
    margin-bottom: 24px;
    background: url("./assets/img/About us-in-on.png") no-repeat center center;
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
    height: 1px;
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
    cursor: pointer;
    background: url("./assets/img/menu.png") no-repeat center center;
  }
  .logo
  {
    display: inline-block;
    height: 124px;
    width: 100%;
    margin-top: 60px;
    background: url("./assets/img/logo.png") no-repeat center center;
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
  .whitebottom
  {
    height: 164px;
    width: 1024px;
    float: left;
  }
  #app {
    font-family: SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace;
  }
</style>
