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

class ReceiverItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleNestedListToggle = this.handleNestedListToggle.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleToggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  handleNestedListToggle(item) {
    this.setState({
      open: item.state.open,
    });
  }
  handleSelect() {
    //console.log(this.props.receiver._id);
    hashHistory.push('/select-letter/' + this.props.receiver._id);
  }

  render() {
    return (
      <div style={{paddingLeft: 64, paddingRight: 64, margin: 8,
        display: 'flex', flexDirection: 'row'}}>
        <Card style={{flex: 4}}>
          <ListItem key={this.props.receiver._id} style={{padding: 0}}
          primaryText={this.props.receiver.first_name}
          leftAvatar={<Avatar>B</Avatar>}
          initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem style={{padding: 0}}
                  key={2}
                  primaryText="Gender"
                  secondaryText={this.props.receiver.gender}
                  />,
                <ListItem
                  style={{padding: 0}}
                  key={3}
                  primaryText="Relationship"
                  secondaryText={this.props.receiver.relationship}
                  />,
                  <ListItem
                    style={{padding: 0}}
                    key={4}
                    primaryText="Closeness"
                    secondaryText={this.props.receiver.closeness + " /10"}
                    />,
                    <ListItem disabled={true} style={{padding: 0}}>
                      <FlatButton
                        key={0}
                        primary={true}
                        label="Delete"/>
                      <FlatButton
                        key={1}
                        primary={true}
                        label="Edit"/>
                    </ListItem>
              ]}/>
        </Card>
        <FlatButton style={{flex: 1, marginTop: 10}}
          secondary={true}
          onClick={this.handleSelect}
          label="Select"/>
      </div>
    );
  }
};

export default ReceiverItem;
