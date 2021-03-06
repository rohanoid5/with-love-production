import React from 'react';
import {Link} from 'react-router';
import { bindActionCreators } from 'redux';
import { logoutUser } from '../actions/loginAction';
import { getUser } from '../actions/profileAction';
import { connect } from 'react-redux';
import CircularProgress from '../components/progressbar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import HomeIcon from 'material-ui/svg-icons/action/home';
import ChatIcon from 'material-ui/svg-icons/communication/message';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import LetterIcon from 'material-ui/svg-icons/content/mail';
import ReceiverIcon from 'material-ui/svg-icons/social/person';
import LogOut from 'material-ui/svg-icons/action/power-settings-new';
import { hashHistory  } from 'react-router';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Letter from './letter';
import Receiver from './receiver';

const listStyle = {
  display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
}

const styles = {
  thumbOff: {
    backgroundColor: '#f6cccc',
  },
  trackOff: {
    backgroundColor: '#FF6B6C',
  },
}

const cvDivStyle = {
	color: 'rgba(0, 0, 0, 0.7)',
	fontSize: '14px',
	padding: '16px'
};

const itemStyle = {
	fontSize: '16px',
  textTransform: 'uppercase'
};

const itemStyleSelected = {
	fontSize: '16px',
	color: '#FFF',
  textTransform: 'uppercase'
};

const innerDivNormalStyle = {
  padding: 16,
  marginTop: 8,
  marginBottom: 8
}

const innerDivSelectedStyle = {
  padding: 16,
  marginTop: 8,
  marginBottom: 8,
  background: 'linear-gradient(60deg, #7768AE, #5e48ad)',
  boxShadow: '0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)',
}

const iconStyle = {
	width: '22px',
	height: 'auto',
	opacity: 0.7
};

const mql = window.matchMedia(`(min-width: 1000px)`);

let SelectableList = makeSelectable(List);

class HomeUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shadowRight: 1,
      shadowLeft: 1,
      expanded: false,
      selectedIndex: 1,
      type: 'WORK',
      open: false,
			hide: false,
			zIndex: 1,
			leftIcon: 'menu',
			disable: false,
			label: '',
			mql: mql,
			docked: false,
			drawerStyle: {},
			snacker: null,
      arg: '',
      title: 'Home',
    }
    this.handleRequestChange = this.handleRequestChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.onLogOut = this.onLogOut.bind(this);
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
  }

  onLogOut() {
    this.props.logoutUser();
    hashHistory.push('/login?path=home');
  }

  componentWillMount(){
    this.props.setProperties('Home', false, 1, '');
    mql.addListener(this.mediaQueryChanged);
		this.setState({
			mql: mql,
			docked: mql.matches,
			open: mql.matches ? true : false,
			drawerStyle: this.state.mql.matches ? { position: 'relative', zIndex: 2, height: '100%' } : {}
		});
    this.props.getUser();
    if (!this.props.isLoggedIn ) {
			// hashHistory.push('/auth?path=home');
			return;
		}
	}

  componentWillUnmount() {
		this.state.mql.removeListener(this.mediaQueryChanged);
	}

  mediaQueryChanged() {
		this.setState({
			mql: mql,
			docked: this.state.mql.matches,
			open: this.state.mql.matches ? true : false,
			drawerStyle: this.state.mql.matches ? { position: 'relative', zIndex: 2, height: '100%' } : {}
		});
	}

  handleRequestChange(event, index) {
		this.setState({
      open: this.state.docked ? open : !this.state.open,
			selectedIndex: index
		});
	}

  handleToggle() {
    if (!this.state.docked) {
			this.setState({
				open: !this.state.open
			});
		}
    if(this.state.selectedIndex == 1) {
      this.setState({
				title: 'Home'
			});
    } else if(this.state.selectedIndex == 2) {
      this.setState({
				title: 'Receivers'
			});
    } else if(this.state.selectedIndex == 3) {
      this.setState({
				title: 'YouTube'
			});
    } else if(this.state.selectedIndex == 4) {
      this.setState({
				title: 'Blog'
			});
    } else if(this.state.selectedIndex == 5) {
      this.setState({
				title: 'Categories'
			});
    }
  }

  drawerClose() {
    this.setState({open: !this.state.open});
  }

  changeIndexFromChild(someArg) {
    this.setState({selectedIndex: someArg});
    //console.log(this.state.arg);
  }

  getAppBar() {
		return (
      <AppBar
        style={{position: "fixed", top: 0, }}
        title={this.state.title}
        titleStyle={{fontWeight: 300, fontSize:22}}
        onLeftIconButtonTouchTap={this.handleToggle}
        iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
        iconElementRight={<FlatButton primary={true} hoverColor="#c0392b" label="Logout"
        icon={<LogOut />} onClick = {this.onLogOut}/>}>
      </AppBar>
    );
	}

  getPropBasedStyles() {
		var ps = {
			bodyStyle: {
        margin: '0 auto',
				maxWidth: '1000px',
				flex: 1
      },
			appBar: null,
			topPad: {}
		}

		if (false) {
			ps.bodyStyle = {
        margin: '0 auto',
				maxWidth: '1000px',
				flex: 1
			};

		} else {
			ps.bodyStyle = {
				margin: '0 auto',
				maxWidth: '1000px',
				flex: 1
			};
			ps.appBar = this.getAppBar();
			if (this.state.docked)
				ps.topPad = { paddingTop: 64, display: 'flex', };
			else
				ps.topPad = { paddingTop: 64 };

		}
		return ps;
	}

  render() {
    var changeIndexFromChild = this.changeIndexFromChild;
    const propStyles = this.getPropBasedStyles();
    if (this.props.user.completed) {
      return (
        <div>
          <div>
            <div>
              {propStyles.appBar}
              <div style={propStyles.topPad}>
                <Drawer docked={this.state.docked}
            			width={250}
            			containerStyle={this.state.drawerStyle}
            			open={this.state.open}
            			onRequestChange={this.handleRequestChange}>
                  <div style={{paddingTop: 50, paddingBottom: 50, textAlign: 'center'}}>
                    <h1 style={{fontSize: 35, fontWeight: 300, fontFamily: 'Monoton, cursive'}}>With Love</h1>
                  </div>
                  <Divider style={{marginBottom: 8, height: '1px'}}/>
                  <SelectableList value={this.state.selectedIndex} onChange={this.handleRequestChange}
                    onClick={this.handleToggle}>
                    <ListItem
                      rightIcon={<ReceiverIcon color={this.state.selectedIndex == 1 ? 'white' : 'grey'}/>}
                      innerDivStyle={this.state.selectedIndex == 1 ? innerDivSelectedStyle : innerDivNormalStyle}
                      style={this.state.selectedIndex == 1 ? itemStyleSelected : itemStyle}
                      value={1} primaryText="Letters" />
                    <ListItem
                      rightIcon={<LetterIcon color={this.state.selectedIndex == 2 ? 'white' : 'grey'}/>}
                      innerDivStyle={this.state.selectedIndex == 2 ? innerDivSelectedStyle : innerDivNormalStyle}
                      style={this.state.selectedIndex == 2 ? itemStyleSelected : itemStyle}
                      value={2} primaryText="Receivers" />
                  </SelectableList>
                </Drawer>
                <div style={{margin: '0 auto', maxWidth: '1000px', flex: 1}}>
                  {(() => {
                    switch (this.state.selectedIndex) {
                      case 1: return <Letter/>;
                      case 2: return <Receiver/>;
                      default: return <Letter/>;
                    }
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
    		<CircularProgress color="#B71C1C"/>
    	)
    }
  }
};

function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.authState.isLoggedIn,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
	  logoutUser: logoutUser,
    getUser: getUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeUser);
