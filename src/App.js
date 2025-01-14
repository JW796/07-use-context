import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Podcasts from "./components/Podcasts";
import Recommendations from "./components/Recommendations";
import { UserContext } from "./Contexts/UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("Star Lord");

  return (
    <>
      <Router>
        <UserContext.Provider value={[user, setUser]}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/recomendations" element={<Recommendations />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
