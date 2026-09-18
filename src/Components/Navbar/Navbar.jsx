import "./Navbar.css"
import Searchbar from "../Searchbar/Searchbar"
import NavActions from "../NavActions/NavActions"
import Brandlogo from "../BrandLogo/Brandlogo"

export default function Navbar() {

  return (
    <nav>
     <Brandlogo />
     <Searchbar  />
     <NavActions />
    </nav>
  )
}

