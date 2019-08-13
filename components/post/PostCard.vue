<template>
	<v-hover>

                <v-card
                  class="mx-auto"
                  slot-scope="{ hover }"
                  :class="`elevation-${hover ? 12 : 2}`"
                > 
                  
                    <v-list two-line>
                      <v-list-tile
                        avatar
                        @click=""
                        :to="localePath({ name: 'posts-slug', params: { slug: post.slug } })"
                      >
                        <v-list-tile-avatar>
                          <v-avatar
                            size="36px"
                          >
                            <img
                              src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                              alt="Avatar"
                            >
                          </v-avatar>
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                          <v-list-tile-title>{{ post.name }}</v-list-tile-title>
                          <v-list-tile-sub-title>Jan 28, 2014</v-list-tile-sub-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                          <v-btn icon ripple>
                            <v-icon color="grey lighten-1">more_vert</v-icon>
                          </v-btn>
                        </v-list-tile-action>
                      </v-list-tile>
                    </v-list>
                  <v-card-text>
                    <v-slide-y-transition>
                      <div 
                        v-if="post.description"
                        :class="hover ? 'font-weight-light caption mb-2' : 'text-truncate font-weight-light caption mb-2'"
                      >
                        {{ post.description }}
                      </div>
                      </v-slide-y-transition>
                      <nuxt-link
                        :to="localePath({ name: 'posts-slug', params: { slug: post.slug } })"
                        class="no-decoration grey--text caption font-weight-light"
                      >
                        Переглянути більше
                      </nuxt-link>
                  </v-card-text>
                  <v-img
                                    :src="`https://picsum.photos/500/300?image=${1 * 5 + 10}`"
                                    :lazy-src="`https://picsum.photos/10/6?image=${1 * 5 + 10}`"
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
                  <v-card-actions>
                    <v-spacer />
                    <v-btn icon>
                      <v-icon>favorite_border</v-icon>
                    </v-btn>
                    <span class="caption">256</span>
                    <v-btn icon>
                      <v-icon color="blue">bookmark_border</v-icon>
                    </v-btn>
                    <span class="caption">15</span>
                    <v-btn icon>
                      <v-icon color="blue">share</v-icon>
                    </v-btn>
                    <span class="caption">45</span>
                  </v-card-actions>
                </v-card>
    </v-hover> 
</template>

<script>
  
  export default {

    props: {
    	post: {
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

