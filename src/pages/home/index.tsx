import { useRef } from 'react';
import{ AiOutlineArrowUp } from 'react-icons/ai'
import { Slide, SlideshowRef } from 'react-slideshow-image';
import { Link } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';
import './style.css'

const ScreemHome = () => {
    const slideRef = useRef<SlideshowRef>(null)
    return (
        <>
            <Slide indicators={true} ref={slideRef}>
                <div className='home-box'>
                    <h1>Bem vindo!</h1>
                    <img src="https://redacaonline.com.br/blog/wp-content/uploads/2021/11/checklist-redacao-enem.jpg" alt="" />
                    <p>Organize seu dia com Tudu.</p>
                </div>
                <div className='home-box'>
                    <img src="https://serespecial.org.br/wp-content/uploads/2021/03/Checklist.jpg" alt="" />
                </div>
                <div className='home-box'>
                    <img src="https://i.pinimg.com/736x/01/5b/b0/015bb09dbe1f0a24d9ddc50bf4c4b4b9.jpg" alt="" />
                </div>
                <div className='home-box'>
                    <img src="https://pontomais.com.br/materiais-educativos/wp-content/uploads/2021/12/check-list.png" alt="" />
                </div>
            </Slide>
            <button className="box-auth" >
                <Link to="/login">
                    <AiOutlineArrowUp/>
                </Link>
            <div className='border-footer'> </div>
            </button>
        </>
    );
};

export default ScreemHome;