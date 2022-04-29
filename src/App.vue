<template>
  <v-app app>
    <HeaderComp />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HeaderComp from '@/components/include/HeaderCompo'
export default {
  name: 'App',
  components : {
    HeaderComp
  },

  data: () => ({
    //
  }),  
}
</script>
