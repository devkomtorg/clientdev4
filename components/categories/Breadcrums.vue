<template>
  <div>
      <v-breadcrumbs :items="breadcrumsItems">
        <template v-slot:divider>
          <v-icon>chevron_right</v-icon>
        </template>
      </v-breadcrumbs>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: ['currentSlug'],

    computed: {
      ...mapGetters({
        categories: 'categories',
        currentCategory: 'currentCategory'
      }),
      binding () {
        const binding = {}

        if (this.$vuetify.breakpoint.xsOnly) binding.column = true

        return binding
      },
      breadcrumsItems() {
        const text1 = this.categoryBySlug(this.currentCategory)[0].name
        const href1 = '/subcategories/'+this.currentCategory
        const text2 = this.subcategoryBySlug()[0].name
        return [
          {
            text: text1,
            disabled: false,
            href: href1
            
          },
          {
            text: text2,
            disabled: true,
            href: ''
          }
        ]
      } 
    },

    
    data: () => ({
      
    }),

    
  methods: {
      categoryBySlug: function (slug) {
        return this.categories.filter(x => x.slug === slug)
      },
      subcategoryBySlug: function () {
        let hightCategory = this.categories.filter(x => x.slug == this.currentCategory)
        return hightCategory[0].children.filter(res => res.slug == this.currentSlug)
      } 
    }
  }
</script>