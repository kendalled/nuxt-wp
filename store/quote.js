let quote
if (process.client) {
  quote = JSON.parse(window.localStorage.getItem('quote'))
}

export const state = () => ({
  quote: quote || [{
    title: 'Production',
    selected: null
  },
  {
    title: 'Plating',
    selected: null
  },
  {
    title: 'Sizing',
    selected: null
  },
  {
    title: 'Backing',
    selected: null
  },
  {
    title: 'Packaging',
    selected: null
  }
  ]
})

export const getters = {
  pinDone (state) {
    const selected = x => x.selected
    const results = state.quote.map(selected)
    return (!results.includes(null))
  }
}

export const mutations = {
  setQuote (state, payload) {
    // get diffs
    const data = JSON.parse(payload)
    const quote = state.quote
    const res = quote.map(obj => data.find(o => o.title === obj.title) || obj)
    state.quote = res
    window.localStorage.setItem('quote', JSON.stringify(res))
  },
  resetQuote (state, data) {
    state.quote = data
    window.localStorage.setItem('quote', JSON.stringify(data))
  }
}

// Allows clearing of local storage for debugging

export const actions = {
  quoteReset (context) {
    const reset = [{
      title: 'Production',
      selected: null
    },
    {
      title: 'Plating',
      selected: null
    },
    {
      title: 'Sizing',
      selected: null
    },
    {
      title: 'Backing',
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
