import { SET_DATA } from '../actions/data'

const initialState = []

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_DATA:
         return action.data
      default:
         return state
   }
}

export default reducer