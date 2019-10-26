import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import "./styles/App.css";
import "./styles/typography.css";

import Wrap from "./layout/Layout";
import SplashPage from "./pages/SplashPage";
import HomePage from "./pages/HomePage";
import SchedulePage from "./pages/SchedulePage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import TabNavigator from "./components/TabNavigator";

function App() {
  return (
    <Wrap>
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/appointments" component={SchedulePage} />
        <Route exact path="/chat" component={ChatPage} />
        <Route exact path="/account" component={ProfilePage} />
      </Switch>
      <TabNavigator />
    </Wrap>
  );
}

export default App;
