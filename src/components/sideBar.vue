<template>
  <div class="sideBar outerHeight" :class="[isMenuShow ? 'sideShow' : 'sideShowN']">
    <span class="poin flexCenter" :class="[isButtonShow ? 'menuShow menuBox': 'aBlock menuShowN']" @click="showMenu()">
     <i class="icon-caidan iconfont iconSize"></i>
    </span>
    <a class="aBlock flexCenter hoverSide transitInit" :class="[{'isSelectBack':isSelect==item.number ,'sideLogo':item.number == 0 }, isMenuShow ? item.transit : item.transitN]" v-for="item in sideBarlist" @click="changeSelect(item.number)"><i class="iconfont iconSize" :class="'icon-'+item.name"></i></a>
    <span class="splitLine"><i class="iconfont icon-xing"></i></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sideBarlist: [{
        transit: 'transit0',
        transitN: 'transitN0',
        number: 0,
        name: 'avatarkaobei'
      }, {
        transit: 'transit1',
        transitN: 'transitN1',
        number: 1,
        name: 'blog'
      }, {
        transit: 'transit2',
        transitN: 'transitN2',
        number: 2,
        name: 'github'
      }, {
        transit: 'transit3',
        transitN: 'transitN3',
        number: 3,
        name: 'weibo'
      }],
      isSelect: 1,
      isButtonShow: this.change || true,
      isMenuShow: false
    }
  },
  methods: {
    changeSelect: function (item) {
      this.isSelect = item
    },
    showMenu: function () {
      if (this.isButtonShow) {
        this.isButtonShow = false
        this.isMenuShow = true
        this.$emit('Obtain', this.isMenuShow)
      } else {
        this.isButtonShow = true
        this.isMenuShow = false
        this.$emit('Obtain', this.isMenuShow)
      }
    }
  },
  watch: {
    Menu: function () {
      console.log(1)
    }
  }
}
</script>

<style lang="scss">
@import '../styles/core.scss';
@import '../styles/_iconfont.css';
.sideBar {
  z-index: 1000;
  background:$blankSide;
  color:$redSide;
   .isSelectBack {
    color:$whiteSide;
  }
  .iconSize {
    font-size:26px;
  }
  .hoverSide {
  box-shadow:0 0 0 0 inset;  
  }
  .hoverSide:hover {
   box-shadow:0 0 4px 4px inset;
  }
  .menuBox {
    width:100px;
    height:80px;
    margin:2px 0px;
  }
  .poin {
    cursor:pointer;
  }
  .menuShow {
    transform: translate3d(100px,0,0);
    transition: transform .5s,-webkit-transform .5s;
  }
  .menuShowN {
    transform: translate3d(0px,0,0);
    transition: transform .5s,-webkit-transform .5s;
  }
  .transit0 {
    opacity:1;
    transform: translate3d(0px,0,0);
    transition: all .8s cubic-bezier(.175,.885,.52,1.275);
  }
  .transit1 {
    opacity:1;
    transform: translate3d(0px,0,0);
    transition: all 1.0s cubic-bezier(.175,.885,.52,1.275);
  }
  .transit2 {
    opacity:1;
    transform: translate3d(0px,0,0);
    transition: all 1.2s cubic-bezier(.175,.885,.52,1.275);
  }
  .transit3 {
    opacity:1;
    transform: translate3d(0px,0,0);
    transition: all 1.4s cubic-bezier(.175,.885,.52,1.275);
  }
  .transitN0,.transitN1,.transitN2,.transitN3 {
    opacity:0;
    transform: translate3d(-100px,0,0);
    transition: all 1s,-webkit-transform 1s;
  }
}
.sideShow {
  transform: translate3d(0px,0,0);
  transition: transform .5s,-webkit-transform .5s;
}
.sideShowN {
  transform: translate3d(-100px,0,0);
  transition: transform .5s,-webkit-transform .5s;
}
</style>
