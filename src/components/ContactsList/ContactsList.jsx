import PropTypes from 'prop-types';
//import { nanoid } from 'nanoid';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="">
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} id={id}>
            <p>
              <span>{name}: </span>
              {number}
            </p>
            <button type="button" onClick={() => onDeleteContact(id)}>
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
