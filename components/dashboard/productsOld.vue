<template>
  <v-card
    flat
    class="mx-auto hide-overflow"
    style="max-width: 400px;"
  >
    <v-layout>
      <v-flex xs6 d-flex>
        <v-img :src="require('~/static/01/snaige_f_355-5.jpg')">
        </v-img>
      </v-flex>
      <v-flex xs6>
        <v-container
          grid-list-md
          pa-0
          pl-2
          style="margin: -4px 0"
        >
          <v-layout wrap>
            <v-flex xs7 d-flex>
              <v-img :src="require('~/static/01/snaige_f_355-1.jpg')">
              </v-img>
            </v-flex>
            <v-flex xs5 d-flex>
              <v-img :src="require('~/static/01/snaige_f_355-2.jpg')">
              </v-img>
            </v-flex>
            <v-flex xs5 d-flex>
              <v-img :src="require('~/static/01/snaige_f_355-3.jpg')">
              </v-img>
            </v-flex>
            <v-flex xs7 d-flex>
              <v-img :src="require('~/static/01/snaige_f_355-4.jpg')">
              </v-img>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <v-card-title class="align-start">
      <div>
        <span class="headline">Морозильная камера Snaige F27SM-T10001</span>
        <div class="grey--text font-weight-light">Video game</div>
      </div>
      <v-spacer></v-spacer>
      <v-dialog
        v-model="dialog"
        width="400"
      >
        <template v-slot:activator="{ on }">
          <v-icon v-on="on">
            mdi-share-variant
          </v-icon>
        </template>
        <v-card>
          <v-card-title>
            <span class="title font-weight-bold">Share</span>
            <v-spacer></v-spacer>
            <v-btn
              class="mx-0"
              icon
              @click="dialog = false"
            >
              <v-icon>mdi-close-circle-outline</v-icon>
            </v-btn>
          </v-card-title>
          <v-list>
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon color="indigo">mdi-facebook-box</v-icon>
              </v-list-tile-action>
              <v-card-title>Facebook</v-card-title>
            </v-list-tile>
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon color="cyan">mdi-twitter-box</v-icon>
              </v-list-tile-action>
              <v-card-title>Twitter</v-card-title>
            </v-list-tile>
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon>mdi-email</v-icon>
              </v-list-tile-action>
              <v-card-title>Email</v-card-title>
            </v-list-tile>
          </v-list>
          <v-text-field
            ref="link"
            :label="copied ? 'Link copied' : 'Click to copy link'"
            class="pa-3"
            readonly
            value="https://g.co/kgs/nkrK43"
            @click="copy"
          ></v-text-field>
        </v-card>
      </v-dialog>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-actions>
      <span class="pl-2 grey--text text--darken-2 font-weight-light caption">16,544 reviews</span>
      <v-spacer></v-spacer>
      <v-rating
        v-model="rating"
        length="10"
        readonly
      >
        <template v-slot:item="props">
          <v-icon
            color="purple darken-4"
            
          ></v-icon>
        </template>
      </v-rating>
    </v-card-actions>
    <div class="pa-3 pt-0 caption">
      <em>Portions of the materials used are trademarks and/or copyrighted works of Epic Games, Inc. All rights reserved by Epic. This material is not official and is not endorsed by Epic.</em>
    </div>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      copied: false,
      dialog: false,
      rating: 10
    }),

    methods: {
      copy () {
        const markup = this.$refs.link
        markup.focus()
        document.execCommand('selectAll', false, null)
        this.copied = document.execCommand('copy')
      }
    }
  }
</script>