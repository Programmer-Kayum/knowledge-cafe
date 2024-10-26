import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [addBook, setAddBook] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBook = [...addBook, blog];
    setAddBook(newBook);
  };

  const handleReadTime = (time) => {
    setReadTime(readTime + time);
  };

  return (
    <div className="lg:w-4/5 w-[95%] m-auto">
      <Header></Header>

      <div className="md:flex">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleReadTime={handleReadTime}
        ></Blogs>
        <Bookmarks addBook={addBook} readTime={readTime}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
