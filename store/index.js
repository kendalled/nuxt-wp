let user
if (process.client) {
  user = window.localStorage.getItem('user')
}

export const state = () => ({
  user: user ? JSON.parse(JSON.stringify(user)) : null
})

export const mutations = {
  setUser (state, payload) {
    state.user = JSON.parse(JSON.stringify(payload))
    // window.localStorage.setItem('user', JSON.stringify(payload))
  }
}

export const actions = {
  userChange (context, payload) {
    context.commit('setUser', payload)
  },
  userReset (context) {
    context.commit('setUser', null)
  }
}

export const getters = {
  getUser (state) {
    return state.user !== null
  },
  getFirst (state) {
    if (state.user) {
      if (state.user.displayName) {
        const names = state.user.displayName.split(' ')
        return names[0]
      }
    }
    return 'Admin'
  },
  isAdmin (state) {
    if (state.user) {
      return state.user.admin
    } else {
      return false
    }
  }
}
