<template>
 
    <v-card color="grey lighten-5" class="grey--text">
              <v-layout/>
                <v-flex >
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex >
                  <v-card-title primary-title>
                    <div>
                      <div>{{ product.product.name }}</div>
                      <div>{{ product.type }} {{ product.name }}</div>
                    </div>
                  </v-card-title>
                </v-flex xs1>
                <v-flex >
                  <v-card-title primary-title>
                     <v-select
                      outline
                    ></v-select>
                  </v-card-title>
                </v-flex>
                <v-flex >
                  <v-card-title primary-title>
                      <div class="body-2">{{ product.total }}</div>
                  </v-card-title>
                </v-flex>
               
                <v-flex >
                  <v-card-title primary-title>
                    <v-btn icon @click.prevent="destroy(product.id)"><v-icon>delete</v-icon></v-btn>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-card>
  
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    computed: {
      quantity: {
        get () {
          return this.product.quantity
        },

        set (quantity) {
          this.update({ productId: this.product.id, quantity })
        }
      }
    },

    props: {
      product: {
        required: true,
        type: Object
      }
    },

    methods: {
      ...mapActions({
        destroy: 'cart/destroy',
        update: 'cart/update'
      })
    }
  }
</script>
