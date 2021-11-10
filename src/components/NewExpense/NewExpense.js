import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) =>{

    const [toggleAddExpense, setToggleAddExpense] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        toggleAddHandler()
    };
    
    const toggleAddHandler = () =>{
        setToggleAddExpense(prevValue => {
            return !prevValue
        })

    };

    //passing a pointer to a function in the parent to the child - common pattern to communicate up
    return (
    <div className="new-expense">
        {!toggleAddExpense && <button onClick={toggleAddHandler}>Add New Expense</button>}
        {toggleAddExpense  && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onShowForm={toggleAddHandler}/>}
    </div>
    );
};

export default NewExpense;