import "./VideoPlayer.css";

import { useParams } from "react-router-dom";

import videos from "../../Components/Video/VideoData";
import EmptyState from "../../Components/EmptyState/EmptyState";
import VideoPlayerView from "../../Components/VideoPlayerView/VideoPlayerView";
import VideoInfo from "../../Components/VideoInfo/VideoInfo";
import Comments from "../../Components/Comments/Comments";
import RecommendedVideos from "../../Components/RecommendedVideos/RecommendedVideos";

function VideoPlayer() {
  
  const { id } = useParams();

  const video = videos.find((video) => video.id === Number(id));

  if (!video) {
    return (
      <main className="video-player-layout">
        <EmptyState type="videos" state="view" />
      </main>
    );
  }

  return (
    <main className="video-player-layout">

      <section className="player-content">
        <VideoPlayerView video={video} />

        <VideoInfo video={video} />

       <Comments />

      </section>

      <RecommendedVideos currentid={id} />
    </main>
  );
}

export default VideoPlayer;
