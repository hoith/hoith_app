import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>&copy; {year} Hoith. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
