import BookItem from "../components/BookItem";
import CodeInput from "../components/CodeInput";
import ErrorMessage from "../components/ErrorMessage";
import ReturnBookButton from "../components/ReturnBookButton";
import ReturnBookSucceedMessage from "../components/ReturnBookSucceedMessage";
import ReturnlibLogo from "../components/ReturnlibLogo";
import SearchButton from "../components/SearchButton";
import AppContextProvider from "../contexts/AppContext";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Home() {
  const { bookIsReturned } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="w-[512px] my-36 flex flex-col items-center gap-12">
        <ReturnlibLogo />
        {!bookIsReturned ? (
          <>
            <CodeInput />
            <ErrorMessage />
            <SearchButton />
            <BookItem />
            <ReturnBookButton />
          </>
        ) : (
          <ReturnBookSucceedMessage />
        )}
      </div>
    </div>
  );
}
