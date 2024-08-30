import React from 'react';
import './__contacts.scss'; // Importation des styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importation du composant FontAwesomeIcon
import { faAddressBook, faEnvelope, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';

export default function Contact() { 
  return (
    <>
      <h2 className='contactTitle'>Contact:</h2>
      <table className='contactTable'>
        <tbody>
          <tr>
            <td className='contactIcon'><FontAwesomeIcon icon={faEnvelope} /></td>
            <td>Email</td>
            <td><a href="mailto:mesen.erik@gmail.com">mesen.erik@gmail.com</a></td>
          </tr>
          <tr>
            <td className='contactIcon'><FontAwesomeIcon icon={faPhone} /></td>
            <td>Téléphone</td>
            <td><a href="tel:+33-7-68-25-25-09">+33 7 68 25 25 09</a></td>
          </tr>
          <tr>
            <td className='contactIcon'><FontAwesomeIcon icon={faAddressBook} /></td>
            <td>Adresse</td>
            <td>street<br />zip town<br />France</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
