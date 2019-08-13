<template>
    
    <v-layout column>
        <v-flex>
          <!--<v-btn v-if="$vuetify.breakpoint.smAndDown" block color="light-green" dark>{{ $t('catalog') }}</v-btn>-->
          <v-tabs 
            v-if="$vuetify.breakpoint.smAndDown"
            dark
                    centered
                    color="grey darken-3"
                    v-model="active"
                    fixed-tabs
                    :slider-color="$vuetify.theme.accent"
                  >
                    <v-tab>
                      <div>  
                        {{ $t('sales') }}
                      </div>
                    </v-tab>
                    <v-tab>
                      <div> 
                        {{ $t('discounts') }}
                      </div>
                    </v-tab>
          </v-tabs>
          <template
            v-if="$vuetify.breakpoint.mdAndUp"
          >
            <v-container  fluid>
              <div class="font-weight-light grey--text title mb-2">{{ $t('sales') }}</div>
            </v-container>
            <v-container grid-list-md fluid >
              <v-layout row >
                        <v-flex
                          lg1
                          md1
                          sm1
                          d-flex
                          align-self-center
                        > 
                          <v-btn
                            flat
                            @click="prev"
                          >
                            <v-icon large color="grey">mdi-chevron-left</v-icon>
                          </v-btn>
                        </v-flex>
                        <v-flex xs10>
                            <v-window v-model="onboarding">
                              <v-window-item
                                v-for="i in length"
                                :key="`item-${i}`"
                                lazy
                              >
                                <v-layout>
                                  <v-flex
                                    v-for="n in 5"
                                    :key="n"
                                  > 
                                    <v-hover>
                                      <v-card
                                        flat
                                        slot-scope="{ hover }"
                                        :class="`elevation-${hover ? 12 : 2}`"
                                        
                                        color="grey lighten-4"
                                        max-width="600"
                                      >
                                        <v-img
                                          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
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
                                        <v-card-text
                                          class="pt-4"
                                          style="position: relative;"
                                        >
                                          <div class="font-weight-light grey--text subheading mb-2">For the perfect meal</div>
                                        </v-card-text>
                                      </v-card>
                                    </v-hover>
                                  </v-flex>
                                </v-layout>
                              </v-window-item>
                            </v-window>
                        </v-flex>
                        <v-flex
                          lg1
                          md1
                          sm1
                          d-flex
                          align-self-center
                        > 
                          <v-btn
                            flat
                            @click="next"
                          >
                            <v-icon large color="grey">mdi-chevron-right</v-icon>
                          </v-btn>
                        </v-flex>
              </v-layout>
            </v-container>
            <v-divider />
            <v-container  fluid>
              <div class="font-weight-light grey--text title mb-2">{{ $t('discounts') }}</div>
            </v-container>
            <v-container grid-list-md fluid >
              <v-layout row >
                        <v-flex
                          lg1
                          md1
                          sm1
                          d-flex
                          align-self-center
                        > 
                          <v-btn
                            flat
                            @click="prev"
                          >
                            <v-icon large color="grey">mdi-chevron-left</v-icon>
                          </v-btn>
                        </v-flex>
                        <v-flex xs10>
                            <v-window v-model="onboarding">
                              <v-window-item
                                v-for="i in length"
                                :key="`item-${i}`"
                                lazy
                              >
                                <v-layout>
                                  <v-flex
                                    v-for="n in 5"
                                    :key="n"
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
                                          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
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
                                        <v-card-text
                                          class="pt-4"
                                          style="position: relative;"
                                        >
                                          <div class="font-weight-light grey--text subheading mb-2">For the perfect meal</div>
                                        </v-card-text>
                                      </v-card>
                                    </v-hover>
                                  </v-flex>
                                </v-layout>
                              </v-window-item>
                            </v-window>
                        </v-flex>
                        <v-flex
                          lg1
                          md1
                          sm1
                          d-flex
                          align-self-center
                        > 
                          <v-btn
                            flat
                            @click="next"
                          >
                            <v-icon large color="grey">mdi-chevron-right</v-icon>
                          </v-btn>
                        </v-flex>
              </v-layout>
            </v-container>
            
            
          </template>
        </v-flex>
        <v-divider v-if="$vuetify.breakpoint.smAndDown" />
        <v-flex>
            <v-tabs-items 
              v-if="$vuetify.breakpoint.smAndDown"
              v-model="active"
            >
              <v-tab-item>
                <v-layout wrap justify-center row fill-height>
                    <v-flex
                      v-for="n in 5"
                      :key="n"
                    > 
                                    <v-hover>
                                      <v-card
                                        flat
                                        slot-scope="{ hover }"
                                        :class="`elevation-${hover ? 12 : 2}`"
                                        
                                        color="grey lighten-4"
                                        max-width="600"
                                      >
                                        <v-img
                                          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
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
                                        <v-card-text
                                          class="pt-4"
                                          style="position: relative;"
                                        >
                                          <div class="font-weight-light grey--text subheading mb-2">For the perfect meal</div>
                                        </v-card-text>
                                      </v-card>
                                    </v-hover>
                    </v-flex>
                  </v-layout>
              </v-tab-item>
              <v-tab-item>
                  <v-layout wrap justify-center row fill-height>
                    <v-flex
                      v-for="n in 5"
                      :key="n"
                    > 
                                    <v-hover>
                                      <v-card
                                        flat
                                        slot-scope="{ hover }"
                                        :class="`elevation-${hover ? 12 : 2}`"
                                        
                                        color="grey lighten-4"
                                        max-width="600"
                                      >
                                        <v-img
                                          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
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
                                        <v-card-text
                                          class="pt-4"
                                          style="position: relative;"
                                        >
                                          <div class="font-weight-light grey--text subheading mb-2">For the perfect meal</div>
                                        </v-card-text>
                                      </v-card>
                                    </v-hover>
                    </v-flex>
                  </v-layout>
              </v-tab-item>
            </v-tabs-items>
        </v-flex>
        <v-flex>
          <v-divider />
          <v-layout row >
          <v-flex xs3 >
            <v-card dark tile flat color="grey lighten-3">
              <v-card-text></v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs3 >
            <v-card tile flat color="grey lighten-3">
              <v-card-text></v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs3 >
            <v-card dark tile flat color="grey lighten-3">
              <v-card-text></v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs3 >
            <v-card dark tile flat color="grey lighten-3">
              <v-card-text></v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
</template>

<script>
  import PostCard from '~/components/post/PostCard'

  export default {
    components: {
      PostCard
    },

    data: () => ({
      dialog: true,
      active: null,
      length: 3,
      onboarding: 0,
      posts: [
        {slug: "post1", name: "post1"},
        {slug: "post2", name: "post2"},
        {slug: "post3", name: "post3"},
        {slug: "post4", name: "post4"},
        {slug: "post5", name: "post5"}
      ]
    }),

    methods: {
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