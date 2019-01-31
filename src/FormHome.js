import React, { Component } from 'react';
import './FormHome.css';
import Title from './components/title';
import HelpForm from './components/form';

class FormHome extends Component {
  render() {
    return (
      <div className="FormHome">
        <Title />
        <HelpForm />
      </div>
    );
  }
}

export default FormHome;
