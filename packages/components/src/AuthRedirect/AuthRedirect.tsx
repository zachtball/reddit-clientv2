import { useEffect, useState, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { getMe, getToken, httpInit } from '@zachtball/reddit-api';
import { setUser, setAuthenticated, setAuthenticationLoading, useDispatch, useSelector } from '@zachtball/reddit-redux';
import type { IUser } from '@zachtball/reddit-types';

export default (): ReactElement => {
  const dispatch = useDispatch();
  const authenticated = useSelector(({ authentication }) => authentication.authenticated);
  const [token, setToken] = useState<null | string>(null);
  const history = useHistory();
  const url = window.location.href.substring(0, window.location.href.length - 2);

  useEffect(() => {
    if (authenticated) {
      history.push('/');
    }
    dispatch(setAuthenticationLoading(true));
    const codeParam = new URLSearchParams(url).get('code');
    if (codeParam) {
      getToken(codeParam)
        .then((res) => {
          httpInit(res.data);
          localStorage.setItem('REDDIT_TOKEN', res.data);
          setToken(res.data);
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
      getMe()
        .then(({ data }: { data: IUser }) => {
          dispatch(setUser(data));
          dispatch(setAuthenticationLoading(false));
          history.push('/');
        })
        .catch((err: unknown) => console.log(err));
    }
  }, [token]);

  return <>THIS IS AUTH REDIRECT</>;
};
