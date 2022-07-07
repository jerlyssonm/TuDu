import './style.css'
import { 
    AiOutlineCalendar,
    AiOutlineTag,
    AiOutlineTeam,
    AiOutlinePaperClip,
    MdSubdirectoryArrowRight
} from "react-icons/all";
import { useUser } from '../../../context/user';
const FormTask = () => {
    const {openCloseForm} = useUser()
    return(
        <div className='box-formTask'>
            <span></span>
            <h1>Criar tarefa</h1>
            <div className="formulary">
                <form className="form-task">
                    <a onClick={()=>openCloseForm(false)}>__</a>
                    <div className="form-input input-title">                    
                        <input type="text" placeholder="Digite o titulo" />
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder="Adcione uma descrição (opcional)"/>
                    </div>
                    <div className="form-input">
                        <AiOutlineCalendar/>
                        <input type="text" placeholder="Inserir Prazo" />
                    </div>
                    <div className="form-input">
                        <AiOutlineTag />
                        <input type="text" placeholder="inserir categoria" />
                    </div>
                    <div className="form-input">
                        <AiOutlineTeam />
                        <input type="text" placeholder="Adicionar membros" />
                    </div> 
                    <div className="form-input">
                        <AiOutlinePaperClip />
                        <input type="text" placeholder="Inserir Anexos" />
                    </div>   
                    <hr />
                    <div className="sub-tasks">
                        <input type="checkbox" />
                        <label >sub-tarefas exemplos</label>
                    </div>
                    <div className="form-input">
                        <MdSubdirectoryArrowRight />
                        <input type="text" placeholder="Adcionar sub-tarefas" />
                    </div>
                </form>
                <span>Criar</span>
            </div>
        </div>
    )
}

export default FormTask;