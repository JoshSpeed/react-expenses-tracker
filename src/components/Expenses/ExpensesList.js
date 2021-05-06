import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  // You can store jsx code as variables - which allows you to use logic outside
  // the return statement
  //   let expensesContent = <p>No expenses found.</p>;

  // You can define alternate return statements for you component - IF it's only outputting a single thing
  // For a component which handles mutliple things then it's best to work with conditionals
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
