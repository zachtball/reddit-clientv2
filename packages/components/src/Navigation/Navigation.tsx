import { ReactElement, useState } from 'react';
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
import { makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon, Home as HomeIcon } from '@material-ui/icons';
import { useSelector } from '@zachtball/reddit-redux';
import { Subreddit } from './components';

export const redditAuthUrl =
  'https://www.reddit.com/api/v1/authorize?client_id=7UvCwJJL9B9lrA&response_type=code&state=52%2FeJkJ0b0sutRg5KaidaOf2CH4zpUep%2BA4NaZ5Wd%2FU%3D&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth-redirect&duration=permanent&scope=account%20edit%20flair%20history%20identity%20mysubreddits%20privatemessages%20read%20report%20save%20submit%20subscribe%20vote%20wikiread';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  appBarContent: {
    flexGrow: 1,
  },
  list: {
    padding: 0,
    marginTop: '1rem',
  },
}));

export const Navigation = (): ReactElement => {
  const history = useHistory();
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const userName = useSelector(({ user }) => user.name);
  const authenticated = useSelector(({ authentication }) => authentication.authenticated);

  const signOutClick = () => {
    localStorage.removeItem('REDDIT_TOKEN');
    history.go(0);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="m-navigation">
      <div className={classes.toolbar}>
        <ListItemText primary={userName} primaryTypographyProps={{ align: 'center' }} />
      </div>
      <Divider />
      <List className={classes.list}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon color="secondary" />
          </ListItemIcon>
          <ListItemText disableTypography primary="Home" className="text-large" />
        </ListItem>
      </List>
      <div className="m-navigation__subreddits">
        <List className={classes.list}>
          {['All mail', 'Trash', 'Spam'].map((text, i) => (
            <Subreddit key={i} name={text} />
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
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Wroteit
          </Typography>
          <div className={classes.appBarContent} />
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
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </>
  );
};

export default Navigation;
