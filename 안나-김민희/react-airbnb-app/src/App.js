import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Host } from "./pages/Host";
import { Wrapper } from "./pages/Wrapper";
import { Account } from "./pages/Account";
import { useRecoilState } from "recoil";
import { loginAtom } from "./recoil/atom";
import LoginModal from "./components/Home/atoms/LoginModal";
import styled from "styled-components";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomeWrapper />} />
      <Route path="account" element={<HomeAccount />} />
      <Route path="host" element={<Host />} />
      <Route path="*" element={<h1>NotFound</h1>} />
    </Routes>
  );
};

export default App;

const HomeWrapper = () => {
  return (
    <div>
      <Home />
      <Wrapper />
    </div>
  );
};

const HomeAccount = () => {
  const [login, setLogin] = useRecoilState(loginAtom);

  return login ? (
    <div>
      <Home />
      <Account />
    </div>
  ) : (
    <div>
      <Home />
      <LoginWrapper>
        <LoginModal />
      </LoginWrapper>
    </div>
  );
};

const LoginWrapper = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  width: 600px;
  margin-top: 100px;
  position: fixed;
  left: 35%;
  top: 15%;
`;
