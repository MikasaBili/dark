<template>
  <div class="mainBackground mainCompose">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
    .mainBackground {
        background-image:url('/static/img/background.jpg');
    }
    .mainCompose {
        min-height: 100vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
        display: flex;
        justify-content: center;
    }
</style>