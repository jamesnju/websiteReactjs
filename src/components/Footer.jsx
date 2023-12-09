import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './footer.css';

export const Footer = () => {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join the Adveture Newsletter to receive our best
                vacation deals.
            </p>
            <p className="footer-subscription-text">
                You can unsubscribe at any time.
            </p>
            <div className="input-areas">
                <form action="">
                    <input type="email"
                    name='email' 
                    placeholder='Your email'
                    className='footer-input' />
                    <Button buttonStyle='btn-outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h1>Services</h1>
                    <Link to='/sign-up'> How it works</Link>
                    <Link to='/'> Testimonies</Link>
                    <Link to='/'> Careers</Link>
                    <Link to='/'> Investors</Link>
                    <Link to='/'> Terms of Service</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h1>Contact</h1>
                    <Link to='/sign-up'> How it works</Link>
                    <Link to='/'> Testimonies</Link>
                    <Link to='/'> Careers</Link>
                    <Link to='/'> Investors</Link>
                    <Link to='/'> Terms of Service</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h1>Products</h1>
                    <Link to='/sign-up'> How it works</Link>
                    <Link to='/'> Testimonies</Link>
                    <Link to='/'> Careers</Link>
                    <Link to='/'> Investors</Link>
                    <Link to='/'> Terms of Service</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h1>About Us</h1>
                    <Link to='/sign-up'> How it works</Link>
                    <Link to='/'> Testimonies</Link>
                    <Link to='/'> Careers</Link>
                    <Link to='/'> Investors</Link>
                    <Link to='/'> Terms of Service</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h1>Careers</h1>
                    <Link to='/sign-up'> How it works</Link>
                    <Link to='/'> Testimonies</Link>
                    <Link to='/'> Careers</Link>
                    <Link to='/'> Investors</Link>
                    <Link to='/' > Terms of Service</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link className="social-logo">
                        JNM <i className="fab fatypo3"></i>
                    </Link>
                </div>
                <small className="website-rights">JNM &copy; 2023 </small>
                <div className="social-icons">
                    <Link className="social-icon-link facebbook"
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="social-icon-link facebbook"
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="social-icon-link facebbook"
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="social-icon-link facebbook"
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                </div>
            </div>
        </section>

    </div>
  )
}
