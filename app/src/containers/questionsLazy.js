import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import axios from 'axios';
import {
	LOGIN_SERVER
} from '../actions/apihost.js'
import TextField from 'material-ui/TextField';
import { hashHistory  } from 'react-router';
import HeartLoading from '../components/heartLoading';
import Dialog from 'material-ui/Dialog';
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

class QuestionsLazy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepIndex: 0,
      answer1: 'option1',
      answer2: 'option1',
      answer3: 'option1',
      answer4: 'option1',
      answer5: 'option1',
      answer6: 'option1',
      open: false,
      title: '',
      description: '',
      loading: false
    }
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.onCloseClick = this.onCloseClick.bind(this);
    this.handleTypeChangeOne = this.handleTypeChangeOne.bind(this);
    this.handleTypeChangeTwo = this.handleTypeChangeTwo.bind(this);
    this.handleTypeChangeThree = this.handleTypeChangeThree.bind(this);
    this.handleTypeChangeFour = this.handleTypeChangeFour.bind(this);
    this.handleTypeChangeFive = this.handleTypeChangeFive.bind(this);
    this.handleTypeChangeSix = this.handleTypeChangeSix.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.captureTitle = this.captureTitle.bind(this);
    this.captureDescription = this.captureDescription.bind(this);
  }

  componentWillMount(){
		this.props.setProperties('Questions', false, 1, '');
	}

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
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

  handleSubmit() {
    let questions = [
      {
        question: "question 1",
        answer: this.state.answer1
      },
      {
        question: "question 2",
        answer: this.state.answer2
      },
      {
        question: "question 3",
        answer: this.state.answer3
      },
      {
        question: "question 4",
        answer: this.state.answer4
      },
      {
        question: "question 5",
        answer: this.state.answer5
      },
      {
        question: "question 6",
        answer: this.state.answer6
      },
    ]
    let data = {
      questions: questions,
      type: 'lazy',
      receiver: this.props.params.id,
      title: this.state.title,
      description: this.state.description
    }
    //console.log(data);
    this.setState({loading: true});
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

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  handleTypeChangeOne(e, v){
		if(v == 1)
			this.setState({answer1: 'option1'});
		else this.setState({answer1: 'option2'});
	}

  handleTypeChangeTwo(e, v){
		if(v==1)
			this.setState({answer2: 'option1'});
		else this.setState({answer2: 'option2'});
	}

  handleTypeChangeThree(e, v){
		if(v==1)
			this.setState({answer3: 'option1'});
		else this.setState({answer3: 'option2'});
	}

  handleTypeChangeFour(e, v){
		if(v==1)
			this.setState({answer4: 'option1'});
		else this.setState({answer4: 'option2'});
	}

  handleTypeChangeFive(e, v){
		if(v==1)
			this.setState({answer5: 'option1'});
		else this.setState({answer5: 'option2'});
	}

  handleTypeChangeSix(e, v){
		if(v==1)
			this.setState({answer6: 'option1'});
		else this.setState({answer6: 'option2'});
	}

  captureTitle(e) {
		this.state.title = e.target.value;
	}

  captureDescription(e) {
		this.state.description = e.target.value;
	}

  renderStepActions(step) {
    return (
      <div style={{margin: '12px 0'}}>
        {step < 5 && (
          <RaisedButton
            label="Next"
            disableTouchRipple={true}
            disableFocusRipple={true}
            primary={true}
            onTouchTap={this.handleNext}
            style={{marginRight: 12}}
          />
        )}
        {step == 5 && (
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
    if (!this.state.loading) {
      return (
        <div style={{margin:'auto', verticalAlign: 'middle', width: '100%',
      	maxWidth: 700,}}>
        <AppBar
            title={<span style={styles.title}>Please answer these questions</span>}
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
                    Question number 1
                  </StepButton>
                  <StepContent>
                  <RadioButtonGroup style={{marginTop: 8}} name="shipSpeed" defaultSelected="1"
                    ref = "answer1" onChange={this.handleTypeChangeOne}>
                    <RadioButton
                      value="1"
                      label="Answer 1"
                      labelStyle={{width:'auto',marginLeft:0}}/>
                    <RadioButton
                      value="2"
                      label="Answer 2"
                      labelStyle={{width:'auto',marginLeft:0}}/>
                    </RadioButtonGroup>
                    {this.renderStepActions(0)}
                  </StepContent>
                </Step>
                <Step>
                  <StepButton style={{textAlign: 'left'}} onTouchTap={() => this.setState({stepIndex: 1})}>
                    Question number 2
                  </StepButton>
                  <StepContent>
                  <RadioButtonGroup style={{marginTop: 8}} name="shipSpeed" defaultSelected="1"
                    ref = "answer2" onChange={this.handleTypeChangeTwo}>
                    <RadioButton
                      value="1"
                      label="Answer 1"
                      labelStyle={{width:'auto',marginLeft:0}}/>
                    <RadioButton
                      value="2"
                      label="Answer 2"
                      labelStyle={{width:'auto',marginLeft:0}}/>
                    </RadioButtonGroup>
                    {this.renderStepActions(1)}
                  </StepContent>
                </Step>
                <Step>
                  <StepButton style={{textAlign: 'left'}} onTouchTap={() => this.setState({stepIndex: 2})}>
                    Question number 3
                  </StepButton>
                  <StepContent>
                  <RadioButtonGroup style={{marginTop: 8}} name="shipSpeed" defaultSelected="1"
                    ref = "answer3" onChange={this.handleTypeChangeThree}>
                    <RadioButton
                      value="1"
                      label="Answer 1"
                      labelStyle={{width:'auto',marginLeft:0}}/>
                    <RadioButton
                      value="2"
                      label="Answer 2"
                      labelStyle={{width:'auto',marginLeft:0}}/>
                    </RadioButtonGroup>
                    {this.renderStepActions(2)}
                  </StepContent>
                </Step>
                <Step>
                  <StepButton style={{textAlign: 'left'}} onTouchTap={() => this.setState({stepIndex: 3})}>
                    Question number 4
                  </StepButton>
                  <StepContent>
                  <RadioButtonGroup style={{marginTop: 8}} name="shipSpeed" defaultSelected="1"
                    ref = "answer4" onChange={this.handleTypeChangeFour}>
                    <RadioButton
                      value="1"
                      label="Answer 1"
                      labelStyle={{width:'auto',marginLeft:0}}/>
                    <RadioButton
                      value="2"
                      label="Answer 2"
                      labelStyle={{width:'auto',marginLeft:0}}/>
                    </RadioButtonGroup>
                    {this.renderStepActions(3)}
                  </StepContent>
                </Step>
                <Step>
                  <StepButton style={{textAlign: 'left'}} onTouchTap={() => this.setState({stepIndex: 4})}>
                     Question number 5
                  </StepButton>
                  <StepContent>
                  <RadioButtonGroup style={{marginTop: 8}} name="shipSpeed" defaultSelected="1"
                    ref = "answer5" onChange={this.handleTypeChangeFive}>
                    <RadioButton
                      value="1"
                      label="Answer 1"
                      labelStyle={{width:'auto',marginLeft:0}}/>
                    <RadioButton
                      value="2"
                      label="Answer 2"
                      labelStyle={{width:'auto',marginLeft:0}}/>
                    </RadioButtonGroup>
                    {this.renderStepActions(4)}
                  </StepContent>
                </Step>
                <Step style={{marginBottom: 12}}>
                  <StepButton style={{textAlign: 'left'}} style={{textAlign: 'left'}} onTouchTap={() => this.setState({stepIndex: 5})}>
                  Question number 6
                  </StepButton>
                  <StepContent>
                  <RadioButtonGroup style={{marginTop: 8}} name="shipSpeed" defaultSelected="1"
                    ref = "answer6" onChange={this.handleTypeChangeSix}>
                    <RadioButton
                      value="1"
                      label="Answer 1"
                      labelStyle={{width:'auto',marginLeft:0}}/>
                    <RadioButton
                      value="2"
                      label="Answer 2"
                      labelStyle={{width:'auto',marginLeft:0}}/>
                    </RadioButtonGroup>
                    {this.renderStepActions(5)}
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
    } else {
      return(
        <HeartLoading/>
      );
    }
  }

};

export default QuestionsLazy;
