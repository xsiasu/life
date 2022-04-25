<template>
  <swiper
    class="swiper"
    :modules="modules"
    :space-between="30"
    :slides-per-view="3"
    :free-mode="true"
    :pagination="{ clickable: true }"
  >
    <swiper-slide
      v-for="(food,index) in foodList"
      :key="index"
      class="slide"
    >
      <div @click="addToCart(food)">
        <img :src="food.image">
      </div>
      <span>{{ food.name }}</span>          
    </swiper-slide>
  </swiper>
</template>

<script>
import { defineComponent } from 'vue'
import {mapState} from 'vuex';
  import { Pagination,FreeMode } from 'swiper'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

  // import swiper module styles
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/free-mode'
  // more module style...

  export default defineComponent({    
    name: 'SwiperExampleFreeMode',
    title: 'Free mode / no fixed positions',
    url: import.meta.url,    
    components: {
      Swiper,
      SwiperSlide
    },
 setup() {
      return {
        modules: [Pagination, FreeMode]
      }
    },
   

  computed:{
      ...mapState('foodListModule',["foodList"])
  },
  created(){
    this.$store.dispatch("foodListModule/setFoodList");
  },  
  methods:{
    addToCart(food) {
      this.$store.dispatch("foodListModule/addToCart", food);
    },
  },    

  })
</script>
<style lang="scss" scoped>
  @import '@/styles/init.scss';
  @import './style.scss';

  .swiper {
    @include swiper-wrapper();
  }

  .slide {
    @include swiper-slide();
  }
</style>