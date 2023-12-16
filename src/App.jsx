import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Shared/Navbars/Navbar";
import Footer from "./Shared/Footer/Footer";

import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <div className="max-w-6xl mx-auto bg-slate-800 overflow-x-hidden cursor-grab">
        <Navbar />
        <Outlet />
        <Footer />

        <ScrollToTop smooth />
      </div>
    </>
  );
}

export default App;
