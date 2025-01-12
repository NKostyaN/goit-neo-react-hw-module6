import css from "./ContactListItem.module.css";

const ContactListItem = ({ id, name, number, idToDelete }) => {
  const handleClick = () => {
    idToDelete(id);
  };

  return (
    <>
      <div className={css.card}>
        <ul>
          <li>
            <p className={css.name}>&#128100; {name}</p>
          </li>
          <li>
            <p className={css.number}>&#128222; {number}</p>
          </li>
        </ul>
        <button onClick={handleClick}>Delete</button>
      </div>
    </>
  );
};

export default ContactListItem;
