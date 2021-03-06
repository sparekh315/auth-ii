import React, { Component } from 'react';
import axios from 'axios';




class SignUp extends Component {
  state = {
      username: '',
      password: '',
      department: ''
  };


  render() {
    return (
    <form onSubmit={this.signup}>
      <div>
        <label>Username</label>
        <input name="username" value={this.state.username} onChange={this.handleChange} type='text' />
      </div>
      <div>
          <label>Password</label>
          <input name="password" value={this.state.password} onChange={this.handleChange} type='text' />
      </div>
      <div>
          <label>Department</label>
          <input name="department" value={this.state.department} onChange={this.handleChange} type='text' />
      </div>
      <div>
          <button type="Submit">Sign Up</button>
      </div>
    </form>   
    );
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({ [name]: value})
  };


  signup = event => {
      event.preventDefault();

      axios
       .post('http://localhost:3300/api/register', this.state)
       .then(res => {
           console.log(res.data);
           localStorage.setItem('jwt', res.data.token);
          this.props.history.push('/users')
       })
       .catch(err => {
           console.error("Axios Error:", err);
       });
    };

  
}

export default SignUp;
