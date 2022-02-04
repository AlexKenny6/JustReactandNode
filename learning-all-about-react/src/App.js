import ExpenseItem from "./components/ExpenseItem";

function App() {

    const expenses = [

        {id: 1, title: 'Car Insurance', amount: 299.21, date: new Date(2022, 5, 21)},
        {id: 2, title: 'Student Loans', amount: 252.91, date: new Date(2022, 4, 6)},
        {id: 3, title: 'Rent', amount: 743.87, date: new Date(2022, 2, 1)},
        {id: 4, title: 'Food', amount: 264.34, date: new Date(2022, 1, 28)},
        {id: 5, title: 'Books', amount: 353.83, date: new Date(2022, 3, 11)},

    ];

    return (

        <div>
            <p>Hello world</p>
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
            <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
            <ExpenseItem title={expenses[4].title} amount={expenses[4].amount} date={expenses[4].date}/>
        </div>

    );

}

export default App;
