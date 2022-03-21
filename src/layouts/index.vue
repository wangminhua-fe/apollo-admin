<template>
  <div class="app-wrapper">
    <!-- 左侧菜单 -->
    <sidebar></sidebar>

    <div class="main-container">
      <div>
        <!-- 顶部navbar -->
        <navbar />
      </div>
      <!-- 内容区 -->
      <app-main></app-main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar.vue'
import AppMain from './components/AppMain.vue'
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  width: 100%;
  height: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}
</style>
