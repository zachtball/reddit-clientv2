import { ReactElement } from 'react';
import { ListItem, ListItemText, Avatar } from '@material-ui/core';
import { textStyle } from './Subreddit.styles';
import { css } from '@emotion/react';

interface ISubredditProps {
  name: string;
  icon: string;
}

export const Subreddit = ({ name, icon }: ISubredditProps): ReactElement => {
  return (
    <ListItem button key={name}>
      <Avatar
        css={css`
          width: 25px;
          height: 25px;
        `}
        alt={name}
        src={icon}
      />
      <ListItemText css={textStyle} primary={name} />
    </ListItem>
  );
};
