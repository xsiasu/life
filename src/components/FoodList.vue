<template>
  <div>
    <h1>매일먹는거</h1>
    <v-row class="mb-6">
      <v-col
        sm="4"
        md="4"
      >
        <v-card
          v-for="
            (food,index)
              in
                foodList"
          :key="index"
          max-width="374"
        >
          <div @click="addToCart(food)">
            <v-img :src="food.image" />
          </div>
          <v-card-title>{{ food.name }}</v-card-title>
        </v-card>
      </v-col>
    </v-row> 
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  data(){
    return {
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
}
</script>
