
<template>
  <v-app-bar elevation="1">
    <router-link :to="{name:'home'}">
      <a>home</a>
    </router-link>
    
    
    <router-link :to="{name:'cart'}">
      <a>cart</a> ddddd
    </router-link>
    
    <v-spacer />
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <router-link :to="{name:'cart'}">
      <a>
        <v-btn
          icon
        >
          <v-badge
            :content="allCart"
            color="error"
          >
            <v-icon>mdi-shopping-outline</v-icon>
          </v-badge>
        </v-btn>
      </a>
    </router-link>

    <v-menu>
      <template #activator="{ props }">
        <v-avatar v-bind="props">
          <v-img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="Sean"
          />
        </v-avatar>
      </template>   
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>     
    </v-menu>
  </v-app-bar>
</template>


<script>
import {mapState, mapGetters} from 'vuex';
export default {
   data: () => ({
         items: [
        
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        
        { title: 'Click Me 2' },
      ],
    }),
      computed:{
      ...mapState('cartModule',["cart"]),
      ...mapGetters('cartModule',["allCart"])
  },
}
</script>

