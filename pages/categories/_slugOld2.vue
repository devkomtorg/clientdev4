<template>
 <v-card flat color="grey lighten-5">
    <v-container
        fluid
        grid-list-lg
    >
      <v-layout column>
       
        <v-flex>
          <v-container>
            <v-layout >
            <v-select
              style="max-width: 300px;"
              :items="sortItems"
              label="Сортировка"
            >
            </v-select>
            <v-spacer />
            <ProductMultiSelect />
           </v-layout>
          </v-container>
        </v-flex>
        <v-flex>
          <v-layout row grid-list-lg fluid wrap>
          <v-flex 
            v-for="product in products"
            :key="product.slug"
            :class="$vuetify.breakpoint.xsOnly ? 'xs12' : 'lg3'"
            d-flex
          >

            <ProductCard :product="product" />

          </v-flex>
         </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
  
</template>

<script>
  import ProductMultiSelect from '~/components/product/productMultiSelect'
  import ProductCard from '~/components/product/ProductCard'

  export default {
    components: {
      ProductMultiSelect,
      ProductCard
    },

    data: () => ({
      products: [],
      sortItems: [
          'По уменьшению цены', 
          'По возрастанию цены', 
          'По названию', 
          'По производителю'
      ],
    }),

    async asyncData({ params, app }){
        let response = await app.$axios.$get(`products?category=${params.slug}`)

        return {
          products: response.data
        }
  },
  }
</script>

