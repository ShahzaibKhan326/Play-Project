import "./Searched.css";

import SearchResult from "../../Components/SearchResult/SearchResult";
import videos from "../../Components/Video/VideoData";
import EmptyState from "../../Components/EmptyState/EmptyState";

import useSearch from "../../context/useSearch";

function Searched() {

  const { searchValue } = useSearch();

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <main className="searched-layout">

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