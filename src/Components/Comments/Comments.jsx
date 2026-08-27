import "./Comments.css";

import Avatar from "../Avatar/Avatar";
import oliviaAvatar from "../../assets/Avatars/oliviaAvatar.jpg";

function Comments() {
  return (
    <section className="comments">

      <div className="comments-header">
        <h2>Comments</h2>
        <span>12</span>
      </div>

      <div className="comment-input">

        <Avatar source={oliviaAvatar} />

        <input
          type="text"
          placeholder="Add a comment..."
        />

      </div>

      <div className="comment-list">

        <article className="comment">

          <Avatar source={oliviaAvatar} />

          <div className="comment-content">

            <div className="comment-author">
              <h3>Olivia</h3>
              <span>2 days ago</span>
            </div>

            <p>
              This is a great video. Thanks for sharing!
            </p>

          </div>

        </article>

      </div>

    </section>
  );
}

export default Comments;