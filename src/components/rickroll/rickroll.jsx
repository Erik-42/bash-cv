import React from 'react';
import styled from './rickroll.module.scss'; // Correction de l'import

function Rickroll() {
  return (
    <div className={styled.rickroll}>
      <iframe 
        className={styled.videoIframe}
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>
        We're no strangers to love<br />
        You know the rules and so do I<br />
        A full commitment's what I'm thinking of<br />
        You wouldn't get this from any other guy<br /><br />
        I just wanna tell you how I'm feeling<br />
        Gotta make you understand<br /><br />
        Never gonna give you up<br />
        Never gonna let you down<br />
        Never gonna run around and desert you<br />
        Never gonna make you cry<br />
        Never gonna say goodbye<br />
        Never gonna tell a lie and hurt you<br /><br />
        We've known each other for so long<br />
        Your heart's been aching, but<br />
        You're too shy to say it<br />
        Inside, we both know what's been going on<br />
        We know the game and we're gonna play it<br /><br />
        I just wanna tell you how I'm feeling<br />
        Gotta make you understand<br /><br />
        Never gonna give you up<br />
        Never gonna let you down<br />
        Never gonna run around and desert you<br />
        Never gonna make you cry<br />
        Never gonna say goodbye<br />
        Never gonna tell a lie and hurt you<br /><br />
        Never gonna give you up<br />
        Never gonna let you down<br />
        Never gonna run around and desert you<br />
        Never gonna make you cry<br />
        Never gonna say goodbye<br />
        Never gonna tell a lie and hurt you<br /><br />
        Never gonna give you up<br />
        Never gonna let you down<br />
        Never gonna run around and desert you<br />
        Never gonna make you cry<br />
        Never gonna say goodbye<br />
        Never gonna tell a lie and hurt you
      </p>
    </div>
  );
}

export default Rickroll;
