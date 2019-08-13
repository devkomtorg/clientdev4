<template>
  <v-select
    v-model="selectedFruits"
    :items="fruits"
    label="Отбор"
    style="max-width: 300px;"
    multiple
  >
    <v-list-tile
      slot="prepend-item"
      ripple
      @click="toggle"
    >
      <v-list-tile-action>
        <v-icon :color="selectedFruits.length > 0 ? 'indigo darken-4' : ''">{{ icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-title>Выбрать все</v-list-tile-title>
    </v-list-tile>
    <v-divider
      slot="prepend-item"
      class="mt-2"
    ></v-divider>
    </v-list-tile>
  </v-select>
</template>
<script>
  export default {
    data: () => ({
      fruits: [
        'Beko',
        'Delfa',
        'Digital',
        'Elenberg',
        'Snaige',
        'Атлант'
      ],
      selectedFruits: []
    }),

    computed: {
      likesAllFruit () {
        return this.selectedFruits.length === this.fruits.length
      },
      likesSomeFruit () {
        return this.selectedFruits.length > 0 && !this.likesAllFruit
      },
      icon () {
        if (this.likesAllFruit) return 'mdi-close-box'
        if (this.likesSomeFruit) return 'mdi-minus-box'
        return 'mdi-checkbox-blank-outline'
      }
    },

    methods: {
      toggle () {
        this.$nextTick(() => {
          if (this.likesAllFruit) {
            this.selectedFruits = []
          } else {
            this.selectedFruits = this.fruits.slice()
          }
        })
      }
    }
  }
</script>