import NavigationHeader from './components/NavigationBar/NavigationHeader'
import HomePage from './components/HomePage/HomePage'
import DetailsPage from './components/DetailsPage/DetailsPage'
import ContactMePage from './components/ContactMe/ContactMePage'
import HobbiesPage from './components/HobbiesPage/HobbiesPage'

function App() {

  return (
    <>
      <NavigationHeader/>
      <HomePage/>
      <DetailsPage/>
      <ContactMePage/>
      <HobbiesPage/>
    </>
  )
}

export default App