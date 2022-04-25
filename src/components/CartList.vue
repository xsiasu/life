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
            {{ food.recipe[j].material }}
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
    }
  }
}
</script>
