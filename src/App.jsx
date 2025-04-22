
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {

  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', category: 'Food', amount: 50, date: '2023-04-10' },
    { id: 2, description: 'Movie Tickets', category: 'Entertainment', amount: 20, date: '2023-04-08' },
    { id: 3, description: 'Electricity Bill', category: 'Utilities', amount: 75, date: '2023-04-05' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);
  
  
  const addExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: expenses.length > 0 ? Math.max(...expenses.map(e => e.id)) + 1 : 1
    };
    setExpenses([...expenses, newExpense]);
  };
  
  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };
  
  
  const filteredExpenses = expenses.filter(expense => 
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  const sortedExpenses = sortBy 
    ? [...filteredExpenses].sort((a, b) => a[sortBy].localeCompare(b[sortBy])) 
    : filteredExpenses;
  
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseTable 
        expenses={sortedExpenses} 
        deleteExpense={deleteExpense} 
        setSortBy={setSortBy} 
      />
    </div>
  );
}

export default App;