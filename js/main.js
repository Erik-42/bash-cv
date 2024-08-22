// Functions for each action-command.

function help() {
  return '<h2><span style="color:#eb926d;">Help:</span></h2><table>\
  <tr>\
    <td>all</td>\
    <td>show me all the information<br>montre moi toutes les informations</td>\
  </tr>\
  <tr>\
    <td>about</td>\
    <td>Everything you ever wanted to know about Erik Mesen<br>Tout ce que vous avez toujours voulu savoir sur Erik Mesen</td>\
  </tr>\
  <tr>\
    <td>skills</td>\
    <td>Discover my skills<br>Découvrez mes compétences</td>\
  </tr>\
  <tr>\
    <td>projects</td>\
    <td>Discover the projects I have completed<br>Découvrez les projets que j ai réalisés</td>\
  </tr>\
   <tr>\
    <td>links</td>\
    <td>my different social media profiles<br>mes différents profils sur les réseaux sociaux</td>\
  </tr>\
  <tr>\
    <td>contact</td>\
    <td>How to contact me<br>Comment me contacter</td>\
  </tr>\
  <tr>\
    <td>cv</td>\
    <td>Download my CV<br>Téléchargez mon CV</td>\
  </tr>\
  <tr>\
    <td>rickroll</td>\
    <td>Never Gonna Give You Up</td>\
  </tr></table>';
}

function about() {
  return "<p>Développeur web, je suis dynamique et j aime travailler en équipe pour relever des challenges techniques.<br>J ai une bonne maîtrise des outils de développement et je suis en constante recherche d apprentissage.</p>";
}

function skills() {
  return `
  <h2><span style="color:#81a2be;">Skills:</span></h2>

  <div style="display: flex; flex-wrap: wrap; gap: 20px;">
    <div style="flex: 1; min-width: 250px;">
      <h3><span style="color:#81a2be;">Frontend:</span></h3>
      <table>
        <tr>
          <td>HTML</td>
          <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>
        </tr>
        <tr>
          <td>CSS</td>
          <td>▰▰▰▰▰▱▱▱▱▱ 50%</td>
        </tr>
        <tr>
          <td>JavaScript</td>
          <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
        </tr>
        <tr>
          <td>React</td>
          <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
        </tr>
        <tr>
          <td>Tailwind</td>
          <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
        </tr>
        <tr>
          <td>Python</td>
          <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
        </tr>
      </table>
    </div>

    <div style="flex: 1; min-width: 250px;">
      <h3><span style="color:#81a2be;">Backend:</span></h3>
      <table>
        <tr>
          <td>Node.js</td>
          <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
        </tr>
        <tr>
          <td>PHP</td>
          <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
        </tr>
        <tr>
          <td>Apache</td>
          <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
        </tr>
        <tr>
          <td>MySQL</td>
          <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
        </tr>
        <tr>
          <td>Nginx</td>
          <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
        </tr>
      </table>
    </div>
  </div>
  
  <div style="display: flex; flex-wrap: wrap; gap: 20px;">
    <div style="flex: 1; min-width: 250px;">
      <h3><span style="color:#81a2be;">Design:</span></h3>
      <table>
        <tr>
          <td>Figma</td>
          <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
        </tr>
        <tr>
          <td>Photoshop</td>
          <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
        </tr>
        <tr>
          <td>SolidWorks</td>
          <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
        </tr>
        <tr>
          <td>Inkscape</td>
          <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
        </tr>
      </table>
    </div>

    <div style="flex: 1; min-width: 250px;">
      <h3><span style="color:#81a2be;">Tools:</span></h3>
      <table>
        <tr>
          <td>WordPress</td>
          <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
        </tr>
        <tr>
          <td>Joomla</td>
          <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
        </tr>
        <tr>
          <td>Drupal</td>
          <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
        </tr>
        <tr>
          <td>Jira</td>
          <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
        </tr>
        <tr>
          <td>Notion</td>
          <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
        </tr>
        <tr>
          <td>Draw.io</td>
          <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>
        </tr>
      </table>
    </div>
  </div>

  <div style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 20px; margin-top: 20px;">
    <div style="min-width: 250px;">
      <h3><span style="color:#81a2be;">Other:</span></h3>
      <table>
        <tr>
          <td>Rickrolling</td>
          <td>▰▰▰▰▰▰▰▰▰▰ 100%</td>
        </tr>
      </table>
    </div>
  </div>`;
}

function resumeProjects() {
  return "<p>Projets Personnel:<br>Une application de gestion de tâches personnelle utilisant React et Node.js.\
  <br>Projet Professionnel:<br>Développement d'une plateforme d'e-learning pour une entreprise utilisant Moodle et PHP.</p>";
}

function projects() {
  return `<span style="color: #b5bd68;"><h2>Projects:</h2></span><ul>\<p>Projet Personnel:<br>Une application de gestion de tâches personnelle utilisant React et Node.js.\
  <br>Projet Professionnel:<br>Développement d'une plateforme d'e-learning pour une entreprise utilisant Moodle et PHP.</p>`;
}

function links() {
  return '<span style="color: #b5bd68;"><h2>Links:</h2></span><ul>\
  <li><a href="https://www.linkedin.com/in/erik-mesen/" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a></li>\
  <li><a href="https://github.com/Erik-42" target="_blank"><i class="fab fa-github"></i> Github</a></li>\
';
}

function contact() {
  return '<h2><span style="color:#cc6666;">Contact:</span></h2><table>\
  <tr>\
    <td>Email</td>\
    <td><a href="mailto:mesen.erik@gmail.com">mesen.erik@gmail.com</a></td>\
  </tr>\
  <tr>\
    <td>Telephone</td>\
    <td><a href="tel:+33 (0)7.68.25.25.09">+33 (0)7.68.25.25.09</a></td>\
  </tr>\
  <tr>\
    <td>Address</td>\
    <td>Erik Mesen</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>15, rue de l arquette</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>14000</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>Caen</td>\
  </tr>\
  <tr>\
    <td> </d>\
    <td>France</td>\
  </tr></table>';
}

function cv() {
  return '<span style="color:#8abeb7;"><h2>CV:</h2></span><p>\tDownload from <a href="../src/assets/data/Erik-Mesen_CV_2023.pdf" target="_blank" style="text-decoration: underline;">here</a>.</p>';
}

function credits() {
  return '<p>Built by <a href="https://www.github.com/Erik-42" target="_blank"><i class="fab fa-github"></i> Erik-42</a></p>';
}

function rickroll() {
  return "<p>We're no strangers to love<br>\
    You know the rules and so do I<br>\
    A full commitment's what I'm thinking of<br>\
    You wouldn't get this from any other guy<br>\
    <br>\
    I just wanna tell you how I'm feeling<br>\
    Gotta make you understand<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    We've known each other for so long<br>\
    Your heart's been aching, but<br>\
    You're too shy to say it<br>\
    Inside, we both know what's been going on<br>\
    We know the game and we're gonna play it<br>\
    <br>\
    And if you ask me how I'm feeling<br>\
    Don't tell me you're too blind to see<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    (Ooh, give you up)<br>\
    (Ooh, give you up)<br>\
    Never gonna give, never gonna give<br>\
    (Give you up)<br>\
    Never gonna give, never gonna give<br>\
    (Give you up)<br>\
    <br>\
    We've known each other for so long<br>\
    Your heart's been aching, but<br>\
    You're too shy to say it<br>\
    Inside, we both know what's been going on<br>\
    We know the game and we're gonna play it<br>\
    <br>\
    I just wanna tell you how I'm feeling<br>\
    Gotta make you understand<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you</p>";
}

// Main Function
function commandProcessor(e) {
  //Check if the enter key is pressed
  if (e.keyCode == 13) {
    //Clear the area where info will be printed
    document.getElementById("injected").innerHTML = "";

    //Get user input
    const txtInput = document.getElementById("txtBox").value;

    //Select what info to print according to command
    if (txtInput == "help") {
      document.getElementById("injected").innerHTML = help();
    } else if (txtInput == "all") {
      document.getElementById("injected").innerHTML =
        about() +
        "\n\n\n" +
        skills() +
        "\n\n\n" +
        resumeProjects() +
        "\n\n\n" +
        links() +
        "\n\n\n" +
        contact() +
        "\n\n\n" +
        cv();
    } else if (txtInput == "about") {
      document.getElementById("injected").innerHTML = about();
    } else if (txtInput == "skills") {
      document.getElementById("injected").innerHTML = skills();
    } else if (txtInput == "projects") {
      document.getElementById("injected").innerHTML = projects();
    } else if (txtInput == "links") {
      document.getElementById("injected").innerHTML = links();
    } else if (txtInput == "contact") {
      document.getElementById("injected").innerHTML = contact();
    } else if (txtInput == "cv") {
      document.getElementById("injected").innerHTML = cv();
    } else if (txtInput == "rickroll") {
      const win = window.open(
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "_blank"
      );
      win.focus();
      document.getElementById("injected").innerHTML = rickroll();
    } else if (txtInput == "credits") {
      document.getElementById("injected").innerHTML = credits();
    } else {
      document.getElementById("injected").innerHTML = help();
    }

    //Clear input text box
    document.getElementById("txtBox").value = "";
  }
}
