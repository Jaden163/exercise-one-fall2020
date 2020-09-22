import React from "react";

import ArticleCard from "../components/ArticleCard";
import Data from "../components/data";

function ArticleListing() {
  // props = sends data through the flow of the compoinents...
  return (
    <main className="ArticleListing">
      <header>
        <h1>Articles</h1>
      </header>
      {Data.map((article, i) => (
        <ArticleCard key={i} articleData={article} /> // unique key for each article component
      ))}
    </main>
  );
}

// export allows function to be used somewhere else
export default ArticleListing;
