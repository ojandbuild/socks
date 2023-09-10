import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
                <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
            </div>
            <div className="contact-info">
                <p>Email: contact@example.com</p>
                <p>Phone: 123-456-7890</p>
            </div>
            <div className="copyright">
                <p>&copy; 2023 Basketball Sock Store. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
