import React from 'react';
import   './__skills.scss'; // Assurez-vous que le fichier CSS Modules existe

export default function Skills() {
  return (
    <div>
      <h2 className='skillsTitle'>Skills:</h2>
      <div className='skillsContainer'>
        <div className='skillsSection'>
          <h3 className='skillsSubTitle'>Frontend:</h3>
          <table className='skillsTable'>
            <tbody>
              <tr>
                <td>HTML</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>CSS</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>JavaScript</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>React</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>Redux</td>
                <td>▰▰▰▰▰▱▱▱▱▱ 50%</td>
              </tr>
              <tr>
                <td>Tailwind</td>
                <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
              </tr>
              <tr>
                <td>Python</td>
                <td>▰▰▰▰▱▱▱▱▱▱ 40%</td>
              </tr>
            </tbody>
          </table>
        </div>
<div className='skillsSection'>
          <h3 className='skillsSubTitle'>Backend:</h3>
          <table className='skillsTable'>
            <tbody>
              <tr>
                <td>Node.js</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>PHP</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>Apache</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>MySQL/MariaDB</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>MongoDB</td>
                <td>▰▰▰▰▰▱▱▱▱▱ 50%</td>
              </tr>
              <tr>
                <td>NGinx</td>
                <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='skillsSection'>
          <h3 className='skillsSubTitle'>Design:</h3>
          <table className='skillsTable'>
            <tbody>
              <tr>
                <td>Figma</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>PhotoShop</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>SolidWorks</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>InkScape</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='skillsSection'>
          <h3 className='skillsSubTitle'>Tools:</h3>
          <table className='skillsTable'>
            <tbody>
              <tr>
                <td>WordPress</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>Joomla</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>Drupal</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>Jira</td>
                <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
              </tr>
              <tr>
                <td>Notion</td>
                <td>▰▰▰▰▰▱▱▱▱▱ 50%</td>
              </tr>
              <tr>
                <td>Draw.io</td>
                <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Other sections can be added here */}
      </div>
    </div>
  );
}
