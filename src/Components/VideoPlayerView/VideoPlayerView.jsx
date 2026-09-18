

import YouTube from "react-youtube";
import "./VideoPlayerView.css";

function VideoPlayerView({ video }) {
  return (
    <div className="video-player-view">

      <YouTube
       videoId={video.youtubeId}
       className="youtube-player"
      />

    </div>
  );
}

export default VideoPlayerView;
