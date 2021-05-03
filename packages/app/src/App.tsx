import { ReactElement, useEffect, useRef } from 'react';
import { Navigation } from '@zachtball/reddit-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '@zachtball/reddit-views';
import { AuthRedirect } from '@zachtball/reddit-components';
import { getMe, httpInit } from '@zachtball/reddit-api';
import { IUser } from '@zachtball/reddit-types';
import { useSelector, setAuthenticated, useDispatch, setUser, setAuthenticationLoading } from '@zachtball/reddit-redux';
import './styles/main.scss';

const App = (): ReactElement => {
  const { current: token } = useRef(localStorage.getItem('REDDIT_TOKEN'));
  const dispatch = useDispatch();
  const { isLoading: authLoading, authenticated } = useSelector(({ authentication }) => authentication);
  const userName = useSelector(({ user }) => user.name);
  useEffect(() => {
    if (token) {
      httpInit(token);
      if (!authenticated) {
        dispatch(setAuthenticationLoading(true));
        if (userName) {
          dispatch(setAuthenticated(true));
          dispatch(setAuthenticationLoading(false));
        } else {
          getMe()
            .then(({ data }: { data: IUser }) => {
              dispatch(setUser(data));
              dispatch(setAuthenticated(true));
              dispatch(setAuthenticationLoading(false));
            })
            .catch((err: unknown) => console.log(err));
        }
      }
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
                <div className="app-container">
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
