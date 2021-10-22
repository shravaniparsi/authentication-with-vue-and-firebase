<template>
<div>
   <v-content>
    <he>
    </he>
    

    <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items1"
      :key="i"
      :src="item.src"
      reverse-transition="fade"
      transition="fade"
      height=200
    ></v-carousel-item>
  </v-carousel>
     </v-content>
     
</div>
</template>
<script>
import he from './head.vue'
export default{
    data () {
      return {
        items1: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ],
        active: null,
        items: [
          'web', 'shopping', 'videos', 'images', 'news'
        ],
      }
    },
  
      components:{
        'he':he,
        },
        
        }
   
  
</script>