import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpenseChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const [filteredExpenses, setFilteredExpenses] = useState(props.items)
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    setFilteredExpenses(props.items.filter(item => item.date.getFullYear().toString() == filteredYear))
  };

  

  return (
    <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items = {filteredExpenses}/>
     
    </Card>
  );
}

export default Expenses;