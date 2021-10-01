import React from 'react';
import { useHistory } from 'react-router-dom';
import ListBar from '../components/list-bar';
import TopNavigation from '../components/top-navigation';
import '../styles/index.css';
import '../styles/landingpage.css';
import Footer from '../components/footer';

function LandingPage() {

	const history = useHistory();
	const routeChange = () => {
		let path = `/onboarding`;
		history.push(path);
	};

	return (
		<>
			<div className='main' id='top'>
				<div>
					<TopNavigation />
				</div>

				<div className='welcome'>
					<div className='intro'>
						<div className='headline'>
							<h1 className='heading'>
								Automated tests to <br />
								save time on <br />
								diagnosis.
							</h1>
    
							<p className='motto' style={{paddingTop: '15px', paddingBottom: '50px', color: '#7A7A7A', fontSize: '20px'}}>
								Predictions that never fail.</p>
						</div>

						<div className='start-button'>
							<button className='get-started' type='submit' onClick={routeChange}>
								Get Started
							</button>
						</div>
					</div>

						<img
							src='https://i.ibb.co/9HfjXmj/trafalgar-illustration-sec02-2.png'
							alt='welcome-healthcare-providers'
							className='landing-image'
						/>
				</div>

				<div className='about-section' id='about'>
					<h2>About Envisio.</h2>
					<p className='about-content'>
						The advent of the pandemic covid-19 made the world revisit the issue
						of inadequacies in it’s health sector. It is with <br /> same
						initiative in mind that we have created this product to rid the
						world of uncertainties where health is concerned <br /> and promote
						the usage of technology in achieving this goal. This model will
						predict a near-accurate possibility of <br /> breast cancer in
						women.
					</p>
				</div>

				<div className='how-it-works'>
					<div>
						<h2 className='h-i-t-heading'>How It Works</h2>
					</div>

					<div className='content-wrapper'>
						<div className='content-container'>
							<svg
								width='74'
								height='104'
								viewBox='0 0 74 104'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M62.833 31.3335H11.1663C5.48301 31.3335 0.833008 35.9835 0.833008 41.6668V93.3335C0.833008 99.0168 5.48301 103.667 11.1663 103.667H62.833C68.5163 103.667 73.1664 99.0168 73.1664 93.3335V41.6668C73.1664 35.9835 68.5163 31.3335 62.833 31.3335ZM36.9997 95.9168C34.158 95.9168 31.833 93.5918 31.833 90.7502V88.1668H42.1663V90.7502C42.1663 93.5918 39.8413 95.9168 36.9997 95.9168ZM42.1663 83.0002H31.833C31.833 75.2502 18.9163 67.5002 18.9163 57.1668C18.9163 47.1952 27.028 39.0835 36.9997 39.0835C46.9713 39.0835 55.083 47.1952 55.083 57.1668C55.083 67.5002 42.1663 75.2502 42.1663 83.0002ZM67.9997 23.5835H5.99968C5.99968 19.2952 9.46134 15.8335 13.7497 15.8335H60.2497C64.538 15.8335 67.9997 19.2952 67.9997 23.5835ZM62.833 8.0835H11.1663C11.1663 3.79516 14.628 0.333496 18.9163 0.333496H55.083C59.3713 0.333496 62.833 3.79516 62.833 8.0835Z'
									fill='url(#paint0_linear)'
								/>
								<defs>
									<linearGradient
										id='paint0_linear'
										x1='36.9997'
										y1='0.333496'
										x2='36.9997'
										y2='103.667'
										gradientUnits='userSpaceOnUse'
									>
										<stop stop-color='#4787F3' />
										<stop offset='1' stop-color='#87C6FD' />
									</linearGradient>
								</defs>
							</svg>
							<h3 className='content-heading'>Early Prediction</h3>
							<p className='content-body'>
								Get early predictions on breast cancer to ensure early
								treatment.
							</p>
						</div>

						<div className='content-container'>
							<svg
								width='104'
								height='104'
								viewBox='0 0 104 104'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M52.2917 0.333496C23.8027 0.333496 0.625 23.5112 0.625 52.0002C0.625 80.4892 23.8027 103.667 52.2917 103.667C80.7807 103.667 103.958 80.4892 103.958 52.0002C103.958 23.5112 80.7807 0.333496 52.2917 0.333496ZM82 57.1668H47.125V21.0002H57.4583V46.8335H82V57.1668Z'
									fill='url(#paint0_linear)'
								/>
								<defs>
									<linearGradient
										id='paint0_linear'
										x1='52.2917'
										y1='0.333496'
										x2='52.2917'
										y2='103.667'
										gradientUnits='userSpaceOnUse'
									>
										<stop stop-color='#4D8DF5' />
										<stop offset='1' stop-color='#7FBFFC' />
									</linearGradient>
								</defs>
							</svg>
							<h3 className='content-heading'>Save time</h3>
							<p className='content-body'>
								Our model provides quicker results, saves time and cost of
								running tests.
							</p>
						</div>

						<div className='content-container'>
							<svg
								width='90'
								height='103'
								viewBox='0 0 90 103'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M90 14.6939V23.8775C90 31.9707 69.8438 38.5714 45 38.5714C20.1562 38.5714 0 31.9707 0 23.8775V14.6939C0 6.60074 20.1562 0 45 0C69.8438 0 90 6.60074 90 14.6939ZM90 35.3572V56.0204C90 64.1136 69.8438 70.7143 45 70.7143C20.1562 70.7143 0 64.1136 0 56.0204V35.3572C9.66797 42.0154 27.3632 45.1149 45 45.1149C62.6368 45.1149 80.3318 42.0154 90 35.3572ZM90 67.5V88.1633C90 96.2564 69.8438 102.857 45 102.857C20.1562 102.857 0 96.2564 0 88.1633V67.5C9.66797 74.1582 27.3632 77.2578 45 77.2578C62.6368 77.2578 80.3318 74.1582 90 67.5Z'
									fill='url(#paint0_linear)'
								/>
								<defs>
									<linearGradient
										id='paint0_linear'
										x1='45'
										y1='0'
										x2='45'
										y2='102.857'
										gradientUnits='userSpaceOnUse'
									>
										<stop stop-color='#4989F4' />
										<stop offset='1' stop-color='#81C1FC' />
									</linearGradient>
								</defs>
							</svg>
							<h3 className='content-heading'>Data Storage</h3>
							<p className='content-body'>
								Have access to your patients’ history with for easy reference
								and referal.
							</p>
						</div>
					</div>
				</div>

				<div className='blob'>
					<div className='product background' id='our-product'>
						<h2 className='product-heading'>Our Product.</h2>
						<img
							src='https://i.ibb.co/sQTshzY/DASHBOARD-HIFI.png'
							alt='product-dashboard'
							className='product-image'
						/>
					</div>
				</div>

				<div>
					<ListBar />
				</div>

				<div className='users-section'>
					<div className='user-1'>
						<h2 className='who-can'>Who Can Use Envisio?</h2>
						<img
							src='https://i.ibb.co/VN1gb99/illustration.png'
							alt='healthcare-providers'
							className='healthcare-providers'
						/>
						<div className='healthcare-container'>
							<h3 className='who-can-head'>Healthcare Providers</h3>
							<div className="grey-bar">
							<svg
								width='56'
								height='3'
								viewBox='0 0 56 3'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<rect width='56' height='3' rx='1.5' fill='#A6A6A6' />
							</svg>
							</div>

							<p className='who-can-desc'>
								The platform serves as an AI asistant for all <br /> healthcare
								providers in detecting breast cancer in <br /> patients early
								and easily.
							</p>
							<div className='signup-button start-button'>
							<button className='signup' type='submit' onClick={routeChange}>
									Sign Me Up
								</button>
							</div>
						</div>
					</div>

					<div className='user-2'>
						<div className='medical-container'>
							<h3 className='who-can-head'>Registered Medical Centers</h3>
							<div className="grey-bar">
							<svg
								width='56'
								height='3'
								viewBox='0 0 56 3'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<rect width='56' height='3' rx='1.5' fill='#A6A6A6' />
							</svg>
							</div>

							<p className='who-can-desc'>
								With the data storage system, this platform also <br /> serves
								as a management system for already existing <br /> medical
								centers. Ensuring a decentralized access to <br /> authorized
								personnel associated with the centers.
							</p>
							<div className='signup-button start-button'>
							<button className='signup' type='submit' onClick={routeChange}>
									Sign Me Up
								</button>
							</div>
						</div>

						<img
							className='medical'
							src='https://i.ibb.co/VxZL0QC/trafalgar-illustration-sec03-1.png'
							alt='healthcare-providers'
						/>
					</div>
				</div>

				<div>
					<Footer />
				</div>
			</div>
		</>
	);
}

export default LandingPage;
