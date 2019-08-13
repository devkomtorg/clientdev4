<template>
  <div>
    <v-layout v-if="$vuetify.breakpoint.smAndUp">
     
        
    <v-card color="secondary">
      <v-card-text>
        
          
            <accountOrders/>
                  
          
      </v-card-text>
    </v-card>
  </v-layout>
  </div>
</template>

<script>
  
  import accountOrders from '~/components/account/accountOrders.vue'
  
  
  export default {
    
    layout: 'accountLayout', 
    
    components: {
     
      accountOrders,
     
    },

     
  }
</script>
