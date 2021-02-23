import request from 'superagent'

const baseUrl = 'https://api.akahu.io/v1'
const acceptJsonHeader = { Accept: 'application/json' }

export function getData() {
   return request
      .set(acceptJsonHeader)
      .get(baseUrl + '/accounts')
      .then(res => {
         return res.body
      })
}

