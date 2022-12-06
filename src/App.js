import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import DataContext from './utils.js/context'
import './App.scss'

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3333/api/candidates')
    .then(res => res.json())
    .then(res => setData(res))
  }, [])
  
  return (
    <DataContext.Provider value={data}>
      <Header />
    </DataContext.Provider>
  )
}

export default App