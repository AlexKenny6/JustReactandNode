// js
import ExpenseDate from "./ExpenseDate";
import ExpensePrice from "./ExpensePrice";
import Card from "../UI/card";

// css
import './css/ExpenseItem.css';

function ExpenseItem(expenseItemProps) {

    return (

        <Card className="expense-item">
               {/* passing expenseProps data to ExpenseDate component */}
               {/*
                    In php I am calling this func from another file and
                    putting in the parameters I want to send
               */}
               <ExpenseDate date={expenseItemProps.date}/>
            <div className="expense-item__description">
                <h2>{expenseItemProps.title}</h2>
                <ExpensePrice amount={expenseItemProps.amount}/>
            </div>
        </Card>

    );
}

export default ExpenseItem;