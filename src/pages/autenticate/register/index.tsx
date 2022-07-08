import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import { DB } from '../../../assets/api';
import './style.css'

const Register = () =>{
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        const user = DB.filter(item => item.email == data.email)
        if (user[0]) {
            console.log("Email ja Existe")
        }else{
            data["id"] = DB.length + 1
            data["img"]= ""
            data["tasks"] = []
            DB.push(data)
            console.log("Usuario cadastrado")
            handleNavigate("/login")
        }
    }
    const handleNavigate = (link:string) =>{
        navigate(link)
    }
    return (
        <div className='box-register'>            
            <form onSubmit={handleSubmit(onSubmit)}>
                <Link to="/">__</Link>
                <h1>Cadastrar</h1>
                <label htmlFor="">Nome</label>
                <input type="text" {...register("name")} />
                <label htmlFor="">E-mail</label>
                <input type="text" {...register("email")}/>
                <label htmlFor="">Senha</label>
                <input type="password" {...register("password")}/>
                <label htmlFor="">Repetir senha</label>
                <input type="password" />
                <div className='box-btn'>
                    <button type='submit'>
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
