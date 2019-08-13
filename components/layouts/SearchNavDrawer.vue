<template>
	<v-text-field
			clearable
		    :label="$t('search_label')"
		    single-line
		    append-icon="search"
		    style="max-width: 400px"
	>
	</v-text-field>
	<!-- -->
      <v-navigation-drawer
        v-model="rightSearchDrawer"
        fixed
        right
        app
        class="grey lighten-5"
      >
        <v-toolbar flat class="grey lighten-5">
          <v-spacer />
          <v-tooltip bottom>
	        <template v-slot:activator="{ on }">
                  <v-btn
		            flat
		            icon
	                @click.stop="rightSearchDrawer = false" v-if="rightSearchDrawer"
	              >
			          <v-icon v-on="on" class="grey--text">
			            close
			          </v-icon>
		          </v-btn>
		    </template>
		    <span>{{ $t('tooltip_close_search') }}</span>
		  </v-tooltip>
	    </v-toolbar>
        <RightSearchDrawer v-if="load_searchDrawer"/>
      </v-navigation-drawer>
</template>
<script>
	export default {
    data: () => ({
      rightSearchDrawer: false,
      load_searchDrawer: false,
      
    }),
  }
</script>