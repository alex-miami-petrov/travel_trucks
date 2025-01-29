// export default ContactList;

import React, { useEffect } from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact as deleteContactAsync } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import { AnimatePresence, motion } from "framer-motion";
import { slideInFromRight } from "../motion";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchContacts());
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleDeleteContact = (id) => {
    dispatch(deleteContactAsync(id));
  };

  return (
    <ul className={s.contactList}>
      <AnimatePresence>
        {filteredContacts.map((contact, idx) => (
          <motion.li
            key={contact.id}
            exit="exit"
            initial="hidden"
            animate="visible"
            variants={slideInFromRight(idx * 0.4)}
            className={s.contactItem}
          >
            <Contact
              name={contact.name}
              number={contact.number}
              onDelete={() => handleDeleteContact(contact.id)}
            />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default ContactList;
