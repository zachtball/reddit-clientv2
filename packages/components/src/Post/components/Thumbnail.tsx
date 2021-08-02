import { ReactElement } from 'react';
import { IPost } from '@zachtball/reddit-types';
import {
  thumbnailStyles,
  imageThumbnailStyles,
  iconContainerStyles,
  iconOverlapStyles,
  imagePreviewStyles,
} from '../Post.styles';
import { Link } from '@material-ui/core';
import SubjectIcon from '@material-ui/icons/Subject';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

export const Thumbnail = ({ type, url, thumbnail }: Partial<IPost> & { type: string }): ReactElement | null => {
  if (type) {
    switch (type) {
      case 'link':
        return (
          <Link href={url} target="_blank" rel="noopener">
            <div css={[thumbnailStyles, iconContainerStyles]}>
              <img src={thumbnail} css={[thumbnailStyles, imagePreviewStyles]} />
              <OpenInNewIcon css={iconOverlapStyles} />
            </div>
          </Link>
        );
      case 'image':
        return <img src={url} css={[thumbnailStyles, imageThumbnailStyles]} />;
      case 'video':
        return (
          <div css={[thumbnailStyles, iconContainerStyles]}>
            <img src={thumbnail} css={[thumbnailStyles, imagePreviewStyles]} />
            <PlayCircleOutlineIcon css={iconOverlapStyles} />
          </div>
        );
    }
  }
  return <SubjectIcon css={thumbnailStyles} />;
};
