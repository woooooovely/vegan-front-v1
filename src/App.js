import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Header from "./pages/header";
import BoardWrite from "./pages/boardpage/BoardWrite";
const GlobalStyle = createGlobalStyle`
body {
  background: #e5e5e5;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
}
`;
function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
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
