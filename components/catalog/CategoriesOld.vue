<template>
  <v-list dense>
          <v-list-group
            v-for="category in categories"
            :key="category.slug"
            no-action
            active-class="accent--text"
           >
            <template v-slot:activator>
              <v-list-tile >
                <v-list-tile-content>
                  <v-list-tile-title>{{ category.name }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile
              v-for="child in category.children"
              :key="child.slug"
              @click="active = child.name"
              :to="localePath({ name: 'categories-slug', params: { slug: child.slug } })"
              nuxt
            >
              <v-list-tile-content>
                <v-list-tile-title :class="active === child.name ? 'caption accent--text font-weight-medium' : 'caption black--text font-weight-medium'">{{ child.name }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
  </v-list>
 </template>

<script>
  import { mapGetters } from 'vuex'
  
  export default {
    computed: {
      ...mapGetters({
        categories: 'categories'
      })
    }, 

    data() {
      return {
        active: null,
        categoriesTest: null,
      }
    },
  }
</script>

