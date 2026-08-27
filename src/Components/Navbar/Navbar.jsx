import "./Navbar.css"
import Searchbar from "../Searchbar/Searchbar"
import NavActions from "../NavActions/NavActions"
import Brandlogo from "../BrandLogo/Brandlogo"

export default function Navbar({searchValue,setSearchValue}) {
  return (
    <nav>
     <Brandlogo />
     <Searchbar  searchValue={searchValue} setSearchValue={setSearchValue} />
     <NavActions />
    </nav>
  )
}

