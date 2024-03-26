import { Route, Routes } from "react-router-dom";
import RootLayout from "./pages/RootLayout.js";
import {
  FreelanceSignupPage,
  WorksPage,
  PostWorkPage,
  HomePage,
  WorkBoardPage,
  AboutPage,
  ChatPage,
  SigninPage,
  SignupPage,
  NotFoundPage,
} from "./pages/index";
import { ConfigProvider } from "antd";
import PrivateRoute from "./pages/PrivateRoute.js";
import MobileNavbar from "./components/shared/MobileNavbar.js";
function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Noto Sans",
            colorPrimary: "#1A96CB",
          },
        }}
      >
        <Routes>
          <Route path="/signin" element={<SigninPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route
            path="/freelancer/signup"
            element={<FreelanceSignupPage />}
          ></Route>

          <Route element={<RootLayout />}>
            <Route index path="/" element={<HomePage />}></Route>
            {/* Work */}
            {/* Freelancer & clients */}
            <Route path="/works" element={<WorksPage />}></Route>
            <Route path="/works/:category" element={<WorksPage />}></Route>

            {/* Private routes */}
            <Route element={<PrivateRoute />}>
              <Route
                path="/client/post-work"
                element={<PostWorkPage />}
              ></Route>
              <Route path="/chat" element={<ChatPage />}></Route>
              <Route path="/work-board" element={<WorkBoardPage />}></Route>
            </Route>

            {/* Freelancer */}

            {/* Client */}

            <Route path="/about" element={<AboutPage />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        <MobileNavbar />
      </ConfigProvider>
    </>
  );
}

export default App;
