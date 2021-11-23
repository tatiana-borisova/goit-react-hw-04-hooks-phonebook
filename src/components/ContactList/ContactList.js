import React from 'react';
import Contact from '../Contact';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onClick }) => (
  <div className={s.contacts}>
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={s.contact}>
          <Contact data={contact} onClick={onClick} />
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onClick: PropTypes.func.isRequired,
};

export default ContactList;
