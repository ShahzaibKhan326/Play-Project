import "./Video.css";

import oliviaAvatar from "../../assets/Avatars/oliviaAvatar.jpg";
import Avatar from "../Avatar/Avatar";


import { Link } from "react-router-dom";

function Video({ video }) {
  return (
    <Link to={`/watch/${video.id}`} className="video-card">
      <img
        src={`${video.thumbnail}${video.id}.jpg`}
        alt={video.title}
      />

      <div className="content">

        <div className="profile-and-text">
          <Avatar source={oliviaAvatar} className="tumbnail" />

          <div className="text">
            <h2>{video.title}</h2>
          </div>
        </div>

        <div className="video-state">

          <div className="views-uploadtime">
            <p>{video.views}</p>
            <p>.</p>
            <p>{video.time}</p>
          </div>

          <p>{video.channel}</p>

        </div>

      </div>
    </Link>
  );
}

export default Video;