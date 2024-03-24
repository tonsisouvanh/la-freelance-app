import { Route, Routes } from "react-router-dom";
import RootLayout from "./pages/RootLayout.js";
import { Home, Signin, Signup, About, WorkBoard } from "./pages/index";
import { ConfigProvider } from "antd";
import Chat from "./pages/ChatPage.js";
import PostWork from "./pages/PostWorkPage.js";
import WorksPage from "./pages/WorksPage.js";
import FreelanceRegisterPage from "./pages/FreelanceRegisterPage.js";
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
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route element={<RootLayout />}>
            <Route index path="/" element={<Home />}></Route>
            {/* Work */}
            {/* Freelancer & clients */}
            <Route path="/works" element={<WorksPage />}></Route>
            <Route path="/works/:category" element={<WorksPage />}></Route>
            <Route path="/work-board" element={<WorkBoard />}></Route>
            {/* Freelancer */}
            <Route
              path="/freelance/signup"
              element={<FreelanceRegisterPage />}
            ></Route>

            {/*  */}
            {/* Client */}
            <Route path="/client/post-work" element={<PostWork />}></Route>

            <Route path="/about" element={<About />}></Route>
            <Route path="/chat" element={<Chat />}></Route>
          </Route>
        </Routes>
      </ConfigProvider>
    </>
  );
}

export default App;
