import{BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NavbarContainer from "./components/Navbar Container";
import HoodiesGrises from "./pages/Grises";
import HoodiesNegros from "./pages/Negros";
import HoodiesBlancos from "./pages/Blancos";
import Footer from "./components/Footer";

function App() {

  const[items, setItems] = useState([])

  useEffect(() => {
    fetch('./mock/data')
      .then((response) => {
        console.log("RESONSE SIN PROCESAR: ", response)
        return response.json()
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) =>{
        console.log(error)
      })
  }, []);

  return (
    <BrowserRouter>

      <NavbarContainer/>


      <Routes>

        <Route 
          exact
          path="/"
          element={<Home/>}
        />

        <Route
          exact
          path="grises"
          element={<HoodiesGrises/>}
        />

        <Route
          exact
          path="negros"
          element={<HoodiesNegros/>}
        />

        <Route
          exact
          path="blancos"
          element={<HoodiesBlancos/>}
        />

      </Routes>

      <Footer/>

    </BrowserRouter>
  )
}

export default App



