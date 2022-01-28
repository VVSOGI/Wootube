import "./App.css";
import SpinBox from "./pages/MainPage/components/SpinBox";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

  return (
    <div className="totalContainer">
      <MainPage />
    </div>
  );
}

export default App;
