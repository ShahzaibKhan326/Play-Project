import "./ProfileCard.css"
import Button from "../Button/Button"

function ProfileCard() {
  return (
    <article className='profile-card'>

    <div className="profile-detail">
       <img src="http://placehold.co/160x160" alt="Image not found" className="profile-image" />
       <div className="profile-detail-col">
        <h2>Profile-name</h2>
        <p>Profile-handle</p>
        <p>600k Subcribers . 220 Subscribed</p>
       </div>
    </div>

     <Button text="Follow" size="large" type="primary-btn" className="selectfiles-btn" icon={true}/>

    </article>

  )
}

export default ProfileCard