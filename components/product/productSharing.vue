<template>
	<v-dialog
	                      v-model="dialog"
	                      width="400"
	                    >
	                      <v-btn
	                        left
	                        flat
	                        class="primary--text"
	                        slot="activator"
	                      >
	                        <v-icon  color="primary">
	                          mdi-share-variant
	                        </v-icon>
	                      </v-btn>
	                      <v-card>
	                        <v-card-title>
	                          <span class="title font-weight-bold">
	                            Share
	                          </span>
	                          <v-spacer></v-spacer>
	                          <v-btn
	                            large
	                            class="mx-0"
	                            icon
	                            @click="dialog = false"
	                          >
	                            <v-icon>
	                              mdi-close-circle-outline
	                            </v-icon>
	                          </v-btn>
	                        </v-card-title>
	                        <v-list>
	                          <v-list-tile @click="">
	                            <v-list-tile-action>
	                              <v-icon color="indigo">
	                                mdi-facebook-box
	                              </v-icon>
	                            </v-list-tile-action>
	                            <v-card-title>
	                              Facebook
	                            </v-card-title>
	                          </v-list-tile>
	                          <v-list-tile @click="">
	                            <v-list-tile-action>
	                              <v-icon color="cyan">
	                                mdi-twitter-box
	                              </v-icon>
	                            </v-list-tile-action>
	                            <v-card-title>
	                              Twitter
	                            </v-card-title>
	                          </v-list-tile>
	                          <v-list-tile @click="">
	                            <v-list-tile-action>
	                              <v-icon>
	                                mdi-email
	                              </v-icon>
	                            </v-list-tile-action>
	                            <v-card-title>
	                              Email
	                            </v-card-title>
	                          </v-list-tile>
	                        </v-list>
	                        <v-text-field
	                          ref="link"
	                          :label="copied ? 'Link copied' : 'Click to copy link'"
	                          class="pa-3"
	                          readonly
	                          value="https://g.co/kgs/nkrK43"
	                          @click="copy"
	                        >
	                        </v-text-field>
	                      </v-card>
	                    </v-dialog>
</template>

<script>
   export default {

    data: () => ({
      copied: false,
      dialog: false,
      rating: 10,
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