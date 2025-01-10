import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Podcasts from "./components/Podcasts";
import Recommendations from "./components/Recommendations";
import { UserContext } from "./Contexts/UserContext";

function App() {
  return (
    <>
      <h1 className="text-3xl text-center py-6 my-2">useContext</h1>

      <Router>
        <UserContext.Provider value="Star Lord">
          <Routes>
            <Route path="/dashboard" element={Dashboard} />
            <Route path="/podcasts" element={Podcasts} />
            <Route path="/recomendations" element={Recommendations} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
