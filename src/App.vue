<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        dark
        color="white"
        scroll-target="#scrolling-techniques-3"
      >
        <router-link :to="{name:'home'}">
          <a>home</a>
        </router-link>
        <router-link :to="{name:'cart'}">
          <a>cart</a> 
        </router-link>
      </v-app-bar>
      <v-main>
        <v-sheet
          id="scrolling-techniques-3"
          class="overflow-y-auto"
          max-height="600"
        >
          <v-container style="height: 1500px;">
            <router-view />
          </v-container>
        </v-sheet>
      </v-main>
    </v-card>
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
