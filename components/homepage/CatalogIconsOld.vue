<template>
	<v-layout>
        <v-flex>
			<v-btn
			    flat
			    icon
                :to="localePath('cart')"
                v-on="on" 
            >
                <v-icon class="light-green--text text--darken-1">list</v-icon>
            </v-btn>
            <v-btn
			    outline
			    fab
                :to="localePath('cart')"
                v-on="on" 
            >
                <v-icon class="light-green--text text--darken-1">tv</v-icon>
            </v-btn>
            <v-btn
			    outline
			    fab
                :to="localePath('cart')"
                v-on="on" 
            >
                <v-icon class="light-green--text text--darken-1">laptop_windows</v-icon>
            </v-btn>
            <v-btn
			    
			    fab
                :to="localePath('cart')"
                v-on="on" 
            >
                <v-icon class="light-green--text text--darken-1">build</v-icon>
            </v-btn>
            <v-btn
			    
			    fab
                :to="localePath('cart')"
                v-on="on" 
            >
                <v-icon class="light-green--text text--darken-1">highlight</v-icon>
            </v-btn>
            <v-btn
			    
			    fab
                :to="localePath('cart')"
                v-on="on" 
            >
                <v-icon class="light-green--text text--darken-1">toys</v-icon>
            </v-btn>
            <v-btn
			    
			    fab
                :to="localePath('cart')"
                v-on="on" 
            >
                <v-icon class="light-green--text text--darken-1">fitness_center</v-icon>
            </v-btn>
            <v-btn
			    
			    fab
                :to="localePath('cart')"
                v-on="on" 
            >
                <v-icon class="light-green--text text--darken-1">filter_vintage</v-icon>
            </v-btn>
            <v-btn
			    
			    fab
                :to="localePath('cart')"
                v-on="on" 
            >
                <v-icon class="light-green--text text--darken-1">watch</v-icon>
            </v-btn>
            <v-btn
			    
			    fab
                :to="localePath('cart')"
                v-on="on" 
            >
                <v-icon class="light-green--text text--darken-1">directions_bike</v-icon>
            </v-btn>        
        </v-flex>
    </v-layout>
</template>