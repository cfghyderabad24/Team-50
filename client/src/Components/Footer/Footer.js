import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              Subhiksha Voluntary Organization is dedicated to supporting children of all ages and disabilities through education, healthcare, and vocational training programs.
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Address: 123 NGO Street, City, Country</li>
              <li>Email: info@subhiksha.org</li>
              <li>Phone: +123 456 7890</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="iconss list-unstyled d-flex">
              <li className=" one mr-3">
                <a href="https://facebook.com" className="text-white" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={24} />
                </a>
              </li>
              <li className=" two mr-3">
                <a href="https://twitter.com" className="text-white" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={24} />
                </a>
              </li>
              <li className="three mr-3">
                <a href="https://instagram.com" className="text-white" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} />
                </a>
              </li>
              <li className="four mr-3">
                <a href="https://linkedin.com" className="text-white" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Subhiksha Voluntary Organization. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
