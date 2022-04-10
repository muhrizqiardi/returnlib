import ReturnBookSucceedMessage from "../components/ReturnBookSucceedMessage";
import ReturnlibLogo from "../components/ReturnLibLogo";

function Success(props) {
  return (
    <>
      <div className="flex flex-col items-center justify-start">
        <div className="w-[512px] my-36 flex flex-col items-center gap-12">
          <ReturnlibLogo />
          <ReturnBookSucceedMessage />
        </div>
      </div>
    </>
  );
}
export default Success;
