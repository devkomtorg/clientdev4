<template>
  <v-tabs
    dark
    :color="$vuetify.theme.accent"
    show-arrows
   >
    <v-tabs-slider color="yellow"></v-tabs-slider>
    <v-tab
      v-for="(tabitem, i) in tabitems"
      :key="i"
      :href="'#tab-' + i"
    >
      <v-icon large>{{ tabitem.icon }}</v-icon>
    </v-tab>
    <v-tabs-items v-if="$vuetify.breakpoint.xsOnly">
      <v-tab-item
        v-for="(item, i) in tabitems"
        :key="i"
        :value="'tab-' + i"
      >
          
          <v-list class="grey lighten-5">
              <v-subheader>
                <v-btn 
                    v-if="$vuetify.breakpoint.xsOnly"
                    icon
                    :to="localePath('')"
                  >
                    <v-icon>arrow_back</v-icon>
                  </v-btn> 
                <div class="font-weight-light grey--text title mb-2">
                  {{ item.buttontext }}
                </div>
              </v-subheader>
              <v-list-tile
                v-for="item in cutitems"
                :key="item.buttontext"
                @click=""
              >
                <v-list-tile-action>
                  <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title v-text="item.buttontext"></v-list-tile-title>
                </v-list-tile-content>

              </v-list-tile>
              <v-list-group
                no-action
                v-model="active"
                
              >
                <template v-slot:activator>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>... показать все</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>

                <v-list-tile
                  v-for="subItem in tabitems"
                  :key="subItem.buttontext"
                  @click=""
                >
                  <v-list-tile-content>
                    <v-list-tile-title>{{ subItem.buttontext }}</v-list-tile-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                    <v-icon>{{ subItem.icon }}</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list-group>
            </v-list>
      </v-tab-item>
    </v-tabs-items>

    
  </v-tabs>
</template>

<script>
  export default {
    data () {
      return {
        active: false,
        tabitems: [
          { icon: "list", buttontext: "Все отделы"},
          { icon: "tv", buttontext: "Телевизоры"},
          { icon: "laptop_windows", buttontext: "Ноутбуки"},
          { icon: "build", buttontext: "Инструмент"},
          { icon: "toys", buttontext: "Игрушки"},
          { icon: "fitness_center", buttontext: "Товары для спорта"},
          { icon: "filter_vintage", buttontext: "Аксесуары"},
          { icon: "list", buttontext: "Все отделы"},
          { icon: "tv", buttontext: "Телевизоры"},
          { icon: "laptop_windows", buttontext: "Ноутбуки"},
          { icon: "build", buttontext: "Инструмент"},
          { icon: "toys", buttontext: "Игрушки"},
          { icon: "fitness_center", buttontext: "Товары для спорта"},
          { icon: "filter_vintage", buttontext: "Аксесуары"},
          { icon: "list", buttontext: "Все отделы"},
          { icon: "tv", buttontext: "Телевизоры"},
          { icon: "laptop_windows", buttontext: "Ноутбуки"},
          { icon: "build", buttontext: "Инструмент"},
          { icon: "toys", buttontext: "Игрушки"},
          { icon: "fitness_center", buttontext: "Товары для спорта"},
          { icon: "filter_vintage", buttontext: "Аксесуары"},
        ], 
        cutitems: [
          { icon: "list", buttontext: "Все отделы"},
          { icon: "tv", buttontext: "Телевизоры"},
          { icon: "laptop_windows", buttontext: "Ноутбуки"},
          { icon: "build", buttontext: "Инструмент"},
          
      ], 
      }
    }
  }
</script>