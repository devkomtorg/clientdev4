<template>
  <v-list dense>
    <v-toolbar flat :color="$vuetify.theme.bgcolor">
      <v-spacer />
      
        <v-btn
        v-if="$vuetify.breakpoint.xsOnly"
        @click.stop="goBack()"
        flat
        icon
      >
        <v-icon>close</v-icon>
      </v-btn>
     
      
      
    </v-toolbar>
    <v-list-tile 
      v-for="category in categories"
      :key="category.slug"
      :to="(categoryBySlug(category.slug)[0].children.length) ? localePath({ name: 'subcategories-slug', params: { slug: category.slug } }) : localePath({ name: 'subcategories-slug', params: { slug: category.slug } })"
      nuxt
      @click="setCurrentCategory(category.slug)"
      active-class="blue--text"
    >
      
      <v-list-tile-content>
                  
                  <v-list-tile-title>{{ category.name }}</v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action>
              <v-icon>
                navigate_next
              </v-icon>
      </v-list-tile-action>
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
        
      })
      
    }, 

    data() {
      return {
        active: null,
        
      }
    },

    methods: {
      categoryBySlug: function (slug) {
        return this.categories.filter(x => x.slug === slug)
      } ,
      setCurrentCategory (slug) {
        return this.$store.dispatch('setCurrentCategory', slug)
      },
      goBack() {
        return this.$router.back()
      }

    }



  }
</script>

