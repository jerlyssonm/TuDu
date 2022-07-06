import { Link, useNavigate } from 'react-router-dom'
import './style.css'

const Register = () =>{

    const navigate = useNavigate();
    const handleNavigate = (link:string) =>{
        navigate(link)
    }
    return (
        <div className='box-register'>            
            <form>
                <Link to="/">__</Link>
                <h1>Cadastrar</h1>
                <label htmlFor="">Nome</label>
                <input type="text" />
                <label htmlFor="">E-mail</label>
                <input type="text" />
                <label htmlFor="">Senha</label>
                <input type="password" />
                <label htmlFor="">Repetir senha</label>
                <input type="password" />
                <div className='box-btn'>
                    <button onClick={()=>handleNavigate('/dashboard')}>
                        Cadastrar 
                    </button>
                    <button>Continuar com Google</button>
                    <Link to="/login">já tenho conta</Link>
                </div>
            </form>
            <div className='border-footer'> </div>

        </div>
    )
}

export default Register
