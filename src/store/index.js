import { createStore} from 'vuex'
import { foodListModule, cartModule } from "./foodlist/index"

export default createStore({
  modules: {
    foodListModule,
    cartModule
  }
})

