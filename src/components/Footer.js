import React from 'react';

const Footer = () => (
  <footer className="container">
    <div className="App">
      <div className="footer-title">
        <h6>Made by Harry Crank as part of a project from <a href="https://northcoders.com/">Northcoders</a> Bootcamp</h6>
        <div className="footer-links">
          <a className="list-inline-item badge" href="https://github.com/Haribo7891">
            <img src="/img/github-with-circle.svg" width="20px" alt="github avatar" /></a>
          <a className="list-inline-item badge badge-pill" href="https://twitter.com/haribo7891">
            <img src="/img/twitter-with-circle.svg" width="20px" alt="twitter avatar" /></a>
          <a className="list-inline-item badge badge-pill" href="https://www.linkedin.com/in/harry-crank-a1164b151/">
            <img src="/img/linkedin-with-circle.svg" width="20px" alt="linkedin avatar" /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
