import css from "./ContactList.module.css";
import ContactListItem from "../ContactListItem/ContactListItem";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter)
  );

  return (
    <>
      {contacts.length === 0 ? (
        <p>Tere is no contacts yet, try to add some</p>
      ) : (
        <ul className={css.contactList}>
          {filteredContacts.map((el) => {
            return (
              <li key={el.id}>
                <ContactListItem item={el} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ContactList;
