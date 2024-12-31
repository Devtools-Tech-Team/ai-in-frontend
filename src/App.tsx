import { useState } from "react";

import "./App.css";

import Editor from "./components/Editor";
import Review from "./components/Review";

// A simple code reviwer app
// we will have a two column layout
// where we can write code
// AI will give review on our code => PR review

function App() {
  const [code, setCode] = useState("Hello World");
  const [review, setReview] = useState("# Review would be here");

  const onChange = (value: string) => setCode(value);

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <Editor code={code} onChange={onChange} />
      <Review review={review} />
    </div>
  );
}

export default App;
