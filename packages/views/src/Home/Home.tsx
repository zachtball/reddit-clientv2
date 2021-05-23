import { ReactElement } from 'react';
import { useGetMyQuery } from '@zachtball/reddit-api';
import { useSelector } from '@zachtball/reddit-redux';

export const Home = (): ReactElement => {
  const authenticated = useSelector(({ auth }) => auth.authenticated);
  console.log(!authenticated);
  const { data, error } = useGetMyQuery('me', { skip: !authenticated });
  console.log({ data, error });
  return <div>home</div>;
};

export default Home;
