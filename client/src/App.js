import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Auth } from "./pages/auth";
import { CreateRecipe } from "./pages/create-recipe";
import { SaveRecipe } from "./pages/save-recipe";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/save-recipe" element={<SaveRecipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
