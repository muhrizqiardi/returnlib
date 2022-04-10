import _ from "lodash";
import { useState, createContext, useEffect } from "react";
import { BOOKS, REGEX } from "../constants";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [isError, setIsError] = useState();
  const [code, setCode] = useState({
    penerbit: null,
    genre: null,
    year: null,
    book: null,
  });
  const [bookIsFound, setBookIsFound] = useState();
  const [bookIsReturned, setBookIsReturned] = useState(false);
  const [bookData, setBookData] = useState();
  const [searchButtonIsClicked, setSearchButtonIsClicked] = useState(false);

  const handleSearch = () => {
    setBookIsFound(false)
    setBookData({});
    const foundBookData = _.find(BOOKS, {
      bookCode: `${code.penerbit}-${code.genre}-${code.year}-${code.book}`,
    });
    if (foundBookData) {
      setBookIsFound(true);
      setBookData(foundBookData);
    }
  };

  useEffect(() => {
    setIsError(
      !(
        REGEX.PENERBIT.test(code.penerbit) &&
        REGEX.GENRE.test(code.genre) &&
        REGEX.YEAR.test(code.year) &&
        REGEX.BOOK_ID.test(code.book)
      )
    );
  }, [code]);

  return (
    <AppContext.Provider
      value={{
        code,
        setCode,
        isError,
        bookIsReturned,
        setBookIsReturned,
        bookIsFound,
        setBookIsFound,
        bookData,
        handleSearch,
        searchButtonIsClicked,
        setSearchButtonIsClicked,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
