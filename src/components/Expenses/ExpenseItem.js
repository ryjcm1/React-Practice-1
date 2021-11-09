import React , { useState } from 'react'

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) =>{

    //react hooks start with use-
    //should be called directly instead a component like so (there are exceptions)
    //useState returns an array with exactly two values - currentstate value & updating function
    //new snapshot everytime, only initialize the first time, react will keep tract of the lastest state value if called
    
    const [title, setTitle] = useState(props.title)
    console.log('expenseitem evaluated by REACT')

    const clickHandler = () =>{
        setTitle('updated!');
        console.log(title);
    }

    return( 
        <Card className="expense-item">
            
            <ExpenseDate date={props.date}/>

            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price"> ${props.amount} </div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem