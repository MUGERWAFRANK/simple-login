import React, { Component } from 'react'

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
         name:'',
         email:'',
         password:'', 
         Error:{
            name:'',
            email:'',
            password:''
         }  
        }

    }
    handleInputChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };
    
      handleLogin = () => {
        // Replace these values with your correct username and password
        const correctName = 'frank';
        const correctEmail = 'fsimple47@gmail.com';
        const correctPassword = '12345';
        
    
        const { name,email ,password } = this.state;
    
        if (name === correctName && email === correctEmail && password === correctPassword) {
          this.setState({
            loggedIn: true,
            error: '',
          });
        } else {
          this.setState({
            loggedIn: false,
            error: 'Invalid credentials. Please try again.',
          });
        }
      };

    render() {
        const { name,email ,password, error, loggedIn } = this.state;
    
        return (
          <div className='man'>
            {loggedIn ? (
              <p>Welcome, {name}</p>
            ) : (
              <div className='tom'>
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  value={name}
                  onChange={this.handleInputChange}
                />
                <span style={{color:'red'}}>{this.state.Error.name}</span>
                   <br/>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={this.handleInputChange}
                />
                 <span style={{color:'red'}}>{this.state.Error.email}</span>
                <br/>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleInputChange}
                />
                 <span style={{color:'red'}}>{this.state.Error.password}</span>
                <br/>

                <div className='how'>
                <button onClick={this.handleLogin}>Login</button>
                {error && <p>{error}</p>}
                </div>
              </div>
            )}
          </div>
         
        )
    }
}

export default LoginForm