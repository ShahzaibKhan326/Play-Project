import "./PlayList.css";

import { LockFilled } from "@ant-design/icons";

function PlayList() {
  return (
    <section className="playlist-section">

      <article className="playlist-card">

        {/* Part 1 — Thumbnail */}
        <div className="playlist-thumbnail">

          <img
            src="https://placehold.co/549x280"
            alt="Playlist thumbnail"
          />

          <div className="playlist-overlay">

            <div className="playlist-meta-left">
              <span>12K views</span>
              <span>•</span>
              <span>2 hours ago</span>
            </div>

            <div className="playlist-meta-right">
              <LockFilled />
              <span>12 videos</span>
            </div>

          </div>

        </div>

        {/* Part 2 — Playlist Content */}
        <div className="playlist-content">

          <h2>My React Learning Playlist</h2>

          <p>
            Learn React from scratch with practical tutorials,
            projects, and useful concepts.
          </p>

        </div>

      </article>

    </section>
  );
}

export default PlayList;


/*

tweets  
box size , full width , height 72px / gap 12px / display flex
right-side profile pic rounded , size 48/48  

next to it content box full width 
small user name 
small tweet / comment
below it like and dislike button with their values

*/