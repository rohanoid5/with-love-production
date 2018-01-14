import React from 'react';
import {Link} from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAdminLetterPaid } from '../actions/adminLetterAction';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { hashHistory } from 'react-router';
import CircularProgress from '../components/progressbar';
import NavHeader from './NavHeader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import AdminLetterTable from './adminLetterTable';
// import UnpaidLetter from './adminUnpaidLetters';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

const selectedButtonLabel = {
  color: 'white',
  fontSize: 15
};

const deselectedButtonLabel = {
  color: 'rgba(255, 255, 255, 0.5)'
}

const selectedButtonIcon = {
  color: 'white',
};

const deselectedButtonIcon = {
  color: 'rgba(255, 255, 255, 0.5)'
}

class AdminLetter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowRight: 1,
      shadowLeft: 1,
      expanded: false,
  		title: 'Home',
      showReceivers: false,
      selectedIndex: 0
    }
    this.select = this.select.bind(this);
    this.firstButton = this.firstButton.bind(this);
    this.secondButton = this.secondButton.bind(this);
    this.thirdButton = this.thirdButton.bind(this);
    // this.addLetters = this.addLetters.bind(this);
    // this.letterItemFill = this.letterItemFill.bind(this);
  }

  componentDidMount() {

  }

  componentWillMount() {
    //this.props.setProps('Home', true, 0, 'menu');
    this.props.getAdminLetterPaid();
    console.log(localStorage.getItem('access_token'));
  }

  select(index) {
    this.setState({selectedIndex: index});
  }

  firstButton() {
    this.setState({selectedIndex: 0});
  }

  secondButton() {
    this.setState({selectedIndex: 1});
  }

  thirdButton() {
    this.setState({selectedIndex: 2});
  }

  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header" data-background-color="purple">
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <FlatButton label="Payment Done" style={{flex: 1}}
                    labelStyle={this.state.selectedIndex == 0 ? selectedButtonLabel : deselectedButtonLabel}
                    onClick={this.firstButton} secondary={true}
                    icon={
                      <FontIcon className="material-icons"
                      style={this.state.selectedIndex == 0 ? selectedButtonIcon : deselectedButtonIcon}>
                        attach_money
                      </FontIcon>
                    }/>
                    <FlatButton label="Payment Incomplete" style={{flex: 1}}
                    labelStyle={this.state.selectedIndex == 1 ? selectedButtonLabel : deselectedButtonLabel}
                    onClick={this.secondButton}
                    icon={
                      <FontIcon className="material-icons"
                      style={this.state.selectedIndex == 1 ? selectedButtonIcon : deselectedButtonIcon}>
                        money_off
                      </FontIcon>
                    }/>
                    <FlatButton label="Dispatched" style={{flex: 1}}
                    labelStyle={this.state.selectedIndex == 2 ? selectedButtonLabel : deselectedButtonLabel}
                    onClick={this.thirdButton}
                    icon={
                      <FontIcon className="material-icons"
                      style={this.state.selectedIndex == 2 ? selectedButtonIcon : deselectedButtonIcon}>
                        send
                      </FontIcon>
                    }/>
                  </div>
                </div>
                <div className="card-content table-responsive">
                  <AdminLetterTable index={this.state.selectedIndex}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.authState.isLoggedIn,
    adminLetter: state.adminLetter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getAdminLetterPaid: getAdminLetterPaid
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLetter);
