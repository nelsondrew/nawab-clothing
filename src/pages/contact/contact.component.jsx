import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-buttom.component';
import './contact.styles.scss';


class ContactPage extends React.Component {
    constructor() {
      super();
  
      this.state = {
        Name: '',
        email: '',
        Address: '',
        Contact: ''
      };
    }
  
    handleSubmit = async event => {
      event.preventDefault();
  
      const { Name, email, Address, Contact } = this.state;
  
  
      try {
       
  
       
        this.setState({
          Name: '',
          email: '',
          Address: '',
          Contact: ''
        });
      } catch (error) {
        console.error(error);
      }
    };
  
    handleChange = event => {
      const { name, value } = event.target;
  
      this.setState({ [name]: value });
    };
  
    render() {
      const { Name, email, Address, Contact } = this.state;
      return (
        <div className='contact'>
          <h2 className='title'>Welcome to Zara</h2>
          <span>if you have any problem , you can fill out the following form </span> 
          <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput
              type='text'
              name='displayName'
              value={Name}
              onChange={this.handleChange}
              label='Name'
              required
            />
            <FormInput
              type='email'
              name='email'
              value={email}
              onChange={this.handleChange}
              label='Email'
              required
            />
            <FormInput
              type='text'
              name='Address'
              value={Address}
              onChange={this.handleChange}
              label='Address'
              required
            />
            <FormInput
              type='number'
              name='Contact'
              value={Contact}
              onChange={this.handleChange}
              label='Contact'
              required
            />
          <CustomButton type='submit'>Contact us, we will be in touch with you Shortly</CustomButton>
          </form>
        </div>
      );
    }
  }

  export default ContactPage;