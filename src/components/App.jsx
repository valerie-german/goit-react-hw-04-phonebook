import React, { Component } from 'react';
import { Form } from 'components/Form/Form';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    this.addToContacts(data);
  };

  addToContacts = data => {
    const isNameExist = this.state.contacts.find(
      contact => contact.name === data.name
    );
    if (isNameExist) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({ contacts: [...prevState.contacts, data] }));
  };

  сhangeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  deleteContact = id => {
    const remainingContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({
      contacts: remainingContacts,
    });
  };

  componentDidMount() {
    const contactsParsed = JSON.parse(localStorage.getItem('contacts'));

    if (contactsParsed !== null) {
      this.setState({
        contacts: contactsParsed,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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
