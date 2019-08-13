<template>
  <div>
    <v-layout v-if="$vuetify.breakpoint.smAndUp">
     
    <v-card color="secondary">
      <v-card-text>
        
          
             
            <accountProfile/>
              
          
      </v-card-text>
    </v-card>
  </v-layout>
  </div>
</template>

<script>
  import accountProfile from '~/components/account/accountProfile.vue'
 
  
  export default {
    
    layout: 'accountLayout', 

    components: {
      accountProfile,
     
    },

   
  }
</script>
