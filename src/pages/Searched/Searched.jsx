import "./Searched.css";

import Sidebar from "../../Components/Sidebar/Sidebar";
import SearchResult from "../../Components/SearchResult/SearchResult";
import videos from "../../Components/Video/VideoData";
import EmptyState from "../../Components/EmptyState/EmptyState";

function Searched({ searchValue }) {
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <main className="searched-layout">

      <Sidebar />

      <section className="search-results">

        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <SearchResult
              key={video.id}
              video={video}
            />
          ))
        ) : (
          <EmptyState
            type="videos"
            state="view"
          />
        )}

      </section>

    </main>
  );
}

export default Searched;