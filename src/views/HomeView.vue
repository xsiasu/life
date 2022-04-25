<template>
  <div>
    <FoodList />
    <EverydayBuy />
  </div>
</template>

<script>
import EverydayBuy from '@/components/EverydayBuy.vue';
import { defineComponent } from 'vue';


// Components
import FoodList from '../components/FoodList.vue';

export default defineComponent({
  name: 'HomeView',

  components: {  
    FoodList,
    EverydayBuy
  },
});
</script>
