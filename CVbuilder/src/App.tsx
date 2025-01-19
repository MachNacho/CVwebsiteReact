import NavigationHeader from "./components/NavigationBar/NavigationHeader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import ContactMe from "./Pages/ContactMe"
import Details from "./Pages/Details"
import Hobbies from "./Pages/Hobbies"

import HomePage from "./components/HomePage/HomePage";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import ContactMePage from "./components/ContactMe/ContactMePage";
import HobbiesPage from "./components/HobbiesPage/HobbiesPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element = {<Home/>}/>
            <Route path ="ContactMe" element = {<ContactMe/>}/>
            <Route path ="Hobbies" element = {<Hobbies/>}/>
            <Route path ="Details" element = {<Details/>}/>
        </Routes>


      </BrowserRouter>
      <NavigationHeader />
      <HomePage />
      <DetailsPage />
      <ContactMePage />
      <HobbiesPage />
    </>
  );
}

export default App;
