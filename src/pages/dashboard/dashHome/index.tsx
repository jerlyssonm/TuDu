import './style.css'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useUser } from '../../../context/user'

const DashHome =() => {
    const {openCloseTask} = useUser()
    return (
        <div className="dashHome">
            <div className='head'>
                <span></span>
                <h1>Tarefas</h1>
                <div className="search-box">
                    <input type="text" className="input-search" placeholder="Digite aqui..."/>
                    <Link className="icon" to=""><AiOutlineSearch/></Link>
                </div>
            </div>
            <div className='box-task'>
                <h2>A FAZER</h2>
                <div className='task type1' onClick={()=>openCloseTask(true)}>
                    <input type="checkbox" className='check'/>
                    <div>
                        <h5>Desafio de Desigh UI/UX</h5>
                        <p>Descrição descrição descrição</p>
                    </div>
                </div>
                <div className='task type2' onClick={()=>openCloseTask(true)}>
                    <input type="checkbox" className='check'/>
                    <div>
                        <h5>Entrevista com a Empresa</h5>
                        <p>Descrição descrição descrição</p>
                    </div>
                </div>
                <div className='task type3' onClick={()=>openCloseTask(true)}>
                    <input type="checkbox" className='check'/>
                    <div>
                        <h5>Contratação</h5>
                        <p>Descrição descrição descrição</p>
                    </div>
                </div>
                <span className='all-span'>Ver todos</span>
            </div>
            <div className='box-progress'>
                <h2>EM PROGRESSO</h2>
                <div className="scroll">
                    <div className="percent type2" onClick={()=>openCloseTask(true)}>
                        <h5>Entrevista</h5>
                        <p>Descrição des...</p>
                    </div>
                    <div className="percent type1" onClick={()=>openCloseTask(true)}>
                        <h5>Desafio</h5>
                        <p>Descrição des...</p>
                    </div>
                    <div className="percent type3" onClick={()=>openCloseTask(true)}>
                        <h5>Contratação</h5>
                        <p>Descrição des...</p>
                    </div>
                </div>
                <span className='all-span'>Ver todos</span>
            </div>
            <div className="completed">
                <h2>CONCLUÍDO</h2>
                <div className='task box-completed'>
                    <input type="checkbox" checked className='check' />
                    <div>
                        <h6>Incrições</h6>
                        <p>Descrição descrição descrição</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashHome
