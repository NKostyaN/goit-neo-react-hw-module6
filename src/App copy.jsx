import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import contactsFaked from "./data/contactsFaked.json";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const generateContactList = () => {
      const contacts = localStorage.getItem("contacts");
      if (contacts) {
        return JSON.parse(contacts);
      }
      return contactsFaked;
  };

  const [contacts, setContacts] = useState(generateContactList);
  const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter)
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (data) => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    setContacts([...contacts, contact]);
  };

  const handleSearch = (data) => {
    setFilter(data.toLowerCase());
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm toSubmit={handleSubmit} />
      <br />
      <SearchBox toSearch={handleSearch} />
      <br />
      <ContactList contacts={filteredContacts} toDelete={handleDelete} />
    </div>
  );
};

export default App;
