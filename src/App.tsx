import "./App.css";

import Editor from "./components/Editor";
import Review from "./components/Review";

// A simple code reviwer app
// we will have a two column layout
// where we can write code
// AI will give review on our code => PR review

function App() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <Editor />
      <Review />
    </div>
  );
}

export default App;
