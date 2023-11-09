import React from "react";
import {
  Navigate,
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdGroup } from "react-icons/md";
import { FaBook, FaGamepad } from "react-icons/fa";
import "./App.css";
import Movie from "./pages/Movie";
import Profile from "./pages/Profile";
import Detail from "./pages/detail";
import Game from "./pages/game";
import Book from "./pages/book";

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 02</p>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/movie" replace />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/game" element={<Game />} />
        <Route path="/book" element={<Book />} />
        <Route path="/movie/detail/:id" element={<Detail />} />
        <Route path="/book/detail/:id" element={<Detail />} />
        <Route path="/game/detail/:id" element={<Detail />} />
      </Routes>
      <footer>
        <NavLink to="/" className="iconWrapper">
          <HiHome className="icon" />
          Movie
        </NavLink>
        <NavLink to="/Book" className="iconWrapper">
          <FaBook className="icon" />
          Book
        </NavLink>
        <NavLink to="/Game" className="iconWrapper">
          <FaGamepad className="icon" />
          Game
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" />
          Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}
export default App;
