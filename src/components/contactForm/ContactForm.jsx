import React from "react";

const ContactForm = ({
  saveContact,
  inputName,
  addContact,
  inputPhone,
  addNumber,
}) => {
  return (
    <div>
      <form onSubmit={saveContact}>
        <fieldset>
          <label htmlFor={inputName}>Name</label>
          <br />
          <input
            type="text"
            autoComplete="off"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={addContact}
            id={inputName}
          />
          <br />
          <label htmlFor={inputPhone}>Number</label>
          <br />
          <input
            type="tel"
            autoComplete="off"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={addNumber}
            id={inputPhone}
          />
          <br />
          <button type="submit">Add contact</button>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactForm;
