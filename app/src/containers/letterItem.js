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
import Divider from 'material-ui/Divider';

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
      <div style={{paddingLeft: 24, paddingRight: 24, paddingTop: 0}}>
        <div>
          <div className="card">
            <div className="card-header" data-background-color="purple">
              <h4 className="title">{ this.props.letter.title }</h4>
              <p className="category">{ this.props.letter.description }</p>
            </div>
            <div className="card-content table-responsive">
              <table className="table">
                <thead>
                  <th style={{textAlign: 'center'}}>Letter Type</th>
                  <th style={{textAlign: 'center'}}>Payment</th>
                  <th style={{textAlign: 'center'}}>Status</th>
                </thead>
                <tbody>
                  <tr>
                    <td style={{textAlign: 'center', fontSize: 15}}>
                      { this.props.letter.type }
                    </td>
                    <td style={{textAlign: 'center', fontSize: 15}}>
                      { this.props.letter.payment }
                    </td>
                    <td style={{textAlign: 'center', fontSize: 15}} className="text-primary">
                      { this.props.letter.status }
                    </td>
                  </tr>
                </tbody>
              </table>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <FlatButton label="See More" primary={true}
                 style={{margin: 12}} onClick={this.seeMore}/>
                <FlatButton label="Payment" primary={true}
                 style={{margin: 12}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Letter;
