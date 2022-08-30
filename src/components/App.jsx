import { useState, useEffect } from 'react';
import { Form } from 'components/Form/Form';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';


export function App (){
 
const [contacts, setContacts]= useState(()=>{return(
  JSON.parse(localStorage.getItem('contacts')) ?? []
);});
const [filter, setFilter] = useState('');

  const formSubmitHandler = (id, name, number) => {
   
    const isNameExist = contacts.find(
      contact => contact.name === name
    );
    if (isNameExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    const data = {
      id: id,
      name:name,
      number: number,
    }
    
    setContacts(prevState => ( [...prevState, data] ));
    console.log(contacts);
  };
 

 const сhangeFilter = event => {
  setFilter(event.currentTarget.value);
  };

  const deleteContact = id => {
    const remainingContacts = contacts.filter(
      contact => contact.id !== id
    );
    setContacts(remainingContacts);
  };

  
  useEffect(()=>{
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  },[contacts]);

  
    const visibleContacts = contacts.filter(
      contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      
      <div>
        <h1>Phonebook</h1>
        <Form onFormSubmit={formSubmitHandler}></Form>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={сhangeFilter} />
        <ContactsList
          contacts={visibleContacts || contacts}
          onDeleteContact={deleteContact}
        />
      </div>
    );
  }

