import BookItem from "../components/BookItem";
import CodeInput from "../components/CodeInput";
import ErrorMessage from "../components/ErrorMessage";
import ReturnBookButton from "../components/ReturnBookButton";
import ReturnBookSucceedMessage from "../components/ReturnBookSucceedMessage";
import ReturnlibLogo from "../components/ReturnlibLogo";
import SearchButton from "../components/SearchButton";
import AppContextProvider from "../contexts/AppContext";

export default function Home() {
  return (
    <AppContextProvider>
      <div className="flex flex-col items-center justify-start">
        <div className="w-[512px] my-36 flex flex-col items-center gap-12">
          <ReturnlibLogo />
          {true && (
            <>
              <CodeInput />
              <ErrorMessage />
              <SearchButton />
            </>
          )}
          {false && (
            <>
              <CodeInput />
              <ErrorMessage />
              <SearchButton />
              <BookItem />
              <ReturnBookButton />
            </>
          )}
        </div>
      </div>
    </AppContextProvider>
  );
}
