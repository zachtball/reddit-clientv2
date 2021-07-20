import { ReactElement } from 'react';
import { useSelector, useGetMyQuery, useGetContentQuery } from '@zachtball/reddit-redux';
import { Post } from '@zachtball/reddit-components';
import { IPost } from '@zachtball/reddit-types';

export const Home = (): ReactElement | null => {
  const authenticated = useSelector(({ auth }) => auth.authenticated);
  const { data: content, isLoading } = useGetContentQuery('best', { skip: !authenticated });

  const { data, error } = useGetMyQuery('me', { skip: !authenticated });
  console.log({ data, error });
  return !isLoading ? (
    <div>
      {content.map((postProps: IPost) => (
        <Post {...postProps} key={postProps.id} />
      ))}
    </div>
  ) : null;
};

export default Home;
