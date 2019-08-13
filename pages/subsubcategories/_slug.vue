<template>
	<v-list dense>
		{{ currentCategory }}
		<v-list-tile 
      :to="localePath({ name: 'products-slug', params: { slug: categoryById(currentSlug)[0].slug } })"
      nuxt
    >
      <v-list-tile-content>
        <v-list-tile-title class="caption black--text font-weight-medium">{{ categoryById(currentSlug)[0].name }}</v-list-tile-title>
        </v-list-tile-content>
		 
		</v-list-tile>
		<v-list-tile
		      v-if="categoryById(currentSlug)[0].children.length"
              v-for="child in categoryById(currentSlug)[0].children"
              :key="child.slug"
              :to="localePath({ name: 'categories-slug', params: { slug: child.slug } })"
              nuxt
            >
              <v-list-tile-content>
                <v-list-tile-title class="caption black--text font-weight-medium">{{ child.name }}</v-list-tile-title>
              </v-list-tile-content>
        </v-list-tile>
	</v-list>
</template>
<script>
  import { mapGetters } from 'vuex'
  
  export default {
    computed: {
      ...mapGetters({
        categories: 'categories',
        count: 'categoriesCount',
        currentCategory: 'currentCategory'
        
      })
      
    }, 

    async asyncData ({ params }) {
	    const currentSlug = params.slug // When calling /abc the slug will be "abc"
	    return { currentSlug }
	},

    data() {
      return {
        active: null,
      }
    },

    methods: {
      categoryById: function (slug) {
        let hightCategory = this.categories.filter(x => x.slug == this.currentCategory)
        return hightCategory[0].children.filter(x => x.slug === slug)
      } 
    }



  }
</script>