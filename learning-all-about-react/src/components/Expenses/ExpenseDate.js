import './css/ExpenseDate.css';

function ExpenseDate(expenseItemProps) {

    const month = expenseItemProps.date.toLocaleString('en-us', {month: 'long'});
    const year = expenseItemProps.date.toLocaleString('en-us', {day: '2-digit'});
    const day = expenseItemProps.date.getFullYear();

    return (

        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>

    );

}

export default ExpenseDate;