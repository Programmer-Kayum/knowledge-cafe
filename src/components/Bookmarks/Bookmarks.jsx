import BookMark from "../BoodMark/BookMark";

const Bookmarks = ({ addBook, readTime }) => {
  return (
    <div>
      <div className=" w-full lg:mx-10 ">
        <div className="border-2 border-indigo-600 text-center lg:text-2xl rounded-xl shadow-2xl lg:font-bold font-semibold  lg:p-5 p-4">
          <h2>
            Spent time on Read: <span className="text-red-600">{readTime}</span>{" "}
            min
          </h2>
        </div>

        <div className="border-2 mt-10 border-indigo-600 text-center text-xl rounded-xl shadow-2xl font-bold p-5">
          <h2 className="mb-5 border-2 p-3">
            Book Marked Blogs:{" "}
            <span className="text-lime-400">{addBook.length}</span>
          </h2>
          {addBook.map((addBook) => (
            <BookMark key={addBook.id} addBook={addBook}></BookMark>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
