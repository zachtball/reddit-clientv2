import { ReactElement } from 'react';
import { useSelector, useGetContentQuery } from '@zachtball/reddit-redux';
import { Post } from '@zachtball/reddit-components';
import { IPost } from '@zachtball/reddit-types';
import { useHistory, useLocation } from 'react-router-dom';

export const MultiReddit = (): ReactElement | null => {
  const history = useHistory();
  const { pathname } = useLocation();
  const contentQueries = pathname.split('/').slice(2);
  const contentType = contentQueries[0];
  const contentSubs = contentQueries[1];
  const topTime = contentQueries[2];
  console.log({ history, location });
  const authenticated = useSelector(({ auth }) => auth.authenticated);
  const {
    data: posts,
    isLoading,
    isError,
  } = useGetContentQuery(`m/${contentType}/${contentSubs}/${topTime}`, { skip: !authenticated });
  return !isLoading && authenticated && !isError ? (
    <div>
      {posts.map((postProps: IPost) => (
        <Post {...postProps} key={postProps.id} />
      ))}
    </div>
  ) : null;
};

export default MultiReddit;
