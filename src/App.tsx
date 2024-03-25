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
} from "./pages/index";
import { ConfigProvider } from "antd";
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
          <Route element={<RootLayout />}>
            <Route index path="/" element={<HomePage />}></Route>
            {/* Work */}
            {/* Freelancer & clients */}
            <Route path="/works" element={<WorksPage />}></Route>
            <Route path="/works/:category" element={<WorksPage />}></Route>
            <Route path="/work-board" element={<WorkBoardPage />}></Route>
            {/* Freelancer */}
            <Route
              path="/freelance/signup"
              element={<FreelanceSignupPage />}
            ></Route>

            {/*  */}
            {/* Client */}
            <Route path="/client/post-work" element={<PostWorkPage />}></Route>

            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/chat" element={<ChatPage />}></Route>
          </Route>
        </Routes>
      </ConfigProvider>
    </>
  );
}

export default App;
