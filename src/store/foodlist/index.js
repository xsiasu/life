import foodListApi from "../../api/foodList";

export const foodListModule = {
  namespaced:true,
  state: {
    foodList :[],
    cart : [],
    
  },
  mutations: {
    setFoodList(state, foodList) {
      state.foodList = [].concat(foodList);
    },    
    addToCart(state, food) {
      const cartItems = state.cart.filter(
        (cartItem) => cartItem.id === food.id);
      if(cartItems.length === 0){
        state.cart.push({
          ...food,
          status :  "사야돼"
        });        
      } else {
        alert("선택했어")
      }
    },
    delItem(state, id) {
      state.cart = state.cart.filter(
        (item) => item.id !== id);
    },
    statusControl(state, id) {
      const statusItem = state.cart.filter(
        (item) => item.id === id);
        const index = state.cart.findIndex((item) => item.id === id);
        if(statusItem[0].status === "사야돼"){
          
          state.cart[index].status = "샀어"
        } else {
          state.cart[index].status = "사야돼"
        }
       
    },    
   },
  actions: {
    async setFoodList({commit}) {
      const response = await foodListApi.getFoodList()
      commit('setFoodList', response.data.food)
    },
    addToCart({commit}, food){
      commit('addToCart', food)
    },
    delItem({commit}, id) {
      commit('delItem', id)
    },
    statusControl({commit}, id) {
      commit('statusControl',id)
    }
   },
  getters: { }
}

 