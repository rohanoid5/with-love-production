import React from 'react';
import {Link} from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMinimalLetter } from '../actions/letterAction';
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
import LetterItem from './letterItem';
import Receiver from './receiver';

class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowRight: 1,
      shadowLeft: 1,
      expanded: false,
  		title: 'Home',
      showReceivers: false
    }
    this.addLetters = this.addLetters.bind(this);
    this.letterItemFill = this.letterItemFill.bind(this);
  }

  componentDidMount() {
    this.props.getMinimalLetter();
  }

  componentWillMount() {
    //this.props.setProps('Home', true, 0, 'menu');
  };

  addLetters() {
    // hashHistory.push('/select-letter');
    this.setState({showReceivers: true});
  }

  letterItemFill(letter, index) {
    return (
      <LetterItem key={letter._id} letter={letter}/>
    );
  }

  render() {
    return (
      <div>
        {this.state.showReceivers ?
          <Receiver /> :
          <div>
            {this.props.letterMinimal.completed ?
            <div>
              {this.props.letterMinimal.data.length > 0 ?
                <div>
                  <List style={{maxWidth: 800, width: '100%', margin: 'auto'}}>
                    {
                      this.props.letterMinimal.data.map(this.letterItemFill)
                    }
                  </List>
                </div> :
              <h1 style={{
                alignItems: 'center', display: 'flex', 
                fontWeight: 350, fontSize: 30,
                justifyContent: 'center', textAlign: 'center', marginTop: 100}}>
                This space is empty :( Please add a letter.
              </h1>}
            </div>
            : <CircularProgress />}
            <FloatingActionButton
              onClick={this.addLetters}
              style={{position: 'fixed', bottom: 0, right: 0, margin: 48}}>
              <ContentAdd />
            </FloatingActionButton>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    letterMinimal: state.letterMinimal
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
	  getMinimalLetter
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Letter);
