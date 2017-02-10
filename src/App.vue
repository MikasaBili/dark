<template>
<div class="cut">
    <side-bar ref="modal" @Obtain="getMenu"></side-bar>
  <div @click="changeMenuByMain()" :class="[Menu ? 'mainRight' : 'mainLeft']">
    <main-con></main-con>
  </div>
</div>
</template>

<script>
import sideBar from './components/sideBar'
import mainCon from './components/mainContent'

export default {
  data () {
    return {
      Menu: ''
    }
  },
  components: {
    sideBar,
    mainCon
  },
  methods: {
    getMenu: function (msg) {
      this.Menu = msg
    },
    changeMenuByMain: function () {
      if (this.Menu) {
        this.$refs.modal.showMenu()
      }
    }
  }
}
</script>

<style lang="scss">
  @import './styles/core.scss';
  .mainRight {
    transform: translate3d(100px,0,0);
    transition: transform .5s,-webkit-transform .5s;
  }
  .mainLeft {
    transform: translate3d(0px,0,0);
    transition: transform .5s,-webkit-transform .5s;
  }
  .cut {
    overflow: hidden;
  }
</style>
