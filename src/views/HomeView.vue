<template>
  <div>
    <EverydayBuy />
    <ManytimesBuy />
    <SometimesBuy />
    <CartPreview />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import EverydayBuy from '@/components/home/EverydayBuy.vue'
import ManytimesBuy from '@/components/home/ManytimesBuys.vue'
import SometimesBuy from '@/components/home/SometimesBuy.vue'
import CartPreview from '@/components/home/CartPreview.vue'



// Components
// import FoodList from '../components/FoodList.vue';

export default defineComponent({
  name: 'HomeView',
  components: {  
    EverydayBuy,
    ManytimesBuy,
    SometimesBuy,
    CartPreview
  },
});
</script>
