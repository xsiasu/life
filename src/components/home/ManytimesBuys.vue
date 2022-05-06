<template>
  <div>
    <h1 class="mt-16">
      자주 먹는거{{ manytimesFood }}
    </h1>
    <router-link :to="{name : 'manytimes'}">
      <a>더보기</a>
    </router-link>
    <swiper
      class="swiper mt-10"
      :modules="modules"
      :free-mode="true"
      :slides-per-view="2"
      :space-between="10"
      :navigation="true"
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
        v-for="(food,index) in manytiemesFoodList"
        :key="index"
        class="slide"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            flat
          >
            <v-img
              :elevation="isHovering ? 12 : 2"
              :class="{ 'on-hover': isHovering }"
              v-bind="props"            
              :src="food.image"
              aspect-ratio="1"
              class="rounded-xl"
              max-height="226px"
              cover
              @click="addToCart(food)"
            >
              <PopMenu />


              <template #placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  />
                </v-row>
              </template>
            </v-img>
            <v-card-title
              class="text-subtitle-1"
              color="white"
            >
              {{ food.name }}
            </v-card-title>
            <v-card-subtitle class="text-subtitle-2 mt-n2">
              {{ food.subtitle }}
            </v-card-subtitle>
          </v-card>
        </v-hover>
      </swiper-slide>
    </swiper>   
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import {mapState, mapGetters} from 'vuex';

  import { Pagination,FreeMode, Navigation} from 'swiper'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import PopMenu from '@/components/PopMenu'
  // import swiper module styles
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'
  import 'swiper/css/free-mode'
  // more module style...

  export default defineComponent({    
    components: {
      Swiper,
      SwiperSlide,
      PopMenu
    },
     props: {
       
     },
 setup() {
      return {
        modules: [Pagination, FreeMode,Navigation]
      }
    },
  computed:{
      ...mapState('foodListModule',["manytiemesFoodList","cart"]),
      ...mapGetters('foodListModule',["manytimesFood"])
  },
  created(){
    this.$store.dispatch("foodListModule/setManytimesFoodList"); 
  },  
  methods:{
        delItem(id){
      this.$store.dispatch('cartModule/delItem',id)
    },
    addToCart(food) {
      this.$store.dispatch("cartModule/addToCart", food);
    },
  },    

  })
</script>
<style lang="scss" scoped>
  @import '@/styles/init.scss';
  @import '@/assets/css/style.scss';

  .swiper {
    @include swiper-wrapper();
    height:auto;
    &.directive {
      .swiper-button-next,
      .swiper-button-prev {
        background:#fff
      }
    }
  }

  .slide {
    @include swiper-slide();
    max-width:226px;
    align-items:start
  }
  .active {border:solid 3px red}
  .badge-item{
  position: absolute;
    right: 0;
    top: 3px;
    }
    .remove-item {
  position: absolute;
    right: -3px;
    top: -3px;
    }      
.swiper-button-prev,
.swiper-button-next {
    background: #fff;
    width: 80px;
    height: 80px;
    border-radius: 50%;}


 .v-img {
    transition: opacity .4s ease-in-out;
  }

  .v-img:not(.on-hover) {
    // opacity: 0.8;
  }


</style>


