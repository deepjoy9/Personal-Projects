import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddCard from "./components/AddCard";
import Layout from "./components/Layout";
import AdminPage from "./pages/AdminPage";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="admin" element={<Layout />}>
            <Route index element={<AdminPage />} />
            <Route path="add" element={<AddCard />} />
          </Route>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
