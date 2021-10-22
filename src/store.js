import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export const store=new Vuex.Store({
    state:{
        l:false,
        
    },
   /* mutations: {
        setl (state,p) {
          // mutate state
          Vue.set(state,'l',p);
        }
      }*/
});