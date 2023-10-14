let quoteChain
if (process.client) {
  quoteChain = JSON.parse(window.localStorage.getItem('quoteChain'))
}

export const state = () => ({
  quoteChain: quoteChain || [{
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
    title: 'Packaging',
    selected: null
  }
  ]
})

export const getters = {
  chainDone (state) {
    const selected = x => x.selected
    const results = state.quoteChain.map(selected)
    return (!results.includes(null))
  }
}

export const mutations = {
  setQuote (state, payload) {
    // get diffs
    const data = JSON.parse(payload)
    const quoteChain = state.quoteChain
    const res = quoteChain.map(obj => data.find(o => o.title === obj.title) || obj)
    state.quoteChain = res
    window.localStorage.setItem('quoteChain', JSON.stringify(res))
  },
  resetQuote (state, data) {
    state.quoteChain = data
    window.localStorage.setItem('quoteChain', JSON.stringify(data))
  }
}

// Allows clearing of local storage for debugging

export const actions = {
  quoteChainReset (context) {
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
      title: 'Packaging',
      selected: null
    }
    ]
    context.commit('resetQuote', reset)
  }
}
