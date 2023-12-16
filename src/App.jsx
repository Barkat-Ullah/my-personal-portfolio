import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Shared/Navbars/Navbar";
import Footer from "./Shared/Footer/Footer";
import AnimatedCursor from "react-animated-cursor";
import ScrollToTop from "react-scroll-to-top";


function App() {
  return (
    <>
      <div className="max-w-6xl mx-auto bg-slate-800 overflow-x-hidden">
        <Navbar />
        <Outlet />
        <Footer />
        <AnimatedCursor
          // color="255 ,255 ,255"
          color="100, 150, 200"
          innerSize={8}
          outerSize={45}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={0.8}
        />

        <ScrollToTop smooth />
      </div>
    </>
  );
}

export default App;
