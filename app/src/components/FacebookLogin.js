import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const bStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	marginTop: 2
}

export default class FacebookLogin extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    (function (d, s, id) {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/all.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = () => {
      FB.init({
        appId: this.props.socialId,
        xfbml: this.props.xfbml,
        cookie: this.props.cookie,
        version: this.props.version,
      });
    };
  }

  responseApi (authResponse) {
    FB.api('/me', { fields: this.props.fields }, (me) => {
      me.accessToken = authResponse.accessToken;
      this.props.responseHandler(me);
    });
  };

  checkLoginState (response) {
    if (response.authResponse) {
      this.responseApi(response.authResponse);
    } else {
      if (this.props.responseHandler) {
        this.props.responseHandler({ status: response.status });
      }
    }
  };

  clickHandler () {
    FB.login(this.checkLoginState.bind(this), { scope: this.props.scope });
  };

  render() {
    return (
      <div style={{marginTop: 8}}>
        <RaisedButton className={this.props.class}
          label={this.props.buttonText}
     	    labelStyle={{color:'white'}}
					disabledBackgroundColor="#94acdd"
     	    onClick={this.clickHandler.bind(this)}
          backgroundColor="#3b5998"
          fullWidth={true}
          style={{marginTop: 6}}
          icon={<img src="ic_facebook.png" style={{height:24}}/>} />
      </div>
    );
  }
}
