import React from "react";

const NewsItem = (props) => {
  let { title, description, imgURL, newsURL, author, date, source } = props;
  
  return (

    <div className="my-3">
      <div className={`card bg-${props.mode}`} >
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "85%", zIndex: "1" }}
        >
          {" "}
          {source}{" "}
        </span>

        <img
          src={
            !imgURL
              ? "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=127"
              : imgURL
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h6
            className={`card-title text-${
                props.mode === "dark" ? "white" : "dark"
            }`}
          >
            {title}...
          </h6>
          <p
            className={`card-text text-${
              props.mode === "dark" ? "white" : "dark"
            }`}
          >
            {description}...
          </p>
          <p className="card-text">
            <small className="text-danger">
              {" "}
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}{" "}
            </small>
          </p>
          <a className={`btn bg-${ props.mode === "light" ? "dark" : "light"} text-${ props.mode === "dark" ? "dark" : "white"}`} href={!newsURL?"https://www.bbc.com/news ": newsURL} rel="noopener noreferrer"  target="_blank">Read More</a>
           
        </div>
      </div>
    </div>
  );
};

export default NewsItem;