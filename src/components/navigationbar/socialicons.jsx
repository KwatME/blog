import React from "react";

import SocialIcon from "./socialicon";

function SocialIcons() {
  return (
    <>
      <SocialIcon url="https://github.com/KwatME">
        <i className="fab fa-github" />
      </SocialIcon>
      <SocialIcon url="https://scholar.google.com/citations?user=PAM4lScAAAAJ&hl">
        <i className="ai ai-google-scholar ai-lg" />
      </SocialIcon>
      <SocialIcon url="https://twitter.com/KwatME">
        <i className="fab fa-twitter" />
      </SocialIcon>
      <SocialIcon url="https://www.instagram.com/Kwat.ME">
        <i className="fab fa-instagram" />
      </SocialIcon>
    </>
  );
}

export default SocialIcons;
