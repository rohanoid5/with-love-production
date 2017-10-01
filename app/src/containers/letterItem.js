import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import { hashHistory  } from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import DateRange from 'material-ui/svg-icons/action/date-range';
import Toggle from 'material-ui/Toggle';
import {blue500, red500, green500} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';

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
    backgroundColor: '#b8b8b8',
  },
}

class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shadowRight: 1, shadowLeft: 1, expanded: false, }
    this.handleReduce = this.handleReduce.bind(this);
    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.seeMore = this.seeMore.bind(this);
  }

  handleExpandChange(expanded) {
    this.setState({expanded: expanded});
  }

  handleToggle(event, toggle) {
    this.setState({expanded: toggle});
  }

  handleExpand() {
    this.setState({expanded: true});
  }

  handleReduce() {
    this.setState({expanded: false});
  }

  seeMore() {
    hashHistory.push('/letter-details/' + this.props.letter._id);
  }

  render() {
    return (
      <div style={{paddingLeft: 24, paddingRight: 24,
        paddingTop: 8, paddingTop: 8}}>
        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
          <CardTitle
            title={this.props.letter.title}
            subtitle={this.props.letter.description}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <div style={{display: 'flex', flexDirection: 'row', paddingBottom: 8}}>
              <div style={{marginTop: 4}}>Status:  Approved</div>
              <CheckCircle style={{marginLeft: 4}} color={green500} hoverColor={blue500} />
            </div>
            <div style={{display: 'flex', flexDirection: 'row', paddingBottom: 8}}>
              <div style={{marginTop: 4}}>Type: {this.props.letter.type}</div>
              <ActionFavorite style={{marginLeft: 4}} color=
              {(() => {
                switch (this.props.letter.type) {
                  case 'lazy': return '#EF9A9A';
                  case 'verbose': return '#F44336';
                  case '': return '#B71C1C';
                  default: return '#EF9A9A';
                }
              })()} hoverColor={blue500} />
            </div>
            <div style={{display: 'flex', flexDirection: 'row', paddingBottom: 8}}>
              <div style={{marginTop: 4}}>Date: {new Date(this.props.letter.time_stamp).toDateString()}</div>
              <DateRange style={{marginLeft: 4}} color={blue500} hoverColor={blue500} />
            </div>
            <div style={{display: 'flex', flexDirection: 'row',
            paddingBottom: 8}}>
              <RaisedButton primary={true} label="See more"
              onClick={this.seeMore} />
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
};

export default Letter;
