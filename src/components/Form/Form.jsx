import { useState } from 'react';
import style from './Form.module.css';
import shortid from 'shortid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form({ addContact, onUnique }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    // if (name.trim() === '' || phone.trim() === '') {
    //   toast.info('One of the fields is not filled');
    //   // return false;
    // } else
      if (onUnique(name)) {
      toast.error(`${name} is already in contacts list`);
    } else {
      const newContact = { id: shortid.generate(), name, phone };
      addContact(newContact);
    }

    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label className={style.label}>
        Name
        <input
          className={style.input}
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label className={style.label}>
        number
        <input
          className={style.input}
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={phone}
          onChange={handleChange}
          required
        />
      </label>
      <button className={style.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default Form;
