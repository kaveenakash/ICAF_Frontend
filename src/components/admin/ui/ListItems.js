import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from 'react-router-dom'
import HowToVoteIcon from '@material-ui/icons/HowToVote';

import AssignmentIcon from '@material-ui/icons/Assignment';
export const mainListItems = (
  <div>
    <ListItem button selected >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/admin-workshop">
      <ListItemIcon>
        <HowToVoteIcon />
      </ListItemIcon>
      <ListItemText primary="Workshop-Details" />
    </ListItem>
   
  </div>
);

// Additional Items For Admin
export const secondaryListItems = (
  <div>
    <ListSubheader inset>Extra Settings</ListSubheader>
    <ListItem button component={Link} to="/admin-editor">
      <ListItemIcon>
        <EditIcon />
      </ListItemIcon>
      <ListItemText primary="Add Editor" />
    </ListItem>
    
  </div>
);
