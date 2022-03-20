<template>
  <div class="login-container">
    <el-form ref="loginFromRef" class="login-form">
      <div class="login-form-title">
        <h3 class="login-form-title__content">用户登录</h3>
      </div>

      <el-form-item prop="username">
        <span class="login-form-svg">
          <svg-icon icon="user" />
        </span>
        <el-input placeholder="username" name="username" type="text" />
      </el-form-item>

      <el-form-item prop="password">
        <span class="login-form-svg">
          <svg-icon icon="password" />
        </span>
        <el-input placeholder="password" name="password" />
        <span class="login-form-svg__pwd">
          <svg-icon icon="password" />
        </span>
      </el-form-item>

      <el-button type="primary" class="login-form-btn">登 录</el-button>
    </el-form>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        box-shadow: none;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }

    &-svg {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      display: inline-block;

      &__pwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
      }
    }

    &-title {
      position: relative;

      &__content {
        font-size: 26px;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }

    &-btn {
      width: 100% !important;
    }
  }
}
</style>
