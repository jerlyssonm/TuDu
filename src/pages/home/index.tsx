import { useRef } from 'react';
import{ AiOutlineArrowUp } from 'react-icons/ai'
import { Slide, SlideshowRef } from 'react-slideshow-image';
import { useUser } from '../../context/user';
import { Link } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';
import './style.css'

const ScreemHome = () => {
    const slideRef = useRef<SlideshowRef>(null)
    const { openClose, open } = useUser()
    return (
        <>
            <Slide indicators={true} ref={slideRef}>
                <div className='home-box'>
                    <h1>Bem vindo!</h1>
                    <img src="src/assets/imgs/home.jpg" alt="" />
                    <p>Organize seu dia com Tudu.</p>
                </div>
                <div className='home-box'>
                    <img src="src/assets/imgs/two-home.jpg" alt="" />
                </div>
                <div className='home-box'>
                    <img src="src/assets/imgs/tree-home.jpg" alt="" />
                </div>
                <div className='home-box'>
                    <img src="src/assets/imgs/four-home.png" alt="" />
                </div>
            </Slide>
            <button className="box-auth" >
                <Link to="/login">
                    <AiOutlineArrowUp/>
                </Link>
                <span>_____________</span>
            </button>
        </>
    );
};

export default ScreemHome;