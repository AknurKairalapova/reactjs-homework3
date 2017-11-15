import React, {PureComponent} from 'react';
import './Step.css';

class Step extends PureComponent {

  handleClick = () => {
    const { number, onClick, isClickable } = this.props;
    if ( isClickable ) {
       onClick(number);
    } 
  }
  
  render() {
    const {number, isSelected, isClickable} = this.props;

    return (
      <div className={isSelected ? 'step step-selected' : isClickable ? 'step step-clickable': 'step'} onClick={this.handleClick}>
        <div className="step__number">{number}</div>
        <div className="step__title">{this.props.children}</div>
      </div>
    );
  }
}

export default Step;
