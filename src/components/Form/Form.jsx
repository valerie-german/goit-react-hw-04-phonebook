import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

export class Form extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleValueChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      id: nanoid(),
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      id: '',
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit} className={css.form}>
        <label htmlFor={this.nameInputId} className={css.label}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameInputId}
            onChange={this.handleValueChange}
            className={css.input}
          />
        </label>
        <label htmlFor={this.numberInputId} className={css.label}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.numberInputId}
            onChange={this.handleValueChange}
            className={css.input}
          />
        </label>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    );
  }
}
