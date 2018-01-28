
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import arr from './data/data.json'
export default {
  bootstrap () {
    const mock = new MockAdapter(axios)
    mock.onPost('/api/shoppingCar').reply((config) => {
      return new Promise((resolve, reject) => {
        resolve([200, arr])
      })
    })
  }
}
