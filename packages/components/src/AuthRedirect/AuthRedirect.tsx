import { useEffect, useState, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMe, getToken } from '@zachtball/reddit-api';
import { setUser } from '@zachtball/reddit-redux';
import { IUser } from '@zachtball/reddit-types';

interface AuthRedirectProps {
  setAuthenticated: (arg: boolean) => void;
  setLoading: (arg: boolean) => void;
  authenticated: boolean;
}

export default ({ setAuthenticated, setLoading, authenticated }: AuthRedirectProps): ReactElement => {
  const dispatch = useDispatch();
  const [token, setToken] = useState<null | string>(null);
  const history = useHistory();
  const codeParam = new URLSearchParams(window.location.href).get('code');
  useEffect(() => {
    if (authenticated) {
      history.push('/');
    }
    setLoading(true);
    if (codeParam) {
      getToken(codeParam)
        .then((res) => {
          localStorage.setItem('REDDIT_TOKEN', res.data);
          setToken(res.data);
        })
        .catch((err: unknown) => {
          console.log('error authenticating', err);
          setLoading(false);
          history.push('/login');
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
          setLoading(false);
          history.push('/');
        })
        .catch((err: unknown) => console.log(err));
    }
  }, [token]);

  return <>THIS IS AUTH REDIRECT</>;
};
