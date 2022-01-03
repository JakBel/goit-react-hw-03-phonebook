import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = ({ saveContact, addNameOrNumber }) => {
  return (
    <>
      <form className={styles.wrapper} onSubmit={saveContact}>
        <div className={styles.column}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={addNameOrNumber}
          />
        </div>
        <div className={styles.column}>
          <label className={styles.label} htmlFor="number">
            Number
          </label>
          <input
            className={styles.input}
            type="tel"
            autoComplete="off"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={addNameOrNumber}
          />
        </div>
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
