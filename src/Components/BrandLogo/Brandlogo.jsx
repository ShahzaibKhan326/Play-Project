import brandLogo from "../../assets/BrandLogo/Logo.png";
import "./Brandlogo.css";

import { useNavigate } from "react-router-dom";

function Brandlogo() {
  const navigate = useNavigate();

  return (
    <img
      src={brandLogo}
      alt="Logo"
      className="brand-logo"
      onClick={() => navigate("/")}
    />
  );
}

export default Brandlogo;