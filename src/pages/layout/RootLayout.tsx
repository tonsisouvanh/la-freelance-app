import { Outlet, useMatch } from "react-router-dom";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
const RootLayout = () => {
  const isMatch = useMatch("/chat/:chatId");
  return (
    <>
      {/* <div className="absolute top-0 z-[-2] max-md:mt-0 mt-[63px] h-screen w-full bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"> */}
      <div className="absolute top-0 z-[-2] max-md:mt-0 mt-[63px] h-screen w-full bg-white">
        <Navbar />
        <main className={`${isMatch ? "max-sm:pb-0" : "max-sm:pb-24"} `}>
          <Outlet />
        </main>
        <Footer className="max-sm:hidden" />
      </div>
    </>
  );
};

export default RootLayout;
