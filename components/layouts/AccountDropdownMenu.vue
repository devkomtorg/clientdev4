<template>
  <div class="text-xs-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="true"
      open-on-hover
      :nudge-width="250"
      offset-y
      bottom left
    >
      <template v-slot:activator="{ on }">
        <v-btn
          flat
          v-on="on"
          icon
          >
          <v-icon>
            person
          </v-icon>
      </v-btn>
      </template>
      <v-card >
        <v-list
          dense
          class="grey lighten-4"
          two-line
        >
          <v-list-tile :to="localePath('account')">
            <v-list-tile-action>
                <v-icon>fingerprint</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ $t('my_account') }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider />
          <v-list-tile>
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                    {{ $auth.user.name }}:admin
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
                  <v-btn
                    class="light-green--text font-weight-light"
                    flat
                    small
                    @click="$auth.logout()"
                  >
                    {{ $t('logout') }}
                  </v-btn>
            </v-list-tile-action>
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