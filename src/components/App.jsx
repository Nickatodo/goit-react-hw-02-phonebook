import React, { Component } from 'react';
import FormContac from './FormContac';
import FilterContact from './FilterContact';
import ListContac from './ListContac';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
    this.setNewState = this.setNewState.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  setNewState(newState) {
    this.setState({ contacts: newState });
  }

  handleQueryChange(filter) {
    this.setState({ filter });
  }

  deleteContact(id) {
    let oldState = [...this.state.contacts];
    const updateContacts = oldState.filter(contact => contact.id !== id);
    this.setState({ contacts: updateContacts });
  }

  render() {
    const { contacts, filter } = this.state;
    const filtrado = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <>
        <h1>Phonebook</h1>
        <FormContac content={this.state} setState={this.setNewState} />
        <h2>Contacts</h2>

        <FilterContact onQueryChange={this.handleQueryChange} />
        <ListContac contacts={filtrado} onIdDelete={this.deleteContact} />
      </>
    );
  }
}
