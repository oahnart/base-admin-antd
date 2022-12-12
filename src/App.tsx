import "antd/dist/antd.css";
import { UrlInternal } from "common/constants/endpoints";
/** Untils */
import GlobalStyles from "common/style/GlobalStyle";
import Normalize from "common/style/Normalize";
import defaultTheme from "common/style/themes/default";
import React, { lazy } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  // Route,
  Switch,
} from "react-router-dom";
import { RootState } from "redux/reducer";
/** Router Global */
import { PublicRoute } from "router";
import { ThemeProvider } from "styled-components";
import Template from "templates";

/** Page */
const Test = lazy(() => import("pages/Test"));
const Home = lazy(() => import("pages/Home"));
const Login = lazy(() => import("pages/Login"));

const App: React.FC = () => {
  let acToken = useSelector((state: RootState) => state.userSlice.acToken);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Normalize />
      <GlobalStyles />
      <Router>
        {acToken ? (
          <Template>
            <Switch>
              {(window.location.pathname === UrlInternal.LOGIN ||
                window.location.pathname === "/") && (
                <Redirect
                  exact
                  from={UrlInternal.LOGIN}
                  to={UrlInternal.HOME}
                />
              )}
              <PublicRoute exact path="/test" component={Test} />

              <PublicRoute exact path={UrlInternal.HOME} component={Home} />

              {/* <PublicRoute exact path={"*"} component={PageNotFound} /> */}
            </Switch>
          </Template>
        ) : (
          <Switch>
            <Redirect exact from="/" to={UrlInternal.LOGIN} />
            <PublicRoute path={UrlInternal.LOGIN} component={Login} />
          </Switch>
        )}
      </Router>
    </ThemeProvider>
  );
};

export default App;
