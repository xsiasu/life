<template>
  <div>
    <h1 class="mt-16">
      오늘의 요리
    </h1>
    
    <v-row
      v-for="(food,index) in cart"
      :key="index"
    >
      <v-col>
        <v-img
          :src="food.image"
          transition="false"
          max-width="80"
          height="80"
          cover
          class="rounded"
        />
      </v-col>
      <v-col>
        <p>
          {{ food.name }}
        </p>
        <p>{{ food.subtitle }}</p>
        <span @click="statusControl(food.id)">
          {{ food.status }}
        </span>
        <v-btn
          icon
          @click="delItem(food.id)"
        >
          <v-icon
            color="orange darken-2"
            small
          >
            mdi-cart-remove
          </v-icon>
        </v-btn>
        <v-list>
          <div
            v-for="(recipe, j) in food.recipe"
            :key="j"
          >
            <span>{{ food.recipe[j].id }}</span>
            <span>{{ food.recipe[j].material }}</span>
            <v-btn
              @click="statusControlItem(food.recipe[j].id)"
            >
              {{ food.recipe[j].status }}
            </v-btn>
          </div>
        </v-list>
      </v-col>
    </v-row>
    <v-divider class="mt-4" />
    
    
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
      this.$store.dispatch('foodListModule/statusControlItem',id)
      
    }
  }
}
</script>
