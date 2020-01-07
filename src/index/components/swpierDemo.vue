<template>
    <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in imgData" :key="index"><img :src="item.img" /></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
// 引入swiper插件
import Swiper from 'swiper';
export default {
  props: {
    imgData: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      mySwiper: null
    };
  },
  mounted() {
    this._initSwiper();
  },
  methods: {
    _initSwiper() {
      var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: false, //是否进行无缝循环
        slidesPerView: 'auto', //
        centeredSlides: true,
        //开启分页器
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        spaceBetween: 12, //轮播图之间的间距
        //轮播图触发的函数
        on: {
          // 当轮播图进行切换时触发的函数
          slideChange: function slideChange() {
            var num = Number(this.realIndex);
          }
        }
      });
      this.mySwiper = mySwiper;
    },
    updateSwpier() {
      if (this.mySwiper) {
        this.mySwiper.autoplay.stop();
        this.$nextTick(function() {
          this._initSwiper();
          this.mySwiper.autoplay.start();
        });
      }
    }
  },
  watch: {
    imgData(val) {
     this.updateSwpier()
    }
  }
};
</script>

<style lang="scss" scoped>
body,
html {
  padding: 0;
  margin: 0;
}
.banner {
  margin-top: 10px;
}
.swiper-container {
  width: 100%;
  height: 219.8px;
  background: #fff;
}
.swiper-container .swiper-wrapper .swiper-slide {
  width: 100%;
  height: 219.8px;
  background: #ccc;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit:cover
  }
}
</style>
 