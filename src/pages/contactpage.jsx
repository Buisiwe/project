import React from 'react';
import '../styles/contactpage.css';
import Logo from '../components/logo';
import Footer from '../components/footer';


function ContactPage (){
    return (
<>

<div>
    <Logo />
</div>
<div className='header'>
<img src='https://live.staticflickr.com/65535/51473112767_509b4b0ca7_b.jpg' alt='header-image' className='header-image'/>
</div>

<h2>Get In Touch By Filling Out This Form</h2>
<div className='input-area'>
<p className='label'>Name</p>
<input name='name' type='text' className='input'/>

<p className='label'>Email Address</p>
<input name='email' type='text' className='input'/>

<p className='label'>Message</p>
<textarea name='message' type='text' className='input' />
</div>

//send button

<img src='https://s3-alpha-sig.figma.com/img/5a71/8938/cbd96e01169ecaccfe108988c59eb3ce?Expires=1631491200&Signature=SoBLBgGqeLkKn~0AEFaXcoNeJbHONU6vqDFOixIfgXtlANlehEohQIshm2FH0osiOL9nsGlIhQ0hklQBb5IvYWl25wkDTFEtOkLSsh9HX2K-xoXwIDEsKy3hU61x7PKKLGr7V2xM12AWkcOZfHJdhI2mbjlPVPxVo6ymUE3n~R2MY8RnZJ3XNjMRkc5wYF~XxhVI0n68gOp~NqTHCayQBGbU9PUHrMateqv5pui0ukD93xdSV6iZUNptoQYYW6lHXCh-dJxnYYxanzTEjskIgC7XbdafXxRfx5YjJYwH8SD5sl8T5aX~4Yz8S9yXUmqmR6D4u9MrLGGF2r9FM3Iypw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' alt=''
	className='image'/>

<Footer />

</>
    )
}

export default ContactPage;



