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
import { Menu as MenuIcon } from '@material-ui/icons';
import { useSelector } from '@zachtball/reddit-redux';

const drawerWidth = 240;

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
}));

export default (): ReactElement => {
  const history = useHistory();
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const userName = useSelector((state) => state.user.name);

  const signOutClick = () => {
    localStorage.removeItem('REDDIT_TOKEN');
    history.push('/login');
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <ListItemText primary={userName} primaryTypographyProps={{ align: 'center' }} />
      </div>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <MenuIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <MenuIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
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
          <Button color="inherit" onClick={signOutClick}>
            Sign out
          </Button>
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
