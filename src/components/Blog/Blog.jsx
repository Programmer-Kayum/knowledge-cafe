import svg from "../../../assets/images/open-book.png";

const Blog = ({ blog, handleAddToBookmark, handleReadTime }) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="lg:mb-10 border-2 rounded-2xl mb-3 shadow-2xl">
      <div className="lg:m-2 m-3">
        <div>
          <img className="w-full rounded-2xl " src={cover} alt="" />
        </div>
        <div className="lg:p-5">
          <div className=" flex justify-between my-5">
            <div className="flex lg:gap-5 gap-2">
              <div>
                <img
                  className="lg:h-[60px] h-10 w-10 lg:w-[60px]"
                  src={author_img}
                  alt=""
                />
              </div>
              <div>
                <h2 className="lg:text-xl lg:font-bold font-semibold">
                  {author}
                </h2>
                <p>{posted_date}</p>
              </div>
            </div>
            <div className="lg:flex font-semibold">
              <div>
                <p>{reading_time}min</p>
              </div>
              <div className="lg:mx-5">
                <img
                  onClick={() => handleAddToBookmark(blog)}
                  className="h-5 w-5"
                  src={svg}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="lg:text-3xl lg:font-bold font-semibold lg:my-2">
              {title}
            </h2>
            {hashtags.map((hash, idx) => (
              <span key={idx}>
                <a href="">#{hash}</a>{" "}
              </span>
            ))}{" "}
            <br />
            <button
              onClick={() => handleReadTime(reading_time)}
              className="underline underline-offset-8 mb-2 "
            >
              mark as read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
