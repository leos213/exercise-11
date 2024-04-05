import React from "react";

import styled from "styled-components";

const MainDiv = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
`;

const InputVal = styled.input`
  margin-top: 5px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

const LabInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const ErrorSpan = styled.span`
  color: red;
`;

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastName: "",
      yearOfBirth: "",
      email: "",
      password: "",
      repeatPassword: "",
      errors: {
        name: "",
        lastName: "",
        yearOfBirth: "",
        email: "",
        password: "",
        repeatPassword: "",
      },
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      errors: {
        ...this.state.errors,
        [name]: "",
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, lastName, yearOfBirth, email, password, repeatPassword } =
      this.state;

    let errors = {};
    if (!name) {
      errors.name = "Name is required";
    }

    if (!lastName) {
      errors.lastName = "Last name is required";
    }

    if (!yearOfBirth) {
      errors.yearOfBirth = "Year of birth is required";
    }

    if (!email) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    if (!repeatPassword) {
      errors.repeatPassword = "Repeat password is required";
    } else if (password !== repeatPassword) {
      errors.repeatPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      console.log("Form submitted successfully!");
    }
  };

  render() {
    const {
      name,
      lastName,
      yearOfBirth,
      email,
      password,
      repeatPassword,
      errors,
    } = this.state;

    return (
      <MainDiv onSubmit={this.handleSubmit}>
        <LabInput>
          <Label>Name:</Label>
          <InputVal
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          {errors.name && <ErrorSpan>{errors.name}</ErrorSpan>}
        </LabInput>
        <LabInput>
          <Label>Last Name:</Label>
          <InputVal
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
          {errors.lastName && <ErrorSpan>{errors.lastName}</ErrorSpan>}
        </LabInput>
        <LabInput>
          <Label>Year of Birth:</Label>
          <InputVal
            type="text"
            name="yearOfBirth"
            value={yearOfBirth}
            onChange={this.handleChange}
          />
          {errors.yearOfBirth && <ErrorSpan>{errors.yearOfBirth}</ErrorSpan>}
        </LabInput>
        <LabInput>
          <Label>Email:</Label>
          <InputVal
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          {errors.email && <ErrorSpan>{errors.email}</ErrorSpan>}
        </LabInput>
        <LabInput>
          <Label>Password:</Label>
          <InputVal
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          {errors.password && <ErrorSpan>{errors.password}</ErrorSpan>}
        </LabInput>
        <LabInput>
          <Label>Repeat Password:</Label>
          <InputVal
            type="password"
            name="repeatPassword"
            value={repeatPassword}
            onChange={this.handleChange}
          />
          {errors.repeatPassword && (
            <ErrorSpan>{errors.repeatPassword}</ErrorSpan>
          )}
        </LabInput>
        <button type="submit">Register</button>
      </MainDiv>
    );
  }
}

export default RegistrationForm;
