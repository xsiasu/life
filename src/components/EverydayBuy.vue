<template>
  <div>
    <h1>매일 먹는거</h1>
    <swiper
      class="swiper"
      :modules="modules"
      :free-mode="true"
      :slides-per-view="2"
      :space-between="10"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 20
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 20
        },
      }"    
    >
      <swiper-slide
        v-for="(food,index) in foodList"
        :key="index"
        class="slide"
      >
        <div @click="addToCart(food)">
          <v-img
            :src="food.image"
            aspect-ratio="1"
            class="rounded-xl"
            max-height="226px"
          >
            <template #placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                />
              </v-row>
            </template>
          </v-img>
          <p class="text-h6">
            {{ food.name }}
          </p>  
          <p class="text-subtitle-1">
            {{ food.subtitle }}
          </p>          
        </div>
      </swiper-slide>
    </swiper>   
    
    <h1>자주 먹는거</h1>
    <swiper
      class="swiper"
      :modules="modules"
      :free-mode="true"
      :slides-per-view="2"
      :space-between="10"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 20
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 20
        },
      }"    
    >
      <swiper-slide
        v-for="(food,index) in foodList"
        :key="index"
        class="slide"
      >
        <div @click="addToCart(food)">
          <v-img
            :src="food.image"
            aspect-ratio="1"
            class="rounded-xl"
            max-height="226px"
          >
            <template #placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                />
              </v-row>
            </template>
          </v-img>
          <p class="text-h6">
            {{ food.name }}
          </p>  
          <p class="text-subtitle-1">
            {{ food.subtitle }}
          </p>          
        </div>
      </swiper-slide>
    </swiper>      
    
    <h1>가끔 먹는거</h1>
    <swiper
      class="swiper"
      :modules="modules"
      :free-mode="true"
      :slides-per-view="2"
      :space-between="10"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 20
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 20
        },
      }"    
    >
      <swiper-slide
        v-for="(food,index) in foodList"
        :key="index"
        class="slide"
      >
        <div @click="addToCart(food)">
          <v-img
            :src="food.image"
            aspect-ratio="1"
            class="rounded-xl"
            max-height="226px"
          >
            <template #placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                />
              </v-row>
            </template>
          </v-img>
          <p class="text-h6">
            {{ food.name }}
          </p>  
          <p class="text-subtitle-1">
            {{ food.subtitle }}
          </p>          
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import {mapState} from 'vuex';

  import { Pagination,FreeMode, Scrollbar } from 'swiper'
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
        modules: [Pagination, FreeMode,Scrollbar]
      }
    },
    data: () => ({
      sheet: false,
    }),
   

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
    
    height:auto
    
    
  }

  .slide {
    @include swiper-slide();
    max-width:226px;
    align-items:start
  }

</style>