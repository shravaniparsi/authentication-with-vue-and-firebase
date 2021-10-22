<template>
  <v-app >
    <div class="login" >
      <v-content >
        <v-container fluid fill-height>
          <he></he>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="indigo">
                  <v-toolbar-title>Login form</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form ref="form" lazy-validation >
                    <v-text-field
                      v-model="user"
                      :rules="nameRules"
                      label="mail"
                      required
                      hint="enter valid mail"
                      persistent-hint
                      :validate-on-blur="true"
                      
                    ></v-text-field>

                    <v-text-field
                      type="password"
                      v-model="password"
                      :rules="passRules"
                      label="password"
                      required
                      hint="must have a capital,numeric and special char"
                      persistent-hint
                      :validate-on-blur="true"
                      @keyup.enter="validate"
                    ></v-text-field>
                    <v-flex xs12 class="text-xs-right">
                      <v-btn dark color="indigo" @click="validate" >LOG IN</v-btn>
                    </v-flex>
                  </v-form>
                </v-card-text>
                
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      
    </div>
  </v-app>
  
</template>
<script>
import he from "./head.vue";

export default {
  name: "App",
  components: {
    he: he,
    
  },
  data() {
    return {
      user: "",
      password: "",

      nameRules: [
        v => !!v || "field is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passRules: [
        v => !!v || "password is required",
        v => /[A-Z]/.test(v) || " must contain capital,special char and number",
        // v => this.f2 ?/[a-z]/.test(v) || " must contain capital,special char and number":true,
        v => /[0-9]/.test(v) || " must contain capital,special char and number",
        v =>
          /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/.test(v) ||
          " must contain capital,special char and number"
      ]
      // valid:true,
      //fl:false,
      //f2:false,
    };
  },

  methods: {
    validate() {
      // this.fl=true;
      // this.f2=true;
      if (this.$refs.form.validate()) {
        sessionStorage.auth = true;
        
       // this.$store.state.l=true;
        console.log(this.$store.state.l);
        this.$router.push("/welcome");
      } else {
        // this.fl=false;
        //  this.f2=false;
      }
    }
  }
};
</script>

