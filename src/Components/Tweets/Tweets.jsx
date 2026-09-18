import "./Tweets.css";

import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

import Avatar from "../Avatar/Avatar";
import oliviaAvatar from "../../assets/Avatars/oliviaAvatar.jpg";

const tweets = [
  {
    id: 1,
    username: "Olivia",
    text: "Just finished building my first React project!",
    likes: 24,
    dislikes: 2,
  },
  {
    id: 2,
    username: "Olivia",
    text: "Learning React Router is getting easier now.",
    likes: 18,
    dislikes: 1,
  },
  {
    id: 3,
    username: "Olivia",
    text: "Working on a new frontend project today.",
    likes: 32,
    dislikes: 3,
  },
  {
    id: 4,
    username: "Olivia",
    text: "Finally understood nested routes!",
    likes: 15,
    dislikes: 1,
  },
];

function Tweets() {
  return (
    <section className="tweets-section">

      {tweets.map((tweet) => (
        <article className="tweet" key={tweet.id}>

          <Avatar source={oliviaAvatar} />

          <div className="tweet-content">

            <div className="tweet-text">
              <h3>{tweet.username}</h3>
              <p>{tweet.text}</p>
            </div>

            <div className="tweet-actions">

              <button>
                <LikeOutlined />
                <span>{tweet.likes}</span>
              </button>

              <button>
                <DislikeOutlined />
                <span>{tweet.dislikes}</span>
              </button>

            </div>

          </div>

        </article>
      ))}

    </section>
  );
}

export default Tweets;