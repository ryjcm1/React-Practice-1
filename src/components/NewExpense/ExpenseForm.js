import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //it is okay to have multiple states per componenet
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [eneteredDate, setEnteredDate] = useState("");

  //multiple state approach
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    //2. (BAD APPROACH for multiple state)
    //shouldn't update like this ****
    // setUserInput({
    //     //need to update the other ones too or else react will not update them
    //     ...userInput,
    //     enteredTitle: event.target.value
    // })

    //3. (GOOD APPROACH for multiple state)
    //this way is better, since React shedules state updates and are not instant
    //may run into error whereby react updates with an older snapshot
    //if state update depends on previous state USE FUNCTION SYNTAX

    // setUserInput ((prevState)=>{
    //     return {...prevState, enteredTitle: event.target.value};
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(eneteredDate),
    };

    props.onSaveExpenseData(expenseData);

    //clear inputs w/ two way binding
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={eneteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onShowForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
