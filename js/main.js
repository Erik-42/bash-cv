// Function Definitions
function help() {
  return `
  <h2 class='helpTitle'>Help:</h2>
  <table>
    <tr><td>all</td><td>show me all the information<br>montre moi toutes les informations</td></tr>
    <tr><td>about</td><td>Everything you ever wanted to know about Erik Mesen<br>Tout ce que vous avez toujours voulu savoir sur moi</td></tr>
    <tr><td>skills</td><td>Discover my skills<br>Découvrez mes compétences</td></tr>
    <tr><td>projects</td><td>Discover the projects I have completed<br>Découvrez les projets que j'ai réalisés</td></tr>
    <tr><td>links</td><td>My different social media profiles<br>Mes différents profils sur les réseaux sociaux</td></tr>
    <tr><td>contact</td><td>How to contact me<br>Comment me contacter</td></tr>
    <tr><td>cv</td><td>Download my CV<br>Téléchargez mon CV</td></tr>
    <tr><td>rickroll</td><td>Never Gonna Give You Up</td></tr>
    <tr><td>credits</td><td>Credits for the site<br>Crédits pour le site</td></tr>
  </table>`;
}

function about() {
  return `<p class='about'>Créatif, Autonome, Curieux Esprit d'analyse Esprit d'équipe Force de proposition Capacités d'adaptation Développeur web junior, je suis dynamique et j’aime travailler en équipe pour relever des challenges techniques. J’ai une bonne maîtrise des outils de développement et je suis en constante recherche d’apprentissage.</p>`;
}

function skills() {
  return `
  <h2 class='skillsTitle'>Skills:</h2>
<div class="skills-container">
  <div class="skills-section">
    <h3 class='skillsSubTitle'>Frontend:</h3>
    <table class="skills-table">
      <tr><td>HTML</td><td>▰▰▰▰▰▰▱▱▱▱ 60%</td></tr>
      <tr><td>CSS</td><td>▰▰▰▰▰▰▱▱▱▱ 60%</td></tr>
      <tr><td>JavaScript</td><td>▰▰▰▰▰▰▱▱▱▱ 60%</td></tr>
      <tr><td>React</td><td>▰▰▰▰▰▰▱▱▱▱ 60%</td></tr>
      <tr><td>Redux</td><td>▰▰▰▰▰▱▱▱▱▱ 50%</td></tr>
      <tr><td>Tailwind</td><td>▰▰▰▰▰▰▰▰▱▱ 80%</td></tr>
      <tr><td>Python</td><td>▰▰▰▰▱▱▱▱▱▱ 40%</td></tr>
    </table>
  </div>

  <div class="skills-section">
    <h3 class='skillsSubTitle'>Backend:</h3>
    <table class="skills-table">
      <tr><td>Node.js</td><td>▰▰▰▰▰▱▱▱▱▱ 50%</td></tr>
      <tr><td>PHP</td><td>▰▰▰▰▰▱▱▱▱▱ 50%</td></tr>
      <tr><td>Apache</td><td>▰▰▰▰▰▱▱▱▱▱ 50%</td></tr>
      <tr><td>MySQL</td><td>▰▰▰▰▰▱▱▱▱▱ 50%</td></tr>
      <tr><td>MongoDB</td><td>▰▰▰▱▱▱▱▱▱▱ 30%</td></tr>
      <tr><td>Nginx</td><td>▰▰▰▰▱▱▱▱▱▱ 40%</td></tr>
    </table>
  </div>

  <div class="skills-section">
    <h3 class='skillsSubTitle'>Design:</h3>
    <table class="skills-table">
      <tr><td>Figma</td><td>▰▰▰▰▰▰▰▰▱▱ 80%</td></tr>
      <tr><td>Photoshop</td><td>▰▰▰▰▰▰▱▱▱▱ 60%</td></tr>
      <tr><td>SolidWorks</td><td>▰▰▰▰▱▱▱▱▱▱ 40%</td></tr>
      <tr><td>Inkscape</td><td>▰▰▰▰▱▱▱▱▱▱ 40%</td></tr>
    </table>
  </div>

  <div class="skills-section">
    <h3 class='skillsSubTitle'>Tools:</h3>
    <table class="skills-table">
      <tr><td>WordPress</td><td>▰▰▰▰▰▰▰▱▱▱ 70%</td></tr>
      <tr><td>Joomla</td><td>▰▰▰▰▰▰▰▱▱▱ 70%</td></tr>
      <tr><td>Drupal</td><td>▰▰▰▰▰▰▱▱▱▱ 60%</td></tr>
      <tr><td>Jira</td><td>▰▰▰▰▰▰▰▰▱▱ 80%</td></tr>
      <tr><td>Notion</td><td>▰▰▰▰▰▰▱▱▱▱ 60%</td></tr>
      <tr><td>Draw.io</td><td>▰▰▰▰▰▰▰▰▱▱ 80%</td></tr>
    </table>
  </div>

  <div class="skills-section">
    <h3 class='skillsSubTitle'>Other:</h3>
    <table class="skills-table">
      <tr><td>Rickrolling</td><td>▰▰▰▰▰▰▰▰▰▰ 100%</td></tr>
    </table>
  </div>
</div>

`}

function resumeProjects() {
  return `<h2 class='projectsTitle'>Projects:</h2>
  <p>Projets Personnel:<br>Une application de gestion de tâches personnelle utilisant React et Node.js.</p>
  <p>Projet Professionnel:<br>Développement d'une plateforme d'e-learning pour une entreprise utilisant Moodle et PHP.</p>`;
}

function projects() {
  return `<h2 class='projectsTitle'>Projects:</h2>
  <ul>
    <li>Projet personnel 1:<br>Une application de gestion de tâches personnelle utilisant React et Node.js.</li>
    <li>Projet Professionnel:<br>Développement d'une plateforme d'e-learning pour une entreprise utilisant Moodle et PHP.</li>
  </ul>`;
}

function links() {
  return `<h2 class='linksTitle'>Links:</h2>
  <ul>
    <li><a href="https://www.linkedin.com/in/erik-mesen/" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
    <li><a href="https://github.com/Erik-42" target="_blank"><i class="fab fa-github"></i> Github</a></li>
  </ul>`;
}

function contact() {
  return `<h2 class='contactTitle'>Contact:</h2>
  <table>
    <tr><td>Email</td><td><a href="mailto:mesen.erik@gmail.com">mesen.erik@gmail.com</a></td></tr>
    <tr><td>Telephone</td><td><a href="tel:+33 (0)7.68.25.25.09">+33 (0)7.68.25.25.09</a></td></tr>
    <tr><td>Address</td><td>15, rue de l'arquette<br>14000 Caen<br>France</td></tr>
  </table>`;
}

function cv() {
  return `
    <div class='cvTitle'>
      <h2 class='cvTitle'>CV:</h2>
      <p style="text-align: left;">Voici mon CV</p>
    </div>
    <iframe class='cvIframe' src="./src/assets/data/Erik-Mesen_CV.pdf" type="application/pdf"></iframe>
  `;
}

function cvDownload() {
  return `<h2 class='cvTitle'>CV:</h2>
  <p style="text-align: left;">Download from <a href="../src/assets/data/Erik-Mesen_CV_2023.pdf" target="_blank" style="text-decoration: underline;">here</a>.</p>`;
}

function credits() {
  return `<p class='creditTitle'>Built by <a href="https://www.github.com/Erik-42" target="_blank"><i class="fab fa-github"></i> Erik-42</a></p>`;
}

function rickroll() {
  return `
    <div class='rickroll'>
      <iframe class='videoIframe'src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen></iframe>
    </div>
    <p>We're no strangers to love<br>You know the rules and so do I<br>A full commitment's what I'm thinking of<br>
    You wouldn't get this from any other guy<br><br>I just wanna tell you how I'm feeling<br>Gotta make you understand<br><br>
    Never gonna give you up<br>Never gonna let you down<br>Never gonna run around and desert you<br>
    Never gonna make you cry<br>Never gonna say goodbye<br>Never gonna tell a lie and hurt you<br><br>
    We've known each other for so long<br>Your heart's been aching, but<br>You're too shy to say it<br>Inside, 
    we both know what's been going on<br>We know the game and we're gonna play it<br><br>
    I just wanna tell you how I'm feeling<br>Gotta make you understand<br><br>
    Never gonna give you up<br>Never gonna let you down<br>Never gonna run around and desert you<br>
    Never gonna make you cry<br>Never gonna say goodbye<br>Never gonna tell a lie and hurt you<br><br>
    Never gonna give you up<br>Never gonna let you down<br>Never gonna run around and desert you<br>
    Never gonna make you cry<br>Never gonna say goodbye<br>Never gonna tell a lie and hurt you<br><br>
    Never gonna give you up<br>Never gonna let you down<br>Never gonna run around and desert you<br>
    Never gonna make you cry<br>Never gonna say goodbye<br>Never gonna tell a lie and hurt you
    </p>
  `;
}


// Main Function
function commandProcessor(e) {
  if (e.keyCode === 13) {
    const txtInput = document.getElementById("txtBox").value.trim().toLowerCase();
    const commands = {
      help,
      all: () => about() + "<br><br>" + skills() + "<br><br>" + resumeProjects() + "<br><br>" + links() + "<br><br>" + contact() + "<br><br>" + cvDownload(),
      about,
      skills,
      projects,
      links,
      contact,
      cv,
      rickroll,
      credits
    };

    document.getElementById("injected").innerHTML = commands[txtInput] ? commands[txtInput]() : help();
    document.getElementById("txtBox").value = "";
  }
}

