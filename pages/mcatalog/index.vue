<template>
  <Catalog  />
</template>

<script>
  const Catalog = () => import('~/components/catalog/Categories')
  
  export default {
  	components: {
      Catalog
    }
  }
</script>
