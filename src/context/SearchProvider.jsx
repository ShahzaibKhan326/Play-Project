import { useState } from "react";
import searchContext from "./SearchContext";

function SearchProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <searchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </searchContext.Provider>
  );
}

export default SearchProvider;