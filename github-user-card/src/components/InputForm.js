import React, { Component } from 'react';

export default class InputForm extends Component {
  render() {
    return (
      <div className='input-form'>
        <input type='text' placeholder='...GitHub username' />
      </div>
    );
  }
}
