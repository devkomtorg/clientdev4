<template>
  <v-navigation-drawer
    v-model="dashboardDrawer"
    clipped
    fixed
    left
    width="270"
    app
  >
    <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>{{ $auth.user.name }}: администратор</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
    </v-toolbar>
    <v-list dense>
          <v-list-group
            v-for="item in items"
            :key="item.name"
            :prepend-icon="item.icon"
            no-action
            active-class="accent--text"
          >
            <template v-slot:activator>
              <v-list-tile >
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile
              v-for="subItem in item.children"
              :key="subItem.name"
              @click="active = subItem.id"
              :to="subItem.to"
              nuxt
              
            >
              <v-list-tile-content>
                <v-list-tile-title :class="active === subItem.id ? 'body-1 accent--text font-weight-medium title' : 'body-1 black--text font-weight-regular title'">{{ subItem.name}}</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
               
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    
    props: ['dashboardDrawer','items'],

     data() {
      return {
        
        active: null,
      }
    }
    
  }

</script>

