<template>
  <v-layout>
    <v-flex xs12  >
      <v-card flat>
        <v-container grid-list-lg fluid>
          <v-layout row wrap>
            <v-flex
              v-for="product in products"
              :key="product.slug"
              xs4
              d-flex
            > 
              <v-hover>
                <v-card
                  flat
                   slot-scope="{ hover }"
                  :class="`elevation-${hover ? 12 : 2}`"
                  class="mx-auto"
                  color="grey lighten-4"
                  max-width="600"
                >
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${1 * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${1 * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        {{ product.price }}
                      </div>
                    </v-expand-transition>
                    <v-layout
                      slot="placeholder"
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5">
                      </v-progress-circular>
                    </v-layout>
                  </v-img>
                  <v-card-text
                    class="pt-4"
                    style="position: relative;"
                  >
                    <v-btn
                      absolute
                      color="orange"
                      class="white--text"
                      fab
                      right
                      top
                      small
                    >
                      <v-icon>mdi-cart</v-icon>
                    </v-btn>
                    <div class="font-weight-light grey--text title mb-2">код {{ product.kod }}</div>
                    <h3 class="display-1 font-weight-light orange--text mb-2">{{ product.name }}</h3>
                    <div 
                      v-if="product.description"
                      class="font-weight-light title mb-2"
                    >
                     {{ product.description }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-hover>
             </v-flex>
          </v-layout>
        </v-container>
      </v-card>
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




<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>