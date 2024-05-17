<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container class="el-container-content">
        <el-aside class="scrollThin">
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside</div>
          <div>Aside1</div>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
// import { ref } from 'vue';
</script>

<style lang="scss" scoped>
.common-layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.el-container {
  height: 100%;
}
.el-header {
  display: flex;
  align-items: center;
  // background-color: $themeHeader;
}
.el-container-content {
  height: calc(100vh - 60px);
  .el-aside {
    width: 260px;
    overflow: hidden;
    overflow-y: auto;
    // background-color: $themeColorDark;
    // color: $themeTextColor;
  }
  // .el-main {
    // background-color: $themeMain;
  // }
}
</style>
