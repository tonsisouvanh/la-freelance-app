import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
const RootLayout = () => {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <main className="h-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
