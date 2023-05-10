import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Details from "../pages/Details";

const Navigation = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to={'/'} className="title_link"><h1 className="title">🎬Películas</h1></Link>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movie/:movieId" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
