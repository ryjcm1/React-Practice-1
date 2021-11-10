import React, { useState } from "react";

import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          //two way binding = controlled component
          onChangefilter={filterChangeHandler}
          selected={filteredYear}
        />

        {/* simple trick to write shorter code instead of long if statemnts
        {filteredExpenses.length === 0 && <p>No expenses found. </p>} */}

        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
