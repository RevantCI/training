import React ,{ useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) =>{

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    // const [userInput,setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value,
        // });
    };

    const amountChangeHandler = event =>{
        setEnteredAmount(event.target.value);

    };
    const dateChangeHandler = event =>{
        setEnteredDate(event.target.value);

    };
    // const inputChangeHandler = (identifier, value) => {
    //     if(identifier === 'title'){
    //         setEnteredTitle(value);
    //     }
    //     else if(identifier === 'date'){
    //         setEnteredDate(value);
    //     }
    //     else
    //     setEnteredAmount(value);
    // };
    const submitHandler =(event) =>{
        event.preventDefault();

        const expenseData ={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
        
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return(
    <form onSubmit={(submitHandler)}>
        <div className='new-expense__controls'>
            <div className='new-expense__controls'>
                <label>Title</label>
                <input 
                type='text'
                value={enteredTitle}
                onChange={titleChangeHandler}
                />
                {/* <input type='text' onChange={(event)=>inputChangeHandler('title',event.target.value)} /> */}
            </div>
            <div className='new-expense__controls'>
                <label>Amount</label>
                <input 
                    type='number' 
                    min="0.01" 
                    step="0.01" 
                    value={enteredAmount}
                    onChange={amountChangeHandler} 
                />
            </div>
            <div className='new-expense__controls'>
                <label>Date</label>
                <input 
                    type='date' 
                    min="2019-01-01" 
                    max="2022-12-31" 
                    value={enteredDate}
                    onChange={dateChangeHandler} 
                />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='sumbit'>Add Expense</button>
        </div>
    </form>
    );
};
export default ExpenseForm;