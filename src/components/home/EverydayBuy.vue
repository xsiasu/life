<template>
  <div>
    <h1 class="mt-16">
      매일 먹는거
    </h1>
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
        v-for="(food,index) in foodList"
        :key="index"
        
        class="slide"
      >
        <v-card
          color="transparent"
        >
          <v-img
            :src="food.image"
            aspect-ratio="1"
            class="rounded-xl"
            max-height="226px"
            cover
            @click="addToCart(food)"
          >
            <v-menu transition="slide-y-transition">
              <template #activator="{ props }">
                <v-btn
                  icon
                  class="badge-item"
                  v-bind="props"
                >
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>            
            </v-menu>


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
      </swiper-slide>
    </swiper>   
    <h1 class="mt-16">
      자주 먹는거
    </h1>    
    <h1 class="mt-16">
      가끔 먹는거
    </h1>        
    <h1 class="mt-16">
      매일 사는거
    </h1>
    <h1 class="mt-16">
      자주 사는거
    </h1>    
    <h1 class="mt-16">
      가끔 사는거
    </h1>        




    
    <div>
      <h1>
        장바구니
      </h1>
      <v-card
     
        class="d-flex flex-row"
      >
        <v-card
          v-for="(food,index) in cart"
          :key="index"
        >
          <v-img
            :src="food.image"
            max-height="60px"
            max-width="60px"
            cover
            class="rounded"
            aspect-ratio="1"
          >
            <v-icon
              icon="mdi-close-circle-outline"
              class="remove-item"
              @click="delItem(food.id)"
            />
          </v-img>
          <v-card-title class="text-subtitle-2">
            {{ food.name }}
          </v-card-title>
          <ul>
            <li
              v-for="(recipe, j) in food.recipe"
              :key="j"
            >
              <span>{{ food.recipe[j].material }}</span>
              <v-btn
                @click="statusControlItem(food.recipe[j].id)"
              >
                {{ food.recipe[j].status }}
              </v-btn>
            </li>
          </ul>                      
        </v-card>
      </v-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import {mapState} from 'vuex';

  import { Pagination,FreeMode, Navigation} from 'swiper'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

  // import swiper module styles
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'
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
        modules: [Pagination, FreeMode,Navigation]
      }
    },
    data: () => ({
         items: [
        { title: '자주먹는음식' },
        { title: '소희가 좋아하는 음식' },
        { title: '호영이가 좋아하는 음식' },
        { title: '가족이 다 좋아하는 음식' },
      ],
    }),
   

  computed:{
      ...mapState('foodListModule',["foodList","cart"])
  },
  created(){
    this.$store.dispatch("foodListModule/setFoodList"); 
  },  
  methods:{
        delItem(id){
      this.$store.dispatch('foodListModule/delItem',id)
    },
    addToCart(food) {
      this.$store.dispatch("foodListModule/addToCart", food);
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
    
      ::v-deep(.swiper-slide) {
      @include swiper-slide();
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
    background: rgba(0,0,0,.5)}
    .remove-item {
  position: absolute;
    right: -3px;
    top: -3px;
    background: rgba(0,0,0,.5)}      
    
</style>