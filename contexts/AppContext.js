import { useState, createContext } from "react";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [isError, setIsError] = useState();
  const [penerbitCode, setPenerbitCode] = useState("");
  const [genreCode, setGenreCode] = useState("");
  const [yearCode, setYearCode] = useState("");
  const [bookId, setBookId] = useState("");

  return (
    <AppContext.Provider
      value={{
        penerbitCode,
        setPenerbitCode,
        genreCode,
        setGenreCode,
        yearCode,
        setYearCode,
        bookId,
        setBookId,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
