import './style.css'
import { Link, useNavigate } from 'react-router-dom'

const Login = () =>{

    const navigate = useNavigate();
    const handleNavigate = (link:string) =>{
        navigate(link)
    }
    return (
        <div className='box-login'>
            <form>
                <Link to="/">__</Link>
                <h1>Entrar</h1>
                <label htmlFor="">E-mail</label>
                <input type="text" />
                <label htmlFor="">Senha</label>
                <input type="password" />
                <div className='box-btn'>
                    <button onClick={()=>handleNavigate('/dashboard')}>Entrar</button>
                    <button>Entrar com google</button>
                    <Link to="/register">Não tenho conta</Link>
                </div>
            </form>
            <div className='border-footer'> </div>
        </div>
    )
}

export default Login
