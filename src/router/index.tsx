/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2022-02-19 15:25:35
 * @modify date 2022-02-19 15:25:35
 * @desc [description]
 */

import { UrlInternal } from "common/constants/endpoints";
import React, { useEffect } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
/** Local Data */
import { getLocalStorage } from "utils/localStorage";
import { GETME } from "utils/localStorage/type";

export function PublicRoute({
  component: TargetPage,
  ...rest
}: any): React.ReactElement {
  return <Route {...rest} render={(props: any) => <TargetPage {...props} />} />;
}

export function PrivateRoute({
  component: TargetPage,
  isAuthenticated,
  ...rest
}: any): React.ReactElement {
  const history = useHistory();
  // console.log(TargetPage, 'TargetPage');
  // console.log(isAuthenticated, 'isAuthenticated');

  useEffect(() => {
    if (!getLocalStorage(GETME, 0))
      history.push(UrlInternal.LOGIN, { fromURL: history.location.pathname });
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        getLocalStorage(GETME, 0) !== null ? (
          <TargetPage {...props} />
        ) : (
          <Redirect
            to={{
              pathname: UrlInternal.LOGIN,
              state: { fromURL: props?.location?.pathname },
            }}
          />
        )
      }
    />
  );
}
