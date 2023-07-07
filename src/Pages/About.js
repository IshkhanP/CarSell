import React from 'react';
import './About.css';

export function About() {
    return (
        <div className="About">
            <nav>
                <div>CarSell</div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                </ul>
            </nav>
            <section>
                <div className="about-container">
                    <h1>About Us</h1>
                    <div>
                        <p>CarSell կայքն օգնում է գնել եւ վաճառել ավտոմեքենաներ եւ այլ տրանսպորտային միջոցներ։ </p>
                        <p>CarSell կայքը ստեղծվել է 2023 թվականին:</p>
                    </div>
                </div>
            </section>
            <footer>
                <div className="footer-left">
                    <p>CarSell &copy; 2023</p>
                </div>
                <div className="footer-right">
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}
