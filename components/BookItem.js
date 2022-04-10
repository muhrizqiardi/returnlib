function BookItem(props) {
  return (
    <div className="grid grid-cols-3">
      <div className="">
        <img src="" alt="" className="w-[100px] h-[150px] bg-gray-100" />
      </div>
      <div className="flex flex-col col-span-2">
        <p className="mb-1 font-bold">Science-fiction</p>
        <p className="mb-4 text-3xl font-bold">Nineteen Eighty-four</p>
        <p className="mb-1">1949 • George Orwell</p>
        <p className="mb-1">Penerbit Gramedia Pustaka Utama</p>
      </div>
    </div>
  );
}
export default BookItem;
