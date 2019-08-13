<template>
 
    <v-layout row>
      <v-flex
        lg3
        v-if="$vuetify.breakpoint.mdAndUp"
      >
      </v-flex>
      <v-flex>
      	<v-container>
	        <v-select
	          style="max-width: 580px;"
	          :items="sortItems"
	          label="Сортировка"
	        >
	        </v-select>

	        <ProductMultiSelect />
        </v-container>
        <div 
        	v-for="product in products"
            :key="product.slug"
        >

			<Product :product="product" />

        </div>
      </v-flex>
    </v-layout>
  
</template>

<script>
  import ProductMultiSelect from '~/components/product/productMultiSelect'
  import Product from '~/components/product/productInList'

  export default {

    components: {
      ProductMultiSelect,
      Product
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

