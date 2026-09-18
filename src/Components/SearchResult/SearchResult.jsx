import "./SearchResult.css";

import { Link } from "react-router-dom";

import oliviaAvatar from "../../assets/Avatars/oliviaAvatar.jpg";
import Avatar from "../Avatar/Avatar";

function SearchResult({ video }) {
  return (
    <section className="search-result">
      <Link to={`/watch/${video.id}`} className="card">
      
        <img
          src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
          alt={video.title}
          className="thumbnail"
        />

        <div className="content">
          <div className="title-view">
            <div className="text">
              <h2>{video.title}</h2>
            </div>

            <div className="views-uploadtime">
              <p>{video.views}</p>
              <p>•</p>
              <p>{video.time}</p>
            </div>
          </div>

          <div className="profile-supportive-text">
            <div className="profile-and-text">
              <Avatar source={oliviaAvatar} />
              <p>{video.channel}</p>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              facere?
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default SearchResult;
