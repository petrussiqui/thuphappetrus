import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import { NavLink } from 'react-router-dom';
function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <NavLink style={{fontSize:28}}  className='navLink' to="/">{'Petrus Sĩ Quí'}</NavLink>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <NavLink style={{fontSize:18, marginRight:'20px'}}  className='navLink' to="/Example/">{'Example'}</NavLink>
              <NavLink style={{fontSize:18}} className='navLink' to="/Postlist/"> {'Post List'}</NavLink>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
