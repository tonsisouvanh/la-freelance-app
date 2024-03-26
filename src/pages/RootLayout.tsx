import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { useEffect, useState } from "react";
import Spinner from "../components/shared/Spinner";
const RootLayout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="absolute top-0 z-[-2] mt-[63px] h-screen w-full bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        {/* <MobileNavbar /> */}
      </div>
    </>
  );
};

export default RootLayout;
