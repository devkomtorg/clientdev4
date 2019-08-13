<template>
  <div>
  <v-card
      
      
      flat
      tile
    >
      <v-window v-model="onboarding">
        <v-window-item >
          <v-card
            height="350"
            flat
          >
            <v-layout
              align-center
              justify-center
              fill-height
              tag="v-card-text"
            >
              <img 
                height="300"
                src="/01/snaige_f_355-1704aa-00snq0_images_2771354415.jpg">
              </img>
            </v-layout>
          </v-card>
        </v-window-item>
        <v-window-item >
          <v-card
            height="350"
            flat
          >
            <v-layout
              align-center
              justify-center
              fill-height
              tag="v-card-text"
            >
              <img 
                height="300"
                src="/01/snaige_f_355-1704aa-00snq0_images_2771355287.jpg">
              </img>
            </v-layout>
          </v-card>
        </v-window-item>
        <v-window-item >
          <v-card
            height="350"
            flat
          >
            <v-layout
              align-center
              justify-center
              fill-height
              tag="v-card-text"
            >
              <img 
                height="300"
                src="/01/snaige_f_355-1704aa-00snq0_images_2771356143.jpg">
              </img>
            </v-layout>
          </v-card>
        </v-window-item>
        <v-window-item >
          <v-card
            height="350"
            flat
          >
            <v-layout
              align-center
              justify-center
              fill-height
              tag="v-card-text"
            >
              <img 
                height="300"
                src="/01/snaige_f_355-1704aa-00snq0_images_2771367495.jpg">
              </img>
            </v-layout>
          </v-card>
        </v-window-item>
      </v-window>
      <v-divider></v-divider>
      <v-card-actions class="justify-space-between">
        <v-btn
          flat
          @click="prev"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-item-group
          v-if="$vuetify.breakpoint.smAndUp"
          v-model="onboarding"
          class="text-xs-center"
          mandatory
        >
          <v-item>
            <v-div
              slot-scope="{ active, toggle }"
              :input-value="active"
              
              @click="toggle"
            >
              <img 
                height="100"
                src="/01/snaige_f_355-1704aa-00snq0_images_2771354415.jpg">
              </img>
            </v-div>
          </v-item>
          <v-item>
            <v-div
              slot-scope="{ active, toggle }"
              :input-value="active"
              
              @click="toggle"
            >
              <img 
                height="100"
                src="/01/snaige_f_355-1704aa-00snq0_images_2771355287.jpg">
              </img>
            </v-div>
          </v-item>
          <v-item>
            <v-div
              slot-scope="{ active, toggle }"
              :input-value="active"
              
              @click="toggle"
            >
              <img 
                height="100"
                src="/01/snaige_f_355-1704aa-00snq0_images_2771356143.jpg">
              </img>
            </v-div>
          </v-item>
          <v-item>
            <v-div
              slot-scope="{ active, toggle }"
              :input-value="active"
              
              @click="toggle"
            >
              <img 
                height="100"
                src="/01/snaige_f_355-1704aa-00snq0_images_2771367495.jpg">
              </img>
            </v-div>
          </v-item>
        </v-item-group>
        <v-btn
          flat
          @click="next"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
	
  </div>
</template>
<script>
	 export default {
    data: () => ({
      length: 3,
      onboarding: 0
    }),

    methods: {
      next () {
        this.onboarding = this.onboarding + 1 === length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      }
    }
  }
 
</script>