import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Header from "./pages/header";
import BoardWrite from "./pages/boardpage/BoardWrite";
import BoardShow from "./pages/boardpage/BoardShow";
const GlobalStyle = createGlobalStyle`
body {
  background: #e5e5e5;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;

  padding: 500px 0;
}
`;
function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <BoardShow />
                </>
              }
            ></Route>
            <Route
              path="/BoardWrite"
              element={
                <>
                  <BoardWrite />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
