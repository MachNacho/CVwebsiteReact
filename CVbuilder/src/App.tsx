import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ContactMe from "./Pages/ContactMe";
import Details from "./Pages/Details";
import Hobbies from "./Pages/Hobbies";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path= "/" element={<Home />} />
          <Route path="ContactMe" element={<ContactMe />} />
          <Route path="Hobbies" element={<Hobbies />} />
          <Route path="Details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
