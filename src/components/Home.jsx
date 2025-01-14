import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Link } from "react-router-dom"

const Home = () => {
    const user = useContext(UserContext)
  return (
    <div className="flex flex col items-center">
      <h1 className="text-xl mt-4-mb-2">{user}'s Home</h1>
      <Link to="/dashboard" className="text-indiog-500 hover:opacity-80">
        Your Dashboard
      </Link>
      <Link to="/podcasts" className="text-indiog-500 hover:opacity-80">
        Your Podcasts
      </Link>
      <Link to="/recomendations" className="text-indiog-500 hover:opacity-80">
        Your Recomendations
      </Link>
    </div>
  );
}

export default Home
