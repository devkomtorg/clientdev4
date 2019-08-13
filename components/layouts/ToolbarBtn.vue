<template>
   <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn
			flat
	        small
	        :to="localePath(path)"
	        :color="$vuetify.theme.primary"
	        v-on="on"
	    >
	        {{ $t(path) }}
	    </v-btn>
      </template>
      <span>{{ $t(tooltip) }}</span>
    </v-tooltip>
	
</template>

<script>

	export default {

	    props: {

	    	path: String,
	    	tooltip: String
	            
	    }
	}
</script>