import { ReactElement } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

interface ISubredditProps {
  name: string;
}

export const Subreddit = ({ name }: ISubredditProps): ReactElement => {
  return (
    <ListItem button key={name}>
      <ListItemIcon>
        <MenuIcon color="secondary" />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );
};
