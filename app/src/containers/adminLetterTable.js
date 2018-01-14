import React from 'react';
import {Link} from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAdminLetterPaid, getAdminLetterUnpaid, getAdminLetterDispatched }
from '../actions/adminLetterAction';
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
import AdminLetterItem from './adminLettersItem';

class AdminLetterTable extends React.Component {
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
    // this.firstButton = this.firstButton.bind(this);
    // this.secondButton = this.secondButton.bind(this);
    // this.thirdButton = this.thirdButton.bind(this);
    // this.addLetters = this.addLetters.bind(this);
    this.letterItemFill = this.letterItemFill.bind(this);
  }

  componentDidMount() {

  }

  componentWillMount() {
    //this.props.setProps('Home', true, 0, 'menu');
    this.props.getAdminLetterPaid();
    this.props.getAdminLetterUnpaid();
    this.props.getAdminLetterDispatched();
  }

  letterItemFill(letter, index) {
    return (
      <AdminLetterItem key={letter._id} letter={letter}/>
    );
  }

  render() {
    return(
      <div>
        {
          this.props.adminPaidLetter.completed && this.props.adminUnpaidLetter.completed
          && this.props.adminDispatchedLetter.completed ?
          <table className="table table-hover">
            <thead className="text-primary">
              <th style={{textAlign: 'center'}}>User</th>
              <th style={{textAlign: 'center'}}>Letter Type</th>
              <th style={{textAlign: 'center'}}>Date</th>
            </thead>
            <tbody>
              {(() => {
                switch (this.props.index) {
                  case 0: return (
                    this.props.adminPaidLetter.data.map(this.letterItemFill)
                  );
                  case 1: return (
                    this.props.adminUnpaidLetter.data.map(this.letterItemFill)
                  );
                  case 2: return (
                    this.props.adminDispatchedLetter.data.map(this.letterItemFill)
                  );
                  default: return <div>C</div>;
                }
              })()}
            </tbody>
          </table>
        : <CircularProgress />
        }
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    adminPaidLetter: state.adminPaidLetter,
    adminUnpaidLetter: state.adminUnpaidLetter,
    adminDispatchedLetter: state.adminDispatchedLetter,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getAdminLetterPaid: getAdminLetterPaid,
    getAdminLetterUnpaid: getAdminLetterUnpaid,
    getAdminLetterDispatched: getAdminLetterDispatched,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLetterTable);
