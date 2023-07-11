import React from "react";

function Home({ mode }) {
  return (
    <div className={`container bg-${mode}`}>
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
