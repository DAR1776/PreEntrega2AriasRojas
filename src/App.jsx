import{BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NavbarContainer from "./components/Navbar Container";
import HoodiesGrises from "./pages/Grises";
import HoodiesNegros from "./pages/Negros";
import HoodiesBlancos from "./pages/Blancos";
import Footer from "./components/Footer";

function App() {

  return (
    <BrowserRouter>

      <NavbarContainer />

      <Routes>

        <Route 
          exact
          path="/"
          element={<Home/>}
        />

        <Route
          exact
          path="category/1"
          element={<HoodiesGrises/>}
        />

        <Route
          exact
          path="category/2"
          element={<HoodiesNegros/>}
        />

        <Route
          exact
          path="category/3"
          element={<HoodiesBlancos/>}
        />

        <Route
          exact
          path="item/:id"
          element={<Detail/>}
        />

      </Routes>

      <Footer/>

    </BrowserRouter>
  )
}

export default App



