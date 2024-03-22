import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Item from "./pages/Item";
import AddItem from "./pages/AddItem";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:item/:id" element={<Item />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
