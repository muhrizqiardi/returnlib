import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function CodeInput() {
  const { code, setCode } = useContext(AppContext);

  return (
    <div className="p-6 flex items-center justify-center gap-2.5 font-mono text-4xl border border-transparent hover:border-gray-300 rounded-lg">
      <input
        type="text"
        name=""
        id=""
        placeholder="WWW"
        maxLength={3}
        value={code.penerbit}
        onChange={(event) =>
          setCode((prevCode) => ({ ...prevCode, penerbit: event.target.value }))
        }
        className="w-16 outline-none placeholder:font-mono placeholder:text-red-300 text-red-500 text-center border-b-2 border-transparent focus:border-gray-300"
      />
      <span className="pb-1.5 font-mono">-</span>
      <input
        type="text"
        name=""
        id=""
        placeholder="XXX"
        maxLength={3}
        value={code.genre}
        onChange={(event) =>
          setCode((prevCode) => ({ ...prevCode, genre: event.target.value }))
        }
        className="w-16 outline-none placeholder:font-mono placeholder:text-yellow-200 text-yellow-500 text-center border-b-2 border-transparent focus:border-gray-300"
      />
      <span className="pb-1.5 font-mono">-</span>
      <input
        type="text"
        name=""
        id=""
        placeholder="YYYY"
        maxLength={4}
        value={code.year}
        onChange={(event) =>
          setCode((prevCode) => ({ ...prevCode, year: event.target.value }))
        }
        className="w-24 outline-none placeholder:font-mono placeholder:text-green-300 text-green-500 text-center border-b-2 border-transparent focus:border-gray-300"
      />
      <span className="pb-1.5 font-mono">-</span>{" "}
      <input
        type="text"
        name=""
        id=""
        placeholder="ZZZ"
        maxLength={3}
        value={code.book}
        onChange={(event) =>
          setCode((prevCode) => ({ ...prevCode, book: event.target.value }))
        }
        className="w-16 outline-none placeholder:font-mono placeholder:text-blue-300 text-blue-500 text-center border-b-2 border-transparent focus:border-gray-300"
      />
    </div>
  );
}
export default CodeInput;
