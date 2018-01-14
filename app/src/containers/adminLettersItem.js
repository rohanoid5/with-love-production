import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import { hashHistory  } from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import Toggle from 'material-ui/Toggle';
import {blue500, red500, green500} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import {pinkA200, transparent} from 'material-ui/styles/colors';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

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
	width: '70%',
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
    backgroundColor: '#b8b8b8',
  },
}

const stylesNew = {
  card: {
    maxWidth: 400,
  },
  media: {
    height: 194,
  },
  expand: {
    transform: 'rotate(0deg)',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#F44336',
  },
  flexGrow: {
    flex: '1 1 auto',
  },
}

class AdminLetterItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
    // this.handleToggle = this.handleToggle.bind(this);
    // this.handleNestedListToggle = this.handleNestedListToggle.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.getReadableDate = this.getReadableDate.bind(this);
  }

  handleSelect() {
    hashHistory.push('/admin-letter-details/' + this.props.letter._id);
  }

  getReadableDate() {
    let d = new Date(this.props.letter.time_stamp);
    return d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear();
  }

  render() {
    return (
      <tr>
        <td style={{textAlign: 'center', fontSize: 16}}>
          { this.props.letter.author }
        </td>
        <td style={{textAlign: 'center' , fontSize: 16}}>
          { this.props.letter.type }
        </td>
        <td style={{textAlign: 'center', fontSize: 16}}>
          { this.getReadableDate() }
        </td>
        <td style={{textAlign: 'center'}}>
          <FlatButton
          primary={true}
          onClick={this.handleSelect}
          label="See More"/>
        </td>
      </tr>
    );
  }
};

export default AdminLetterItem;
