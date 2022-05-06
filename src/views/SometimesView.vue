<template>
  <EverydayList />
</template>

<script>
import EverydayList from '@/components/shop/EverydayList';
import {mapGetters} from 'vuex';
export default {
  components : {
    EverydayList
  },
  computed:{
      ...mapGetters('cartModule',["allCart"])
  },
}
</script>

<style>

</style>