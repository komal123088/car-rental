import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CarDetail from "./pages/CarDetail";
import Dashboard from "./pages/Dashboard";
import Category from "./pages/Category";
import Checkout from "./pages/Payment";

function App() {
  return (
    <BrowserRouter basename="/car-rental">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path="/payment/:id" element={<Checkout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/category" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
