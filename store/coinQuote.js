let quoteCoin
if (process.client) {
  quoteCoin = JSON.parse(window.localStorage.getItem('quoteCoin'))
}

export const state = () => ({
  quoteCoin: quoteCoin || [{
    title: 'Plating',
    selected: null
  },
  {
    title: 'Color',
    selected: null
  },
  {
    title: 'Sizing',
    selected: null
  },
  {
    title: 'Packaging',
    selected: null
  }
  ]
})

export const getters = {
  coinDone (state) {
    const selected = x => x.selected
    const results = state.quoteCoin.map(selected)
    return (!results.includes(null))
  }
}

export const mutations = {
  setQuote (state, payload) {
    // get diffs
    const data = JSON.parse(payload)
    const quoteCoin = state.quoteCoin
    const res = quoteCoin.map(obj => data.find(o => o.title === obj.title) || obj)
    state.quoteCoin = res
    window.localStorage.setItem('quoteCoin', JSON.stringify(res))
  },
  resetQuote (state, data) {
    state.quoteCoin = data
    window.localStorage.setItem('quoteCoin', JSON.stringify(data))
  }
}

// Allows clearing of local storage for debugging

export const actions = {
  quoteCoinReset (context) {
    const reset = [{
      title: 'Plating',
      selected: null
    },
    {
      title: 'Color',
      selected: null
    },
    {
      title: 'Sizing',
      selected: null
    },
    {
      title: 'Packaging',
      selected: null
    }
    ]
    context.commit('resetQuote', reset)
  }
}
