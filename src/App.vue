<template>
  <v-app>
    <v-app-bar app>
      <router-link :to="{name:'home'}">
        <a>home</a>
      </router-link>
      <router-link :to="{name:'cart'}">
        <a>cart</a> 
      </router-link>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
