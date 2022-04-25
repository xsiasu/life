<template>
  <div>
    <h1>장보러가기</h1>
    <ul>
      <li
        v-for="(food,index) in cart"
        :key="index"
      >
        <img :src="food.image">
        {{ food.name }}
        <span>
          {{ food.status }}
        </span>
        
        <ul>
          <li
            v-for="(recipe, j) in food.recipe"
            :key="j"
          >
            <span>{{ food.recipe[j].material }}</span>
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
}
</script>
