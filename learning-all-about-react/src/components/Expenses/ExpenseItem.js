// js
import ExpenseDate from "./ExpenseDate";
import ExpensePrice from "./ExpensePrice";
import Card from "../UI/card";
import {useState} from "react";

// css
import './css/ExpenseItem.css';

function ExpenseItem(expenseItemProps) {

    const [title, setTitle] = useState(expenseItemProps.title);

    function clickHandler() {

        setTitle('Updated Title');
        console.log('Updated ' + title);

    }

    return <Card className="expense-item">
           {/* passing expenseProps data to ExpenseDate component */}
           {/*
                In php I am calling this func from another file and
                putting in the parameters I want to send
           */}
           <ExpenseDate date={expenseItemProps.date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <ExpensePrice amount={expenseItemProps.amount}/>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>;
}

export default ExpenseItem;