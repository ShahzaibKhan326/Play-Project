import "./Avatar.css"

function Avatar({source})
{
return(
  <div className="avatar-container">
    <img src={source} alt="Image Not Found"/>
  </div>
)
}

export default Avatar