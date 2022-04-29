<template>
  <div>
    <h1 class="mt-16">
      오늘의 요리
    </h1>
    <v-list class="mt-10">
      <div
        v-for="(food,index) in cart"
        :key="index"
      >
        <v-img
          :src="food.image"
          max-width="80"
          height="80"
          cover
          class="rounded"
        />
        {{ food.name }}
        <span @click="statusControl(food.id)">
          {{ food.status }}
        </span>
        <v-btn @click="delItem(food.id)">
          <v-icon>delte</v-icon>
        </v-btn>
        <v-list>
          <div
            v-for="(recipe, j) in food.recipe"
            :key="j"
          >
            <span>{{ food.recipe[j].material }}</span>
            <v-btn
              @click="statusControlItem(food.recipe[j].id)"
            >
              {{ food.recipe[j].status }}
            </v-btn>
          </div>
        </v-list>
      </div>
    </v-list>
    
    <router-link
      v-if="cart.length > 0"
      :to="{name:'final'}"
    >
      장보러가기
    </router-link>
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
