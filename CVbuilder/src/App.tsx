// Importing necessary components from react-router-dom for routing
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Importing the page components that will be rendered for different routes
import Home from "./Pages/Home";
import ContactMe from "./Pages/ContactMe";
import Details from "./Pages/Details";
import Hobbies from "./Pages/Hobbies";
import NoPage from "./Pages/NoPage";

function App() {
  return (
    <>
      {/* Wrapping the routes with BrowserRouter to enable routing in the app */}
      <BrowserRouter>
        {/*Routes for different pages*/}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="ContactMe" element={<ContactMe />} />
          <Route path="Hobbies" element={<Hobbies />} />
          <Route path="Details" element={<Details />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
