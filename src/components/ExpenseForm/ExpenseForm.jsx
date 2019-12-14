import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

export default class ExpenseForm extends Component {
  state = {
    name: '',
    amount: '',
  };

  static propTypes = {
    onSave: PropTypes.func.isRequired,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave({
      id: shortid.generate(),
      amount: Number(this.state.amount),
      name: this.state.name,
    });

    this.setState({ name: '', amount: '' });
  };

  render() {
    const { name, amount } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            placeholder={0}
            value={amount}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}
