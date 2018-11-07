import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import EventsIcon from '@material-ui/icons/Event';

import { toggleDrawer } from '../../services/ui/actions';

const styles = {
  list: {
    width: 250,
  },
};

class Menu extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Drawer open={this.props.isOpen} onClose={() => this.props.toggle()} anchor="left">
        <div className={classes.list}>
          <List>
            <ListItem button key="Stats">
              <ListItemIcon><TrendingUpIcon/></ListItemIcon>
              <ListItemText primary="Stats" />
            </ListItem>
            <ListItem button key="Send email">
              <ListItemIcon><MailIcon/></ListItemIcon>
              <ListItemText primary="Send email" />
            </ListItem>
            <ListItem button key="Events">
              <ListItemIcon><EventsIcon/></ListItemIcon>
              <ListItemText primary="Events" />
            </ListItem>
            <ListItem button key="Announcements">
              <ListItemIcon><AnnouncementIcon/></ListItemIcon>
              <ListItemText primary="Announcements" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    )
  }
}

const mapStateToProps = (state) => ({
  isOpen: state.session.drawerOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleDrawer()),
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Menu));
