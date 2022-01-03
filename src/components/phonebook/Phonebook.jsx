import React, { Component } from "react";
import { nanoid } from "nanoid";
import styles from "./Phonebook.module.css";
import ContactForm from "../contactForm/ContactForm";
import Filter from "../filter/Filter";
import ContactList from "../contactList/ContactList";

export class Phonebook extends Component {
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

  ifNameExistInContacts = (inputName) =>
    !this.state.contacts.every(({ name }) => name !== inputName);

  addNameOrNumber = (event) => {
    if (this.ifNameExistInContacts(event.target.value)) {
      alert(`${event.target.value} is already in contacts.`);
    }
    this.setState(
      event.target.name === "name"
        ? { name: event.target.value }
        : { number: event.target.value }
    );
  };

  saveContact = (event) => {
    event.preventDefault();

    this.setState(({ name, number, contacts }) => {
      if (name === "") return;
      return {
        contacts: [...contacts, { id: nanoid(), name, number }],
        name: "",
      };
    });
  };

  filterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  deleteContact = (event) => {
    this.setState(({ contacts }) => {
      return { contacts: contacts.filter(({ id }) => id !== event) };
    });
  };

  saveContactsInLocalStorage = () => {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  };

  componentDidMount() {
    let storagedContacts = localStorage.getItem("contacts");

    storagedContacts
      ? this.setState({ contacts: JSON.parse(storagedContacts) })
      : this.saveContactsInLocalStorage();
  }

  componentDidUpdate() {
    this.saveContactsInLocalStorage();
  }

  render() {
    return (
      <section className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm
          saveContact={this.saveContact}
          addNameOrNumber={this.addNameOrNumber}
        />
        <h2 className={styles.title} style={{ marginBottom: 0 }}>
          Contacts
        </h2>
        <Filter filterChange={this.filterChange} />
        <ContactList {...this.state} deleteContact={this.deleteContact} />
      </section>
    );
  }
}

export default Phonebook;
