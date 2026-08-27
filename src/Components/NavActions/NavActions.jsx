import "./NavActions.css"
import { MoreOutlined } from "@ant-design/icons"
import Button from "../Button/Button"
import ButtonContainer from "../Button/ButtonContainer"

function NavActions() {
  return (
    <div className="navigation-actions">
      <MoreOutlined className="more-menu"/>
      <Button text="Log in" size="large" type="text-btn" color="white" />
      <Button text="Sign up" size="large" type="primary-btn" className="signup-btn" />
      {/* <Button text="Save" size="large" type="primary-btn" className="save-btn" /> */}
      {/* <Button text="Select Files" size="large" type="primary-btn" className="selectfiles-btn" /> */}
      {/* <Button text="Follow" size="large" type="primary-btn" className="selectfiles-btn" icon={true}/> */}
    </div>
  )
}

export default NavActions