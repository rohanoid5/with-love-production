import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import TextField from 'material-ui/TextField';
import { hashHistory  } from 'react-router';
import Dialog from 'material-ui/Dialog';
import axios from 'axios';
import {
	LOGIN_SERVER
} from '../actions/apihost.js'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const pStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	width: '100%',
	maxWidth: 700,
	margin: 'auto'
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepIndex: 0,
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
      answer5: '',
      answer6: '',
      answer7: '',
      open: false,
      title: '',
      description: '',
      loading: false
    }
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.onCloseClick = this.onCloseClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.captureTitle = this.captureTitle.bind(this);
    this.captureDescription = this.captureDescription.bind(this);
    this.captureOne = this.captureOne.bind(this);
    this.captureTwo = this.captureTwo.bind(this);
    this.captureThree = this.captureThree.bind(this);
    this.captureFour = this.captureFour.bind(this);
    this.captureFive = this.captureFive.bind(this);
    this.captureSix = this.captureSix.bind(this);
  }

  componentWillMount(){
		// if(hasAccessToken()){
		// 	hashHistory.push('/home');
		// }
		this.props.setProperties('Questions', false, 1, '');
	}

  onCloseClick() {
    hashHistory.goBack();
  }

  handleNext() {
    const {stepIndex} = this.state;
    if (stepIndex < 6) {
      this.setState({stepIndex: stepIndex + 1});
    }
  }

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  handleSubmit() {
    let questions = [
      {
        question: "What is your relation with him/her?",
        answer: this.state.answer1
      },
      {
        question: "How do you feel for the person?",
        answer: this.state.answer2
      },
      {
        question: "What would you like us to emphasise on?",
        answer: this.state.answer3
      },
      {
        question: "Give few personal situations the letter to be based on.",
        answer: this.state.answer4
      },
      {
        question: "Do you want it to be casual or concerned?",
        answer: this.state.answer5
      },
      {
        question: "Swift delivery/Occasional?(if occasional then mention it)",
        answer: this.state.answer6
      },
    ]
    let data = {
      questions: questions,
      type: 'verbose',
      receiver: this.props.params.id,
      title: this.state.title,
      description: this.state.description
    }
    let accessToken = localStorage.getItem('access_token');
		var url = LOGIN_SERVER + '/letter_minimal';
    axios.post(url, data, {
			headers: {
				'Authorization': accessToken,
				'content-type': 'application/json',
			}
		}).then(response => {
			console.log(response.data);
      this.setState({loading: false});
      hashHistory.push('/home');
		})
		.catch(error => {
			console.log(error.response.data);
      this.setState({loading: false});
      hashHistory.push('/home');
		});
  }

  captureTitle(e) {
		this.state.title = e.target.value;
	}

  captureDescription(e) {
		this.state.description = e.target.value;
	}

  captureOne(e) {
		this.state.answer1 = e.target.value;
	}

  captureTwo(e) {
		this.state.answer2 = e.target.value;
	}

  captureThree(e) {
		this.state.answer3 = e.target.value;
	}

  captureFour(e) {
		this.state.answer4 = e.target.value;
	}

  captureFive(e) {
		this.state.answer5 = e.target.value;
	}

  captureSix(e) {
		this.state.answer6 = e.target.value;
	}

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  renderStepActions(step) {
    return (
      <div style={{margin: '12px 0'}}>
        {step < 6 && (
          <RaisedButton
            label="Next"
            disableTouchRipple={true}
            disableFocusRipple={true}
            primary={true}
            onTouchTap={this.handleNext}
            style={{marginRight: 12}}
          />
        )}
        {step == 6 && (
          <RaisedButton
            label="Submit"
            disableTouchRipple={true}
            disableFocusRipple={true}
            primary={true}
            onTouchTap={this.handleOpen}
            style={{marginRight: 12}}
          />
        )}
        {step > 0 && (
          <FlatButton
            primary={true}
            label="Back"
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {stepIndex} = this.state;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleSubmit}
      />,
    ];
    return (
      <div style={{margin:'auto', verticalAlign: 'middle', width: '100%',
    	maxWidth: 700,}}>
      <AppBar
          title={<span style={styles.title}>Please fill up these questionnaires</span>}
          iconElementLeft={<IconButton onClick={this.onCloseClick}><NavigationClose /></IconButton>}
        />
        <Card style={pStyle}>
          <div style={{maxWidth: 380, margin: 'auto'}}>
            <Stepper
              activeStep={stepIndex}
              linear={false}
              orientation="vertical">
              <Step>
                <StepButton style={{textAlign: 'left'}} onTouchTap={() => this.setState({stepIndex: 0})}>
                  What is your relation with him/her?
                </StepButton>
                <StepContent>
                  <TextField
                    hintText="Type here..."
                    ref="answer1"
                    onChange={this.captureOne}/>
                  {this.renderStepActions(0)}
                </StepContent>
              </Step>
              <Step>
                <StepButton style={{textAlign: 'left'}} onTouchTap={() => this.setState({stepIndex: 1})}>
                  How do you feel for the person?
                </StepButton>
                <StepContent>
                  <TextField
                    hintText="Type here..."
                    ref="answer2"
                    onChange={this.captureTwo}/>
                  {this.renderStepActions(1)}
                </StepContent>
              </Step>
              <Step>
                <StepButton style={{textAlign: 'left'}} onTouchTap={() => this.setState({stepIndex: 2})}>
                  What would you like us to emphasise on?
                </StepButton>
                <StepContent>
                  <TextField
                    hintText="Type here..."
                    ref="answer3"
                    onChange={this.captureThree}/>
                  {this.renderStepActions(2)}
                </StepContent>
              </Step>
              <Step>
                <StepButton style={{textAlign: 'left'}} onTouchTap={() => this.setState({stepIndex: 3})}>
                  Give few personal situations the letter to be based on.
                </StepButton>
                <StepContent>
                  <TextField
                    hintText="Type here..."
                    ref="answer4"
                    onChange={this.captureFour}/>
                  {this.renderStepActions(3)}
                </StepContent>
              </Step>
              <Step>
                <StepButton style={{textAlign: 'left'}} onTouchTap={() => this.setState({stepIndex: 4})}>
                   Do you want it to be casual or concerned?
                </StepButton>
                <StepContent>
                  <TextField
                    hintText="Type here..."
                    ref="answer5"
                    onChange={this.captureFive}/>
                  {this.renderStepActions(4)}
                </StepContent>
              </Step>
              <Step>
                <StepButton style={{textAlign: 'left'}} style={{textAlign: 'left'}} onTouchTap={() => this.setState({stepIndex: 5})}>
                Swift delivery/Occasional?(if occasional then mention it)
                </StepButton>
                <StepContent>
                  <TextField
                    hintText="Type here..."
                    ref="answer6"
                    onChange={this.captureSix}/>
                  {this.renderStepActions(5)}
                </StepContent>
              </Step>
              <Step style={{marginBottom: '20px'}}>
                <StepButton style={{textAlign: 'left'}} onTouchTap={() => this.setState({stepIndex: 6})}>
                  Upload a picture of you together or of the person only!
                </StepButton>
                <StepContent>
                  <FlatButton
                    label="Upload"
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    style={{verticalAlign: 'middle', textAlign: 'center'}}
                  />
                  {this.renderStepActions(6)}
                </StepContent>
              </Step>
            </Stepper>
          </div>
        </Card>
        <Dialog
          title="Please fill these two before submitting!"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}>
          <div>
            <TextField
              hintText="Title"
              ref="title"
              onChange={this.captureTitle}
              floatingLabelText="Title"/>
            <br />
            <TextField
              hintText="Description"
              ref="description"
              onChange={this.captureDescription}
              rowsMax={4}
              floatingLabelText="Description"/>
          </div>
        </Dialog>
      </div>
    );
  }

};

export default Questions;
