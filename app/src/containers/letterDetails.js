import React from 'react';
import {Link} from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMinimalLetterOne } from '../actions/letterAction';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Divider from 'material-ui/Divider';
import { hashHistory } from 'react-router';
import NavHeader from './NavHeader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import LetterItem from './letterItem';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

class LetterDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shadowRight: 1,
      shadowLeft: 1,
      expanded: false,
  		title: 'Home',
    }
    this.onCloseClick = this.onCloseClick.bind(this);

  }

  componentDidMount() {
    this.props.getMinimalLetterOne(this.props.params.id);
  }

  componentWillMount() {
    //this.props.setProps('Home', true, 0, 'menu');
  }

  onCloseClick() {
    hashHistory.goBack();
  }

  render() {
    return (
      <div>
        {this.props.letterOne.completed ?
          <div>
            <AppBar
            title={<span style={styles.title}>{this.props.letterOne.data.letter.title}</span>}
            iconElementLeft={<IconButton onClick={this.onCloseClick}><NavigationClose /></IconButton>}/>
            <Card style={{margin: 64, padding: 80, display: 'flex', justifyContent: 'center'}}>
              <h3>SPACE FOR THE ACTUAL LETTER!!!</h3>
            </Card>
          </div>
        : <div>A</div>}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    letterOne: state.letterOne
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
	  getMinimalLetterOne
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LetterDetails);
