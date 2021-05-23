import { ReactElement, useEffect, useRef } from 'react';
import { Navigation } from '@zachtball/reddit-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '@zachtball/reddit-views';
import { AuthRedirect } from '@zachtball/reddit-components';
import { httpInit } from '@zachtball/reddit-api';
import { makeStyles } from '@material-ui/core';
import {
  useSelector,
  setAuthenticated,
  useDispatch,
  setAuthenticationLoading,
  setToken,
} from '@zachtball/reddit-redux';
import './styles/main.scss';

const useStyles = makeStyles((theme) => ({
  appContainer: {
    backgroundColor: theme.palette.primary.light,
  },
}));

const App = (): ReactElement => {
  const { current: storageToken } = useRef(localStorage.getItem('REDDIT_TOKEN'));
  const dispatch = useDispatch();
  const { isLoading: authLoading } = useSelector(({ auth }) => auth);
  const classes = useStyles();

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
                <div className={`app-container ${classes.appContainer}`}>
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
