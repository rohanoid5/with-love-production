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
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'


export default class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shadowRight: 1,
      shadowLeft: 1,
      expanded: false,
  		title: 'Home',
    }
  }

  componentDidMount() {

  }

  componentWillMount() {

  }

  render() {
    return(
      <div className="card">
        <div className="card-header" data-background-color="purple">
          <h3 className="title">{ this.props.question.question }</h3>
        </div>
        <div className="card-content">
          <h4 className="category text-primary">
            { this.props.question.answer }
          </h4>
        </div>
      </div>
    );
  }

}
