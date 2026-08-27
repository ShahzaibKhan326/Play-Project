import "./RecommendedVideos.css";

import videos from "../Video/VideoData";
import RecommendedVideo from "./RecommendedVideo";

function RecommendedVideos({ currentVideoId }) {
  const recommendedVideos = videos.filter(
    (video) => video.id !== Number(currentVideoId)
  );

  return (
    <aside className="recommended-videos">

      <h2>Recommended</h2>

      <div className="recommended-video-list">

        {recommendedVideos.map((video) => (
          <RecommendedVideo
            key={video.id}
            video={video}
          />
        ))}

      </div>

    </aside>
  );
}

export default RecommendedVideos;