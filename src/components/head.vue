<template>
<div class="main">
  <v-navigation-drawer :clipped="clipped" v-model="drawer" app v-if="this.$store.state.l" dark class="indigo">
     <v-list-tile color="white">
          <v-list-tile-title class="title">
            Application
          </v-list-tile-title>
        </v-list-tile>
        <v-divider></v-divider>
      <v-list class="pa-1">
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="item.path"
          @click="drawer = false"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>     
    <v-toolbar fixed app :clipped-left="clipped" color="indigo" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" v-if="this.$store.state.l"></v-toolbar-side-icon>
      <v-toolbar-title>APPLICATION</v-toolbar-title>
      <v-spacer></v-spacer>
   <v-btn small flat outline @click="logout" v-if="this.$store.state.l">
        <span>LOGOUT</span>
       <!-- <v-icon right>edit</v-icon> -->
      </v-btn>
    </v-toolbar>      
   </div>
</template>
<script>
export default {
  name: "App",
  data () {
      return {
        drawer: false,
        items: [
          { title: 'Home', icon: 'dashboard',path:'/welcome' },
          { title: 'slide', icon: 'question_answer',path:'/slide' },
          { title: 'tabs', icon: 'question_answer',path:'/tabs' },
          { title: 'About', icon: 'question_answer',path:'/about' }
        ]
      }
    },
  methods:{
    logout(){
        sessionStorage.clear();
        this.$store.state.l=false;
        console.log(this.$store.state.l);
        this.$router.push("/login");
        
  },
  
}
}
</script>

<style>
span{
  color:ivory;
}
</style>

