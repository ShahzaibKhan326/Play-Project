import "./ProfileVideos.css";

import Video from "../Video/Video";
import videos from "../Video/VideoData";

function ProfileVideos() {
  return (
    <section className="profile-videos">
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </section>
  );
}

export default ProfileVideos;