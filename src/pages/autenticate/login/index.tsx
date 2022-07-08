import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import { DB } from '../../../assets/api';
import { useForm } from 'react-hook-form';

const Login = () =>{
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleNavigate = (link:string) =>{
        navigate(link)
    }
    const onSubmit = (data: any) => {
        const user = DB.filter(item => (item.email == data.email && item.password == data.password))
        if (user[0]) {
            console.log("Logando")
            handleNavigate('/dashboard')
        }else{
            console.log("dados invalidos")
        }
    }
    return (
        <div className='box-login'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Link to="/">__</Link>
                <h1>Entrar</h1>
                <label htmlFor="">E-mail</label>
                <input type="text" {...register("email")}/>
                <label htmlFor="">Senha</label>
                <input type="password" {...register("password")}/>
                <div className='box-btn'>
                    <button type='submit'>Entrar</button>
                    <button>Entrar com google</button>
                    <Link to="/register">Não tenho conta</Link>
                </div>
            </form>
            <div className='border-footer'> </div>
        </div>
    )
}

export default Login
