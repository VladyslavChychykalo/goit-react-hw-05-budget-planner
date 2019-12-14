import { connect } from 'react-redux';
import { addBudget } from '../../redux/budget/budgetActions';
import BudgetForm from './BudgetForm';

const mapDispatchToProps = dispatch => ({
  onSave: form => dispatch(addBudget(form)),
});

export default connect(null, mapDispatchToProps)(BudgetForm);
