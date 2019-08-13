<template>
	 <v-container  fluid class="grey lighten-5">
		<v-layout column justify-start align-start dense>
			      <v-text-field
			      	clearable
		            label="Введите модель, код или текст"
		          ></v-text-field>
			      <v-radio-group >
	              	Categories
	                <v-checkbox
	                  
	                  label="reverse"
	                  hide-details
	                ></v-checkbox>
	                <v-checkbox
	                  
	                  label="fill-height"
	                  hide-details
	                ></v-checkbox>
	                <v-checkbox
	                  
	                  label="reverse"
	                  hide-details
	                ></v-checkbox>
	                <v-checkbox
	                  
	                  label="fill-height"
	                  hide-details
	                ></v-checkbox>
	               </v-radio-group>
	    </v-layout>
	  </v-container>
</template>