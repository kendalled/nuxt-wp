let prefs
if (process.client) {
  prefs = window.localStorage.getItem('prefs')
}

export const state = () => ({
  prefs: prefs ? JSON.parse(JSON.stringify(prefs)) : { choice: 'Lapel Pins', page: 0 }
})

export const mutations = {
  setPrefs (state, payload) {
    state.prefs.choice = payload
    // window.localStorage.setItem('prefs', JSON.stringify(payload))
  },
  lastPage (state) {
    const data = {
      choice: state.prefs.choice,
      page: state.prefs.page - 1
    }
    state.prefs = data
    window.localStorage.setItem('prefs', data)
  },
  nextPage (state) {
    const data = { choice: state.prefs.choice, page: state.prefs.page + 1 }
    state.prefs = data
    window.localStorage.setItem('prefs', data)
  },
  resetPage (state) {
    const data = {
      choice: state.prefs.choice,
      page: 0
    }
    state.prefs = data
    window.localStorage.setItem('prefs', data)
  }
}

export const actions = {
  prefsChange (context, payload) {
    context.commit('setPrefs', payload)
  },
  prefsReset (context) {
    context.commit('setPrefs', {
      choice: 'Lapel Pins'
    })
  }
}

export const getters = {
  currentPage (state) {
    return state.prefs.page
  },
  getprefs (state) {
    return state.prefs.choice
  }
}
