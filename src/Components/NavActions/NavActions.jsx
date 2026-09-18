import "./NavActions.css";
import { MoreOutlined } from "@ant-design/icons";
import Button from "../Button/Button";

function NavActions() {
  return (
    <div className="navigation-actions">
      <MoreOutlined className="more-menu" />

      <Button
        text="Log in"
        size="large"
        type="text-btn"
        color="white"
      />

      <Button
        text="Sign up"
        size="large"
        type="primary-btn"
        className="signup-btn"
      />
    </div>
  );
}

export default NavActions;