import { useEffect, useState, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { getToken, httpInit } from '@zachtball/reddit-api';
import {
  setAuthenticated,
  setAuthenticationLoading,
  useDispatch,
  useSelector,
  setToken,
} from '@zachtball/reddit-redux';

export default (): ReactElement => {
  const dispatch = useDispatch();
  const authenticated = useSelector(({ auth }) => auth.authenticated);
  const [token, setTokenState] = useState<null | string>(null);
  const history = useHistory();
  const url = window.location.href.substring(0, window.location.href.length - 2);
  console.log(authenticated);
  useEffect(() => {
    if (authenticated) {
      history.replace('/');
      return;
    }
    dispatch(setAuthenticationLoading(true));
    const codeParam = new URLSearchParams(url).get('code');
    if (codeParam) {
      getToken(codeParam)
        .then((res) => {
          httpInit(res.data);
          localStorage.setItem('REDDIT_TOKEN', res.data);
          setTokenState(res.data);
          dispatch(setToken(res.data));
        })
        .catch((err: unknown) => {
          console.log('error authenticating', err);
          dispatch(setAuthenticationLoading(false));
          history.push('/error');
        });
    }
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(setAuthenticated(true));
      dispatch(setAuthenticationLoading(false));
      history.push('/');
    }
  }, [token]);

  return <>THIS IS AUTH REDIRECT</>;
};
