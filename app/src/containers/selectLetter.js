import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { hashHistory } from 'react-router';
import NavHeader from './NavHeader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import LetterItem from './letterItem';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const pStyle = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	width: '100%',
	maxWidth: 1000,
	margin: 'auto'
}

class SelectLetter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowCardOne: 1,
      shadowCardTwo: 1,
      shadowCardThree: 1,
    }
    this.onMouseOverCardOne = this.onMouseOverCardOne.bind(this);
    this.onMouseOutCardOne = this.onMouseOutCardOne.bind(this);
    this.onMouseOverCardTwo = this.onMouseOverCardTwo.bind(this);
    this.onMouseOutCardTwo = this.onMouseOutCardTwo.bind(this);
    this.onMouseOverCardThree = this.onMouseOverCardThree.bind(this);
    this.onMouseOutCardThree = this.onMouseOutCardThree.bind(this);
    this.onCloseClick = this.onCloseClick.bind(this);
    this.goLazy = this.goLazy.bind(this);
    this.goPrecise = this.goPrecise.bind(this);
    this.goVerbose = this.goVerbose.bind(this);
  }

  componentWillMount() {
    //this.props.setProps('Home', true, 0, 'menu');
  };

  onMouseOverCardOne() {
    this.setState({ shadowCardOne: 5 });
  }

  onMouseOutCardOne() {
    this.setState({ shadowCardOne: 1 });
  }

  onMouseOverCardTwo() {
    this.setState({ shadowCardTwo: 5 });
  }

  onMouseOutCardTwo() {
    this.setState({ shadowCardTwo: 1 });
  }

  onMouseOverCardThree() {
    this.setState({ shadowCardThree: 5 });
  }

  onMouseOutCardThree() {
    this.setState({ shadowCardThree: 1 });
  }

  onCloseClick() {
    hashHistory.goBack();
  }

  goLazy() {
    hashHistory.push('/questions-lazy/' + this.props.params.id);
  }

  goPrecise() {
    hashHistory.push('/questions');
  }

  goVerbose() {
    hashHistory.push('/questions-verbose/' + this.props.params.id);
  }

  render() {
    return (
      <div>
        <AppBar
        title={<span style={styles.title}>Please select one</span>}
        iconElementLeft={<IconButton onClick={this.onCloseClick}><NavigationClose /></IconButton>}/>
        <div className="container" style={pStyle}>
          <div className="row" style={{marginTop: 64}}>
            <div className="col-sm-4" style={{padding: 8, margin: 0}}>
              <Card onMouseOver={this.onMouseOverCardOne} onMouseOut={this.onMouseOutCardOne}
              style={{width: 200, height: 300,
              backgroundColor: '#EF9A9A', position: 'relative'}} zDepth={this.state.shadowCardOne}>
                <h3 style={{textAlign: 'center', padding: 12, color: 'white'}}>
                  Lazy
                </h3>
                <p style={{textAlign: 'center', padding: 12, color: 'white'}}>
                  Lazy but thoughtful? Just answer a few simple questions and we will do our magic.
                </p>
                <h2 style={{textAlign: 'center', padding: 12, color: 'white', marginTop: 44}}>
                  ₹ 100
                </h2>
                <FlatButton secondary={true} style={{position: 'absolute',
                bottom: '2px', right: '2px'}} label="Select"
                onClick={this.goLazy} />
              </Card>
            </div>
            <div className="col-sm-4" style={{padding: 8, margin: 0}}>
              <Card onMouseOver={this.onMouseOverCardTwo} onMouseOut={this.onMouseOutCardTwo}
              style={{width: 200, height: 300,
              backgroundColor: '#F44336', position: 'relative'}} zDepth={this.state.shadowCardTwo}>
                <h3 style={{textAlign: 'center', padding: 12, color: 'white'}}>
                  Precise
                </h3>
                <p style={{textAlign: 'center', padding: 12, color: 'white'}}>
                  Have something specific in mind but need help? We got your back.
                </p>
                <h2 style={{textAlign: 'center', padding: 12, color: 'white', marginTop: 64}}>
                  ₹ 200
                </h2>
                <FlatButton secondary={true} style={{position: 'absolute',
                bottom: '2px', right: '2px'}} label="Select" onClick={this.goPrecise}/>
              </Card>
            </div>
            <div className="col-sm-4" style={{padding: 8, margin: 0}}>
              <Card onMouseOver={this.onMouseOverCardThree} onMouseOut={this.onMouseOutCardThree}
              style={{width: 200, height: 300,
              backgroundColor: '#B71C1C', position: 'relative'}} zDepth={this.state.shadowCardThree}>
                <h3 style={{textAlign: 'center', padding: 12, color: 'white'}}>
                  Verbose
                </h3>
                <p style={{textAlign: 'center', padding: 12, color: 'white'}}>
                  Want to make this one count? Want to let the person know how much they
                  mean to you? No need to worry. Our super powers are at your service.
                </p>
                <h2 style={{textAlign: 'center', padding: 12, color: 'white'}}>
                  ₹ 300
                </h2>
                <FlatButton secondary={true} style={{position: 'absolute',
                bottom: '2px', right: '2px'}} label="Select" onClick={this.goVerbose}/>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SelectLetter;
