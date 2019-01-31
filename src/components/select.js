import React from 'react';
import './input.css';

export default class Select extends React.Component {
    componentDidUpdate(prevProps){
        if(!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }
    render(){
        console.log(this.props);
        console.log(`this.props.value is ${this.props.value}`);
        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className='form-error'>{this.props.meta.error}</div>;
        }

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <div className="form-warning">{this.props.meta.warning}</div>
            );
          }
        
        return (
            <div className="form-input">
               <label htmlFor={this.props.input.name}>
                    {this.props.label}
                    {error}
                    {warning}
                </label>
                <select
                  id={this.props.input.name}
                  type={this.props.type}
                  ref={input => (this.input = input)}
                >
                    <option value=''>Please select an option</option>
                    <option value='not-delivered'>My delivery hasn't arrived</option>
                    <option value='wrong-item'>The wrong item was delivered</option>
                    <option value='missing-part'>Part of my order was missing</option>
                    <option value='damaged-part'>Some of my order arrived damage</option>
                    <option value='other'>Other (give details below)</option>
                </select>
            </div>
        );
    }
}