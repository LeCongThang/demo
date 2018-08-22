import axios from 'axios'
import {
  environment
} from "~/plugins/config.js";
export default function ({
  store
}) {
  if (store.state.system_config.length ==0) {
    return axios.get(environment.apiUrl + 'config').then((response) => {
      store.commit('setSystemConfig', response.data.data);
    });
  }
}
