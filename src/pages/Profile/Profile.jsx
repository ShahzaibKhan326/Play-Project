import "./Profile.css"
import { useNavigate , NavLink , Outlet} from "react-router-dom"

import ProfileCard from "../../Components/ProfileCard/ProfileCard"

function Profile() {

  const navigate = useNavigate()

  return (
    <>
    <section className="profile-section">

    <div className="cover-img">

    </div>
 
  
    <div className="profile-details">
        <ProfileCard />
    </div>

     <div className="profile-tabs">
      <NavLink end to="/profile" className={({isActive}) => isActive ? "active" : "profile-links"} >Videos</NavLink>
      <NavLink end to="/profile/playlist" className={({isActive}) => isActive ? "active" : "profile-links"} >Playlist</NavLink>
      <NavLink end to="/profile/tweets" className={({isActive}) => isActive ? "active" : "profile-links"} >Tweets</NavLink>
      <NavLink end to="/profile/following" className={({isActive}) => isActive ? "active" : "profile-links"} >Following</NavLink>
   
    </div>

    <div className="profile-tab-empty-state">
      <Outlet/>
    </div>

    </section>

    </>
  )
}

export default Profile