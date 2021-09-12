import { ReactElement } from 'react';
import { useSelector, useGetContentQuery } from '@zachtball/reddit-redux';
import { Post } from '@zachtball/reddit-components';
import { IPost } from '@zachtball/reddit-types';

export const Home = (): ReactElement | null => {
  const authenticated = useSelector(({ auth }) => auth.authenticated);
  const { data: posts, isLoading, isError } = useGetContentQuery('best', { skip: !authenticated });
  console.log({ posts, isError });
  return !isLoading && authenticated && !isError ? (
    <div>
      {posts.map((postProps: IPost) => (
        <Post {...postProps} key={postProps.id} />
      ))}
    </div>
  ) : null;
};

export default Home;
