import React, {Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import {hashHistory} from 'react-router';

const pStyle={
	display:'flex',
	alignItems: 'center',
	height:'90vh',
	margin:'auto',
	justifyContent: 'center'
};

const tStyle2 ={
	margin:'auto'
};

const cArray = ['#FFEBEE', '#EF9A9A', '#F44336', '#B71C1C'];

export default class HeartLoading extends React.Component {

  constructor(props) {
    super(props);
		this.state = {
			myCounter: 0,
		};
		this.increaseColorIndex = this.increaseColorIndex.bind(this);
  }

  increaseColorIndex() {
		this.setState({ myCounter: this.state.myCounter + 1 });
	}

  componentDidMount(){
  	if(this.props.to){
  		hashHistory.push(this.props.to);
  	}
    if (this.refs.action) {
      this.loadInterval = setInterval(this.increaseColorIndex, 250);
    }
  }

  componentWillUnmount () {
    this.loadInterval && clearInterval(this.loadInterval);
    this.loadInterval = false;
  }

	render() {
    return (
	    <div style={pStyle}>
        <ActionFavorite ref="action" style={{marginLeft: 6, marginTop: 6, width: 50, height: 50}}
        color={cArray[this.state.myCounter % 4]} />
				<h4 style={{margin: 8, marginTop: 18}}>Please wait...</h4>
	    </div>
	  )
  }
}
