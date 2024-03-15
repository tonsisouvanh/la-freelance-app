import { Route, Routes } from "react-router-dom";
import RootLayout from "./views/RootLayout.js";
import { Home, Signin, Signup } from "./views/index";
function App() {
  return (
    <>
      <div className="h-screen">
        <Routes>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route element={<RootLayout />}>
            <Route index path="/" element={<Home />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
