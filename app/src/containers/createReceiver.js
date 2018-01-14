import React from 'react';
import {Link} from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getReceiverData } from '../actions/receiverAction';
import axios from 'axios';
import {
	LOGIN_SERVER
} from '../actions/apihost.js';
import AttachFile from 'material-ui/svg-icons/editor/attach-file.js';
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
import Avatar from 'material-ui/Avatar';
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

class CreateReceiver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      gender: 'Female',
      relationship: '',
      closeness: 5,
      name: '',
      data: [],
      image: 'avatar_system_pic.jpg',
      file: ''
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
    this.selectFile = this.selectFile.bind(this);
		//appBar = this.props.params.id;
  }

  componentDidMount() {
    // this.props.getReceiverData();
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
    this.setState({uploading: true});
  	let accessToken = localStorage.getItem('access_token');
  	var data = new FormData();
  	data.append('image', this.state.file);
    data.append('name', this.state.name);
    data.append('gender', this.state.gender);
    data.append('relationship', this.state.relationship);
    data.append('closeness', this.state.closeness);

  	var url = LOGIN_SERVER + '/receiver';
    axios.post(url, data, {
      headers: {
        'Authorization': accessToken,
      }
    }).then(response => {
      if (response.status >= 200 && response.status < 300) {
        this.setState({uploading: false});
        console.log(response.data);
        hashHistory.push('/home');
      } else {
        this.setState({uploading: false});
      }
    })
    .catch(error => {
      this.setState({uploading: false});
    });
  }

  handleCloseness(event, value) {
    this.setState({closeness: value});
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
    //window.location.reload();
  }

  addReceiver() {
    this.setState({open: true});
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

  selectFile(e) {
    const file = e.target.files[0];
    this.setState({
      file: file
    });
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
      <div className="container">
        <div className="card">
          <div className="card-header" data-background-color="orange">
            <h2 style={{
              alignItems: 'center', display: 'flex',
              fontWeight: 350, fontSize: 30,
              justifyContent: 'center', textAlign: 'center'}} className="title">
              Please select a Receiver
            </h2>
          </div>
          <div className="card-content">
            <div className="row center">
              <div className="col-md-6"
                style={{display: 'flex', flexDirection: 'column'}}>
                <TextField
                  ref="name"
                  hintText="Jane Doe"
                  style={{width: '100%', marginLeft: 0}}
                  onChange={this.captureName}
                  floatingLabelText="Name" />
                <TextField
                  hintText="Wife"
                  ref="relationship"
                  style={{width: '100%', marginLeft: 0}}
                  onChange={this.captureRelationship}
                  floatingLabelText="Relationship"/>
                <SelectField
                  floatingLabelText="Gender"
                  value={this.state.gender}
                  style={{width: '100%', marginLeft: 0}}
                  selectedMenuItemStyle={{color: 'red'}}
                  onChange={this.handleChangeGender}>
                  <MenuItem value={'Male'} primaryText="Male" />
                  <MenuItem value={'Female'} primaryText="Female" />
                  <MenuItem value={'Others'} primaryText="Others" />
                </SelectField>
                <div>
                  <p>
                    <span>{'You rated this person in terms of closeness: '}</span>
                    <span>{this.state.closeness}</span>
                    <span>{' out of 10'}</span>
                  </p>
                  <Slider
                    min={1}
                    max={10}
                    step={1}
                    value={this.state.closeness}
                    onChange={this.handleCloseness}/>
                </div>
              </div>
              <div className="col-md-6">
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'right'}}>
                  <Avatar src={this.state.image} size={180}
                  style={{margin: 'auto', marginTop: 20, marginBottom: 20}}>
                  </Avatar>
                  <div style={{display: 'flex', flexDirection: 'row',
                  justifyContent: 'center', margin: 'auto'}}>
                    <p style={{fontSize: 20, margin: 'auto'}}>Upload a picture</p>
                    <FloatingActionButton mini={true} style={{margin: '0px 4px'}}>
                      <AttachFile />
                      <input type="file" style={{
                        cursor: 'pointer',
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        width: '100%',
                        opacity: 0,
                      }} accept="image/png, image/jpeg"
                      onChange={(event) => this.selectFile(event)}/>
                    </FloatingActionButton>
                  </div>
                </div>
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center',}}>
              <RaisedButton disabled={this.state.uploading} primary={true} label="Submit"
              style={{width: '50%'}} onClick={this.handleSubmit}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
};


export default CreateReceiver;
