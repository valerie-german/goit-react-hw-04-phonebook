import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} id={id} className={css.li}>
            <p className={css.contact}>
              <span>{name}: </span>
              {number}
            </p>
            <button
              type="button"
              onClick={() => onDeleteContact(id)}
              className={css.btn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
