import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-scroll';

const ApplicationBar = () => {

  return (
    <div>
      <AppBar style={{ background: 'transparent', boxShadow: 'none', backgroundRepeat: 'no-repeat', backgroundSize: 'auto' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between'}}>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6">
            SmartBooks Inc.
          </Typography>
          <div style={{ width: '20%', display: 'flex', justifyContent: 'space-evenly', cursor: 'pointer'}}>
            <Link activeClass="active" to='home' spy={true} smooth={true} duration={500}>Home</Link>
            <Link activeClass="active" to='mission' spy={true} smooth={true} duration={500} >OUR MISSION</Link>
            <Link to='team' spy={true} smooth={true} duration={500} >TEAM</Link>
            <Link to='contact' spy={true} smooth={true} duration={500} >CONTACT</Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ApplicationBar;