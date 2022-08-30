import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

export function Form ({onFormSubmit}){
 
const [id, setId] = useState('');
const [name, setName] = useState('');
const [number, setNumber] = useState('');


 const nameInputId = nanoid();
 const numberInputId = nanoid();

 const handleValueChange = event => {
    const { name, value } = event.currentTarget;
        
    switch (name) {
      case "name":
        setName(value);
        setId(nanoid());
        break;
    
      case "number":
        setNumber(value);
        break;
    
         
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    
    onFormSubmit(id, name, number);
    reset();
  };

  const reset = () => {
    setId('');
    setName('');
    setNumber('');
  };

  
    return (
      <form action="" onSubmit={handleSubmit} className={css.form}>
        <label htmlFor={nameInputId} className={css.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={nameInputId}
            onChange={handleValueChange}
            className={css.input}
          />
        </label>
        <label htmlFor={numberInputId} className={css.label}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={numberInputId}
            onChange={handleValueChange}
            className={css.input}
          />
        </label>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    );
  }

