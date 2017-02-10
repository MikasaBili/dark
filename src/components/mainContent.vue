<template>
  <div class="mainBackground mainCompose"></div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss">
    .mainBackground {
        background-image:url('/static/img/background.jpg');
    }
    .mainCompose {
        min-height: 100vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
    }
</style>