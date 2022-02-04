import './ExpenseItem.css';

function ExpenseItem(expenseProps) {

    const month = expenseProps.date.toLocaleString('en-us', {month: 'long'});
    const year = expenseProps.date.toLocaleString('en-us', {year: '2-digit'});
    const day = expenseProps.date.getFullYear();

    return (

        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className="expense-item__description">
                <h2>{expenseProps.title}</h2>
                <div className="expense-item__price">${expenseProps.amount}</div>
            </div>
        </div>

    );
}

export default ExpenseItem;