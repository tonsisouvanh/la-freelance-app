import { Route, Routes } from "react-router-dom";
import RootLayout from "./pages/RootLayout.js";
import {
  FreelanceSignupPage,
  PostProjectPage,
  HomePage,
  ProjectBoardPage,
  AboutPage,
  ChatPage,
  SigninPage,
  SignupPage,
  NotFoundPage,
  ProjectsPage,
  ProjectPage,
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
            fontFamily: "Noto Sans Lao",
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
            {/* Project */}
            {/* Freelancer & clients */}
            <Route path="/projects" element={<ProjectsPage />}></Route>
            <Route
              path="/projects/:category/:projectId"
              element={<ProjectPage />}
            ></Route>
            <Route
              path="/projects/:category"
              element={<ProjectsPage />}
            ></Route>

            {/* Private routes */}
            <Route element={<PrivateRoute />}>
              <Route
                path="/client/post-project"
                element={<PostProjectPage />}
              ></Route>
              <Route path="/chat" element={<ChatPage />}></Route>
              <Route
                path="/project-board"
                element={<ProjectBoardPage />}
              ></Route>
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
