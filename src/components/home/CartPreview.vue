<template>
  <div>
    <h1>
      장바구니
    </h1>
    <v-card
      class="d-flex flex-row"
      flat
    >
      <v-card
        v-for="(food,index) in cart"
        :key="index"
        flat
      >
        <v-img
          :src="food.image"
          transition="false"
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
</template>

<script>
import {mapState, mapGetters} from 'vuex';
export default {
   data: () => ({
         items: [
        { title: '자주먹는음식' },
        { title: '소희가 좋아하는 음식' },
        { title: '호영이가 좋아하는 음식' },
        { title: '가족이 다 좋아하는 음식' },
      ],
    }),
      computed:{
      ...mapState('cartModule',["cart"]),
      ...mapGetters('cartModule',["allCart"])
  },
  methods:{
        delItem(id){
      this.$store.dispatch('cartModule/delItem',id)
    },
  },        
}
</script>

<style>

</style>