/** @jsxImportSource @emotion/react */
import { ReactElement, useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import {
  AppBar,
  Button,
  Drawer,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  ListItemText,
  Hidden,
} from '@material-ui/core';
import { Menu as MenuIcon, Home as HomeIcon } from '@material-ui/icons';
import { useSelector, useGetMyQuery } from '@zachtball/reddit-redux';
import { ISubreddit } from '@zachtball/reddit-types';
import { Subreddit } from './components';
import * as styles from './Navigation.styles';

export const redditAuthUrl =
  'https://www.reddit.com/api/v1/authorize?client_id=7UvCwJJL9B9lrA&response_type=code&state=52%2FeJkJ0b0sutRg5KaidaOf2CH4zpUep%2BA4NaZ5Wd%2FU%3D&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth-redirect&duration=permanent&scope=account%20edit%20flair%20history%20identity%20mysubreddits%20privatemessages%20read%20report%20save%20submit%20subscribe%20vote%20wikiread';

export const Navigation = (): ReactElement => {
  const history = useHistory();
  const [mobileOpen, setMobileOpen] = useState(false);
  const authenticated = useSelector(({ auth }) => auth.authenticated);
  const { data: user } = useGetMyQuery('me', { skip: !authenticated });
  const { data: subreddits, isLoading }: { data: ISubreddit[]; isLoading: boolean } = useGetMyQuery('subreddits', {
    skip: !authenticated,
  });

  const orderSubs = (): ISubreddit[] => {
    if (subreddits?.length) {
      const filteredAndSortedSubs: ISubreddit[] = subreddits
        .filter((sub: ISubreddit) => {
          const nameArray: string[] = sub.display_name_prefixed.split('');
          return `${nameArray[0]}${nameArray[1]}` === 'r/';
        })
        .sort((a: ISubreddit, b: ISubreddit) => {
          const sortOrder: number = a.display_name.localeCompare(b.display_name);
          return sortOrder;
        });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return filteredAndSortedSubs;
    }
    return [];
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  const memoizedOrderedSubs = useMemo(() => orderSubs(), [subreddits?.length]);

  const signOutClick = () => {
    localStorage.removeItem('REDDIT_TOKEN');
    history.go(0);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="m-navigation">
      <div css={styles.toolbar}>
        <ListItemText primary={user?.name} primaryTypographyProps={{ align: 'center' }} />
      </div>
      <Divider />
      <List css={styles.list}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon color="secondary" />
          </ListItemIcon>
          <ListItemText disableTypography primary="Home" className="text-large" />
        </ListItem>
      </List>
      <div className="m-navigation__subreddits">
        <List css={styles.list}>
          {!isLoading &&
            memoizedOrderedSubs.map((subreddit: ISubreddit, i: number) => (
              <Subreddit key={i} name={subreddit.display_name_prefixed} icon={subreddit.icon_img} />
            ))}
        </List>
      </div>
    </div>
  );

  const signInOrOut = authenticated ? (
    <Button variant="contained" color="primary" onClick={signOutClick}>
      Sign out
    </Button>
  ) : (
    <a className="link-button" href={redditAuthUrl}>
      <Button variant="contained" color="primary">
        Sign in
      </Button>
    </a>
  );

  const container = window !== undefined ? () => window.document.body : undefined;
  return (
    <>
      <AppBar position="fixed" css={styles.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            css={styles.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Wroteit
          </Typography>
          <div css={styles.appBarContent} />
          {signInOrOut}
        </Toolbar>
      </AppBar>
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          css={styles.drawerPaper}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer css={styles.drawerPaper} variant="permanent" open>
          {drawer}
        </Drawer>
      </Hidden>
    </>
  );
};

export default Navigation;
