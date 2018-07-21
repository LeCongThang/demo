import axios from 'axios'
import {
  environment
} from "~/plugins/config.js";
class Contact {
  constructor(siteurl) {
    this.apiBase = `${siteurl}`
  }
  news() {
    return axios.post(`${this.apiBase}contact`)
      .then(response => {
        return {
          postData: response.data
        }
      })
      .catch(e => {
        return {
          error: e
        }
      })
  }
}

const centralrealApiContact = new Contact(environment.apiUrl)

export default centralrealApiContact
