import React from 'react';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import Routes from './Routes';
// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';
import Login from './Login'; 

const lam = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#FAD961',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  }
});

const ImageOverlay = styled.div`
    @media all and (pointer: coarse) {
    background:lam.palette.primary.main,   
}
`;


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  list: {
    width: 500,
    height:500
  },
  // menuButton: {
  //   // marginRight: theme.spacing(-3),
  // },
  // edgeEnd:{
  //   marginLeft:-40,
  //   '$sizeSmall&': {
  //     marginLeft: -1,
  //   },
  // },
  title: {
    flexGrow: 1,
    paddingLeft:-20,
    // marginLeft:-20,
    '$sizeSmall&': {
      marginLeft: 2,
    },
  },
  edgeEnd: {
    // paddingRight:-12,
    
  },
  toolbarButtons: {
    marginLeft: 'auto',
    marginRight: -12,
    '$sizeSmall&': {
      marginRight: -5,
    },
  },
}));


function Navbar(props) {

  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };


  const sideList = side => (
    <div
      className="container my-auto"
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)} 
    >
      <Login/>
    </div>
  );

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageOverlay>
           <IconButton edge="end"  color="inherit" style={{padding:"0px",marginRight:"0px"}}>
            <Button onClick={toggleDrawer('right', true)} style={{padding:"0px"}}><MenuIcon /></Button>
          </IconButton>
         
          <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
            {sideList('right')}
         </Drawer>
      </ImageOverlay>
    </div>
  );
}

export default Navbar