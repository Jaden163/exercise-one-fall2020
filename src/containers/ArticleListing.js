import React from "react";

import ArticleCard from "../components/ArticleCard";

function ArticleListing() {
  return (
    <section>
      <header>
        <h1>Articles</h1>
        <ArticleCard />
      </header>
    </section>
  );
}

// export allows function to be used somewhere else
export default ArticleListing;
