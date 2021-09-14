import React from 'react';
import '../styles/contactpage.css';
import Logo from '../components/logo';


function ContactPage (){
    return (
<>

<div>
    <Logo />
</div>
<div className='header'>
<img src='https://live.staticflickr.com/65535/51473112767_509b4b0ca7_b.jpg' alt='header-image' className='header-image'/>


</div>
<h2>Get in touch by filling out this form</h2>
</>
    )
}

export default ContactPage;