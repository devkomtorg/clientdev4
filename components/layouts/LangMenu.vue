<template>
  <div class="text-xs-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="true"
      open-on-hover
      :nudge-width="200"
      offset-y
      bottom
    >
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          icon
          class="grey--text text--darken-1"
        >
          {{ $i18n.locale }}
        </v-btn>
      </template>
      <v-card >
        <v-list class="grey lighten-4">
          <v-list-tile 
              v-for="locale in $i18n.locales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
            >
              <v-list-tile-action :class="locale.code === $i18n.locale ? 'blue--text' : 'black--text'">
                {{ locale.code }}
              </v-list-tile-action>
              <v-list-tile-content>
                    <v-list-tile-title v-text="$t(locale.code)" />
              </v-list-tile-content>
            </v-list-tile>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
  export default {
    data: () => ({
      menu: false,
    })
  }
</script>