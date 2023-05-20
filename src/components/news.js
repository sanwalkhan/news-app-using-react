import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d8ab0b9c2f934b7b904f5e040ee795ff&&page=${currentPage}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalPages(Math.ceil(parsedData.totalResults / props.pageSize));
    setLoading(false);
    props.setProgress(100);
  };

  const handleNextClick = () => {
    setCurrentPage((page) => page + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevClick = () => {
    setCurrentPage((page) => page - 1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - News-World`;
    updateNews();
    // eslint-disable-next-line
  }, [currentPage]);

  return (
    <>
      <h2
        className={`text-center text-${
          props.mode === "dark" ? "white" : "dark"
        }`}
        style={{ margin: "40px 0px", marginTop: "90px" }}
      >
        News-World - Top {capitalizeFirstLetter(props.category)} Headlines
      </h2>

      {loading && <Spinner />}

      <div className="container">
        <div className="row">
        {articles && articles.length > 0 && articles.map((e) => {

            return (
              <div className="col-md-4" key={e.url}>
                <NewsItem
                  key={e.url}
                  newsURL={e.url}
                  title={e ? e.title : "News-World"}
                  description={
                    e
                      ? e.description
                      : "Hello World This is Sanwal Khan. A Beginner MernStack Developer. I'm From Pakistan . Thanks "
                  }
                  imgURL={e.urlToImage}
                  author={e.author}
                  date={e.publishedAt}
                  source={e.source.name}
                  mode={props.mode}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center">
          <nav>
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <button className={`btn bg-${ props.mode === "light" ? "dark" : "light"} text-${ props.mode === "dark" ? "dark" : "white"} page-link`} onClick={handlePrevClick}>
                  Previous
                </button>
              </li>
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button className={`btn bg-${ props.mode === "light" ? "dark" : "light"} text-${ props.mode === "dark" ? "dark" : "white"} page-link`}onClick={handleNextClick}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default News;

News.defaultProps = {
  country: "pakistan",
  pageSize: 9,
};

News.propTypes = {
  country
: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
