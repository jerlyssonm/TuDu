import { Link } from 'react-router-dom'
import './style.css'

const Register = () =>{
    return (
        <div className='box-register'>            
            <form>
                <Link to="/">__</Link>
                <h2>Cadastrar</h2>
                <label htmlFor="">Nome</label>
                <input type="text" />
                <label htmlFor="">E-mail</label>
                <input type="text" />
                <label htmlFor="">Senha</label>
                <input type="password" />
                <label htmlFor="">Repetir senha</label>
                <input type="password" />
                <div className='box-btn'>
                    <button>Cadastrar</button>
                    <button>Continuar com Google</button>
                    <Link to="/login">já tenho conta</Link>
                </div>
            </form>
            <span>_____________</span>
        </div>
    )
}

export default Register
