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
  html
  {
    height: 100%;
  }
  body
  {
    margin:0;
    padding:0;
    border:0;
    width: 100%;
    height: 100%;
    background-color: #FFF；
  }
  #app {
  font-family: SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace;

}
</style>
