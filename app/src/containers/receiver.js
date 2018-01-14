import React from 'react';
import {Link} from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getReceiverData } from '../actions/receiverAction';
import axios from 'axios';
import {
	LOGIN_SERVER
} from '../actions/apihost.js'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import { hashHistory  } from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconMenu from 'material-ui/IconMenu';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import ReceiverItem from './receiverItem';
import Slider from 'material-ui/Slider';
import CircularProgress from '../components/progressbar';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

const styles = {
  title: {
    cursor: 'pointer',
  },
};

let appBar = '13'

class Receiver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      gender: 'Male',
      relationship: '',
      closeness: 5,
      name: '',
      data: []
    }
    this.addReceiver = this.addReceiver.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChangeGender = this.handleChangeGender.bind(this);
    this.handleChangeRelationship = this.handleChangeRelationship.bind(this);
    this.handleCloseness = this.handleCloseness.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.captureName = this.captureName.bind(this);
		this.onCloseClick = this.onCloseClick.bind(this);
    this.captureRelationship = this.captureRelationship.bind(this);
    this.receiverItemFill = this.receiverItemFill.bind(this);

		//appBar = this.props.params.id;
  }

  componentDidMount() {
    this.props.getReceiverData();
  }

  componentWillMount(){
    //this.props.getReceiverData();
	}

  componentWillReceiveProps() {
    // this.setState({
    //   data: this.props.receiver.data.map(receiver => {name: receiver.name})
    // })
  }

	onCloseClick() {
    hashHistory.goBack();
  }

  captureName(e) {
		this.state.name = e.target.value;
	}

	captureRelationship(e) {
		this.state.relationship = e.target.value;
	}

  handleSubmit() {
    console.log(this.state);
    let accessToken = localStorage.getItem('access_token');
		var url = LOGIN_SERVER + '/receiver';
		let bdata = {
			first_name: this.state.name,
			gender: this.state.gender,
			closeness: this.state.closeness,
      relationship: this.state.relationship
		}
		axios.post(url, bdata, {
			headers: {
				'Authorization': accessToken,
				'content-type': 'application/json',
			}
		}).then(response => {
			console.log(response.data);
      this.setState({open: false});
      window.location.reload();
		})
		.catch(error => {
			console.log(error.response.data);
      this.setState({open: false});
      window.location.reload();
		});
  }

  handleCloseness(event, value) {
    this.setState({closeness: value});
  }

  handleOpen() {
    hashHistory.push('/create-receiver');
  }

  handleClose() {
    hashHistory.push('/create-receiver');
    //window.location.reload();
  }

  addReceiver() {
    hashHistory.push('/create-receiver');
    //console.log(this.props.receiver.data);
  }

  handleChangeGender(event, index, gender) {
    this.setState({gender});
  }

  handleChangeRelationship(event, index, relationship) {
    this.setState({relationship});
  }

  receiverItemFill(receiver, index) {
    return (
      <ReceiverItem key={receiver._id} receiver={receiver}/>
    );
  }

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}/>,
      <FlatButton
        label="Add"
        primary={true}
        onClick={this.handleSubmit}/>,
    ];

    return (
      <div>
			{!this.props.receiver.completed ?
        <CircularProgress /> :
				<div>
	        {this.props.receiver.data.length > 0 ?
						<div className="col-md-12" style={{margin: 8}}>
			        <div className="card card-plain">
			          <div className="card-header" data-background-color="purple">
			            <h2 style={{
			  						alignItems: 'center', display: 'flex',
			  						fontWeight: 350, fontSize: 30,
			  						justifyContent: 'center', textAlign: 'center'}} className="title">
			                Please select a Receiver
			              </h2>
			          </div>
			          <div className="card-content table-responsive">
			            <table className="table table-hover">
			              <thead>
			                <th style={{textAlign: 'center', fontSize: 20}}></th>
			                <th style={{textAlign: 'center', fontSize: 20}}>Name</th>
			                <th style={{textAlign: 'center', fontSize: 20}}>Gender</th>
			                <th style={{textAlign: 'center', fontSize: 20}}>Relationship</th>
			                <th style={{textAlign: 'center', fontSize: 20}}>Closeness</th>
			              </thead>
			              <tbody>
			                {
												this.props.receiver.data.map(this.receiverItemFill)
											}
			              </tbody>
			            </table>
			          </div>
			        </div>
			      </div> :
					<h1 style={{
						alignItems: 'center', display: 'flex',
						fontWeight: 350, fontSize: 30,
						justifyContent: 'center', textAlign: 'center', marginTop: 100}}>
	          No one is here :( Please add a Receiver.
	        </h1>
					}
				</div>}
        <FloatingActionButton
        onClick={this.addReceiver}
          style={{position: 'fixed', bottom: 0, right: 0, margin: 48}}>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
					contentStyle={customContentStyle}
          onRequestClose={this.addReceiver}>
					<div className="container">
						<div className="row">
							<TextField
								ref="name"
								hintText="Jane Doe"
								onChange={this.captureName}
								style={{width: '40%', marginLeft: 16}}
								floatingLabelText="Name"/>
							<TextField
								hintText="Wife"
								ref="relationship"
								style={{width: '40%', marginLeft: 16}}
								onChange={this.captureRelationship}
								floatingLabelText="Relationship"/>
						</div>
						<div className="row">
							<SelectField
								floatingLabelText="Gender"
								value={this.state.gender}
								style={{width: '40%', marginLeft: 16}}
								selectedMenuItemStyle={{color: 'red'}}
								onChange={this.handleChangeGender}>
								<MenuItem value={'Male'} primaryText="Male" />
								<MenuItem value={'Female'} primaryText="Female" />
								<MenuItem value={'Others'} primaryText="Others" />
							</SelectField>
							<div style={{display: 'inline-block', textAlign: 'center'}}>
								<p>ASD</p>
							</div>
						</div>
					</div>
        </Dialog>
      </div>
    );
  }
};

function mapStateToProps(state, ownProps) {
  return {
    receiver: state.receiver
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
	  getReceiverData
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Receiver);
