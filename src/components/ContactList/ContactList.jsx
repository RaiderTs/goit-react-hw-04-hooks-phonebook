import PropTypes from 'prop-types';
import style from './ContactList.module.css';

function ContactList({ contacts, onRemove }) {
  return (
    contacts.length !== 0 && (
      <ul className={style.list}>
        {contacts.map(({ id, name, phone }) => (
          <li className={style.item} key={id}>
            <p className={style.info}>
              {name}: {phone}
            </p>
            <button className={style.btn} onClick={() => onRemove(id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    )
  );
  // if (contacts.length === 0) return null;
  // return (
  //   <ul className={style.list}>
  //     {contacts.map(({ id, name, phone }) => (
  //       <li className={style.item} key={id}>
  //         <p className={style.info}>
  //           {name}: {phone}
  //         </p>
  //         <button className={style.btn} onClick={() => onRemove(id)}>
  //           Remove
  //         </button>
  //       </li>
  //     ))}
  //   </ul>
  // );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }),
  ),
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;
