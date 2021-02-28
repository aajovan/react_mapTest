
import React from 'react';

function Footer({ text }) {
  return (
    <div>
      <footer className="footer bg-primary p-3">
        <div className="text-center">
          <span className="text-white font-weight-bold">{text}</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
