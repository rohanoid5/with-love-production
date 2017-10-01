import React from 'react';
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { bindActionCreators } from 'redux';
import { logginUser } from '../actions/loginAction';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import CircularProgress from '../components/progressbar';
import Paper from 'material-ui/Paper';
import FacebookLogin from '../components/FacebookLogin';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import AppBar from 'material-ui/AppBar';
import { hashHistory  } from 'react-router';
import { hasAccessToken } from '../index.js';
import { connect } from 'react-redux';

const CLIENT_ID = '37362612484-gubpuasdpb37vpp1gntsm1sl6bpo0tlm.apps.googleusercontent.com';
const SCOPES = ['profile email'];

const style = {
	margin: 12,
};

const pStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	width: '100%',
	maxWidth: 350,
	margin: 'auto',
	marginTop: 64,
	padding: 24
}

const fStyle = {
	textAlign: 'center',
}

const fbStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	margin: 'auto'
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
	marginTop: 2
}

const cArray = ['#FFEBEE', '#EF9A9A', '#F44336', '#B71C1C'];

class Login extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
			user: {
				email: '',
				password: '',
			},
			myCounter: 0,
		};
    this.onSignupClick = this.onSignupClick.bind(this);
		this.onLoginClick = this.onLoginClick.bind(this);
		this.responseGoogle = this.responseGoogle.bind(this);
	  this.clickHandler = this.clickHandler.bind(this);
		this.increaseColorIndex = this.increaseColorIndex.bind(this);
  }

	componentWillMount(){
		// if(hasAccessToken()){
		// 	hashHistory.push('/home');
		// }
		this.props.setProperties('Login', false, 1, '');
	}

	componentDidMount() {
		if (this.refs.action) {
	    this.loadInterval = setInterval(this.increaseColorIndex, 250);
		}
  }

	componentWillUnmount () {
    this.loadInterval && clearInterval(this.loadInterval);
    this.loadInterval = false;
	}

	increaseColorIndex() {
		this.setState({ myCounter: this.state.myCounter + 1 });
	}

  onSignupClick() {
    hashHistory.push('/signup');
  }

	onLoginClick() {
		hashHistory.push('/home');
	}

	captureMail(e) {
		this.state.user.email = e.target.value;
	};

	capturePassword(e) {
		this.state.user.password = e.target.value;
	};

	clickHandler() {
		let authData = {
      client_id: CLIENT_ID,
      scope: SCOPES,
      immediate: false
    };
		gapi.auth.authorize(authData, (response) => {
      //var authButton = document.getElementById('auth-button');
      if (response.error) {
				console.log(response.error);
      }
      else {
				//console.log(response);
				gapi.client.load('plus','v1', () => {
					var request = gapi.client.plus.people.get({
					  'userId': 'me'
					});
					request.execute((resp) => {
					  console.log(resp);
						let email = resp.emails[0].value;
						let name = resp.displayName;
						let image = resp.image.url
						this.props.logginUser(email, name, image);
					});
				});
			}
    });
	}

	responseGoogle(googleUser) {
		console.log(googleUser.code);
	};

  render() {
		if(true) {
    	return (
	      <div style={{margin:'auto', verticalAlign: 'middle'}}>
					<div style={pStyle}>
						<Paper style={{paddingTop: '20px', paddingBottom: '20px',
						marginBottom: 12, paddingLeft: 60, paddingRight: 60}}>
		          <div style={{display: 'flex', flexDirection: 'row',
								alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
		            <h2 style={{color: '#FF6B6C', marginTop: 4}}>With Love </h2>
								<ActionFavorite ref="action" style={{marginLeft: 6, marginTop: 6}}
								color={cArray[this.state.myCounter % 4]} />
		          </div>
							<div style={{textAlign:'center', marginTop: '4px'}}>
		            An easy way to express your Love.
							</div>
						</Paper>
						<form style={fStyle}>
	  				  <div style={bStyle}>
	  						<RaisedButton onClick={this.clickHandler}
								style={style} label="Login" fullWidth={true}
								disabled={this.props.authState.logging}
								icon={<img src="ic_google.jpg" style={{height:18}}/>} />
	  					</div>
							<h5 style={{textAlign:'center', marginTop: '0px', color: 'white'}}>
								Or
							</h5>
							<div>
								<FacebookLogin socialId="SOCIAL_ID"
								language="en_US"
								scope="public_profile, email, user_friends"
								xfbml={true}
								version="v2.5"
								class="facebook-login"
								buttonText="Login"/>
	  					</div>
						</form>
					</div>
				</div>
    	);
		} else {
			return (
				<CircularProgress color="white"/>
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
		logginUser: logginUser,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
