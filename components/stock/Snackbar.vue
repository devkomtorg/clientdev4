<template>
	<v-snackbar
        v-model="snackbar"
        multi-line
        :color="color"
        :timeout="timeout"
        bottom
      >
        {{ text }}
        <v-btn
          color="white"
          flat
          @click="snackbar = false"
        >
          Close
        </v-btn>
    </v-snackbar>  
</template>
<script>
  export default {
    
    data: () => ({
      text: 'Оголошення: Жодних вихідних. 9 травня ми працюємо у звичайному режимі!',
      snackbar: true,
        y: 'top',
        x: null,
        mode: '',
        color: 'orange',
        text: 'Оголошення: Жодних вихідних. 9 травня ми працюємо у звичайному режимі!',
        timeout: 100000,
    })

  }
</script>