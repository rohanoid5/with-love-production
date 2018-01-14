import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { hashHistory  } from 'react-router';
import { logoutUser } from '../actions/loginAction';
import { connect } from 'react-redux';
import { getUser } from '../actions/profileAction';
import { bindActionCreators } from 'redux';
import NavHeader from './NavHeader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import CenteredCircularProgress from '../components/progressbar';
import Letter from './letter';
import Receiver from './receiver';

const style = {
  margin: 12,
  textAlign: 'center',
};

const iconStyles = {
  marginRight: 24,
};

const pStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	width: '100%',
	textAlign: 'center',
	margin: 'auto',
}

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
	fontSize: '14px',
	backgroundColor : 'rgb(255,255,255)',
};

const itemStyleSelected = {
	fontSize: '14px',
	color: '#FF6B6C',
};

const iconStyle = {
	width: '22px',
	height: 'auto',
	opacity: 0.7
};

const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

const mql = window.matchMedia(`(min-width: 1000px)`);

let SelectableList = makeSelectable(List);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shadowRight: 1, shadowLeft: 1, expanded: false,
      open: false,
  		title: 'Home',
  		hide: true,
  		zIndex: 1,
  		leftIcon: 'menu',
  		selectedIndex: 1,
  		disable: false,
  		label: '',
  		mql: mql,
  		docked: false,
  		drawerStyle: {},
  		snacker: null,
      fabHome: true,
      userData: this.props.user.data
    }
    this.onQuestionPage = this.onQuestionPage.bind(this);
    this.handleReduce = this.handleReduce.bind(this);
    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.handleToggleDrawer = this.handleToggleDrawer.bind(this);
		this.handleRequestChange = this.handleRequestChange.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleLeftIconButton = this.handleLeftIconButton.bind(this);
		this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.setProps = this.setProps.bind(this);
		this.getLeftIcon = this.getLeftIcon.bind(this);
		this.refresh = this.refresh.bind(this);
    this.onLogOut = this.onLogOut.bind(this);
    this.addLetters = this.addLetters.bind(this);
    console.log(localStorage.getItem('access_token'));
  }

  componentDidMount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  componentWillMount(){
    if (!this.props.isLoggedIn ) {
			hashHistory.push('/login?path=home');
			return;
		}
    this.props.getUser();
    mql.addListener(this.mediaQueryChanged);
		this.setState({
			mql: mql,
			docked: mql.matches,
			open: mql.matches ? true : false,
			drawerStyle: this.state.mql.matches ? { position: 'relative', boxShadow: 'none', zIndex: 0 } : {}
		});
		this.props.setProperties('Home', false, 1, '');
	}

  mediaQueryChanged() {
		this.setState({
			mql: mql,
			docked: this.state.mql.matches,
			open: this.state.mql.matches ? true : false,
			drawerStyle: this.state.mql.matches ? { position: 'relative', boxShadow: 'none', zIndex: 0 } : {}
		});
	}

  setProps(title, hide, zIndex, leftIcon, snacker) {
		this.state.title = title;
		this.state.hide = hide;
		this.state.zIndex = zIndex;
		if (leftIcon != null)
			this.state.leftIcon = leftIcon;
		this.setState(this.state);
		if (title == 'Login' || title == 'Sign up') {
			this.setState({
				disable: true,
				label: '',
			});
		} else {
			var index = 7;
			if (title == 'Home')
				index = 1;
			else if (title == 'Receivers')
				index = 2;
			else if (title == 'Profile')
				index = 3;
			else if (title == 'Payments')
				index = 4;
			else if (title == 'Rewards')
				index = 5;
			else if (title == 'Help & Support')
				index = 6;

			this.setState({
				disable: false,
				label: 'Logout',
				selectedIndex: index,
				snacker: snacker
			});
		}
	}

  handleToggleDrawer() {
		if (!this.state.docked) {
			this.setState({
				open: !this.state.open
			});
		}

    if(this.state.selectedIndex == 1) {
      this.setState({
				title: 'Home',
				leftIcon: 'menu',
        hide: true,
        zIndex: 0,
        fabHome: true
			});
    }
	}

	handleRequestChange(event, index) {
		this.setState({
			open: this.state.docked ? open : !this.state.open,
			selectedIndex: index
		});
	}

	handleClose(e) {
		this.setState({
			open: false
		});
		e.preventDefault();
	}

  handleLeftIconButton() {
		if (this.state.leftIcon == 'menu') {
			this.setState({
				open: !this.state.open
			});
		} else if (this.state.leftIcon == 'back') {
			hashHistory.goBack();
		}
	}

	getLeftIcon() {
		if (this.state.leftIcon == 'avatar') {
			return (
        <Avatar size={36} style={{ marginLeft: '8px', marginTop: '5px', marginRight: '4px' }} onTouchTap={this.handleClick}>
          A
        </Avatar>
      );
		} else if (this.state.leftIcon == 'back') {
			return (<IconButton><NavigationArrowBack /></IconButton>);
		} else {
			return (<IconButton><NavigationMenu /></IconButton>);
		}
	}

	refresh() {
		console.log(this.state.userData);
	}


  renderAside() {
		if (this.state.hide) {
			var header = null;
			if (true)
				header = <NavHeader image={this.props.user.data.image} name={this.props.user.data.name}
        drawer={this.handleToggleDrawer} />;
			else
				header = <div></div>;
			return (
				<div>
					{header}
					<SelectableList value={this.state.selectedIndex} onChange={this.handleRequestChange.bind(this)}>
						<ListItem
							value={1}
							style={this.state.selectedIndex == 1 ? itemStyleSelected : itemStyle}
							primaryText={"Home"}
							onTouchTap={
								this.handleToggleDrawer
							} />
						<ListItem
							value={2}
							style={this.state.selectedIndex == 2 ? itemStyleSelected : itemStyle}
							primaryText="Receivers"
							onTouchTap={
								this.addLetters
							}
						/>
            <ListItem
							value={3}
							style={this.state.selectedIndex == 3 ? itemStyleSelected : itemStyle}
							primaryText="Profile"
							onTouchTap={
								this.handleToggleDrawer
							}
						/>
						<ListItem
							value={4}
							style={this.state.selectedIndex == 4 ? itemStyleSelected : itemStyle}
							primaryText="Payments"
							onTouchTap={
								this.handleToggleDrawer
							}
						/>
						<ListItem
							value={5}
							style={this.state.selectedIndex == 5 ? itemStyleSelected : itemStyle}
							primaryText="Rewards"
							onTouchTap={
								this.handleToggleDrawer
							}
						/>
            <Divider style={{ marginTop: '8px' }} />
						<div style={cvDivStyle}>Communicate</div>
						<ListItem
							value={6}
							style={this.state.selectedIndex == 6 ? itemStyleSelected : itemStyle}
							primaryText="Help & Support"
							onTouchTap={
								this.handleToggleDrawer
							}
						/>
					</SelectableList>
				</div>

			);
		}
	}

  onQuestionPage() {
    // hashHistory.push('/questions');
    console.log(this.props.user.data);
  }

  handleExpandChange(expanded) {
    this.setState({expanded: expanded});
  };

  handleToggle(event, toggle) {
    this.setState({expanded: toggle});
  };

  handleExpand() {
    this.setState({expanded: true});
  };

  handleReduce() {
    this.setState({expanded: false});
  };

  onLogOut() {
    this.props.logoutUser();
    hashHistory.push('/login?path=home');
  }

  addLetters() {
    hashHistory.push('/receiver/12');
  }

  render() {
    if(this.props.user.completed) {
      return (
        <div>
          <div style={{margin:'auto', verticalAlign: 'middle', position: 'relative'}}>
            <AppBar
              title={this.state.title}
              onLeftIconButtonTouchTap={this.handleLeftIconButton}
              iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
              iconElementRight={
        				<IconMenu
        					style={this.state.disable ? { display: 'none' } : {}}
        					iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        					targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        					anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
        					<MenuItem primaryText="Refresh" onClick={this.refresh} />
        					<MenuItem primaryText="Log out" onClick={this.onLogOut} />
        				</IconMenu>}
              showMenuIconButton={true}>
            </AppBar>
            <div>
              {(() => {
                switch (this.state.selectedIndex) {
                  case 1: return <Letter/>;
                  case 2: return <Receiver/>;
                  case 3: return <div>3</div>;
                  default: return <Letter/>;
                }
              })()}
            </div>
          </div>
          <Drawer width={280}
            onRequestChange={this.handleRequestChange}
            open={!this.state.open}>
            {this.renderAside()}
          </Drawer>
          {this.state.selectedIndex == 1 ?
          <FloatingActionButton
            onClick={this.addLetters}
            style={{position: 'fixed', bottom: 0, right: 0, margin: 48}}>
            <ContentAdd />
          </FloatingActionButton>
          :<div></div>}
        </div>
      );
    } else {
      return (
				<CenteredCircularProgress / >
      );
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
