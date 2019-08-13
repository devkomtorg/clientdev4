<template>
  <v-container>
    <v-tabs
      v-model="activeTab"
      fixed-tabs
      slider-color="light-green"
      :color="$vuetify.theme.bgcolor"
      active-class="light-green--text"
    >
      <v-tab
        v-for="tab of tabs"
        :key="tab.index"
       >
       {{ $t(tab.name) }}
     </v-tab>
    </v-tabs>
    <v-tabs-items v-model="activeTab">
        <v-tab-item>
            <v-layout align-top justify-center row wrap>
              <v-flex xs12 lg4 md6 sm8>
                <v-layout column>
                  <v-card flat class="grey lighten-5">
                    <v-card-title>
                    </v-card-title>
                    <v-card-text>  
                      <v-form 
                        ref="loginForm" 
                        v-model="valid"
                      >
                         <v-text-field 
                          name="login"
                          type="text"
                          v-model="loginForm.email"
                          :rules="emailRules"
                          :label="$t('email')"
                          required
                          v-on:keyup.enter="login"
                        ></v-text-field>
                        <v-text-field 
                          append-icon="lock"
                          v-model="loginForm.password"
                          :append-icon="show ? 'visibility_off' : 'visibility'"
                          :rules="passwordRules"
                          :type="show ? 'text' : 'password'"
                          name="input-10-1"
                          :label="$t('password')"
                          counter
                          @click:append="show = !show"
                          v-on:keyup.enter="login"
                        ></v-text-field>
                      </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn 
                        block 
                        class="white--text"
                        color="light-green" 
                        :disabled="!valid"
                        @click="login"
                        v-on:keyup.enter="login"
                      >
                        {{ $t('login') }}
                      </v-btn>
                    </v-card-actions>
                    <v-card-actions>
                      <v-btn
                        :to="localePath('passwordreset')"
                        flat
                        small
                        color="light-green"
                      >
                        {{ $t('forgot_password') }}
                      </v-btn>
                      <div class="font-weight-thin grey--text">
                       {{ $t('smile') }}
                      </div>
                    </v-card-actions>
                   </v-card>
                  <v-card flat class="grey lighten-5">
                    <v-card-title>
                    </v-card-title>
                    <v-card-actions>
                      <div class="font-weight-thin grey--text">
                       {{ $t('enter_with') }}
                      </div>
                      <v-spacer />
                      <v-btn icon>
                        <v-icon color="blue">mdi-facebook</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon color="red">mdi-google</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon color="blue" disabled>mdi-twitter</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon color="red" disabled>mdi-instagram</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-layout>
              </v-flex>
            </v-layout>
        </v-tab-item>
        <v-tab-item>
            <v-layout align-top justify-center row wrap>
              <v-flex xs12 lg4 md6 sm8>
                <v-layout column>
                  <v-card flat class="grey lighten-5">
                    <v-card-title> 
                    </v-card-title>
                    <v-card-text>  
                      <v-form
                        ref="registerForm" 
                        v-model="valid"
                      >
                        <v-text-field
                          name="login"
                          :label="$t('email')"
                          type="text"
                          :rules="emailRules"
                          required
                          v-model="registerForm.login"
                          v-on:keyup.enter="register"
                        >
                        </v-text-field>
                        <v-text-field
                          :append-icon="show ? 'visibility_off' : 'visibility'"
                          id="password"
                          :type="show ? 'text' : 'password'"
                          @click:append="show = !show"
                          name="input-10-1"
                          :label="$t('password')"
                          counter
                          :rules="passwordRules"
                          v-model="registerForm.password"
                          v-on:keyup.enter="register"
                        >
                        </v-text-field>
                      </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn 
                          block
                          class="white--text"
                          color="light-green" 
                          @click="register" 
                          :loading="loading"
                          :disabled="!valid"
                      >
                        {{ $t('register') }}
                      </v-btn>
                    </v-card-actions>
                    <v-card-actions>
                      <div class="font-weight-thin grey--text">
                        {{ $t('user_agreement_notice') }}
                        <nuxt-link :to="localePath('index')" class="no-decoration light-green--text">
                          {{ $t('user_agreement') }}
                        </nuxt-link>
                        {{ $t('and') }}
                        <nuxt-link :to="localePath('index')" class="no-decoration light-green--text">
                          {{ $t('privacy_policy') }}
                        </nuxt-link>
                      </div>
                    </v-card-actions>
                  </v-card>
                  <v-card flat class="grey lighten-5">
                    <v-card-title>
                    </v-card-title>
                    <v-card-actions>
                      <div class="font-weight-thin grey--text">
                       {{ $t('register_with') }}
                      </div>
                      <v-spacer />
                      <v-btn icon>
                        <v-icon color="blue">mdi-facebook</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon color="red">mdi-google</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon color="blue" disabled>mdi-twitter</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon color="red" disabled>mdi-instagram</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-layout>
              </v-flex>
            </v-layout>
        </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
  import axios from 'axios'
  
  export default {
    layout: 'simpleToHome',
    
    data () {
      return {
        activeTab: 1,
        tabs: [
          { index: 0, name: 'login_form' },
          { index: 1, name:  'register_form' }
         ],
        loginForm: {
            email: '',
            password: ''
        },
        loading: false,
        registerForm: {
          username: '',
          login: '',
          password: ''
        },
        valid: true,
        emailRules: [
            v => !!v || 'Требуется E-mail',
            v => /.+@.+/.test(v) || 'Неверный ввод'
        ],
        show: false,
        passwordRules: [
          v => !!v || 'Требуется пароль',
          v => (v && v.length >= 6) || 'Пароль должен быть не менее 6 символов'
        ],
      }
    },

    methods: {
      async login() {
        if (this.valid) {
            await this.$auth.loginWith('local', {
              data: this.loginForm
            })
        
          this.$router.push('/')
        }
      },

      register() 
      {
        if (this.valid) {
          this.loading = true;
          setTimeout(() => {
            this.$router.push('signin');
          }, 1000);
        }
      }

    } 
  }
</script>