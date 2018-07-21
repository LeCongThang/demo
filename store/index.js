import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      locales: ['vi', 'en'],
      lang: 'vi',
      system_config:[]
    },
    mutations: {
      setLanguage(state, language) {
        if (state.locales.indexOf(language) !== -1) {
          state.lang = language
        }
      },
      setSystemConfig(state,payload){
        state.system_config = payload
      }
    }
  })
}

export default createStore
