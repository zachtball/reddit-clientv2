import { Navigation } from '@zachtball/reddit-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '@zachtball/reddit-views';
import { AuthRedirect } from '@zachtball/reddit-components';
import './styles/main.scss';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <>
            <Route exact path="/auth-redirect">
              <AuthRedirect />
            </Route>
            <Navigation />
            <div className="app-container">
              <Route exact path="/">
                <Home />
              </Route>
            </div>
          </>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
