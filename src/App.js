import "./App.css";
import Registration from "./components/Registration/Registration";
import NavBar from "./components/NavBar/NavBar";
import Authorization from "./components/Authorization/Authorization";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Registration />} />
          <Route path="/authorization" element={<Authorization />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
