import React from 'react';
import {
  Link
} from 'react-router';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {
  bindActionCreators
} from 'redux';
import {
  loginUser, signupUser
} from '../actions/adminLoginAction';
import {
  Card,
  CardActions,
  CardHeader,
  CardText
} from 'material-ui/Card';
import CircularProgress from '../components/progressbar';
import { hasAccessToken } from '../index.js';
import FontIcon from 'material-ui/FontIcon';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import ActionVisibility from 'material-ui/svg-icons/action/visibility';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import {
  hashHistory
} from 'react-router';
import {
  connect
} from 'react-redux';

const style = {
  margin: 4,
};

const pStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  maxWidth: 400,
  margin: 'auto',
  padding: 24
}

const mStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  maxWidth: 800,
  margin: 'auto',
  padding: 24
}

const fStyle = {
  textAlign: 'center',
}

const fbStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0
}

const tStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 12
}

const bStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 16,
  flexDirection: 'column'
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
        name: '',
      },
      open: true,
      visibility: true,
      inputType: 'password',
      emailErrorText: '',
      passwordErrorText: '',
      openActive: true,
      showLogin: true,
      completeOpen: true,
    };
    this.onSignupClick = this.onSignupClick.bind(this);
    this.onForgotClick = this.onForgotClick.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
    this.handleOpenActive = this.handleOpenActive.bind(this);
		this.handleCloseActive = this.handleCloseActive.bind(this);
    this.handleVisibility = this.handleVisibility.bind(this);
    this.switchPages = this.switchPages.bind(this);
    this.handleCompleteClose = this.handleCompleteClose.bind(this);
  }

  componentWillMount() {
    // if(hasAccessToken()){
		// 	hashHistory.push('/home');
		// }
    this.props.setProperties('Login', false, 1, '');
  }

  onSignupClick() {
    if (this.state.user.email.length == 0) {
      this.setState({ emailErrorText: 'This field is required.' });
      return;
      // this.props.logginUser(this.state.user);
    }
    if (this.state.user.password.length == 0) {
      this.setState({ passwordErrorText: 'This field is required.' });
      return;
    }
    this.props.signupUser(this.state.user);
  }

  onLoginClick() {
    if (this.state.user.email.length == 0) {
      this.setState({ emailErrorText: 'This field is required.' });
      return;
      // this.props.logginUser(this.state.user);
    }
    if (this.state.user.password.length == 0) {
      this.setState({ passwordErrorText: 'This field is required.' });
      return;
    }
    this.props.loginUser(this.state.user);
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  handleOpenActive() {
    this.setState({openActive: true});
  }

  handleCloseActive() {
    this.setState({openActive: false});
  }

  onForgotClick() {
    hashHistory.push('/forgot');
  }

  captureMail(e) {
    this.state.user.email = e.target.value;
  }

  capturePassword(e) {
    this.state.user.password = e.target.value;
  }

  captureName(e) {
    this.state.user.name = e.target.value;
  }

  handleVisibility() {
		if (this.state.visibility == true) {
			this.setState({visibility: false, inputType: ''});
			// console.log(this.state);
		} else {
			this.setState({visibility: true, inputType: 'password'});
			// console.log(this.state);
		}
	}

  switchPages() {
    this.setState({
      showLogin: !this.state.showLogin
    });
  }

  handleCompleteClose() {
    this.setState({completeOpen: false});
		window.location.reload();
  }

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        secondary={true}
        onTouchTap={this.handleClose}
      />,
    ];
    const actionsActive = [
      <FlatButton
        label="Ok"
        secondary={true}
        onTouchTap={this.handleCloseActive}
      />,
    ];
    const completeActions = [
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleCompleteClose}
      />,
    ];
    if (true) {
      return (
        <div style={mStyle}>
          <h1 style={{color: '#FFFFFF', textTransform: 'uppercase', margin: 20}}>
            <span style={{display: 'block'}}>
              <div style={{
                fontSize: '50px',
                fontWeight: 400,
                letterSpacing: '35px',
                textAlign: 'center'
              }}>
                <span>With Love</span>

              </div>
            </span>
            <span style={{display: 'block', fontSize: '15px', marginTop: '8px',
            fontWeight: 300, letterSpacing: '15px', textAlign: 'center', lineHeight: 2}}>
              An easy way to express your love
            </span>
          </h1>
          <div style={{paddingTop: 20}}>
            {
              this.state.showLogin ?
              <Card style={pStyle} zDepth={2} rounded={true}>
                <form style = {fStyle} >
                  <div className = "group" >
                    <TextField ref = "email"
                      hintText = "Email"
                      floatingLabelText = "Email"
                      type = "Email"
                      errorText={this.state.emailErrorText}
                      onChange={this.captureMail.bind(this)}/>
                  </div>
                  <div className="group">
                    <TextField
                      hintText="Password "
                      ref="password"
                      floatingLabelText="Password"
                      type={this.state.inputType}
                      errorText= {this.state.passwordErrorText}
                      onChange={this.capturePassword.bind(this)}/>
                  </div>
                  <div style={bStyle} >
                    <RaisedButton onClick={this.onLoginClick}
                      secondary={true}
                      style={style}
                      disabled={this.props.authState.logging}
                      label={this.props.authState.logging ? "Wait..." : "Login"}/>
                    <FlatButton secondary={true} onClick={this.onForgotClick}
                      label="Forgot password?" style={style} />
                    <RaisedButton onClick={this.switchPages}
                      secondary={true}
                      style={style}
                      disabled={this.props.authState.logging}
                      label={this.props.authState.logging ? "Wait..." : "Register"}/>
                  </div>
                </form>
              </Card> :
              <Card style = {pStyle} zDepth={2} rounded={true}>
                <form style = {fStyle} >
                  <div className="group">
                    <TextField
                      hintText="Jason Doe "
                      ref="name"
                      floatingLabelText="Name"
                      type="name"
                      errorText= {this.state.nameErrorText}
                      onChange={this.captureName.bind(this)}/>
                  </div>
                  <div className = "group" >
                    <TextField ref = "email"
                    hintText = "Email"
                    floatingLabelText = "Email"
                    type = "Email"
                    errorText= {this.state.emailErrorText}
                    onChange = {this.captureMail.bind(this)}/>
                  </div>
                  <div className="group">
                    <TextField
                      hintText="Password "
                      ref="password"
                      floatingLabelText="Password"
                      type={this.state.inputType}
                      errorText= {this.state.passwordErrorText}
                      onChange={this.capturePassword.bind(this)}/>
                  </div>
                  <div style={bStyle} >
                    <RaisedButton onClick={this.onSignupClick}
                      secondary={true}
                      style={style}
                      disabled={this.props.authState.logging}
                      label={this.props.authState.logging ? "Wait..." : "Register"}/>
                    <RaisedButton onClick={this.switchPages}
                      secondary={true}
                      style={style}
                      disabled={this.props.authState.logging}
                      label={this.props.authState.logging ? "Wait..." : "Login"}/>
                  </div>
                </form>
              </Card>
            }
          </div>
          <Dialog
            title="Error"
            actions={actions}
            modal={false}
            open={false}
            onRequestClose={this.handleClose}>
            {this.props.authState.errorMsg}
          </Dialog>
          <Dialog
            title="Done"
            actions={completeActions}
            modal={false}
            open={this.state.completeOpen && this.props.authState.completed}
            onRequestClose={this.handleCompleteClose}>
            You're successfully Registered.
          </Dialog>
        </div>
      );
    } else {
    	return (
    		<CircularProgress color="#B71C1C"/>
    	)
    }
  }
};

function mapStateToProps(state) {
  return {
    authState: state.authState
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loginUser: loginUser,
    signupUser: signupUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
