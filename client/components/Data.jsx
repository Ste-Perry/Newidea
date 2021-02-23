import React, { useEffect, useState } from 'react'
import { fetchData } from '../actions/data'
import getData from '../apis/data'

const DataListing = () => {
   const [data, setData] = useState([])




   useEffect(() => {
      fetData()
   }, [])

   return (
      <>
         <ul>
            {data.map(s => {
               return (
                  <li key={s.id}><button onClick={() => fetchData}>name</button></li>
               )
            })}
         </ul>
         
      </>
   )
}

export default DataListing