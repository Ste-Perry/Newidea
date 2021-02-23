import { getData } from '../apis/data'

export const SET_DATA = 'SET_DATA'

export function setData(data) {
   return {
      type: SET_DATA,
      data
   }
}

export function fetchData(sata) {
   return dispatch => {
      return getData()
         .then(data => {
            dispatch(setData(data))
            return null
         })
   }
}