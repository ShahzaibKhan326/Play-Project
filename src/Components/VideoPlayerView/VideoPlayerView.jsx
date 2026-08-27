import { PlayCircleFilled } from "@ant-design/icons";
import { Progress } from "antd";
import { Play } from "lucide-react";

import "./VideoPlayerView.css";

function VideoPlayerView({ video }) {
  return (
    <div className="video-player-view">

      <img
        className="video-player-thumbnail"
        src={`${video.thumbnail}${video.id}.jpg`}
        alt={video.title}
      />

      {/* Center play */}
      <Play className="main-play-icon" />

      {/* Bottom controls */}
      <div className="player-controls">

        <PlayCircleFilled className="control-play-icon" />

        <Progress
          percent={40}
          showInfo={false}
          size="small"
          className="player-progress"
        />

      </div>

    </div>
  );
}

export default VideoPlayerView;