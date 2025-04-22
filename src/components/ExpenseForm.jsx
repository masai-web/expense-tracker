import React, { useState } from 'react';


const ExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = { ...formData, id: Date.now().toString() };
    onAddExpense(newExpense);
    setFormData({ name: '', description: '', category: '', amount: '', date: new Date().toISOString().split('T')[0] });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Expense Name" required />
      <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" required />
      <input name="amount" type="number" value={formData.amount} onChange={handleChange} placeholder="Amount" required />
      <input name="date" type="date" value={formData.date} onChange={handleChange} required />
      <button type="submit">Add</button>
    </form>
  );
};

export default ExpenseForm;