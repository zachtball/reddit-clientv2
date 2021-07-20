import { ReactElement } from 'react';
import { containerStyles, thumbnailStyles, thumbnailContainerStyles } from './Post.styles';
import { IPost } from '@zachtball/reddit-types';
import SubjectIcon from '@material-ui/icons/Subject';

export const Post = ({
  // link_flair_text,
  // num_comments,
  // subreddit,
  thumbnail,
  title,
}: // total_awards_received,
// score,
IPost): ReactElement => {
  return (
    <div css={containerStyles}>
      <div css={thumbnailContainerStyles}>
        {thumbnail === 'self' ? <SubjectIcon css={thumbnailStyles} /> : <img src={thumbnail} css={thumbnailStyles} />}
      </div>
      <div>{title}</div>
    </div>
  );
};
