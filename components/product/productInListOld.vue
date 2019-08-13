<template>
	<v-card
	          class=" hide-overflow"
	          style="max-width: 650px;"
	          
	        >
	          <v-card-title>
	            <v-layout row>
	              <v-flex xs9>
	                <v-layout
	                  column
	                  align-start
	                >
	                  <v-flex>
	                    <div>
	                        <nuxt-link
								class="title font-weight-medium"
		                        :to="link"
		                    >
		                    	{{ product.name }}
		                  	</nuxt-link>
	                        <div class="caption grey--text font-weight-light">
	                          код {{ product.kod }}
	                        </div>
	                    </div>
	                  </v-flex>
	                  <v-flex>
	                    <v-container 
	                      fluid
	                      grid-list-md
	                    >
	                      <v-layout v-bind="binding">
	                        <v-flex>
	                          <nuxt-link
								class="title font-weight-medium"
		                        :to="link"
		                      >
		                    	<img
		                            height="250"
		                            width="250"
		                            src='/01/00000003661.jpg'
		                          >
		                          </img>
	                          </nuxt-link>
	                        </v-flex>
	                        <v-flex >
	                          <div 
								v-if="product.description"
	                          	class="caption grey--text font-weight-light"
	                          	>
	                            	{{ product.description }}
	                          </div>
	                        </v-flex>
	                      </v-layout>
	                    </v-container>
	                  </v-flex>
	                </v-layout> 
	              </v-flex>
	              <v-flex xs3>
	                <v-layout column>
	                  <v-flex>
	                    <v-btn 
	                      flat
	                      class="yellow"
	                      small
	                    >
	                      <div class="subheading black--text font-weight-medium">
	                        {{ product.price }} грн.
	                      </div>    
	                    </v-btn>
	                    <v-btn
	                      left
	                      flat
	                      class="primary--text"
	                    >
	                      <v-icon color="primary">
	                        mdi-cart
	                      </v-icon>
	                    </v-btn>
	                    <v-btn
	                      left
	                      flat
	                      class="primary--text"
	                    >
	                      <v-icon color="primary" >
	                        mdi-heart-outline
	                      </v-icon>
	                    </v-btn>
	                    
						<ProductSharing />

	                  </v-flex>
	                </v-layout>    
	              </v-flex>
	            </v-layout> 
	          </v-card-title>
	        </v-card>
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
      }
    }

  }

</script>

