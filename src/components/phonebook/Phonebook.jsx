import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "../contactForm/ContactForm";
import Filter from "../filter/Filter";
import ContactList from "../contactList/ContactList";

class Phonebook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: this.props.name,
    number: "",
    filter: "",
    id: "",
  };

  inputName = nanoid();
  inputPhone = nanoid();

  addContact = (event) => {
    event.preventDefault();
    this.setState((state) => ({
      ...state,
      name: event.target.value,
    }));
  };

  addNumber = (event) => {
    event.preventDefault();
    this.setState((state) => ({
      ...state,
      number: event.target.value,
    }));
  };

  saveContact = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    let arrayNames = this.state.contacts.map((array) => array.name);
    if (arrayNames.includes(this.state.name)) {
      alert(`${this.state.name} is already in contacts`);
    } else {
      this.setState((state) => ({
        contacts: [
          ...state.contacts,
          { id: nanoid(), name: this.state.name, number: this.state.number },
        ],
      }));
      this.addContactToLocalStorage(this.state.name, this.state.number);
    }
    form.reset();
  };

  filterName = (event) => {
    event.preventDefault();
    this.setState((state) => ({
      ...state,
      filter: event.target.value,
    }));
  };

  deleteContact = (event) => {
    this.setState((state) => ({
      ...state,
      contacts: this.state.contacts.filter(({ id }) => id !== event),
    }));
    //this.removeContactFromLocalStorage(this.state.name, this.state.number);
  };

  addContactToLocalStorage = () => {
    localStorage.setItem("phoneContacts", JSON.stringify(this.state.contacts));
  };

  /*
  removeContactFromLocalStorage = () => {
    localStorage.removeItem("phoneContacts", JSON.stringify(this.state.contacts));
  }
  */

  componentGet() {
    let getContacts = localStorage.getItem("phoneContacts");

    getContacts
      ? this.setState({ contacts: JSON.parse(getContacts) })
      : this.addContactToLocalStorage();
  }

  componentUpdate() {
    this.addContactToLocalStorage();
  }

  render() {
    return (
      <div>
        <div className="form-container">
          <h2>Phonebook</h2>
          <ContactForm
            saveContact={this.saveContact}
            inputName={this.inputName}
            addContact={this.addContact}
            inputPhone={this.inputPhone}
            addNumber={this.addNumber}
          />
          <h2>Contacts</h2>
          <Filter filterName={this.filterName} />

          <ContactList
            filter={this.state.filter}
            contacts={this.state.contacts}
            deleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default Phonebook;
