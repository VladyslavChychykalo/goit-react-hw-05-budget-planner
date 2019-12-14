import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

const labelStyles = `
  margin-bottom: 16px;
`;

class BudgetForm extends Component {
  state = { budget: '' };

  static propTypes = {
    onSave: PropTypes.func.isRequired,
  };

  handleChange = e => {
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave(Number(this.state.budget));

    this.setState({ budget: '' });
  };

  render() {
    const { budget } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input
            type="number"
            value={budget}
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

export default BudgetForm;
