import React from "react";
import Accordion from "./components/Accardion/Accordion";
import Rating from "./components/Rating/Rating";

function App() {
  return (
    <div>
      <PageTitle />
      Article 1
      <Rating value={1} />
      Article 2
      <Rating value={2} />
      Article 3
      <Rating value={3} />
      Article 4
      <Rating value={4} />
      Article 5
      <Rating value={5} />
      <Accordion title={'Menu'} />
      <Accordion title={'Users'} />
    </div>
  );
}

function PageTitle() {
  return <h1>This is App component</h1>;
}

export default App;
