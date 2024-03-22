import { Route, Routes } from "react-router-dom";
import RootLayout from "./views/RootLayout.js";
import { Home, Signin, Signup, About, WorkBoard } from "./views/index";
import { ConfigProvider } from "antd";
import Chat from "./views/Chat.js";
import PostWork from "./views/PostWork.js";
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
            <Route path="/work-board" element={<WorkBoard />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/chat" element={<Chat />}></Route>
            <Route path="/post-word" element={<PostWork />}></Route>
          </Route>
        </Routes>
      </ConfigProvider>
    </>
  );
}

export default App;
