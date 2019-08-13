<template>
	<v-list>
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
            </v-list>
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