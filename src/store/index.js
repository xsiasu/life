import { createStore} from 'vuex'
import { foodListModule } from "./foodlist/index"

export default createStore({
  modules: {
    foodListModule,
  }
})

