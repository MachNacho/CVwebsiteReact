import { useState } from 'react'

import NavigationHeader from './components/NavigationBar/NavigationHeader'
import HomePage from './components/HomePage/HomePage'
import DetailsPage from './components/DetailsPage/DetailsPage'

function App() {

  return (
    <>
      <NavigationHeader/>
      <HomePage/>
      <DetailsPage/>
    </>
  )
}

export default App
