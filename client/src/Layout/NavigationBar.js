import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Link
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBack from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minHeight: 50
  },
  appbar: {
    alignItems: 'center',
    background: '#0074D9',
    minHeight: 100
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1,
    'font-family': "'Abel', sans-serif",
    'text-align': 'center'
  },
  toolbar: {
    width: '100%',
    margin: 'auto'
  },
  logo: {
    width: '8%'
  }
}));

function NavigationBar(props) {
  const classes = useStyles(); //React HOOK API => looks nice

  let backbutton = null;

  if (props.BackButton == 'true') {
    backbutton = (
      <IconButton edge="start" className={classes.menuButton} color="black">
        <ArrowBack onClick={() => props.history.goBack()} />
      </IconButton>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={classes.appbar}
        title={<img src="/Logo.jpeg" />}
      >
        <Toolbar className={classes.toolbar}>
          <Typography variant="h3" className={classes.title}>
            {props.title}
          </Typography>
          <img src={'/Logo.jpeg'} className={classes.logo} alt="logo" />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(NavigationBar);
