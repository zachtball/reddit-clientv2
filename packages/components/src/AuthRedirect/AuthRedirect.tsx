import { useEffect, useState, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { getMe, getToken } from '@zachtball/reddit-api';
import { setUser, setAuthenticated, setAuthenticationLoading, useDispatch, useSelector } from '@zachtball/reddit-redux';
import type { IUser } from '@zachtball/reddit-types';

export default (): ReactElement => {
  const dispatch = useDispatch();
  const authenticated = useSelector(({ authenticated }) => authenticated.authenticated);
  const [token, setToken] = useState<null | string>(null);
  const history = useHistory();
  const codeParam = new URLSearchParams(window.location.href).get('code');
  useEffect(() => {
    if (authenticated) {
      history.push('/');
    }
    setAuthenticationLoading(true);
    if (codeParam) {
      getToken(codeParam)
        .then((res) => {
          localStorage.setItem('REDDIT_TOKEN', res.data);
          setToken(res.data);
        })
        .catch((err: unknown) => {
          console.log('error authenticating', err);
          setAuthenticationLoading(false);
          history.push('/error');
        });
    }
  }, []);

  useEffect(() => {
    if (token) {
      setAuthenticated(true);
      getMe()
        .then(({ data }: { data: IUser }) => {
          console.log(data);
          dispatch(setUser(data));
          setAuthenticationLoading(false);
          history.push('/');
        })
        .catch((err: unknown) => console.log(err));
    }
  }, [token]);

  return <>THIS IS AUTH REDIRECT</>;
};
