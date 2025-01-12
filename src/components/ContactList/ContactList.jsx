import css from "./ContactList.module.css";
import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contacts, toDelete }) => {
  const deleteItem = (id) => {
    toDelete(id);
  };

  return (
    <>
      <ul className={css.contactList}>
        {contacts.map((el) => {
          return (
            <li key={el.id}>
              <ContactListItem
                id={el.id}
                name={el.name}
                number={el.number}
                idToDelete={deleteItem}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
