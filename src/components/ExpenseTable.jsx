import React from 'react';

const ExpenseTable = ({ expenses, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.date}</td>
            <td>{expense.name}</td>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
            <td>${expense.amount}</td>
            <td>
              <button onClick={() => onDelete(expense.id)} className="delete">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;