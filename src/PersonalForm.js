import React, {Component} from 'react';
import Title from './Title';
import './PersonalForm.css';

export class PersonalForm extends Component {
  handleChangeForm = event => {
    const {onChangeForm} = this.props;
    const name = event.target.name;
    const value = event.target.value;
    onChangeForm(name, value);
  }

  render() {
    const {firstName, lastName, email} = this.props;

    return (
      <div className="personal-form">
        <Title>Персональная информация</Title>
        <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={this.handleChangeForm}/>
        <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={this.handleChangeForm}/>
        <input type="text" name="email" placeholder="Email" value={email} onChange={this.handleChangeForm}/>
      </div>
    );
  }
}

export default PersonalForm;
