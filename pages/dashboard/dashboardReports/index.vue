<template>
<v-div>
  <v-layout 
    align-start 
    justify-start
  >
    <v-flex lg3>
      <v-container>
        <v-layout 
          align-start 
          justify-start
        >
          <v-item-group
            v-model="window"
            class="shrink mr-4"
            tag="v-flex"
          >
            <v-item 
              v-for="(dashboardReportsItem, i) in dashboardReportsItems"
              :key="i"
            >
              <div 
                slot-scope="{ active, toggle }" 
                :color="active ? '#000' : ''"
                :input-value="active"
                @click="toggle"
              >
                <v-list>
                  <v-list-tile-title :class="active ? 'body-1 black--text font-weight-medium title' : 'body-1 black--text font-weight-light title'"
                  >
                    {{ dashboardReportsItem.title }}
                    <v-icon 
                      class="font-weight-bold"
                      small
                      v-if="active"
                    >
                      keyboard_arrow_right
                    </v-icon>
                  </v-list-tile-title>
                </v-list>
              </div>
            </v-item>
          </v-item-group>
     </v-layout>
    </v-container>
    </v-flex>
    <v-flex lg9>
      <v-container>
        <v-layout 
          align-start 
          justify-start
        >
          <v-window
            v-model="window"
            vertical
          >
            <v-window-item>
              <v-card flat>
                <v-card-text>
                	<reports/>
                </v-card-text>
              </v-card>
            </v-window-item>
            <v-window-item>
              <v-card flat>
                <v-card-text>
                	<reports/>
                </v-card-text>
              </v-card>
            </v-window-item>
            <v-window-item>
              <v-card flat>
                <v-card-text>
                	<reports/>
                </v-card-text>
              </v-card>
            </v-window-item>
           </v-window>
      </v-layout>
     </v-container>
    </v-flex>
  </v-layout>
</v-div>

</template>

<script>
  
  import reports from '~/components/dashboard/reports'
  
  export default {

  	components: {
  		
  		reports

  	},

    layout: 'dashboardLayout',

    data: () => ({
      dashboardReportsItems: [
      	  { icon: '', title: 'Продано', to: '' },
          { icon: '', title: 'Заказы', to: '' },
          { icon: '', title: 'Асортимент', to: '' },
          
      ],
      window: 0
    })
  }
</script>
