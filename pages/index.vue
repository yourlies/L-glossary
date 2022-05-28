<template>
  <div class="container">
    <div class="title">
      <div class="mask"></div>
      <div class="text">生词本</div>
    </div>
    <div class="main">
      <List />
      <Item />
    </div>
  </div>
</template>
<script setup lang="ts">
import Item from "../components/Item.vue";
import List from "../components/List.vue";
</script>
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-color: #ddd;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
}
.title {
  font-family: "Microsoft YaHei";
  height: 60px;
  width: 100%;
  font-size: 20px;
  position: relative;
  overflow: hidden;
  .mask {
    background: linear-gradient(to left, #cc2b5e, #753a88);
    filter: blur(1px);
    width: calc(100% + 4px);
    position: relative;
    left: -2px;
    top: -2px;
    height: 100%;
  }
  .text {
    position: absolute;
    top: -2px;
    display: flex;
    height: 100%;
    align-items: center;
    padding-left: 10%;
    color: #fff;
  }
}
.main {
  display: flex;
  padding-top: 30px;
  .list-container {
    margin-left: 10%;
  }
  .item-container {
    margin: 0 50px;
    flex: 1;
  }
}
</style>
