import React from 'react';
import '../App.css';

function Contact() {
    return (
        <div id="Contact" className="contact-container text-center" style={{ color: 'white', padding: '50px' }}>
            <h1 style={{ fontWeight: 'bold' }}>Contact</h1>
            <h2 style={{ margin: '20px 0' }}>PERSONAL INFO:</h2>
            <p><strong>NAME:</strong> Jerome B. Millanes</p>
            <p><strong>ADDRESS:</strong> # Z-7 Calauag Vilmar Homes Mahigos St, Naga City.</p>
            <p><strong>PHONE NUMBER:</strong> 09853103000</p>
            <p><strong>EMAIL:</strong> <a href="mailto:jmillanes@gbox.ncf.edu.ph" style={{ color: 'white' }}>jmillanes@gbox.ncf.edu.ph</a></p>
            <p><strong>FACEBOOK ACCOUNT:</strong> <a href="https://www.facebook.com/jerome.millanes.142/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Jerome Botalon Millanes</a></p>
        </div>
    );
}

export default Contact;