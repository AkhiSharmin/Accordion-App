import "./App.css";
import "./BackgroundAnimation.css"; // Add this line
import Questions from "./Component/Questions/Questions";

function App() {
  return (
    <div className="body-bg">
      <div className="background bubble">
        {" "}
        {/* Add the "bubble" class */}
        <div className="max-w-7xl mx-auto">
          <Questions />
        </div>
      </div>
    </div>
  );
}

export default App;
