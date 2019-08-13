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
          v-for="(dashboardUsersItem, i) in dashboardUsersItems"
          :key="i"
        >
          <div 
            slot-scope="{ active, toggle }" 
            :color="active ? '#000' : ''"
            :input-value="active"
            @click="toggle"
          >
            <v-list>
              
                <v-list-tile-title :class="active ? 'body-1 black--text font-weight-medium title' : 'body-1 black--text font-weight-light title'">
                  {{ dashboardUsersItem.title }}
                  <v-icon 
                      class="font-weight-bold"
                      small
                      v-if="active">
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
            	<users/>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item>
          <v-card flat>
            <v-card-text>
              <users/>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item>
          <v-card flat>
            <v-card-text>
              <users/>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item>
          <v-card flat>
            <v-card-text>
              <users/>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item>
          <v-card flat>
            <v-card-text>
              <users/>
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
  
  import users from '~/components/dashboard/users'
  export default {

  	components: {
  	
  		users
  	},

    layout: 'dashboardLayout',

    data: () => ({
      dashboardUsersItems: [
      	  { icon: '', title: 'Оптовики', to: '' },
          { icon: '', title: 'Постоянные покупатели', to: '' },
          { icon: '', title: 'Сотрудники', to: '' },
          { icon: '', title: 'Администраторы', to: '' },
          { icon: '', title: 'Все', to: '' }
      ],
      window: 0
    })
  }
</script>
