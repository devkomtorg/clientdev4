<template>
  <v-navigation-drawer
    v-model="accountDrawer"
    clipped
    fixed
    left
    width="270"
    app
  >
    
    <v-list dense>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ $auth.user.name }}: администратор</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile
                v-for="item in items"
                :key="item.name"
                :to="item.to"
                active-class="accent--text"
              >
                <v-list-tile-action>
                  <v-icon v-if="item.icon" color="blue">{{ item.icon }}</v-icon>
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
    
    props: ['accountDrawer','items'],

     data() {
      return {
        
        active: null,
      }
    }
    
  }

</script>

