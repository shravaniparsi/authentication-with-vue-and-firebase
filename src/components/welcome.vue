<template>
<div class="welcome">
    <v-content>
    <he>
    </he>
<v-card color="indigo" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">WELCOME </div>
                    <span>Browse info.</span>
                  </div>
                </v-card-title>
</v-card>
       
         <v-card>
          <v-container
            fluid
            grid-list-md
          >
          <v-container fluid grid-list-xl >
            <v-layout row wrap>
              <v-flex
                v-for="card in cards"
                :key="card.title"
                v-bind="{ [`xs${card.flex}`]: true }"
              >
               <v-hover>
                <v-card
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 25:9}`"
                 >
                  <v-img
                    :src="card.src"
                    height="200px"
                    
                  >
                  </v-img>
                </v-card>
                 </v-hover>
                 <v-expansion-panel>
    <v-expansion-panel-content>
      <template v-slot:header>
        <div><b>{{card.title}}</b></div>
      </template>
      <v-card>
        <v-card-text>{{card.description}}</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
              </v-flex>
            </v-layout>
          </v-container>
          <v-flex xs12 class="text-xs-right">
          <v-btn ref="button" dark color="indigo"  @click="$vuetify.goTo(v-content)">scroll up</v-btn>
          </v-flex>
          </v-container>
          
        </v-card>
</v-content>
    </div>
</template>
<script>
import he from './head.vue'
export default{
      data: () => ({
        
    cards: [
      { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6,description:'Less Expensive Than Traditional Home Builds. Costs of prefabs are typically cheaper than stick-built homes by an average of 10% to 20%. Faster Than Traditional Construction. Generally, it takes one to four months longer to build a traditional home than to construct a prefab.'},
      { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6,description: 'Count on four to five days for the trip, depending on whether you want to drive more than nine hours or more than seven hours each day, respectively.'},
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6,description:'An airplane or aeroplane (informally plane) is a powered, fixed-wing aircraft that is propelled forward by thrust from a jet engine, propeller or rocket engine. Airplanes come in a variety of sizes, shapes, and wing configurations.' },
       { title: 'squirrel', src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', flex: 6,description:'Squirrels are members of the family Sciuridae, a family that includes small or medium-size rodents. The squirrel family includes tree squirrels, ground squirrels,'},
        { title: 'sky', src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', flex: 6 ,description:'The sky (or celestial dome) is everything that lies above the surface of the Earth, including the atmosphere and outer space.'},
         { title: 'bird', src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', flex: 6,description:'Birds, also known as Aves, are a group of endothermic vertebrates, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs' }
    ],
    
  }),
      components:{
        'he':he,
        },
        
        }
   
  
</script>

