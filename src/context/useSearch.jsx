import { useContext } from "react";
import searchContext from "./SearchContext";

function useSearch() {
  return useContext(searchContext);
}

export default useSearch;