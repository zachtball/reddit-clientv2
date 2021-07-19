import { ReactElement } from 'react';
import { useSelector, useGetMyQuery } from '@zachtball/reddit-redux';

export const Home = (): ReactElement => {
  const authenticated = useSelector(({ auth }) => auth.authenticated);

  const { data, error } = useGetMyQuery('me', { skip: !authenticated });
  console.log({ data, error });
  return <div>home</div>;
};

export default Home;
