<template>
  <div>
    <h1>장보러가기</h1>
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
          <!-- <span @click="statusControl(food.id)">
            {{ food.status }}
          </span> -->
          </v-col>
        
          <v-col
            cols="auto"
          />
        </v-row>
        <v-divider />
      </div>
      <div
        v-for="(recipe, j) in food.recipe"
        :key="j"
      >
        <v-row
          :key="j"
          justify="spance-between"
          no-gutters
          class="py-3"
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
              :class="{'text-decoration-line-through':food.recipe[j].status === 'notneed'}"
              class="text-subtitle-1"
            >{{ food.recipe[j].material }}</span>
          </v-col>
          <v-spacer />
          <v-col :style="{'display':'flex','justify-content':'end'}" />
        </v-row>
        <v-divider />
      </div>
    </v-container>
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
      ...mapState('cartModule',["cart"])
  },
}
</script>
