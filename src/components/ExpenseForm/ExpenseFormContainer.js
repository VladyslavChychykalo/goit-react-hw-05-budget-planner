import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../../redux/expense/expenseAction';

const mapDispatchToProps = dispatch => ({
  onSave: form => dispatch(addExpense(form)),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
