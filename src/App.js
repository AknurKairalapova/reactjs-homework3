import React, {Component} from 'react';
import './App.css';
import Step from './Step';
import PersonalForm from './PersonalForm';
import CardForm from './CardForm';

const stepTitles = ['Personal information', 'Card information', 'Finish'];

class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    isTimeOver: false
  }


  handleTabClick = (number) => {
    this.setState({step: number});
  }

  handleChangeForm = (name, value) => {
    this.setState({[name]: value});
  }

  handleClickNextForm = (event) => {
      const {step} = this.state;
      this.setState({step: step + 1});
  }

  handleChangeTimeOver = (booleanValue) => {
    this.setState({isTimeOver: booleanValue});
  }

  isFormCommitable = () => {
    if (this.state.step === 1) {
      return this.state.firstName !== '' && this.state.lastName !== '' && this.state.email !== '' && this.state.email.includes('@');
    } else if (this.state.step === 2) {
      return this.state.cardNumber.length === 16;
    } else {
      return false;
    }
  }

  renderForm = () => {
    if ( this.state.step === 1 ) {
      return <PersonalForm firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} onChangeForm={this.handleChangeForm} />;
    } else if ( this.state.step === 2 ) {
      return <CardForm cardNumber={this.state.cardNumber} onChangeForm={this.handleChangeForm} onChangeTimeOver={this.handleChangeTimeOver} />;
    } else if ( this.state.step === 3 ) {
      return 'Поздравляем!';
    }
  }


  render() {
    const {isTimeOver} = this.state;
    
    return (
      <div>
        <div className="container">
            {
              this.state.step === 1 
              ? (<div className="tab-panel">
                <Step key="Personal information" onClick={this.handleTabClick} isSelected number={1} isClickable={false}>Personal information</Step>
                <Step key="Card information" onClick={this.handleTabClick} isSelected={false} number={2} isClickable={false} >Card information</Step>
                <Step key="Finish" onClick={this.handleTabClick} isSelected={false} number={3} isClickable={false} >Finish</Step>
              </div>)
              : this.state.step === 2
                ? (<div className="tab-panel">
                    <Step key="Personal information" onClick={this.handleTabClick} isSelected={false} number={1} isClickable={true}>Personal information</Step>
                    <Step key="Card information" onClick={this.handleTabClick} isSelected={true} number={2} isClickable={false}>Card information</Step>
                    <Step key="Finish" onClick={this.handleTabClick} isSelected={false} number={3} isClickable={false}>Finish</Step>
                  </div>)
                : this.state.step === 3
                ? (<div className="tab-panel">
                  <Step key="Personal information" onClick={this.handleTabClick} isSelected={false} number={1} isClickable={true} >Personal information</Step>
                  <Step key="Card information" onClick={this.handleTabClick} isSelected={false} number={2} isClickable={true} >Card information</Step>
                  <Step key="Finish" onClick={this.handleTabClick} isSelected={true} number={3} isClickable={false} >Finish</Step>
                </div>)
                : <div></div>
            }
          <div className="form-content">
            {this.renderForm()}
          </div>
          <div className="button-panel">
            <button className="button-next" onClick={this.handleClickNextForm} disabled={!this.isFormCommitable() || isTimeOver}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;