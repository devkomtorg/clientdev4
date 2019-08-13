<template>
  <v-layout column>
    <v-flex>
      <CartOverviewProduct
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </v-flex>
    <v-flex>
          <p class="has-text-weight-bold">Subtotal</p>
        
          {{ subtotal }}
       
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapGetters } from 'vuex'

  import CartOverviewProduct from '@/components/cart/CartOverviewProduct'

  export default {
    computed: {
      ...mapGetters({
        products: 'cart/products',
        subtotal: 'cart/subtotal'
      })
    },

    components: {
      CartOverviewProduct
    }
  }
</script>
