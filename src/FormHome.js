import React, { Component } from 'react';
import logo from './logo.svg';
import './FormHome.css';
import Title from './components/title';
import Form from './components/form';

class FormHome extends Component {
  render() {
    return (
      <div className="FormHome">
        <Title />
        <Form />
      </div>
    );
  }
}

export default FormHome;
