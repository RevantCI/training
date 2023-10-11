 import './ExpenseItem.css';
 import ExpenseDate  from './ExpenseDate';
 import './ExpenseItem.js';
 import  Card from '../UI/Card';
function ExpenseItem(props) {
  
    // const expenseDate = new Date(2021,2,28);
    // const expenseTitle = 'Car Insurance'; 
    // const expenseAmount = 294.67;
  //return <h2>Expense Item!</h2>

//values are hardcoded below
  /*return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price" >$294.67</div>
      </div>
    </div>
  );*/

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price" >${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
