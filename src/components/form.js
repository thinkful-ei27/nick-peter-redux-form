import React from 'react';
import './form.css';
import { reduxForm, Field } from 'redux-form';
import { required, nonEmpty, isValidTrackingNumber, isNumber } from '../validators'

export class HelpForm extends React.Component {
    onSubmit(values) {
        console.log(values);
    }

    render () {
        return (
            <div>
              <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                  <label htmlFor='trackingNumber'>Tracking Number</label>
                  <Field component='input' type='text' name='trackingNumber' validate={[required, nonEmpty, isValidTrackingNumber, isNumber]}></Field>
                  <label htmlFor='issue'>What is your issue?</label>
                  <Field component='select' name='issue'>
                    <option value='not-delivered'>My delivery hasn't arrived</option>
                    <option value='wrong-item'>The wrong item was delivered</option>
                    <option value='missing-part'>Part of my order was missing</option>
                    <option value='damaged-part'>Some of my order arrived damage</option>
                    <option value='other'>Other (give details below)</option>
                  </Field>
                  <label htmlFor='details'>Give more details (optional)</label>
                  <Field component='textarea' name='details'></Field>
                  <button type='submit'>Submit</button>
              </form>
            </div>
        );
    }
}

export default reduxForm({
   form: 'help'
})(HelpForm);