<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="#6A76AB"
        dark
        shrink-on-scroll
        prominent
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3"
      >
        <template #img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          />
        </template>
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
