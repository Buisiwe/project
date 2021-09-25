import React from 'react';
import '../styles/teampage.css';
import Footer from '../components/footer';
import TopNavigation from '../components/top-navigation';

<<<<<<< HEAD
const TeamPage = () => {
	return (
		<div className='team-body'>
			<div>
				<TopNavigation />
			</div>

			<h1 className='meet'>Meet The Team</h1>

			<div className='row'>
					<div className='card'>
						<img src='https://i.ibb.co/Z2wN4TR/angela.png' alt='angela' style={{width: '100%'}} />
						<div className='profile'>
							<h3 className='name'>Angela Dairo</h3>
							<p class='title'>Product Manager</p>
					    </div>
				    </div>

					<div className='card'>
						<img src='https://i.ibb.co/4fYCtmn/ruqayat.png' alt='ruqayat' style={{width: '100%'}} />
						<div className='profile'>
							<h3 className='name'>Ruqayat Ajibade</h3>
							<p class='title'>Software Developer</p>
					    </div>
				    </div>

                    <div className='card'>
						<img src='https://i.ibb.co/WKSTQ8F/taiwo.png' alt='taiwo' style={{ width: '100%' }} />
						<div className='profile'>
							<h3 className='name'>Taiwo Famakinde</h3>
							<p class='title'>Software Developer</p>
					    </div>
				    </div>

                    <div className='card'>
						<img src='https://i.ibb.co/zVFS6CD/buisiwe.png' alt='buisiwe' style={{ width: '100%' }} />
						<div className='profile'>
							<h3 className='name'>Buisiwe Matee</h3>
							<p class='title'>Software Developer</p>
					    </div>
				    </div>

                    <div className='card'>
						<img src='https://i.ibb.co/Y7Qbmq0/stella.png' alt='stella' style={{ width: '100%' }} />
						<div className='profile'>
							<h3 className='name'>Stella Njoroge</h3>
							<p class='title'>Software Developer</p>
					    </div>
				    </div>

                    <div className='card'>
						<img src='https://i.ibb.co/ryDH6Rk/nwamaka.png' alt='nwamaka' style={{ width: '100%' }} />
						<div className='profile'>
							<h3 className='name'>Nwamaka Akah</h3>
							<p class='title'>Product Designer</p>
					    </div>
				    </div>

					<div className='card'>
						<img src='https://i.ibb.co/XS77pJM/kehinde.png' alt='kehinde' style={{ width: '100%' }} />
						<div className='profile'>
							<h3 className='name'>Kehinde Adesina</h3>
							<p class='title'>Product Designer</p>
					    </div>
				    </div>

                    <div className='card'>
						<img src='https://i.ibb.co/h7rsFKr/aya.png' alt='aya' style={{ width: '100%' }} />
						<div className='profile'>
							<h3 className='name'>Aya Mohammed</h3>
							<p class='title'>Product Designer</p>
					    </div>
				    </div>

                    <div className='card'>
						<img src='https://i.ibb.co/gDvkQfF/marvellos.png' alt='marvellous' style={{ width: '100%' }} />
						<div className='profile'>
							<h3 className='name'>Marvellous Alonge</h3>
							<p class='title'>Product Designer</p>
					    </div>
				    </div>

                    <div className='card'>
						<img src='https://i.ibb.co/gdxGyx3/kate.png' alt='kate' style={{ width: '100%' }} />
						<div className='profile'>
							<h3 className='name'>Kate Ogochukwu</h3>
							<p class='title'>Data Scientist</p>
					    </div>
				    </div>

                    <div className='card'>
						<img src='https://i.ibb.co/XZ9Fy6x/mercy.png' alt='mercy' style={{ width: '100%' }} />
						<div className='profile'>
							<h3 className='name'>Saniamo Mercy</h3>
							<p class='title'>Data Scientist</p>
					    </div>
				    </div>

					<div className='card'>
						<img src='https://i.ibb.co/DpYbNJ7/cheje.png' alt='chege' style={{ width: '100%' }} />
						<div className='profile'>
							<h3 className='name'>Chege Jacinta</h3>
							<p class='title'>Data Scientist</p>
					    </div>
				    </div>

                    <div className='card'>
						<img src='https://i.ibb.co/dk5D7q4/heba.png' alt='heba' style={{ width: '100%' }} />
						<div className='profile'>
							<h3 className='name'>Heba Kamel</h3>
							<p class='title'>Data Scientist</p>
					    </div>
				    </div>

                    <div className='card'>
						<img src='https://i.ibb.co/HBnVQ8R/habiba.png' alt='habiba' style={{ width: '100%' }} />
						<div className='profile'>
							<h3 className='name'>Habiba Sarhan</h3>
							<p class='title'>Data Scientist</p>
					    </div>
				    </div>

                    <div className='card'>
						<img src='https://i.ibb.co/80zGVML/lamis.png' alt='lamis' style={{ width: '100%' }} />
						<div className='profile'>
							<h3 className='name'>Lamis GabAllah</h3>
							<p class='title'>Cyber Security Engineer</p>
					    </div>
				    </div>

                    <div className='card'>
						<img src='https://i.ibb.co/tX15D36/virtuous.png' alt='virtuous' style={{ width: '100%' }} />
						<div className='profile'>
							<h3 className='name'>Virtuous Faanny</h3>
							<p class='title'>Cyber Security Engineer</p>
					    </div>
				    </div>

					<div className='card'>
						<img src='https://i.ibb.co/0Q0LTpf/hassna.png' alt='hasnaa' style={{ width: '100%' }} />
						<div className='profile'>
							<h3 className='name'>Hasnaa Sameh</h3>
							<p class='title'>Cyber Security Engineer</p>
					    </div>
				    </div>
			</div>

			<Footer />
		</div>
	);
};

export default TeamPage;
=======
const TeamPage =() => {
    return(
<div className='team-body'>
				<div>
					<TopNavigation />
				</div>

                <h1 className="meet">Meet The Team</h1>

                <div className="team-container">
                <img src='https://i.ibb.co/FWBZvwD/team-1.png' alt="" className='team-list'/>
                <img src='https://i.ibb.co/JnVsBHt/team-2.png' alt="" className='team-list'/>
                <img src='https://i.ibb.co/F69myZW/team-3.png' alt="" className='team-list'/>
                </div>

                <Footer />
                </div>
    )
}

export default TeamPage;
>>>>>>> 941a39503eaa9caf37e9b631329edbeb5c075675
