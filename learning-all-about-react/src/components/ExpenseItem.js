import './ExpenseItem.css';

function ExpenseItem() {
    return (

        <div className="expense-item">
            <div>
                February 4th, 2022
            </div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$69.69</div>
            </div>
        </div>

    );
}

export default ExpenseItem;