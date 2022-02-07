function ExpensePrice(expenseItemProps) {

    const price = expenseItemProps.amount;

    return (

        <div className="expense-item__price">$ {price}</div>

    );

}

export default ExpensePrice;