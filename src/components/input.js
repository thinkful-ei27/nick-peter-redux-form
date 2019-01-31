import React from 'react';
import './input.css';

export default class Input extends React.Component {
    componentDidUpdate(prevProps){
        if(!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }
    render(){
        console.log(this.props);
        console.log(`this.props.value is ${this.props.value}`);
        const Element = this.props.element || 'input';
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
        if(this.props.element === 'input'){
        return (
            <div className="form-input">
               <label htmlFor={this.props.input.name}>
                    {this.props.label}
                    {error}
                    {warning}
                </label>
                <Element
                    {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    ref={input => (this.input = input)}
                />
            </div>
        );} else {
            return (
                <div className="form-input">
                   <label htmlFor={this.props.input.name}>
                        {this.props.label}
                        {error}
                        {warning}
                    </label>
                    <Element
                        {...this.props.input}
                        id={this.props.input.name}
                        type={this.props.type}
                        ref={input => (this.input = input)}
                    />
                </div>
            )
        }
    }
}