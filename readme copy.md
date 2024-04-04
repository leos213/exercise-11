დაწერეთ რეგისტრაციის კომპონენტი შემდეგი ველებით:

1. სახელი,
2. გვარი,
3. დაბადების წელი,
4. მეილი,
5. პაროლი,
6. გაიმეორეთ პაროლი

ყველა ველი უნდა იყოს სავალდებულო, მეილს სჭირდება ვალიდაცია რომ იყოს სწორი მეილი,
პაროლი უნდა შედგებოდეს მინიმუმ 8 სიმბოლოსგან, გაიმეორეთ პაროლი უნდა ემთხვეოდეს პაროლს

დავალება უნდა შესრულდეს Class Based კომპონენტების და vite-ის გამოყენებით.

// RegistrationForm.jsx
import React, { Component } from 'react';

class RegistrationForm extends Component {
constructor(props) {
super(props);
this.state = {
name: '',
lastName: '',
yearOfBirth: '',
email: '',
password: '',
repeatPassword: '',
errors: {
name: '',
lastName: '',
yearOfBirth: '',
email: '',
password: '',
repeatPassword: ''
}
};
}

handleChange = (e) => {
const { name, value } = e.target;
this.setState({
[name]: value,
errors: {
...this.state.errors,
[name]: ''
}
});
}

handleSubmit = (e) => {
e.preventDefault();
const { name, lastName, yearOfBirth, email, password, repeatPassword } = this.state;

    // Validation
    let errors = {};
    if (!name) {
      errors.name = 'Name is required';
    }
    if (!lastName) {
      errors.lastName = 'Last name is required';
    }
    if (!yearOfBirth) {
      errors.yearOfBirth = 'Year of birth is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
    if (!repeatPassword) {
      errors.repeatPassword = 'Repeat password is required';
    } else if (password !== repeatPassword) {
      errors.repeatPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      // Form submission logic goes here
      console.log('Form submitted successfully!');
    }

}

render() {
const { name, lastName, yearOfBirth, email, password, repeatPassword, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={this.handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={lastName} onChange={this.handleChange} />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div>
          <label>Year of Birth:</label>
          <input type="text" name="yearOfBirth" value={yearOfBirth} onChange={this.handleChange} />
          {errors.yearOfBirth && <span className="error">{errors.yearOfBirth}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="text" name="email" value={email} onChange={this.handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div>
          <label>Repeat Password:</label>
          <input type="password" name="repeatPassword" value={repeatPassword} onChange={this.handleChange} />
          {errors.repeatPassword && <span className="error">{errors.repeatPassword}</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    );

}
}

export default RegistrationForm;
