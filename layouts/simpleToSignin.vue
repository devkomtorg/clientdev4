<template>
  <v-app>
    <v-toolbar
      dense
      app
      flat
      :color="$vuetify.theme.bgcolor"
    >
      <v-btn 
        v-if="$vuetify.breakpoint.xsOnly"
        icon
        :to="localePath('signin')"
      >
        <v-icon>arrow_back</v-icon>
      </v-btn>   
      <v-toolbar-title>
      <v-spacer />
      <v-icon  :color="$vuetify.theme.accent">
        panorama_fish_eye
      </v-icon>
      <nuxt-link :to="localePath('index')" class="no-decoration">
        <span class="grey--text text--darken-4 font-weight-bold">
          КОМТОРГ
        </span>
      </nuxt-link>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items 
      v-for="locale in $i18n.locales"
      :key="locale.code"
    >
      <v-btn
        icon
        flat
        small
        :class="locale.code === $i18n.locale ? 'black--text font-weight-bold ' : 'light-green--text font-weight-bold'"
        :to="switchLocalePath(locale.code)"
      >
        {{ locale.code }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <!-- -->  
  <v-content class="grey lighten-5">
    <v-divider />
    <nuxt />
  </v-content>
  </v-app>
</template>

<style>
  
  .v-navigation-drawer__border {
    width: 1px;
  }

  .v-toolbar__border {
    width: 1px;
  }

  .no-decoration {
    text-decoration: none;
    color: black;
  }
   
</style>