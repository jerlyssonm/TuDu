import './style.css'
import { Link } from 'react-router-dom'

const Login = () =>{
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
                    <button>Entrar</button>
                    <button>Entrar com google</button>
                    <Link to="/register">Não tenho conta</Link>
                </div>
            </form>
            <span>_____________</span>
        </div>
    )
}

export default Login
