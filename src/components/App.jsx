import React, { Component } from 'react';
import { Form } from 'components/Form/Form';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    this.addToContacts(data);
  };

  addToContacts = data => {
    this.setState(prevState => {
      let result = prevState.contacts.find(
        contact => contact.name === data.name
      );
      if (!result) {
        return {
          contacts: [...prevState.contacts, data],
        };
      }
      alert(`${data.name} is already in contacts`);
      return prevState;
    });
  };

  сhangeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  deleteContact = id => {
    this.setState(prevState => {
      let newContacts = prevState.contacts.filter(contact => contact.id !== id);

      return {
        contacts: newContacts,
      };
    });
  };

  render() {
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onFormSubmit={this.formSubmitHandler}></Form>
        <h2>Contacts</h2>
        <Filter value={this.state.value} onChange={this.сhangeFilter} />
        <ContactsList
          contacts={visibleContacts || this.state.contacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
