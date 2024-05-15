import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  console.log(contacts);

  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li className={css.contactListItem} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
