const BookMark = ({ addBook }) => {
  return (
    <div>
      <h2 className="border-2 my-2 p-2 shadow-lg rounded-lg">
        * {addBook.title}
      </h2>
    </div>
  );
};

export default BookMark;
