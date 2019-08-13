<template>
  <div>
    <v-toolbar flat v-if="$vuetify.breakpoint.xsOnly" :color="$vuetify.theme.bgcolor">
          <v-btn icon :to="localePath('mcatalog')">
            <v-icon>arrow_back</v-icon>
          </v-btn>
          <nuxt-link :to="localePath('mcatalog')" class="no-decoration">
            <v-toolbar-title class="font-weight-regular">
              {{ categoryBySlug(currentSlug)[0].name }}
            </v-toolbar-title>
          </nuxt-link>
          <v-spacer></v-spacer>
      
    </v-toolbar>
    <v-divider v-if="$vuetify.breakpoint.xsOnly" />
      <!--<v-breadcrumbs :items="breadcrumsItems">
        <template v-slot:divider>
          <v-icon>chevron_right</v-icon>
        </template>
      </v-breadcrumbs>-->
    <v-container fluid grid-list-xl>
          <v-layout row wrap >
            <v-flex
              v-for="child in categoryBySlug(currentSlug)[0].children"
              :key="child.slug"
              xs4 xl3 md3 sm4
            >
              <v-container fluid grid-list-xs>
                <v-layout column wrap >
                  <nuxt-link :to="localePath({ name: 'categories-slug', params: { slug: child.slug } })" class="no-decoration">
                    <v-flex align-self-center>
                      <v-img  :src="`/subcategoriesIcons/${child.slug}.png`" width="64px" />
                    </v-flex>
                    <v-flex align-self-center>
                      {{ child.name }}
                    </v-flex>
                  </nuxt-link>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </v-container>
    
  </div>
</template>
<script>

  import { mapGetters } from 'vuex'
  import Breadcrums from '~/components/categories/Breadcrums'

  export default {
    components: {
      Breadcrums
    },
  
    computed: {
      ...mapGetters({
        categories: 'categories',
        count: 'categoriesCount',

        
      }),
      breadcrumsItems() {
        const text1 = this.categoryBySlug(this.currentSlug)[0].name
        
        return [
          {
            text: text1,
            disabled: true,
           
            
          },
          
        ]
      } 
      
    }, 

    async asyncData ({ params }) {
	    const currentSlug = params.slug // When calling /abc the slug will be "abc"
	    return { currentSlug }
	},

    data() {
      return {
        active: null,
        test: 'st'
      }
    },

    methods: {
      categoryBySlug: function (slug) {
        return this.categories.filter(x => x.slug === slug)
      },
    }
  }
</script>