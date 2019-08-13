<template>
  <v-treeview
            :items="items"
            open-on-click
            expand-icon="mdi-chevron-down"
            hoverable
          >
            <template v-slot:label="{ item, active }">
              <v-list-tile v-if="item.children"
              >
                <v-list-tile-content 
                  class="body-1 grey--text text--darken-3 font-weight-regular"
                >
                  <v-list-tile-title >{{ item.name }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <nuxt-link
                v-else
                :to="localePath({ name: 'categories-slug', params: { slug: item.slug } })"
                class="no-decoration body-1 grey--text text--darken-3 font-weight-regular"
              >
                {{ item.name }}
              </nuxt-link>
            </template>
          </v-treeview>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
     
    computed: {
      ...mapGetters({
        items: 'categories'
      })
    }, 
    
    
  }
</script>

