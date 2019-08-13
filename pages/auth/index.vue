<template>
  <v-container>
    <v-tabs 
      v-model="active"
      fixed-tabs
      slider-color="light-green"
      :color="$vuetify.theme.bgcolor"
      active-class="light-green--text"
    >
      <v-tab
        
      >
        {{ $t('login_form') }}
      </v-tab>
      <v-tab
        
      >
        {{ $t('register_form') }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="active">
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
                          :rules="[passwordRules.required, passwordRules.min]"
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
                        to='/auth/reset'
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
                      <div class="layout column align-left">
                        <div class="display-2 font-weight-black grey--text">{{ $t('login_form') }}</div>
                      </div>
                    </v-card-title>
                    <v-card-actions>
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
                          :rules="[passwordRules.required, passwordRules.min]"
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
                        to='/auth/reset'
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
                      <v-btn 
                              to='/auth/register'
                              flat
                              small
                              color="light-green" 
                        >
                              {{ $t('register') }}
                        </v-btn>
                        <div class="font-weight-thin grey--text">
                          {{ $t('simply') }}
                        </div>
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
    layout: 'simple',

    data () {
      return {
        loginForm: {
            email: '',
            password: ''
        },
       
        active: null,
        valid: true,
        emailRules: [
            v => !!v || 'Требуется E-mail',
            v => /.+@.+/.test(v) || 'Неверный ввод'
        ],
        show: false,
        passwordRules: {
            required: value => !!value || 'Требуется пароль',
        }
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
      }
    } 

  }

</script>