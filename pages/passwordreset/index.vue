<template>
  <v-container fluid fill-height>
          <v-layout align-top justify-center row wrap>
            <v-flex xs12 sm8 md4 lg4>
              <v-layout column>
                <v-card flat class="grey lighten-5">
                  <v-card-title class="font-weight-bold grey--text title">{{ $t('password_reset_notice') }}
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
                          v-on:keyup.enter="send"
                        ></v-text-field>
                     </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn 
                      block 
                      color="light-green" 
                      class="white--text"
                      :disabled="!valid"
                      @click="send"
                    >
                      {{ $t('password_reset') }}
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-layout>
            </v-flex>
          </v-layout>
  </v-container>
</template>

<script>
  import axios from 'axios'
  
  export default {
    layout: 'simpleToSignin',

    data () {
      return {
        loginForm: {
            email: '',
            
        },
        valid: true,
        emailRules: [
            v => !!v || 'Требуется E-mail',
            v => /.+@.+/.test(v) || 'Неверный ввод'
        ],
       }
    },

    methods: {
      async send() {

          if (this.valid) {
        
            this.$router.push('/')

          }
      }
    } 
  }
</script>