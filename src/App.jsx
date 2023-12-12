import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Shared/Navbars/Navbar";
import Footer from "./Shared/Footer/Footer";

function App() {
  return (
    <>
      <div className="max-w-6xl mx-auto bg-slate-800">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
