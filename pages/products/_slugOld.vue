<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs6>
        <v-card
          color="grey lighten-4"
          

        >
          <v-card-content>
              <v-carousel 
                hide-delimiters
                flat
                light
                max="600px"
              >
                <v-carousel-item
                  v-for="i in 5"
                  :key="i"
                  src="/01/00000003661.jpg"
                  

                ></v-carousel-item>
              </v-carousel>
           
          </v-card-content>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card
          color="grey lighten-4"
          

        >
          <v-card-title
            class="pt-4"
            style="position: relative;"
          >
            <v-layout column>
              <v-flex>
                <h3 class="headline font-weight-light black--text mb-2">{{ product.name }}</h3>
              </v-flex>
              <v-flex>
                <h3 class="font-weight-light orange--text text--darken--3 display-1 mb-2">{{ product.price }}</h3> 
              </v-flex>
            </v-layout>
            <v-btn
                              absolute
                              color="orange"
                              class="white--text"
                              fab
                              right
                              top
                              small
                            >
                              <v-icon>shopping_cart</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-actions>
                    <h3 class="subheader font-weight-light black--text mb-2">код 001232</h3>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>favorite</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>bookmark</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>share</v-icon>
                    </v-btn>
                  </v-card-actions>
          <v-divider></v-divider>
            <v-card-text>
            
            <v-tabs
              color="grey lighten-4"
              v-model="active"
              fixed-tabs
              :icons-and-text="$vuetify.breakpoint.smAndUp"
              slider-color="primary"
            >
              <v-tab>
                <div v-if="$vuetify.breakpoint.smAndUp">  
                  Характеристики
                </div>
                <v-icon>
                   mdi-file-document-box-outline
                </v-icon>
              </v-tab>
              <v-tab>
                <div v-if="$vuetify.breakpoint.smAndUp"> 
                  Доставка
                </div>
                <v-icon>
                  mdi-truck
                </v-icon>
              </v-tab>
              <v-tab>
                <div v-if="$vuetify.breakpoint.smAndUp">
                  Оплата
                </div>
                <v-icon>
                  mdi-credit-card
                </v-icon>
              </v-tab>
              <v-tab-item >

                <ProductCharacteristics/>

              </v-tab-item>
              <v-tab-item >

                <ProductDelivery/>

              </v-tab-item>
              <v-tab-item >

                <ProductPayment/>

              </v-tab-item>
            </v-tabs>
          </v-card-text>
        </v-card>
      
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import ProductSharing from '~/components/product/productSharing'
  import ProductImgs from '~/components/product/productImgs'
  import ProductCharacteristics from '~/components/product/productCharacteristics'
  import ProductDelivery from '~/components/product/productDelivery'
  import ProductPayment from '~/components/product/productPayment'
  
  export default {

    components: {

      ProductSharing,
      ProductImgs,
      ProductCharacteristics,
      ProductDelivery,
      ProductPayment
    },

    data: () => ({
      active: null,
      copied: false,
      product: [],
    }),

    async asyncData({ params, app }){
    	let response = await app.$axios.$get(`products/${params.slug}`)

    	return {
    		product: response.data
    	}
    },

	
    methods: {
      copy () {
        const markup = this.$refs.link
        markup.focus()
        document.execCommand('selectAll', false, null)
        this.copied = document.execCommand('copy')
      }
    }
  }
</script>