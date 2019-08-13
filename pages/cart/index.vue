<template>
	<v-container>
  <div v-if="products.length">
            <CartOverview />
          </div>
          <div v-else>
            Your cart is empty
          </div>

          <nuxt-link
            :to="{ name: 'checkout' }"
            v-if="!empty"
            class="button is-fullwidth is-info is-medium"
          >
            Checkout
          </nuxt-link>
          <v-btn 
            dark
            block 
            color="secondary" 
          >
           Заказать
          </v-btn>
        </v-container>

</template>

<script>
  import { mapGetters } from 'vuex'
  import CartOverview from '@/components/cart/CartOverview'

  export default {
    components: {
      CartOverview
    },

    middleware: [
      'redirectIfGuest'
    ],

    computed: {
      ...mapGetters({
        empty: 'cart/empty',
        products: 'cart/products'
      })
    }
  }
</script>
