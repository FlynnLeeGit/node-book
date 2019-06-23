import fetch from 'node-fetch'
import config from '../config/app'

class Http {
  constructor({ url = '', method = 'GET', data = {} } = {}) {
    return fetch(config.API_BASE_URL + url, {
      method: method,
      body: method !== 'GET' ? JSON.stringify(data) : null,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
  }
}

export default Http
