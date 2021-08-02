import { ReactElement } from 'react';
import { containerStyles, thumbnailContainerStyles } from './Post.styles';
import { IPost } from '@zachtball/reddit-types';
import { Thumbnail } from './components';
import { getPostType } from '@zachtball/reddit-utils';

export const Post = ({
  // link_flair_text,
  // num_comments,
  subreddit,
  thumbnail,
  title,
  url,
  post_hint,
  domain,
}: // total_awards_received,
// score,
IPost): ReactElement => {
  const type = getPostType({ post_hint, domain });
  return (
    <div css={containerStyles}>
      <div css={thumbnailContainerStyles}>
        <Thumbnail thumbnail={thumbnail} type={type} url={url} />
      </div>
      <div>{title}</div>
      <div>{subreddit}</div>
    </div>
  );
};
