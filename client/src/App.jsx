import "./App.css";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";
import { Route, Routes } from "react-router-dom";
import AddCard from "./components/AddCard";
import Layout from "./components/Layout";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CardList />} />
        <Route path="/admin" element={<AdminPage />} />
      </Route>
    </Routes>
  );
}

export default App;
