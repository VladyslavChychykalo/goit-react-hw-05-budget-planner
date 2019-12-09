import { connect } from "react-redux";
import ExpensesTable from "./ExpensesTable";
import { removeExpense } from "../../redux/expense/expenseAction";
import { getItems } from "../../redux/expense/expenseSelector";

const mapStateToProps = state => ({
  items: getItems(state)
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(removeExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
