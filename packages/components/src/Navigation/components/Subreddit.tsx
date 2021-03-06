import { ReactElement } from 'react';
import { ListItem, ListItemText, Avatar } from '@material-ui/core';

interface ISubredditProps {
  name: string;
  icon: string;
}

export const Subreddit = ({ name, icon }: ISubredditProps): ReactElement => {
  return (
    <ListItem button key={name}>
      <Avatar alt={name} src={icon} />
      <ListItemText primary={name} />
    </ListItem>
  );
};
