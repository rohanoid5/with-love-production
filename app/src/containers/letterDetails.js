import React from 'react';
import {Link} from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMinimalLetterOne } from '../actions/letterAction';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
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
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import LetterItem from './letterItem';
import QuestionList from './questionList';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

class LetterDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shadowRight: 1,
      shadowLeft: 1,
      expanded: false,
  		title: 'Home',
    }
    this.onCloseClick = this.onCloseClick.bind(this);
    this.questionItemFill = this.questionItemFill.bind(this);
  }

  componentDidMount() {
    this.props.getMinimalLetterOne(this.props.params.id);
  }

  componentWillMount() {
    //this.props.setProps('Home', true, 0, 'menu');
  }

  onCloseClick() {
    hashHistory.goBack();
  }

  questionItemFill(question, index) {
    return (
      <QuestionList key={question._id} question={question}/>
    );
  }

  render() {
    return (
      <div>
        {this.props.letterOne.completed ?
          <div>
            <AppBar
            title={<span style={styles.title}>{this.props.letterOne.data.letter.title}</span>}
            iconElementLeft={<IconButton onClick={this.onCloseClick}><NavigationClose /></IconButton>}/>
            <div className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                      <div className="card-header" data-background-color="orange">
                        <i className="material-icons">email</i>
                      </div>
                      <div className="card-content">
                        <p className="category">Letter Type</p>
                        <h3 className="title">
                          { this.props.letterOne.data.letter.type }
                        </h3>
                      </div>
                      <div className="card-footer">
                        <div className="stats">
                          <a href="#pablo">Get More Space...</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                      <div className="card-header" data-background-color="green">
                        <i className="material-icons">monetization_on</i>
                      </div>
                      <div className="card-content">
                        <p className="category">Payment</p>
                        <h3 className="title">$2</h3>
                      </div>
                      <div className="card-footer">
                        <div className="stats">
                          { this.props.letterOne.data.letter.payment }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                      <div className="card-header" data-background-color="red">
                        <i className="material-icons">attach_file</i>
                      </div>
                      <div className="card-content">
                        <p className="category">Link</p>
                        <h3 className="title">
                          Pending
                        </h3>
                      </div>
                      <div className="card-footer">
                        <div className="stats">
                          Will be available shortly
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                      <div className="card-header" data-background-color="blue">
                        <img src="avatar.jpg" alt="Thumbnail Image"
                        style={{width: 60}}
                        className="img-circle img-raised img-responsive"/>
                      </div>
                      <div className="card-content">
                        <p className="category">Receiver</p>
                        <h3 className="title">Jane Doe</h3>
                      </div>
                      <div className="card-footer">
                        <div className="stats">
                          Just Updated
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div className="container-fluid">
                    <div className="row">
                      <div style={{
                        fontSize: '30px',
                        fontWeight: 400,
                        letterSpacing: '5px',
                        textAlign: 'center',
                        marginBottom: 12
                      }}>
                        <span>THE QUESTIONS YOU ANSWERED</span>
                      </div>
                      <GridList>
                        {
                          this.props.letterOne.data.letter.questions.map(this.questionItemFill)
                        }
                      </GridList>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        : <div>A</div>}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    letterOne: state.letterOne
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
	  getMinimalLetterOne
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LetterDetails);
