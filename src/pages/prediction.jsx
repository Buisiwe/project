import { useState } from 'react';
import { useForm } from 'react-hook-form';
import LeftSideBar from '../components/left-side-bar';
import RightSideBar from '../components/right-side-bar';
// import '../styles/prediction.css';


function Prediction() {

    const { handleSubmit } = useForm();
    const { state, setState } = useState;

    const predictionHandler = ({ radiusmean, texturemean, perimetermean, areamean, compactnessmean, concavitymean, perimeterse, arease, textureworst, perimeterworst, compactnessworst, concavityworst }) => {
        // create data to be sent to the api for validation
        let userinput = {
            radiusmean: radiusmean,
            texturemean: texturemean,
            perimetermean: perimetermean,
            areamean: areamean,
            compactnessmean: compactnessmean,
            concavitymean: concavitymean,
            perimeterse: perimeterse,
            arease: arease,
            textureworst: textureworst,
            perimeterworst: perimeterworst,
            compactnessworst: compactnessworst,
            // areamean: areamean,
            concavityworst: concavityworst
        };

        fetch(
            'https://ace-breastcancer-prediction.herokuapp.com/predict', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userinput),
        })

            .then(res => res.json())
            .then(result => {
                setState(prev => {
                    return {
                        ...prev,
                        posts: [result, ...prev.posts],
                    };
                });
            });
    };


    return (
        <>
            <div className="dashboard-container">
                <LeftSideBar />
                <div>
                    <div>
                    <h2>Prediction Test</h2>
                    <p>Please fill the form below for your prediction.
                        Note that this is a sample application <br /> and cannot be used as a substitute for real medical advice.</p>
                </div>

                <form onSubmit={handleSubmit(predictionHandler)}>
                    <div className='input-section'>
                        <p className='test'>radius-mean</p>
                        <input type='number' name='radiusmean' step='0.01' required />

                        <p className='test'>texture-mean</p>
                        <input type='number' name='texturemean' step='0.01' required />

                        <p className='test'>perimeter-mean</p>
                        <input type='number' name='perimetermean' step='0.01' required />

                        <p className='test'>area-mean</p>
                        <input type='number' name='areamean' step='0.01' required />

                        <p className='test'>compactness-mean</p>
                        <input type='number' name='compactnessmean' step='0.01' required />

                        <p className='test'>concavity-mean</p>
                        <input type='number' name='concavitymean' step='0.01' required />

                        <p className='test'>perimeter-se</p>
                        <input type='number' name='perimeterse' step='0.01' required />

                        <p className='test'>area-se</p>
                        <input type='number' name='arease' step='0.01' required />

                        <p className='test'>texture-worst</p>
                        <input type='number' name='textureworst' step='0.01' required />

                        <p className='test'>perimeter-worst</p>
                        <input type='number' name='perimeterworst' step='0.01' required />

                        <p className='test'>compactness-worst</p>
                        <input type='number' name='compactnessworst' step='0.01' required />

                        {/* <p className='test'>area-mean</p>
        <input type='number' name='areamean' required /> */}

                        <p className='test'>concavity-worst</p>
                        <input type='number' name='concavityworst' step='0.01' required />

                    </div>

                    <div>
                        <button className='prediction-button' type='submit'>
                            Get Result</button>
                    </div>

                </form>
                </div>
                <RightSideBar/>
            </div>
        </>
    )
}

export default Prediction;