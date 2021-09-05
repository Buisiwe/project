import React from 'react';
import TopNavigation from '../components/top-navigation';
import '../styles/index.css';
import '../styles/landingpage.css';

function LandingPage() {
	return (
		<>
			<div>
				<TopNavigation />
			</div>

			<div className='intro'>
				<div>
					<h1 className='heading'>
						Early prediction for <br />
						Early healing.
					</h1>
					<p className='motto'>
						Helping you predict diseases early with envisio.
					</p>
				</div>

				<div className='start-button'>
					<a href='' className='get-started-link'>
						Get Started
					</a>
				</div>
			</div>

			<div className='landing-image'>
				<img
					src='https://s3-alpha-sig.figma.com/img/5a71/8938/cbd96e01169ecaccfe108988c59eb3ce?Expires=1631491200&Signature=SoBLBgGqeLkKn~0AEFaXcoNeJbHONU6vqDFOixIfgXtlANlehEohQIshm2FH0osiOL9nsGlIhQ0hklQBb5IvYWl25wkDTFEtOkLSsh9HX2K-xoXwIDEsKy3hU61x7PKKLGr7V2xM12AWkcOZfHJdhI2mbjlPVPxVo6ymUE3n~R2MY8RnZJ3XNjMRkc5wYF~XxhVI0n68gOp~NqTHCayQBGbU9PUHrMateqv5pui0ukD93xdSV6iZUNptoQYYW6lHXCh-dJxnYYxanzTEjskIgC7XbdafXxRfx5YjJYwH8SD5sl8T5aX~4Yz8S9yXUmqmR6D4u9MrLGGF2r9FM3Iypw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
					alt=''
				/>
			</div>

				<div className='about'>
					<h2>About Envisio.</h2>
					<p>Lorem ipsum stuff...</p>
				</div>

				<div className="how-it-works">
                <div>
					<h2>How It Works</h2>
				</div>

				<div className='content-wrapper'>
					<div className='content-container'>
                        {/* //image goes here */}
						<h3 className='content-heading'>Early Prediction</h3>
						<p className='content-body'>Lorem impsum stuff</p>
					</div>
					<div className='content-container'>
                        {/* //image goes here */}
						<h3 className='content-heading'>Save time</h3>
						<p className='content-body'>Lorem impsum stuff</p>
					</div>
					<div className='content-container'>
                        {/* //image goes here */}
						<h3 className='content-heading'>Data Storage</h3>
						<p className='content-body'>Lorem impsum stuff</p>
					</div>
				</div>
			</div>

			{/* ; */}
		</>
	);
}

export default LandingPage;
