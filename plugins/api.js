import axios from 'axios'
import {
  environment
} from "~/plugins/config.js";
class Api {
  constructor(siteurl) {
    this.apiBase = `${siteurl}`
  }
  news(page) {
    return axios.get(`${this.apiBase}news?page=`+page)
      .then(response => {
        return {
          postData: response.data.data
        }
      })
      .catch(e => {
        return {
          error: e
        }
      })
  }
}

const centralrealApi = new Api(environment.apiUrl)

export default centralrealApi
