import { Outlet, useLocation, useMatch } from "react-router-dom";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
const RootLayout = () => {
  const isMatch = useMatch("/chat/:chatId");
  const { pathname } = useLocation();
  const hiddenFooterRoute = [
    "/signin",
    "/signup",
    "/freelancer/signup",
    "/chat-list",
    "/chat/:chatId",
  ];
  return (
    <>
      <div className="h-screen w-full bg-white">
        <Navbar />
        <main className={`mt-20 ${isMatch ? "max-sm:pb-0" : "max-sm:pb-24"} `}>
          <Outlet />
        </main>
        {hiddenFooterRoute.includes(pathname) ? null : (
          <Footer className="max-sm:hidden" />
        )}
        {/* <Footer className="max-sm:hidden" /> */}
      </div>
    </>
  );
};

export default RootLayout;
