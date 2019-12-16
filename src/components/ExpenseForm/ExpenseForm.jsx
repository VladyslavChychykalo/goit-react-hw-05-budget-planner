import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';
import 'react-toastify/dist/ReactToastify.css';

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

  equalZero = () => {
    toast('Введите число больше 0!');
  };

  emptyInput = () => {
    toast('Строка с именем должна быть заполненой!');
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { amount, name } = this.state;
    if (Number(amount) <= 0) {
      this.equalZero();
      return;
    }

    if (name === '') {
      this.emptyInput();
      return;
    }

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
      <div>
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
        <>
          <ToastContainer autoClose={3000} />
        </>
      </div>
    );
  }
}
