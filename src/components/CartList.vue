<template>
  <div>
    <h1>오늘의 요리</h1>
    <ul>
      <li
        v-for="(food,index) in cart"
        :key="index"
      >
        <img :src="food.image">
        {{ food.name }}
        <span @click="statusControl(food.id)">
          {{ food.status }}
        </span>
        <span @click="delItem(food.id)">delete</span>
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
      </li>
    </ul>
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
      ...mapState('foodListModule',["cart"])
  },
  methods : {
    delItem(id){
      this.$store.dispatch('foodListModule/delItem',id)
    },
    statusControl(id) {
      this.$store.dispatch('foodListModule/statusControl',id)
    },
    statusControlItem(id) {
      // this.$store.dispatch('foodListModule/statusControlItem',id)
      console.log(id)
    }
  }
}
</script>
