import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchFruits } from '../actions'
import DataListing from './Data'

const App = (props) => {
  useEffect(() => {
    props.dispatch(fetchFruits())
  } ,[])

  return (
    <>
      <div className='app'>
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {props.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
        <DataListing/>
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits,
    data: globalState.data
  }
}

export default connect(mapStateToProps)(App)
