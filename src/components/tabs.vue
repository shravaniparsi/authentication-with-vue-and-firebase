<template>
<v-content>
    <he>
        
    </he>
    
    <v-tabs
      v-model="active"
      color="cyan"
      dark
      slider-color="yellow"
    >
      <v-tab
        v-for="n in 3"
        :key="n"
        ripple
        style="cursor: pointer"
      >
        Item {{ n }}

      </v-tab>
      <v-tab-item
        v-for="n in 3"
        :key="n"
      >
        <v-card flat height="300">
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>

    <div class="text-xs-center mt-3">
      <v-btn @click="next">next tab</v-btn>
    </div>
  
</v-content>
</template>
<script>
import he from './head.vue'
export default{
      components:{
        'he':he,
        },
        data () {
      return {
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    methods: {
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0)
      }
    }
  }
</script>
 <style scoped>
template{
    background-color: black
}
</style>

