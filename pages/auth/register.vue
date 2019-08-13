<template>
  <v-app class="white">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-top justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card flat>
              <v-card-title>
                <div class="layout column align-left">
                  <div class="display-2 font-weight-black grey--text">Register form</div>
                </div>
              </v-card-title>
              <v-card-text>  
                <v-form>
                  <v-text-field append-icon="person" name="name" label="Name" type="text"
                                v-model="model.username"></v-text-field>
                  <v-text-field append-icon="person" name="login" label="Login" type="text"
                                v-model="model.login"></v-text-field>
                  <v-text-field append-icon="lock" name="password" label="Password" id="password" type="password"
                                v-model="model.password"></v-text-field>
                  <v-text-field append-icon="lock" name="password" label="Confirm password" id="confirmpassword" type="password"
                                v-model="model.password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn icon>
                  <v-icon color="blue">mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="red">mdi-google</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="light-blue">mdi-twitter</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn block color="light-green" @click="register" :loading="loading">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      model: {
        username: 'Alex',
        login: 'admin@example.com',
        password: 'password'
      }
    }),

    methods: {
      register() {
        this.loading = true;
        setTimeout(() => {
          this.$router.push('/auth');
        }, 1000);
      }
    }

  };
</script>
