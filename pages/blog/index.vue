<template>
  <v-layout column>
    <v-flex>
      <v-tabs 
                color="grey lighten-5"
                v-model="active"
                fixed-tabs
                slider-color="primary"
               >
                <v-tab>
                  <v-badge color="blue">
                    <template v-slot:badge>
                      <span>25</span>
                    </template>
                    <span>
                      <div>  
                        Всі статті
                      </div>
                    </span>
                  </v-badge>
                </v-tab>
                <v-tab>
                  <v-badge color="blue">
                    <template v-slot:badge>
                      <span>5</span>
                    </template>
                    <span>
                      <div >  
                         Останні
                      </div>
                    </span>
                  </v-badge>
                </v-tab>
                <v-tab>
                  <v-badge color="blue">
                    <template v-slot:badge>
                      <span>3</span>
                    </template>
                    <span>
                      <div >  
                        Закладки
                      </div>
                    </span>
                  </v-badge>
                </v-tab>
      </v-tabs>
      <v-divider />
    </v-flex>
    <v-flex >
        <v-tabs-items v-model="active" >
          <v-tab-item>
            <v-layout wrap justify-center row fill-height>
                <v-flex
                  v-for="post in posts"
                  :key="post.slug"
                  xs12 lg2 sm12 md3 xl2
                  :class="$vuetify.breakpoint.mdAndUp ? 'ma-2' : 'ma-0'"
                > 
                                        
                  <PostCard :post="post" />
                                            
                </v-flex>
            </v-layout>
          </v-tab-item>
          <v-tab-item>
             <v-layout wrap justify-center row fill-height>
                <v-flex
                  v-for="post in posts"
                  :key="post.slug"
                  xs12 lg2 sm12 md3 xl2
                  :class="$vuetify.breakpoint.mdAndUp ? 'ma-2' : 'ma-0'"
                > 
                                        
                  <PostCard :post="post" />
                                            
                </v-flex>
            </v-layout>
          </v-tab-item>
          <v-tab-item>
            <v-layout wrap justify-center row fill-height>
                <v-flex
                  v-for="post in posts"
                  :key="post.slug"
                  xs12 lg3 sm12 md3 xl3
                  :class="$vuetify.breakpoint.mdAndUp ? 'ma-2' : 'ma-0'"
                > 
                                        
                  <PostCard :post="post" />
                                            
                </v-flex>
            </v-layout>
          </v-tab-item>
        </v-tabs-items>

    </v-flex>
    
  </v-layout>
</template>

<script>
  import PostCard from '~/components/post/PostCard'

  export default {
    components: {
      PostCard
    },

    data: () => ({
      active: null,
      posts: [
        {slug: "post1", name: "Maria Maria", description: "З Танею Міхіною в Жовтневому. Розповідаю, що треба любити театр у собі. Вона говорить: знаю."},
        {slug: "post2", name: "post2", description: "...І знаючи все, що чекає на них, він все ж вимовляє її ім’я, зіткане з приголосних і гірких голосних, доки йому підступає до ніг ніжності сутінковий сніг, любові смарагдова течія. Це Сергій Жадан, Ще нічого немає."},
        {slug: "post3", name: "post3"},
        {slug: "post4", name: "post4"},
        {slug: "post5", name: "post5"},
        {slug: "post1", name: "post1"},
        {slug: "post2", name: "post2"},
        {slug: "post3", name: "post3"},
        {slug: "post4", name: "post4"},
        {slug: "post5", name: "post5"},
        {slug: "post6", name: "post6"}
      ]

    }),
  }
</script>
 
