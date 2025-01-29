import React from "react";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";

const ContactsPage = () => {
  return (
    <div>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
