import React from "react";

import { Link } from "react-router-dom";

import returnDate from "../containers/dateValues";

// passed down from another component (ArticleListing)
function ArticleCard({ articleData }) {
  return (
    <div className="ArticleCard">
      <div className="ArticleCardImage">
        <img src={articleData.image.url} alt={articleData.image.alt}></img>
      </div>
      <div className="ArticleText">
        <h2>{articleData.title}</h2>
        <p>{returnDate({ articleData })}</p>
        <p>{articleData.blurb}</p>
        <Link to={`/article/${articleData.id}`}> Read More </Link>
      </div>
    </div>
  );
}

export default ArticleCard;
