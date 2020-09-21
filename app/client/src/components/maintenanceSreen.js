import React from 'react';

export default function MaintenanceSreen({ transaction }) {
  const [description, setDescription] = React.useState('');
  const [value, setValue] = React.useState(0);
  const [category, setCategory] = React.useState('');
  const [date, setDate] = React.useState('');
  const [type, setType] = React.useState('-');
  console.log(transaction);

  React.useEffect(() => {
    if (!transaction) {
      return;
    }

    const { description, value, category, yearMonthDay, type } = transaction;
    setDescription(description);
    setValue(value);
    setCategory(category);
    setDate(yearMonthDay);
    setType(type);
  }, [transaction]);

  const handleDescriptionChange = (event) => {
    const newDescription = event.target.value.trim();
    setDescription(newDescription);
  };

  const handleValueChange = (event) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
  };

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value.trim();
    setCategory(newCategory);
  };

  const handleDateChange = (event) => {
    const newDate = event.target.valuetrim();
    setDate(newDate);
  };

  const handleTypeChange = (event) => {
    const newType = event.target.value;
    setType(newType);
  };

  return (
    <div>
      <span>
        <label>
          <input
            name="expense_earning"
            type="radio"
            checked={type === '-'}
            onChange={handleTypeChange}
            value="-"
          />
          <span>Despesa</span>
        </label>
      </span>
      <span>
        <label>
          <input
            name="expense_earning"
            type="radio"
            checked={type === '+'}
            onChange={handleTypeChange}
            value="+"
          />
          <span>Receita</span>
        </label>
      </span>

      <div className="input-field">
        <input
          type="text"
          onChange={handleDescriptionChange}
          value={description}
          id="inputDescription"
        />
        <label htmlFor="inputDescription" className="active">
          Descrição:
        </label>
      </div>

      <div className="input-field">
        <input
          type="number"
          onChange={handleValueChange}
          value={value}
          id="inputValue"
        />
        <label htmlFor="inputValue" className="active">
          Valor:
        </label>
      </div>

      <div className="input-field">
        <input
          type="text"
          onChange={handleCategoryChange}
          value={category}
          id="inputCategory"
        />
        <label htmlFor="inputCategory" className="active">
          Categoria:
        </label>
      </div>

      <div className="input-field">
        <input
          type="date"
          onChange={handleDateChange}
          value={date}
          id="inputDate"
        />
        <label htmlFor="inputDate" className="active">
          Categoria:
        </label>
      </div>
    </div>
  );
}
