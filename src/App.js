import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";
import Room from "./components/Room";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  justify-content:center;
  background-color: ${({ theme }) => theme.bg};
  ${'' /* border:2px solid red; */}
  width:100%;
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home type="random"/>} />
                  <Route path="trends" element={<Home type="trend"/>} />
                  <Route path="subscriptions" element={<Home type="sub"/>} />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="video">
                  <Route path=":id" element={<Video />} />
                  </Route>
                  <Route path="/room/:roomId" element={<Room/>}/>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
