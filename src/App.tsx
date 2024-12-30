import "./App.css";

function App() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <div className="flex flex-row h-full w-full bg-black justify-center content-center">
        <div className="self-center">
          <h1 className="text-8xl">Let us build a Code Reviewer</h1>
          <a
            href="https://youtube.com/devtoolstech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-6xl text-green-300 hover:text-green-500 hover:underline"
          >
            Subscribe to youtube.com/devtoolstech
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
