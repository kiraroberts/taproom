import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

class NewTapForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    };
    this._name = null;
    this._brand = null;
    this._alcoholContent = null;
    this._price = null;
    this.handleNewTapFormSubmission = this.handleNewTapFormSubmission.bind(this);
  }

  handleNewTapFormSubmission(event) {
    event.preventDefault();
    this.props.onNewTapCreation({ name: this._name.value, brand: this._brand.value, alcoholContent: this._alcoholContent.value,price: this._price.value });
    this._name.value = '';
    this._brand.value = '';
    this._alcoholContent.value = '';
    this._price.value = '';
  }

  render() {
    return (
      <div>
        <h2>Add a keg</h2>
        <form onSubmit={this.handleNewTapFormSubmission}>
          <input
            type='text'
            id='name'
            placeholder='Drink name'
            ref={(input) => { this._name = input; }} />
          <input
            type='text'
            id='brand'
            placeholder='Brand name'
            ref={(input) => { this._brand = input; }} />
          <input
            type='text'
            id='alcoholContent'
            placeholder='Alcohol content'
            ref={(input) => { this._alcoholContent = input; }} />
          <input
            type='text'
            id='price'
            placeholder='Drink price'
            ref={(input) => { this._price = input; }} />
          <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
}

NewTapForm.PropTypes = {
  onNewTapCreation: PropTypes.func
};

export default NewTapForm;