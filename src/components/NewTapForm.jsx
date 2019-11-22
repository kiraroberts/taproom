import React from 'react';
import PropTypes from 'prop-types';

function NewTapForm(props) {
  let _name = null;
  let _brand = null;
  let _alcoholContent = null;
  let _price = null;

  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onNewTapCreation({name: _name.value, brand: _brand.value, alcoholContent: _alcoholContent.value, price: _price.value});
    _name.value = '';
    _brand.value = '';
    _alcoholContent.value = '';
    _price.value = '';
  }

  return(
    <div>
      <h2>Add a keg</h2>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input 
          type='text'
          id='name'
          placeholder='drink name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brand'
          placeholder='brand name'
          ref={(input) => { _brand = input; }} />
        <input
          type='text'
          id='alcoholContent'
          placeholder='alcohol content'
          ref={(input) => { _alcoholContent = input; }} />
        <input
          type='text'
          id='price'
          placeholder='drink price'
          ref={(input) => { _price = input; }} />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
};

NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default NewTapForm;