// eslint-disable-next-line no-unused-vars
import React from 'react';

import '../styles/Linktags.css'; // Import the CSS file

const Linktags = () => {
  return (
    <div className="icons-row">
      <a href="https://dev.to/crvanetten15" target="_blank" className="icon" rel="noreferrer"><i className="fab fa-dev"></i></a>
      <a href="https://www.linkedin.com/in/crvanetten/" target="_blank" className="icon" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
      <a href="mailto:vanettencr@gmail.com" className="icon"><i className="far fa-envelope"></i></a>
      <a href="https://codepen.io/ConCodes" target="_blank" className="icon" rel="noreferrer"><i className="fab fa-codepen"></i></a>
    </div>
  );
};

export default Linktags;