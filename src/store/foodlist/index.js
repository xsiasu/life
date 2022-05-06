import foodListApi from "../../api/foodList";


export const foodListModule = {
  namespaced:true,
  state: {
    everydayFoodList :[],
    manytiemesFoodList :[],
    sometimesFoodList :[],
 
  },
  mutations: {
    setEverydayFoodList(state, everydayFoodList) {
      state.everydayFoodList = [].concat(everydayFoodList);
    },    
    setManytimesFoodList(state, manytiemesFoodList) {
      state.manytiemesFoodList = [].concat(manytiemesFoodList);
    },    
    setSometimesFoodList(state, sometimesFoodList) {
      state.sometimesFoodList = [].concat(sometimesFoodList);
    },            
  },
  actions: {
    async setEverydayFoodList({commit}) {
      const response = await foodListApi.getEverdayFoodList()
      commit('setEverydayFoodList', response.data.food)
    },
    async setManytimesFoodList({commit}) {
      const response = await foodListApi.getManytimesFoodList()
      commit('setManytimesFoodList', response.data.food)
    },
    async setSometimesFoodList({commit}) {
      const response = await foodListApi.getSometimesFoodList()
      commit('setSometimesFoodList', response.data.food)
    },        
   },
  getters: { 
    everdayFood : (state) => {
      return state.everydayFoodList.length;
    },
    manytimesFood : (state) => {
      return state.manytiemesFoodList.length;
    },
    sometimesFood : (state) => {
      return state.sometimesFoodList.length;
    },        
  }
}


export const cartModule = {
  namespaced:true,
  state: {
    cart : [],
  },
  mutations: {
    addToCart(state, food) {
      const cartItems = state.cart.filter(
        (cartItem) => cartItem.id === food.id);
      
      if(cartItems.length === 0){
        state.cart.push({
          ...food,
          status :  "사야돼"
        });        
      } else {

        alert('선택했어')
      }
    },
    delItem(state, id) {
      state.cart = state.cart.filter(
        (item) => item.id !== id);
    },
    statusControl(state, id) {
      const statusItem = state.cart.filter(
        (item) => item.id === id);
        // console.log(statusItem[0],'2')
        const index = state.cart.findIndex((item) => item.id === id);
        if(statusItem[0].status === "사야돼"){
          
          state.cart[index].status = "샀어"
        } else {
          state.cart[index].status = "사야돼"
        }
    },  
    statusControlItem(state,recipe_id, food_id) {
      // const statusItem = state.cart.filter(
      //   (item) => item.id === food_id);

      // const idx = state.cart.findIndex((item) => item.id === food_id);

      const statusItem = state.cart.filter((item) => item.id === food_id)
       console.log(statusItem,'d')
          const index = state.cart[0].recipe.findIndex((item) => item.id === recipe_id);      
          if(state.cart[0].recipe[index].status === "need"){
            state.cart[0].recipe[index].status = "notneed"
          } else {
            state.cart[0].recipe[index].status = "need"
          }              
          
       


                  
    },
    finalItem(state, id){
      state.cart = state.cart.filter((item)=> item.id === id)
      console.log(state.cart)
    }     
  },
  actions: {      
    addToCart({commit}, food){
      commit('addToCart', food)
    },
    delItem({commit}, id) {
      commit('delItem', id)
    },
    statusControl({commit}, id) {
      commit('statusControl',id)
    },
    statusControlItem({commit}, id){
      commit('statusControlItem',id)
    },
    finalItem({commit}, id){
      commit('finalItem',id)
    }
   },
  getters: { 
    allCart : (state) => {
      return state.cart.length;
    }    
  }
}
 