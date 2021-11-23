import React from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';

const Contact = ({ data, onClick }) => {
  const { name, number, id } = data;

  return (
    <div className={s.contact}>
      <span className={s.name}>{name}:</span>
      <a className={s.number} href={`tel:${number}`}>
        {number}
      </a>
      <button className={s.button} type="button" onClick={() => onClick(id)}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Contact;
