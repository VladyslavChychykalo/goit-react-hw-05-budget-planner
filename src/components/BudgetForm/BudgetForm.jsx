import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';
import 'react-toastify/dist/ReactToastify.css';

const labelStyles = `
  margin-bottom: 16px;
`;

class BudgetForm extends Component {
  state = { budget: '' };

  static propTypes = {
    onSave: PropTypes.func.isRequired,
  };

  equalZero = () => {
    toast('Введите число больше 0!');
  };

  handleChange = e => {
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { budget } = this.state;
    if (Number(budget) <= 0) {
      this.equalZero();
      return;
    }

    this.props.onSave(Number(this.state.budget));

    this.setState({ budget: '' });
  };

  render() {
    const { budget } = this.state;
    return (
      <div>
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
        <>
          <ToastContainer autoClose={3000} />
        </>
      </div>
    );
  }
}

export default BudgetForm;
