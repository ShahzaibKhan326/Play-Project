import "./Home.css";

import Sidebar from "../../Components/Sidebar/Sidebar";
import VideoSection from "../VideoSection/VideoSection";

function Home({ searchValue }) {
  return (
    <main className="home-layout">
      <Sidebar />

      <VideoSection searchValue={searchValue} />
    </main>
  );
}

export default Home;