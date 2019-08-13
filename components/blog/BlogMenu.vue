<template>
  <v-navigation-drawer
    v-model="blogDrawer"
    clipped
    fixed
    left
    app
    width="270"
  >
    <v-list dense>
              <v-list-tile
                v-for="item in items"
                :key="item.name"
                :to="item.to"
                active-class="accent--text"
              >
                <v-list-tile-action>
                  <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    
    props: ['blogDrawer','items'],

    
  }
</script>

<style>
.no-decoration {
  text-decoration: none;
}
</style>
