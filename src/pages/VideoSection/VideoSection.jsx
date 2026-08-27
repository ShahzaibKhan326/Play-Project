
import "../VideoSection/VideoSection.css"


import Video from "../../Components/Video/Video";
import videos from "../../Components/Video/VideoData";
import EmptyState from "../../Components/EmptyState/EmptyState";

function VideoSection({ searchValue }) {
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <section className="videos-section">
      {filteredVideos.length > 0 ? (
        filteredVideos.map((video) => (
          <Video key={video.id} video={video} />
        ))
      ) : (
        <EmptyState type="videos" state="view"  />
      )}
      
    </section>

  );
}

export default VideoSection;