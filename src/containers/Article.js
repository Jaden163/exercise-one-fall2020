import React from "react";

import { useParams } from "react-router-dom";

function Article() {
  let { id } = useParams();
  return (
    <section>
      <h1>Article</h1>
      <p>{id}</p>
    </section>
  );
}

export default Article;
