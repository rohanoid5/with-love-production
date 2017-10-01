import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import LinearProgress from 'material-ui/LinearProgress';
// import CircularProgress from '../components/progressbar';
import FlatButton from 'material-ui/FlatButton';
import {hashHistory} from 'react-router';
const styles={
		header:{
			background:'#004d99',
			backgroundImage: 'url(header2.jpg)',
			backgroundSize: 'cover',
			height:'116px',
			display:'flex',
			flexDirection:'column',
			padding:'30px 16px 12px'
		},
		subHeader:{
			display:'flex',
			alignItems:'center'
		},
		text:{
			color: '#FFFFFF',
		},
		progressbar:{
			marginTop:'4px',
			height:2
		},
		button:{
			color: '#FFFFFF',
			fontSize: '12px',
			marginLeft:'4px',
			fontWeight:'400'
		}
}

class NavHeader extends React.Component {

	constructor(props) {
	    super(props);
			this.state = {
				dp: this.props.value
			}
	    this.handleClick = this.handleClick.bind(this);
	    this.getDp = this.getDp.bind(this);
			//console.log(this.props.value);
	};

	 handleClick(){
		 //hashHistory.push('/profile');
		 this.props.drawer();
	 }


	 getDp(){

	 		//var dp = this.props.profiles.status.dp;
		  if(false){
				return (<Avatar size={54} onTouchTap={this.handleClick} />);
		  } else{
			  return (<Avatar src={this.props.image} size={54} onTouchTap={this.handleClick} />);
		  }
	 }
	render() {
		if(true){
			//var status = this.props.profiles.status.profileStatus;
			// <FlatButton labelStyle={styles.button}  onClick={this.handleClick} rippleColor="white" label="Complete Now" />
		{
			return(
				<div style={styles.header}>
					<div style={styles.subHeader}>
						{this.getDp()}
					</div>
					<div style={{marginTop:'auto',marginRight:'auto'}}>
					<div style={{color:'white',fontWeight:300,paddingTop:2}}>{this.props.name}</div>
					</div>
					</div>
			)}
		} else {
			return (
				<div style={styles.header}>
					<div style={styles.avatar}>
					</div>
					<div style={styles.text}>Loading...</div>
				</div>
			)
		}
	}
}

export default NavHeader;
