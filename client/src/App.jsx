import "./App.css";
import CardList from "./components/CardList";
import { Route, Routes } from "react-router-dom";
import AddCard from "./components/AddCard";
import Layout from "./components/Layout";
import AdminPage from "./pages/AdminPage";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="admin" element={<Layout />}>
          <Route index element={<AdminPage />} />
          <Route path="add" element={<AddCard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
