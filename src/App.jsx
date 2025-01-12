import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import React from "react";

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <br />
      <SearchBox />
      <br />
      <ContactList />
    </div>
  );
};

export default App;
