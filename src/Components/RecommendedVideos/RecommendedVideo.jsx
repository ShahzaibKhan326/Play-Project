import "./RecommendedVideo.css";

import { Link } from "react-router-dom";

import oliviaAvatar from "../../assets/Avatars/oliviaAvatar.jpg";
import Avatar from "../Avatar/Avatar";

function RecommendedVideo({ video }) {
  return (
    <Link
      to={`/watch/${video.id}`}
      className="recommended-video"
    >

      <img
        className="recommended-thumbnail"
        src={`${video.thumbnail}${video.id}.jpg`}
        alt={video.title}
      />

      <div className="recommended-content">

        <h3>{video.title}</h3>

        <div className="recommended-channel">

          <Avatar source={oliviaAvatar} />

          <div>
            <p>{video.channel}</p>

            <div className="recommended-meta">
              <span>{video.views}</span>
              <span>•</span>
              <span>{video.time}</span>
            </div>
          </div>

        </div>

      </div>

    </Link>
  );
}

export default RecommendedVideo;