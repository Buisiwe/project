import React from 'react';
import '../styles/teampage.css';
import Footer from '../components/footer';
import TopNavigation from '../components/top-navigation';

const TeamPage =() => {
    return(
<div className='team-body'>
				<div>
					<TopNavigation />
				</div>

                <h1 className="meet">Meet The Team</h1>

                <div className="team-container">
                <img src='https://i.ibb.co/FWBZvwD/team-1.png' className='team-list'/>
                <img src='https://i.ibb.co/JnVsBHt/team-2.png' className='team-list'/>
                <img src='https://i.ibb.co/F69myZW/team-3.png' className='team-list'/>
                </div>

                <Footer />
                </div>
    )
}

export default TeamPage;