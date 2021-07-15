/** @jsxImportSource @emotion/react */
import { ReactElement, useEffect, useRef } from 'react';
import { Navigation } from '@zachtball/reddit-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '@zachtball/reddit-views';
import { AuthRedirect } from '@zachtball/reddit-components';
import { httpInit } from '@zachtball/reddit-api';
import { Theme } from '@material-ui/core/styles';
import { css } from '@emotion/react';

import {
  useSelector,
  setAuthenticated,
  useDispatch,
  setAuthenticationLoading,
  setToken,
} from '@zachtball/reddit-redux';
import './styles/main.scss';

const appContainerStyle = (theme: Theme) => css`
  background-color: ${theme.palette.primary.light};
  margin-top: 56px;
  @media only screen and (min-width: 600px) {
    margin-left: 300px;
    margin-top: 64px;
  }
  height: calc(100vh - 64px);
  overflow: auto;
`;

const App = (): ReactElement => {
  const { current: storageToken } = useRef(localStorage.getItem('REDDIT_TOKEN'));
  const dispatch = useDispatch();
  const { isLoading: authLoading } = useSelector(({ auth }) => auth);

  useEffect(() => {
    dispatch(setAuthenticationLoading(true));
    if (storageToken) {
      httpInit(storageToken);
      dispatch(setToken(storageToken));
      dispatch(setAuthenticated(true));
      dispatch(setAuthenticationLoading(false));
    } else {
      dispatch(setAuthenticated(false));
      dispatch(setAuthenticationLoading(false));
    }
  }, []);
  return (
    <Router>
      <div>
        <Switch>
          <>
            <Route exact path="/auth-redirect">
              <AuthRedirect />
            </Route>
            {!authLoading && (
              <>
                <Navigation />
                <div css={appContainerStyle}>
                  <Route exact path="/">
                    <Home />
                  </Route>
                </div>
              </>
            )}
          </>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
