<template>
  <v-container grid-list-md fluid>
  	<v-layout column>
  	    <v-flex>
		    <v-layout wrap justify-center row fill-height>
		      <v-flex
		        v-for="post in posts"
		        :key="post.slug"
		        xs12 lg2 sm12 md3 xl2
		      > 
		                              
		        <PostCard :post="post" />
		                                  
		      </v-flex>
		    </v-layout>
		</v-flex>
		<v-flex>
			<div class="text-xs-center">
			    <v-pagination
			      v-model="page"
			      :length="15"
			      :total-visible="7"
			    ></v-pagination>
			</div>
	    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import PostCard from '~/components/post/PostCard'

  export default {
    components: {
      PostCard
    },

    data: () => ({
      page: 1,
      posts: [
        {slug: "post1", name: "post1"},
        {slug: "post2", name: "post2"},
        {slug: "post3", name: "post3"},
        {slug: "post4", name: "post4"},
        {slug: "post5", name: "post5"}
      ]
    }),
  }
</script>