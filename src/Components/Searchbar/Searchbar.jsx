import "./Searchbar.css";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

function Searchbar({ searchValue, setSearchValue }) {

  const navigate = useNavigate();

  function handleSearch(e) {
    const value = e.target.value;

    setSearchValue(value);

    if (value.trim()) {
      navigate("/search");
    } else {
      navigate("/");
    }
  }

  return (
    <div className="searchbar">

      <Input
        className="search-input"
        placeholder="Search"
        prefix={<SearchOutlined className="search-icon" />}
        value={searchValue}
        onChange={handleSearch}
      />

    </div>
  );
}

export default Searchbar