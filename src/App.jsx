import "./Default/variables.css";
import "./App.css";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Searched from "./pages/Searched/Searched";
import VideoPlayer from "./pages/VideoPlayer/VideoPlayer";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="container">

      <header>
        <Navbar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </header>

      <Routes>

        <Route
          path="/"
          element={<Home searchValue={searchValue} />}
        />

        <Route
          path="/search"
          element={<Searched searchValue={searchValue} />}
        />

        <Route
          path="/watch/:videoId"
          element={<VideoPlayer />}
        />

      </Routes>

    </div>
  );
}

export default App;