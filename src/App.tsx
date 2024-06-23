import { Route, Routes } from "react-router-dom";
import RootLayout from "./pages/layout/RootLayout.js";
import {
  FreelanceSignupPage,
  PostProjectPage,
  HomePage,
  ProjectBoardPage,
  AboutPage,
  SigninPage,
  SignupPage,
  NotFoundPage,
  ProjectsPage,
  ProjectPage,
  GuestProfilePage,
  AllChatPage,
  ChatPage,
  ClientProfilePage,
} from "./pages/index";
import { ConfigProvider } from "antd";
import PrivateRoute from "./pages/layout/PrivateRoute.js";
import MobileNavbar from "./components/layouts/MobileNavbar.js";
import ScrollToTop from "./components/shared/ScrollToTop.js";
import Spinner from "./components/shared/Spinner.js";
import { Suspense } from "react";
function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Noto Sans Lao",
            colorPrimary: "#00A6ED",
          },
        }}
      >
        <ScrollToTop />
        <Routes>
          <Route
            path="/signin"
            element={
              <Suspense fallback={<Spinner />}>
                <SigninPage />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense fallback={<Spinner />}>
                <SignupPage />
              </Suspense>
            }
          />
          <Route
            path="/freelancer/signup"
            element={
              <Suspense fallback={<Spinner />}>
                <FreelanceSignupPage />
              </Suspense>
            }
          />

          <Route element={<RootLayout />}>
            <Route
              index
              path="/"
              element={
                <Suspense fallback={<Spinner />}>
                  <HomePage />
                </Suspense>
              }
            />

            {/* Project */}
            {/* Freelancer & clients */}
            <Route
              path="/projects"
              element={
                <Suspense fallback={<Spinner />}>
                  <ProjectsPage />
                </Suspense>
              }
            />
            <Route
              path="/projects/:category/:projectId"
              element={
                <Suspense fallback={<Spinner />}>
                  <ProjectPage />
                </Suspense>
              }
            />
            <Route
              path="/projects/:category"
              element={
                <Suspense fallback={<Spinner />}>
                  <ProjectsPage />
                </Suspense>
              }
            />

            {/* Private routes */}
            <Route element={<PrivateRoute />}>
              <Route
                path="/client/post-project"
                element={
                  <Suspense fallback={<Spinner />}>
                    <PostProjectPage />
                  </Suspense>
                }
              />
              <Route
                path="/chat-list"
                element={
                  <Suspense fallback={<Spinner />}>
                    <AllChatPage />
                  </Suspense>
                }
              />
              <Route
                path="/chat/:chatId"
                element={
                  <Suspense fallback={<Spinner />}>
                    <ChatPage />
                  </Suspense>
                }
              />
              <Route
                path="/project-board"
                element={
                  <Suspense fallback={<Spinner />}>
                    <ProjectBoardPage />
                  </Suspense>
                }
              />
              <Route
                path="/client/profile"
                element={
                  <Suspense fallback={<Spinner />}>
                    <ClientProfilePage />
                  </Suspense>
                }
              />
            </Route>

            {/* Public */}
            <Route
              path="/profile/view-as-guest"
              element={
                <Suspense fallback={<Spinner />}>
                  <GuestProfilePage />
                </Suspense>
              }
            />
            {/* Freelancer */}

            {/* Client */}

            <Route
              path="/about"
              element={
                <Suspense fallback={<Spinner />}>
                  <AboutPage />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="*"
            element={
              <Suspense fallback={<Spinner />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Routes>
        <MobileNavbar />
      </ConfigProvider>
    </>
  );
}

export default App;
