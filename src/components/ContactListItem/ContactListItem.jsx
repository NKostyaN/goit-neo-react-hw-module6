import css from "./ContactListItem.module.css";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const ContactListItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(item.id));
  };

  return (
    <>
      <div className={css.card}>
        <ul>
          <li>
            <p className={css.name}>&#128100; {item.name}</p>
          </li>
          <li>
            <p className={css.number}>&#128222; {item.number}</p>
          </li>
        </ul>
        <button onClick={handleClick}>Delete</button>
      </div>
    </>
  );
};

export default ContactListItem;
