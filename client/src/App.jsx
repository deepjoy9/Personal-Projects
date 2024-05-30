import Navbar from "./components/Navbar";
import "./App.css";
import Card from "./components/Card";
import CardList from "./components/CardList";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <CardList />
      </div>
    </>
  );
}

export default App;
