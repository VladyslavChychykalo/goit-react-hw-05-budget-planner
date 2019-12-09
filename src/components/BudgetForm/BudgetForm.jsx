import React, { Component } from "react";
import Form from "../shared/Form";
import Label from "../shared/Label";
import Input from "../shared/Input";
import Button from "../shared/Button";

const labelStyles = `
  margin-bottom: 16px;  
`;

export default class BudgetForm extends Component {
  state = { budget: "" };

  // static propTypes = {
  //   onSave: PropTypes.func.isRequired
  // };

  handleChange = e => {
    this.setState({
      budget: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave(Number(this.state.budget));

    this.setState({ budget: 0 });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input
            type="number"
            value={this.state.budget}
            onChange={this.handleChange}
            placeholder={0}
            name="budget"
          />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}
