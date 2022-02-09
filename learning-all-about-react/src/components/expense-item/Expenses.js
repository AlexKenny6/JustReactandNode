// js
import ExpenseItem from "./ExpenseItem";

// css
import './css/Expense.css';
import Card from "./card";


function Expenses(expenses) {

    return (

        <Card className="expenses">

            <ExpenseItem title={expenses.item[0].title} amount={expenses.item[0].amount} date={expenses.item[0].date}/>
            <ExpenseItem title={expenses.item[1].title} amount={expenses.item[1].amount} date={expenses.item[1].date}/>
            <ExpenseItem title={expenses.item[2].title} amount={expenses.item[2].amount} date={expenses.item[2].date}/>
            <ExpenseItem title={expenses.item[3].title} amount={expenses.item[3].amount} date={expenses.item[3].date}/>
            <ExpenseItem title={expenses.item[4].title} amount={expenses.item[4].amount} date={expenses.item[4].date}/>

        </Card>

    );

}

export default Expenses;