import http from "./http";
//aync es6 에 promise 가 좀 더  편하게 바뀌었다고 생각하면 됨
export default {
  async getEverdayFoodList() {
    return http.get("api/everyday-food.json");
  },
  async getManytimesFoodList() {
    return http.get("api/manytimes-food.json");
  },
  async getSometimesFoodList() {
    return http.get("api/sometimes-food.json");
  },    
};