// js
import ExpenseDate from "./ExpenseDate";
import ExpensePrice from "./ExpensePrice";

// css
import './css/ExpenseItem.css';

function ExpenseItem(expenseItemProps) {

    return (

        <div className="expense-item">
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
        </div>

    );
}

export default ExpenseItem;