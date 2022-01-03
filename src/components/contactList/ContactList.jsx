import React from "react";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, filter, deleteContact }) => {
  return (
    <ul className={styles.contacts} style={{ padding: 0 }}>
      {contacts.map(({ id, name, number }) => {
        return name.toLowerCase().includes(filter.toLowerCase()) ? (
          <li key={id} className={styles.contact}>
            {name} {number}
            <button
              className={styles.btn_delete}
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ) : null;
      })}
    </ul>
  );
};

export default ContactList;
