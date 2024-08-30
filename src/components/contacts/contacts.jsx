import React from 'react';
import styles from './__contacts.scss'; // Importation des styles
import { faAddressBook, faEnvelope, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';

function Contact() { 
  return (
    <>
      <h2 className={styles.contactTitle}>Contact:</h2>
      <table>
        <tbody>
          <tr>
            <td FontAwesome icon={faEnvelope}>Email</td>
            <td><a href="mailto:mesen.erik@gmail.com">mesen.erik@gmail.com</a></td>
          </tr>
          <tr>
            <td FontAwesome icon={faPhone}>Téléphone</td>
            <td><a href="tel:+33-7-68-25-25-09">+33 7 68 25 25 09</a></td>
          </tr>
          <tr>
            <td> FontAwesome icon={faAddressBook}Adresse</td>
            <td>street<br />zip town<br />France</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Contact;
