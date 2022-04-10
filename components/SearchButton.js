import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
function SearchButton(props) {
  const { handleSearch, setSearchButtonIsClicked, bookIsFound } =
    useContext(AppContext);
  return !bookIsFound ? (
    <button
      onClick={() => {
        setSearchButtonIsClicked(true);
        handleSearch();
      }}
      className="w-min transform hover:scale-90 transition-transform duration-300"
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="64" height="64" rx="32" fill="black" />
        <path
          d="M28.5 42.5C31.6062 42.4994 34.6229 41.4595 37.0698 39.546L44.7627 47.239L47.2373 44.7645L39.5443 37.0715C41.4588 34.6244 42.4993 31.607 42.5 28.5C42.5 20.7808 36.2192 14.5 28.5 14.5C20.7808 14.5 14.5 20.7808 14.5 28.5C14.5 36.2193 20.7808 42.5 28.5 42.5ZM28.5 18C34.2908 18 39 22.7093 39 28.5C39 34.2908 34.2908 39 28.5 39C22.7092 39 18 34.2908 18 28.5C18 22.7093 22.7092 18 28.5 18Z"
          fill="white"
        />
      </svg>
    </button>
  ) : (
    <></>
  );
}
export default SearchButton;
