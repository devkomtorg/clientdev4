<template>
	
    <v-item-group 
        
        class="shrink mr-4"
        tag="v-flex"
      >
        <v-item
          v-for="(subItem, i) in activeItem"
          :key="i"
          router
          exact
        >
          <div 
            slot-scope="{ active, toggle }" 
            :color="active ? '#000' : ''"
            :input-value="active"
            @click="toggle"
            :key="i"
           
          >
            <v-list>
              
                <nuxt-link

                :to="subItem.to"
                :key="i"
                :class="active ? 'body-1 black--text font-weight-medium title' : 'body-1 black--text font-weight-light title'"
                class="no-decoration"
                >
                  {{ subItem.title }}
                  <v-icon 
                      class="font-weight-bold"
                      small
                      v-if="active">
                      keyboard_arrow_right
                  </v-icon>
                </nuxt-link>
              
            </v-list>
          </div>
        </v-item>
      </v-item-group>
          
</template>

<script>
  export default {

    props: {
     
    	activeItem: {
    		required: true,
    	}

    },

    
    

  }

</script>

<style>
.no-decoration {
  text-decoration: none;
}
</style>