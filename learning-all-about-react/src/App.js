import React from "react";
import Expenses from "./components/Expenses/Expenses";

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
            <h2>Hello world</h2>
            <Expenses item={expenses}/>
        </div>

    );

}

export default App;
