<template>
  <div>
    <h1 class="mt-16">
      매일 먹는거{{ everdayFood }}
    </h1>

    <v-row
      v-for="(food,index) in everydayFoodList"
      :key="index"
      class="slide"
    >
      <v-col sm="4">
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
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { mapState, mapGetters } from 'vuex';
import PopMenu from '@/components/PopMenu'

export default defineComponent({    
    components: {
      PopMenu
    },
  computed:{
      ...mapState('foodListModule',["everydayFoodList","cart"]),
      ...mapGetters('foodListModule',["everdayFood"])
  },
  created(){
    this.$store.dispatch("foodListModule/setEverydayFoodList"); 
  },  
  methods:{
    addToCart(food) {
      this.$store.dispatch("cartModule/addToCart", food);
    },
  },    

  })
</script>
<style lang="scss" scoped>

 .v-img {
    transition: opacity .4s ease-in-out;
  }

  .v-img:not(.on-hover) {
    opacity: 0.8;
  }


</style>


