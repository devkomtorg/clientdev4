<template>
	<v-hover>

                <v-card
                  class="mx-auto"
                  slot-scope="{ hover }"
                  :class="`elevation-${hover ? 12 : 2}`"
                >
                  <v-img
                    src="/01/00000003661.jpg"
                    lazy-src="/01/00000003661.jpg"
                    aspect-ratio="1"
                    class="grey lighten-2"

                  >
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
                  <v-card-title>
                    <v-layout column>
                      <v-flex>
                        <nuxt-link
                          class="no-decoration"
                          :to="localePath({ name: 'products-slug', params: { slug: product.slug } })"
                        >
                          <h3 class="subheading font-weight-light black--text mb-2">{{ product.name }}</h3>
                        </nuxt-link>
                      </v-flex>
                      <v-flex align-self-end>
                        <v-chip label outline color="orange">{{ product.price }}</v-chip>
                      </v-flex>
                    </v-layout>
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn icon>
                      <v-icon color="orange">favorite_border</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon color="orange">bookmark_border</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon color="orange">share</v-icon>
                    </v-btn>
                    <v-btn
                      color="orange"
                      class="white--text"
                      fab
                      small
                    >
                      <v-icon>mdi-cart</v-icon>
                    </v-btn>
                  </v-card-actions>
                  <v-card-text>
                    
                    <v-slide-y-transition>
                      <div 
                        v-if="product.description"
                        :class="hover ? 'font-weight-light caption mb-2' : 'text-truncate font-weight-light caption mb-2'"
                      >
                        {{ product.description }}
                      </div>
                    </v-slide-y-transition>
                    <nuxt-link
                        to=""
                        class="no-decoration grey--text caption font-weight-light"
                      >
                        Переглянути більше
                    </nuxt-link>
                  </v-card-text>
                </v-card>
    </v-hover> 
</template>

<script>
  
  import ProductSharing from '~/components/product/productSharing'

  export default {

    components: {

    	ProductSharing

    },

    props: {
    	product: {
    		required: true,
    		type: Object
    	}
    },

    computed: {

    	link () {

    		return { 
    			name: 'products-slug', 
    			params: { slug: this.product.slug } 
    		}
    		
    	},

      binding () {
        const binding = {}

        if (this.$vuetify.breakpoint.xsOnly) binding.column = true

        return binding
      },

      
    }
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
.no-decoration {
	text-decoration: none;
}
</style>

