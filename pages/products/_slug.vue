<template>
  <v-layout 
      v-bind="binding"
      justify-center
    >

      <v-flex
        xs12
        sm12
        md6
        lg6
        xl6

      >
        <v-card
          color="white"
          width="450px"
          flat

        >
         
            <v-window v-model="onboarding">
              <v-window-item
                v-for="n in length"
                :key="`card-${n}`"
              >
                <v-card
                  color="white"
                  flat
                >
                <v-layout
                    align-center
                    justify-center
                    fill-height
                    tag="v-card-text"
                  >
                    <img 
                      height="350"
                      :src="`/01/snaige_f_355-${n}.jpg`">
                    </img>
                  </v-layout>
                </v-card>
              </v-window-item>
            </v-window>
            <v-card-actions class="justify-space-between">
              <v-btn
                flat
                @click="prev"
              >
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-item-group
                v-if="$vuetify.breakpoint.smAndUp"
                v-model="onboarding"
                class="text-xs-center"
                mandatory
              >
                <v-item
                  v-for="n in length"
                  :key="`btn-${n}`"
                >
                  <v-div
                    slot-scope="{ active, toggle }"
                    :input-value="active"
                    
                    @click="toggle"
                  >
                    <img 
                      width="40px"
                      :src="`/01/snaige_f_355-${n}.jpg`">
                    </img>
                  </v-div>
                </v-item>
              </v-item-group>
              <v-item-group
                v-if="$vuetify.breakpoint.xsOnly"
                class="text-xs-center"
                mandatory
              >
                <v-item
                  v-for="n in length"
                  :key="`btn-${n}`"
                >
                  <v-div class="display-1">.</v-div>
                </v-item>
              </v-item-group>
              <v-btn
                flat
                @click="next"
              >
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-actions>
         
        </v-card>
      </v-flex>
      <v-divider vertical />
      <v-flex
        xs12
        sm12
        md6
        lg6
        xl6
        >
        <v-card
          flat
        >
          <v-card-title>
            <v-layout column>
              <v-flex>
                <h3 class="title font-weight-light black--text mb-2">{{ product.name }}</h3>
              </v-flex>
              <v-flex >
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
          <v-divider></v-divider>
            <v-card-text>
            
            <v-tabs
              v-model="active"
              fixed-tabs
              :icons-and-text="$vuetify.breakpoint.smAndUp"
              slider-color="primary"
            >
              <v-tab >
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
      ProductPayment,

    },

    computed: {
      binding () {
        const binding = {}

        if (this.$vuetify.breakpoint.xsOnly) binding.column = true

        return binding
      }
    },

    data: () => ({
      active: null,
      copied: false,
      product: [],
      length: 6,
      onboarding: 0
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
      },
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      }
    }
  }
</script>