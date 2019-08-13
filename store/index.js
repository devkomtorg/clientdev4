export const state = () => ({
  categories: [],
  currentCategory: null
})

export const getters = {
  categories (state) {
    return state.categories
  },
  currentCategory (state) {
    return state.currentCategory
  },
  categoriesCount: (state, getters) => {
    return getters.categories.length
  },
  getCategoryById: (state) => (slug) => {
   return state.categories.filter(x => x.slug === slug)
  }
}

export const mutations = {
  SET_CATEGORIES (state, categories) {
    state.categories = categories
  },
  SET_CURRENT_CATEGORIES (state, currentCategory) {
    state.currentCategory = currentCategory
  }
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    let response = await this.$axios.$get('categories')

    commit('SET_CATEGORIES', response.data)

    if (this.$auth.loggedIn) {
      await dispatch('cart/getCart')
    }
  },
  async setCurrentCategory({ commit }, slug) {
    
    commit('SET_CURRENT_CATEGORIES', slug)

    
  }
}
