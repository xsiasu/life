<template>
  <div>
    <h1 class="mt-16 text-h4">
      오늘의 요리{{ allCart }}
    </h1>
    <div>
      <span
        v-for="(food,index) in cart"
        :key="index"
      >
        {{ food.name }},
      </span>
    </div>
    
    <v-container
      v-for="(food,index) in cart"
      :key="index"
      fluid
      color="transparent"
      class="pa-0 mt-10"
    >
      <div>
        <v-row
          no-gutters
          class="py-3"
          style="border-top:solid 1px #ccc"
        >
          <v-col
            cols="auto"
            :style="{'display':'flex','align-items':'center'}"
            class="pr-3"
          >
            <v-img
              :src="
                food.image"
              transition="false"
              width="60"
              height="60"
              cover
              class="rounded-circle"
            />
          </v-col>
          <v-col>
            <p
              class="text-h6"
            >
              {{ food.name }}
            </p>

            <p
              class="text-subtitle-1 d-inline-block text-truncate mt-n1"
              style="max-width: 200px;"
            >
              {{ food.subtitle }}
            </p>
            <span @click="statusControl(food.id)">
              {{ food.status }}
            </span>
          </v-col>
        
          <v-col
            cols="auto"
          >
            <v-btn
              icon
              variant="plain"
              size="x-small"
              @click="delItem(food.id)"
            >
              <v-icon
                color="grey lighten-1"
              >
                mdi-trash-can-outline
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-divider />
      </div>
      <div
        v-for="(recipe, j) in food.recipe"
        :key="j"
      >
        <v-row
          :key="j"
          no-gutters
          class="py-3"
          :class="{'text-decoration-line-through':food.recipe[j].status === 'notneed'}"
          @click="statusControlItem(food.recipe[j].id, food.id)"
        >
          <v-col
            cols="auto"
            :style="{'display':'flex','align-items':'center'}"
            class="pr-3"
          >
            {{ food.recipe[j].id }}
          </v-col>
          <v-col
            cols="auto"
            :style="{'display':'flex','align-items':'center'}"
          >
            <span
              
              class="text-subtitle-1"
            >{{ food.recipe[j].material }}</span>
          </v-col>
          <v-spacer />
          <v-col :style="{'display':'flex','justify-content':'end'}">
            <v-btn
              size="x-small"
              color="primary"
              icon
              variant="plain"
            >
              <v-icon>
                mdi-check
                {{ food.recipe[j].status }}
                <v-icon />
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-divider />
      </div>
    </v-container>
    <v-btn
      color="primary"
      variant="outlined"
      block
      size="large"
      @click="finalItem(food.id)"
    >
      <router-link
        v-if="cart.length > 0"
        :to="{name:'final'}"
      >
        장보러가기
      </router-link>
    </v-btn>
  </div> 
</template>

<script>
import {mapState, mapGetters} from 'vuex';
export default {
  data(){
    return {
    }
  },
  computed:{
      ...mapState('cartModule',["cart"]),
      ...mapGetters('cartModule',["allCart"])
  },
  methods : {
    delItem(id){
      this.$store.dispatch('cartModule/delItem',id)
    },
    statusControl(id) {
      this.$store.dispatch('cartModule/statusControl',id)
    },
    statusControlItem(recipe_id, food_id) {
      this.$store.dispatch('cartModule/statusControlItem',recipe_id, food_id)
      console.log(food_id)
    },
    finalItem(id) {
      this.$store.dispatch('cartModule/finalItem',id)
      
    }    
  }
}
</script>
<style scoped>
.active {

}
</style>