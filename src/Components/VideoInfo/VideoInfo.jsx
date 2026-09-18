import "./VideoInfo.css";

import {
  MoreOutlined,
  LikeOutlined,
  DislikeOutlined,
  FolderAddFilled,
} from "@ant-design/icons";

import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import oliviaAvatar from "../../assets/Avatars/oliviaAvatar.jpg";

function VideoInfo({ video }) {
  return (
    <section className="video-info">

      {/* Row 1 */}
      <div className="video-info-row first-row">

        <div className="video-info-column">

          <h1>{video.title}</h1>

          <div className="video-meta">
            <span>{video.views}</span>
            <span>•</span>
            <span>{video.time}</span>
          </div>

        </div>

        <div className="video-actions">

          <div className="like-dislike-btn-container">
            <LikeOutlined className="like-icon-btn" />
            <span>9</span>
            <DislikeOutlined className="dislike-icon-btn"/>
            <span>1</span>
          </div>

            
            <Button text="Save" size="large" icon={<FolderAddFilled />} className="center-layout"/>

            <MoreOutlined />

        </div>

      </div>


      {/* Row 2 */}
      <div className="video-info-row second-row">

        <div className="channel-info">

          <Avatar source={oliviaAvatar} />

          <div className="channel-details">
            <h3>{video.channel}</h3>
            <p>25K followers</p>
          </div>

        </div>

          
          <Button text="follow" icon type="primary-btn" size="large" color="white"/>

      </div>


      {/* Row 3 */}
      <div className="video-description">

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Illo, facere? Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>

      </div>

    </section>
  );
}

export default VideoInfo;
/*

video info layout  

flex direction vertical 
border-radius 16px;
1px border 
padding:24px;
gap:16px;

3 Rows Total 

first Row Column one         
video title                 
views - time

first Row column two  
like-dislike-btn-container[icons+like icon+ dislike] + [Icon + Save ] + 3-dot-icon


Second Row column one 
profile channel 
        number +followers    

Second Row colomn two 
icon + Follow 
Border-bottom

third row 
paragaraghe one line 





*/