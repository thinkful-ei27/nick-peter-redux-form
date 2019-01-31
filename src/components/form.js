import React from 'react';
import './form.css';
import { reduxForm, Field } from 'redux-form';
import { required, nonEmpty, isValidTrackingNumber, isNumber } from '../validators'
import Input from './input';
import Select from './select'

export class HelpForm extends React.Component {
    onSubmit(values) {
        console.log(values);
    }

    render () {
        return (
            <div>
              <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                  <label htmlFor='trackingNumber'>Tracking Number</label>
                  <Field component={Input} type='text' name='trackingNumber' validate={[required, nonEmpty, isValidTrackingNumber, isNumber]}></Field>
                  <label htmlFor='issue'>What is your issue?</label>
                    {/*change component here to its own Select component and put options in there */}
                  <Field component={Select} element='select' name='issue' validate={[required]}>
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