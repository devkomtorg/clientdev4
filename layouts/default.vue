<template>
  <v-app>
      <!--Toolbar for xsOnly-->
      <v-toolbar v-if="$vuetify.breakpoint.xsOnly"
        prominent
        extended
        dense
        app
        flat
        :color="$vuetify.theme.bgcolor"
        :flat="ifScroll"
        v-scroll="onScroll"
      >
        <v-btn
          icon
          flat
          :to="localePath('mcatalog')"
        >
          <v-icon>list</v-icon>
        </v-btn>
        <v-toolbar-title>
          <v-icon  :color="$vuetify.theme.accent">
            panorama_fish_eye
          </v-icon>
          <nuxt-link :to="localePath('index')" class="no-decoration">
          <span class="grey--text text--darken-4 font-weight-bold">
            КОМТОРГ
          </span>
          </nuxt-link>
        </v-toolbar-title>
        <!--<v-btn icon >
            <v-icon>facebook</v-icon>
          </v-btn>
          <v-btn icon >
            <v-icon>instagram</v-icon>
          </v-btn>-->
        <v-spacer />
        <template v-if="$auth.loggedIn">
              <v-toolbar-items>
                <v-btn
                  icon
                  :to="localePath('wishlist')"
                >
                  <v-icon class="grey--text text--darken-1">favorite_border</v-icon>
                </v-btn>
                <v-btn
                  icon
                  :to="localePath('cart')"
                >
                  <v-icon class="grey--text text--darken-1">shopping_cart</v-icon>
                </v-btn>
              </v-toolbar-items>
          </template>
          <template v-slot:extension>
              <v-text-field
  				clearable
  			    :label="$t('search_label')"
  			    single-line
  			    append-icon="search"
  			    style="max-width: 400px"
  			>
  			</v-text-field>
        </template>
        <v-toolbar-side-icon
          @click.stop="(leftGeneralDrawer = !leftGeneralDrawer),(leftCatalogDrawer = false)"
        >
          <v-icon>more_vert</v-icon>
        </v-toolbar-side-icon>
      </v-toolbar>
      <!--END of Toolbar for xsOnly-->
      <!--Toolbar for smAndUp-->
      <v-toolbar v-if="$vuetify.breakpoint.smAndUp"
        app
        :flat="ifScroll"
        clipped-left
        :color="$vuetify.theme.bgcolor"
        v-scroll="onScroll"
      >
        <v-toolbar-title>
          <v-icon  :color="$vuetify.theme.accent">
            panorama_fish_eye
          </v-icon>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <nuxt-link 
                :to="localePath('index')" 
                class="no-decoration grey--text text--darken-4 font-weight-bold"
              >
                <span v-on="on">КОМТОРГ</span>
              </nuxt-link>
            </template>
            <span>{{ $t('tooltip_home') }}</span>
          </v-tooltip>
        </v-toolbar-title>
        <v-toolbar-items >
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                 <v-btn
                  flat
                  @click.stop="(leftCatalogDrawer =  !leftCatalogDrawer),(leftGeneralDrawer =false)"
                  :color="$vuetify.theme.primary"
                  v-on="on" 
                >
                  {{ $t('all_departments') }}
                  <template v-if="leftCatalogDrawer">
                    <v-icon>keyboard_arrow_up</v-icon>
                  </template>
                  <template v-else>
                    <v-icon>keyboard_arrow_down</v-icon>
                  </template>
                </v-btn>
              </template>
              <template v-if="leftCatalogDrawer">
                <span>{{ $t('tooltip_close_catalog') }}</span>
              </template>
              <template v-else>
                  <span>{{ $t('tooltip_show_catalog') }}</span>
              </template>
            </v-tooltip>
        </v-toolbar-items>
        <!--<v-btn icon disabled>
          <v-icon color="blue">mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon disabled>
          <v-icon color="red">mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon disabled>
          <v-icon color="light-blue">mdi-twitter</v-icon>
        </v-btn>-->
        <v-spacer />
        <v-text-field
			clearable
		    :label="$t('search_label')"
		    single-line
		    append-icon="search"
		    style="max-width: 400px"
		>
		</v-text-field>
		<v-spacer />
        <!--<template v-slot:extension>
        	<v-toolbar-items >
        	  <v-tooltip bottom>
	            <template v-slot:activator="{ on }">
	               <v-btn
	                flat
	                @click.stop="(leftCatalogDrawer =  !leftCatalogDrawer),(leftGeneralDrawer =false)"
	                :color="$vuetify.theme.accent"
	                v-on="on" 
	              >
	                <v-icon large>list</v-icon>{{ $t('all_departments') }}
                  <template v-if="leftCatalogDrawer">
                    <v-icon>keyboard_arrow_down</v-icon>
                  </template>
                  <template v-else>
                    <v-icon>keyboard_arrow_up</v-icon>
                  </template>
                </v-btn>
              </template>
              <template v-if="leftCatalogDrawer">
                <span>{{ $t('tooltip_close_catalog') }}</span>
              </template>
              <template v-else>
                  <span>{{ $t('tooltip_show_catalog') }}</span>
              </template>
	          </v-tooltip>
	          <v-btn flat :color="$vuetify.theme.accent"><v-icon >tv</v-icon>Телевизоры</v-btn>
	          <v-btn flat :color="$vuetify.theme.accent"><v-icon >toys</v-icon>Стиральные машины</v-btn>
	          <v-btn flat :color="$vuetify.theme.accent"><v-icon >build</v-icon>Холодильники</v-btn>
	          <v-btn flat :color="$vuetify.theme.accent"><v-icon >fitness_center</v-icon>Морозильные камеры</v-btn>
	          <v-btn flat :color="$vuetify.theme.accent"><v-icon >filter_vintage</v-icon>Пылесосы</v-btn>
	          <v-btn flat :color="$vuetify.theme.accent"><v-icon >laptop_windows</v-icon>Мультиварки</v-btn>
            </v-toolbar-items>
	    </template>-->
        <template v-if="!$auth.loggedIn">
          <v-toolbar-items>
          	<v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  :to="localePath('cart')"
                  v-on="on" 
                >
                  <v-icon class="grey--text text--darken-1">shopping_cart</v-icon>
                </v-btn>
              </template>
              <span>{{ $t('tooltip_cart') }}</span>
            </v-tooltip>
            <v-tooltip bottom>
		      <template v-slot:activator="{ on }">
		        <v-btn
					flat
			        small
			        :to="localePath('signin')"
			        :color="$vuetify.theme.primary"
			        v-on="on"
			    >
			        {{ $t('signin') }}
			    </v-btn>
		      </template>
		      <span>{{ $t('login') }}</span>
		    </v-tooltip>
          </v-toolbar-items>   
        </template>  
        <template v-else>
          <AccountDropdownMenu v-if="$vuetify.breakpoint.smAndUp" />
          <v-toolbar-items>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  :to="localePath('wishlist')"
                  v-on="on" 
                >
                  <v-icon class="grey--text text--darken-1">favorite_border</v-icon>
                </v-btn>
              </template>
              <span>{{ $t('tooltip_wishlist') }}</span>
            </v-tooltip>
          </v-toolbar-items>
        </template>
        <v-toolbar-items 
	      v-for="locale in $i18n.locales"
	      :key="locale.code"
	    >
	      <v-btn
	        icon
	        flat
	        small
	        :class="locale.code === $i18n.locale ? 'black--text font-weight-bold ' : 'light-green--text font-weight-bold'"
	        :to="switchLocalePath(locale.code)"
	      >
	        {{ locale.code }}
	      </v-btn>
	    </v-toolbar-items>
      <v-toolbar-side-icon
          @click.stop="(leftCatalogDrawer = false),(leftGeneralDrawer = !leftGeneralDrawer)"
      >
        <v-icon large class="grey--text text--darken-1">more_vert</v-icon>
      </v-toolbar-side-icon>
  </v-toolbar>
  <!--END of Toolbar for smAndUp-->
  <!--Left navigation-drawer-->
  <v-navigation-drawer
    v-model="leftGeneralDrawer"
    
    class="grey lighten-5"
    app
    
    right
  >
    <v-toolbar flat class="transparent" v-if="$vuetify.breakpoint.xsOnly">
      <v-toolbar-title >
        <v-icon  :color="$vuetify.theme.accent">
          panorama_fish_eye
        </v-icon>
        <nuxt-link :to="localePath('index')" class="no-decoration grey--text text--darken-4 font-weight-bold">
           КОМТОРГ
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items v-if="$vuetify.breakpoint.xsOnly"
          v-for="locale in $i18n.locales"
          :key="locale.code"
      >
          <v-btn
            icon
            :class="locale.code === $i18n.locale ? 'black--text font-weight-bold ' : 'light-green--text font-weight-bold'"
            :to="switchLocalePath(locale.code)"
          >
            {{ locale.code }}
          </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-list class="pa-0" active-class="accent--text" dense>
    	<CitySelect />
    	<v-divider v-if="$vuetify.breakpoint.xsOnly" />
        <template v-if="(!$auth.loggedIn) && ($vuetify.breakpoint.xsOnly)"> 
          <v-list-tile>
            <v-btn
              class="light-green--text"
              flat
              small
              :to="localePath('signin')"
            >
              Войти
            </v-btn>
            <v-btn
              class="light-green--text"
              flat
              small
              :to="localePath('register')"
            >
              Регистрация
            </v-btn>
          </v-list-tile>
        </template>
        <v-divider />
        <v-list-tile :to="localePath('account')">
	          <v-list-tile-action>
	            <v-icon>
	              fingerprint
	            </v-icon>
	          </v-list-tile-action>
	          <v-list-tile-content>
	            <v-list-tile-title>
	              {{ $t('account') }}
	            </v-list-tile-title>
	          </v-list-tile-content>
	          <v-list-tile-action v-if="$auth.loggedIn" class="font-weight-light">
	            {{ $auth.user.name }}
	          </v-list-tile-action>
	          <v-list-tile-action v-if="$auth.loggedIn">
	            <v-btn
	              icon
	              @click="$auth.logout()"
	            >
	              <v-icon>exit_to_app</v-icon>
	            </v-btn>
	          </v-list-tile-action>
	    </v-list-tile>
	    <v-divider />
        <v-list-tile
          @click.stop="leftCatalogDrawer = !leftCatalogDrawer"
        >
          <v-list-tile-action>
            <v-icon>local_mall</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
              <v-list-tile-title v-text="$t('catalog')" />
          </v-list-tile-content>
        </v-list-tile>
        <!--------------->
        <v-list-tile
          :to="localePath('sales')"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>loyalty</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="$t('sales')" />
          </v-list-tile-content>
        </v-list-tile>
        <!--------------->
        <v-list-tile
          :to="localePath('discounts')"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>vertical_align_bottom</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="$t('discounts')" />
          </v-list-tile-content>
        </v-list-tile>
        <!--------------->
        <v-divider />
        <!--------------->
        <v-list-tile
          :to="localePath('stock')"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>accessibility_new</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="$t('stock')" />
          </v-list-tile-content>
        </v-list-tile>
        <!--------------->
        <v-list-tile
          :to="localePath('delivery')"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>local_shipping</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="$t('delivery')" />
          </v-list-tile-content>
        </v-list-tile>
        <!--------------->
        <v-list-tile
          :to="localePath('club')"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>cake</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="$t('club')" />
          </v-list-tile-content>
        </v-list-tile>
        <!--Comtacts button-->
        <v-btn color="light-green" dark block>
          {{ $t('contacts') }}
          <v-icon right dark>perm_phone_msg</v-icon>
        </v-btn>
        <!--END of Comtacts button-->
        <!--------------->
        <v-list-tile
          :to="localePath('aboutus')"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>panorama_fish_eye</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="$t('aboutus')" />
          </v-list-tile-content>
        </v-list-tile>
        <!--------------->
        <v-list-tile
          :to="localePath('blog')"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>info</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="$t('blog')" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!--END of Left navigation-drawer-->
    <!--Catalog navigation-drawer-->
    <v-navigation-drawer
      
        v-model="leftCatalogDrawer"
        app
        clipped
        class="grey lighten-5"
      >
        <v-divider />
        <Catalog />
      </v-navigation-drawer>
      <!--END of Catalog navigation-drawer-->
      <!--Content -->

      <v-content class="grey lighten-5">
        <v-divider />
        <nuxt />
      </v-content>
      <!--END of Content -->
      <v-footter>
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a> messages.attribution.is_licensed_by <a href="http://creativecommons.org/licenses/by/3.0/"     title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </v-footter>

  </v-app>
</template>

<script>
  const ToolbarBtn = () => import('~/components/layouts/ToolbarBtn')
  const AccountDropdownMenu = () => import('~/components/layouts/AccountDropdownMenu')
  const LangMenu = () => import('~/components/layouts/LangMenu')
  const Catalog = () => import('~/components/catalog/Categories')
  const RightSearchDrawer = () => import('~/components/layouts/RightSearchDrawer')
  const CitySelect = () => import('~/components/layouts/CitySelect')
 
  export default {
    components: {
      ToolbarBtn,
      RightSearchDrawer,
      Catalog,
      LangMenu,
      AccountDropdownMenu,
      CitySelect
    },

    data: () => ({
      leftCatalogDrawer: true,
      leftGeneralDrawer: false,
      ifScroll: true,
    }),

    methods: {
      onScroll (e) {
        if (window.pageYOffset == 0) {
          this.ifScroll = true
        } else {
          this.ifScroll = false
        }
         
      }
    }
  }
</script>

<style>
  .v-navigation-drawer__border {
    width: 1px;
  }

  .v-toolbar__border {
    width: 1px;
  }

  .no-decoration {
    text-decoration: none;
    color: black;
  }

  .v-toolbar {
    box-shadow: 0px 1px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 1px 0px rgba(0,0,0,0.12);
  }
</style>