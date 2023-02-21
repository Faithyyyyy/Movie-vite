import Sidebar from "./components/Sidebar";
import MainPage from "./components/MainPage";
import "./App.css";

function App() {
  return (
    <div className="flex relative min-h-screen font-barlow">
      <Sidebar />
      <MainPage />
    </div>
  );
}

export default App;
