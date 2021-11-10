import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";

import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          //two way binding = controlled component
          onChangefilter={filterChangeHandler}
          selected={filteredYear}
        />
        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}

        
      </Card>
    </div>
  );
};

export default Expenses;
