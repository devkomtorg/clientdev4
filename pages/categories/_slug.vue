<template>
  <v-layout column :color="$vuetify.theme.bgcolor">
    <!--<v-flex>
      <Breadcrums :currentSlug="currentSlug"/>
    </v-flex>-->
    <v-flex>
      <v-layout wrap justify-center row fill-height>
        <v-flex
          v-for="product in products"
          :key="product.slug"
          xs12 lg3 sm12 md3 xl3
          :class="$vuetify.breakpoint.mdAndUp ? 'ma-2' : 'ma-0'"
        > 
                                
          <ProductCard :product="product" />
                                    
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  import ProductMultiSelect from '~/components/product/productMultiSelect'
  import ProductCard from '~/components/product/ProductCard'
  import Breadcrums from '~/components/categories/Breadcrums'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      ProductMultiSelect,
      ProductCard,
      Breadcrums,
    },

    computed: {
      ...mapGetters({
        categories: 'categories',
        currentCategory: 'currentCategory'
      }),
      

      binding () {
        const binding = {}

        if (this.$vuetify.breakpoint.xsOnly) binding.column = true

        return binding
      },
      
    },

    data: () => ({
      currentSlug: null,
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
        let slug = params.slug 
        return {
          products: response.data,
          currentSlug: slug
        }
  },

  methods: {
      categoryBySlug: function (slug) {
        return this.categories.filter(x => x.slug === slug)
      },
      subcategoryBySlug: function () {
        let hightCategory = this.categories.filter(x => x.slug == this.currentCategory)
        return hightCategory[0].children.filter(res => res.slug == params.slug)
      } 
    }
  }
</script>

