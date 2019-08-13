<template>


</template>

<script>
  
  import products from '~/components/dashboard/products'
  import reports from '~/components/dashboard/reports'
  import users from '~/components/dashboard/users'
  export default {

  	components: {
  		products,
  		reports,
  		users
  	},

    data: () => ({
      aboutUsItems: [
      	  { icon: '', title: 'Редактировать', to: '' },
          { icon: '', title: 'Установка цен', to: '' },
          { icon: '', title: 'Загрузить', to: '' },
          
      ],
      window: 0
    })
  }
</script>
