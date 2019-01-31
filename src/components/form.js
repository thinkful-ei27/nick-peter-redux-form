import React from 'react';
import './form.css';
import { reduxForm, Field } from 'redux-form';
import { required, nonEmpty, isValidTrackingNumber, isNumber } from '../validators'
import Input from './input';
import Select from './select'


export class HelpForm extends React.Component {
    onSubmit(values) {
        return fetch('https://us-central1-delivery-form-api.cloudfunctions.net/api/report',
        {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(values),
            mode: "cors"
        })
        .then(res => {
            console.log(res)
            if(!res.ok){
                return Promise.reject({code: res.status(), message: res.statusText});}
            return console.log('I got a response'); 
            
        })
        .catch(err => {
            console.log(err)
        })
    }

    render () {
        return (
            <div>
              <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                  <label htmlFor='trackingNumber'>Tracking Number</label>
                  <Field component={Input} type='text' name='trackingNumber' validate={[required, nonEmpty, isValidTrackingNumber, isNumber]}></Field>
                  <label htmlFor='issue'>What is your issue?</label>
                  <Field component={Input} element='select' name='issue' validate={[required]}>
                    <option value=''>Please select an option</option>
                    <option name={this.props.name} value='not-delivered'>My delivery hasn't arrived</option>
                    <option value='wrong-item'>The wrong item was delivered</option>
                    <option value='missing-part'>Part of my order was missing</option>
                    <option value='damaged-part'>Some of my order arrived damage</option>
                    <option value='other'>Other (give details below)</option>
                  </Field>
                  <label htmlFor='details'>Give more details (optional)</label>
                  <Field component={Input} name='details'></Field>
                  <button type='submit'>Submit</button>
              </form>
            </div>
        );
    }
}

export default reduxForm({
   form: 'help'
})(HelpForm);